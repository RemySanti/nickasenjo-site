import { useEffect } from 'react';
import { OWNER_EMAIL } from '../config/siteContact';
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  pathForPage,
  SITE_URL,
} from '../config/siteUrl';
import {
  getLocalServiceOfferingByPage,
  SEO_BY_SERVICE_PAGE,
} from '../data/localServiceOfferingConfigs';

type PageSeo = {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
};

const HOME_SEO: PageSeo = {
  title: 'The Premier Video Production Company | Nick Asenjo Films',
  description:
    "Nick Asenjo Films is Allentown's premier video production company. Specializing in commercial, narrative, and documentary filmmaking. Serving Lehigh Valley, PA. 5.0★ rated with 166+ reviews.",
  keywords:
    'video production Allentown, video production Lehigh Valley, commercial video Allentown PA, film production Pennsylvania, videographer Allentown, corporate video Lehigh Valley, Nick Asenjo Films',
  ogTitle: 'The Premier Video Production Company',
  ogDescription:
    'Premier video production company in Allentown, PA. Creating cinematic stories for brands. Commercial, narrative, and documentary production.',
};

/** Core site pages that benefit from unique titles (not outcome service landings) */
const STATIC_PAGE_SEO: Record<string, PageSeo> = {
  'ads-lp': {
    title: 'Cinematic Video Production | Videographer Near Me | Allentown & Lehigh Valley',
    description:
      'Your story deserves cinema, not content. Nick Asenjo Films - twenty years behind the lens. Downtown Allentown studio serving the Lehigh Valley. Book a discovery call.',
    keywords:
      'videographer near me Allentown, cinematic video production Lehigh Valley, commercial videographer Allentown PA, brand film Allentown, Nick Asenjo Films',
    ogTitle: 'Cinematic Video Production | Nick Asenjo Films',
    ogDescription:
      'Your story deserves cinema, not content. We build films people feel. Downtown Allentown studio serving the Lehigh Valley.',
  },
  services: {
    title: 'Video Services by Goal | Nick Asenjo Films | Allentown & Lehigh Valley',
    description:
      'Explore video services by outcome: commercial campaigns, brand films, social content, music videos, weddings, and ongoing production partnerships. Based in Allentown, PA, serving the Lehigh Valley.',
    keywords:
      'video production services Allentown, Lehigh Valley video company, brand film PA, social video production, Nick Asenjo Films services',
    ogTitle: 'Video Services | Nick Asenjo Films',
    ogDescription:
      'Choose your goal. Our Allentown team matches format, crew, and deliverables for Lehigh Valley brands and artists.',
  },
  work: {
    title: 'Portfolio | Commercial, Brand, Social & More | Nick Asenjo Films',
    description:
      'Watch selected commercial, brand, music, wedding, and social work from Nick Asenjo Films. Cinematic video production based in Allentown, PA.',
    keywords:
      'video production portfolio Lehigh Valley, commercial reel Allentown, wedding film portfolio PA, Nick Asenjo Films',
    ogTitle: 'Portfolio | Nick Asenjo Films',
    ogDescription: 'Cinematic work samples from the Lehigh Valley and beyond.',
  },
  contact: {
    title: 'Contact | Nick Asenjo Films | Allentown Video Production',
    description:
      'Contact Nick Asenjo Films for commercial, brand, social, music, and event video in Allentown and the Lehigh Valley. Phone, email, and project details.',
    keywords:
      'contact video production Allentown, Nick Asenjo Films phone, Lehigh Valley videographer contact',
    ogTitle: 'Contact | Nick Asenjo Films',
    ogDescription: 'Start your Allentown or Lehigh Valley video project: call or email our team.',
  },
  about: {
    title: 'About | Nick Asenjo Films | Allentown, PA',
    description:
      'Learn about Nick Asenjo Films: Lehigh Valley video production with a cinematic standard. Story, team, and approach.',
    keywords: 'about Nick Asenjo Films, Allentown production company, Lehigh Valley filmmaker',
    ogTitle: 'About | Nick Asenjo Films',
    ogDescription: 'The story behind Nick Asenjo Films and our work across Pennsylvania.',
  },
  narrative: {
    title: 'Narrative Film Production | Nick Asenjo Films',
    description:
      'Narrative and scripted film production services from Nick Asenjo Films. Allentown-based cinematic storytelling.',
    keywords: 'narrative film production PA, short film Allentown, scripted video Lehigh Valley',
    ogTitle: 'Narrative Production | Nick Asenjo Films',
    ogDescription: 'Scripted narrative production with cinematic craft.',
  },
  documentary: {
    title: 'Documentary Production | Nick Asenjo Films | Lehigh Valley',
    description:
      'Documentary-style video production for brands and organizations: truth-driven stories from Nick Asenjo Films in Allentown, PA.',
    keywords: 'documentary video production Allentown, brand documentary PA, Lehigh Valley',
    ogTitle: 'Documentary | Nick Asenjo Films',
    ogDescription: 'Documentary production rooted in authentic storytelling.',
  },
  'services-main': {
    title: 'Production Formats | Commercial, Narrative & More | Nick Asenjo Films',
    description:
      'Browse video production by format (commercial, narrative, documentary, music, and corporate) from Nick Asenjo Films, Allentown PA.',
    keywords:
      'commercial video formats, narrative production Allentown, documentary crew Lehigh Valley, Nick Asenjo Films',
    ogTitle: 'Services by Format | Nick Asenjo Films',
    ogDescription: 'Explore our production formats and specialty lanes.',
  },
  blog: {
    title: 'Blog | Video Production Insights | Nick Asenjo Films',
    description:
      'Articles on video production, brand film strategy, and Lehigh Valley marketing from Nick Asenjo Films.',
    keywords: 'video production blog, Allentown marketing video, Lehigh Valley film tips',
    ogTitle: 'Blog | Nick Asenjo Films',
    ogDescription: 'Insights for brands and creators investing in video.',
  },
  'owner-dashboard': {
    title: 'Owner Dashboard | Nick Asenjo Films',
    description: 'Internal build and lead tools for Nick Asenjo Films - not indexed for search.',
    keywords: 'owner dashboard',
    ogTitle: 'Owner Dashboard',
    ogDescription: 'Internal tools for Nick Asenjo Films.',
  },
  'video-allentown': {
    title: 'Allentown Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video production in Allentown, PA: campaigns, launches, and brand films from a downtown Hamilton Street crew serving the Lehigh Valley.',
    keywords:
      'commercial video Allentown PA, video production Allentown, Lehigh Valley commercial, Nick Asenjo Films Allentown',
    ogTitle: 'Allentown Commercial Video | Nick Asenjo Films',
    ogDescription: 'Hyper-local commercial video production for Allentown and the Lehigh Valley.',
  },
  'video-bethlehem': {
    title: 'Bethlehem Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video in Bethlehem, PA - SteelStacks, campuses, hospitality, and industrial brands with cinematic craft.',
    keywords: 'commercial video Bethlehem PA, Bethlehem video production, Lehigh Valley commercial',
    ogTitle: 'Bethlehem Commercial Video | Nick Asenjo Films',
    ogDescription: 'Commercial video production tailored to Bethlehem businesses and venues.',
  },
  'video-easton': {
    title: 'Easton Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video in Easton, PA - waterfront, Lafayette College, Centre Square, and Delaware River corridor storytelling.',
    keywords: 'commercial video Easton PA, Easton PA videographer, Lehigh Valley commercial',
    ogTitle: 'Easton Commercial Video | Nick Asenjo Films',
    ogDescription: 'Easton-focused commercial video production and campaigns.',
  },
  'video-emmaus': {
    title: 'Emmaus Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video in Emmaus, PA - Main Street retail, restaurants, and professional services with a local-first approach.',
    keywords: 'commercial video Emmaus PA, Emmaus video production, Lehigh Valley',
    ogTitle: 'Emmaus Commercial Video | Nick Asenjo Films',
    ogDescription: 'Commercial video for Emmaus and the Lehigh Valley.',
  },
  'video-whitehall': {
    title: 'Whitehall Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video in Whitehall and the Lehigh Valley Mall corridor - retail, automotive, and commercial real estate content.',
    keywords: 'commercial video Whitehall PA, Whitehall Township video production',
    ogTitle: 'Whitehall Commercial Video | Nick Asenjo Films',
    ogDescription: 'Commercial video production for Whitehall Township and nearby markets.',
  },
  'video-nyc': {
    title: 'NYC Commercial Video Production | Nick Asenjo Films | New York City',
    description:
      'Commercial video production for New York City: Manhattan, Brooklyn, and metro campaigns. Nick Asenjo Films is Allentown-based and travels for NYC shoots, launches, and brand films.',
    keywords:
      'commercial video production NYC, New York City commercial videographer, Manhattan brand film, Brooklyn video production company, tri-state commercial video, Nick Asenjo Films NYC',
    ogTitle: 'NYC Commercial Video | Nick Asenjo Films',
    ogDescription: 'Commercial and campaign video for New York City brands - cinematic production from our PA studio.',
  },
  'video-philadelphia': {
    title: 'Philadelphia Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video in Philadelphia and Greater Philly - campaigns, launches, and brand films. Nick Asenjo Films is Lehigh Valley-based and travels for Philly shoots and multi-market deliverables.',
    keywords:
      'commercial video Philadelphia PA, Philadelphia video production company, Center City brand film, Nick Asenjo Films Philadelphia',
    ogTitle: 'Philadelphia Commercial Video | Nick Asenjo Films',
    ogDescription: 'Commercial and campaign video for Philadelphia brands - travel-ready crew from Pennsylvania.',
  },
  'video-new-jersey': {
    title: 'New Jersey Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video statewide in New Jersey - Newark, Jersey City, Hoboken, Shore, and Princeton corridor. Nick Asenjo Films travels from PA for NJ launches, franchises, and regional campaigns.',
    keywords:
      'commercial video New Jersey, NJ video production company, Jersey City commercial videographer, Newark brand film, Nick Asenjo Films New Jersey',
    ogTitle: 'New Jersey Commercial Video | Nick Asenjo Films',
    ogDescription: 'Commercial video production for New Jersey markets - cinematic craft and organized logistics.',
  },
  'video-miami': {
    title: 'Miami Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video in Miami-Dade - hospitality, real estate, lifestyle, and corporate campaigns. Nick Asenjo Films flies crews for Miami shoots with premium finishing from our PA studio.',
    keywords:
      'commercial video Miami FL, Miami video production company, South Florida brand film, Brickell corporate video, Nick Asenjo Films Miami',
    ogTitle: 'Miami Commercial Video | Nick Asenjo Films',
    ogDescription: 'Commercial and campaign video for Miami brands - bilingual-friendly, location-aware production.',
  },
  'video-orlando': {
    title: 'Orlando Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video in Greater Orlando - conventions, hospitality, sports-adjacent, and B2B campaigns. Nick Asenjo Films travels for Orlando productions with disciplined pre-production.',
    keywords:
      'commercial video Orlando FL, Orlando video production company, convention video Orlando, Nick Asenjo Films Orlando',
    ogTitle: 'Orlando Commercial Video | Nick Asenjo Films',
    ogDescription: 'Commercial video for Orlando venues, events, and regional headquarters.',
  },
  'video-chicago': {
    title: 'Chicago Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video in Chicago and Chicagoland - Loop, River North, innovation corridors, and suburbs. Nick Asenjo Films travels from Pennsylvania for Chicago shoots and agency collaborations.',
    keywords:
      'commercial video Chicago IL, Chicago video production company, Chicagoland brand film, Nick Asenjo Films Chicago',
    ogTitle: 'Chicago Commercial Video | Nick Asenjo Films',
    ogDescription: 'Commercial and campaign video for Chicago brands - Midwest clarity, national polish.',
  },
  'video-los-angeles': {
    title: 'Los Angeles Commercial Video Production | Nick Asenjo Films',
    description:
      'Commercial video in Los Angeles County - campaign, brand, and launch films. Nick Asenjo Films is Pennsylvania-based and flies west for LA productions and multi-coast campaigns.',
    keywords:
      'commercial video Los Angeles, LA video production company, Los Angeles County brand film, Nick Asenjo Films Los Angeles',
    ogTitle: 'Los Angeles Commercial Video | Nick Asenjo Films',
    ogDescription: 'Commercial video for Los Angeles - organized production and cinematic finishing.',
  },
};

const DEFAULT_SERVICE_TYPES = [
  'Video Production',
  'Commercial Video Production',
  'Narrative Film Production',
  'Documentary Production',
  'Music Video Production',
  'Corporate Video Production',
];

function resolveSeo(currentPage: string): PageSeo {
  const fromService = SEO_BY_SERVICE_PAGE[currentPage];
  if (fromService) {
    return {
      title: fromService.title,
      description: fromService.description,
      keywords: fromService.keywords,
      ogTitle: fromService.ogTitle,
      ogDescription: fromService.ogDescription,
    } satisfies PageSeo;
  }
  const fromStatic = STATIC_PAGE_SEO[currentPage];
  if (fromStatic) return fromStatic;
  return HOME_SEO;
}

function resolveServiceTypes(currentPage: string): string[] {
  const offering = getLocalServiceOfferingByPage(currentPage);
  if (offering) {
    const merged = [...DEFAULT_SERVICE_TYPES, ...offering.seo.schemaServiceTypes];
    return [...new Set(merged)];
  }
  return DEFAULT_SERVICE_TYPES;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
}

type SEOHeadProps = {
  currentPage: string;
};

export function SEOHead({ currentPage }: SEOHeadProps) {
  useEffect(() => {
    const seo = resolveSeo(currentPage);
    const pagePath = pathForPage(currentPage);
    const canonical = absoluteUrl(pagePath);

    document.title = seo.title;

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords);
    upsertMeta('property', 'og:title', seo.ogTitle);
    upsertMeta('property', 'og:description', seo.ogDescription);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE);
    upsertMeta('property', 'og:locale', 'en_US');
    upsertMeta('property', 'og:site_name', 'Nick Asenjo Films');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.ogTitle);
    upsertMeta('name', 'twitter:description', seo.ogDescription);
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE);
    upsertMeta('name', 'geo.region', 'US-PA');
    upsertMeta('name', 'geo.placename', 'Allentown');
    upsertMeta('name', 'geo.position', '40.6084;-75.4902');
    upsertMeta('name', 'ICBM', '40.6084, -75.4902');

    upsertLink('canonical', canonical);

    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (currentPage === 'owner-dashboard') {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else if (robotsMeta) {
      robotsMeta.remove();
    }

    document.querySelector('script[data-seo-ld="business"]')?.remove();
    document.querySelector('script[data-seo-ld="local"]')?.remove();

    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Nick Asenjo Films',
      image: DEFAULT_OG_IMAGE,
      '@id': `${SITE_URL}/#localbusiness`,
      url: SITE_URL,
      telephone: '+1-610-844-8696',
      email: OWNER_EMAIL,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '532 Hamilton St Suite 7',
        addressLocality: 'Allentown',
        addressRegion: 'PA',
        postalCode: '18101',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.6084,
        longitude: -75.4902,
      },
      areaServed: [
        { '@type': 'City', name: 'Allentown' },
        { '@type': 'City', name: 'Bethlehem' },
        { '@type': 'City', name: 'Easton' },
        { '@type': 'City', name: 'Emmaus' },
        { '@type': 'City', name: 'Whitehall' },
        { '@type': 'AdministrativeArea', name: 'Lehigh Valley' },
        { '@type': 'State', name: 'Pennsylvania' },
      ],
    };

    const localScript = document.createElement('script');
    localScript.type = 'application/ld+json';
    localScript.setAttribute('data-seo-ld', 'local');
    localScript.text = JSON.stringify(localBusiness);
    document.head.appendChild(localScript);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-ld', 'business');
    const ldPayload = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Nick Asenjo Films',
      image: DEFAULT_OG_IMAGE,
      '@id': SITE_URL,
      url: SITE_URL,
      telephone: '+1-610-844-8696',
      email: OWNER_EMAIL,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '532 Hamilton St Suite 7',
        addressLocality: 'Allentown',
        addressRegion: 'PA',
        postalCode: '18101',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.6084,
        longitude: -75.4902,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
      sameAs: [
        'https://www.facebook.com/nickasenjofilms',
        'https://www.instagram.com/nickasenjofilms',
        'https://www.linkedin.com/company/nickasenjofilms',
        'https://www.youtube.com/@yothatstheplatform',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '166',
      },
      areaServed: [
        { '@type': 'City', name: 'Allentown' },
        { '@type': 'City', name: 'Bethlehem' },
        { '@type': 'City', name: 'Easton' },
        { '@type': 'City', name: 'Emmaus' },
        { '@type': 'City', name: 'Whitehall' },
        { '@type': 'AdministrativeArea', name: 'Lehigh Valley' },
        { '@type': 'State', name: 'Pennsylvania' },
      ],
      serviceType: resolveServiceTypes(currentPage),
    };
    script.text = JSON.stringify(ldPayload);
    document.head.appendChild(script);

    document.querySelector('script[data-seo-ld="faq"]')?.remove();
    const offering = getLocalServiceOfferingByPage(currentPage);
    if (offering?.faq.length) {
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-seo-ld', 'faq');
      faqScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: offering.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      });
      document.head.appendChild(faqScript);
    }

    return () => {
      document.querySelector('script[data-seo-ld="business"]')?.remove();
      document.querySelector('script[data-seo-ld="local"]')?.remove();
      document.querySelector('script[data-seo-ld="faq"]')?.remove();
    };
  }, [currentPage]);

  return null;
}
