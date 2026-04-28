import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { LocalServiceOfferingConfig } from '../../data/localServiceOfferingConfigs';

const AREA_LINKS = [
  { label: 'Allentown', href: '#video-allentown' },
  { label: 'Bethlehem', href: '#video-bethlehem' },
  { label: 'Easton', href: '#video-easton' },
  { label: 'Emmaus', href: '#video-emmaus' },
];

export function LocalServiceOfferingPage({ config }: { config: LocalServiceOfferingConfig }) {
  return (
    <div className="bg-[#EEEEE8] min-h-screen pt-20">
      <nav className="border-b border-black/10 bg-white/80 backdrop-blur-sm" aria-label="Breadcrumb">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-3 text-sm text-black/60">
          <a href="#home" className="hover:text-[#BC271C] transition-colors">
            Home
          </a>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <a href="#services" className="hover:text-[#BC271C] transition-colors">
            Services
          </a>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span className="text-black">{config.shortName}</span>
        </div>
      </nav>

      <header className="relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />
        <div className="relative z-20 container mx-auto max-w-5xl px-6 lg:px-12 py-24 lg:py-32 text-center">
          <p
            className="text-[#BC271C] tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}
          >
            {config.heroKicker}
          </p>
          <h1
            className="text-white mb-6 tracking-tight"
            style={{
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              lineHeight: 1.1,
            }}
          >
            {config.h1}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">{config.heroLead}</p>
        </div>
      </header>

      <article>
        <section className="py-20 px-6 lg:px-12 bg-white" aria-labelledby="intro-heading">
          <div className="container mx-auto max-w-4xl">
            <h2
              id="intro-heading"
              className="mb-8 tracking-wider uppercase text-black"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              {config.introHeading}
            </h2>
            <div className="space-y-6 text-black/75 text-lg leading-relaxed">
              {config.introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12" aria-labelledby="offerings-heading">
          <div className="container mx-auto max-w-7xl">
            <h2
              id="offerings-heading"
              className="text-center mb-14 tracking-wider uppercase text-black"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              What you get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {config.offerings.map((item) => (
                <div key={item.title} className="bg-white p-8 border border-black/10 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#BC271C] mb-4" aria-hidden />
                  <h3
                    className="mb-3 tracking-wider uppercase text-black"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.95rem' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-black/70 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-white border-y border-black/10" aria-labelledby="local-heading">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="flex items-center gap-2 text-[#BC271C] mb-4">
                  <MapPin className="w-6 h-6" aria-hidden />
                  <span className="tracking-widest uppercase text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                    Local SEO & production
                  </span>
                </div>
                <h2
                  id="local-heading"
                  className="mb-6 tracking-wider uppercase text-black"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                >
                  {config.localHeading}
                </h2>
                <p className="text-black/75 text-lg leading-relaxed mb-8">{config.localParagraph}</p>
                <p className="text-black/60 text-sm leading-relaxed mb-4">
                  Explore city-focused commercial pages (same crew, hyper-local context):
                </p>
                <ul className="flex flex-wrap gap-2">
                  {AREA_LINKS.map((c) => (
                    <li key={c.href}>
                      <a
                        href={c.href}
                        className="inline-block px-4 py-2 text-sm border border-black/15 bg-[#EEEEE8] hover:border-[#BC271C] hover:text-[#BC271C] transition-colors tracking-wide uppercase"
                        style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.7rem' }}
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="bg-[#EEEEE8] p-8 lg:p-10 border border-black/10">
                <h3
                  className="mb-4 tracking-wider uppercase text-black"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.9rem' }}
                >
                  Service area
                </h3>
                <p className="text-black/70 text-sm leading-relaxed mb-6">
                  Allentown · Bethlehem · Easton · Emmaus · Whitehall · Macungie · Greater Lehigh Valley · Eastern
                  Pennsylvania · nearby New Jersey markets
                </p>
                <h3
                  className="mb-4 tracking-wider uppercase text-black"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.9rem' }}
                >
                  Next steps
                </h3>
                <ul className="space-y-3">
                  {config.relatedLinks.map((link) => {
                    const external = /^https?:\/\//i.test(link.href);
                    return (
                      <li key={link.href + link.label}>
                        <a
                          href={link.href}
                          className="inline-flex items-center gap-2 text-[#BC271C] hover:text-black text-sm font-medium transition-colors"
                          {...(external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
                          {link.label}
                          {external ? <span className="sr-only"> (opens in new tab)</span> : null}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12" aria-labelledby="faq-heading">
          <div className="container mx-auto max-w-3xl">
            <h2
              id="faq-heading"
              className="text-center mb-12 tracking-wider uppercase text-black"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              FAQ
            </h2>
            <div className="space-y-6">
              {config.faq.map((item) => (
                <div key={item.question} className="bg-white border border-black/10 p-6">
                  <h3 className="text-black font-medium mb-2" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.85rem' }}>
                    {item.question}
                  </h3>
                  <p className="text-black/70 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-20 px-6 lg:px-12 bg-black text-center"
          aria-label="Contact Nick Asenjo Films"
        >
          <div className="container mx-auto max-w-2xl">
            <p className="text-white/70 mb-6 text-lg">
              {config.ctaIntro ?? 'Ready to scope your Lehigh Valley project?'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+16108448696"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#BC271C] text-white tracking-wider uppercase text-sm hover:opacity-95 transition-opacity"
                style={{ fontFamily: 'Lemon Milk, sans-serif' }}
              >
                <Phone size={18} aria-hidden />
                (610) 844-8696
              </a>
              <a
                href="mailto:nickasenjofilms@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white tracking-wider uppercase text-sm hover:bg-white/10 transition-colors"
                style={{ fontFamily: 'Lemon Milk, sans-serif' }}
              >
                <Mail size={18} aria-hidden />
                Email
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-white/90 tracking-wider uppercase text-sm hover:text-white transition-colors"
                style={{ fontFamily: 'Lemon Milk, sans-serif' }}
              >
                Contact form
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
