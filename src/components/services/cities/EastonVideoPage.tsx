import { Play, Building2, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

export function EastonVideoPage() {
  return (
    <div className="bg-[#EEEEE8] min-h-screen">
      <section className="relative h-[70vh] bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        {/* Placeholder: Delaware River waterfront, Lafayette College on hillside */}
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
            Easton Commercial Video Production
          </h1>
          <p 
            className="text-white/80 max-w-3xl mx-auto mb-4"
            style={{ fontSize: '1.25rem', lineHeight: '1.8' }}
          >
            Where Three Rivers Meet and Innovation Flows
          </p>
          <p className="text-white/60">
            Serving Easton's tech startups, educational leaders, and revitalized downtown businesses
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
                Easton's Renaissance in Motion
              </h2>
              <p className="text-black/70 mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                From the prestigious Lafayette College hilltop to the vibrant Centre Square, Easton's 
                transformation offers stunning backdrops for brand storytelling.
              </p>
              <p className="text-black/70" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                We capture the entrepreneurial spirit of this riverfront city with production that 
                honors its heritage while celebrating its forward momentum.
              </p>
            </div>
            <div className="bg-[#EEEEE8] p-12 border border-black/10">
              {/* Placeholder: Centre Square, Lafayette College, Delaware River */}
              <div className="aspect-video bg-black/10 flex items-center justify-center mb-6">
                <p className="text-black/40 text-sm text-center">
                  [Centre Square / Lafayette College / Delaware River Waterfront]
                </p>
              </div>
              <p className="text-black/60 text-sm text-center">
                Historic elegance meets entrepreneurial energy
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
            Industries We Serve in Easton
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <GraduationCap className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Elite Education
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Campus showcases, recruitment videos, academic excellence for prestigious institutions
              </p>
              <p className="text-black/50 text-xs">
                Target: Lafayette College
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Technology & Innovation
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Startup stories, tech culture, innovation showcases
              </p>
              <p className="text-black/50 text-xs">
                Target: Tech incubators, software companies
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Downtown Retail
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Shopping district promotions, boutique showcases, local business features
              </p>
              <p className="text-black/50 text-xs">
                Target: Centre Square businesses, Public Market
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Arts & Culture
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Gallery tours, cultural events, artistic community showcases
              </p>
              <p className="text-black/50 text-xs">
                Target: State Theatre, Crayola Experience, museums
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Tourism & Hospitality
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Destination marketing, hotel showcases, dining experiences
              </p>
              <p className="text-black/50 text-xs">
                Target: Easton tourism, restaurants, hotels
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
                Law firms, financial advisors, consulting agencies
              </p>
              <p className="text-black/50 text-xs">
                Target: Centre Square professional offices
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 
            className="text-white text-center mb-16 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Iconic Easton Filming Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                Centre Square
              </h3>
              <p className="text-white/70 mb-4">
                Historic town circle with classic architecture and vibrant street life
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Community feel, downtown vitality, timeless appeal
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                Delaware River Waterfront
              </h3>
              <p className="text-white/70 mb-4">
                Scenic riverfront with bridges connecting three states
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Natural beauty, connectivity, regional presence
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                Lafayette College Campus
              </h3>
              <p className="text-white/70 mb-4">
                Prestigious hilltop campus with stunning valley views
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Academic prestige, architectural beauty, ambition
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                Historic Downtown
              </h3>
              <p className="text-white/70 mb-4">
                Colonial-era buildings housing modern businesses
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Heritage brands, authenticity, character
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
            Ready to Tell Your Easton Story?
          </h2>
          <p className="text-black/70 mb-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Let's create video content that captures Easton's unique blend of history and innovation.
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
              <a href="mailto:nick@nickasenjofilms.com" className="hover:text-[#BC271C] transition-colors">
                nick@nickasenjofilms.com
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
