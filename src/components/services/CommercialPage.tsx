import { useEffect } from 'react';
import { Play, CheckCircle } from 'lucide-react';

export function CommercialPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Commercial Video Production Allentown PA | Nick Asenjo Films';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premier commercial video production in Allentown, PA. Award-winning advertising content for Lehigh Valley businesses. TV commercials, product videos, and brand films. Call (610) 844-8696');
    }
  }, []);

  const benefits = [
    'Professional 4K cinematography',
    'Concept development & storyboarding',
    'On-location and studio production',
    'Professional talent & crew',
    'Post-production & color grading',
    'Multi-platform delivery (TV, web, social)',
    'Fast turnaround times',
    'Competitive Lehigh Valley pricing'
  ];

  const projects = [
    {
      title: 'Luxury Automotive Campaign',
      description: 'High-end car commercial for regional dealership featuring dynamic cinematography and lifestyle storytelling.',
      thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80'
    },
    {
      title: 'Restaurant Brand Video',
      description: 'Mouth-watering commercial for Lehigh Valley restaurant showcasing cuisine and atmosphere.',
      thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80'
    },
    {
      title: 'Tech Product Launch',
      description: 'Modern product reveal video with motion graphics and sleek visual effects.',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80'
    }
  ];

  return (
    <div className="bg-[#EEEEE8] mt-20">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 px-6 lg:px-12">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1920&q=80"
            alt="Commercial Video Production"
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
            Commercial Video Production
          </h1>
          <p className="text-white/90 mb-4 max-w-3xl" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
            Allentown's Premier Commercial Video Production Company
          </p>
          <p className="text-white/80 mb-8 max-w-2xl" style={{ fontSize: '1.125rem' }}>
            Serving Lehigh Valley businesses with high-impact advertising content that drives results. 
            From TV commercials to social media campaigns, we create videos that convert.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-[#BC271C] text-white px-10 py-4 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="text-black mb-12 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Commercial Video Production Services in Allentown, PA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 border-l-4 border-[#BC271C]">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                TV Commercials
              </h3>
              <p className="text-black/70 leading-relaxed">
                Broadcast-quality commercials for local Allentown and regional Pennsylvania markets. 
                We handle everything from concept to final delivery for cable, broadcast, and streaming platforms.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#BC271C]">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Product Videos
              </h3>
              <p className="text-black/70 leading-relaxed">
                Showcase your products with professional video that highlights features, benefits, and lifestyle appeal. 
                Perfect for e-commerce, Amazon, and social media marketing.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#BC271C]">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Brand Films
              </h3>
              <p className="text-black/70 leading-relaxed">
                Tell your brand story with cinematic brand films that connect emotionally with your audience. 
                Ideal for websites, trade shows, and investor presentations.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#BC271C]">
              <h3 
                className="text-[#BC271C] mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}
              >
                Social Media Content
              </h3>
              <p className="text-black/70 leading-relaxed">
                High-performing video content optimized for Instagram, Facebook, TikTok, and YouTube. 
                Increase engagement and grow your Lehigh Valley customer base.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-black text-white p-12">
            <h3 
              className="text-white mb-8 tracking-wider uppercase"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}
            >
              Why Choose Nick Asenjo Films for Commercial Video Production?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#BC271C] flex-shrink-0 mt-1" size={20} />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="text-black mb-12 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Recent Commercial Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[16/9] bg-black overflow-hidden mb-4">
                  <img 
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#BC271C] rounded-full">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                <h3 
                  className="text-black mb-2 tracking-wider uppercase"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
                >
                  {project.title}
                </h3>
                <p className="text-black/70 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-[#BC271C] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className="text-white mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Ready to Create Your Commercial?
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '1.25rem' }}>
            Let's discuss your commercial video production needs. Serving Allentown, Bethlehem, Easton, 
            and the entire Lehigh Valley region.
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
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 
            className="text-black mb-12 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Commercial Video Production FAQ
          </h2>

          <div className="space-y-8">
            <div>
              <h3 
                className="text-[#BC271C] mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                How much does commercial video production cost in Allentown?
              </h3>
              <p className="text-black/70 leading-relaxed">
                Commercial video production costs vary based on scope, length, and complexity. Basic commercials 
                start around $5,000, while high-end productions can range from $15,000-$50,000+. We offer 
                competitive Lehigh Valley pricing and can work with various budgets.
              </p>
            </div>

            <div>
              <h3 
                className="text-[#BC271C] mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                How long does it take to produce a commercial?
              </h3>
              <p className="text-black/70 leading-relaxed">
                Typical timeline is 3-6 weeks from concept to delivery, including pre-production, filming, 
                and post-production. Rush projects can be accommodated for additional fees.
              </p>
            </div>

            <div>
              <h3 
                className="text-[#BC271C] mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Do you provide actors and locations?
              </h3>
              <p className="text-black/70 leading-relaxed">
                Yes! We handle talent casting, location scouting throughout Allentown and the Lehigh Valley, 
                and all production logistics. We can also work with your existing team or locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}