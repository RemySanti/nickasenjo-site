/**
 * Browserless prerender for Vercel (and local).
 * Injects real title/meta/JSON-LD and crawlable body copy into each route's HTML
 * without launching Chromium (Playwright fails on Vercel: missing libnspr4).
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRERENDER_ROUTES } from './prerender-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const buildDir = join(root, 'build');

const SITE_URL = 'https://nickasenjo.com';
const OG_IMAGE = 'https://img.youtube.com/vi/YUjmJMtXu3k/maxresdefault.jpg';
const PHONE_DISPLAY = '(610) 844-8696';
const PHONE_TEL = 'tel:+16108448696';

/** Per-route SEO + crawlable body. Falls back to home copy when missing. */
const PAGE_CONTENT = {
  '/': {
    title: 'The Premier Video Production Company | Nick Asenjo Films',
    description:
      "Nick Asenjo Films is Allentown's premier video production company. Specializing in commercial, narrative, and documentary filmmaking. Serving Lehigh Valley, PA.",
    ogTitle: 'The Premier Video Production Company',
    h1: 'Nick Asenjo Films',
    lead: 'Premier video production in Allentown, PA. Cinematic stories for brands across the Lehigh Valley.',
  },
  '/lp': {
    title: 'Cinematic Video Production | Videographer Near Me | Allentown & Lehigh Valley',
    description:
      'Your story deserves cinema, not content. Nick Asenjo Films - twenty years behind the lens. Downtown Allentown studio serving the Lehigh Valley. Book a discovery call.',
    ogTitle: 'Cinematic Video Production | Nick Asenjo Films',
    h1: 'Cinematic Video Production',
    lead: 'Your story deserves cinema, not content. We build films people feel. Twenty years behind the lens. Downtown Allentown studio serving the Lehigh Valley.',
  },
  '/work-page': {
    title: 'Portfolio | Nick Asenjo Films',
    description: 'Watch selected commercial, brand, music, wedding, and social work from Nick Asenjo Films.',
    ogTitle: 'Portfolio | Nick Asenjo Films',
    h1: 'Portfolio',
    lead: 'Commercial, brand, and cinematic work from Allentown and the Lehigh Valley.',
  },
  '/services': {
    title: 'Video Services | Nick Asenjo Films | Allentown & Lehigh Valley',
    description:
      'Explore video services by outcome: commercial campaigns, brand films, social content, music videos, and production partnerships.',
    ogTitle: 'Video Services | Nick Asenjo Films',
    h1: 'Video Services',
    lead: 'Commercial, brand, social, and music video production based in Allentown, PA.',
  },
  '/contact': {
    title: 'Contact | Nick Asenjo Films | Allentown Video Production',
    description: 'Contact Nick Asenjo Films for commercial, brand, social, music, and event video in Allentown and the Lehigh Valley.',
    ogTitle: 'Contact | Nick Asenjo Films',
    h1: 'Contact',
    lead: 'Start your Allentown or Lehigh Valley video project. Call or send project details.',
  },
  '/about': {
    title: 'About | Nick Asenjo Films | Allentown, PA',
    description: 'Learn about Nick Asenjo Films: Lehigh Valley video production with a cinematic standard.',
    ogTitle: 'About | Nick Asenjo Films',
    h1: 'About Nick Asenjo Films',
    lead: 'Twenty years behind the lens. Downtown Allentown studio serving the Lehigh Valley.',
  },
  '/the-platform': {
    title: 'The Platform | Nick Asenjo Films',
    description: 'The Platform music video show and podcast from Nick Asenjo Films.',
    ogTitle: 'The Platform | Nick Asenjo Films',
    h1: 'The Platform',
    lead: 'Music video show and podcast from Nick Asenjo Films in Allentown, PA.',
  },
};

function contentFor(route) {
  if (PAGE_CONTENT[route]) return PAGE_CONTENT[route];
  const slug = route.replace(/^\//, '').replace(/-/g, ' ');
  const label = slug ? slug.replace(/\b\w/g, (c) => c.toUpperCase()) : 'Nick Asenjo Films';
  return {
    title: `${label} | Nick Asenjo Films`,
    description: `${label} from Nick Asenjo Films - cinematic video production in Allentown and the Lehigh Valley.`,
    ogTitle: `${label} | Nick Asenjo Films`,
    h1: label,
    lead: 'Cinematic video production based in downtown Allentown, serving the Lehigh Valley.',
  };
}

function absoluteUrl(path) {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path.replace(/\/+$/, '')}`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Nick Asenjo Films',
    image: OG_IMAGE,
    url: SITE_URL,
    telephone: '+1-610-844-8696',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '532 Hamilton St Suite 7',
      addressLocality: 'Allentown',
      addressRegion: 'PA',
      postalCode: '18101',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Allentown' },
      { '@type': 'AdministrativeArea', name: 'Lehigh Valley' },
      { '@type': 'State', name: 'Pennsylvania' },
    ],
  };
}

function bodyMarkup(route, page) {
  const isLp = route === '/lp';
  return `
<div id="root" data-prerender-shell="true">
  <main style="font-family:Georgia,serif;background:#0B0B0B;color:#F7F3EB;min-height:100vh;padding:2.5rem 1.25rem 4rem;max-width:42rem;margin:0 auto;">
    <p style="letter-spacing:0.2em;text-transform:uppercase;font-size:0.7rem;opacity:0.7;">Nick Asenjo Films</p>
    <h1 style="font-size:clamp(2rem,8vw,3.5rem);line-height:1.05;margin:1rem 0;">${escapeHtml(page.h1)}</h1>
    <p style="font-size:1.15rem;line-height:1.5;opacity:0.85;margin:0 0 1.5rem;">${escapeHtml(page.lead)}</p>
    ${
      isLp
        ? `<p style="opacity:0.7;margin:0 0 1.5rem;">Commercial video. Brand films. Social media video. Music videos. Downtown Allentown studio serving the Lehigh Valley.</p>
           <p><a href="#contact" style="color:#BC271C;">Start With a Discovery Call</a></p>
           <section id="view-our-work"><h2>Selected work</h2><p>Commercial and brand films for brands that refuse to look ordinary.</p></section>
           <section id="commercial-video"><h2>Commercial Video</h2><p>Spots, launches, and campaigns built to move people to act.</p></section>
           <section id="brand-films"><h2>Brand Films</h2><p>Story that builds real trust, more than a pretty montage.</p></section>
           <section id="social-media-video"><h2>Social Media Video</h2><p>Hooks, pacing, and platform craft, shot for the feed.</p></section>
           <section id="music-videos"><h2>Music Videos</h2><p>From treatment to final grade, treat your release like a premiere.</p></section>
           <section id="contact"><h2>Start with a discovery call</h2><p>Our downtown Allentown studio is ready to listen.</p></section>`
        : `<p><a href="${PHONE_TEL}" style="color:#BC271C;">${PHONE_DISPLAY}</a></p>`
    }
    <p style="margin-top:2rem;opacity:0.55;font-size:0.9rem;">532 Hamilton St Suite 7, Allentown, PA 18101 · <a href="${PHONE_TEL}" style="color:inherit;">${PHONE_DISPLAY}</a></p>
  </main>
</div>`.trim();
}

function upsertMeta(html, attr, key, content) {
  const re = new RegExp(`<meta[^>]*${attr}=["']${key}["'][^>]*>`, 'i');
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
}

function upsertLink(html, rel, href) {
  const re = new RegExp(`<link[^>]*rel=["']${rel}["'][^>]*>`, 'i');
  const tag = `<link rel="${rel}" href="${escapeHtml(href)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
}

function applyHead(html, route, page) {
  const canonical = absoluteUrl(route);
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
  out = upsertMeta(out, 'name', 'description', page.description);
  out = upsertMeta(out, 'property', 'og:title', page.ogTitle || page.title);
  out = upsertMeta(out, 'property', 'og:description', page.description);
  out = upsertMeta(out, 'property', 'og:type', 'website');
  out = upsertMeta(out, 'property', 'og:url', canonical);
  out = upsertMeta(out, 'property', 'og:image', OG_IMAGE);
  out = upsertMeta(out, 'name', 'twitter:card', 'summary_large_image');
  out = upsertMeta(out, 'name', 'twitter:title', page.ogTitle || page.title);
  out = upsertMeta(out, 'name', 'twitter:description', page.description);
  out = upsertMeta(out, 'name', 'twitter:image', OG_IMAGE);
  out = upsertLink(out, 'canonical', canonical);

  const ld = `<script type="application/ld+json" data-seo-ld="local">${JSON.stringify(localBusinessJsonLd())}</script>`;
  out = out.replace(/<script[^>]*data-seo-ld=["']local["'][^>]*>[\s\S]*?<\/script>/i, '');
  out = out.replace(/<\/head>/i, `    ${ld}\n  </head>`);

  if (!out.includes('data-prerendered=')) {
    out = out.replace(/<html([^>]*)>/i, '<html$1 data-prerendered="true">');
  } else {
    out = out.replace(/data-prerendered="[^"]*"/i, 'data-prerendered="true"');
  }

  if (!out.includes('data-prerender-noscript')) {
    out = out.replace(
      '</head>',
      `<noscript data-prerender-noscript><style>[data-splash-overlay]{display:none!important}</style></noscript></head>`,
    );
  }

  return out;
}

function applyBody(html, route, page) {
  const shell = bodyMarkup(route, page);
  if (/<div id="root"[^>]*>[\s\S]*?<\/div>\s*(?=<script)/i.test(html)) {
    return html.replace(/<div id="root"[^>]*>[\s\S]*?<\/div>\s*(?=<script)/i, `${shell}\n    `);
  }
  // Vite often leaves an empty root before module script in body
  return html.replace(/<div id="root"><\/div>/i, shell);
}

function outputPathForRoute(route) {
  if (route === '/') return join(buildDir, 'index.html');
  const clean = route.replace(/^\/+|\/+$/g, '');
  return join(buildDir, clean, 'index.html');
}

function main() {
  const indexPath = join(buildDir, 'index.html');
  if (!existsSync(indexPath)) {
    throw new Error(`Missing ${indexPath}. Run vite build first.`);
  }

  const shellHtml = readFileSync(indexPath, 'utf8');
  if (!shellHtml.includes('id="root"')) {
    throw new Error('Unexpected build/index.html - missing #root');
  }

  for (const route of PRERENDER_ROUTES) {
    const page = contentFor(route);
    let html = applyHead(shellHtml, route, page);
    html = applyBody(html, route, page);
    const out = outputPathForRoute(route);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, html, 'utf8');
    console.log(`✓ ${route} → ${out.replace(root + '\\', '').replace(root + '/', '')}`);
  }

  console.log(`Prerendered ${PRERENDER_ROUTES.length} routes (browserless).`);
}

main();
