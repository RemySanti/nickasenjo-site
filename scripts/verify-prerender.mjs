import { existsSync, readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildDir = resolve(__dirname, '../build');

const CHECKS = [
  {
    route: '/',
    file: 'index.html',
    mustInclude: ['Nick Asenjo Films', 'og:image', 'canonical', 'LocalBusiness', 'data-prerendered'],
  },
  {
    route: '/lp',
    file: 'lp/index.html',
    mustInclude: [
      'Cinematic Video Production',
      'id="view-our-work"',
      'id="commercial-video"',
      'id="brand-films"',
      'id="contact"',
      'og:image',
      'canonical',
    ],
  },
  {
    route: '/services',
    file: 'services/index.html',
    mustInclude: ['Video Services', 'canonical', 'og:image'],
  },
  {
    route: '/contact',
    file: 'contact/index.html',
    mustInclude: ['Contact', 'canonical'],
  },
];

for (const check of CHECKS) {
  const path = join(buildDir, check.file);
  if (!existsSync(path)) throw new Error(`Missing ${check.file}`);
  const html = readFileSync(path, 'utf8');
  const missing = check.mustInclude.filter((n) => !html.includes(n));
  if (missing.length) throw new Error(`${check.route} missing: ${missing.join(', ')}`);
  if (!html.includes('id="root"') && !html.includes("id='root'")) {
    throw new Error(`${check.route} missing root`);
  }
  console.log(`✓ raw HTML ${check.route}`);
}

console.log('All browserless prerender checks passed.');
