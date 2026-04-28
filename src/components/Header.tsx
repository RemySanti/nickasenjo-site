import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import logo from 'figma:asset/638b1040e0fb8997b710e8b3c9a8e3f38ee499b5.png';

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = 'home' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 2800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(logoTimer);
    };
  }, []);

  const gradientStyle = {
    fontFamily: 'Lemon Milk, sans-serif',
    fontSize: '1rem',
    background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  } as React.CSSProperties;

  const mobileGradientStyle = {
    ...gradientStyle,
    fontSize: '1.5rem'
  } as React.CSSProperties;

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: '#EEEEE8',
          borderBottom: scrolled ? '1px solid rgba(222, 222, 212, 0.3)' : 'none'
        }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between h-20">
            <div className="flex items-center gap-8 flex-1">
              <a href="#work-page" className="hover:opacity-70 transition-opacity tracking-widest uppercase" style={gradientStyle}>Portfolio</a>
              <a href="#services" className="hover:opacity-70 transition-opacity tracking-widest uppercase" style={gradientStyle}>Services</a>
              <a href="#the-platform" className="hover:opacity-70 transition-opacity tracking-widest uppercase" style={gradientStyle}>The Platform</a>
            </div>

            <div className="flex-shrink-0">
              <a href="#home" onClick={() => window.location.hash = ''}>
                <img
                  src={logo}
                  alt="Nick Asenjo Films"
                  className="h-[57.6px] w-auto transition-opacity duration-300"
                  style={{ opacity: showLogo ? 1 : 0 }}
                />
              </a>
            </div>

            <div className="flex items-center justify-end gap-8 flex-1">
              <a href="#about" className="hover:opacity-70 transition-opacity tracking-widest uppercase" style={gradientStyle}>About</a>
              <a href="#contact" className="hover:opacity-70 transition-opacity tracking-widest uppercase" style={gradientStyle}>Contact</a>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center rounded-full hover:bg-black/5 transition-colors px-4 py-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-black" />
              ) : (
                <span className="tracking-widest uppercase" style={{ ...gradientStyle, fontSize: '0.875rem' }}>Menu</span>
              )}
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="#home" onClick={() => window.location.hash = ''}>
                <img
                  src={logo}
                  alt="Nick Asenjo Films"
                  className="h-12 w-auto transition-opacity duration-300"
                  style={{ opacity: showLogo ? 1 : 0 }}
                />
              </a>
            </div>

            <a
              href="tel:+16108448696"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
              aria-label="Call us"
            >
              <Phone 
                size={22} 
                style={{ stroke: 'url(#phoneGradient)' }}
              />
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#BC271C" />
                    <stop offset="70%" stopColor="#BC271C" />
                    <stop offset="100%" stopColor="#000000" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#EEEEE8]">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            <a href="#work-page" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity tracking-widest uppercase" style={mobileGradientStyle}>Portfolio</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity tracking-widest uppercase" style={mobileGradientStyle}>Services</a>
            <a href="#the-platform" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity tracking-widest uppercase" style={mobileGradientStyle}>The Platform</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity tracking-widest uppercase" style={mobileGradientStyle}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity tracking-widest uppercase" style={mobileGradientStyle}>Contact</a>

            <a
              href="tel:+16108448696"
              className="mt-8 px-8 py-4 rounded-full border-2 hover:bg-black/5 transition-colors"
              style={{ borderColor: '#BC271C' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span
                className="tracking-widest uppercase flex items-center gap-3"
                style={gradientStyle}
              >
                <Phone size={20} style={{ color: '#BC271C' }} />
                Call Us
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}