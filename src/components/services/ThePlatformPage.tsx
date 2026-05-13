import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Mic2,
  Phone,
  Play,
  Radio,
  Sparkles,
  Video,
} from 'lucide-react';
import { ServiceFlowBreadcrumb } from './ServiceFlowBreadcrumb';
import { thePlatformShowOffering } from '../../data/localServiceOfferingConfigs';
import platformWordmark from '../../assets/the-platform/the-platform-wordmark-white.png?url';
import platformHeroStill from '../../assets/finalchangesforwebsitebeforelaunch/Services - The Platform.jpg?url';

const lemon = { fontFamily: 'Lemon Milk, sans-serif' } as const;

export function ThePlatformPage() {
  const cfg = thePlatformShowOffering;
  const yt = cfg.relatedLinks.find((l) => l.label.includes('YouTube'))?.href ?? 'https://www.youtube.com/@yothatstheplatform';

  return (
    <div className="bg-[#EEEEE8] min-h-screen pt-20">
      <ServiceFlowBreadcrumb
        items={[{ label: 'Services', href: '#services' }, { label: 'The Platform' }]}
      />

      {/* Hero */}
      <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden bg-black">
        <img
          src={platformHeroStill}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(165deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.92) 100%)',
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[2] opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(188,39,28,0.55) 18px, rgba(188,39,28,0.55) 19px)',
          }}
          aria-hidden
        />

        <div className="relative z-10 container mx-auto max-w-5xl px-6 lg:px-12 py-20 lg:py-28 text-center">
          <div
            className="mb-8 inline-flex items-center gap-2 border border-white/15 bg-white/[0.06] px-5 py-2.5 backdrop-blur-md"
            style={lemon}
          >
            <Sparkles className="h-4 w-4 text-[#BC271C]" aria-hidden />
            <span className="text-[0.65rem] tracking-[0.2em] text-white/85 uppercase">Nick Asenjo Films · original series</span>
          </div>

          <img
            src={platformWordmark}
            alt="The Platform — It's different on this side."
            className="mx-auto mb-10 h-auto w-full max-w-lg drop-shadow-2xl md:max-w-2xl"
          />

          <p className="mb-4 text-[#BC271C]" style={{ ...lemon, fontSize: '0.75rem', letterSpacing: '0.28em' }}>
            {cfg.heroKicker}
          </p>
          <h1
            className="mb-8 text-white tracking-tight"
            style={{
              ...lemon,
              fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
              lineHeight: 1.08,
            }}
          >
            {cfg.h1}
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/78 md:text-xl">{cfg.heroLead}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={yt}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full min-w-[220px] items-center justify-center gap-2 bg-[#BC271C] px-10 py-4 text-sm tracking-wider text-white uppercase transition-all hover:scale-[1.02] hover:bg-[#9a1f16] sm:w-auto"
              style={lemon}
            >
              <Play className="h-4 w-4 fill-current" aria-hidden />
              Watch on YouTube
            </a>
            <a
              href="mailto:nickasenjofilms@gmail.com?subject=The%20Platform%20—%20guest%20or%20performance%20pitch"
              className="inline-flex w-full min-w-[220px] items-center justify-center gap-2 border border-white/25 bg-white/[0.04] px-10 py-4 text-sm tracking-wider text-white uppercase backdrop-blur-sm transition-all hover:border-[#BC271C]/60 hover:bg-white/[0.08] sm:w-auto"
              style={lemon}
            >
              <Mic2 className="h-4 w-4 text-[#BC271C]" aria-hidden />
              Pitch the show
            </a>
            <a
              href="#work-page"
              className="inline-flex items-center gap-2 text-sm tracking-wider text-white/70 uppercase underline-offset-4 transition-colors hover:text-white"
              style={lemon}
            >
              Related work
              <ArrowRight className="h-4 w-4 opacity-70" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Quick value strip */}
      <section className="border-b border-black/10 bg-black px-6 py-14 lg:px-12">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-10">
          {[
            { title: 'Performance-first', body: 'Music drops built like music videos — lighting, lensing, and energy that read on a phone or a TV.' },
            { title: 'Conversation that earns attention', body: 'Founder-led podcast episodes with depth, not talking points — edited for clarity and replay.' },
            { title: 'Same crew as client work', body: 'Produced in the Lehigh Valley with the same cinematic standards as commercial and brand films.' },
          ].map((item) => (
            <div key={item.title}>
              <p className="mb-2 text-white" style={{ ...lemon, fontSize: '0.8rem', letterSpacing: '0.12em' }}>
                {item.title}
              </p>
              <p className="text-sm leading-relaxed text-white/55">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two pillars */}
      <section className="px-6 py-24 lg:px-12" aria-labelledby="pillars-heading">
        <div className="container mx-auto max-w-6xl">
          <h2
            id="pillars-heading"
            className="mb-4 text-center text-black tracking-tight"
            style={{ ...lemon, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            Two formats. One standard.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-black/60">
            Between short-form noise and traditional TV, The Platform is built for how people actually watch — long enough
            to matter, tight enough to finish.
          </p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="relative overflow-hidden border border-black/10 bg-black p-10 text-left shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#BC271C]/25 blur-3xl" aria-hidden />
              <Video className="mb-6 h-10 w-10 text-[#BC271C]" aria-hidden />
              <h3 className="mb-4 text-white tracking-wide uppercase" style={{ ...lemon, fontSize: '1.05rem' }}>
                Music video performances
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/65">{cfg.offerings[0].body}</p>
              <a
                href={yt}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-wider text-[#BC271C] uppercase underline-offset-4 hover:text-white"
                style={lemon}
              >
                See performances
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </article>
            <article className="border border-black/10 bg-white p-10 shadow-sm">
              <Radio className="mb-6 h-10 w-10 text-[#BC271C]" aria-hidden />
              <h3 className="mb-4 text-black tracking-wide uppercase" style={{ ...lemon, fontSize: '1.05rem' }}>
                Podcast & long-form interviews
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-black/65">{cfg.offerings[1].body}</p>
              <p className="text-xs leading-relaxed text-black/45">{cfg.offerings[2].body}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Editorial + pull quote */}
      <section className="border-y border-black/10 bg-white px-6 py-24 lg:px-12" aria-labelledby="story-heading">
        <div className="container mx-auto max-w-5xl">
          <h2
            id="story-heading"
            className="mb-10 text-black tracking-tight"
            style={{ ...lemon, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            {cfg.introHeading}
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-6 text-lg leading-relaxed text-black/72 lg:col-span-7">
              {cfg.introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className="lg:col-span-5">
              <div className="border-l-4 border-[#BC271C] bg-[#EEEEE8] px-8 py-10">
                <p className="mb-4 text-black/40" style={{ ...lemon, fontSize: '0.65rem', letterSpacing: '0.2em' }}>
                  Why it exists
                </p>
                <p className="text-xl font-medium leading-snug text-black md:text-2xl" style={lemon}>
                  Marketing for artists. Signal for brands. Craft that holds up after the first scroll.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Watch strip — cinematic CTA to YouTube */}
      <section className="relative overflow-hidden px-0 py-0" aria-label="Watch The Platform on YouTube">
        <div className="relative aspect-[21/9] min-h-[280px] w-full md:aspect-[24/9] md:min-h-[320px]">
          <img src={platformHeroStill} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/70" aria-hidden />
          <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 py-16 lg:px-20">
            <Play className="mb-4 h-12 w-12 text-[#BC271C]" aria-hidden />
            <h2 className="mb-3 max-w-xl text-white tracking-tight" style={{ ...lemon, fontSize: 'clamp(1.35rem, 3vw, 2rem)' }}>
              Watch on YouTube
            </h2>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/65">
              New performances, episodes, and podcast cuts publish on the official channel — subscribe so you do not miss a
              drop.
            </p>
            <a
              href={yt}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#BC271C] bg-[#BC271C] px-8 py-3.5 text-xs tracking-wider text-white uppercase transition-colors hover:bg-[#9a1f16]"
              style={lemon}
            >
              Open channel
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="px-6 py-24 lg:px-12" aria-labelledby="origin-heading">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center text-[#BC271C]">
            <MapPin className="h-8 w-8" aria-hidden />
          </div>
          <h2
            id="origin-heading"
            className="mb-6 text-black tracking-tight"
            style={{ ...lemon, fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            {cfg.localHeading}
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-black/70">{cfg.localParagraph}</p>
          <a
            href="#about"
            className="inline-block text-sm tracking-wider text-[#BC271C] uppercase underline underline-offset-4 transition-colors hover:text-black"
            style={lemon}
          >
            About Nick Asenjo Films
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-black/10 bg-[#EEEEE8] px-6 py-24 lg:px-12" aria-labelledby="faq-heading">
        <div className="container mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="mb-12 text-center text-black tracking-tight"
            style={{ ...lemon, fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            Questions
          </h2>
          <ul className="space-y-5">
            {cfg.faq.map((item) => (
              <li
                key={item.question}
                className="border border-black/10 border-l-4 border-l-[#BC271C] bg-white p-6 pl-7 shadow-sm"
              >
                <h3 className="mb-2 text-black" style={{ ...lemon, fontSize: '0.82rem' }}>
                  {item.question}
                </h3>
                <p className="text-sm leading-relaxed text-black/68">{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related links */}
      <section className="border-t border-black/10 bg-white px-6 py-16 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-6 text-black/45" style={{ ...lemon, fontSize: '0.65rem', letterSpacing: '0.2em' }}>
            Explore
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cfg.relatedLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 border border-black/15 bg-[#EEEEE8] px-5 py-2.5 text-[0.65rem] tracking-wider text-black uppercase transition-colors hover:border-[#BC271C] hover:text-[#BC271C]"
                style={lemon}
              >
                {link.label}
                {link.href.startsWith('http') ? <ExternalLink className="h-3 w-3 opacity-50" aria-hidden /> : null}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black px-6 py-24 text-center lg:px-12" aria-label="Contact">
        <div className="container mx-auto max-w-2xl">
          <img
            src={platformWordmark}
            alt=""
            className="mx-auto mb-10 h-auto w-full max-w-md opacity-90"
            aria-hidden
          />
          <p className="mb-10 text-lg text-white/75">{cfg.ctaIntro}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+16108448696"
              className="inline-flex items-center gap-2 bg-[#BC271C] px-8 py-4 text-sm tracking-wider text-white uppercase transition-opacity hover:opacity-95"
              style={lemon}
            >
              <Phone className="h-4 w-4" aria-hidden />
              (610) 844-8696
            </a>
            <a
              href="mailto:nickasenjofilms@gmail.com"
              className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-sm tracking-wider text-white uppercase transition-colors hover:bg-white/10"
              style={lemon}
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm tracking-wider text-white/80 uppercase transition-colors hover:text-white"
              style={lemon}
            >
              Contact form
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
