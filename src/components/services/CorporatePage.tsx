import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export function CorporatePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Corporate Video Production Allentown PA | Nick Asenjo Films';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional corporate video production in Allentown, PA. Training videos, company culture, internal communications. Serving Lehigh Valley businesses. Call (610) 844-8696');
    }
  }, []);

  return (
    <div className="bg-[#EEEEE8] mt-20">
      {/* Hero */}
      <section className="relative bg-black text-white py-32 px-6 lg:px-12">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
            alt="Corporate Video Production"
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
            Corporate Video Production
          </h1>
          <p className="text-white/90 mb-4 max-w-3xl" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
            Professional Video Solutions for Allentown Businesses
          </p>
          <p className="text-white/80 mb-8 max-w-2xl" style={{ fontSize: '1.125rem' }}>
            Elevate your corporate communications with professional video production. Training videos, 
            company culture content, and internal communications that engage your team and stakeholders.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-[#BC271C] text-white px-10 py-4 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
          >
            Request Consultation
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
            Corporate Video Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Training Videos
              </h3>
              <p className="text-black/70">
                Effective training content that reduces costs and improves employee retention. 
                Professional on-site production throughout Lehigh Valley.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Company Culture
              </h3>
              <p className="text-black/70">
                Showcase your workplace culture to attract top talent. Recruitment videos 
                that highlight what makes your Allentown company special.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Internal Comms
              </h3>
              <p className="text-black/70">
                CEO messages, town halls, and company updates delivered with professional 
                production quality.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Event Coverage
              </h3>
              <p className="text-black/70">
                Document conferences, trade shows, and corporate events with multi-camera 
                production and same-day highlights.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Product Demos
              </h3>
              <p className="text-black/70">
                Clear, concise product demonstration videos for sales teams and customer 
                education.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Testimonials
              </h3>
              <p className="text-black/70">
                Customer testimonial videos that build trust and drive conversions for 
                Pennsylvania businesses.
              </p>
            </div>
          </div>

          <div className="bg-black text-white p-12">
            <h3 
              className="text-white mb-6 tracking-wider uppercase"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}
            >
              Why Allentown Businesses Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Fast turnaround times',
                'On-site production in Lehigh Valley',
                'Professional crew & equipment',
                'Flexible scheduling',
                'Competitive business pricing',
                'Branded templates available',
                'Ongoing support',
                'Multi-video packages'
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
            Elevate Your Corporate Communications
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '1.25rem' }}>
            Professional corporate video production serving Allentown and Lehigh Valley businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+16108448696"
              className="inline-block bg-white text-[#BC271C] px-10 py-4 hover:bg-gray-100 transition-colors tracking-wider uppercase"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
            >
              Call (610) 844-8696
            </a>
            <a 
              href="#contact"
              className="inline-block bg-black text-white px-10 py-4 hover:bg-gray-900 transition-colors tracking-wider uppercase"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
