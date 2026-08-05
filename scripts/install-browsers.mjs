/**
 * Install Playwright Chromium for local prerender only.
 * On Vercel we use @sparticuz/chromium (system libs are not available for Playwright).
 */
import { execSync } from 'node:child_process';

if (process.env.VERCEL) {
  console.log('Skipping Playwright browser install on Vercel (using @sparticuz/chromium).');
  process.exit(0);
}

try {
  execSync('npx playwright install chromium', { stdio: 'inherit' });
} catch (err) {
  console.warn('Playwright Chromium install failed. Local `npm run build` prerender may not work until it succeeds.');
  process.exit(0);
}
