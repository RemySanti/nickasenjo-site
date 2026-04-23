import { useEffect } from 'react';
import { Play, CheckCircle } from 'lucide-react';

export function NarrativePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Narrative Film Production Allentown PA | Nick Asenjo Films';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional narrative film production in Allentown, PA. Short films, feature films, and branded content. Award-winning cinematography and storytelling. Serving Lehigh Valley. Call (610) 844-8696');
    }
  }, []);

  return (
    <div className="bg-[#EEEEE8] mt-20">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 px-6 lg:px-12">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80"
            alt="Narrative Film Production"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto max-w-6xl">
          <h1 
            className="text-white mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}
          >
            Narrative Film Production
          </h1>
          <p className="text-white/90 mb-4 max-w-3xl" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
            Cinematic Storytelling in Allentown, Pennsylvania
          </p>
          <p className="text-white/80 mb-8 max-w-2xl" style={{ fontSize: '1.125rem' }}>
            From short films to feature-length productions, we bring compelling narratives to life 
            with professional cinematography and authentic storytelling rooted in the Lehigh Valley.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-[#BC271C] text-white px-10 py-4 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
          >
            Discuss Your Project
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="text-black mb-12 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Narrative Film Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Short Films
              </h3>
              <p className="text-black/70 leading-relaxed mb-4">
                Professional short film production for festivals, portfolios, and online distribution. 
                We handle all aspects of production from screenplay to final cut.
              </p>
              <ul className="space-y-2">
                {['Script development', 'Casting & rehearsals', 'Location scouting in PA', 'Full crew & equipment', 'Post-production & sound'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-black/70">
                    <CheckCircle className="text-[#BC271C] flex-shrink-0" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Feature Films
              </h3>
              <p className="text-black/70 leading-relaxed mb-4">
                Full-scale feature film production with experienced crew and cutting-edge equipment. 
                Allentown-based with connections to regional and national distribution networks.
              </p>
              <ul className="space-y-2">
                {['Pre-production planning', 'Multi-week shoot schedules', 'Professional talent', 'Cinema-grade cameras', 'Festival preparation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-black/70">
                    <CheckCircle className="text-[#BC271C] flex-shrink-0" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-black text-white p-12">
            <h3 
              className="text-white mb-6 tracking-wider uppercase"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}
            >
              Why Film in Allentown & Lehigh Valley?
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              The Lehigh Valley offers diverse filming locations from urban Allentown streetscapes to 
              rural Pennsylvania landscapes. Our local expertise means access to the best locations, 
              competitive crew rates, and streamlined permitting.
            </p>
            <p className="text-white/80 leading-relaxed">
              We're connected to the regional film community and can provide everything you need for 
              a successful production in Pennsylvania.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-[#BC271C] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className="text-white mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Let's Make Your Film
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '1.25rem' }}>
            Professional narrative film production in Allentown, PA. Contact us to discuss your project.
          </p>
          <a 
            href="tel:+16108448696"
            className="inline-block bg-white text-[#BC271C] px-10 py-4 hover:bg-gray-100 transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
          >
            Call (610) 844-8696
          </a>
        </div>
      </section>
    </div>
  );
}
