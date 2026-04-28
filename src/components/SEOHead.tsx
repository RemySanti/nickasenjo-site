import { useEffect } from 'react';
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
  title: 'Nick Asenjo Films | Premier Video Production Company in Allentown, PA',
  description:
    "Nick Asenjo Films is Allentown's premier video production company. Specializing in commercial, narrative, and documentary filmmaking. Serving Lehigh Valley, PA. 5.0★ rated with 166+ reviews.",
  keywords:
    'video production Allentown, video production Lehigh Valley, commercial video Allentown PA, film production Pennsylvania, videographer Allentown, corporate video Lehigh Valley, Nick Asenjo Films',
  ogTitle: 'Nick Asenjo Films | Video Production Allentown, PA',
  ogDescription:
    'Premier video production company in Allentown, PA. Creating cinematic stories for brands. Commercial, narrative, and documentary production.',
};

/** Core site pages that benefit from unique titles (not outcome service landings) */
const STATIC_PAGE_SEO: Record<string, PageSeo> = {
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

type SEOHeadProps = {
  currentPage: string;
};

export function SEOHead({ currentPage }: SEOHeadProps) {
  useEffect(() => {
    const seo = resolveSeo(currentPage);

    document.title = seo.title;

    const metaTags: { name?: string; property?: string; content: string }[] = [
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords },
      { property: 'og:title', content: seo.ogTitle },
      { property: 'og:description', content: seo.ogDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'geo.region', content: 'US-PA' },
      { name: 'geo.placename', content: 'Allentown' },
      { name: 'geo.position', content: '40.6084;-75.4902' },
      { name: 'ICBM', content: '40.6084, -75.4902' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      if (!value) return;

      let meta = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    const existingScript = document.querySelector('script[data-seo-ld="business"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-ld', 'business');
    const ldPayload = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Nick Asenjo Films',
      image: 'https://nickasenjofilms.com/logo.png',
      '@id': 'https://nickasenjofilms.com',
      url: 'https://nickasenjofilms.com',
      telephone: '+1-610-844-8696',
      email: 'nickasenjofilms@gmail.com',
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
      document.querySelector('script[data-seo-ld="faq"]')?.remove();
    };
  }, [currentPage]);

  return null;
}
