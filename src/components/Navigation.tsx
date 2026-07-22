import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';
  
  // Outer pages with light backgrounds need dark text even when scrollY = 0
  const isDarkText = isScrolled || !isHomePage;

  const navLinks = [
    { label: 'Services', href: isHomePage ? '#services' : '/#services' },
    { label: 'Fleet', href: isHomePage ? '#fleet' : '/#fleet' },
    { label: 'Empty Legs', href: isHomePage ? '#empty-legs' : '/#empty-legs' },
    { label: 'Charter Estimate', href: '/charterestimates' },
    { label: 'Beyond', href: '/beyond' },
    { label: 'Jet Card', href: isHomePage ? '#jet-card' : '/#jet-card' },
    { label: 'Network', href: isHomePage ? '#network' : '/#network' },
    { label: 'Careers', href: isHomePage ? '#careers' : '/#careers' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        isDarkText
          ? 'bg-sarvene-cream/95 backdrop-blur-md shadow-sm border-b border-sarvene-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          
          {/* Responsive Typography Logo Lockup */}
          <a href="/" className="flex-shrink-0 flex flex-col items-center group">
            <span 
              style={{ fontFamily: "'Cormorant Garamond', serif" }} 
              className={`text-lg sm:text-xl lg:text-2xl font-normal tracking-[0.25em] uppercase transition-colors ${
                isDarkText ? 'text-sarvene-obsidian' : 'text-white'
              }`}
            >
              SARVENE
            </span>
            
            {/* Gold Flanked Line Lockup */}
            <div className="flex items-center gap-2 w-full justify-center -mt-0.5">
              <span className="h-[1px] w-3 sm:w-5 bg-[#C5A059]" />
              <span 
                style={{ fontFamily: "'Montserrat', sans-serif" }} 
                className={`text-[8px] sm:text-[9px] font-medium tracking-[0.35em] uppercase transition-colors ${
                  isDarkText ? 'text-sarvene-obsidian/80' : 'text-white/80'
                }`}
              >
                JETS
              </span>
              <span className="h-[1px] w-3 sm:w-5 bg-[#C5A059]" />
            </div>
          </a>

          {/* Center Nav - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-[11px] font-medium tracking-[0.15em] uppercase transition-colors ${
                  isDarkText
                    ? 'text-sarvene-black/70 hover:text-sarvene-obsidian'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              className={`hidden lg:inline-flex font-sans text-[11px] font-medium tracking-[0.15em] uppercase px-5 py-2.5 transition-colors ${
                isDarkText
                  ? 'bg-sarvene-obsidian text-sarvene-cream hover:bg-sarvene-matte'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Request Charter
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isDarkText ? 'text-sarvene-obsidian' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 z-40 bg-sarvene-cream shadow-lg py-6 px-6 border-b border-sarvene-black/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-sans text-[11px] tracking-[0.15em] uppercase text-sarvene-black/70 hover:text-sarvene-obsidian py-3 border-b border-sarvene-black/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 font-sans text-[11px] tracking-[0.15em] uppercase bg-sarvene-obsidian text-sarvene-cream text-center py-3"
            >
              Request Charter
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;