const Footer = () => {
  const year = new Date().getFullYear();
  const isHome = window.location.pathname === '/';
  const home = (anchor: string) => isHome ? anchor : `/${anchor}`;

  const links = {
    services: [
      { label: 'Private Charter', href: home('#contact') },
      { label: 'Aircraft Acquisition', href: 'mailto:operations@sarvenejets.com?subject=Aircraft%20Acquisition%20Enquiry&body=Hi%2C%20I%20am%20making%20an%20enquiry%20regarding%20aircraft%20acquisition%20services.' },
      { label: 'Aircraft Management', href: 'mailto:operations@sarvenejets.com?subject=Aircraft%20Management%20Enquiry&body=Hi%2C%20I%20am%20making%20an%20enquiry%20regarding%20aircraft%20management%20services.' },
      { label: 'Jet Card', href: home('#jet-card') },
      { label: 'Empty Legs', href: home('#empty-legs') },
    ],
    fleet: [
      { label: 'Light Jets', href: home('#fleet') },
      { label: 'Midsize Jets', href: home('#fleet') },
      { label: 'Heavy Jets', href: home('#fleet') },
      { label: 'Ultra Long Range', href: home('#fleet') },
      { label: 'VIP Airliners', href: home('#fleet') },
    ],
    company: [
      { label: 'About', href: home('#services') },
      { label: 'Network', href: home('#network') },
      { label: 'Popular Routes', href: '/routes' },
      { label: 'Insights', href: '/insights' },
      { label: 'Careers', href: home('#careers') },
      { label: 'Contact', href: home('#contact') },
    ],
  };

  return (
    <footer className="bg-sarvene-matte border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-5 gap-16 mb-16">
          <div className="lg:col-span-2">
            <a href="/">
              <span className="font-serif text-lg tracking-[0.15em] text-white block mb-5">SARVENE JETS</span>
            </a>
            <p className="font-sans text-xs text-white/40 leading-relaxed max-w-sm mb-6">
              Private aviation across Africa and beyond. Charter flights, jet cards and empty legs — handled from one place, with the same standard on every route.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="font-sans text-[10px] tracking-wider text-white/30">All Systems Operational</span>
            </div>
          </div>
          {([
            { title: 'Services', items: links.services },
            { title: 'Fleet', items: links.fleet },
            { title: 'Company', items: links.company },
          ]).map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50 mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[10px] tracking-wider text-white/25">
            &copy; {year} Sarvene Jets. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="https://instagram.com/sarvenejets" target="_blank" rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-wider text-white/30 hover:text-white/60 transition-colors uppercase">
              Instagram
            </a>
            <span className="text-white/15">·</span>
            <a href="https://x.com/sarvenejets" target="_blank" rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-wider text-white/30 hover:text-white/60 transition-colors uppercase">
              X / Twitter
            </a>
            <span className="text-white/15">·</span>
            <a href="https://www.tiktok.com/@sarvenejets" target="_blank" rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-wider text-white/30 hover:text-white/60 transition-colors uppercase">
              TikTok
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="font-sans text-[10px] tracking-wider text-white/25 hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="font-sans text-[10px] tracking-wider text-white/25 hover:text-white/50 transition-colors">Terms of Service</a>
            <a href="/cookie-policy" className="font-sans text-[10px] tracking-wider text-white/25 hover:text-white/50 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
