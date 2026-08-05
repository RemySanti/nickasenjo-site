import { useState, useEffect, useRef } from 'react';
import './styles/globals.css';
import { SplashLogoTransition } from './components/SplashLogoTransition';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
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
import {
  ServiceBrandStoryPage,
  ServiceCommercialVideoPage,
  ServiceMusicVideoPage,
  ServiceSocialVideoPage,
  ServiceStudioRetainerPage,
  ServiceThePlatformShowPage,
  ServiceWeddingsEventsPage,
} from './components/services/ServiceOutcomePages';
import { AdsLandingPage } from './components/AdsLandingPage';
import {
  normalizeRouteSegment,
  readInitialRoute,
  resolveRoute,
  shouldSkipIntroSplash,
} from './lib/resolveRoute';

const LP_SECTION_IDS = new Set([
  'view-our-work',
  'commercial-video',
  'brand-films',
  'social-media-video',
  'music-videos',
  'contact',
]);

export default function App() {
  const desktopLogoAnchorRef = useRef<HTMLDivElement>(null);
  const mobileLogoAnchorRef = useRef<HTMLDivElement>(null);
  const [splashComplete, setSplashComplete] = useState(shouldSkipIntroSplash);
  const [currentPage, setCurrentPage] = useState(() => readInitialRoute().currentPage);
  const [eventSlug, setEventSlug] = useState(() => readInitialRoute().eventSlug);
  const [citySlug, setCitySlug] = useState(() => readInitialRoute().citySlug);

  useEffect(() => {
    const applyResolved = (routeSegment: string) => {
      const resolved = resolveRoute(routeSegment);
      setEventSlug(resolved.eventSlug);
      setCitySlug(resolved.citySlug);
      setCurrentPage(resolved.currentPage);
    };

    const handleNavigation = () => {
      const pathnameSegment = normalizeRouteSegment(window.location.pathname);
      const hashSegment = normalizeRouteSegment(window.location.hash.substring(1));
      // Prefer path for /lp so sitelink hashes stay on-page anchors.
      if (pathnameSegment === 'lp' || pathnameSegment === 'ads' || pathnameSegment === 'videographer-near-me') {
        applyResolved(pathnameSegment);
        const hash = normalizeRouteSegment(window.location.hash.substring(1));
        if (hash && LP_SECTION_IDS.has(hash)) {
          window.requestAnimationFrame(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
        return;
      }
      applyResolved(pathnameSegment || hashSegment);
    };

    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHash = anchor.getAttribute('href') ?? '';
      const routeSegment = normalizeRouteSegment(rawHash.replace(/^#/, ''));
      const pathOnly = normalizeRouteSegment(window.location.pathname.replace(/^\/+|\/+$/g, ''));

      // Ads LP: keep visitors on-page; hash links only scroll to section anchors.
      if (
        (pathOnly === 'lp' || pathOnly === 'ads' || pathOnly === 'videographer-near-me') &&
        LP_SECTION_IDS.has(routeSegment)
      ) {
        e.preventDefault();
        window.history.pushState({}, '', `/${pathOnly}#${routeSegment}`);
        document.getElementById(routeSegment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      // Services landing embeds contact; keep URL on /services and scroll instead of swapping to /contact.
      if (routeSegment === 'contact' && pathOnly === 'services') {
        e.preventDefault();
        if (window.location.pathname !== '/services' || window.location.hash !== '#contact') {
          window.history.pushState({}, '', '/services#contact');
        }
        applyResolved('services');
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
      applyResolved(routeSegment);
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
    if (currentPage === 'ads-lp') {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash && LP_SECTION_IDS.has(hash)) {
        window.requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'instant', block: 'start' });
        });
        return;
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
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

  // Silence unused event/city slug until events UI is re-enabled
  void eventSlug;
  void citySlug;

  if (currentPage === 'ads-lp') {
    return (
      <>
        <SEOHead currentPage={currentPage} />
        <AdsLandingPage />
      </>
    );
  }

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
