export interface City {
  name: string;
  slug: string;
  description: string;
  population?: string;
  keywords: string[];
}

export interface EventType {
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  packageStarting: string;
}

export const cities: City[] = [
  {
    name: "Allentown",
    slug: "allentown",
    description: "The third-largest city in Pennsylvania and the heart of the Lehigh Valley",
    population: "125,000+",
    keywords: ["Hamilton Street", "PPL Center", "Coca-Cola Park", "Center City"]
  },
  {
    name: "Bethlehem",
    slug: "bethlehem",
    description: "Historic city known for SteelStacks and rich cultural heritage",
    population: "77,000+",
    keywords: ["SteelStacks", "Sands Casino", "Historic Bethlehem", "Lehigh University"]
  },
  {
    name: "Easton",
    slug: "easton",
    description: "Where the Delaware and Lehigh rivers meet, rich in colonial history",
    population: "28,000+",
    keywords: ["Downtown Easton", "Lafayette College", "Crayola Experience", "Delaware River"]
  },
  {
    name: "Emmaus",
    slug: "emmaus",
    description: "Charming borough known for its tight-knit community and scenic beauty",
    population: "11,000+",
    keywords: ["Main Street Emmaus", "East Penn School District", "Community Park"]
  },
  {
    name: "Whitehall",
    slug: "whitehall",
    description: "Vibrant township with excellent commercial and residential areas",
    population: "28,000+",
    keywords: ["Whitehall Mall", "Lehigh Valley Mall area", "MacArthur Road"]
  },
  {
    name: "Macungie",
    slug: "macungie",
    description: "Historic borough with small-town charm and annual Das Awkscht Fescht",
    population: "3,000+",
    keywords: ["Das Awkscht Fescht", "Historic Main Street", "Community events"]
  },
  {
    name: "Catasauqua",
    slug: "catasauqua",
    description: "Historic borough along the Lehigh River with industrial heritage",
    population: "6,500+",
    keywords: ["George Taylor House", "Lehigh River", "Historic district"]
  },
  {
    name: "Coplay",
    slug: "coplay",
    description: "Small borough with strong community spirit and local traditions",
    population: "3,300+",
    keywords: ["Coplay Community Days", "Local parks", "Residential neighborhoods"]
  },
  {
    name: "Northampton",
    slug: "northampton",
    description: "Borough with rich history and growing community attractions",
    population: "10,000+",
    keywords: ["Northampton Community Center", "Canal Street", "Atlas Cement"]
  },
  {
    name: "Hellertown",
    slug: "hellertown",
    description: "Scenic borough in southern Lehigh Valley along the Saucon Creek",
    population: "6,000+",
    keywords: ["Saucon Valley", "Water Street Park", "Historic downtown"]
  },
  {
    name: "Coopersburg",
    slug: "coopersburg",
    description: "Rural borough with agricultural heritage and community pride",
    population: "2,400+",
    keywords: ["Community Day", "Main Street", "Agricultural heritage"]
  },
  {
    name: "Fountain Hill",
    slug: "fountain-hill",
    description: "Charming hilltop borough overlooking Bethlehem with historic architecture",
    population: "4,800+",
    keywords: ["Historic homes", "Broadway", "Bethlehem adjacent"]
  },
  {
    name: "Salisbury Township",
    slug: "salisbury",
    description: "Township with suburban neighborhoods and local parks",
    population: "13,500+",
    keywords: ["Community parks", "Residential areas", "Local schools"]
  },
  {
    name: "South Whitehall",
    slug: "south-whitehall",
    description: "Growing township with commercial centers and family neighborhoods",
    population: "20,000+",
    keywords: ["Cedar Crest Boulevard", "Shopping centers", "Parkland School District"]
  },
  {
    name: "Upper Macungie",
    slug: "upper-macungie",
    description: "Fastest-growing township in Lehigh Valley with modern amenities",
    population: "26,000+",
    keywords: ["Hamilton Crossings", "Trexler Mall area", "New development"]
  }
];

export const eventTypes: EventType[] = [
  {
    name: "Wedding Videography",
    slug: "weddings",
    icon: "Heart",
    tagline: "Cinematic Love Stories",
    description: "We don't just film weddings—we craft timeless visual narratives that capture the raw emotion, intimate moments, and epic scale of your celebration. Our Ferrari-inspired approach brings artistic excellence and meticulous attention to every frame.",
    features: [
      "Full-day cinematic coverage with multiple cinema cameras",
      "Drone aerial footage of venue and ceremony",
      "Emotional highlight films (3-5 min) and full ceremony edit",
      "Professional audio capture with wireless lavalier mics",
      "Color-graded footage with our signature cinematic look",
      "Quick turnaround social media teaser (48-72 hours)"
    ],
    packageStarting: "$3,500"
  },
  {
    name: "Corporate Event Videography",
    slug: "corporate-events",
    icon: "Briefcase",
    tagline: "Elevate Your Brand Story",
    description: "Transform corporate events into powerful brand assets. From conferences and product launches to galas and team-building events, we deliver polished, professional content that extends your event's impact far beyond the venue.",
    features: [
      "Multi-camera event coverage with cinematic techniques",
      "Executive interviews and testimonial capture",
      "Live event streaming capabilities",
      "Same-day highlight reels for social media",
      "Professional lighting and audio setup",
      "B-roll of networking, presentations, and key moments"
    ],
    packageStarting: "$2,500"
  },
  {
    name: "Concert & Live Music Videography",
    slug: "concerts",
    icon: "Music",
    tagline: "Capture the Energy, Amplify the Art",
    description: "Music deserves cinematography that matches its intensity. We bring a concert filmmaker's eye to live performances, capturing the energy, artistry, and connection between performers and audience with dynamic camera movement and expert timing.",
    features: [
      "Multi-angle concert coverage with dynamic camera work",
      "Low-light expertise for venue and stage filming",
      "Audio capture directly from soundboard + ambient crowd",
      "Music video-style edits synced perfectly to performance",
      "Slow-motion moments for dramatic effect",
      "Live streaming options for virtual audiences"
    ],
    packageStarting: "$2,000"
  },
  {
    name: "Sports Event Videography",
    slug: "sports",
    icon: "Trophy",
    tagline: "Epic Moments, Athletic Excellence",
    description: "From high school championships to corporate sports events and tournaments, we capture the intensity, skill, and triumph of athletic competition with sports cinematography that rivals broadcast quality.",
    features: [
      "High frame rate slow-motion for key plays (120fps+)",
      "Multi-camera angles including field-level and elevated views",
      "Highlight reels with dynamic editing and music",
      "Player/team introduction videos",
      "Championship recap films for schools and organizations",
      "Drone footage for unique perspectives"
    ],
    packageStarting: "$1,800"
  },
  {
    name: "Private Event Videography",
    slug: "private-events",
    icon: "PartyPopper",
    tagline: "Your Moments, Artfully Preserved",
    description: "Milestone birthdays, anniversaries, retirement parties, bar/bat mitzvahs, and family celebrations deserve more than smartphone footage. We bring cinematic artistry to your private moments, creating keepsakes that honor the significance of your gathering.",
    features: [
      "Discreet, documentary-style filming approach",
      "Highlight films capturing speeches, toasts, and celebrations",
      "Optional formal interviews with guests and honorees",
      "Flexible coverage duration (2-8 hours)",
      "Quick turnaround for sharing with family",
      "Custom music selection and color grading"
    ],
    packageStarting: "$1,500"
  }
];

// Helper function to generate SEO content for event-city combinations
export function getEventCityContent(eventSlug: string, citySlug: string) {
  const event = eventTypes.find(e => e.slug === eventSlug);
  const city = cities.find(c => c.slug === citySlug);
  
  if (!event || !city) return null;

  return {
    event,
    city,
    title: `${event.name} in ${city.name}, PA | Nick Asenjo Films`,
    metaDescription: `Professional ${event.name.toLowerCase()} services in ${city.name}, Pennsylvania. ${event.tagline} Serving the Lehigh Valley with cinematic excellence.`,
    h1: `${event.name} in ${city.name}`,
    intro: `Bringing world-class ${event.name.toLowerCase()} to ${city.name}, Pennsylvania. ${event.description}`,
    localizedFeatures: event.features,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": event.name,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nick Asenjo Films",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "532 Hamilton St Suite 7",
          "addressLocality": "Allentown",
          "addressRegion": "PA",
          "postalCode": "18101"
        },
        "telephone": "+1-610-555-0100"
      },
      "areaServed": {
        "@type": "City",
        "name": city.name,
        "@id": `https://www.wikidata.org/wiki/${city.name}`
      },
      "description": `${event.name} services in ${city.name}, PA`
    }
  };
}
