export type OurClientsMobileLayoutId =
  | 'peek-carousel'
  | 'snap-full-bleed'
  | 'vertical-snap'
  | 'bento-grid'
  | 'thumbnail-strip'
  | 'accordion-expand'
  | 'stack-swipe'
  | 'cover-flow'
  | 'stories-reels'
  | 'minimal-list';

export type OurClientsMobileLayoutOption = {
  id: OurClientsMobileLayoutId;
  name: string;
  tagline: string;
  inspiration: string;
  inspirationUrl: string;
  vibe: string;
  bestFor: string;
  motion: string;
  status: 'live' | 'preview';
};

export const OUR_CLIENTS_MOBILE_LAYOUT_KEY = 'naf_our_clients_mobile_layout';

export const DEFAULT_OUR_CLIENTS_MOBILE_LAYOUT: OurClientsMobileLayoutId = 'peek-carousel';

export const OUR_CLIENTS_MOBILE_LAYOUTS: OurClientsMobileLayoutOption[] = [
  {
    id: 'peek-carousel',
    name: 'Peek Carousel',
    tagline: 'Current mobile pattern — partial next card visible',
    inspiration: 'shadcn/ui Carousel + Embla',
    inspirationUrl: 'https://ui.shadcn.com/docs/components/carousel',
    vibe: 'Polished product marketing. Familiar swipe, premium card chrome.',
    bestFor: 'Balanced storytelling with WATCH / INQUIRE on each card.',
    motion: 'TranslateX slide + opacity on inactive peers.',
    status: 'live',
  },
  {
    id: 'snap-full-bleed',
    name: 'Full-Bleed Snap Scroll',
    tagline: 'Edge-to-edge horizontal scroll with CSS snap',
    inspiration: 'Aceternity UI + Magic UI hero galleries',
    inspirationUrl: 'https://ui.aceternity.com',
    vibe: 'Cinematic, editorial, no chrome — frame fills the phone.',
    bestFor: 'Letting thumbnails breathe; feels like a film reel.',
    motion: 'Native scroll-snap; momentum scrolling on iOS.',
    status: 'live',
  },
  {
    id: 'vertical-snap',
    name: 'Vertical Snap Stack',
    tagline: 'TikTok-style full-viewport cards, scroll down',
    inspiration: 'Magic UI scroll sections + Relume stacked media',
    inspirationUrl: 'https://magicui.design',
    vibe: 'Immersive, one project per screen, thumb-friendly.',
    bestFor: 'Maximum focus per client; great for 6 hero pieces.',
    motion: 'Vertical scroll-snap between 85vh panels.',
    status: 'live',
  },
  {
    id: 'bento-grid',
    name: 'Bento Grid',
    tagline: 'Compact 2-column mosaic + “Create your own” CTA tile',
    inspiration: '21st.dev bento blocks + v0 marketing grids',
    inspirationUrl: 'https://21st.dev',
    vibe: 'Dense, modern SaaS landing — see more at once.',
    bestFor: 'Browsing clients fast, then converting with a custom empty bento slot to contact.',
    motion: 'Subtle scale on tap; CTA tile routes to contact.',
    status: 'live',
  },
  {
    id: 'thumbnail-strip',
    name: 'Filmstrip + Hero',
    tagline: 'Large preview on top, scrollable thumb rail below',
    inspiration: 'Relume galleries + Bit component patterns',
    inspirationUrl: 'https://www.relume.io',
    vibe: 'Pro NLE / color-suite — preview monitor + timeline.',
    bestFor: 'Clear active selection; easy jump between projects.',
    motion: 'Crossfade hero on thumb select.',
    status: 'live',
  },
  {
    id: 'accordion-expand',
    name: 'Accordion Expand',
    tagline: 'One expandable row at a time',
    inspiration: 'shadcn/ui Accordion + HeroUI disclosure',
    inspirationUrl: 'https://www.heroui.com',
    vibe: 'Clean, accessible, content-first — less motion noise.',
    bestFor: 'SEO-readable copy on page; readable descriptions.',
    motion: 'Height expand/collapse with chevron rotate.',
    status: 'live',
  },
  {
    id: 'stack-swipe',
    name: 'Stack Swipe',
    tagline: 'Cards stacked behind the active project',
    inspiration: 'Tinder-style stacks (Framer Motion patterns)',
    inspirationUrl: 'https://www.framer.com/motion',
    vibe: 'Playful, tactile — “deck of films” metaphor.',
    bestFor: 'Engagement on mobile; feels custom and premium.',
    motion: 'Scale/offset stack + swipe buttons.',
    status: 'live',
  },
  {
    id: 'cover-flow',
    name: 'Cover Flow',
    tagline: 'Perspective carousel with center focus',
    inspiration: 'Apple Cover Flow + Aceternity 3D carousels',
    inspirationUrl: 'https://ui.aceternity.com/components',
    vibe: 'Retro-futurist showcase; center card dominates.',
    bestFor: 'Highlighting one lead project while showing context.',
    motion: 'CSS 3D rotateY + scale by distance from center.',
    status: 'live',
  },
  {
    id: 'stories-reels',
    name: 'Stories / Reels',
    tagline: 'Full-screen tap-through with progress segments',
    inspiration: 'Instagram Stories + vertical short-form UIs',
    inspirationUrl: 'https://v0.dev',
    vibe: 'Social-native, fast, bingeable client reel.',
    bestFor: 'Younger audiences; festival / music video energy.',
    motion: 'Progress bars + tap zones left/right.',
    status: 'live',
  },
  {
    id: 'minimal-list',
    name: 'Minimal List',
    tagline: 'Thumbnail + title rows, studio catalog feel',
    inspiration: 'shadcn list rows + Storybook catalog layouts',
    inspirationUrl: 'https://storybook.js.org',
    vibe: 'Understated, agency roster — fast scan, low bandwidth.',
    bestFor: 'Utility-first mobile; pairs with dark/light section scroll.',
    motion: 'Row hover/press states only.',
    status: 'live',
  },
];

export function getOurClientsMobileLayoutOption(
  id: OurClientsMobileLayoutId
): OurClientsMobileLayoutOption | undefined {
  return OUR_CLIENTS_MOBILE_LAYOUTS.find((o) => o.id === id);
}
