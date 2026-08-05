import { createServer } from 'node:http';
import { createReadStream, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRERENDER_ROUTES } from './prerender-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const buildDir = join(root, 'build');
const onVercel = Boolean(process.env.VERCEL);

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
  if (!html.includes('data-prerender-noscript')) {
    html = html.replace(
      '</head>',
      `<noscript data-prerender-noscript><style>[data-splash-overlay]{display:none!important}</style></noscript></head>`,
    );
  }
  return html;
}

async function launchBrowser() {
  // Vercel build images lack Playwright system libs (e.g. libnspr4). Use Sparticuz Chromium there.
  if (onVercel) {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteer = (await import('puppeteer-core')).default;
    // Required for newer Sparticuz builds in constrained environments.
    if (typeof chromium.setGraphicsMode === 'function') {
      chromium.setGraphicsMode(false);
    }
    const browser = await puppeteer.launch({
      args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
      defaultViewport: chromium.defaultViewport ?? { width: 1280, height: 800 },
      executablePath: await chromium.executablePath(),
      headless: true,
    });
    return { kind: 'puppeteer', browser };
  }

  const { chromium } = await import('playwright');
  const browser = await chromium.launch({ headless: true });
  return { kind: 'playwright', browser };
}

async function prerenderRoutePlaywright(page, baseUrl, route) {
  const url = `${baseUrl}${route === '/' ? '/' : route}?prerender=1`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90_000 });
  await page.waitForFunction(
    () => {
      const root = document.getElementById('root');
      return Boolean(root && root.textContent && root.textContent.trim().length > 80);
    },
    { timeout: 60_000 },
  );
  await page.waitForTimeout(150);
  return finalizeHtml(await page.content());
}

async function prerenderRoutePuppeteer(page, baseUrl, route) {
  const url = `${baseUrl}${route === '/' ? '/' : route}?prerender=1`;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 90_000 });
  await page.waitForFunction(
    () => {
      const root = document.getElementById('root');
      return Boolean(root && root.textContent && root.textContent.trim().length > 80);
    },
    { timeout: 60_000 },
  );
  await new Promise((r) => setTimeout(r, 150));
  return finalizeHtml(await page.content());
}

async function main() {
  const shell = readFileSync(join(buildDir, 'index.html'), 'utf8');
  if (!shell.includes('id="root"')) {
    throw new Error('Unexpected build/index.html - missing #root');
  }

  const { server, port } = await startStaticServer();
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Prerender server on ${baseUrl} (${onVercel ? 'vercel/sparticuz' : 'local/playwright'})`);

  const { kind, browser } = await launchBrowser();
  const page =
    kind === 'playwright'
      ? await (await browser.newContext()).newPage()
      : await browser.newPage();

  const failures = [];
  for (const route of PRERENDER_ROUTES) {
    try {
      const html =
        kind === 'playwright'
          ? await prerenderRoutePlaywright(page, baseUrl, route)
          : await prerenderRoutePuppeteer(page, baseUrl, route);
      const out = outputPathForRoute(route);
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, html, 'utf8');
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
