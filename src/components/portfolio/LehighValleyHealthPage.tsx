import { Play, Award, Users, Film, ArrowLeft, Phone, Mail } from 'lucide-react';

export function LehighValleyHealthPage() {
  const projectDetails = {
    client: 'Lehigh Valley Health Network',
    industry: 'Healthcare',
    services: ['Documentary Filmmaking', 'Patient Stories', 'Healthcare Marketing'],
    year: '2022-2024',
    films: 3,
    awards: 2
  };

  const videos = [
    {
      title: 'Patient Stories: Recovery & Hope',
      description: 'Authentic patient testimonials showcasing the compassionate care at Lehigh Valley Health Network.',
      thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
      duration: '3:45'
    },
    {
      title: 'Excellence in Healthcare',
      description: 'A cinematic journey through state-of-the-art facilities and dedicated medical professionals.',
      thumbnail: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80',
      duration: '5:20'
    },
    {
      title: 'Community Health Initiative',
      description: 'Award-winning documentary on LVHN\'s commitment to community wellness and preventative care.',
      thumbnail: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80',
      duration: '8:15'
    }
  ];

  const achievements = [
    { icon: Film, title: '3 Documentary Films', description: 'Comprehensive storytelling across multiple healthcare initiatives' },
    { icon: Award, title: '2 Healthcare Awards', description: 'Recognition for excellence in medical storytelling' },
    { icon: Users, title: '50+ Patient Stories', description: 'Authentic voices sharing their healthcare journey' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#000000' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=2000&q=80" alt="Lehigh Valley Health Network" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        <a
          href="#home"
          className="absolute top-28 left-6 lg:left-12 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          onClick={(e) => { e.preventDefault(); window.location.hash = 'home'; }}
        >
          <ArrowLeft size={20} />
          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}>BACK TO HOME</span>
        </a>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 mb-8"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              border: '1px solid rgba(188, 39, 28, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Film className="text-[#BC271C]" size={20} />
            <span className="tracking-wider uppercase text-white" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}>Portfolio Case Study</span>
          </div>

          <h1
            className="mb-6"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
          >
            <span className="text-white">Lehigh Valley</span><br />
            <span style={{ background: 'linear-gradient(135deg, #BC271C 0%, #FF6B6B 50%, #BC271C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Health Network</span>
          </h1>

          <p className="text-white/70 max-w-3xl mx-auto mb-12" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', lineHeight: '1.6' }}>
            Documentary storytelling for healthcare excellence. Capturing authentic patient journeys and medical innovation through cinematic lens.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { value: projectDetails.films, label: 'Films Produced' },
              { value: projectDetails.awards, label: 'Awards Won' },
              { value: '50+', label: 'Patient Stories' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-white mb-1" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '2rem' }}>{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2" style={{ animation: 'scrollBounce 2s infinite' }}>
            <div className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" style={{ animation: 'scrollDot 2s infinite' }} />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 px-6 lg:px-12 bg-[#EEEEE8]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80" alt="Healthcare Excellence" className="w-full h-auto" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(188, 39, 28, 0.2) 0%, transparent 100%)' }} />
            </div>

            <div>
              <h2 className="mb-6" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                <span className="text-black">The</span>{' '}
                <span style={{ background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Challenge</span>
              </h2>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                Lehigh Valley Health Network needed authentic, emotionally resonant content to showcase their commitment to patient care and medical excellence. The challenge was to capture real patient stories while maintaining dignity, privacy, and medical accuracy.
              </p>
              <p className="text-black/70 text-lg leading-relaxed mb-8">
                Our approach combined documentary filmmaking techniques with cinematic production values, creating films that educate, inspire, and connect with audiences on a deeply human level.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div><div className="text-black/50 text-sm mb-2">Client</div><div className="text-black" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>{projectDetails.client}</div></div>
                <div><div className="text-black/50 text-sm mb-2">Industry</div><div className="text-black" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>{projectDetails.industry}</div></div>
                <div><div className="text-black/50 text-sm mb-2">Year</div><div className="text-black" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>{projectDetails.year}</div></div>
                <div><div className="text-black/50 text-sm mb-2">Services</div><div className="text-black text-sm">{projectDetails.services.join(', ')}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="mb-6" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              <span className="text-black">Featured</span>{' '}
              <span style={{ background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Films</span>
            </h2>
            <p className="text-black/60 max-w-3xl mx-auto text-lg">Award-winning documentary series highlighting patient care, medical innovation, and community health initiatives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-black mb-4">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="text-white ml-1" size={24} fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded">{video.duration}</div>
                </div>
                <h3 className="mb-2" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem', background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{video.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6 lg:px-12 bg-[#EEEEE8]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="mb-6" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              <span className="text-black">Project</span>{' '}
              <span style={{ background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Impact</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-8"
                style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.3))', border: '1px solid rgba(0,0,0,0.05)' }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6" style={{ background: 'linear-gradient(135deg, rgba(188, 39, 28, 0.1), rgba(188, 39, 28, 0.05))', border: '1px solid rgba(188, 39, 28, 0.2)' }}>
                  <achievement.icon className="text-[#BC271C]" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem', background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{achievement.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)' }}>
        <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 z-0 animate-pulse" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(188, 39, 28, 0.15) 0%, transparent 70%)', animationDuration: '6s' }} />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div
            className="text-center p-16"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <h2 className="mb-6" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <span className="text-white">Ready for Your</span>{' '}
              <span style={{ background: 'linear-gradient(135deg, #BC271C 0%, #FF6B6B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Story?</span>
            </h2>
            <p className="text-white/60 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">Let's create something extraordinary together. From concept to final cut, we bring your vision to life.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+16108448696" className="inline-flex items-center gap-3 px-10 py-5 bg-[#BC271C] text-white transition-all tracking-wider uppercase hover:scale-105 active:scale-98" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}>
                <Phone size={20} />(610) 844-8696
              </a>
              <a href="mailto:nickasenjofilms@gmail.com" className="inline-flex items-center gap-3 px-10 py-5 text-white transition-all tracking-wider uppercase hover:scale-105 active:scale-98" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem', background: 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Mail size={20} />Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scrollBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(10px); } }
        @keyframes scrollDot { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(12px); } }
      `}</style>
    </div>
  );
}