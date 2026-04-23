import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export function MusicVideoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Music Video Production Allentown PA | Nick Asenjo Films';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional music video production in Allentown, PA. Hip-hop, rock, indie, and pop music videos. Creative concepts and stunning visuals. Lehigh Valley artists. Call (610) 844-8696');
    }
  }, []);

  return (
    <div className="bg-[#EEEEE8] mt-20">
      {/* Hero */}
      <section className="relative bg-black text-white py-32 px-6 lg:px-12">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&q=80"
            alt="Music Video Production"
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
            Music Video Production
          </h1>
          <p className="text-white/90 mb-4 max-w-3xl" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
            Allentown's Top Music Video Production Company
          </p>
          <p className="text-white/80 mb-8 max-w-2xl" style={{ fontSize: '1.125rem' }}>
            Elevate your music with visually stunning music videos. From concept to YouTube, 
            we create videos that amplify your artistry and grow your fanbase.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-[#BC271C] text-white px-10 py-4 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
          >
            Start Your Video
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
            Music Video Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 border-l-4 border-[#BC271C]">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Performance Videos
              </h3>
              <p className="text-black/70 leading-relaxed">
                High-energy performance videos that capture the raw energy of your music. 
                Multi-camera setups, dynamic lighting, and creative editing.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#BC271C]">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Narrative Concepts
              </h3>
              <p className="text-black/70 leading-relaxed">
                Story-driven music videos with cinematic production value. We develop unique 
                concepts that bring your lyrics to life visually.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#BC271C]">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Lyric Videos
              </h3>
              <p className="text-black/70 leading-relaxed">
                Engaging animated lyric videos perfect for YouTube and social media. 
                Custom motion graphics that match your brand aesthetic.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#BC271C]">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Live Session Videos
              </h3>
              <p className="text-black/70 leading-relaxed">
                Intimate live session videos that showcase your musicianship. Perfect for 
                promoting acoustic versions and building artist authenticity.
              </p>
            </div>
          </div>

          <div className="bg-black text-white p-12">
            <h3 
              className="text-white mb-6 tracking-wider uppercase"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}
            >
              What's Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Creative concept development',
                'Location scouting (Lehigh Valley & beyond)',
                '4K/6K cinema cameras',
                'Professional lighting & grip',
                'Talented local crew',
                'Color grading & effects',
                'YouTube optimization',
                'Social media cuts'
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

      {/* Pricing */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="text-black mb-12 tracking-wider uppercase text-center"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Music Video Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-black p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Starter
              </h3>
              <p className="text-black mb-6" style={{ fontSize: '2rem', fontFamily: 'Lemon Milk, sans-serif' }}>
                $2,500
              </p>
              <ul className="space-y-3 text-black/70">
                <li>• 1 day shoot</li>
                <li>• 1-2 locations</li>
                <li>• Basic editing</li>
                <li>• 1 round of revisions</li>
                <li>• HD delivery</li>
              </ul>
            </div>

            <div className="border-2 border-[#BC271C] p-8 bg-[#BC271C] text-white">
              <h3 
                className="text-white mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Professional
              </h3>
              <p className="text-white mb-6" style={{ fontSize: '2rem', fontFamily: 'Lemon Milk, sans-serif' }}>
                $5,000
              </p>
              <ul className="space-y-3 text-white/90">
                <li>• 2 day shoot</li>
                <li>• Multiple locations</li>
                <li>• Advanced editing & effects</li>
                <li>• 2 rounds of revisions</li>
                <li>• 4K delivery</li>
              </ul>
            </div>

            <div className="border-2 border-black p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Premium
              </h3>
              <p className="text-black mb-6" style={{ fontSize: '2rem', fontFamily: 'Lemon Milk, sans-serif' }}>
                $10,000+
              </p>
              <ul className="space-y-3 text-black/70">
                <li>• Multi-day production</li>
                <li>• Unlimited locations</li>
                <li>• Cinematic post-production</li>
                <li>• Unlimited revisions</li>
                <li>• 6K delivery + BTS</li>
              </ul>
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
            Let's Create Your Music Video
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '1.25rem' }}>
            Professional music video production for Allentown and Lehigh Valley artists.
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
