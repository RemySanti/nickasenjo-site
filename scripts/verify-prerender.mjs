import { createServer } from 'node:http';
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildDir = resolve(__dirname, '../build');

const CHECKS = [
  {
    route: '/',
    file: 'index.html',
    mustInclude: [
      'Meet Nick Asenjo Films',
      'og:image',
      'rel="canonical"',
      'LocalBusiness',
      'twitter:card',
      '(610) 844-8696',
    ],
  },
  {
    route: '/services',
    file: 'services/index.html',
    mustInclude: ['Video Services', 'og:url', 'canonical', '(610) 844-8696'],
  },
  {
    route: '/contact',
    file: 'contact/index.html',
    mustInclude: ['Contact', 'canonical', 'og:image'],
  },
  {
    route: '/about',
    file: 'about/index.html',
    mustInclude: ['About', 'Nick Asenjo', 'canonical'],
  },
  {
    route: '/work-page',
    file: 'work-page/index.html',
    mustInclude: ['Portfolio', 'canonical'],
  },
  {
    route: '/video-allentown',
    file: 'video-allentown/index.html',
    mustInclude: ['Allentown Commercial Video', 'canonical', 'og:image'],
  },
];

function assertFile(check) {
  const html = readFileSync(join(buildDir, check.file), 'utf8');
  const missing = check.mustInclude.filter((needle) => !html.includes(needle));
  if (missing.length) {
    throw new Error(`${check.route} missing: ${missing.join(', ')}`);
  }
  if (!html.includes('id="root"')) {
    throw new Error(`${check.route} missing #root`);
  }
  const rootIdx = html.indexOf('id="root"');
  const afterRoot = html.slice(rootIdx, rootIdx + 5000);
  if (afterRoot.includes('id="root"></div>') || afterRoot.replace(/\s/g, '').length < 250) {
    throw new Error(`${check.route} root appears empty`);
  }
  console.log(`✓ raw HTML ${check.route}`);
}

function startServer() {
  const indexHtml = join(buildDir, 'index.html');
  const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
  };
  const server = createServer((req, res) => {
    const url = new URL(req.url || '/', 'http://127.0.0.1');
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';
    const candidates = [
      join(buildDir, pathname),
      join(buildDir, pathname, 'index.html'),
      indexHtml,
    ];
    const filePath = candidates.find((p) => existsSync(p) && statSync(p).isFile());
    if (!filePath) {
      res.writeHead(404).end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
    createReadStream(filePath).pipe(res);
  });
  return new Promise((resolveListen) => {
    server.listen(0, '127.0.0.1', () => resolveListen({ server, port: server.address().port }));
  });
}

for (const check of CHECKS) assertFile(check);

const { server, port } = await startServer();
const browser = await chromium.launch({ headless: true });

const noJs = await browser.newContext({ javaScriptEnabled: false });
const noJsPage = await noJs.newPage();
await noJsPage.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'domcontentloaded' });
const noJsText = await noJsPage.locator('body').innerText();
if (!noJsText.includes('Meet Nick Asenjo Films')) {
  throw new Error('JS-disabled homepage missing main heading');
}
console.log('✓ JS-disabled homepage shows content');

const jsPage = await browser.newPage();
const consoleIssues = [];
jsPage.on('pageerror', (err) => consoleIssues.push(err.message));
jsPage.on('console', (msg) => {
  if (/hydrat|mismatch|Minified React error/i.test(msg.text())) {
    consoleIssues.push(msg.text());
  }
});
for (const check of CHECKS) {
  await jsPage.goto(`http://127.0.0.1:${port}${check.route}`, { waitUntil: 'networkidle' });
  await jsPage.waitForTimeout(400);
}
if (consoleIssues.length) {
  throw new Error(`Client errors:\n${consoleIssues.join('\n')}`);
}
console.log('✓ JS-on load: no hydration/React mismatch errors');

const homeHtml = readFileSync(join(buildDir, 'index.html'), 'utf8');
for (const tag of ['og:title', 'og:description', 'og:url', 'og:type', 'og:image', 'twitter:card', 'twitter:image']) {
  if (!homeHtml.includes(tag)) throw new Error(`Missing ${tag} on homepage`);
}
console.log('✓ OG/Twitter preview tags present on homepage');

await browser.close();
server.close();
console.log('All prerender verification checks passed.');
