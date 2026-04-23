import { Facebook, Instagram, Linkedin, Youtube, Twitter, MapPin } from 'lucide-react';

export function Footer() {
  const cities = [
    { name: 'Allentown', slug: 'allentown' },
    { name: 'Bethlehem', slug: 'bethlehem' },
    { name: 'Easton', slug: 'easton' },
    { name: 'Emmaus', slug: 'emmaus' },
    { name: 'Whitehall', slug: 'whitehall' }
  ];

  return (
    <footer 
      className="text-white py-16 px-6 lg:px-12 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2d2d2d 50%, #404040 75%, #666666 100%)',
      }}
    >
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.03) 10px,
              rgba(255, 255, 255, 0.03) 20px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.03) 10px,
              rgba(255, 255, 255, 0.03) 20px
            ),
            radial-gradient(circle at 20% 50%, rgba(188, 39, 28, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(188, 39, 28, 0.08) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%'
        }}
      />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Description */}
          <div className="lg:col-span-1">
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
              }}
            >
              <span 
                style={{
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700'
                }}
              >
                Nick Asenjo Films
              </span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              A premiere video production company creating cinematic stories for brands that dare to stand out.
            </p>
            <p className="text-white/40 text-sm mt-6">
              © Nick Asenjo Films {new Date().getFullYear()}
            </p>
          </div>

          {/* Contact & General Inquiries */}
          <div>
            <h3 
              className="mb-4 tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif', 
                fontSize: '0.875rem',
                background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700'
              }}
            >
              Contact
            </h3>
            <div className="space-y-2 text-white/60 text-sm mb-6">
              <a 
                href="mailto:nick@nickasenjofilms.com"
                className="block hover:text-[#BC271C] transition-colors"
              >
                nick@nickasenjofilms.com
              </a>
              <a 
                href="tel:+16108448696"
                className="block hover:text-[#BC271C] transition-colors"
              >
                (610) 844-8696
              </a>
            </div>
            
            <h3 
              className="mb-4 tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif', 
                fontSize: '0.875rem',
                background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700'
              }}
            >
              General Inquiries
            </h3>
            <div className="mt-4">
              <a 
                href="#contact"
                className="inline-block bg-[#BC271C] text-white px-6 py-3 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase text-sm"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontWeight: '700' }}
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Areas We Serve */}
          <div>
            <h3 
              className="mb-4 tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif', 
                fontSize: '0.875rem',
                background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700'
              }}
            >
              Areas We Serve
            </h3>
            <div className="space-y-2 text-white/60 text-sm">
              <a 
                href="#allentown-video-production"
                className="block hover:text-[#BC271C] transition-colors"
              >
                Allentown
              </a>
              <a 
                href="#bethlehem-video-production"
                className="block hover:text-[#BC271C] transition-colors"
              >
                Bethlehem
              </a>
              <a 
                href="#easton-video-production"
                className="block hover:text-[#BC271C] transition-colors"
              >
                Easton
              </a>
              <a 
                href="#emmaus-video-production"
                className="block hover:text-[#BC271C] transition-colors"
              >
                Emmaus
              </a>
              <a 
                href="#whitehall-video-production"
                className="block hover:text-[#BC271C] transition-colors"
              >
                Whitehall
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 
              className="mb-4 tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif', 
                fontSize: '0.875rem',
                background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700'
              }}
            >
              Follow Us
            </h3>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/nickasenjo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#BC271C] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/nickasenjofilms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#BC271C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/nick-asenjo-b93296b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#BC271C] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.youtube.com/@yothatstheplatform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#BC271C] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Owner Dashboard Link */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex justify-end">
            <a 
              href="#sitemap"
              className="text-xs text-white/30 hover:text-[#BC271C] transition-colors"
              style={{ fontFamily: 'Lemon Milk, sans-serif' }}
            >
              OWNER DASHBOARD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}