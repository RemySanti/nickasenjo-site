import { REGIONAL_COMMERCIAL_VIDEO_SLUGS } from '../data/regionalCommercialVideoMarkets';

export function normalizeRouteSegment(value: string) {
  return value.replace(/^\/+|\/+$/g, '');
}

export type ResolvedRoute = {
  currentPage: string;
  eventSlug: string;
  citySlug: string;
};

/**
 * Pure route resolver - safe to call during the first client render so
 * prerendered HTML and hydration agree on which page to show.
 */
export function resolveRoute(routeSegment: string): ResolvedRoute {
  const route = normalizeRouteSegment(routeSegment);
  let currentPage = 'home';
  let eventSlug = '';
  let citySlug = '';

  if (route.startsWith('event-') && route.split('-').length >= 3) {
    const parts = route.split('-');
    eventSlug = parts.slice(1, parts.length - 1).join('-');
    citySlug = parts[parts.length - 1];
    currentPage = 'event-service';
  } else if (route.startsWith('city-') && route.endsWith('-events')) {
    citySlug = route.replace('city-', '').replace('-events', '');
    currentPage = 'city-events';
  } else if (route.startsWith('event-')) {
    eventSlug = route.replace('event-', '');
    currentPage = 'event-type';
  } else if (route === 'lp' || route === 'ads' || route === 'videographer-near-me') {
    currentPage = 'ads-lp';
  } else if (route === 'work-page') {
    currentPage = 'work';
  } else if (route === 'services') {
    currentPage = 'services';
  } else if (route === 'service-commercial' || route === 'services-commercial') {
    currentPage = 'commercial';
  } else if (route === 'service-narrative') {
    currentPage = 'narrative';
  } else if (route === 'service-documentary') {
    currentPage = 'documentary';
  } else if (route === 'service-music-video') {
    currentPage = 'music-video-detail';
  } else if (route === 'service-corporate') {
    currentPage = 'corporate-detail';
  } else if (route === 'contact') {
    currentPage = 'contact';
  } else if (route === 'services-main') {
    currentPage = 'services-main';
  } else if (route === 'service-commercial-video') {
    currentPage = 'commercial-video-detail';
  } else if (route === 'service-brand-story') {
    currentPage = 'brand-story-service';
  } else if (route === 'service-social-video') {
    currentPage = 'social-video-service';
  } else if (route === 'service-weddings-events') {
    currentPage = 'weddings-events-service';
  } else if (route === 'service-production-partner' || route === 'service-studio-retainer') {
    currentPage = 'studio-retainer-service';
  } else if (route === 'the-platform') {
    currentPage = 'the-platform';
  } else if (route === 'service-commercial-photo') {
    currentPage = 'commercial-photo-landing';
  } else if (route === 'city-allentown') {
    currentPage = 'city-allentown';
  } else if (route === 'city-bethlehem') {
    currentPage = 'city-bethlehem';
  } else if (route === 'city-easton') {
    currentPage = 'city-easton';
  } else if (route === 'city-emmaus') {
    currentPage = 'city-emmaus';
  } else if (route === 'city-whitehall') {
    currentPage = 'city-whitehall';
  } else if (
    route === 'service-commercial-video-allentown' ||
    route === 'video-allentown' ||
    route === 'allentown-video-production'
  ) {
    currentPage = 'video-allentown';
  } else if (
    route === 'service-commercial-video-bethlehem' ||
    route === 'video-bethlehem' ||
    route === 'bethlehem-video-production'
  ) {
    currentPage = 'video-bethlehem';
  } else if (
    route === 'service-commercial-video-easton' ||
    route === 'video-easton' ||
    route === 'easton-video-production'
  ) {
    currentPage = 'video-easton';
  } else if (
    route === 'service-commercial-video-emmaus' ||
    route === 'video-emmaus' ||
    route === 'emmaus-video-production'
  ) {
    currentPage = 'video-emmaus';
  } else if (
    route === 'service-commercial-video-whitehall' ||
    route === 'video-whitehall' ||
    route === 'whitehall-video-production'
  ) {
    currentPage = 'video-whitehall';
  } else if (
    route === 'service-commercial-video-nyc' ||
    route === 'video-nyc' ||
    route === 'nyc-video-production' ||
    route === 'new-york-city-video-production'
  ) {
    currentPage = 'video-nyc';
  } else {
    const regionalSlug = REGIONAL_COMMERCIAL_VIDEO_SLUGS.find(
      (s) =>
        route === `service-commercial-video-${s}` ||
        route === `video-${s}` ||
        route === `${s}-video-production`,
    );
    if (regionalSlug) {
      currentPage = `video-${regionalSlug}`;
    } else if (route === 'service-commercial-photo-allentown') {
      currentPage = 'photo-allentown';
    } else if (route === 'service-commercial-photo-bethlehem') {
      currentPage = 'photo-bethlehem';
    } else if (route === 'service-commercial-photo-easton') {
      currentPage = 'photo-easton';
    } else if (route === 'service-commercial-photo-emmaus') {
      currentPage = 'photo-emmaus';
    } else if (route === 'service-commercial-photo-whitehall') {
      currentPage = 'photo-whitehall';
    } else if (route === 'events') {
      currentPage = 'events';
    } else if (route === 'blog') {
      currentPage = 'blog';
    } else if (route === 'blog-video-production-lehigh-valley-2025') {
      currentPage = 'blog-post-1';
    } else if (route === 'blog-corporate-vs-cinematic') {
      currentPage = 'blog-post-2';
    } else if (route === 'blog-prepare-video-shoot-allentown') {
      currentPage = 'blog-post-3';
    } else if (route === 'blog-video-marketing-roi-pennsylvania') {
      currentPage = 'blog-post-4';
    } else if (route === 'blog-behind-scenes-production-company') {
      currentPage = 'blog-post-5';
    } else if (route === 'about') {
      currentPage = 'about';
    } else if (route === 'sitemap') {
      currentPage = 'sitemap';
    } else if (route === 'lehigh-valley-health') {
      currentPage = 'lehigh-valley-health';
    } else if (route === 'owner-dashboard') {
      currentPage = 'owner-dashboard';
    } else {
      currentPage = 'home';
    }
  }

  return { currentPage, eventSlug, citySlug };
}

export function readInitialRoute(): ResolvedRoute {
  if (typeof window === 'undefined') {
    return { currentPage: 'home', eventSlug: '', citySlug: '' };
  }
  const pathnameSegment = normalizeRouteSegment(window.location.pathname);
  const hashSegment = normalizeRouteSegment(window.location.hash.substring(1));
  return resolveRoute(pathnameSegment || hashSegment);
}

/** True when hydrating a build-time snapshot or running the prerender crawler. */
export function shouldSkipIntroSplash(): boolean {
  if (typeof window === 'undefined') return true;
  if (document.documentElement.dataset.prerendered === 'true') return true;
  try {
    if (new URLSearchParams(window.location.search).has('prerender')) return true;
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
