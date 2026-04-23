import { ArrowRight, Mail, Phone } from 'lucide-react';

export function LetsCollaborateSection() {
  return (
    <section 
      className="py-32 px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 
                className="tracking-tight"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1',
                  fontWeight: '700'
                }}
              >
                Let's Collaborate
              </h2>
              
              <p className="text-black text-lg md:text-xl leading-relaxed max-w-xl">
                Ready to bring your vision to life? Whether it's a{' '}
                <span 
                  style={{ 
                    fontFamily: 'Lemon Milk, sans-serif',
                    background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  brand film, commercial campaign, or music visual
                </span>
                , Nick Asenjo Films is here to craft cinematic experiences that move audiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'contact';
                }}
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #8B1A14 100%)',
                  boxShadow: '0 4px 20px rgba(188, 39, 28, 0.3)'
                }}
              >
                <span 
                  className="tracking-wider text-sm"
                  style={{ 
                    fontFamily: 'Lemon Milk, sans-serif',
                    color: 'white'
                  }}
                >
                  START YOUR PROJECT
                </span>
                <ArrowRight 
                  size={18} 
                  className="text-white transition-transform group-hover:translate-x-1" 
                />
              </a>

              <a
                href="tel:+16105551234"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-lg border-2 border-black/20 hover:border-black/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-white/50 backdrop-blur-sm"
              >
                <Phone size={18} className="text-black" />
                <span 
                  className="tracking-wider text-sm text-black"
                  style={{ 
                    fontFamily: 'Lemon Milk, sans-serif'
                  }}
                >
                  CALL US
                </span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a 
                href="mailto:hello@nickasenjofilms.com"
                className="flex items-center gap-2 text-black/70 hover:text-black transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">hello@nickasenjofilms.com</span>
              </a>
              
              <a 
                href="tel:+16105551234"
                className="flex items-center gap-2 text-black/70 hover:text-black transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">(610) 555-1234</span>
              </a>
            </div>
          </div>

          {/* Right Content - Stats/Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat Card 1 */}
            <div 
              className="p-8 rounded-2xl backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)'
              }}
            >
              <h3 
                className="mb-2"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                20+
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Years of industry experience
              </p>
            </div>

            {/* Stat Card 2 */}
            <div 
              className="p-8 rounded-2xl backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)'
              }}
            >
              <h3 
                className="mb-2"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                500+
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Projects delivered with excellence
              </p>
            </div>

            {/* Stat Card 3 */}
            <div 
              className="p-8 rounded-2xl backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)'
              }}
            >
              <h3
                className="text-5xl md:text-6xl mb-2 lemon-milk-font"
                style={{
                  background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                4K
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Ultra-high resolution production
              </p>
            </div>

            {/* Stat Card 4 */}
            <div 
              className="p-8 rounded-2xl backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)'
              }}
            >
              <h3
                className="text-5xl md:text-6xl mb-2 lemon-milk-font"
                style={{
                  background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                1,000+
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Client satisfaction rate
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div 
          className="mt-20 h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%)'
          }}
        />
      </div>
    </section>
  );
}