# Events System Guide - Nick Asenjo Films

## Overview
This document explains the scalable events system that handles 5 event types × 15 cities = 75+ unique SEO-optimized pages WITHOUT creating 75 individual component files.

## Architecture

### Data-Driven Approach
Instead of creating individual components for each event-city combination, we use:
- **Single reusable components** that accept props
- **Centralized data file** (`/data/eventsData.ts`) with all event types and cities
- **Smart routing** that parses URLs and passes appropriate data to components

## File Structure

```
/data/
  eventsData.ts                 # All event types and cities data

/components/services/events/
  EventsLandingPage.tsx         # Main events hub
  EventTypeLandingPage.tsx      # Shows all cities for one event type
  CityEventsLandingPage.tsx     # Shows all event types for one city  
  EventServicePage.tsx          # Specific event-city combination page
```

## URL Structure & Routing

### Main Events Hub
- **URL**: `#events`
- **Shows**: All 5 event types + all 15 cities
- **Component**: `EventsLandingPage`

### Event Type Pages (5 pages)
Shows all cities offering this event type

- `#event-weddings` → Wedding Videography across all cities
- `#event-corporate-events` → Corporate Event Videography across all cities
- `#event-concerts` → Concert & Live Music Videography across all cities
- `#event-sports` → Sports Event Videography across all cities
- `#event-private-events` → Private Event Videography across all cities

**Component**: `EventTypeLandingPage` (receives `eventSlug` prop)

### City Events Pages (15 pages)
Shows all event types available in this city

- `#city-allentown-events` → All event services in Allentown
- `#city-bethlehem-events` → All event services in Bethlehem
- `#city-easton-events` → All event services in Easton
- `#city-emmaus-events` → All event services in Emmaus
- `#city-whitehall-events` → All event services in Whitehall
- `#city-macungie-events` → All event services in Macungie
- `#city-catasauqua-events` → All event services in Catasauqua
- `#city-coplay-events` → All event services in Coplay
- `#city-northampton-events` → All event services in Northampton
- `#city-hellertown-events` → All event services in Hellertown
- `#city-coopersburg-events` → All event services in Coopersburg
- `#city-fountain-hill-events` → All event services in Fountain Hill
- `#city-salisbury-events` → All event services in Salisbury
- `#city-south-whitehall-events` → All event services in South Whitehall
- `#city-upper-macungie-events` → All event services in Upper Macungie

**Component**: `CityEventsLandingPage` (receives `citySlug` prop)

### Event-City Combination Pages (75 pages)
Specific event service in specific city

Examples:
- `#event-weddings-allentown` → Wedding Videography in Allentown, PA
- `#event-corporate-events-bethlehem` → Corporate Event Videography in Bethlehem, PA
- `#event-concerts-easton` → Concert Videography in Easton, PA
- `#event-sports-emmaus` → Sports Event Videography in Emmaus, PA
- `#event-private-events-whitehall` → Private Event Videography in Whitehall, PA

**Component**: `EventServicePage` (receives both `eventSlug` and `citySlug` props)

## Event Types

1. **Weddings** (slug: `weddings`)
   - Starting price: $3,500
   - Icon: Heart
   - Tagline: "Cinematic Love Stories"

2. **Corporate Events** (slug: `corporate-events`)
   - Starting price: $2,500
   - Icon: Briefcase
   - Tagline: "Elevate Your Brand Story"

3. **Concerts** (slug: `concerts`)
   - Starting price: $2,000
   - Icon: Music
   - Tagline: "Capture the Energy, Amplify the Art"

4. **Sports** (slug: `sports`)
   - Starting price: $1,800
   - Icon: Trophy
   - Tagline: "Epic Moments, Athletic Excellence"

5. **Private Events** (slug: `private-events`)
   - Starting price: $1,500
   - Icon: PartyPopper
   - Tagline: "Your Moments, Artfully Preserved"

## Cities Served (15 total)

1. Allentown (125,000+ population)
2. Bethlehem (77,000+ population)
3. Easton (28,000+ population)
4. Emmaus (11,000+ population)
5. Whitehall (28,000+ population)
6. Macungie (3,000+ population)
7. Catasauqua (6,500+ population)
8. Coplay (3,300+ population)
9. Northampton (10,000+ population)
10. Hellertown (6,000+ population)
11. Coopersburg (2,400+ population)
12. Fountain Hill (4,800+ population)
13. Salisbury Township (13,500+ population)
14. South Whitehall (20,000+ population)
15. Upper Macungie (26,000+ population)

## SEO Benefits

✅ **75+ unique pages** with localized content
✅ **Automatic schema markup** for each event-city combination
✅ **Targeted keywords** like "wedding videography allentown pa"
✅ **Internal linking structure** between event types and cities
✅ **No webpack overhead** - single reusable components
✅ **Easy to maintain** - update data file, all pages update

## How to Add New Event Types

Edit `/data/eventsData.ts`:

```typescript
{
  name: "Conference Videography",
  slug: "conferences",
  icon: "Video",
  tagline: "Your Custom Tagline",
  description: "Your description...",
  features: [
    "Feature 1",
    "Feature 2",
    // ...
  ],
  packageStarting: "$X,XXX"
}
```

All routing and pages are automatically created!

## How to Add New Cities

Edit `/data/eventsData.ts`:

```typescript
{
  name: "New City",
  slug: "new-city",
  description: "City description",
  population: "XX,000+",
  keywords: ["Landmark 1", "Landmark 2", "Landmark 3", "Landmark 4"]
}
```

All routing and pages are automatically created!

## Testing URLs

Try these in your browser:

- Main hub: `yoursite.com/#events`
- Event type: `yoursite.com/#event-weddings`
- City events: `yoursite.com/#city-allentown-events`
- Specific combo: `yoursite.com/#event-weddings-allentown`

## Performance

- ✅ No code splitting issues
- ✅ Fast webpack compilation
- ✅ Single bundle for all events pages
- ✅ Efficient data loading
- ✅ Scalable to 100+ combinations

## Future Enhancements

Ideas for expansion:
- Add photo galleries per event-city combination
- Client testimonials from specific cities
- Venue-specific pages within cities
- Seasonal packages/promotions
- Multi-language support for bilingual areas
