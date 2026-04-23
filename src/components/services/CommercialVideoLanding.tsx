import { MapPin, Play } from 'lucide-react';

export function CommercialVideoLanding() {
  const cities = [
    { 
      name: 'Allentown', 
      slug: 'allentown',
      description: 'Downtown skyline, PPL Center, historic Hamilton Street',
      population: '125,000+',
      businesses: 'Corporate headquarters, healthcare, finance'
    },
    { 
      name: 'Bethlehem', 
      slug: 'bethlehem',
      description: 'SteelStacks, historic district, Lehigh University campus',
      population: '77,000+',
      businesses: 'Entertainment, education, hospitality'
    },
    { 
      name: 'Easton', 
      slug: 'easton',
      description: 'Lafayette College, Delaware River waterfront, Centre Square',
      population: '28,000+',
      businesses: 'Technology, education, retail'
    },
    { 
      name: 'Emmaus', 
      slug: 'emmaus',
      description: 'Main Street charm, boutique businesses, community-focused',
      population: '11,000+',
      businesses: 'Retail, restaurants, professional services'
    },
    { 
      name: 'Whitehall', 
      slug: 'whitehall',
      description: 'Commercial corridor, Lehigh Valley Mall area',
      population: '27,000+',
      businesses: 'Retail, automotive, commercial real estate'
    }
  ];

  return (
    <div className="bg-[#EEEEE8] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        <div className="relative z-20 text-center px-6">
          <Play className="w-20 h-20 text-[#BC271C] mx-auto mb-6" />
          <h1 
            className="text-white mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.1'
            }}
          >
            Commercial Video Production
          </h1>
          <p 
            className="text-white/80 max-w-3xl mx-auto"
            style={{ fontSize: '1.25rem', lineHeight: '1.8' }}
          >
            Cinematic commercials that captivate audiences across the Lehigh Valley and beyond
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 
              className="mb-6 tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Elite Video Production Services
            </h2>
            <p className="text-black/70" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              From 30-second broadcast spots to immersive brand films, we deliver commercial video 
              content that elevates your brand and drives measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 border border-black/10">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Broadcast Commercials
              </h3>
              <p className="text-black/70">
                Television-ready commercials crafted for maximum impact and brand recall
              </p>
            </div>
            <div className="bg-white p-8 border border-black/10">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Digital Campaigns
              </h3>
              <p className="text-black/70">
                Platform-optimized content for social media, YouTube, and digital advertising
              </p>
            </div>
            <div className="bg-white p-8 border border-black/10">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Brand Films
              </h3>
              <p className="text-black/70">
                Long-form storytelling that builds deep connections with your audience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Services */}
      <section className="bg-black py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 
              className="text-white mb-6 tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Lehigh Valley Commercial Video Services
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Professional video production tailored to each city's unique character and business landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <a
                key={city.slug}
                href={`#service-commercial-video-${city.slug}`}
                className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-[#BC271C] flex-shrink-0 mt-1" />
                  <div>
                    <h3 
                      className="text-white mb-2 tracking-wider uppercase"
                      style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
                    >
                      {city.name}
                    </h3>
                    <p className="text-white/50 text-sm mb-1">{city.population} residents</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {city.description}
                </p>
                <p className="text-white/50 text-sm mb-4">
                  <span className="text-[#BC271C]">Key Industries:</span> {city.businesses}
                </p>
                <span 
                  className="text-[#BC271C] group-hover:text-white transition-colors text-sm tracking-wider uppercase"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  View {city.name} Services →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
