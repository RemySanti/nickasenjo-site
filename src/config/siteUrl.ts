/** Canonical production origin used for OG, Twitter, and JSON-LD. */
export const SITE_URL = 'https://nickasenjofilms.com';

/** Strong still from the homepage reel (YouTube hero). */
export const DEFAULT_OG_IMAGE = 'https://img.youtube.com/vi/YUjmJMtXu3k/maxresdefault.jpg';

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return SITE_URL;
  return `${SITE_URL}${normalized.replace(/\/+$/, '')}`;
}

export function pathForPage(currentPage: string): string {
  const map: Record<string, string> = {
    home: '/',
    'ads-lp': '/lp',
    work: '/work-page',
    services: '/services',
    contact: '/contact',
    about: '/about',
    blog: '/blog',
    sitemap: '/sitemap',
    'owner-dashboard': '/owner-dashboard',
    'lehigh-valley-health': '/lehigh-valley-health',
    'services-main': '/services-main',
    commercial: '/service-commercial',
    narrative: '/service-narrative',
    documentary: '/service-documentary',
    'music-video-detail': '/service-music-video',
    'corporate-detail': '/service-corporate',
    'commercial-video-detail': '/service-commercial-video',
    'brand-story-service': '/service-brand-story',
    'social-video-service': '/service-social-video',
    'weddings-events-service': '/service-weddings-events',
    'studio-retainer-service': '/service-studio-retainer',
    'the-platform': '/the-platform',
    'commercial-photo-landing': '/service-commercial-photo',
    'blog-post-1': '/blog-video-production-lehigh-valley-2025',
    'blog-post-2': '/blog-corporate-vs-cinematic',
    'blog-post-3': '/blog-prepare-video-shoot-allentown',
    'blog-post-4': '/blog-video-marketing-roi-pennsylvania',
    'blog-post-5': '/blog-behind-scenes-production-company',
    'video-allentown': '/video-allentown',
    'video-bethlehem': '/video-bethlehem',
    'video-easton': '/video-easton',
    'video-emmaus': '/video-emmaus',
    'video-whitehall': '/video-whitehall',
    'video-nyc': '/video-nyc',
    'video-philadelphia': '/video-philadelphia',
    'video-new-jersey': '/video-new-jersey',
    'video-miami': '/video-miami',
    'video-orlando': '/video-orlando',
    'video-chicago': '/video-chicago',
    'video-los-angeles': '/video-los-angeles',
    'city-whitehall': '/city-whitehall',
  };
  return map[currentPage] ?? '/';
}
