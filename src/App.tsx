import { useState, useEffect, useRef } from 'react';
import './styles/globals.css';
import { SplashLogoTransition } from './components/SplashLogoTransition';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WorkShowcase } from './components/WorkShowcase';
import { WorkGallery } from './components/WorkGallery';
import { AboutSection } from './components/AboutSection';
import { AboutTextSection } from './components/AboutTextSection';
import { LogoCarouselSection } from './components/LogoCarouselSection';
import { OurClientsSection } from './components/OurClientsSection';
import { LetsCollaborateSection } from './components/LetsCollaborateSection';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { ServicesLandingPage } from './components/ServicesLandingPage';
import { AboutPage } from './components/AboutPage';

// Blog
import { Blog } from './components/Blog';
import { BlogPost1 } from './components/BlogPost1';
import { BlogPost2 } from './components/BlogPost2';
import { BlogPost3 } from './components/BlogPost3';
import { BlogPost4 } from './components/BlogPost4';
import { BlogPost5 } from './components/BlogPost5';

// Sitemap & Dashboard
import { SiteMapPage } from './components/SiteMapPageNew';
import { OwnerDashboardPage } from './components/OwnerDashboardPage';

// Portfolio
import { LehighValleyHealthPage } from './components/portfolio/LehighValleyHealthPage';

// New Commercial Services
import { ServicesMainLanding } from './components/services/ServicesMainLanding';
import { CommercialVideoLanding } from './components/services/CommercialVideoLanding';
import { CommercialPhotoLanding } from './components/services/CommercialPhotoLanding';

// Service Detail Pages
import { NarrativePage } from './components/services/NarrativePage';
import { DocumentaryPage } from './components/services/DocumentaryPage';
import { CommercialPage } from './components/services/CommercialPage';
import { CorporatePage } from './components/services/CorporatePage';

// City Video Pages
import { AllentownVideoPage } from './components/services/cities/AllentownVideoPage';
import { BethlehemVideoPage } from './components/services/cities/BethlehemVideoPage';
import { EastonVideoPage } from './components/services/cities/EastonVideoPage';
import { EmmausVideoPage } from './components/services/cities/EmmausVideoPage';
import { WhitehallVideoPage } from './components/services/cities/WhitehallVideoPage';
import { NycVideoPage } from './components/services/cities/NycVideoPage';
import { RegionalCommercialVideoPage } from './components/services/cities/RegionalCommercialVideoPage';
import { REGIONAL_COMMERCIAL_VIDEO_SLUGS } from './data/regionalCommercialVideoMarkets';
import {
  ServiceBrandStoryPage,
  ServiceCommercialVideoPage,
  ServiceMusicVideoPage,
  ServiceSocialVideoPage,
  ServiceStudioRetainerPage,
  ServiceThePlatformShowPage,
  ServiceWeddingsEventsPage,
} from './components/services/ServiceOutcomePages';

function normalizeRouteSegment(value: string) {
  return value.replace(/^\/+|\/+$/g, '');
}

export default function App() {
  const desktopLogoAnchorRef = useRef<HTMLDivElement>(null);
  const mobileLogoAnchorRef = useRef<HTMLDivElement>(null);
  const [splashComplete, setSplashComplete] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [currentPage, setCurrentPage] = useState('home');
  const [eventSlug, setEventSlug] = useState<string>('');
  const [citySlug, setCitySlug] = useState<string>('');

  useEffect(() => {
    const resolveRoute = (routeSegment: string) => {
      const route = normalizeRouteSegment(routeSegment);

      // Check for event-city combinations first (e.g., event-weddings-allentown)
      if (route.startsWith('event-') && route.split('-').length >= 3) {
        const parts = route.split('-');
        const eventPart = parts.slice(1, parts.length - 1).join('-');
        const cityPart = parts[parts.length - 1];
        setEventSlug(eventPart);
        setCitySlug(cityPart);
        setCurrentPage('event-service');
      } else if (route.startsWith('city-') && route.endsWith('-events')) {
        const cityPart = route.replace('city-', '').replace('-events', '');
        setCitySlug(cityPart);
        setCurrentPage('city-events');
      } else if (route.startsWith('event-')) {
        const eventPart = route.replace('event-', '');
        setEventSlug(eventPart);
        setCurrentPage('event-type');
      } else if (route === 'work-page') {
        setCurrentPage('work');
      } else if (route === 'services') {
        setCurrentPage('services');
      } else if (route === 'service-commercial' || route === 'services-commercial') {
        setCurrentPage('commercial');
      } else if (route === 'service-narrative') {
        setCurrentPage('narrative');
      } else if (route === 'service-documentary') {
        setCurrentPage('documentary');
      } else if (route === 'service-music-video') {
        setCurrentPage('music-video-detail');
      } else if (route === 'service-corporate') {
        setCurrentPage('corporate-detail');
      } else if (route === 'contact') {
        setCurrentPage('contact');
      } else if (route === 'services-main') {
        setCurrentPage('services-main');
      } else if (route === 'service-commercial-video') {
        setCurrentPage('commercial-video-detail');
      } else if (route === 'service-brand-story') {
        setCurrentPage('brand-story-service');
      } else if (route === 'service-social-video') {
        setCurrentPage('social-video-service');
      } else if (route === 'service-weddings-events') {
        setCurrentPage('weddings-events-service');
      } else if (route === 'service-production-partner') {
        setCurrentPage('studio-retainer-service');
      } else if (route === 'service-studio-retainer') {
        setCurrentPage('studio-retainer-service');
      } else if (route === 'the-platform') {
        setCurrentPage('the-platform');
      } else if (route === 'service-commercial-photo') {
        setCurrentPage('commercial-photo-landing');
      } else if (route === 'city-allentown') {
        setCurrentPage('city-allentown');
      } else if (route === 'city-bethlehem') {
        setCurrentPage('city-bethlehem');
      } else if (route === 'city-easton') {
        setCurrentPage('city-easton');
      } else if (route === 'city-emmaus') {
        setCurrentPage('city-emmaus');
      } else if (route === 'city-whitehall') {
        setCurrentPage('city-whitehall');
      } else if (route === 'service-commercial-video-allentown') {
        setCurrentPage('video-allentown');
      } else if (route === 'service-commercial-video-bethlehem') {
        setCurrentPage('video-bethlehem');
      } else if (route === 'service-commercial-video-easton') {
        setCurrentPage('video-easton');
      } else if (route === 'service-commercial-video-emmaus') {
        setCurrentPage('video-emmaus');
      } else if (route === 'service-commercial-video-whitehall') {
        setCurrentPage('video-whitehall');
      } else if (route === 'service-commercial-video-nyc') {
        setCurrentPage('video-nyc');
      } else if (route === 'video-allentown') {
        setCurrentPage('video-allentown');
      } else if (route === 'video-bethlehem') {
        setCurrentPage('video-bethlehem');
      } else if (route === 'video-easton') {
        setCurrentPage('video-easton');
      } else if (route === 'video-emmaus') {
        setCurrentPage('video-emmaus');
      } else if (route === 'video-whitehall') {
        setCurrentPage('video-whitehall');
      } else if (route === 'video-nyc') {
        setCurrentPage('video-nyc');
      } else {
        const regionalSlug = REGIONAL_COMMERCIAL_VIDEO_SLUGS.find(
          (s) =>
            route === `service-commercial-video-${s}` ||
            route === `video-${s}` ||
            route === `${s}-video-production`,
        );
        if (regionalSlug) {
          setCurrentPage(`video-${regionalSlug}`);
        } else if (route === 'service-commercial-photo-allentown') {
          setCurrentPage('photo-allentown');
      } else if (route === 'service-commercial-photo-bethlehem') {
        setCurrentPage('photo-bethlehem');
      } else if (route === 'service-commercial-photo-easton') {
        setCurrentPage('photo-easton');
      } else if (route === 'service-commercial-photo-emmaus') {
        setCurrentPage('photo-emmaus');
      } else if (route === 'service-commercial-photo-whitehall') {
        setCurrentPage('photo-whitehall');
      } else if (route === 'events') {
        setCurrentPage('events');
      } else if (route === 'blog') {
        setCurrentPage('blog');
      } else if (route === 'blog-video-production-lehigh-valley-2025') {
        setCurrentPage('blog-post-1');
      } else if (route === 'blog-corporate-vs-cinematic') {
        setCurrentPage('blog-post-2');
      } else if (route === 'blog-prepare-video-shoot-allentown') {
        setCurrentPage('blog-post-3');
      } else if (route === 'blog-video-marketing-roi-pennsylvania') {
        setCurrentPage('blog-post-4');
      } else if (route === 'blog-behind-scenes-production-company') {
        setCurrentPage('blog-post-5');
      } else if (route === 'about') {
        setCurrentPage('about');
      } else if (route === 'sitemap') {
        setCurrentPage('sitemap');
      } else if (route === 'allentown-video-production') {
        setCurrentPage('video-allentown');
      } else if (route === 'bethlehem-video-production') {
        setCurrentPage('video-bethlehem');
      } else if (route === 'easton-video-production') {
        setCurrentPage('video-easton');
      } else if (route === 'emmaus-video-production') {
        setCurrentPage('video-emmaus');
      } else if (route === 'whitehall-video-production') {
        setCurrentPage('video-whitehall');
      } else if (route === 'nyc-video-production' || route === 'new-york-city-video-production') {
        setCurrentPage('video-nyc');
      } else if (route === 'lehigh-valley-health') {
        setCurrentPage('lehigh-valley-health');
      } else if (route === 'owner-dashboard') {
        setCurrentPage('owner-dashboard');
      } else {
        setCurrentPage('home');
      }
      }
    };

    const handleNavigation = () => {
      const pathnameSegment = normalizeRouteSegment(window.location.pathname);
      const hashSegment = normalizeRouteSegment(window.location.hash.substring(1));
      resolveRoute(pathnameSegment || hashSegment);
    };

    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHash = anchor.getAttribute('href') ?? '';
      const routeSegment = normalizeRouteSegment(rawHash.replace(/^#/, ''));
      const pathOnly = normalizeRouteSegment(window.location.pathname.replace(/^\/+|\/+$/g, ''));

      // Services landing embeds contact; keep URL on /services and scroll instead of swapping to /contact.
      if (routeSegment === 'contact' && pathOnly === 'services') {
        e.preventDefault();
        if (window.location.pathname !== '/services' || window.location.hash !== '#contact') {
          window.history.pushState({}, '', '/services#contact');
        }
        resolveRoute('services');
        window.requestAnimationFrame(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }

      e.preventDefault();
      const nextPath = routeSegment ? `/${routeSegment}` : '/';
      if (window.location.pathname !== nextPath) {
        window.history.pushState({}, '', nextPath);
      }
      resolveRoute(routeSegment);
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  // Scroll to top whenever currentPage changes (except services + #contact, handled in navigation)
  useEffect(() => {
    const onServicesContact =
      currentPage === 'services' && window.location.hash.replace(/^#/, '') === 'contact';
    if (onServicesContact) {
      window.requestAnimationFrame(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'instant', block: 'start' });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'work':
        return <WorkGallery />;
      case 'services':
        return <ServicesLandingPage />;
      case 'commercial':
        return <CommercialPage />;
      case 'contact':
        return <ContactPage />;
      
      // Commercial Services Landing Pages
      case 'services-main':
        return <ServicesMainLanding />;
      case 'commercial-video-landing':
        return <CommercialVideoLanding />;
      case 'commercial-photo-landing':
        return <CommercialPhotoLanding />;
      
      case 'commercial-video-detail':
        return <ServiceCommercialVideoPage />;
      case 'brand-story-service':
        return <ServiceBrandStoryPage />;
      case 'social-video-service':
        return <ServiceSocialVideoPage />;
      case 'music-video-detail':
        return <ServiceMusicVideoPage />;
      case 'weddings-events-service':
        return <ServiceWeddingsEventsPage />;
      case 'studio-retainer-service':
        return <ServiceStudioRetainerPage />;
      case 'the-platform':
        return <ServiceThePlatformShowPage />;
      case 'corporate-detail':
        return <CorporatePage />;
      case 'narrative':
        return <NarrativePage />;
      case 'documentary':
        return <DocumentaryPage />;
      
      // About
      case 'about':
        return <AboutPage />;
      
      // Sitemap
      case 'sitemap':
        return <SiteMapPage />;
      
      // Owner Dashboard
      case 'owner-dashboard':
        return <OwnerDashboardPage />;
      
      // Portfolio
      case 'lehigh-valley-health':
        return <LehighValleyHealthPage />;
      
      // Blog
      case 'blog':
        return <Blog />;
      case 'blog-post-1':
        return <BlogPost1 />;
      case 'blog-post-2':
        return <BlogPost2 />;
      case 'blog-post-3':
        return <BlogPost3 />;
      case 'blog-post-4':
        return <BlogPost4 />;
      case 'blog-post-5':
        return <BlogPost5 />;
      
      // Events System - TEMPORARILY DISABLED (uses motion)
      case 'events':
      case 'event-type':
      case 'event-service':
      case 'city-events':
        // Fallback to home for disabled event pages
        return (
          <>
            <HeroSection />
            <AboutTextSection />
            <LogoCarouselSection />
            <AboutSection />
            <OurClientsSection />
            <LetsCollaborateSection />
          </>
        );
      
      // City Service Pages - TEMPORARILY DISABLED (uses motion)
      case 'allentown-service':
      case 'city-allentown':
      case 'bethlehem-service':
      case 'city-bethlehem':
      case 'easton-service':
      case 'city-easton':
      case 'city-emmaus':
        // Fallback to home for disabled city pages
        return (
          <>
            <HeroSection />
            <AboutTextSection />
            <LogoCarouselSection />
            <AboutSection />
            <OurClientsSection />
            <LetsCollaborateSection />
          </>
        );
      case 'city-whitehall':
        return <WhitehallVideoPage />;
      case 'video-allentown':
        return <AllentownVideoPage />;
      case 'video-bethlehem':
        return <BethlehemVideoPage />;
      case 'video-easton':
        return <EastonVideoPage />;
      case 'video-emmaus':
        return <EmmausVideoPage />;
      case 'video-whitehall':
        return <WhitehallVideoPage />;
      case 'video-nyc':
        return <NycVideoPage />;
      case 'video-philadelphia':
        return <RegionalCommercialVideoPage slug="philadelphia" />;
      case 'video-new-jersey':
        return <RegionalCommercialVideoPage slug="new-jersey" />;
      case 'video-miami':
        return <RegionalCommercialVideoPage slug="miami" />;
      case 'video-orlando':
        return <RegionalCommercialVideoPage slug="orlando" />;
      case 'video-chicago':
        return <RegionalCommercialVideoPage slug="chicago" />;
      case 'video-los-angeles':
        return <RegionalCommercialVideoPage slug="los-angeles" />;
      case 'photo-allentown':
      case 'photo-bethlehem':
      case 'photo-easton':
      case 'photo-emmaus':
      case 'photo-whitehall':
        return <CommercialPhotoLanding />; // Fallback to main photo landing
      
      default:
        return (
          <>
            <HeroSection />
            <AboutTextSection />
            <LogoCarouselSection />
            <AboutSection />
            <OurClientsSection />
            <LetsCollaborateSection />
          </>
        );
    }
  };

  return (
    <>
      <SEOHead currentPage={currentPage} />
      {!splashComplete && (
        <SplashLogoTransition
          desktopAnchorRef={desktopLogoAnchorRef}
          mobileAnchorRef={mobileLogoAnchorRef}
          onComplete={() => setSplashComplete(true)}
        />
      )}

      <div style={{ backgroundColor: '#EEEEE8' }}>
        <Header
          currentPage={currentPage}
          desktopLogoAnchorRef={desktopLogoAnchorRef}
          mobileLogoAnchorRef={mobileLogoAnchorRef}
          showLogo={splashComplete}
        />
        {renderPage()}
        <Footer />
      </div>
    </>
  );
}