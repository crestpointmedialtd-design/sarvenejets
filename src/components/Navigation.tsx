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

  const isHomePage = window.location.pathname === '/';

  const navLinks = [
    { label: 'Services', href: isHomePage ? '#services' : '/#services' },
    { label: 'Fleet', href: isHomePage ? '#fleet' : '/#fleet' },
    { label: 'Empty Legs', href: isHomePage ? '#empty-legs' : '/#empty-legs' },
    { label: 'Jet Card', href: isHomePage ? '#jet-card' : '/#jet-card' },
    { label: 'Network', href: isHomePage ? '#network' : '/#network' },
    { label: 'Careers', href: isHomePage ? '#careers' : '/#careers' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-sarvene-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
        <div className="flex items-center justify-between">
          {/* Logo — always links back to home */}
          <a href="/" className="flex-shrink-0">
            <img
              src={isScrolled ? '/logo-light.png' : '/logo-light.png'}
              alt="Sarvene Jets"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Center Nav - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-[11px] font-medium tracking-[0.15em] uppercase transition-colors ${
                  isScrolled
                    ? 'text-sarvene-black/60 hover:text-sarvene-obsidian'
                    : 'text-white/70 hover:text-white'
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
                isScrolled
                  ? 'bg-sarvene-obsidian text-sarvene-cream hover:bg-sarvene-matte'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Request Charter
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? 'text-sarvene-obsidian' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-sarvene-cream shadow-lg py-6 px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-sans text-[11px] tracking-[0.15em] uppercase text-sarvene-black/60 hover:text-sarvene-obsidian py-3 border-b border-sarvene-black/5"
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
