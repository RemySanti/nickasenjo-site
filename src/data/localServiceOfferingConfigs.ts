export type ServicePageSeo = {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  /** Extra schema.org serviceType strings for this page */
  schemaServiceTypes: string[];
};

export type LocalServiceOfferingConfig = {
  /** Must match App.tsx `currentPage` for this route */
  seoPageKey: string;
  seo: ServicePageSeo;
  shortName: string;
  h1: string;
  heroKicker: string;
  heroLead: string;
  introHeading: string;
  introParagraphs: string[];
  offerings: { title: string; body: string }[];
  localHeading: string;
  localParagraph: string;
  faq: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
  /** Optional hero line above phone CTAs (e.g. show / podcast booking) */
  ctaIntro?: string;
};

export const commercialVideoOffering: LocalServiceOfferingConfig = {
  seoPageKey: 'commercial-video-detail',
  seo: {
    title: 'Commercial Video Production Allentown & Lehigh Valley | Nick Asenjo Films',
    description:
      'Commercial video production in Allentown, PA and the Lehigh Valley. Spots, launch films, and campaign content for brands in Bethlehem, Easton, Emmaus, and surrounding markets, with cinematic craft and measurable messaging.',
    keywords:
      'commercial video production Allentown, commercial video Lehigh Valley, brand commercial PA, advertising video Bethlehem, corporate campaign video Easton, video production near me Allentown, Nick Asenjo Films',
    ogTitle: 'Commercial Video | Allentown & Lehigh Valley',
    ogDescription:
      'Drive launches and sales with commercial video built for Lehigh Valley brands, from Allentown headquarters to regional campaigns.',
    schemaServiceTypes: [
      'Commercial Video Production',
      'Advertising Video Production',
      'Brand Campaign Video',
    ],
  },
  shortName: 'Commercial & campaigns',
  h1: 'Commercial video production in Allentown & the Lehigh Valley',
  heroKicker: 'Sales, launches & campaigns',
  heroLead:
    'Strategic commercial filmmaking for companies that need clarity, polish, and performance, rooted in downtown Allentown and trusted across Eastern PA.',
  introHeading: 'Built for brands that need the phone to ring',
  introParagraphs: [
    'Whether you are headquartered on Hamilton Street, scaling from a Bethlehem industrial campus, or marketing into the Lehigh Valley from the surrounding counties, commercial video should do one job first: move your audience to action.',
    'Nick Asenjo Films plans, shoots, and finishes commercial work with a cinematic standard so your brand feels premium on broadcast, paid social, YouTube pre-roll, and the showroom floor. We know the region’s pace, industries, and visual expectations because we live and work here.',
    'Typical projects include product launches, service explainers, franchise and dealer spots, recruitment campaigns, and integrated digital suites, always with a disciplined message hierarchy and deliverables your marketing team can ship fast.',
  ],
  offerings: [
    {
      title: 'Campaign & launch films',
      body: 'One hero film or a modular kit of cuts for paid media, landing pages, and sales enablement, timed for your go-to-market date.',
    },
    {
      title: 'Broadcast & streaming-ready masters',
      body: 'Technical specs, safe titles, loudness, and aspect ratios handled so your spot is cleared for air and digital without surprises.',
    },
    {
      title: 'Location-forward storytelling',
      body: 'Authentic Lehigh Valley backdrops (downtown Allentown, SteelStacks, river towns, campuses, plants, and retail) without looking generic.',
    },
  ],
  localHeading: 'Where we shoot & deliver',
  localParagraph:
    'Based at 532 Hamilton Street in Allentown, we routinely produce commercial video throughout the Lehigh Valley core (Bethlehem, Easton, Emmaus, Whitehall, Macungie, the Route 22 corridor) and for regional clients drawing talent and customers from New Jersey and the wider Northeast.',
  faq: [
    {
      question: 'Do you work with agencies and in-house marketing teams?',
      answer:
        'Yes. We can take creative from your agency of record or partner directly with your marketing lead. Estimates, treatments, and revisions are structured so procurement and brand teams stay aligned.',
    },
    {
      question: 'What industries do you shoot most in the Lehigh Valley?',
      answer:
        'Healthcare, industrial and manufacturing, automotive and mobility, higher education, hospitality, professional services, and consumer brands. If your story is complex, that is where cinematic process helps most.',
    },
    {
      question: 'How far will you travel for a commercial shoot?',
      answer:
        'Most commercial production happens within a ninety-minute radius of Allentown. For national or multi-market campaigns we travel with the same crew discipline and production standards.',
    },
    {
      question: 'How do we get a quote for a commercial project?',
      answer:
        'Start with a short discovery call: goals, audience, timeline, and distribution. We respond with a scoped estimate and, when helpful, tiered options so you can match budget to ambition.',
    },
  ],
  relatedLinks: [
    { label: 'Portfolio: commercial & campaigns', href: '#work-page' },
    { label: 'Commercial video: Allentown focus', href: '#video-allentown' },
    { label: 'Studio partnership (retainer)', href: '#service-studio-retainer' },
    { label: 'The Platform: show & podcast', href: '#the-platform' },
    { label: 'All services by goal', href: '#services' },
  ],
};

export const brandStoryOffering: LocalServiceOfferingConfig = {
  seoPageKey: 'brand-story-service',
  seo: {
    title: 'Brand Film & Story Video | Lehigh Valley & Allentown | Nick Asenjo Films',
    description:
      'Brand films and story-driven video in Allentown and the Lehigh Valley. Position your company with cinematic narratives for websites, events, and investor moments, serving Bethlehem, Easton, and surrounding PA markets.',
    keywords:
      'brand film Allentown, brand video Lehigh Valley, corporate story video Bethlehem, about us video Easton, company culture video PA, brand documentary Lehigh Valley, Nick Asenjo Films',
    ogTitle: 'Brand films & story video | Lehigh Valley',
    ogDescription:
      'Elevate trust and recognition with brand-led films shot and finished by an Allentown-based production company.',
    schemaServiceTypes: ['Brand Film Production', 'Corporate Storytelling Video', 'Brand Documentary'],
  },
  shortName: 'Brand & story',
  h1: 'Brand films & story-driven video in the Lehigh Valley',
  heroKicker: 'Trust, positioning & memorability',
  heroLead:
    'When your reputation is the product, the story has to feel inevitable: crafted for your site, your keynote, and the moments investors and customers decide who you are.',
  introHeading: 'More than a pretty montage',
  introParagraphs: [
    'Brand films work when strategy meets cinema: a clear point of view, real people and real places, and visuals that match the caliber of your organization. From Allentown to Bethlehem and across the Valley, we help leadership teams articulate why they matter, not just what they sell.',
    'We collaborate with founders, marketing directors, and communications leads to shape arcs that hold up on your homepage, at a SteelStacks premiere, or in a boardroom. That means interview direction, b-roll that actually supports the thesis, music and sound that carry emotion, and color that feels like your brand, not a template.',
    'If you are rebranding, opening a flagship facility, celebrating a milestone, or unifying employees after growth, a single flagship film or a small suite of chaptered stories can anchor every channel for years.',
  ],
  offerings: [
    {
      title: 'Flagship brand films',
      body: 'Long-form centerpiece stories with art direction, casting when needed, and a score that belongs to your brand.',
    },
    {
      title: 'Executive & mission messaging',
      body: 'Credible on-camera leadership, tight scripts, and visuals that reinforce governance, safety, and culture themes.',
    },
    {
      title: 'Campaign-ready cutdowns',
      body: 'Vertical and horizontal derivatives so PR, paid social, and internal comms can launch together.',
    },
  ],
  localHeading: 'Rooted in Allentown, trusted regionally',
  localParagraph:
    'We are blocks from the Lehigh Valley’s densest corporate and healthcare cluster, with fast access to Bethlehem’s arts corridor, Easton’s riverfront, and industrial campuses along I-78 and Route 33. That proximity keeps production efficient and authentic to place.',
  faq: [
    {
      question: 'How is a brand film different from a commercial?',
      answer:
        'Commercials optimize for a single offer or CTA in short time. Brand films breathe: building belief, culture, and differentiation. Many clients use both: a brand film as the spine and shorter commercials as the activators.',
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer:
        'Absolutely. We ingest typography, color, voice, and legal guardrails up front so creative stays on-brand through scripting, graphics, and finishing.',
    },
    {
      question: 'Do you handle interviews with busy executives?',
      answer:
        'Yes. We schedule concise prep, coach for natural delivery without sounding stiff, and design coverage so editors have flexibility in post.',
    },
    {
      question: 'Where should we premiere a brand film internally?',
      answer:
        'All-hands, leadership retreats, customer advisory boards, and intranets are common first screens, then public web and social. We can advise on rollout sequencing for Lehigh Valley and national audiences.',
    },
  ],
  relatedLinks: [
    { label: 'See brand & commercial work', href: '#work-page' },
    { label: 'The Platform: founder & artist stories', href: '#the-platform' },
    { label: 'Documentary-style truth', href: '#service-documentary' },
    { label: 'All services by goal', href: '#services' },
  ],
};

export const socialVideoOffering: LocalServiceOfferingConfig = {
  seoPageKey: 'social-video-service',
  seo: {
    title: 'Social Media Video Production Lehigh Valley & Allentown | Nick Asenjo Films',
    description:
      'Social-first video production for Allentown, Bethlehem, Easton, and the Lehigh Valley. Reels, shorts, and campaign content engineered for retention, shot with cinematic standards and delivered for TikTok, Instagram, YouTube, and paid social.',
    keywords:
      'social media video Allentown, reels production Lehigh Valley, TikTok video production PA, Instagram video Bethlehem, short form video Easton, brand content studio Allentown, Nick Asenjo Films',
    ogTitle: 'Social video production | Lehigh Valley',
    ogDescription:
      'Grow reach and consistency with platform-native video from a Lehigh Valley crew that understands hooks, pacing, and brand voice.',
    schemaServiceTypes: ['Social Media Video Production', 'Short-Form Video Content', 'Digital Marketing Video'],
  },
  shortName: 'Social & short-form',
  h1: 'Social media video production in Allentown & the Lehigh Valley',
  heroKicker: 'Hooks, retention & platform-native craft',
  heroLead:
      'The feed rewards clarity and rhythm. We produce social video that respects algorithms without sacrificing the cinematic quality your brand deserves.',
  introHeading: 'Built for platforms, not repurposed leftovers',
  introParagraphs: [
    'Short-form success is not “the long ad, but shorter.” It is intentional framing, sound design that reads on a phone speaker, captions that scan, and visuals that stop thumbs in the first second.',
    'From downtown Allentown to Bethlehem’s nightlife and Easton’s retail corridors, we shoot where your customers actually live and shop, so content feels local when it should and elevated when you are reaching wider.',
    'We can operate as your always-on content partner or as a bolt-on studio for a quarterly sprint: storyboards, shoot days optimized for multiple deliverables, and edit packages sized for Reels, Shorts, Stories, and paid placements.',
  ],
  offerings: [
    {
      title: 'Reels, Shorts & TikTok packages',
      body: 'Vertical-first cinematography, fast-cut variants, and end cards tuned to your CTA and tracking.',
    },
    {
      title: 'Creator-style brand authenticity',
      body: 'Direction that keeps talent relaxed on camera while maintaining brand guardrails and legal clearance.',
    },
    {
      title: 'Campaign bursts & b-roll banks',
      body: 'Shoot once, publish for weeks: libraries of modular clips for internal teams and agencies to deploy.',
    },
  ],
  localHeading: 'Lehigh Valley locations that read on camera',
  localParagraph:
    'We know the backstreets, venues, and vistas that read as “here” to a Valley audience, and how to light and lens them so national viewers still feel polish. Travel for regional or national social pushes is available with the same team.',
  faq: [
    {
      question: 'Do you include hooks and scripting for social?',
      answer:
        'Yes. We can collaborate on scripts, on-screen text, and shot lists optimized per platform, or work from your creative team’s brief with rapid turnaround.',
    },
    {
      question: 'Can we batch a month of content in one shoot?',
      answer:
        'That is one of our most common requests. We design run-of-show, wardrobe, and set changes so you leave with a calendar of finished posts, not just a hard drive of files.',
    },
    {
      question: 'Do you handle vertical and horizontal masters?',
      answer:
        'We plan composition for safe areas and deliver aspect-ratio-specific masters so crops never ruin your hero shots.',
    },
    {
      question: 'What about paid social vs organic?',
      answer:
        'We deliver safe zones, CTA end cards, and alternate openings for A/B tests. Media buying is typically handled by your agency, but we speak that language for handoffs.',
    },
  ],
  relatedLinks: [
    { label: 'Portfolio: social & campaigns', href: '#work-page' },
    { label: 'Drive sales with commercial', href: '#service-commercial-video' },
    { label: 'All services by goal', href: '#services' },
  ],
};

export const musicVideoOffering: LocalServiceOfferingConfig = {
  seoPageKey: 'music-video-detail',
  seo: {
    title: 'Music Video Production Allentown & Lehigh Valley PA | Nick Asenjo Films',
    description:
      'Music video production in Allentown, PA and the Lehigh Valley for artists and labels. Cinematic visuals, performance direction, and post, serving Eastern PA, Philadelphia metro access, and regional tours.',
    keywords:
      'music video production Allentown, music video Lehigh Valley, hip hop video PA, artist visuals Bethlehem, performance video Easton, music video director Allentown, Nick Asenjo Films',
    ogTitle: 'Music video production | Allentown & Lehigh Valley',
    ogDescription:
      'Elevate your release with cinematic music videos from an Allentown-based production company trusted by regional and touring artists.',
    schemaServiceTypes: ['Music Video Production', 'Artist Performance Video', 'Lyric Video Production'],
  },
  shortName: 'Music videos',
  h1: 'Music video production in Allentown & the Lehigh Valley',
  heroKicker: 'Artist-forward, cinematic, release-ready',
  heroLead:
    'Treat your single like a premiere. We design visuals that match your sonic identity, whether we are in a warehouse in Bethlehem, a field in the Valley, or a built set in-studio.',
  introHeading: 'From treatment to final color',
  introParagraphs: [
    'Music videos are where rhythm meets lens choice, wardrobe, location, and post. Our process starts with listening (tempo, lyrics, persona), then a treatment that is achievable on budget without diluting ambition.',
    'Allentown and the Lehigh Valley offer diverse looks within a short drive: industrial grit, classic American downtowns, college campuses, rivers, and rural vistas. When the concept needs a bigger canvas, we road-trip with the same core crew.',
    'You get transparent scheduling, clear milestone reviews, and deliverables tailored for YouTube, Vevo, streaming canvas, and social teasers.',
  ],
  offerings: [
    {
      title: 'Concept & treatment',
      body: 'Visual references, story beats, location plans, and a shot list that respects your release calendar.',
    },
    {
      title: 'Performance direction',
      body: 'Coaching that keeps energy high and coverage that gives editorial freedom for pace and emotion.',
    },
    {
      title: 'Edit, grade & online',
      body: 'Color that supports the track’s mood, VFX when it serves the idea, and loudness-aware masters for platforms.',
    },
  ],
  localHeading: 'Lehigh Valley looks without LA overhead',
  localParagraph:
    'Many artists and managers choose Eastern PA for production value: strong crews, real locations, and proximity to New York and Philadelphia when pick-ups or talent flights help the concept.',
  faq: [
    {
      question: 'Do you work with independent artists as well as labels?',
      answer:
        'Yes. Budgets scale with concept complexity. We are direct about what each tier can support so you can prioritize locations, lighting, or post effects intelligently.',
    },
    {
      question: 'Can you help cast dancers or extras?',
      answer:
        'We coordinate casting through trusted partners and handle releases, wardrobe notes, and rehearsal schedules.',
    },
    {
      question: 'What turnaround is realistic?',
      answer:
        'Simple performance pieces can move quickly; narrative-heavy or VFX-driven pieces need more post time. We quote timelines alongside budget so marketing dates are honest.',
    },
    {
      question: 'Do you deliver clean versions for radio or DSPs?',
      answer:
        'We deliver explicit and clean cuts where needed, plus vertical and horizontal crops for promo.',
    },
  ],
  relatedLinks: [
    { label: 'Portfolio: music videos', href: '#work-page' },
    { label: 'The Platform: show & podcast', href: '#the-platform' },
    { label: 'Social clips from your release', href: '#service-social-video' },
    { label: 'All services by goal', href: '#services' },
  ],
};

export const thePlatformShowOffering: LocalServiceOfferingConfig = {
  seoPageKey: 'the-platform',
  seo: {
    title: 'The Platform | Music Video Show & Podcast | Nick Asenjo Films',
    description:
      'The Platform by Nick Asenjo Films: music video performances and episodes plus a podcast spotlighting founders and business owners. Marketing for artists and stories from the Lehigh Valley and beyond. Watch on YouTube.',
    keywords:
      'The Platform Nick Asenjo Films, music video show podcast, artist marketing Lehigh Valley, Pennsylvania music podcast, interview business owners Allentown, Yo Thats The Platform',
    ogTitle: 'The Platform | Nick Asenjo Films',
    ogDescription:
      'Music video episodes and a founder-focused podcast: discover artists and hear how businesses grow.',
    schemaServiceTypes: ['Podcast', 'Music Video Series', 'Artist Marketing', 'Web Series'],
  },
  shortName: 'The Platform',
  h1: 'The Platform: music videos, episodes & a podcast for founders',
  heroKicker: 'Show & podcast',
  heroLead:
    'A Nick Asenjo Films property where musicians step on camera for cinematic performances and conversations, and where business owners share how they build, lead, and market in the real world.',
  introHeading: 'Marketing for artists, signal for brands',
  introParagraphs: [
    'The Platform sits between pure social clips and traditional media: long enough to tell a story, tight enough for how people watch today. Artists get a stage that feels like a music video, not a generic interview set, so fans discover sound and personality together.',
    'On the podcast side, we talk with founders, operators, and creatives who are shaping companies around Allentown, the Lehigh Valley, and the wider region. It is marketing through conversation: useful for listeners, credible for guests, and aligned with how Nick Asenjo Films thinks about craft.',
    'Episodes live on YouTube under the channel brand you may already know as the home for this series. Subscribe there for new drops, full performances, and podcast cuts.',
  ],
  offerings: [
    {
      title: 'Music video performances',
      body: 'Cinematic staging, lighting, and direction so each artist reads as a headline, not background noise in the feed.',
    },
    {
      title: 'Podcast interviews',
      body: 'Long-form conversations with business owners and makers (story first, promo second), edited for clarity and replay value.',
    },
    {
      title: 'Discovery & collaboration',
      body: 'A bridge between audiences who love film-level visuals and guests who want thoughtful exposure beyond a thirty-second ad.',
    },
  ],
  localHeading: 'Filmed in the Valley, built for a wider audience',
  localParagraph:
    'Production is anchored in Allentown and the Lehigh Valley, but The Platform is for anyone who cares about music and business culture, whether you are down the street or watching from across the country.',
  faq: [
    {
      question: 'How does an artist or band get on The Platform?',
      answer:
        'Reach out via email with links to your music, socials, and any press. We review fit, scheduling, and concept, then propose a performance or episode plan that matches your release calendar.',
    },
    {
      question: 'Can a business leader or founder pitch to be on the podcast?',
      answer:
        'Yes. Share who you serve, what you are building, and why the story would resonate now. We prioritize guests with concrete lessons for other owners, not pure pitch decks.',
    },
    {
      question: 'Where do I watch or listen?',
      answer:
        'Episodes publish on the official YouTube channel for The Platform. Follow there for notifications when new music videos and podcast episodes drop.',
    },
    {
      question: 'Is this separate from hiring Nick Asenjo Films for a private commercial or wedding?',
      answer:
        'Yes. The Platform is its own show property. Commercial, brand, social, music, and event work for clients is booked separately. Start from Services if that is what you need.',
    },
  ],
  relatedLinks: [
    {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/@yothatstheplatform',
    },
    { label: 'Portfolio: The Platform category', href: '#work-page' },
    { label: 'Custom music video production', href: '#service-music-video' },
    { label: 'All services by goal', href: '#services' },
  ],
  ctaIntro: 'Pitch an episode, performance, or partnership for The Platform.',
};

export const weddingsEventsOffering: LocalServiceOfferingConfig = {
  seoPageKey: 'weddings-events-service',
  seo: {
    title: 'Wedding & Event Videography Lehigh Valley & Allentown PA | Nick Asenjo Films',
    description:
      'Wedding and event videography in the Lehigh Valley and Allentown, PA. Cinematic films for weddings, galas, and milestone celebrations in Bethlehem, Easton, Emmaus, and nearby: story-led, audio-forward, discreet on the day.',
    keywords:
      'wedding videographer Lehigh Valley, wedding video Allentown, cinematic wedding film Bethlehem, event video Easton PA, wedding film Emmaus, gala videography Allentown, Nick Asenjo Films',
    ogTitle: 'Wedding & event films | Lehigh Valley',
    ogDescription:
      'Preserve milestones with wedding and event films that feel cinematic, not cookie-cutter, shot by an Allentown-based team.',
    schemaServiceTypes: ['Wedding Videography', 'Event Video Production', 'Ceremony Video Recording'],
  },
  shortName: 'Weddings & events',
  h1: 'Wedding & event videography in the Lehigh Valley',
  heroKicker: 'Milestones you will want to relive',
  heroLead:
    'Discreet coverage, intentional audio, and editing that honors the emotion of the day, whether you are marrying in Bethlehem, celebrating in Easton, or hosting a gala downtown.',
  introHeading: 'The day moves fast; the film should feel timeless',
  introParagraphs: [
    'Weddings and major events compress months of planning into hours. Our approach prioritizes real moments: family dynamics, candid reactions, speeches that land, and the small details you will forget unless they are on camera.',
    'We are familiar with Lehigh Valley venues, from historic churches and barns to hotel ballrooms and industrial-chic spaces, so we anticipate lighting challenges, tight timelines, and coordinator flow.',
    'Event films for nonprofits, universities, and companies follow the same discipline: clear story, strong sound, and respectful presence so guests experience the event first, not the crew.',
  ],
  offerings: [
    {
      title: 'Wedding feature & highlight films',
      body: 'Long-form narrative edits plus shareable highlights tuned for social and thank-you notes.',
    },
    {
      title: 'Ceremony & toast audio priority',
      body: 'Redundant recording paths and post mixing so vows and speeches are intelligible and emotional.',
    },
    {
      title: 'Multi-day & destination coverage',
      body: 'Rehearsal dinners, welcome parties, and weekend timelines across the Valley or beyond, planned as one coherent film.',
    },
  ],
  localHeading: 'Lehigh Valley venues we know well',
  localParagraph:
    'Allentown, Bethlehem, and Easton host a wide range of celebration styles. We plan travel, parking, load-in, and venue rules up front so your day stays smooth and footage stays beautiful.',
  faq: [
    {
      question: 'How many shooters will we have?',
      answer:
        'Most weddings use two cinematographers for ceremony and speeches; intimate elopements may use one. We recommend coverage based on guest count, venue layout, and timeline.',
    },
    {
      question: 'When do we receive our films?',
      answer:
        'Delivery windows depend on season length and edit complexity. You receive a clear post schedule at booking, with highlight teasers when agreed.',
    },
    {
      question: 'Do you work with photographers cooperatively?',
      answer:
        'Yes. We communicate lens choices and positioning so both teams get hero shots without stepping on each other.',
    },
    {
      question: 'Can you livestream or deliver ceremony recordings for guests abroad?',
      answer:
        'We can discuss live capture add-ons and expedited ceremony edits for family who cannot travel to the Lehigh Valley.',
    },
  ],
  relatedLinks: [
    { label: 'Portfolio: weddings & events', href: '#work-page' },
    { label: 'Contact & availability', href: '#contact' },
    { label: 'All services by goal', href: '#services' },
  ],
};

export const studioRetainerOffering: LocalServiceOfferingConfig = {
  seoPageKey: 'studio-retainer-service',
  seo: {
    title: 'Studio Retainer & Ongoing Video Partner | Allentown & Lehigh Valley',
    description:
      'Ongoing video production retainer for Lehigh Valley and Allentown brands: priority scheduling, campaign continuity, and consistent cinematic quality across commercial, social, and internal content with Nick Asenjo Films.',
    keywords:
      'retainer video production Allentown, ongoing video partner Lehigh Valley, brand content subscription PA, corporate video retainer Bethlehem, monthly video production Easton, Nick Asenjo Films',
    ogTitle: 'Studio partnership | Lehigh Valley video retainer',
    ogDescription:
      'One trusted crew for quarterly campaigns, social rhythms, and executive messaging, anchored in Allentown and built for scale.',
    schemaServiceTypes: ['Video Production Retainer', 'Corporate Video Partnership', 'Brand Content Subscription'],
  },
  shortName: 'Studio partnership',
  h1: 'Studio partnership: ongoing video for Lehigh Valley brands',
  heroKicker: 'Retainer & creative continuity',
  heroLead:
    'When marketing never sleeps, neither should your production bench. A structured studio partnership keeps quality high, calendars predictable, and creative aligned quarter over quarter.',
  introHeading: 'Less “start from zero” every shoot',
  introParagraphs: [
    'This partnership is for marketing leaders who are tired of re-briefing new freelancers every month. We embed with your team (brand voice, stakeholders, legal, distribution) so each sprint feels like an extension of your department.',
    'Based in Allentown, we are positioned for fast response across the Valley: same-week pick-ups when news breaks, proactive ideas when the calendar loosens, and production design that carries visual continuity from billboards to Reels.',
    'Partnerships are scoped around deliverable volume, shoot days, and post hours, transparently, so finance and creative both know what “always-on” actually means.',
  ],
  offerings: [
    {
      title: 'Priority scheduling & planning',
      body: 'Roadmap sessions, shot lists, and crew locked early so launches are not fighting for availability at the last minute.',
    },
    {
      title: 'Cross-format consistency',
      body: 'Commercial, social, and internal films share lenses, color, and graphic language so the brand feels like one voice.',
    },
    {
      title: 'Executive & crisis-ready support',
      body: 'When leadership needs to address customers or employees quickly, you have a team that knows your look and your approvals path.',
    },
  ],
  localHeading: 'Anchored in Allentown, scaled for regional brands',
  localParagraph:
    'We routinely support organizations headquartered or operating heavily in Allentown, Bethlehem, Easton, and the I-78 / Route 33 corridor, with travel when your footprint extends beyond Eastern PA.',
  faq: [
    {
      question: 'Is a studio partnership the same as a retainer?',
      answer:
        'Yes in practice: predictable monthly or quarterly commitments with defined deliverables. We tailor scope to your channels and internal capacity.',
    },
    {
      question: 'What if we only need a short burst, not a year?',
      answer:
        'We can structure a 90-day sprint with the same workflow discipline as a longer partnership, ideal for launches or rebrands.',
    },
    {
      question: 'Who owns the footage?',
      answer:
        'License terms are spelled out in writing. Most partners receive broad usage for web, social, paid, and internal; theatrical or broadcast buys are addressed case by case.',
    },
    {
      question: 'How do we start?',
      answer:
        'Book a discovery call through our contact page. We review your calendar, channels, and backlog, then propose a scoped partnership tier.',
    },
  ],
  relatedLinks: [
    { label: 'Contact: start a conversation', href: '#contact' },
    { label: 'Commercial campaigns', href: '#service-commercial-video' },
    { label: 'The Platform: show & podcast', href: '#the-platform' },
    { label: 'All services by goal', href: '#services' },
  ],
};

export const ALL_LOCAL_SERVICE_OFFERINGS: LocalServiceOfferingConfig[] = [
  commercialVideoOffering,
  brandStoryOffering,
  socialVideoOffering,
  musicVideoOffering,
  weddingsEventsOffering,
  thePlatformShowOffering,
  studioRetainerOffering,
];

export const SEO_BY_SERVICE_PAGE: Record<string, ServicePageSeo> = Object.fromEntries(
  ALL_LOCAL_SERVICE_OFFERINGS.map((c) => [c.seoPageKey, c.seo])
) as Record<string, ServicePageSeo>;

export function getLocalServiceOfferingByPage(page: string): LocalServiceOfferingConfig | undefined {
  return ALL_LOCAL_SERVICE_OFFERINGS.find((c) => c.seoPageKey === page);
}
