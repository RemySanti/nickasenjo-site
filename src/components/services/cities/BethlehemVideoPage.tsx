import { Play, Building2, Award, MapPin, Phone, Mail } from 'lucide-react';

export function BethlehemVideoPage() {
  return (
    <div className="bg-[#EEEEE8] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        {/* Placeholder: SteelStacks with blast furnaces */}
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
            Bethlehem Commercial Video Production
          </h1>
          <p 
            className="text-white/80 max-w-3xl mx-auto mb-4"
            style={{ fontSize: '1.25rem', lineHeight: '1.8' }}
          >
            Where Industrial Heritage Meets Modern Innovation
          </p>
          <p className="text-white/60">
            Serving Bethlehem's entertainment venues, educational institutions, and thriving hospitality sector
          </p>
        </div>
      </section>

      {/* Why Bethlehem Section */}
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
                Bethlehem's Story Deserves Cinematic Treatment
              </h2>
              <p className="text-black/70 mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                From the iconic SteelStacks to the prestigious Lehigh University campus, Bethlehem's 
                transformation from industrial powerhouse to cultural destination provides endless visual storytelling opportunities.
              </p>
              <p className="text-black/70" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                We capture the spirit of this Christmas City with production values that match its 
                world-class venues and forward-thinking businesses.
              </p>
            </div>
            <div className="bg-[#EEEEE8] p-12 border border-black/10">
              {/* Placeholder: SteelStacks blast furnaces at dusk */}
              <div className="aspect-video bg-black/10 flex items-center justify-center mb-6">
                <p className="text-black/40 text-sm text-center">
                  [SteelStacks Blast Furnaces / Lehigh University / Historic District]
                </p>
              </div>
              <p className="text-black/60 text-sm text-center">
                Industrial elegance meets modern sophistication
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
            Industries We Serve in Bethlehem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <Play className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Entertainment & Arts
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Event promotion, festival coverage, venue showcases for Bethlehem's thriving arts scene
              </p>
              <p className="text-black/50 text-xs">
                Target: SteelStacks, Musikfest, ArtsQuest
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Award className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Higher Education
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Campus tours, academic excellence, student life for prestigious institutions
              </p>
              <p className="text-black/50 text-xs">
                Target: Lehigh University, Moravian University
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Hospitality Excellence
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Hotel tours, dining experiences, tourism promotion
              </p>
              <p className="text-black/50 text-xs">
                Target: Historic Hotel Bethlehem, Sands Casino Resort
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Healthcare Innovation
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Medical excellence, patient care, facility tours
              </p>
              <p className="text-black/50 text-xs">
                Target: St. Luke's University Health Network
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Tourism & Events
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Destination marketing, seasonal campaigns, cultural celebrations
              </p>
              <p className="text-black/50 text-xs">
                Target: Christmas City, Musikfest, Celtic Classic
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 
                className="mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Historic Preservation
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Heritage storytelling, restoration showcases, architectural films
              </p>
              <p className="text-black/50 text-xs">
                Target: Historic Bethlehem Museums & Sites
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
            Iconic Bethlehem Filming Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                SteelStacks
              </h3>
              <p className="text-white/70 mb-4">
                Dramatic blast furnaces and modern arts campus - an architectural masterpiece
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Bold visuals, industrial aesthetic, transformation stories
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                Lehigh University Campus
              </h3>
              <p className="text-white/70 mb-4">
                Stunning hilltop campus with Gothic architecture and mountain views
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Academic excellence, prestige, timeless beauty
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                Historic Main Street
              </h3>
              <p className="text-white/70 mb-4">
                18th-century Moravian architecture and charming streetscapes
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Heritage branding, authenticity, character-rich B-roll
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h3 
                className="text-white mb-3 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.125rem' }}
              >
                Christmas City Lights
              </h3>
              <p className="text-white/70 mb-4">
                Seasonal magnificence with iconic star and holiday displays
              </p>
              <p className="text-[#BC271C] text-sm">
                Perfect for: Holiday campaigns, tradition, magical atmosphere
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
            Ready to Tell Your Bethlehem Story?
          </h2>
          <p className="text-black/70 mb-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Let's create cinematic content that captures Bethlehem's unique blend of heritage and innovation.
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
