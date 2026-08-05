import { createServer } from 'node:http';
import { createReadStream, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { PRERENDER_ROUTES } from './prerender-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const buildDir = join(root, 'build');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon',
};

function contentType(filePath) {
  return MIME[extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function startStaticServer() {
  const indexHtml = join(buildDir, 'index.html');
  if (!existsSync(indexHtml)) {
    throw new Error(`Missing ${indexHtml}. Run vite build first.`);
  }

  const server = createServer((req, res) => {
    const url = new URL(req.url || '/', 'http://127.0.0.1');
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';

    const candidates = [
      join(buildDir, pathname),
      join(buildDir, pathname + '.html'),
      join(buildDir, pathname, 'index.html'),
      indexHtml,
    ];

    const filePath = candidates.find((p) => existsSync(p) && statSync(p).isFile());
    if (!filePath) {
      res.writeHead(404).end('Not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType(filePath) });
    createReadStream(filePath).pipe(res);
  });

  return new Promise((resolveListen) => {
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolveListen({ server, port });
    });
  });
}

function outputPathForRoute(route) {
  if (route === '/') return join(buildDir, 'index.html');
  const clean = route.replace(/^\/+|\/+$/g, '');
  return join(buildDir, clean, 'index.html');
}

function finalizeHtml(rawHtml) {
  let html = rawHtml;
  html = html.replace(/\?prerender=1/g, '');
  if (!html.includes('data-prerendered=')) {
    html = html.replace(/<html([^>]*)>/i, '<html$1 data-prerendered="true">');
  } else {
    html = html.replace(/data-prerendered="[^"]*"/i, 'data-prerendered="true"');
  }
  // No-JS: never leave the intro splash covering content forever.
  if (!html.includes('data-prerender-noscript')) {
    html = html.replace(
      '</head>',
      `<noscript data-prerender-noscript><style>[data-splash-overlay]{display:none!important}</style></noscript></head>`,
    );
  }
  return html;
}

async function prerenderRoute(page, baseUrl, route) {
  const url = `${baseUrl}${route === '/' ? '/' : route}?prerender=1`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90_000 });
  await page.waitForFunction(
    () => {
      const root = document.getElementById('root');
      return Boolean(root && root.textContent && root.textContent.trim().length > 80);
    },
    { timeout: 60_000 },
  );
  // Let SEOHead useEffect flush title/meta/JSON-LD into <head>.
  await page.waitForTimeout(150);
  const html = finalizeHtml(await page.content());
  const out = outputPathForRoute(route);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html, 'utf8');
  return out;
}

async function main() {
  const shell = readFileSync(join(buildDir, 'index.html'), 'utf8');
  if (!shell.includes('id="root"')) {
    throw new Error('Unexpected build/index.html — missing #root');
  }

  const { server, port } = await startStaticServer();
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Prerender server on ${baseUrl}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const failures = [];
  for (const route of PRERENDER_ROUTES) {
    try {
      const out = await prerenderRoute(page, baseUrl, route);
      console.log(`✓ ${route} → ${out.replace(root + '\\', '').replace(root + '/', '')}`);
    } catch (err) {
      console.error(`✗ ${route}`, err);
      failures.push(route);
    }
  }

  await browser.close();
  server.close();

  if (failures.length) {
    console.error(`Prerender failed for ${failures.length} route(s):`, failures.join(', '));
    process.exit(1);
  }

  console.log(`Prerendered ${PRERENDER_ROUTES.length} routes.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
