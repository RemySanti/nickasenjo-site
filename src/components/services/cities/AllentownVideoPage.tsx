import { Play, Building2, Award, MapPin, Phone, Mail } from 'lucide-react';

export function AllentownVideoPage() {
  return (
    <div className="bg-[#EEEEE8] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        {/* Placeholder: Downtown Allentown skyline video/image */}
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
            Allentown Commercial Video Production
          </h1>
          <p 
            className="text-white/80 max-w-3xl mx-auto mb-4"
            style={{ fontSize: '1.25rem', lineHeight: '1.8' }}
          >
            Pennsylvania's third-largest city deserves world-class video production
          </p>
          <p className="text-white/60">
            Serving Allentown's corporate headquarters, healthcare institutions, and thriving downtown businesses
          </p>
        </div>
      </section>

      {/* Why Allentown Section */}
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
                Allentown's Premier Video Production Partner
              </h2>
              <p className="text-black/70 mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Based in the heart of downtown Allentown at 532 Hamilton Street, we understand what makes 
                this city tick. From the iconic PPL Center to the revitalized Hamilton Street corridor, 
                we capture the energy and ambition that defines modern Allentown.
              </p>
              <p className="text-black/70" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Our proximity to your business means faster turnarounds, local expertise, and authentic 
                storytelling that resonates with Allentown audiences and beyond.
              </p>
            </div>
            <div className="bg-[#EEEEE8] p-12 border border-black/10">
              {/* Placeholder: Image of PPL Center, Hamilton Street, or downtown skyline */}
              <div className="aspect-video bg-black/10 flex items-center justify-center mb-6">
                <p className="text-black/40 text-sm">
                  [Downtown Allentown Skyline / PPL Center / Hamilton Street]
                </p>
              </div>
              <p className="text-black/60 text-sm text-center">
                Cinematic storytelling in Pennsylvania's fastest-growing city
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 
            className="text-center mb-16 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Industries We Serve in Allentown
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Corporate Headquarters
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Executive communications, annual reports, recruitment videos for Allentown's Fortune 1000 companies
              </p>
              <p className="text-black/50 text-xs">
                Target: Air Products, PPL Corporation, B. Braun
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Award className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Healthcare Excellence
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Medical marketing, patient testimonials, facility showcases for leading healthcare providers
              </p>
              <p className="text-black/50 text-xs">
                Target: Lehigh Valley Health Network, St. Luke's
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Play className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Entertainment & Venues
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Event promotion, venue tours, concert highlights for Allentown's premier destinations
              </p>
              <p className="text-black/50 text-xs">
                Target: PPL Center, Miller Symphony Hall, ArtsQuest
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Financial Services
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Trust-building commercials, client testimonials, educational content
              </p>
              <p className="text-black/50 text-xs">
                Target: Regional banks, investment firms, insurance
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Real Estate Development
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Property showcases, development updates, drone cinematography
              </p>
              <p className="text-black/50 text-xs">
                Target: City Center, Waterfront projects, luxury condos
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Higher Education
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Recruitment videos, campus life, academic excellence stories
              </p>
              <p className="text-black/50 text-xs">
                Target: Muhlenberg College, Cedar Crest, DeSales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights for Filming */}
      <section className="bg-black py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 
            className="text-white text-center mb-16 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Iconic Allentown Filming Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                Downtown Skyline
              </h3>
              <p className="text-white/70 mb-4">
                Modern urban backdrop featuring PPL Center, City Center towers, and revitalized Hamilton Street
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Corporate videos, urban lifestyle, B-roll
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                PPL Center
              </h3>
              <p className="text-white/70 mb-4">
                State-of-the-art arena representing Allentown's entertainment renaissance
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Event coverage, architectural showcase, energy
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                Historic Districts
              </h3>
              <p className="text-white/70 mb-4">
                19th-century architecture blending heritage with modern revitalization
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Brand storytelling, timeless aesthetic, character
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                Corporate Campuses
              </h3>
              <p className="text-white/70 mb-4">
                Modern office environments and headquarters of major corporations
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Corporate culture, innovation, professional settings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className="mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Ready to Tell Your Allentown Story?
          </h2>
          <p className="text-black/70 mb-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Let's create compelling video content that positions your Allentown business as an industry leader.
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
