import { useEffect } from 'react';
import {
  ArrowRight,
  Building2,
  Check,
  Clapperboard,
  Globe2,
  LayoutGrid,
  Mail,
  MapPin,
  Megaphone,
  MessageSquare,
  Radio,
  Receipt,
  Users,
  Video,
  Youtube,
} from 'lucide-react';
import platformWordmark from '../assets/the-platform/the-platform-wordmark-white.png?url';
import platformHeroStill from '../assets/finalchangesforwebsitebeforelaunch/Services - The Platform.jpg?url';
import { CONTACT_FORM_COPY_EMAIL, mailtoOwner } from '../config/siteContact';

const lemon = { fontFamily: 'Lemon Milk, sans-serif' } as const;

const phases = [
  {
    phase: '01',
    name: 'Foundation',
    timing: 'Weeks 1–3',
    goal: 'Make The Platform findable and bookable.',
    deliverables: [
      'Website structure: rooms, rentals, services, contact / booking CTA',
      'Google Business Profile claimed, optimized, linked',
      'GoHighLevel account + pipelines (leads → booked → paid)',
      'Core contact list + forms wired into GHL',
    ],
  },
  {
    phase: '02',
    name: 'Automation',
    timing: 'Weeks 3–5',
    goal: 'Remove manual follow-up and billing chase.',
    deliverables: [
      'SMS automations (reminders, follow-ups, promos)',
      'Email automations (nurture + studio offers)',
      'Invoice & receipt flows on booked jobs',
      'GHL as the single ops / tracking hub',
    ],
  },
  {
    phase: '03',
    name: 'Demand',
    timing: 'Weeks 5–8',
    goal: 'Fill rooms from local + drive-radius search.',
    deliverables: [
      'Google Ads: “production studio near me” (local zips)',
      'Expansion: “best production studio” in surrounding travel areas',
      'Landing pages + GHL capture on every campaign',
      'Baseline reporting dashboard for Nick',
    ],
  },
  {
    phase: '04',
    name: 'Content engine',
    timing: 'Ongoing from Week 6',
    goal: 'Own attention with a repeatable YouTube formula.',
    deliverables: [
      'Long-form YouTube cadence (studio / series / behind the build)',
      'Cutdowns → Shorts → Reels → TikToks',
      'Repurpose workflow Nick can shoot; Remy systems distribute',
      'Optional: package this same system for other studio owners',
    ],
  },
];

const remyServices = [
  {
    title: 'Website',
    for: 'What Remy builds',
    detail:
      'A premium site that showcases the 3 themed rooms, rentals, products, and services — designed so visitors book, not just browse.',
    icon: Globe2,
  },
  {
    title: 'GoHighLevel',
    for: 'Ops hub',
    detail:
      'Full GHL setup as the main data center: contacts, pipelines, appointments, and revenue tracking in one place.',
    icon: LayoutGrid,
  },
  {
    title: 'Automations',
    for: 'Hands-off follow-through',
    detail:
      'Text marketing, email marketing, invoices, receipts, and contact lists — automated so the studio stays booked without busywork.',
    icon: Radio,
  },
  {
    title: 'Google Business',
    for: 'Local presence',
    detail:
      'Profile claimed, optimized, and linked to the website / booking / contact so “near me” searches land on The Platform.',
    icon: MapPin,
  },
  {
    title: 'Paid ads',
    for: 'Demand gen',
    detail:
      'Local zip campaigns plus surrounding areas people will travel from. Built to feed GHL, not vanity clicks.',
    icon: Megaphone,
  },
  {
    title: 'Content engine',
    for: 'YouTube formula',
    detail:
      'Long YouTube → Shorts → Reels → TikToks. Same footage, multi-platform reach — Remy’s distribution system around Nick’s production.',
    icon: Youtube,
  },
];

const automations = [
  { title: 'Text marketing', line: 'Reminders, follow-ups, and promo blasts without manual texts.', icon: MessageSquare },
  { title: 'Email marketing', line: 'Nurture sequences and studio offers from one tagged list.', icon: Mail },
  { title: 'Invoices & receipts', line: 'Booked → billed → paid, without chasing paperwork.', icon: Receipt },
  { title: 'Contact lists', line: 'Every lead, renter, and vendor stays clean and searchable.', icon: Users },
  { title: 'GHL command center', line: 'One hub tracks conversations, pipelines, and revenue.', icon: LayoutGrid },
];

const investmentLines = [
  { item: 'Website (rooms, rentals, services, CTAs)', note: 'Build + launch' },
  { item: 'GoHighLevel setup + pipelines', note: 'One-time setup' },
  { item: 'Automations suite (SMS, email, billing, lists)', note: 'Build + train' },
  { item: 'Google Business Profile', note: 'Setup + optimize' },
  { item: 'Local ads (near-me + travel zips)', note: 'Setup + manage' },
  { item: 'Content engine (YouTube formula)', note: 'System + cadence' },
  { item: 'Ongoing digital / ads / content retainer', note: 'Optional monthly' },
];

const roles = [
  {
    who: 'Nick Asenjo',
    role: 'Studio & production',
    owns: [
      '3 themed rooms + rental experience',
      'Production quality and on-camera content',
      'Studio builds for other owners',
      'Approvals on brand, offers, and pricing',
    ],
  },
  {
    who: 'Remy',
    role: 'Digital build & growth',
    owns: [
      'Website, GHL, automations, GBP',
      'Ads strategy and campaign build',
      'Content distribution system',
      'Reporting and iteration',
    ],
  },
  {
    who: 'Collective partners (TBD)',
    role: 'Up to 3 example businesses',
    owns: [
      'Complementary offers sold with The Platform',
      'Shared lead handoff via GHL',
      'Co-branded packages where it makes sense',
    ],
  },
];

export function OwnerThePlatformPage() {
  useEffect(() => {
    document.title = 'The Platform — Business & Build Plan | Nick Asenjo Films';
    window.scrollTo(0, 0);
  }, []);

  const discussHref = mailtoOwner('The Platform — business & build plan review');

  return (
    <div className="min-h-screen bg-[#EEEEE8] pt-20 text-black">
      {/* Cover */}
      <section className="relative overflow-hidden bg-black text-white">
        <img
          src={platformHeroStill}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(165deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.62) 50%, rgba(0,0,0,0.95) 100%)',
          }}
          aria-hidden
        />

        <div className="relative z-10 container mx-auto max-w-4xl px-6 py-20 lg:px-12 lg:py-28">
          <p className="mb-4 text-[0.65rem] tracking-[0.28em] text-[#BC271C] uppercase" style={lemon}>
            Internal proposal · For Nick Asenjo
          </p>
          <img
            src={platformWordmark}
            alt="The Platform"
            className="mb-8 h-auto w-full max-w-sm drop-shadow-2xl md:max-w-md"
          />
          <h1
            className="mb-5 max-w-3xl tracking-tight"
            style={{ ...lemon, fontSize: 'clamp(1.85rem, 4.5vw, 3rem)', lineHeight: 1.08 }}
          >
            Business &amp; build plan
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            How Remy proposes to build The Platform into a bookable studio business — website,
            GoHighLevel, automations, local ads, and a content engine — so the rooms stay filled
            and the system can be sold to other studio owners later.
          </p>
          <p className="mb-10 text-sm text-white/50">
            Prepared for Nick · Delivered by Remy ({CONTACT_FORM_COPY_EMAIL}) · Review &amp; mark up
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#plan"
              className="inline-flex items-center justify-center gap-2 bg-[#BC271C] px-8 py-4 text-sm tracking-wider text-white uppercase transition-colors hover:bg-[#9a1f16]"
              style={lemon}
            >
              Read the plan <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={discussHref}
              className="inline-flex items-center justify-center gap-2 border border-white/25 px-8 py-4 text-sm tracking-wider text-white uppercase transition-colors hover:border-[#BC271C]/60"
              style={lemon}
            >
              Discuss / approve
            </a>
            <a
              href="/owner-dashboard"
              className="inline-flex items-center justify-center gap-2 px-4 py-4 text-xs tracking-wider text-white/45 uppercase hover:text-white"
              style={lemon}
            >
              ← Owner dashboard
            </a>
          </div>
        </div>
      </section>

      {/* Executive summary */}
      <section id="plan" className="scroll-mt-24 border-b border-black/10 py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
            1 · Executive summary
          </p>
          <h2 className="mb-6 tracking-tight" style={{ ...lemon, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>
            What this plan is
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-black/75">
            <p>
              Nick built <strong className="text-black">The Platform</strong>: a production studio with{' '}
              <strong className="text-black">3 differently themed rooms</strong> for rent, plus the
              ability to help other people set up studios. This plan is Remy’s proposed digital build —
              not a one-page brochure, a full business system around that space.
            </p>
            <p>
              Goal: make The Platform easy to find, easy to book, and easy to run. Then package the same
              digital stack (site + GHL + ads + content) so it can be sold à la carte to other studio
              owners Nick works with.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { k: 'Asset', v: '3 themed rental rooms + studio expertise' },
              { k: 'System', v: 'Website · GHL · automations · ads · content' },
              { k: 'Upside', v: 'Fill rooms now · productize for other studios later' },
            ].map((x) => (
              <div key={x.k} className="border border-black/10 bg-white p-5">
                <p className="mb-1 text-[0.65rem] tracking-[0.2em] text-[#BC271C] uppercase" style={lemon}>
                  {x.k}
                </p>
                <p className="text-sm leading-relaxed text-black/75">{x.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business model */}
      <section className="border-b border-black/10 py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
            2 · Business model
          </p>
          <h2 className="mb-6 tracking-tight" style={{ ...lemon, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>
            How The Platform makes money
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: 'Room rentals',
                detail: 'Three themed rooms rented by creators, brands, and performers who need a finished set.',
              },
              {
                icon: Clapperboard,
                title: 'Production',
                detail: 'Nick Asenjo Films as the in-house production arm — shoots that also feed the content engine.',
              },
              {
                icon: Video,
                title: 'Studio builds',
                detail: 'Nick sets up studios for others. Remy’s digital stack becomes an add-on product for those clients.',
              },
            ].map((card) => (
              <article key={card.title} className="border border-black/10 bg-white p-6">
                <card.icon className="mb-4 h-5 w-5 text-[#BC271C]" aria-hidden />
                <h3 className="mb-2 text-sm tracking-wide uppercase" style={lemon}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-black/65">{card.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-black/60">
            Digital services (this plan) sit on top: they fill Nick’s rooms first, then become sellable
            line items when Nick stands up studios for other people.
          </p>
        </div>
      </section>

      {/* Remy scope */}
      <section className="border-b border-black/10 bg-white py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
            3 · Remy’s scope of work
          </p>
          <h2 className="mb-3 tracking-tight" style={{ ...lemon, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>
            What I build for you
          </h2>
          <p className="mb-10 max-w-2xl text-sm text-black/60">
            Each item below is a clear deliverable Remy owns. Nick approves creative direction and offers;
            Remy implements systems and growth.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {remyServices.map((s) => (
              <article key={s.title} className="border border-black/10 bg-[#EEEEE8]/80 p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <s.icon className="h-5 w-5 text-[#BC271C]" aria-hidden />
                  <span className="text-[0.65rem] tracking-[0.15em] text-black/40 uppercase" style={lemon}>
                    {s.for}
                  </span>
                </div>
                <h3 className="mb-2 text-sm tracking-wide uppercase" style={lemon}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-black/65">{s.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Build phases */}
      <section className="border-b border-black/10 py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
            4 · Build timeline
          </p>
          <h2 className="mb-10 tracking-tight" style={{ ...lemon, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>
            Phased rollout
          </h2>
          <ol className="space-y-6">
            {phases.map((p) => (
              <li key={p.phase} className="grid gap-4 border border-black/10 bg-white p-6 md:grid-cols-[5.5rem_1fr]">
                <div>
                  <p className="text-2xl text-[#BC271C]" style={lemon}>
                    {p.phase}
                  </p>
                  <p className="mt-1 text-[0.65rem] tracking-[0.15em] text-black/40 uppercase" style={lemon}>
                    {p.timing}
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg" style={lemon}>
                    {p.name}
                  </h3>
                  <p className="mb-4 text-sm text-black/60">{p.goal}</p>
                  <ul className="space-y-2">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex gap-2 text-sm text-black/75">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#BC271C]" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Automations */}
      <section className="border-b border-black/10 bg-black py-16 text-white lg:py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
            5 · Automations (plain English)
          </p>
          <h2 className="mb-3 tracking-tight" style={{ ...lemon, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>
            What we automate
          </h2>
          <p className="mb-10 max-w-2xl text-sm text-white/55">
            Short labels Nick can skim. GoHighLevel is the hub everything runs through.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {automations.map((a) => (
              <article key={a.title} className="border border-white/10 bg-white/[0.03] p-5">
                <a.icon className="mb-3 h-4 w-4 text-[#BC271C]" aria-hidden />
                <h3 className="mb-2 text-xs tracking-wider uppercase" style={lemon}>
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/65">{a.line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ads + content */}
      <section className="border-b border-black/10 py-16 lg:py-20">
        <div className="container mx-auto grid max-w-4xl gap-12 px-6 lg:px-12">
          <div>
            <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
              6 · Ads plan
            </p>
            <h2 className="mb-4 tracking-tight" style={{ ...lemon, fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)' }}>
              Geo strategy
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-black/70">
              <li className="border-l-2 border-[#BC271C] pl-4">
                <strong className="text-black">Layer A — Near me:</strong> “production studio near me” and
                related terms on local zips around The Platform.
              </li>
              <li className="border-l-2 border-black/15 pl-4">
                <strong className="text-black">Layer B — Travel radius:</strong> “best production studio”
                style campaigns in surrounding areas people will drive from.
              </li>
              <li className="border-l-2 border-black/15 pl-4">
                <strong className="text-black">Always:</strong> every ad lands on a page that feeds GoHighLevel
                so Nick sees leads, not just spend.
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
              7 · Content engine
            </p>
            <h2 className="mb-4 tracking-tight" style={{ ...lemon, fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)' }}>
              YouTube formula
            </h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { n: '01', t: 'Long YouTube', d: 'Hero film / episode' },
                { n: '02', t: 'Shorts', d: 'Discovery hooks' },
                { n: '03', t: 'Reels', d: 'IG-native cuts' },
                { n: '04', t: 'TikToks', d: 'Reach beyond followers' },
              ].map((s) => (
                <div key={s.n} className="border border-black/10 bg-white p-4">
                  <p className="mb-1 text-[0.65rem] tracking-[0.2em] text-[#BC271C]" style={lemon}>
                    {s.n}
                  </p>
                  <h3 className="mb-1 text-sm" style={lemon}>
                    {s.t}
                  </h3>
                  <p className="text-xs text-black/55">{s.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-black/60">
              Nick produces. Remy systems cut, schedule, and track. Same formula becomes a sellable service
              when Nick builds studios for others.
            </p>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="border-b border-black/10 bg-white py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
            8 · Who owns what
          </p>
          <h2 className="mb-10 tracking-tight" style={{ ...lemon, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>
            Roles
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {roles.map((r) => (
              <article key={r.who} className="border border-black/10 p-5">
                <p className="mb-1 text-[0.65rem] tracking-[0.18em] text-[#BC271C] uppercase" style={lemon}>
                  {r.role}
                </p>
                <h3 className="mb-4 text-base" style={lemon}>
                  {r.who}
                </h3>
                <ul className="space-y-2">
                  {r.owns.map((o) => (
                    <li key={o} className="flex gap-2 text-sm text-black/70">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#BC271C]" aria-hidden />
                      {o}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="border-b border-black/10 py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
            9 · Investment line items
          </p>
          <h2 className="mb-3 tracking-tight" style={{ ...lemon, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>
            What gets priced
          </h2>
          <p className="mb-8 max-w-2xl text-sm text-black/60">
            À la carte so Nick can approve phase-by-phase. Exact dollar amounts filled after scope call —
            this is the menu we quote against.
          </p>
          <div className="overflow-hidden border border-black/10 bg-white">
            {investmentLines.map((row, i) => (
              <div
                key={row.item}
                className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  i !== investmentLines.length - 1 ? 'border-b border-black/8' : ''
                }`}
              >
                <span className="text-sm text-black/80">{row.item}</span>
                <span className="text-xs tracking-wider text-black/40 uppercase" style={lemon}>
                  {row.note}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-black/55">
            Recommended start: Foundation + Automation (Phases 1–2), then layer Demand and Content once
            booking flow is live.
          </p>
        </div>
      </section>

      {/* Later vs now */}
      <section className="border-b border-black/10 py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
            10 · Scope guardrails
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-black/10 bg-white p-6">
              <h3 className="mb-4 text-sm tracking-wider uppercase text-[#BC271C]" style={lemon}>
                On this plan
              </h3>
              <ul className="space-y-2 text-sm text-black/70">
                {[
                  'Website for The Platform',
                  'GHL + automations',
                  'Google Business',
                  'Local ads + content engine',
                  'Optional monthly retainer',
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#BC271C]" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-dashed border-black/20 p-6">
              <h3 className="mb-4 text-sm tracking-wider uppercase text-black/40" style={lemon}>
                Later (not in v1)
              </h3>
              <ul className="space-y-2 text-sm text-black/55">
                {[
                  'Deep multi-location SEO programs',
                  'Full franchise / multi-studio kit',
                  'Heavy agency creative retainers',
                  'Partner businesses fully named & contracted',
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/25" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="bg-black py-20 text-white">
        <div className="container mx-auto max-w-3xl px-6 text-center lg:px-12">
          <p className="mb-3 text-[0.65rem] tracking-[0.25em] text-[#BC271C] uppercase" style={lemon}>
            Next steps for Nick
          </p>
          <h2
            className="mb-6 tracking-tight"
            style={{ ...lemon, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
          >
            Review → decide → we build
          </h2>
          <ol className="mb-10 space-y-3 text-left text-sm text-white/70">
            <li className="flex gap-3 border border-white/10 px-4 py-3">
              <span className="text-[#BC271C]" style={lemon}>1</span>
              Read this plan and mark what you want in Phase 1.
            </li>
            <li className="flex gap-3 border border-white/10 px-4 py-3">
              <span className="text-[#BC271C]" style={lemon}>2</span>
              Confirm room names / rental offers Remy should put on the site.
            </li>
            <li className="flex gap-3 border border-white/10 px-4 py-3">
              <span className="text-[#BC271C]" style={lemon}>3</span>
              Approve budget bands for ads + optional retainer.
            </li>
            <li className="flex gap-3 border border-white/10 px-4 py-3">
              <span className="text-[#BC271C]" style={lemon}>4</span>
              Kickoff: Foundation (site + GBP + GHL) starts immediately after approval.
            </li>
          </ol>
          <a
            href={discussHref}
            className="inline-flex items-center justify-center gap-2 bg-[#BC271C] px-10 py-4 text-sm tracking-wider uppercase transition-colors hover:bg-[#9a1f16]"
            style={lemon}
          >
            Reply to Remy on this plan
          </a>
        </div>
      </section>
    </div>
  );
}
