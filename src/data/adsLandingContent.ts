/**
 * Google Ads LP portfolio - commercial / brand / social / music only (no weddings).
 */
export const LP_HERO_YOUTUBE_ID = 'YUjmJMtXu3k';

export type LpWorkItem = {
  id: string;
  title: string;
  caption: string;
  youtubeId: string;
  tag: string;
};

export const LP_WORK_ITEMS: LpWorkItem[] = [
  {
    id: 'commercial-reel',
    title: 'Commercial Reel',
    caption: 'Brand film built to move people to act.',
    youtubeId: 'ki1syP3UJFE',
    tag: 'Commercial',
  },
  {
    id: 'honda',
    title: 'Lehigh Valley Honda',
    caption: 'Dealership culture that puts people before the lot.',
    youtubeId: 'bHrJL_Yb9Y8',
    tag: 'Automotive',
  },
  {
    id: 'bmw',
    title: 'Daniels BMW',
    caption: 'Luxury debut content shot for the feed and the floor.',
    youtubeId: '8PqMxEKJz-c',
    tag: 'Social',
  },
  {
    id: 'vaw',
    title: 'VAW Roofing',
    caption: 'Service brand story that earns the quote.',
    youtubeId: 'LmbFR3nnTeI',
    tag: 'Brand',
  },
  {
    id: 'brand-reel',
    title: 'Brand Building Reel',
    caption: 'Positioning for leaders who refuse to look ordinary.',
    youtubeId: 'RBI5ZTZ-slo',
    tag: 'Brand',
  },
  {
    id: 'music-reel',
    title: 'Music Video Reel',
    caption: 'Release treated like a premiere - treatment to grade.',
    youtubeId: 'he2kWwEYP5c',
    tag: 'Music',
  },
];

export const LP_GOOGLE_RATING = {
  value: '5.0',
  countLabel: '166+ Google reviews',
};

export type LpReview = {
  name: string;
  quote: string;
  placeholder?: boolean;
};

export const LP_REVIEWS: LpReview[] = [
  {
    name: 'Google review',
    quote: 'Replace with a commercial/brand Google review.',
    placeholder: true,
  },
  {
    name: 'Google review',
    quote: 'Replace with a second GBP quote - not weddings.',
    placeholder: true,
  },
  {
    name: 'Google review',
    quote: 'Replace with a third GBP quote.',
    placeholder: true,
  },
];
