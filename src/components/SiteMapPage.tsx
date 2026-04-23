import { Home, Camera, BookOpen, User, Mail, Sparkles } from 'lucide-react';

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
            How Our Website Works
          </h1>
          <p className="text-black/80 max-w-3xl text-xl leading-relaxed mb-12">
            Think of our website like a tree 🌳 — it starts at HOME, then branches out to different pages. 
            <span className="block mt-4">
              Each page helps people in Pennsylvania find us on Google when they search for video help!
            </span>
          </p>

          {/* Actual Site Tree Diagram */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl border-2 border-[#BC271C]/20 shadow-lg">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* HOME - Root */}
                <div className="flex justify-center mb-4">
                  <div className="bg-[#BC271C] text-white px-6 py-3 rounded-lg shadow-md relative">
                    <span style={{ fontFamily: 'Lemon Milk, sans-serif' }}>HOME</span>
                    {/* Vertical line down */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-6 bg-black/30" style={{ top: '100%' }}></div>
                  </div>
                </div>

                {/* Level 1 - Main Pages */}
                <div className="relative mb-4">
                  {/* Horizontal connecting line */}
                  <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-black/20"></div>
                  
                  <div className="grid grid-cols-5 gap-3 pt-6">
                    {/* Portfolio */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-black/20"></div>
                        <div className="bg-[#EEEEE8] border border-[#BC271C]/30 px-3 py-2 rounded-lg text-center">
                          <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>Portfolio</span>
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-black/20"></div>
                        <div className="bg-[#BC271C]/10 border-2 border-[#BC271C] px-3 py-2 rounded-lg text-center">
                          <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif', color: '#BC271C' }}>Services</span>
                        </div>
                        {/* Line down */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-black/20"></div>
                      </div>
                    </div>

                    {/* Blog */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-black/20"></div>
                        <div className="bg-[#EEEEE8] border border-[#BC271C]/30 px-3 py-2 rounded-lg text-center">
                          <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>Blog (5)</span>
                        </div>
                      </div>
                    </div>

                    {/* About */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-black/20"></div>
                        <div className="bg-[#EEEEE8] border border-[#BC271C]/30 px-3 py-2 rounded-lg text-center">
                          <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>About</span>
                        </div>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-black/20"></div>
                        <div className="bg-[#EEEEE8] border border-[#BC271C]/30 px-3 py-2 rounded-lg text-center">
                          <span className="text-xs" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>Contact</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Level 2 - Services Breakdown */}
                <div className="grid grid-cols-5 gap-3 mb-4">
                  <div></div>
                  
                  {/* Services children */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-full">
                      <div className="absolute top-0 left-[15%] right-[15%] h-0.5 bg-black/20"></div>
                      
                      <div className="grid grid-cols-1 gap-1.5 pt-6">
                        <div className="bg-white border border-black/10 px-2 py-1 rounded text-center">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem' }}>Commercial</span>
                        </div>
                        <div className="bg-white border border-black/10 px-2 py-1 rounded text-center">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem' }}>Narrative</span>
                        </div>
                        <div className="bg-white border border-black/10 px-2 py-1 rounded text-center">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem' }}>Documentary</span>
                        </div>
                        <div className="bg-white border border-black/10 px-2 py-1 rounded text-center">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem' }}>Music Video</span>
                        </div>
                        <div className="bg-white border border-black/10 px-2 py-1 rounded text-center">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem' }}>Corporate</span>
                        </div>
                        <div className="bg-[#BC271C]/10 border-2 border-[#BC271C]/50 px-2 py-1 rounded text-center relative">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.6rem', color: '#BC271C' }}>Events ⭐</span>
                          {/* Line down */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-black/20"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                {/* Level 3 - Event Types */}
                <div className="grid grid-cols-5 gap-3 mb-4">
                  <div></div>
                  
                  <div className="flex flex-col items-center">
                    <div className="relative w-full">
                      <div className="absolute top-0 left-[20%] right-[20%] h-0.5 bg-black/20"></div>
                      
                      <div className="grid grid-cols-1 gap-1.5 pt-6">
                        <div className="bg-[#BC271C]/10 border border-[#BC271C]/30 px-2 py-1 rounded text-center">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.55rem', color: '#BC271C' }}>Weddings</span>
                        </div>
                        <div className="bg-[#BC271C]/10 border border-[#BC271C]/30 px-2 py-1 rounded text-center">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.55rem', color: '#BC271C' }}>Corporate Events</span>
                        </div>
                        <div className="bg-[#BC271C]/10 border border-[#BC271C]/30 px-2 py-1 rounded text-center">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.55rem', color: '#BC271C' }}>Concerts</span>
                        </div>
                        <div className="bg-[#BC271C]/10 border border-[#BC271C]/30 px-2 py-1 rounded text-center">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.55rem', color: '#BC271C' }}>Sports</span>
                        </div>
                        <div className="bg-[#BC271C]/10 border border-[#BC271C]/30 px-2 py-1 rounded text-center">
                          <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.55rem', color: '#BC271C' }}>Private Events</span>
                        </div>
                      </div>
                      {/* Arrow down to cities */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-black/20"></div>
                    </div>
                  </div>

                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                {/* Level 4 - Cities multiplier */}
                <div className="flex justify-center pt-6">
                  <div className="bg-[#BC271C] text-white px-4 py-2 rounded-lg">
                    <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.7rem' }}>× 15 Cities = 75 Pages!</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-black/60">
              This tree shows how HOME branches into pages, and how Events multiply into 75+ pages!
            </div>
          </div>
        </div>
      </section>

      {/* Simple Stats - Explained Like a Game */}
      <section className="py-12 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white p-8 rounded-2xl border-2 border-[#BC271C]/20 mb-8">
            <h2 
              className="mb-6 text-center"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: '1.75rem',
                background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Our Website Numbers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#EEEEE8] p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#BC271C] text-white w-16 h-16 rounded-full flex items-center justify-center">
                    <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}>100+</span>
                  </div>
                  <div>
                    <p className="text-xl" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>Pages</p>
                    <p className="text-black/60 text-sm">That's like 100 different doors people can walk through!</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#EEEEE8] p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#BC271C] text-white w-16 h-16 rounded-full flex items-center justify-center">
                    <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}>15</span>
                  </div>
                  <div>
                    <p className="text-xl" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>Cities</p>
                    <p className="text-black/60 text-sm">We help people in 15 different Pennsylvania cities!</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#EEEEE8] p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#BC271C] text-white w-16 h-16 rounded-full flex items-center justify-center">
                    <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}>75+</span>
                  </div>
                  <div>
                    <p className="text-xl" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>Event Pages</p>
                    <p className="text-black/60 text-sm">Special pages for weddings, concerts, and more!</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#EEEEE8] p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#BC271C] text-white w-16 h-16 rounded-full flex items-center justify-center">
                    <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}>5</span>
                  </div>
                  <div>
                    <p className="text-xl" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>Blog Posts</p>
                    <p className="text-black/60 text-sm">Stories that teach people about video making!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Magic Trick - SEO Explained Simply */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Sparkles size={48} style={{ color: '#BC271C' }} className="inline-block mb-4" />
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: '2rem',
                background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              The Magic Trick 🎩✨
            </h2>
            <p className="text-xl text-black/80 leading-relaxed">
              When someone types "wedding video Allentown" into Google, 
              our website pops up because we made a special page just for that!
            </p>
          </div>

          <div className="bg-[#BC271C]/10 p-8 rounded-2xl border-2 border-[#BC271C]/30">
            <div className="text-center mb-6">
              <p className="text-lg mb-4">
                We do this cool math trick:
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-[#BC271C] text-white px-6 py-3 rounded-lg">
                  <span style={{ fontFamily: 'Lemon Milk, sans-serif' }}>5 Events</span>
                </div>
                <span className="text-3xl" style={{ fontFamily: 'Lemon Milk, sans-serif', color: '#BC271C' }}>×</span>
                <div className="bg-[#BC271C] text-white px-6 py-3 rounded-lg">
                  <span style={{ fontFamily: 'Lemon Milk, sans-serif' }}>15 Cities</span>
                </div>
                <span className="text-3xl" style={{ fontFamily: 'Lemon Milk, sans-serif', color: '#BC271C' }}>=</span>
                <div className="bg-white px-6 py-3 rounded-lg border-2 border-[#BC271C]">
                  <span style={{ fontFamily: 'Lemon Milk, sans-serif', color: '#BC271C' }}>75 Pages!</span>
                </div>
              </div>
              <p className="text-black/70 mt-6 text-lg">
                That means we can help 75 different groups of people find us! 
                Someone looking for a wedding video in Bethlehem gets their own special page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Tree - Super Simple */}
      <section className="py-16 px-6 lg:px-12 bg-[#EEEEE8]">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="mb-12 text-center"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: '2rem',
              background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Website Tree 🌳
          </h2>

          {/* The Tree */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl border-2 border-[#BC271C]/20">
            
            {/* HOME - The Trunk */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="bg-[#BC271C] text-white px-8 py-4 rounded-xl shadow-lg">
                  <Home size={24} className="inline-block mr-2" />
                  <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.25rem' }}>
                    HOME
                  </span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-1 h-12 bg-[#BC271C]/30" style={{ top: '100%' }}></div>
              </div>
            </div>

            <p className="text-center text-black/60 mb-12">
              Everything starts here! This is the first page people see.
            </p>

            {/* Main Branches */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              
              {/* Portfolio */}
              <div className="bg-[#EEEEE8] p-4 rounded-lg border-2 border-[#BC271C]/30 text-center">
                <Camera size={32} className="mx-auto mb-2" style={{ color: '#BC271C' }} />
                <p style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.9rem' }}>Portfolio</p>
                <p className="text-xs text-black/60 mt-2">Our cool videos!</p>
              </div>

              {/* Services */}
              <div className="bg-[#BC271C]/10 p-4 rounded-lg border-2 border-[#BC271C] text-center">
                <div className="bg-[#BC271C] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span style={{ fontFamily: 'Lemon Milk, sans-serif' }}>6</span>
                </div>
                <p style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.9rem', color: '#BC271C' }}>Services</p>
                <p className="text-xs text-black/60 mt-2">6 types of videos we make!</p>
              </div>

              {/* Blog */}
              <div className="bg-[#EEEEE8] p-4 rounded-lg border-2 border-[#BC271C]/30 text-center">
                <BookOpen size={32} className="mx-auto mb-2" style={{ color: '#BC271C' }} />
                <p style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.9rem' }}>Blog</p>
                <p className="text-xs text-black/60 mt-2">5 helpful stories</p>
              </div>

              {/* About */}
              <div className="bg-[#EEEEE8] p-4 rounded-lg border-2 border-[#BC271C]/30 text-center">
                <User size={32} className="mx-auto mb-2" style={{ color: '#BC271C' }} />
                <p style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.9rem' }}>About</p>
                <p className="text-xs text-black/60 mt-2">Who we are!</p>
              </div>

              {/* Contact */}
              <div className="bg-[#EEEEE8] p-4 rounded-lg border-2 border-[#BC271C]/30 text-center">
                <Mail size={32} className="mx-auto mb-2" style={{ color: '#BC271C' }} />
                <p style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.9rem' }}>Contact</p>
                <p className="text-xs text-black/60 mt-2">Say hello!</p>
              </div>
            </div>

            {/* Services Breakdown */}
            <div className="mt-8 pt-8 border-t-2 border-[#BC271C]/20">
              <p className="text-center mb-6" style={{ fontFamily: 'Lemon Milk, sans-serif', color: '#BC271C' }}>
                The 6 Types of Videos We Make:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                <div className="bg-white p-3 rounded-lg border border-black/10 text-center">
                  <p className="text-sm">Commercial</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-black/10 text-center">
                  <p className="text-sm">Narrative</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-black/10 text-center">
                  <p className="text-sm">Documentary</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-black/10 text-center">
                  <p className="text-sm">Music Video</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-black/10 text-center">
                  <p className="text-sm">Corporate</p>
                </div>
                <div className="bg-[#BC271C]/10 p-3 rounded-lg border-2 border-[#BC271C] text-center">
                  <p className="text-sm" style={{ color: '#BC271C' }}>⭐ Event Videos</p>
                </div>
              </div>

              <div className="bg-[#BC271C]/5 p-6 rounded-xl">
                <p className="text-center mb-4" style={{ fontFamily: 'Lemon Milk, sans-serif', color: '#BC271C' }}>
                  Event Videos Are Special! ⭐
                </p>
                <p className="text-center text-sm text-black/70 mb-4">
                  We make event videos for 5 different types of parties:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
                  <div className="bg-white p-2 rounded text-center text-sm">Weddings 💒</div>
                  <div className="bg-white p-2 rounded text-center text-sm">Corporate 💼</div>
                  <div className="bg-white p-2 rounded text-center text-sm">Concerts 🎸</div>
                  <div className="bg-white p-2 rounded text-center text-sm">Sports ⚽</div>
                  <div className="bg-white p-2 rounded text-center text-sm">Private 🎉</div>
                </div>
                <p className="text-center text-sm text-black/70">
                  And we do each one in 15 different cities = 75 pages to help people find us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps - Simple Explanation */}
      <section className="py-12 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 
            className="mb-8 text-center"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: '2rem',
              background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Why This Helps Us 🎯
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-[#BC271C]/20">
              <div className="flex gap-4">
                <div className="bg-[#BC271C] text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}>1</span>
                </div>
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>People Find Us on Google</h3>
                  <p className="text-black/70">
                    When someone searches "wedding video Allentown" — BOOM! 💥 Our page shows up because we made a page just about that!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-[#BC271C]/20">
              <div className="flex gap-4">
                <div className="bg-[#BC271C] text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}>2</span>
                </div>
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>We Help 15 Cities</h3>
                  <p className="text-black/70">
                    We have pages for Allentown, Bethlehem, Easton, and 12 more cities! Each city gets its own special pages.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-[#BC271C]/20">
              <div className="flex gap-4">
                <div className="bg-[#BC271C] text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <span style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}>3</span>
                </div>
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>More Pages = More Customers</h3>
                  <p className="text-black/70">
                    The more pages we have, the more ways people can find us. It's like having 100 different signs instead of just 1!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities We Cover - Visual */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 
            className="mb-8 text-center"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: '2rem',
              background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            The 15 Cities We Help 📍
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              'Allentown', 'Bethlehem', 'Easton', 'Emmaus', 'Whitehall',
              'Macungie', 'Catasauqua', 'Coplay', 'Northampton', 'Hellertown',
              'Salisbury', 'Fountain Hill', 'South Whitehall', 'Lower Macungie', 'Palmer Township'
            ].map((city, idx) => (
              <div 
                key={idx} 
                className={`p-4 rounded-lg text-center ${
                  idx === 0 ? 'bg-[#BC271C] text-white' : 'bg-[#EEEEE8] border border-[#BC271C]/30'
                }`}
              >
                <p style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.85rem' }}>
                  {city}
                </p>
                {idx === 0 && <p className="text-xs mt-1 opacity-80">Our Home!</p>}
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-black/70">
            All in Pennsylvania's Lehigh Valley! 🏔️
          </p>
        </div>
      </section>
    </div>
  );
}