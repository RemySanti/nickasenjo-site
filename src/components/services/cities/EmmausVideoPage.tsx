import { Play, Building2, MapPin, Phone, Mail, Heart } from 'lucide-react';

export function EmmausVideoPage() {
  return (
    <div className="bg-[#EEEEE8] min-h-screen">
      <section className="relative h-[70vh] bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        {/* Placeholder: Main Street Emmaus, small-town charm, boutique shops */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <MapPin className="w-12 h-12 text-[#BC271C] mx-auto mb-6" />
          <h1 
            className="text-white mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.1'
            }}
          >
            Emmaus Commercial Video Production
          </h1>
          <p 
            className="text-white/80 max-w-3xl mx-auto mb-4"
            style={{ fontSize: '1.25rem', lineHeight: '1.8' }}
          >
            Where Small-Town Values Meet Big Brand Impact
          </p>
          <p className="text-white/60">
            Serving Emmaus's boutique businesses, professional services, and community-focused brands
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="mb-6 tracking-wider uppercase"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)'
                }}
              >
                Authentic Storytelling for Emmaus Businesses
              </h2>
              <p className="text-black/70 mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Emmaus's charming Main Street and strong sense of community provide the perfect setting 
                for brands that value authenticity and personal connection.
              </p>
              <p className="text-black/70" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                We create video content that reflects the quality, care, and personal touch that 
                defines Emmaus's business community.
              </p>
            </div>
            <div className="bg-[#EEEEE8] p-12 border border-black/10">
              {/* Placeholder: Main Street boutiques, community events, local businesses */}
              <div className="aspect-video bg-black/10 flex items-center justify-center mb-6">
                <p className="text-black/40 text-sm text-center">
                  [Main Street Emmaus / Boutique Shops / Community Gathering Spaces]
                </p>
              </div>
              <p className="text-black/60 text-sm text-center">
                Small-town charm with professional polish
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 
            className="text-center mb-16 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Industries We Serve in Emmaus
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <Heart className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Boutique Retail
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Showcase unique products, personalized service, and curated shopping experiences
              </p>
              <p className="text-black/50 text-xs">
                Target: Main Street boutiques, specialty shops
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Professional Services
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Law offices, financial planners, consultants building trust through video
              </p>
              <p className="text-black/50 text-xs">
                Target: Local professional firms
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Dining & Hospitality
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Restaurant features, culinary showcases, ambiance videos
              </p>
              <p className="text-black/50 text-xs">
                Target: Local restaurants, cafes, B&Bs
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Health & Wellness
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Medical practices, wellness centers, fitness studios
              </p>
              <p className="text-black/50 text-xs">
                Target: Local healthcare providers
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Community Organizations
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Non-profits, civic groups, local initiatives
              </p>
              <p className="text-black/50 text-xs">
                Target: Emmaus community organizations
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Home Services
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Contractors, real estate, home improvement
              </p>
              <p className="text-black/50 text-xs">
                Target: Local service providers
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className="mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Ready to Tell Your Emmaus Story?
          </h2>
          <p className="text-black/70 mb-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Let's create video content that captures the heart and authenticity of your Emmaus business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-black/70">
              <Phone className="w-5 h-5 text-[#BC271C]" />
              <a href="tel:+16108448696" className="hover:text-[#BC271C] transition-colors">
                (610) 844-8696
              </a>
            </div>
            <div className="flex items-center gap-2 text-black/70">
              <Mail className="w-5 h-5 text-[#BC271C]" />
              <a href="mailto:nickasenjofilms@gmail.com" className="hover:text-[#BC271C] transition-colors">
                nickasenjofilms@gmail.com
              </a>
            </div>
          </div>

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
