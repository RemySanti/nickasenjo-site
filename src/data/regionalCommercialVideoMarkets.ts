export type RegionalCommercialVideoSlug =
  | 'philadelphia'
  | 'new-jersey'
  | 'miami'
  | 'orlando'
  | 'chicago'
  | 'los-angeles';

export type RegionalIndustryIcon = 'building2' | 'play' | 'award' | 'mapPin';

export type RegionalCommercialVideoMarket = {
  slug: RegionalCommercialVideoSlug;
  breadcrumbName: string;
  h1: string;
  heroLead: string;
  heroSub: string;
  whyTitle: string;
  whyP1: string;
  whyP2: string;
  asideCaption: string;
  industriesTitle: string;
  industries: Array<{ icon: RegionalIndustryIcon; title: string; body: string }>;
  contextsTitle: string;
  contexts: Array<{ title: string; body: string; tags: string }>;
  ctaTitle: string;
  ctaLead: string;
};

export const REGIONAL_COMMERCIAL_VIDEO_MARKETS: Record<RegionalCommercialVideoSlug, RegionalCommercialVideoMarket> = {
  philadelphia: {
    slug: 'philadelphia',
    breadcrumbName: 'Philadelphia',
    h1: 'Philadelphia Commercial Video Production',
    heroLead:
      'Campaign, launch, and brand films for Center City, University City, the Navy Yard, and Greater Philadelphia — produced with senior crew discipline and finishing standards from our Pennsylvania studio.',
    heroSub:
      'Nick Asenjo Films is headquartered in Allentown and routinely travels for Philly shoots, agency collaborations, and multi-market deliverables.',
    whyTitle: 'Why Philadelphia teams hire us',
    whyP1:
      'Philadelphia markets move fast: healthcare systems, financial services, higher education, and consumer brands all need content that reads premium on the web and holds up in the boardroom.',
    whyP2:
      'We plan for permits, parking, and location logistics across the metro while keeping creative clarity — so your production day stays efficient and your story stays cinematic.',
    asideCaption: 'Metro Philadelphia messaging for search, paid media, and pitch decks',
    industriesTitle: 'Industries & use cases in Philadelphia',
    industries: [
      {
        icon: 'building2',
        title: 'Healthcare & life sciences',
        body: 'Patient stories, facility tours, and physician-led explainers with respectful tone and broadcast-ready polish.',
      },
      {
        icon: 'award',
        title: 'Higher education & nonprofits',
        body: 'Fundraising films, campaign spots, and impact stories for institutions competing for attention and trust.',
      },
      {
        icon: 'play',
        title: 'Retail & hospitality',
        body: 'Openings, chef-led features, and social-first suites tuned for neighborhood discovery and regional campaigns.',
      },
      {
        icon: 'mapPin',
        title: 'Professional & corporate',
        body: 'Leadership profiles, internal comms, and launch films for firms headquartered or operating across the metro.',
      },
    ],
    contextsTitle: 'Filming contexts we plan for',
    contexts: [
      {
        title: 'Center City & business core',
        body: 'High-rise offices, hotel ballrooms, and flagship retail with tight turnaround windows.',
        tags: 'Hero films · paid social cuts · executive interviews',
      },
      {
        title: 'University City & innovation',
        body: 'Campus energy, labs, and startup corridors for education and tech-forward brands.',
        tags: 'Recruitment · thought leadership · modular campaign assets',
      },
    ],
    ctaTitle: 'Book Philadelphia commercial production',
    ctaLead:
      'Share your market, timeline, and deliverables — we align crew, travel, and finishing so your Philadelphia campaign ships on schedule.',
  },
  'new-jersey': {
    slug: 'new-jersey',
    breadcrumbName: 'New Jersey',
    h1: 'New Jersey Commercial Video Production',
    heroLead:
      'Commercial and brand video for Newark, Jersey City, Hoboken, the Shore, Princeton corridor, and statewide campaigns — cinematic craft with logistics built for dense markets and multi-location shoots.',
    heroSub:
      'Based in the Lehigh Valley, we travel across New Jersey for launches, franchise groups, and regional brand work.',
    whyTitle: 'Why New Jersey brands choose our crew',
    whyP1:
      'New Jersey sits between major metros: fast access to NYC and Philadelphia with its own distinct industries — logistics, pharma-adjacent services, finance, and shore hospitality.',
    whyP2:
      'We build shoot schedules that respect toll corridors, parking realities, and tight load-in windows so your team spends less time troubleshooting and more time capturing great footage.',
    asideCaption: 'Statewide NJ SEO pages and campaign-ready deliverables',
    industriesTitle: 'Industries & use cases in New Jersey',
    industries: [
      {
        icon: 'building2',
        title: 'Logistics & distribution',
        body: 'Facility tours, safety messaging, and recruitment films for operators along the Turnpike and port-adjacent hubs.',
      },
      {
        icon: 'mapPin',
        title: 'Waterfront & urban cores',
        body: 'Hudson County skyline work, corporate HQs, and hospitality content with location-aware planning.',
      },
      {
        icon: 'play',
        title: 'Retail & franchises',
        body: 'Regional rollouts, franchisee toolkits, and modular social edits for multi-store brands.',
      },
      {
        icon: 'award',
        title: 'Professional services',
        body: 'Trust-forward films for legal, wealth, and consulting firms competing in tri-state search.',
      },
    ],
    contextsTitle: 'Markets we commonly serve',
    contexts: [
      {
        title: 'Northern New Jersey',
        body: 'Dense corridors, mixed-use developments, and brand headquarters with fast-paced production needs.',
        tags: 'Brand films · launch kits · paid media',
      },
      {
        title: 'Central & Shore',
        body: 'Seasonal hospitality, events, and lifestyle brands that need elevated visuals without generic stock energy.',
        tags: 'Event coverage · destination spots · social suites',
      },
    ],
    ctaTitle: 'Book New Jersey commercial production',
    ctaLead:
      'Tell us your counties, locations, and deliverables — we map travel, crew scale, and finishing for NJ-wide campaigns.',
  },
  miami: {
    slug: 'miami',
    breadcrumbName: 'Miami',
    h1: 'Miami Commercial Video Production',
    heroLead:
      'High-energy commercial, hospitality, and real-estate content for Miami-Dade — bilingual-friendly storytelling, sun-drenched location craft, and deliverables built for social and premium web.',
    heroSub:
      'We fly crews from Pennsylvania for Miami shoots, launches, and partner productions with the same finishing pipeline as our home market.',
    whyTitle: 'Why Miami is a different production rhythm',
    whyP1:
      'Miami rewards bold visuals, fast cuts, and brand confidence — from Brickell finance to Wynwood culture to hospitality on the beach.',
    whyP2:
      'We plan for heat, humidity, and golden-hour windows while keeping audio, lensing, and color consistent with luxury and lifestyle expectations.',
    asideCaption: 'South Florida commercial video tuned for discovery and conversion',
    industriesTitle: 'Industries & use cases in Miami',
    industries: [
      {
        icon: 'play',
        title: 'Hospitality & nightlife',
        body: 'Venue films, chef features, and bottle-service adjacent brand content where energy reads on a phone.',
      },
      {
        icon: 'building2',
        title: 'Real estate & development',
        body: 'Tower tours, amenity films, and broker toolkits with cinematic movement and architectural clarity.',
      },
      {
        icon: 'mapPin',
        title: 'Lifestyle & wellness',
        body: 'Premium fitness, medical aesthetics, and consumer brands that need elevated, sun-forward visuals.',
      },
      {
        icon: 'award',
        title: 'Corporate & finance',
        body: 'Leadership comms and campaign spots for firms headquartered in Brickell and surrounding corridors.',
      },
    ],
    contextsTitle: 'Filming contexts we plan for',
    contexts: [
      {
        title: 'Urban core & waterfront',
        body: 'Skyline backdrops, marinas, and high-rise amenity spaces with permit-aware scheduling.',
        tags: 'Hero films · vertical social · launch edits',
      },
      {
        title: 'Creative districts',
        body: 'Color-forward neighborhoods and studio-adjacent looks for culture-forward brands.',
        tags: 'Music-adjacent spots · fashion · creator collabs',
      },
    ],
    ctaTitle: 'Book Miami commercial production',
    ctaLead:
      'Share your concept, locations, and languages — we align crew size, travel, and finishing for South Florida launches.',
  },
  orlando: {
    slug: 'orlando',
    breadcrumbName: 'Orlando',
    h1: 'Orlando Commercial Video Production',
    heroLead:
      'Convention, hospitality, sports-adjacent, and attraction-adjacent commercial video for Greater Orlando — polished campaigns for brands that compete in a global tourism economy.',
    heroSub:
      'We travel to Orlando for conferences, resort properties, and regional headquarters work with disciplined pre-production and fast turnaround options.',
    whyTitle: 'Why Orlando needs flexible commercial crews',
    whyP1:
      'Orlando blends massive visitor volume with serious B2B: healthcare, simulation tech, and professional services supporting the broader regional economy.',
    whyP2:
      'We build schedules around peak traffic, venue load-in rules, and tight turnaround windows common to convention and hospitality calendars.',
    asideCaption: 'Central Florida commercial video for search and sales enablement',
    industriesTitle: 'Industries & use cases in Orlando',
    industries: [
      {
        icon: 'mapPin',
        title: 'Hospitality & venues',
        body: 'Resort tours, conference promos, and property storytelling for operators competing on experience.',
      },
      {
        icon: 'building2',
        title: 'Healthcare & training',
        body: 'Facility films, patient education, and internal training with clear, respectful visuals.',
      },
      {
        icon: 'play',
        title: 'Sports & lifestyle',
        body: 'High-motion brand spots and social suites tuned for energetic audiences.',
      },
      {
        icon: 'award',
        title: 'B2B & regional HQs',
        body: 'Leadership profiles and campaign films for companies anchored in the I-4 corridor.',
      },
    ],
    contextsTitle: 'Filming contexts we plan for',
    contexts: [
      {
        title: 'Convention & trade-show',
        body: 'Rapid-turn booth content, speaker capture, and highlight reels for multi-day events.',
        tags: 'Recaps · sizzle · same-day selects',
      },
      {
        title: 'Resort & master-planned communities',
        body: 'Amenity storytelling and lifestyle b-roll with consistent color and audio.',
        tags: 'Sales centers · web heroes · paid social',
      },
    ],
    ctaTitle: 'Book Orlando commercial production',
    ctaLead:
      'Tell us your venues, dates, and deliverables — we align crew scale and travel for Central Florida productions.',
  },
  chicago: {
    slug: 'chicago',
    breadcrumbName: 'Chicago',
    h1: 'Chicago Commercial Video Production',
    heroLead:
      'Commercial video for the Loop, River North, West Loop innovation corridors, and Chicagoland suburbs — disciplined production for brands that expect Midwest clarity and national polish.',
    heroSub:
      'Nick Asenjo Films travels from Pennsylvania for Chicago shoots, agency collaborations, and multi-market campaign capture.',
    whyTitle: 'Why Chicago teams book travel crews intentionally',
    whyP1:
      'Chicago combines Fortune-level expectations with practical logistics: winters, permits, and downtown load-ins all reward crews that plan like producers, not tourists.',
    whyP2:
      'We deliver campaign architecture up front — shot lists, deliverable matrices, and finishing timelines — so marketing teams can ship with confidence.',
    asideCaption: 'Chicagoland commercial video for SEO, ABM, and paid media',
    industriesTitle: 'Industries & use cases in Chicago',
    industries: [
      {
        icon: 'building2',
        title: 'Manufacturing & industrials',
        body: 'Plant tours, safety culture films, and recruitment stories that respect real operations.',
      },
      {
        icon: 'award',
        title: 'Finance & professional services',
        body: 'Trust-first brand films and leadership comms for firms competing in national markets.',
      },
      {
        icon: 'mapPin',
        title: 'Food & CPG',
        body: 'Kitchen-forward storytelling and retail-ready social suites.',
      },
      {
        icon: 'play',
        title: 'Culture & consumer',
        body: 'Campaign spots and modular edits for brands that need Chicago energy without cliché.',
      },
    ],
    contextsTitle: 'Filming contexts we plan for',
    contexts: [
      {
        title: 'Downtown & lakefront',
        body: 'Iconic skyline work, corporate interiors, and seasonal exterior realities.',
        tags: 'Hero films · executive profiles · B-roll',
      },
      {
        title: 'Neighborhood corridors',
        body: 'Authentic texture for lifestyle and community-forward brands across Chicagoland.',
        tags: 'Social-first · local SEO · franchise toolkits',
      },
    ],
    ctaTitle: 'Book Chicago commercial production',
    ctaLead:
      'Share your locations, union considerations if any, and deliverables — we align crew, travel, and finishing for Midwest launches.',
  },
  'los-angeles': {
    slug: 'los-angeles',
    breadcrumbName: 'Los Angeles',
    h1: 'Los Angeles Commercial Video Production',
    heroLead:
      'Commercial, brand, and campaign video for Los Angeles County — travel-ready crews for LA shoots with finishing pipelines built for premium web, theatrical-style polish, and paid social scale.',
    heroSub:
      'We are Pennsylvania-based and fly west for LA productions, agency collaborations, and multi-coast campaign capture.',
    whyTitle: 'Why LA work still benefits from an out-of-market producer mindset',
    whyP1:
      'Los Angeles is crowded with creators — brands win when production is organized, insured, and creatively led, not just “someone with a camera.”',
    whyP2:
      'We bring East Coast scheduling discipline and cinematic craft to LA locations, talent days, and post timelines that cannot slip.',
    asideCaption: 'LA metro commercial video for search, pitch decks, and campaign launches',
    industriesTitle: 'Industries & use cases in Los Angeles',
    industries: [
      {
        icon: 'play',
        title: 'Entertainment-adjacent brands',
        body: 'Premium spots and social suites for brands that need LA energy without losing product clarity.',
      },
      {
        icon: 'building2',
        title: 'Consumer & lifestyle',
        body: 'Campaign films and modular edits for competitive DTC and retail markets.',
      },
      {
        icon: 'award',
        title: 'Startups & technology',
        body: 'Launch films and explainers that read credible to investors and customers.',
      },
      {
        icon: 'mapPin',
        title: 'Hospitality & destinations',
        body: 'Destination storytelling with location-aware planning across the metro.',
      },
    ],
    contextsTitle: 'Filming contexts we plan for',
    contexts: [
      {
        title: 'Studios & controlled environments',
        body: 'Tabletop, interviews, and controlled lighting days when weather or schedule risk is high.',
        tags: 'Product · testimonials · modular social',
      },
      {
        title: 'On-location LA texture',
        body: 'Neighborhood-aware location work with permitting and parking planned in advance.',
        tags: 'Brand films · OOH support · launch kits',
      },
    ],
    ctaTitle: 'Book Los Angeles commercial production',
    ctaLead:
      'Tell us your LA neighborhoods, talent needs, and deliverables — we align travel, crew scale, and finishing for West Coast launches.',
  },
};

export function getRegionalCommercialVideoMarket(
  slug: string,
): RegionalCommercialVideoMarket | undefined {
  return REGIONAL_COMMERCIAL_VIDEO_MARKETS[slug as RegionalCommercialVideoSlug];
}

export const REGIONAL_COMMERCIAL_VIDEO_SLUGS = Object.keys(
  REGIONAL_COMMERCIAL_VIDEO_MARKETS,
) as RegionalCommercialVideoSlug[];
