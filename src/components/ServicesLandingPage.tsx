import { useRef, useEffect, useState } from 'react';
import { Film, Sparkles, Share2, Music, Camera, ArrowRight, Award, Users, Play, Phone, Mail, Podcast } from 'lucide-react';
import { LogoCarouselSection } from './LogoCarouselSection';

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { rootMargin: '-100px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={service.href}
      className="group cursor-pointer relative overflow-hidden transition-all duration-700 hover:-translate-y-3"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(60px)',
        transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
      }}
    >
      {/* Image Container */}
      <div 
        className="aspect-[4/3] overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}
      >
        <img 
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none animate-pulse"
          style={{
            background: 'linear-gradient(135deg, rgba(188, 39, 28, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)',
            opacity: 0.7,
          }}
        />

        {/* Radial Gradient */}
        <div
          className="absolute inset-0 pointer-events-none animate-pulse"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(188, 39, 28, 0.5) 0%, transparent 70%)',
            opacity: 0.5,
            animationDuration: '5s',
          }}
        />

        {/* Icon Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
          <div 
            className="p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(188, 39, 28, 0.3), rgba(188, 39, 28, 0.1))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(188, 39, 28, 0.5)'
            }}
          >
            <service.icon className="text-white" size={56} strokeWidth={1.5} />
          </div>
        </div>

        {/* Corner Accent */}
        <div
          className="absolute top-0 right-0 w-32 h-32 animate-pulse"
          style={{
            background: 'radial-gradient(circle at top right, rgba(188, 39, 28, 0.7) 0%, transparent 70%)',
            opacity: 0.7,
            animationDuration: '3s',
          }}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div
            className="px-4 py-2 text-xs tracking-wider uppercase text-white"
            style={{
              fontFamily: 'Lemon Milk, sans-serif',
              background: 'linear-gradient(135deg, rgba(188, 39, 28, 0.9), rgba(188, 39, 28, 0.7))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(188, 39, 28, 0.5)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 0.6s ease ${index * 0.15 + 0.3}s, transform 0.6s ease ${index * 0.15 + 0.3}s`,
            }}
          >
            {service.category}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div 
        className="p-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.3))',
          border: '1px solid rgba(0,0,0,0.05)'
        }}
      >
        {/* Hover Gradient Background */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(135deg, rgba(188, 39, 28, 0.05), transparent)' }}
        />

        <div
          className="flex items-center gap-3 mb-4 relative z-10"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(-20px)',
            transition: `opacity 0.6s ease ${index * 0.15 + 0.3}s, transform 0.6s ease ${index * 0.15 + 0.3}s`,
          }}
        >
          <div 
            className="p-2"
            style={{
              background: 'linear-gradient(135deg, rgba(188, 39, 28, 0.1), rgba(188, 39, 28, 0.05))',
              border: '1px solid rgba(188, 39, 28, 0.2)'
            }}
          >
            <service.icon className="text-[#BC271C]" size={24} strokeWidth={1.5} />
          </div>
          
          <h3 
            className="tracking-wider uppercase group-hover:translate-x-2 transition-transform"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif', 
              fontSize: '1.25rem',
              background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {service.title}
          </h3>
        </div>

        <p 
          className="text-black/70 leading-relaxed text-sm mb-4 relative z-10"
          style={{
            opacity: isInView ? 1 : 0,
            transition: `opacity 0.6s ease ${index * 0.15 + 0.4}s`,
          }}
        >
          {service.description}
        </p>

        {/* Learn More Link */}
        <div
          className="flex items-center gap-2 relative z-10"
          style={{
            opacity: isInView ? 1 : 0,
            transition: `opacity 0.6s ease ${index * 0.15 + 0.5}s`,
          }}
        >
          <span 
            className="text-xs tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', color: '#BC271C' }}
          >
            Next step
          </span>
          <ArrowRight size={14} className="text-[#BC271C] group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </a>
  );
}

export function ServicesLandingPage() {
  const heroRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: 'Drive sales & launches',
      category: 'Revenue & campaigns',
      href: '#service-commercial-video',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
      alt: 'Commercial video for launches and sales',
      description:
        'When you need attention to turn into action: spots, campaigns, and launch films with a clear message and premium craft.',
      icon: Sparkles
    },
    {
      title: 'Build a memorable brand',
      category: 'Trust & recognition',
      href: '#service-brand-story',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
      alt: 'Brand films and story-driven video',
      description:
        'When reputation is the product, films and brand stories sharpen positioning, earn trust, and stay with people after the first watch.',
      icon: Film
    },
    {
      title: 'Grow on social',
      category: 'Reach & consistency',
      href: '#service-social-video',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      alt: 'Social-first video content',
      description:
        'When the feed is the battlefield, short-form and platform-native pieces win on hooks, retention, and a recognizable visual voice.',
      icon: Share2
    },
    {
      title: 'Elevate your music visually',
      category: 'Artist growth',
      href: '#service-music-video',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
      alt: 'Music video production',
      description:
        'When the track deserves a world, cinematic visuals match your sound, grow streams, and define how fans see you.',
      icon: Music
    },
    {
      title: 'Preserve a milestone',
      category: 'Legacy & emotion',
      href: '#service-weddings-events',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
      alt: 'Wedding and event films',
      description:
        'When the day only happens once, wedding and event films capture feeling, detail, and atmosphere you will want to relive.',
      icon: Camera
    },
    {
      title: 'The Platform (show & podcast)',
      category: 'Artist & founder media',
      href: '#the-platform',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
      alt: 'The Platform music video show and podcast',
      description:
        'When discovery matters, our house series delivers music video performances and conversations, plus a podcast that puts business owners and artists in front of the right audience.',
      icon: Podcast
    }
  ];

  const stats = [
    { icon: Award, value: '20+', label: 'Years Experience' },
    { icon: Users, value: '1,000+', label: 'Projects Delivered' },
    { icon: Play, value: '1M+', label: 'Views Generated' }
  ];

  return (
    <div className="pt-20">
      {/* Cinematic Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#000000' }}
      >
        {/* Animated Background Gradient */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(188, 39, 28, 0.15) 0%, transparent 50%)',
            animation: 'bgShift 10s ease-in-out infinite',
          }}
        />
        
        {/* Overlay Pattern */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Diagonal Lines Pattern */}
        <div 
          className="absolute inset-0 opacity-5 z-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(188, 39, 28, 0.5) 20px,
              rgba(188, 39, 28, 0.5) 22px
            )`,
            animation: 'diagonalShift 20s linear infinite',
          }}
        />

        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto animate-fade-in">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 animate-slide-down"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              border: '1px solid rgba(188, 39, 28, 0.3)',
              backdropFilter: 'blur(10px)',
              animationDelay: '0.2s',
              animationFillMode: 'both',
            }}
          >
            <Film className="text-[#BC271C]" size={20} />
            <span 
              className="tracking-wider uppercase text-white"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}
            >
              Outcome-led production
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="mb-6 animate-slide-up"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: '0.95',
              letterSpacing: '-0.02em',
              animationDelay: '0.4s',
              animationFillMode: 'both',
            }}
          >
            <span 
              style={{
                background: 'linear-gradient(135deg, #BC271C 0%, #FF6B6B 50%, #BC271C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Cinematic
            </span>
            <br />
            <span className="text-white">Excellence</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/70 max-w-3xl mx-auto mb-4 animate-slide-up"
            style={{ 
              fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', 
              lineHeight: '1.4',
              animationDelay: '0.6s',
              animationFillMode: 'both',
            }}
          >
            Film organized by what you need it to do, not just by format
          </p>

          <p
            className="text-white/50 mb-12 max-w-2xl mx-auto animate-slide-up"
            style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6',
              animationDelay: '0.8s',
              animationFillMode: 'both',
            }}
          >
            Based in the Lehigh Valley, trusted by brands and artists who want clarity, craft, and a crew that thinks in results as much as shots.
          </p>

          {/* Stats Bar */}
          <div
            className="flex flex-wrap items-center justify-center gap-8 mb-12 animate-slide-up"
            style={{ animationDelay: '1s', animationFillMode: 'both' }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className="p-3"
                  style={{
                    background: 'linear-gradient(135deg, rgba(188, 39, 28, 0.2), rgba(188, 39, 28, 0.05))',
                    border: '1px solid rgba(188, 39, 28, 0.3)'
                  }}
                >
                  <stat.icon className="text-[#BC271C]" size={24} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <div 
                    className="text-white"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
          >
            <a
              href="tel:+16108448696"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#BC271C] text-white transition-all tracking-wider uppercase group hover:scale-105 active:scale-98"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
            >
              <Phone size={18} />
              (610) 844-8696
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 px-8 py-4 text-white transition-all tracking-wider uppercase hover:scale-105 active:scale-98"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif', 
                fontSize: '0.875rem',
                background: 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              See how we can help
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-slide-up" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2" style={{ animation: 'scrollBounce 2s infinite' }}>
            <div className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" style={{ animation: 'scrollDot 2s infinite' }} />
          </div>
        </div>
      </section>

      <LogoCarouselSection />

      {/* Services Grid */}
      <section 
        id="services" 
        className="py-32 px-6 lg:px-12 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, transparent 50%, rgba(0,0,0,0.02) 100%)' }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.1'
              }}
            >
              <span className="text-black">Start with</span>{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                your goal
              </span>
            </h2>
            <p className="text-black/60 max-w-3xl mx-auto text-lg">
              Choose the outcome that matches where you are. We align format, crew, and deliverables so the work moves your business or art forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          <p className="text-center text-black/50 text-sm mt-14 max-w-2xl mx-auto leading-relaxed">
            Prefer to browse by format (commercial, narrative, documentary, corporate)?{' '}
            <a
              href="#services-main"
              className="text-[#BC271C] hover:text-black transition-colors underline underline-offset-4"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem', letterSpacing: '0.08em' }}
            >
              View services by format
            </a>
          </p>
          <p className="text-center text-black/45 text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
            Need predictable, month-to-month production capacity?{' '}
            <a
              href="#service-studio-retainer"
              className="text-[#BC271C] hover:text-black transition-colors underline underline-offset-4"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem', letterSpacing: '0.08em' }}
            >
              Studio partnership
            </a>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-32 px-6 lg:px-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)' }}
      >
        <div 
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        <div
          className="absolute inset-0 z-0 animate-pulse"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(188, 39, 28, 0.15) 0%, transparent 70%)',
            animationDuration: '6s',
          }}
        />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div
            className="text-center p-16"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}
            >
              <span className="text-white">Ready to Bring Your</span>{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #BC271C 0%, #FF6B6B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Vision to Life?
              </span>
            </h2>
            <p className="text-white/60 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
              Let's discuss your next project. Based in Allentown, PA, serving the Lehigh Valley and beyond.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+16108448696"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#BC271C] text-white transition-all tracking-wider uppercase hover:scale-105 active:scale-98"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="mailto:nickasenjofilms@gmail.com"
                className="inline-flex items-center gap-3 px-10 py-5 text-white transition-all tracking-wider uppercase hover:scale-105 active:scale-98"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif', 
                  fontSize: '1rem',
                  background: 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bgShift {
          0%, 100% { background: radial-gradient(circle at 20% 50%, rgba(188, 39, 28, 0.15) 0%, transparent 50%); }
          50% { background: radial-gradient(circle at 80% 50%, rgba(188, 39, 28, 0.15) 0%, transparent 50%); }
        }
        @keyframes diagonalShift {
          0% { background-position: 0px 0px; }
          100% { background-position: 40px 40px; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        @keyframes animate-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease forwards;
          opacity: 0;
        }
        .animate-slide-down {
          animation: slideDown 0.8s ease forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: animate-fade-in 1s ease forwards;
        }
      `}</style>
    </div>
  );
}