import { Video, Camera, Award, TrendingUp, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ServicesMainLanding() {
  const services = [
    {
      title: 'Commercial',
      subtitle: 'We Make People Buy',
      description: 'Advertising that doesn\'t just look good—it sells. We create visual experiences that turn viewers into customers and skeptics into believers.',
      image: 'https://images.unsplash.com/photo-1759647323656-8b6de2c839fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0aW5nJTIwc3VpdGUlMjBtb25pdG9yfGVufDF8fHx8MTc2MzA3MDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '#service-commercial',
      icon: <Video className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: 'Narrative',
      subtitle: 'Stories Worth Telling',
      description: 'We don\'t make films. We craft experiences that linger long after the credits roll. Every frame meticulously designed to move, inspire, provoke.',
      image: 'https://images.unsplash.com/photo-1622829118151-1cfabdf11a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYSUyMGNhbWVyYXxlbnwxfHx8fDE3NjMwNzA0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '#service-narrative',
      icon: <Camera className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: 'Documentary',
      subtitle: 'Truth, Elevated',
      description: 'Reality isn\'t boring when you know how to capture it. We find the extraordinary in the everyday and make truth more compelling than fiction.',
      image: 'https://images.unsplash.com/photo-1733874741664-3d4786ff156d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNsYXBwZXJib2FyZCUyMGRlc2VydHxlbnwxfHx8fDE3NjMwNzA0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '#service-documentary',
      icon: <Video className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: 'Music Videos',
      subtitle: 'Visual Sonic Fusion',
      description: 'Sound has color. Movement has rhythm. We translate music into visual poetry that amplifies every beat, lyric, and emotion.',
      image: 'https://images.unsplash.com/photo-1619067321513-bb55a012e9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWljcm9waG9uZSUyMGNvbmNlcnR8ZW58MXx8fHwxNzYzMDcwNDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '#service-music-video',
      icon: <Camera className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: 'Corporate',
      subtitle: 'Business, But Make It Cinema',
      description: 'Corporate doesn\'t have to be boring. We bring Hollywood production values to the boardroom, making companies look as good as they perform.',
      image: 'https://images.unsplash.com/photo-1608908272009-5834650fb600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2Mjk2Mzg4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '#service-corporate',
      icon: <Video className="w-8 h-8" strokeWidth={1.5} />
    }
  ];

  const cities = [
    { 
      name: 'Allentown', 
      slug: 'allentown',
      population: '125,000+',
      tagline: 'Corporate Headquarters Hub',
      features: ['PPL Center', 'Downtown Skyline', 'Fortune 1000 Companies']
    },
    { 
      name: 'Bethlehem', 
      slug: 'bethlehem',
      population: '77,000+',
      tagline: 'Arts & Entertainment Capital',
      features: ['SteelStacks', 'Musikfest', 'Historic Districts']
    },
    { 
      name: 'Easton', 
      slug: 'easton',
      population: '28,000+',
      tagline: 'Innovation & Education',
      features: ['Lafayette College', 'Centre Square', 'Delaware River']
    },
    { 
      name: 'Emmaus', 
      slug: 'emmaus',
      population: '11,000+',
      tagline: 'Boutique Business Community',
      features: ['Main Street', 'Local Charm', 'Professional Services']
    },
    { 
      name: 'Whitehall', 
      slug: 'whitehall',
      population: '27,000+',
      tagline: 'Commercial Corridor',
      features: ['Retail Hub', 'Modern Spaces', 'Business District']
    }
  ];

  return (
    <div className="bg-[#EEEEE8] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        <div className="relative z-20 text-center px-6">
          <h1 
            className="text-white mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: '1.1'
            }}
          >
            We Make Films
          </h1>
          <p 
            className="text-white/80 max-w-3xl mx-auto mb-8"
            style={{ fontSize: '1.25rem', lineHeight: '1.8' }}
          >
            Not content. Not videos. Films. Every project is an opportunity to create something that matters, 
            something that moves people, something they'll remember.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <Award className="w-12 h-12 text-[#BC271C] mx-auto mb-4" />
              <h3 
                className="mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Uncompromising Vision
              </h3>
              <p className="text-black/60">
                We don't compromise on craft. Every frame, every cut, every color—meticulously designed.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-[#BC271C] mx-auto mb-4" />
              <h3 
                className="mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Proven Impact
              </h3>
              <p className="text-black/60">
                Our work doesn't just look beautiful—it performs. We create films that move audiences to action.
              </p>
            </div>
            <div className="text-center">
              <Video className="w-12 h-12 text-[#BC271C] mx-auto mb-4" />
              <h3 
                className="mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Cinematic Obsession
              </h3>
              <p className="text-black/60">
                We're obsessed with the details others overlook. It's in our DNA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES - Ferrari-Inspired Dramatic Showcase */}
      <section className="bg-black py-20">
        <div className="text-center mb-20">
          <h2 
            className="text-white tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              letterSpacing: '0.15em'
            }}
          >
            Our Services
          </h2>
        </div>

        <div className="space-y-0">
          {/* Commercial - Ultra Wide Cinematic */}
          <a
            href={services[0].link}
            className="group block relative overflow-hidden"
          >
            <div className="relative w-full aspect-[21/9]">
              <ImageWithFallback
                src={services[0].image}
                alt={services[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="max-w-2xl">
                  <span 
                    className="text-[#BC271C] opacity-40 block mb-2"
                    style={{ 
                      fontFamily: 'Lemon Milk, sans-serif',
                      fontSize: 'clamp(2rem, 5vw, 4rem)',
                      lineHeight: '1'
                    }}
                  >
                    01
                  </span>
                  <h3 
                    className="text-white mb-3 tracking-wider uppercase group-hover:text-[#BC271C] transition-colors duration-500"
                    style={{ 
                      fontFamily: 'Lemon Milk, sans-serif',
                      fontSize: 'clamp(2rem, 5vw, 4rem)',
                      lineHeight: '1',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {services[0].title}
                  </h3>
                  <p 
                    className="text-white/60 mb-4 uppercase tracking-widest"
                    style={{ 
                      fontFamily: 'Lemon Milk, sans-serif',
                      fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
                      letterSpacing: '0.2em'
                    }}
                  >
                    {services[0].subtitle}
                  </p>
                  <p 
                    className="text-white/90 mb-6 max-w-lg"
                    style={{ 
                      fontSize: 'clamp(0.9rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.8'
                    }}
                  >
                    {services[0].description}
                  </p>
                  <div className="inline-flex items-center gap-3 border-b border-[#BC271C] pb-1 group-hover:border-white transition-colors">
                    <span 
                      className="text-[#BC271C] group-hover:text-white transition-colors tracking-wider uppercase text-xs"
                      style={{ fontFamily: 'Lemon Milk, sans-serif', letterSpacing: '0.15em' }}
                    >
                      Explore
                    </span>
                    <svg className="w-5 h-5 text-[#BC271C] group-hover:text-white group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 bg-[#BC271C] w-0 group-hover:w-full transition-all duration-1000" />
          </a>

          {/* Narrative & Documentary - Split Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Narrative - Portrait */}
            <a
              href={services[1].link}
              className="group block relative overflow-hidden"
            >
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4]">
                <ImageWithFallback
                  src={services[1].image}
                  alt={services[1].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
              </div>
              <div className="absolute inset-0 flex items-end">
                <div className="p-8 lg:p-12 w-full">
                  <span 
                    className="text-[#BC271C] opacity-40 block mb-2"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                  >
                    02
                  </span>
                  <h3 
                    className="text-white mb-2 tracking-wider uppercase group-hover:text-[#BC271C] transition-colors"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: '1.1' }}
                  >
                    {services[1].title}
                  </h3>
                  <p 
                    className="text-white/60 mb-3 uppercase tracking-widest text-xs"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', letterSpacing: '0.2em' }}
                  >
                    {services[1].subtitle}
                  </p>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {services[1].description}
                  </p>
                  <div className="inline-flex items-center gap-2 border-b border-[#BC271C] pb-1">
                    <span className="text-[#BC271C] group-hover:text-white transition-colors text-xs uppercase tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                      Explore
                    </span>
                    <svg className="w-4 h-4 text-[#BC271C] group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Documentary - Portrait */}
            <a
              href={services[2].link}
              className="group block relative overflow-hidden"
            >
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4]">
                <ImageWithFallback
                  src={services[2].image}
                  alt={services[2].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
              </div>
              <div className="absolute inset-0 flex items-end">
                <div className="p-8 lg:p-12 w-full">
                  <span 
                    className="text-[#BC271C] opacity-40 block mb-2"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                  >
                    03
                  </span>
                  <h3 
                    className="text-white mb-2 tracking-wider uppercase group-hover:text-[#BC271C] transition-colors"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: '1.1' }}
                  >
                    {services[2].title}
                  </h3>
                  <p 
                    className="text-white/60 mb-3 uppercase tracking-widest text-xs"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', letterSpacing: '0.2em' }}
                  >
                    {services[2].subtitle}
                  </p>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {services[2].description}
                  </p>
                  <div className="inline-flex items-center gap-2 border-b border-[#BC271C] pb-1">
                    <span className="text-[#BC271C] group-hover:text-white transition-colors text-xs uppercase tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                      Explore
                    </span>
                    <svg className="w-4 h-4 text-[#BC271C] group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Music Videos - Wide Landscape */}
          <a
            href={services[3].link}
            className="group block relative overflow-hidden"
          >
            <div className="relative w-full aspect-[16/7]">
              <ImageWithFallback
                src={services[3].image}
                alt={services[3].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="max-w-2xl ml-auto text-right">
                  <span 
                    className="text-[#BC271C] opacity-40 block mb-2"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                  >
                    04
                  </span>
                  <h3 
                    className="text-white mb-3 tracking-wider uppercase group-hover:text-[#BC271C] transition-colors"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1' }}
                  >
                    {services[3].title}
                  </h3>
                  <p 
                    className="text-white/60 mb-4 uppercase tracking-widest text-xs"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', letterSpacing: '0.2em' }}
                  >
                    {services[3].subtitle}
                  </p>
                  <p className="text-white/90 mb-6 text-base leading-relaxed">
                    {services[3].description}
                  </p>
                  <div className="inline-flex items-center gap-3 border-b border-[#BC271C] pb-1">
                    <span className="text-[#BC271C] group-hover:text-white transition-colors text-xs uppercase tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                      Explore
                    </span>
                    <svg className="w-5 h-5 text-[#BC271C] group-hover:text-white group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Corporate - Square Centered */}
          <a
            href={services[4].link}
            className="group block relative overflow-hidden"
          >
            <div className="relative w-full aspect-[2/1]">
              <ImageWithFallback
                src={services[4].image}
                alt={services[4].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl px-6">
                <span 
                  className="text-[#BC271C] opacity-40 block mb-2"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                >
                  05
                </span>
                <h3 
                  className="text-white mb-3 tracking-wider uppercase group-hover:text-[#BC271C] transition-colors"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1' }}
                >
                  {services[4].title}
                </h3>
                <p 
                  className="text-white/60 mb-4 uppercase tracking-widest text-xs"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', letterSpacing: '0.2em' }}
                >
                  {services[4].subtitle}
                </p>
                <p className="text-white/90 mb-6 text-base leading-relaxed max-w-2xl mx-auto">
                  {services[4].description}
                </p>
                <div className="inline-flex items-center gap-3 border-b border-[#BC271C] pb-1">
                  <span className="text-[#BC271C] group-hover:text-white transition-colors text-xs uppercase tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                    Explore
                  </span>
                  <svg className="w-5 h-5 text-[#BC271C] group-hover:text-white group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-10 h-10 text-[#BC271C]" />
              <h2 
                className="tracking-wider uppercase"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)'
                }}
              >
                Serving the Lehigh Valley
              </h2>
            </div>
            <p className="text-black/70 max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              Premium commercial video and photography services across Pennsylvania's third-largest metropolitan area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cities.map((city, index) => (
              <a
                key={city.slug}
                href={`#city-${city.slug}`}
                className={`group relative overflow-hidden bg-black hover:bg-[#BC271C] transition-all duration-500 ${
                  index === cities.length - 1 && cities.length % 3 === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="p-8 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 
                        className="text-white mb-2 tracking-wider uppercase"
                        style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}
                      >
                        {city.name}
                      </h3>
                      <p className="text-white/50 text-sm">{city.population} residents</p>
                    </div>
                    <MapPin className="w-6 h-6 text-[#BC271C] group-hover:text-white transition-colors" />
                  </div>
                  
                  <p className="text-white/80 mb-6" style={{ fontSize: '0.875rem' }}>
                    {city.tagline}
                  </p>

                  <div className="space-y-2 mb-6">
                    {city.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#BC271C] group-hover:bg-white transition-colors" />
                        <span className="text-white/60 group-hover:text-white/90 text-sm transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <span 
                    className="inline-block text-[#BC271C] group-hover:text-white transition-colors tracking-wider uppercase"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}
                  >
                    View Services →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-black/60 mb-8" style={{ fontSize: '1rem' }}>
              Serving <span className="text-[#BC271C]">Allentown, Bethlehem, Easton</span> and the entire Lehigh Valley
            </p>
            <a 
              href="#contact"
              className="inline-block border-2 border-black text-black px-10 py-4 hover:bg-black hover:text-white transition-all tracking-wider uppercase"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className="text-white mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-white/70 mb-10" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Let's create something extraordinary together. Contact us to discuss your next commercial project.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-[#BC271C] text-white px-12 py-5 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}