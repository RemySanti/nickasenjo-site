import { FormEvent, useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Loader2, Phone, Play, Star } from 'lucide-react';
import {
  STUDIO_ADDRESS_LINE,
  STUDIO_CITY_LINE,
  TRACKED_PHONE_DISPLAY,
  TRACKED_PHONE_TEL,
} from '../config/sitePhone';
import {
  LP_GOOGLE_RATING,
  LP_HERO_YOUTUBE_ID,
  LP_REVIEWS,
  LP_WORK_ITEMS,
} from '../data/adsLandingContent';
import { submitSiteContactForm } from '../lib/submitSiteContactForm';

const DISPLAY = '"Lemon Milk", "Arial Narrow", sans-serif';
const BODY = '"Cormorant Garamond", "Times New Roman", Georgia, serif';
const STICKY_OFFSET = '5.75rem';

const SERVICES = [
  {
    id: 'commercial-video',
    index: '01',
    title: 'Commercial Video',
    line: 'Spots, launches, and campaigns built to move people to act.',
  },
  {
    id: 'brand-films',
    index: '02',
    title: 'Brand Films',
    line: 'Story that builds real trust - more than a pretty montage.',
  },
  {
    id: 'social-media-video',
    index: '03',
    title: 'Social Media Video',
    line: 'Hooks, pacing, and platform craft, shot for the feed - not leftovers.',
  },
  {
    id: 'music-videos',
    index: '04',
    title: 'Music Videos',
    line: 'From treatment to final grade, treat your release like a premiere.',
  },
] as const;

const PROCESS = [
  { step: '01', title: 'Discovery', body: 'Goals, audience, timeline. Clarity before cameras.' },
  { step: '02', title: 'Treatment', body: 'Story, look, and deliverables locked before shoot day.' },
  { step: '03', title: 'Production', body: 'Lean crew. Intentional frames. No wasted setups.' },
  { step: '04', title: 'Delivery', body: 'Final grade, platform cuts, and a partner who stands by the work.' },
] as const;

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function StarRow({ size = 14 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} style={{ width: size, height: size }} className="fill-[#E8C39E] text-[#E8C39E]" strokeWidth={0} />
      ))}
    </div>
  );
}

function PrimaryCta({
  id,
  className = '',
  label = 'Start With a Discovery Call',
  tone = 'solid',
}: {
  id: string;
  className?: string;
  label?: string;
  tone?: 'solid' | 'ghost';
}) {
  const base =
    tone === 'solid'
      ? 'bg-[#BC271C] text-[#F7F3EB] hover:bg-[#d12f22]'
      : 'border border-[#F7F3EB]/35 bg-transparent text-[#F7F3EB] hover:border-[#BC271C] hover:text-[#BC271C]';

  return (
    <button
      type="button"
      id={id}
      data-cta="book-discovery-call"
      data-lp-cta={id}
      onClick={scrollToContact}
      className={`group relative inline-flex items-center justify-center overflow-hidden px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] transition duration-300 active:scale-[0.985] ${base} ${className}`}
      style={{ fontFamily: DISPLAY }}
    >
      <span className="relative z-10">{label}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 translate-y-full bg-white/10 transition duration-500 group-hover:translate-y-0"
      />
    </button>
  );
}

export function AdsLandingPage() {
  const [heroReady, setHeroReady] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const posterScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const posterOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  const reviews = LP_REVIEWS.filter((r) => !r.placeholder);
  const [featured, ...rest] = LP_WORK_ITEMS;
  const heroPoster = `https://img.youtube.com/vi/${LP_HERO_YOUTUBE_ID}/maxresdefault.jpg`;

  useEffect(() => {
    const id = 'lp-cormorant-font';
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'smooth';
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash) return;
    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const run = () => setHeroReady(true);
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(run, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(run, 1400);
    return () => window.clearTimeout(t);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (String(new FormData(form).get('_gotcha') ?? '').trim()) return;
    setFormStatus('sending');
    setFormError('');
    try {
      await submitSiteContactForm(form);
      setFormStatus('success');
      form.reset();
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: 'AW-738577819', event_callback: () => undefined });
      }
      window.dispatchEvent(new CustomEvent('naf:lp-discovery-submit'));
    } catch (err) {
      setFormStatus('error');
      setFormError(err instanceof Error ? err.message : 'Something went wrong. Please call us.');
    }
  }

  const heroEmbed = (() => {
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: LP_HERO_YOUTUBE_ID,
      controls: '0',
      modestbranding: '1',
      playsinline: '1',
      rel: '0',
      iv_load_policy: '3',
    });
    return `https://www.youtube.com/embed/${LP_HERO_YOUTUBE_ID}?${params.toString()}`;
  })();

  return (
    <div
      className="lp-root relative min-h-screen overflow-x-hidden bg-[#080807] text-[#F7F3EB]"
      style={{ fontFamily: BODY }}
    >
      <style>{`
        .lp-root { --lp-red: #BC271C; --lp-ink: #080807; --lp-cream: #F7F3EB; --lp-muted: rgba(247,243,235,0.62); }
        .lp-grain::before {
          content: '';
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.18;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        .lp-hairline { background: linear-gradient(90deg, transparent, rgba(247,243,235,0.35), transparent); height: 1px; }
        .lp-work-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(188,39,28,0.7) transparent;
        }
        .lp-work-scroll::-webkit-scrollbar { height: 6px; }
        .lp-work-scroll::-webkit-scrollbar-thumb { background: rgba(188,39,28,0.7); }
      `}</style>

      {/* Sticky conversion bar - mobile */}
      <div
        className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#080807]/92 px-3 py-2.5 backdrop-blur-md md:hidden"
        role="region"
        aria-label="Quick actions"
      >
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href={TRACKED_PHONE_TEL}
            id="lp-sticky-call"
            data-cta="call-now"
            data-lp-cta="sticky-call"
            className="inline-flex flex-1 items-center justify-center gap-2 border border-white/20 px-3 py-3.5 text-[0.65rem] uppercase tracking-[0.18em] text-[#F7F3EB]"
            style={{ fontFamily: DISPLAY }}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            Call Now
          </a>
          <button
            type="button"
            id="lp-sticky-book"
            data-cta="book-discovery-call"
            data-lp-cta="sticky-book"
            onClick={scrollToContact}
            className="inline-flex flex-1 items-center justify-center bg-[#BC271C] px-3 py-3.5 text-[0.65rem] uppercase tracking-[0.18em] text-[#F7F3EB]"
            style={{ fontFamily: DISPLAY }}
          >
            Book a Call
          </button>
        </div>
      </div>

      {/* 1. Hero - one composition */}
      <section ref={heroRef} className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { scale: posterScale, opacity: posterOpacity }}
        >
          <img
            src={heroPoster}
            alt=""
            width={1280}
            height={720}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          {heroReady && (
            <iframe
              title="Nick Asenjo Films commercial reel"
              className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
              src={heroEmbed}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              tabIndex={-1}
            />
          )}
        </motion.div>
        {/* Light bottom fade only so headline stays readable over the reel */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#080807] via-[#080807]/55 to-transparent" />

        <div className="relative z-10 flex flex-1 flex-col justify-end px-5 pb-28 pt-16 md:px-10 md:pb-20 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-5 text-[0.68rem] uppercase tracking-[0.42em] text-[#F7F3EB]/70"
              style={{ fontFamily: DISPLAY }}
            >
              Nick Asenjo Films
            </motion.p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-[clamp(2.8rem,11vw,6.5rem)] font-bold leading-[0.88] tracking-[0.02em] text-[#F7F3EB]"
              style={{ fontFamily: DISPLAY }}
            >
              Cinematic
              <br />
              Video Production
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-6 max-w-lg text-[1.25rem] font-medium italic leading-snug text-[#F7F3EB]/85 md:text-[1.45rem]"
            >
              Your story deserves cinema, not content. We build films people feel.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center"
            >
              <PrimaryCta id="lp-hero-cta" />
              <p className="max-w-xs text-sm leading-relaxed text-[#F7F3EB]/55">
                Twenty years behind the lens. Downtown Allentown studio serving the Lehigh Valley.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-24 right-5 hidden items-center gap-3 md:bottom-16 md:right-10 md:flex lg:right-16">
          <StarRow size={12} />
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#F7F3EB]/55" style={{ fontFamily: DISPLAY }}>
            {LP_GOOGLE_RATING.value} · {LP_GOOGLE_RATING.countLabel}
          </span>
        </div>
      </section>

      {/* 2. Proof reel - 6 clips */}
      <section
        id="view-our-work"
        className="relative border-t border-white/[0.07] px-5 py-20 md:px-10 md:py-28 lg:px-16"
        style={{ scrollMarginTop: STICKY_OFFSET }}
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.35em] text-[#BC271C]" style={{ fontFamily: DISPLAY }}>
                Proof
              </p>
              <h2
                className="text-[clamp(2rem,5vw,3.25rem)] uppercase leading-none tracking-[0.06em] text-[#F7F3EB]"
                style={{ fontFamily: DISPLAY }}
              >
                Selected work
              </h2>
            </div>
            <p className="max-w-sm text-lg italic leading-relaxed text-[#F7F3EB]/55">
              Six frames from brands that refuse to look ordinary.
            </p>
          </Reveal>

          {/* Featured */}
          <Reveal>
            <button
              type="button"
              data-lp-work={featured.id}
              onClick={() => setActiveVideo(featured.youtubeId)}
              className="group relative mb-5 block w-full overflow-hidden text-left md:mb-6"
              aria-label={`Play ${featured.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black md:aspect-[21/9]">
                <img
                  src={`https://img.youtube.com/vi/${featured.youtubeId}/maxresdefault.jpg`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-[#BC271C]/95 text-white shadow-[0_0_40px_rgba(188,39,28,0.45)] transition duration-300 group-hover:scale-110 md:h-20 md:w-20">
                    <Play className="ml-1 h-7 w-7 fill-white md:h-8 md:w-8" aria-hidden />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <p className="mb-2 text-[0.65rem] uppercase tracking-[0.28em] text-[#E8C39E]" style={{ fontFamily: DISPLAY }}>
                    {featured.tag}
                  </p>
                  <h3 className="text-2xl uppercase tracking-[0.08em] text-white md:text-3xl" style={{ fontFamily: DISPLAY }}>
                    {featured.title}
                  </h3>
                  <p className="mt-2 max-w-md text-base italic text-white/70">{featured.caption}</p>
                </div>
              </div>
            </button>
          </Reveal>

          {/* Remaining five - horizontal cinema strip on mobile, grid on desktop */}
          <div className="lp-work-scroll flex gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-5 md:gap-3 md:overflow-visible md:pb-0">
            {rest.map((item, i) => (
              <Reveal key={item.id} delay={0.06 * i} className="w-[68vw] shrink-0 sm:w-[42vw] md:w-auto">
                <button
                  type="button"
                  data-lp-work={item.id}
                  onClick={() => setActiveVideo(item.youtubeId)}
                  className="group relative block w-full overflow-hidden text-left"
                  aria-label={`Play ${item.title}`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-black md:aspect-[3/4]">
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={480}
                      height={640}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-90 backdrop-blur-sm transition group-hover:bg-[#BC271C]">
                      <Play className="ml-0.5 h-4 w-4 fill-white" aria-hidden />
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-3.5">
                      <p className="mb-1 text-[0.55rem] uppercase tracking-[0.22em] text-[#E8C39E]" style={{ fontFamily: DISPLAY }}>
                        {item.tag}
                      </p>
                      <h3 className="text-sm uppercase leading-tight tracking-[0.06em] text-white" style={{ fontFamily: DISPLAY }}>
                        {item.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-xs italic leading-snug text-white/60">{item.caption}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <PrimaryCta id="lp-work-cta" />
          </Reveal>
        </div>
      </section>

      {/* 3. Services - full-bleed editorial blocks */}
      <section className="relative border-t border-white/[0.07] bg-[#0E0E0C]">
        <div className="mx-auto max-w-6xl px-5 pt-16 md:px-10 md:pt-24 lg:px-16">
          <Reveal>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.35em] text-[#BC271C]" style={{ fontFamily: DISPLAY }}>
              Services
            </p>
            <h2
              className="mb-4 max-w-xl text-[clamp(2rem,5vw,3.25rem)] uppercase leading-none tracking-[0.06em]"
              style={{ fontFamily: DISPLAY }}
            >
              Built for every entry point
            </h2>
            <p className="mb-4 max-w-md text-lg italic text-[#F7F3EB]/55">
              Same craft whether the ad brought you for commercial, brand, social, or music.
            </p>
          </Reveal>
        </div>

        {SERVICES.map((service, i) => (
          <div
            key={service.id}
            id={service.id}
            className="border-t border-white/[0.07]"
            style={{ scrollMarginTop: STICKY_OFFSET }}
          >
            <Reveal delay={0.05}>
              <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:grid-cols-[5rem_1fr_auto] md:items-center md:gap-10 md:px-10 md:py-16 lg:px-16">
                <span
                  className="text-4xl font-bold tabular-nums text-[#BC271C]/80 md:text-5xl"
                  style={{ fontFamily: DISPLAY }}
                  aria-hidden
                >
                  {service.index}
                </span>
                <div>
                  <h3
                    className="mb-3 text-[clamp(1.5rem,3.5vw,2.35rem)] uppercase tracking-[0.08em] text-[#F7F3EB]"
                    style={{ fontFamily: DISPLAY }}
                  >
                    {service.title}
                  </h3>
                  <p className="max-w-xl text-lg leading-relaxed text-[#F7F3EB]/65 md:text-xl">{service.line}</p>
                </div>
                <PrimaryCta
                  id={`lp-cta-${service.id}`}
                  tone={i % 2 === 0 ? 'solid' : 'ghost'}
                  className="w-full md:w-auto"
                  label="Book Discovery"
                />
              </div>
            </Reveal>
          </div>
        ))}
      </section>

      {/* 4. Why Nick - typography moment */}
      <section className="lp-grain relative overflow-hidden border-t border-white/[0.07] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[#BC271C]/15 blur-[100px]"
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Reveal>
            <p className="mb-6 text-[0.65rem] uppercase tracking-[0.35em] text-[#BC271C]" style={{ fontFamily: DISPLAY }}>
              Why Nick Asenjo Films
            </p>
            <p className="mb-8 text-[clamp(1.35rem,3.2vw,2rem)] font-medium leading-snug text-[#F7F3EB]/9">
              Twenty years behind the lens. A downtown Allentown studio working across the Lehigh Valley
              for founders, marketing leads, and brands who refuse to look ordinary.
            </p>
            <p className="mb-12 text-[clamp(1.15rem,2.5vw,1.5rem)] italic leading-relaxed text-[#F7F3EB]/65">
              Artistry meets strategy. Full production for brands that refuse to look ordinary.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote
              className="border-l-2 border-[#BC271C] pl-6 text-[clamp(2.2rem,7vw,4.5rem)] font-bold leading-[0.95] tracking-[0.02em] text-[#F7F3EB] md:pl-10"
              style={{ fontFamily: DISPLAY }}
            >
              Every frame
              <br />
              earns its place.
            </blockquote>
          </Reveal>
          <Reveal className="mt-12" delay={0.2}>
            <PrimaryCta id="lp-why-cta" />
          </Reveal>
        </div>
      </section>

      {/* 5. Social proof */}
      <section className="border-t border-white/[0.07] bg-[#0E0E0C] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.35em] text-[#BC271C]" style={{ fontFamily: DISPLAY }}>
                Trust
              </p>
              <h2
                className="text-[clamp(2rem,5vw,3.25rem)] uppercase leading-none tracking-[0.06em]"
                style={{ fontFamily: DISPLAY }}
              >
                Allentown&apos;s 5.0
              </h2>
            </div>
            <div className="inline-flex items-center gap-4 border border-white/10 bg-black/30 px-5 py-4">
              <StarRow size={16} />
              <div>
                <p className="text-2xl text-[#F7F3EB]" style={{ fontFamily: DISPLAY }}>
                  {LP_GOOGLE_RATING.value}★
                </p>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#F7F3EB]/45" style={{ fontFamily: DISPLAY }}>
                  {LP_GOOGLE_RATING.countLabel}
                </p>
              </div>
            </div>
          </Reveal>

          {reviews.length > 0 ? (
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {reviews.map((review) => (
                <figure key={review.quote.slice(0, 32)} className="bg-[#0E0E0C] p-7 md:p-8">
                  <StarRow />
                  <blockquote className="mt-5 text-lg italic leading-relaxed text-[#F7F3EB]/85">
                    “{review.quote}”
                  </blockquote>
                  <figcaption
                    className="mt-6 text-[0.65rem] uppercase tracking-[0.2em] text-[#F7F3EB]/45"
                    style={{ fontFamily: DISPLAY }}
                  >
                    {review.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <Reveal>
              <p className="max-w-2xl text-xl italic leading-relaxed text-[#F7F3EB]/65">
                A five-star Allentown studio trusted across the Lehigh Valley. Commercial and brand clients
                return for films that feel intentional - never disposable content.
              </p>
            </Reveal>
          )}

          <Reveal className="mt-12">
            <PrimaryCta id="lp-reviews-cta" />
          </Reveal>
        </div>
      </section>

      {/* 6. Process - film strip */}
      <section className="border-t border-white/[0.07] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14">
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.35em] text-[#BC271C]" style={{ fontFamily: DISPLAY }}>
              Process
            </p>
            <h2
              className="mb-4 text-[clamp(2rem,5vw,3.25rem)] uppercase leading-none tracking-[0.06em]"
              style={{ fontFamily: DISPLAY }}
            >
              From call to final cut
            </h2>
            <p className="max-w-md text-lg italic text-[#F7F3EB]/55">Four steps. No mystery. Booking is the easy part.</p>
          </Reveal>

          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div aria-hidden className="lp-hairline absolute left-0 right-0 top-5 hidden lg:block" />
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={0.08 * i}>
                <div className="relative">
                  <span
                    className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#BC271C]/60 bg-[#080807] text-xs text-[#BC271C]"
                    style={{ fontFamily: DISPLAY }}
                  >
                    {item.step}
                  </span>
                  <h3 className="mb-2 text-xl uppercase tracking-[0.1em] text-[#F7F3EB]" style={{ fontFamily: DISPLAY }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#F7F3EB]/55">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <PrimaryCta id="lp-process-cta" />
          </Reveal>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section
        id="contact"
        className="lp-grain relative overflow-hidden border-t border-white/[0.07] bg-[#0E0E0C] px-5 py-20 pb-28 md:px-10 md:py-28 md:pb-24 lg:px-16"
        style={{ scrollMarginTop: STICKY_OFFSET }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#BC271C]/20 blur-[90px]"
        />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.35em] text-[#BC271C]" style={{ fontFamily: DISPLAY }}>
              Book
            </p>
            <h2
              className="mb-6 text-[clamp(2.2rem,5.5vw,3.75rem)] uppercase leading-[0.95] tracking-[0.04em]"
              style={{ fontFamily: DISPLAY }}
            >
              Start with a
              <br />
              discovery call
            </h2>
            <p className="mb-8 max-w-md text-xl italic leading-relaxed text-[#F7F3EB]/65">
              Our downtown Allentown studio is ready to listen. Tell us the goal - we&apos;ll map the film.
            </p>
            <a
              href={TRACKED_PHONE_TEL}
              id="lp-contact-call"
              data-cta="call-now"
              data-lp-cta="contact-call"
              className="mb-8 inline-flex items-center gap-3 text-[clamp(1.75rem,4vw,2.5rem)] text-[#F7F3EB] transition hover:text-[#BC271C]"
              style={{ fontFamily: DISPLAY }}
            >
              <Phone className="h-6 w-6 text-[#BC271C] md:h-7 md:w-7" aria-hidden />
              {TRACKED_PHONE_DISPLAY}
            </a>
            <p className="text-sm tracking-wide text-[#F7F3EB]/4">
              Typical project investment starts around $10k. Premium craft for brands that care how they look.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            {formStatus === 'success' ? (
              <div
                id="lp-form-thank-you"
                className="border border-emerald-500/25 bg-emerald-500/[0.07] px-7 py-12 text-center"
                role="status"
                aria-live="polite"
                data-lp-conversion="discovery-form-success"
              >
                <CheckCircle2 className="mx-auto mb-4 h-11 w-11 text-emerald-400" aria-hidden />
                <p className="mb-2 text-lg uppercase tracking-[0.16em] text-[#F7F3EB]" style={{ fontFamily: DISPLAY }}>
                  Request received
                </p>
                <p className="mb-7 text-base italic text-[#F7F3EB]/65">
                  We&apos;ll reach out to schedule your discovery call. Prefer to talk now?
                </p>
                <a
                  href={TRACKED_PHONE_TEL}
                  data-cta="call-now"
                  className="inline-flex items-center justify-center bg-[#BC271C] px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-[#F7F3EB]"
                  style={{ fontFamily: DISPLAY }}
                >
                  Call {TRACKED_PHONE_DISPLAY}
                </a>
              </div>
            ) : (
              <form
                id="lp-discovery-form"
                data-lp-form="discovery"
                className="space-y-4 border border-white/10 bg-black/35 p-6 md:p-8"
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
                {(
                  [
                    ['lp-name', 'name', 'Name', 'text', 'name'],
                    ['lp-email', 'email', 'Email', 'email', 'email'],
                    ['lp-phone', 'phone', 'Phone', 'tel', 'tel'],
                  ] as const
                ).map(([id, name, label, type, autoComplete]) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="mb-1.5 block text-[0.62rem] uppercase tracking-[0.2em] text-[#F7F3EB]/45"
                      style={{ fontFamily: DISPLAY }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={name}
                      type={type}
                      required
                      autoComplete={autoComplete}
                      className="w-full border border-white/12 bg-[#080807]/80 px-4 py-3.5 text-[#F7F3EB] outline-none transition focus:border-[#BC271C]"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="lp-project"
                    className="mb-1.5 block text-[0.62rem] uppercase tracking-[0.2em] text-[#F7F3EB]/45"
                    style={{ fontFamily: DISPLAY }}
                  >
                    Project type
                  </label>
                  <select
                    id="lp-project"
                    name="project-type"
                    required
                    defaultValue="commercial"
                    className="w-full border border-white/12 bg-[#080807]/80 px-4 py-3.5 text-[#F7F3EB] outline-none focus:border-[#BC271C]"
                  >
                    <option value="commercial">Commercial video</option>
                    <option value="brand-film">Brand film</option>
                    <option value="social-media">Social media video</option>
                    <option value="music-video">Music video</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="lp-goal"
                    className="mb-1.5 block text-[0.62rem] uppercase tracking-[0.2em] text-[#F7F3EB]/45"
                    style={{ fontFamily: DISPLAY }}
                  >
                    One-line goal
                  </label>
                  <input
                    id="lp-goal"
                    name="message"
                    required
                    placeholder="e.g. Launch film for Q3 campaign"
                    className="w-full border border-white/12 bg-[#080807]/80 px-4 py-3.5 text-[#F7F3EB] outline-none placeholder:text-white/25 focus:border-[#BC271C]"
                  />
                </div>
                <input type="hidden" name="budget" value="10k-25k" />
                <input type="hidden" name="timeline" value="flexible" />

                {formStatus === 'error' && (
                  <p className="text-sm text-red-400" role="alert">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  id="lp-form-submit"
                  data-cta="book-discovery-call"
                  data-lp-cta="form-submit"
                  disabled={formStatus === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#BC271C] px-6 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-[#F7F3EB] transition hover:bg-[#d12f22] disabled:opacity-70"
                  style={{ fontFamily: DISPLAY }}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    'Book a Discovery Call'
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] px-5 py-10 pb-24 text-sm text-[#F7F3EB]/4 md:px-10 md:pb-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p style={{ fontFamily: DISPLAY }} className="text-[0.65rem] uppercase tracking-[0.16em]">
            Nick Asenjo Films · {STUDIO_ADDRESS_LINE}, {STUDIO_CITY_LINE}
          </p>
          <p>
            <a href={TRACKED_PHONE_TEL} className="text-[#F7F3EB]/65 transition hover:text-[#BC271C]">
              {TRACKED_PHONE_DISPLAY}
            </a>
            <span className="mx-3 text-white/20">·</span>
            © 2026 Nick Asenjo Films
          </p>
        </div>
      </footer>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Work sample video"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="absolute -top-11 right-0 text-[0.65rem] uppercase tracking-[0.2em] text-white/70 hover:text-white"
              style={{ fontFamily: DISPLAY }}
              onClick={() => setActiveVideo(null)}
            >
              Close
            </button>
            <div className="aspect-video w-full overflow-hidden bg-black shadow-[0_0_80px_rgba(188,39,28,0.25)]">
              <iframe
                title="Portfolio film"
                className="h-full w-full border-0"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
