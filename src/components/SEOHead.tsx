import { useEffect } from 'react';

export function SEOHead() {
  useEffect(() => {
    // Update document title
    document.title = 'Nick Asenjo Films | Premier Video Production Company in Allentown, PA';

    // Update or create meta tags
    const metaTags = [
      { name: 'description', content: 'Nick Asenjo Films is Allentown\'s premier video production company. Specializing in commercial, narrative, and documentary filmmaking. Serving Lehigh Valley, PA. 5.0★ rated with 166+ reviews.' },
      { name: 'keywords', content: 'video production Allentown, video production Lehigh Valley, commercial video Allentown PA, film production Pennsylvania, videographer Allentown, corporate video Lehigh Valley, Nick Asenjo Films' },
      { property: 'og:title', content: 'Nick Asenjo Films | Video Production Allentown, PA' },
      { property: 'og:description', content: 'Premier video production company in Allentown, PA. Creating cinematic stories for brands. Commercial, narrative, and documentary production.' },
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
      
      let meta = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Add JSON-LD structured data for local business
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Nick Asenjo Films',
      image: 'https://nickasenjofilms.com/logo.png',
      '@id': 'https://nickasenjofilms.com',
      url: 'https://nickasenjofilms.com',
      telephone: '+1-610-844-8696',
      email: 'nick@nickasenjofilms.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '532 Hamilton St Suite 7',
        addressLocality: 'Allentown',
        addressRegion: 'PA',
        postalCode: '18101',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.6084,
        longitude: -75.4902
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '21:00'
      },
      sameAs: [
        'https://www.facebook.com/nickasenjofilms',
        'https://www.instagram.com/nickasenjofilms',
        'https://www.linkedin.com/company/nickasenjofilms',
        'https://www.youtube.com/@yothatstheplatform'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '166'
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Allentown'
        },
        {
          '@type': 'City',
          name: 'Bethlehem'
        },
        {
          '@type': 'City',
          name: 'Easton'
        },
        {
          '@type': 'State',
          name: 'Pennsylvania'
        }
      ],
      serviceType: [
        'Video Production',
        'Commercial Video Production',
        'Narrative Film Production',
        'Documentary Production',
        'Music Video Production',
        'Corporate Video Production'
      ]
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
