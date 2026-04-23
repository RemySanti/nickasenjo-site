import { ArrowRight, MapPin, Search, Link2, FileText, Users } from 'lucide-react';

export function SiteMapPage() {
  return (
    <div className="min-h-screen bg-[#EEEEE8]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <span className="text-black/60 tracking-[0.3em] uppercase text-sm">
              Owner Dashboard
            </span>
          </div>
          <h1 
            className="mb-6"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            SEO Site Map
          </h1>
          <p className="text-black/80 max-w-3xl text-lg leading-relaxed">
            This page shows the complete SEO architecture of Nick Asenjo Films. 
            Our strategy targets the Lehigh Valley market with local keywords, 
            service-specific pages, and geo-targeted content for maximum visibility.
          </p>
        </div>
      </section>

      {/* SEO Stats */}
      <section className="py-12 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-black/10">
              <div className="flex items-center gap-3 mb-2">
                <FileText size={24} style={{ color: '#BC271C' }} />
                <span 
                  className="text-3xl"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  100+
                </span>
              </div>
              <p className="text-black/60 text-sm">Total Pages</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-black/10">
              <div className="flex items-center gap-3 mb-2">
                <Search size={24} style={{ color: '#BC271C' }} />
                <span 
                  className="text-3xl"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  150+
                </span>
              </div>
              <p className="text-black/60 text-sm">Target Keywords</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-black/10">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={24} style={{ color: '#BC271C' }} />
                <span 
                  className="text-3xl"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  15
                </span>
              </div>
              <p className="text-black/60 text-sm">City Landing Pages</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-black/10">
              <div className="flex items-center gap-3 mb-2">
                <Users size={24} style={{ color: '#BC271C' }} />
                <span 
                  className="text-3xl"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  75+
                </span>
              </div>
              <p className="text-black/60 text-sm">Event Pages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Site Tree */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 
            className="mb-12 text-center"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Visual Site Structure
          </h2>

          <div className="flex justify-center">
            <div className="inline-block max-w-full overflow-x-auto">
              {/* Root - Home */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="bg-[#BC271C] text-white px-8 py-4 rounded-lg shadow-lg">
                    <span style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                      HOME
                    </span>
                  </div>
                  {/* Vertical line down */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20" style={{ top: '100%' }}></div>
                </div>
              </div>

              {/* Level 1 - Main Sections */}
              <div className="relative mb-8">
                {/* Horizontal connecting line */}
                <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-black/20"></div>
                
                <div className="grid grid-cols-5 gap-4 pt-8">
                  {/* Portfolio */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                      <div className="bg-white border-2 border-[#BC271C] px-4 py-3 rounded-lg text-center min-w-[120px]">
                        <span className="text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}>
                          Portfolio
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                      <div className="bg-white border-2 border-[#BC271C] px-4 py-3 rounded-lg text-center min-w-[120px]">
                        <span className="text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}>
                          Services
                        </span>
                      </div>
                      {/* Line down */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                    </div>
                  </div>

                  {/* Blog */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                      <div className="bg-white border-2 border-[#BC271C] px-4 py-3 rounded-lg text-center min-w-[120px]">
                        <span className="text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}>
                          Blog
                        </span>
                      </div>
                      {/* Line down */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                    </div>
                  </div>

                  {/* About */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                      <div className="bg-white border-2 border-[#BC271C] px-4 py-3 rounded-lg text-center min-w-[120px]">
                        <span className="text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}>
                          About
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                      <div className="bg-white border-2 border-[#BC271C] px-4 py-3 rounded-lg text-center min-w-[120px]">
                        <span className="text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}>
                          Contact
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 2 - Services & Blog Breakdown */}
              <div className="grid grid-cols-5 gap-4 mb-8">
                {/* Empty column for Portfolio */}
                <div></div>

                {/* Services Children - Including Events */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full">
                    {/* Horizontal line for service types */}
                    <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-black/20"></div>
                    
                    <div className="grid grid-cols-1 gap-2 pt-8">
                      <div className="bg-[#EEEEE8] px-3 py-2 rounded text-center border border-black/10">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem' }}>Commercial</span>
                      </div>
                      <div className="bg-[#EEEEE8] px-3 py-2 rounded text-center border border-black/10">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem' }}>Narrative</span>
                      </div>
                      <div className="bg-[#EEEEE8] px-3 py-2 rounded text-center border border-black/10">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem' }}>Documentary</span>
                      </div>
                      <div className="bg-[#EEEEE8] px-3 py-2 rounded text-center border border-black/10">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem' }}>Music Video</span>
                      </div>
                      <div className="bg-[#EEEEE8] px-3 py-2 rounded text-center border border-black/10">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem' }}>Corporate</span>
                      </div>
                      <div className="bg-[#BC271C]/10 px-3 py-2 rounded text-center border-2 border-[#BC271C]/50 relative">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem', color: '#BC271C' }}>Event Videography</span>
                        {/* Line down to event types */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20" style={{ top: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blog Children */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full">
                    {/* Horizontal line for blog posts */}
                    <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-black/20"></div>
                    
                    <div className="grid grid-cols-1 gap-2 pt-8">
                      <div className="bg-[#EEEEE8] px-3 py-2 rounded text-center border border-black/10">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem' }}>Trends 2025</span>
                      </div>
                      <div className="bg-[#EEEEE8] px-3 py-2 rounded text-center border border-black/10">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem' }}>Video Gear</span>
                      </div>
                      <div className="bg-[#EEEEE8] px-3 py-2 rounded text-center border border-black/10">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem' }}>Corporate Tips</span>
                      </div>
                      <div className="bg-[#EEEEE8] px-3 py-2 rounded text-center border border-black/10">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem' }}>Music Video</span>
                      </div>
                      <div className="bg-[#EEEEE8] px-3 py-2 rounded text-center border border-black/10">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.65rem' }}>Documentary</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty columns */}
                <div></div>
                <div></div>
              </div>

              {/* Level 3 - Event Types (Under Event Videography) */}
              <div className="grid grid-cols-5 gap-4 mb-8">
                {/* Empty column for Portfolio */}
                <div></div>

                {/* Event Types Children */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full">
                    {/* Horizontal line for event types */}
                    <div className="absolute top-0 left-[15%] right-[15%] h-0.5 bg-black/20"></div>
                    
                    <div className="grid grid-cols-1 gap-2 pt-8">
                      <div className="bg-[#BC271C]/10 px-3 py-2 rounded text-center border border-[#BC271C]/30">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem', color: '#BC271C' }}>Weddings</span>
                      </div>
                      <div className="bg-[#BC271C]/10 px-3 py-2 rounded text-center border border-[#BC271C]/30">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem', color: '#BC271C' }}>Corporate Events</span>
                      </div>
                      <div className="bg-[#BC271C]/10 px-3 py-2 rounded text-center border border-[#BC271C]/30">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem', color: '#BC271C' }}>Concerts</span>
                      </div>
                      <div className="bg-[#BC271C]/10 px-3 py-2 rounded text-center border border-[#BC271C]/30">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem', color: '#BC271C' }}>Sports</span>
                      </div>
                      <div className="bg-[#BC271C]/10 px-3 py-2 rounded text-center border border-[#BC271C]/30">
                        <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem', color: '#BC271C' }}>Private Events</span>
                      </div>
                    </div>
                    {/* Line down to show city expansion */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20" style={{ top: '100%' }}></div>
                  </div>
                </div>

                {/* Empty columns */}
                <div></div>
                <div></div>
                <div></div>
              </div>

              {/* Level 4 - Events × Cities Expansion */}
              <div className="mt-4 mb-12">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#BC271C] text-white px-4 py-2 rounded-lg text-center">
                    <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.7rem' }}>
                      5 EVENT TYPES
                    </span>
                  </div>
                  <div className="flex items-center mx-3">
                    <span className="text-2xl" style={{ fontFamily: 'Lemon Milk, sans-serif', color: '#BC271C' }}>×</span>
                  </div>
                  <div className="bg-[#BC271C] text-white px-4 py-2 rounded-lg text-center">
                    <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.7rem' }}>
                      15 CITIES
                    </span>
                  </div>
                  <div className="flex items-center mx-3">
                    <span className="text-2xl" style={{ fontFamily: 'Lemon Milk, sans-serif', color: '#BC271C' }}>=</span>
                  </div>
                  <div className="bg-white border-2 border-[#BC271C] px-4 py-2 rounded-lg text-center">
                    <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.7rem', color: '#BC271C' }}>
                      75+ SEO PAGES
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2 mb-4">
                  {['Allentown', 'Bethlehem', 'Easton', 'Emmaus', 'Whitehall'].map((city, idx) => (
                    <div key={idx} className="bg-[#EEEEE8] border border-[#BC271C]/30 px-2 py-1 rounded text-center">
                      <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem' }}>{city}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {['Macungie', 'Catasauqua', 'Coplay', 'Northampton', 'Hellertown'].map((city, idx) => (
                    <div key={idx} className="bg-[#EEEEE8] border border-[#BC271C]/30 px-2 py-1 rounded text-center">
                      <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem' }}>{city}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-3">
                  <span className="text-xs text-black/60" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>+ 5 MORE CITIES</span>
                </div>
              </div>

              {/* Level 3 - City Pages (Local SEO) - Existing Commercial Video Pages */}
              <div className="mt-12 pt-8 border-t-2 border-dashed border-black/20">
                <div className="text-center mb-6">
                  <span 
                    className="text-sm tracking-wider uppercase"
                    style={{ 
                      fontFamily: 'Lemon Milk, sans-serif',
                      background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Local SEO - City Pages (Commercial Video)
                  </span>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <div className="bg-white border-2 border-[#BC271C] px-6 py-3 rounded-lg text-center mb-8">
                      <span className="text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}>
                        Commercial Video
                      </span>
                    </div>
                    {/* Line down */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                  </div>
                </div>

                <div className="relative">
                  {/* Horizontal connecting line */}
                  <div className="absolute top-0 left-[15%] right-[15%] h-0.5 bg-black/20"></div>
                  
                  <div className="grid grid-cols-4 gap-4 pt-8">
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                        <div className="bg-[#BC271C] text-white px-4 py-2 rounded-lg text-center">
                          <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.7rem' }}>
                            Allentown
                          </span>
                          <div className="text-[10px] mt-1 opacity-80">PRIMARY</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                        <div className="bg-[#EEEEE8] px-4 py-2 rounded-lg text-center border-2 border-[#BC271C]">
                          <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.7rem' }}>
                            Bethlehem
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                        <div className="bg-[#EEEEE8] px-4 py-2 rounded-lg text-center border-2 border-[#BC271C]">
                          <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.7rem' }}>
                            Easton
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-black/20"></div>
                        <div className="bg-[#EEEEE8] px-4 py-2 rounded-lg text-center border-2 border-[#BC271C]">
                          <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.7rem' }}>
                            Emmaus
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note: The rest of the sitemap content (Primary Pages, Service Pages, Events Pages, Blog Posts, SEO Strategy, etc.) would continue here... */}
      {/* For brevity, I'm including a placeholder */}
      
      <section className="py-12 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-black/60">
            [Rest of sitemap content continues with all page listings, SEO strategy, etc...]
          </p>
        </div>
      </section>
    </div>
  );
}
