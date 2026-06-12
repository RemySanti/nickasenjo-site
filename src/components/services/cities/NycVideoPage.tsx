import { Play, Building2, Award, MapPin, Phone, Mail } from 'lucide-react';
import { ServiceFlowBreadcrumb } from '../ServiceFlowBreadcrumb';
import { citySiloMedia } from './citySiloMedia';
import { OWNER_EMAIL, mailtoOwner } from '../../../config/siteContact';

export function NycVideoPage() {
  return (
    <div className="bg-[#EEEEE8] min-h-screen pt-20">
      <ServiceFlowBreadcrumb
        items={[
          { label: 'Services', href: '#services' },
          { label: 'Commercial video', href: '#service-commercial-video' },
          { label: 'New York City' },
        ]}
      />

      <section className="relative h-[70vh] bg-black flex items-center justify-center overflow-hidden">
        <img
          src={citySiloMedia.nyc.hero}
          alt={citySiloMedia.nyc.heroAlt}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/88 z-10" aria-hidden />
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <MapPin className="w-12 h-12 text-[#BC271C] mx-auto mb-6" />
          <h1
            className="text-white mb-6 tracking-wider uppercase"
            style={{
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.1',
            }}
          >
            NYC Commercial Video Production
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto mb-4" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Cinematic commercial, campaign, and brand films for Manhattan, Brooklyn, Queens, and the greater metro — produced
            with the same senior crew and finishing standards as our Lehigh Valley headquarters.
          </p>
          <p className="text-white/60 max-w-2xl mx-auto">
            Nick Asenjo Films is based in Allentown, PA, and travels for NYC shoots, agency collaborations, and
            multi-market launches.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="mb-6 tracking-wider uppercase text-black"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Why brands book us for New York
              </h2>
              <p className="text-black/70 mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                New York sets the bar for pace, polish, and creative ambition. We match that bar with disciplined
                pre-production, broadcast-ready finishing, and clear deliverable packages your marketing team can ship
                the same week.
              </p>
              <p className="text-black/70" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Whether you need a flagship hero film, modular paid-social cuts, or a full launch kit, we plan for NYC
                locations, permits, and talent logistics without losing the story.
              </p>
            </div>
            <div className="bg-[#EEEEE8] p-12 border border-black/10">
              <div className="aspect-video overflow-hidden border border-black/10 mb-6 bg-black/5">
                <img
                  src={citySiloMedia.nyc.aside}
                  alt={citySiloMedia.nyc.asideAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black/60 text-sm text-center">Hyper-local NYC messaging for search + campaigns</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2
            className="text-center mb-16 tracking-wider uppercase text-black"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Industries & use cases in NYC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 className="mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}>
                Finance & professional
              </h3>
              <p className="text-black/70 text-sm">
                Brand films, compliance-aware explainers, and leadership comms for firms competing in Manhattan and
                Jersey-side corridors.
              </p>
            </div>
            <div className="bg-white p-8 border border-black/10">
              <Award className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 className="mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}>
                Media & culture
              </h3>
              <p className="text-black/70 text-sm">
                Launch films, artist-forward spots, and social-first suites tuned for NYC audiences and tastemakers.
              </p>
            </div>
            <div className="bg-white p-8 border border-black/10">
              <Play className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 className="mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}>
                Retail & hospitality
              </h3>
              <p className="text-black/70 text-sm">
                Flagship store openings, restaurant groups, and venue campaigns with cinematic location work across the
                five boroughs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2
            className="text-white text-center mb-16 tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Filming contexts we plan for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-white mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}>
                Manhattan & Midtown
              </h3>
              <p className="text-white/70 mb-4">High-rise offices, showrooms, and iconic street energy for premium brands.</p>
              <p className="text-[#BC271C] text-sm">Corporate hero films · executive profiles · B-roll</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-white mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}>
                Brooklyn & creative hubs
              </h3>
              <p className="text-white/70 mb-4">Studios, lofts, and neighborhoods with authentic texture for lifestyle and culture brands.</p>
              <p className="text-[#BC271C] text-sm">Campaigns · music-adjacent spots · social-first edits</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 tracking-wider uppercase text-black" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Book NYC commercial production
          </h2>
          <p className="text-black/70 mb-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Tell us your market, timeline, and deliverables — we will align crew, travel, and finishing so your NYC
            campaign ships on schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-black/70">
              <Phone className="w-5 h-5 text-[#BC271C]" />
              <a href="tel:+16108448696" className="hover:text-[#BC271C] transition-colors">
                (610) 844-8696
              </a>
            </div>
            <div className="flex items-center gap-2 text-black/70">
              <Mail className="w-5 h-5 text-[#BC271C]" />
              <a href={mailtoOwner()} className="hover:text-[#BC271C] transition-colors">
                {OWNER_EMAIL}
              </a>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-block bg-[#BC271C] text-white px-12 py-5 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
          >
            Start your project
          </a>
        </div>
      </section>
    </div>
  );
}
