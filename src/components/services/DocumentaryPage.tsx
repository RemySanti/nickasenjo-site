import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export function DocumentaryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Documentary Production Allentown PA | Nick Asenjo Films';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional documentary video production in Allentown, PA. Corporate documentaries, historical films, and social impact stories. Lehigh Valley storytelling experts. Call (610) 844-8696');
    }
  }, []);

  return (
    <div className="bg-[#EEEEE8] mt-20">
      {/* Hero */}
      <section className="relative bg-black text-white py-32 px-6 lg:px-12">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80"
            alt="Documentary Production"
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
            Documentary Production
          </h1>
          <p className="text-white/90 mb-4 max-w-3xl" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
            Authentic Stories from Allentown & Beyond
          </p>
          <p className="text-white/80 mb-8 max-w-2xl" style={{ fontSize: '1.125rem' }}>
            Documentary filmmaking that captures real stories, real people, and real impact. 
            From corporate histories to social justice, we tell the stories that matter.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-[#BC271C] text-white px-10 py-4 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
          >
            Tell Your Story
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
            Documentary Services in Lehigh Valley
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Corporate Documentaries
              </h3>
              <p className="text-black/70">
                Tell your company's story with professional documentaries perfect for anniversaries, 
                recruitment, and investor relations.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Historical Films
              </h3>
              <p className="text-black/70">
                Preserve Lehigh Valley history with archival research, interviews, and compelling 
                narrative structure.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Social Impact
              </h3>
              <p className="text-black/70">
                Amplify important causes and community voices through documentary storytelling 
                that drives change.
              </p>
            </div>
          </div>

          <div className="bg-black text-white p-12">
            <h3 
              className="text-white mb-6 tracking-wider uppercase"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}
            >
              Our Documentary Approach
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'In-depth research & planning',
                'Sensitive interview techniques',
                'Observational cinematography',
                'Archival footage integration',
                'Expert sound recording',
                'Compelling story structure',
                'Professional editing',
                'Festival & broadcast preparation'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#BC271C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
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
            Ready to Document Your Story?
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '1.25rem' }}>
            Professional documentary production serving Allentown and the Lehigh Valley.
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
