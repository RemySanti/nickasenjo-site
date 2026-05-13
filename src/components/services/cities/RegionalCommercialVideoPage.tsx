import { Play, Building2, Award, MapPin, Phone, Mail } from 'lucide-react';
import { ServiceFlowBreadcrumb } from '../ServiceFlowBreadcrumb';
import { citySiloMedia } from './citySiloMedia';
import { OWNER_EMAIL, mailtoOwner } from '../../../config/siteContact';
import type { RegionalCommercialVideoSlug } from '../../../data/regionalCommercialVideoMarkets';
import { getRegionalCommercialVideoMarket } from '../../../data/regionalCommercialVideoMarkets';

const industryIcons = {
  building2: Building2,
  play: Play,
  award: Award,
  mapPin: MapPin,
} as const;

type Props = { slug: RegionalCommercialVideoSlug };

export function RegionalCommercialVideoPage({ slug }: Props) {
  const m = getRegionalCommercialVideoMarket(slug);
  const media = citySiloMedia[slug];

  if (!m || !media) {
    return null;
  }

  return (
    <div className="bg-[#EEEEE8] min-h-screen pt-20">
      <ServiceFlowBreadcrumb
        items={[
          { label: 'Services', href: '#services' },
          { label: 'Commercial video', href: '#service-commercial-video' },
          { label: m.breadcrumbName },
        ]}
      />

      <section className="relative h-[70vh] bg-black flex items-center justify-center overflow-hidden">
        <img
          src={media.hero}
          alt={media.heroAlt}
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
            {m.h1}
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto mb-4" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            {m.heroLead}
          </p>
          <p className="text-white/60 max-w-2xl mx-auto">{m.heroSub}</p>
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
                {m.whyTitle}
              </h2>
              <p className="text-black/70 mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                {m.whyP1}
              </p>
              <p className="text-black/70" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                {m.whyP2}
              </p>
            </div>
            <div className="bg-[#EEEEE8] p-12 border border-black/10">
              <div className="aspect-video overflow-hidden border border-black/10 mb-6 bg-black/5">
                <img src={media.aside} alt={media.asideAlt} className="w-full h-full object-cover" />
              </div>
              <p className="text-black/60 text-sm text-center">{m.asideCaption}</p>
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
            {m.industriesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {m.industries.map((row) => {
              const Icon = industryIcons[row.icon];
              return (
                <div key={row.title} className="bg-white p-8 border border-black/10">
                  <Icon className="w-10 h-10 text-[#BC271C] mb-4" />
                  <h3
                    className="mb-3 tracking-wider uppercase"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
                  >
                    {row.title}
                  </h3>
                  <p className="text-black/70 text-sm">{row.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2
            className="text-white text-center mb-16 tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {m.contextsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {m.contexts.map((ctx) => (
              <div key={ctx.title} className="bg-white/5 border border-white/10 p-8">
                <h3
                  className="text-white mb-3 tracking-wider uppercase"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
                >
                  {ctx.title}
                </h3>
                <p className="text-white/70 mb-4">{ctx.body}</p>
                <p className="text-[#BC271C] text-sm">{ctx.tags}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            className="mb-6 tracking-wider uppercase text-black"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {m.ctaTitle}
          </h2>
          <p className="text-black/70 mb-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            {m.ctaLead}
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
