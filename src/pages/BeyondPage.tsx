import { useState, useEffect, useRef, useCallback } from 'react';

// ============================================
// FADE-IN-ON-SCROLL WRAPPER
// ============================================
function FadeInSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

// ============================================
// EMAIL GATE MODAL
// ============================================
const BEYOND_ACCESS_KEY = 'sarvene_beyond_access';

function EmailGate({ onGranted }: { onGranted: () => void }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      // Submit to API endpoint
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: 'Sarvene Beyond Access Request',
          form_name: 'beyond-access'
        })
      });

      localStorage.setItem(BEYOND_ACCESS_KEY, 'granted');
      onGranted();
    } catch {
      localStorage.setItem(BEYOND_ACCESS_KEY, 'granted');
      onGranted();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
      <div className="relative w-full max-w-lg bg-[#111111] rounded-2xl border border-white/20 p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/beyond-logo.png" 
              alt="SARVENE Beyond" 
              className="h-16 sm:h-20 w-auto object-contain mix-blend-lighten" 
            />
          </div>

          <p className="font-sans font-light text-sm text-gray-300 mb-8 tracking-wider">
            Access is by arrangement.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full bg-transparent border-b border-white/30 py-3 text-center font-sans font-light text-base text-white placeholder:text-gray-500 focus:border-white focus:outline-none transition-colors"
            />
            {error && <p className="font-sans text-xs text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border border-white/40 text-white py-3.5 font-sans text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all disabled:opacity-40"
            >
              {isSubmitting ? 'Verifying...' : 'Request Access'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ============================================
// FEATURED — FLAGSHIP VIDEO HERO
// ============================================
function Featured() {
  const whatsappUrl = `https://wa.me/2349020316094?text=${encodeURIComponent("Hello Sarvene, I am interested in applying for access to the Summer Gathering at Sea.")}`;

  return (
    <FadeInSection className="relative w-full h-[85vh] min-h-[560px] bg-black">
      <video
  className="absolute inset-0 w-full h-full object-cover opacity-80"
  autoPlay
  muted
  loop
  playsInline
  webkit-playsinline="true"
  preload="auto"
>
  <source src="/featured-yacht.mp4" type="video/mp4" />
  <source src="/featured-yacht.mov" type="video/quicktime" />
</video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="relative h-full flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-20">
        <p className="font-sans font-light text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">
          Flagship Moment
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-8" style={{ letterSpacing: '0.01em' }}>
          Summer Gathering at Sea
        </h2>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start border border-white/40 text-white px-8 py-4 font-sans text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all"
        >
          Applications Open →
        </a>
      </div>
    </FadeInSection>
  );
}

// ============================================
// ASSEMBLY CALENDAR
// ============================================
const calendarEntries = [
  { event: 'London Fashion Week (SS27)', dates: 'Sep 18–22, 2026' },
  { event: 'Monaco Yacht Show — Opening Day', dates: 'Sep 23–26, 2026' },
  { event: 'Paris Fashion Week Womenswear (SS27)', dates: 'Sep 28–Oct 6, 2026' },
  { event: 'Singapore GP (Marina Bay)', dates: 'Oct 09–11, 2026' },
  { event: 'US GP (Austin, COTA)', dates: 'Oct 23–25, 2026' },
  { event: 'Mexico City GP', dates: 'Oct 30–Nov 01, 2026' },
  { event: 'ART X Lagos Contemporary Curations', dates: 'Nov 04–08, 2026' },
  { event: 'São Paulo GP (Interlagos)', dates: 'Nov 06–08, 2026' },
  { event: 'Africa Fintech Summit (Kigali, Rwanda)', dates: 'Nov 18–20, 2026' },
  { event: 'Las Vegas GP (Strip Circuit)', dates: 'Nov 19–21, 2026' },
  { event: 'Diriyah Season & Heritage Assemblies', dates: 'November 2026' },
  { event: 'Art Basel Miami Beach', dates: 'Dec 04–06, 2026' },
  { event: 'Abu Dhabi GP (Yas Marina)', dates: 'Dec 04–06, 2026' },
  { event: 'The Winter Solstice Fleet (St. Barths & Anguilla)', dates: 'Dec 28, 2026 – Jan 04, 2027' },
];

function Calendar() {
  return (
    <FadeInSection className="px-8 md:px-16 py-24 md:py-32 bg-black">
      <p className="font-sans font-light text-xs tracking-[0.3em] uppercase text-gray-400 mb-2 text-center">
        Assembly Calendar
      </p>
      <h2 className="font-serif text-3xl md:text-5xl text-white mb-16 text-center" style={{ letterSpacing: '0.01em' }}>
        Dated International Ledger
      </h2>
      <div className="max-w-3xl mx-auto">
        {calendarEntries.map((entry, i) => (
          <div key={i} className="flex items-baseline justify-between py-4 border-b border-white/10">
            <span className="font-sans font-light text-base md:text-lg text-white/90">{entry.event}</span>
            <span className="font-sans font-light text-xs md:text-sm text-gray-400 whitespace-nowrap ml-6">{entry.dates}</span>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}

// ============================================
// CATEGORY DETAILS DATA FOR DRAWER
// ============================================
type CategoryKey = 'safari' | 'yacht' | 'f1';

const CATEGORY_DETAILS = {
  safari: {
    title: "African Safaris",
    subtitle: "Private lodge allocations across East, Southern, and Central African conservation corridors.",
    properties: [
      { location: "Rwanda", stays: "Singita Kwitonda Lodge · Wilderness Bisate Reserve (Volcanoes National Park)" },
      { location: "South Africa", stays: "Singita Ebony & Boulders (Sabi Sand Reserve)" },
      { location: "Tanzania", stays: "Mwiba Lodge (Southern Serengeti) · Singita Faru Faru" },
      { location: "Kenya", stays: "Angama Mara (Masai Mara)" }
    ],
    inclusions: [
      "Private mountain gorilla trekking permits & private escort team (Rwanda)",
      "Dedicated 4x4 game drive vehicles & master trackers",
      "Direct private airstrip transfers & complete lodge buyout options"
    ],
  },
  yacht: {
    title: "The Yacht Programme",
    subtitle: "Sovereign vessel allocation across Mediterranean & Caribbean waters.",
    properties: [
      { location: "Turks & Caicos", stays: "Amanyara & Private Fleet Anchorage" },
      { location: "Côte d'Azur", stays: "Hotel du Cap-Eden-Roc (Cannes / Monaco Berth)" },
      { location: "St. Barts", stays: "Cheval Blanc St-Barth Isle de France" }
    ],
    inclusions: [
      "On-board private chef & bespoke wine cellar provisioning",
      "Dedicated tender logistics & priority marina berth clearance",
      "Discreet vessel allocations during peak international dates"
    ],
  },
  f1: {
    title: "Championship Circuit (F1)",
    subtitle: "Paddock Club, trackside suites, and premier city stays arranged by race weekend.",
    properties: [
      { location: "Monaco GP", stays: "Hôtel de Paris Monte-Carlo · Port Hercule Trackside Superyacht" },
      { location: "Singapore GP", stays: "The Fullerton Hotel · Marina Bay Sands Suites" },
      { location: "Las Vegas GP", stays: "Encore at Wynn · Paddock Plaza Suites" },
      { location: "Abu Dhabi GP", stays: "W Abu Dhabi (Yas Island) · Trackside Berth" }
    ],
    inclusions: [
      "Paddock Club & Pit Lane access passes",
      "Helicopter circuit transfers where applicable",
      "Bespoke trackside hospitality and driver appearances"
    ],
  }
};

// ============================================
// CATEGORIES GRID & DETAIL DRAWER
// ============================================
function Categories() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeCategory]);

  const categories = [
    { key: 'safari' as CategoryKey, image: '/cat-safari.jpg', title: 'African Safaris', line: 'Private lodge allocations across East, Southern and Central corridors.' },
    { key: 'yacht' as CategoryKey, image: '/cat-yacht.jpg', title: 'The Yacht Programme', line: 'Sovereign vessel allocations across Mediterranean and Caribbean waters.' },
    { key: 'f1' as CategoryKey, image: '/cat-f1.jpg', title: 'Championship Circuit', line: 'Paddock Club and trackside suites arranged by race weekend.' },
  ];

  const currentDetail = activeCategory ? CATEGORY_DETAILS[activeCategory] : null;
  const whatsappUrl = currentDetail 
    ? `https://wa.me/2349020316094?text=${encodeURIComponent(`Hello Sarvene, I would like to request an arrangement for: ${currentDetail.title}`)}`
    : '';

  return (
    <FadeInSection className="px-8 md:px-16 py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans font-light text-xs tracking-[0.3em] uppercase text-gray-400 mb-2 text-center">
          Allocations
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-16 text-center" style={{ letterSpacing: '0.01em' }}>
          Curated Choice Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.key} 
              onClick={() => setActiveCategory(cat.key)}
              className="group cursor-pointer bg-[#111111] p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all"
            >
              <div className="relative h-80 overflow-hidden mb-6 rounded-lg">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-3">{cat.title}</h3>
              <p className="font-sans font-light text-sm text-gray-400 mb-6 leading-relaxed">{cat.line}</p>
              <button className="font-sans text-xs tracking-[0.25em] uppercase text-white/80 group-hover:text-white transition-colors flex items-center gap-2">
                View Destinations →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-Over Drawer */}
      {activeCategory && currentDetail && (
        <div className="fixed inset-0 z-50 flex justify-end h-[100dvh]">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveCategory(null)} />
          <div className="relative w-full max-w-xl bg-[#121212] border-l border-white/20 p-8 md:p-12 overflow-y-auto h-full overscroll-contain shadow-2xl flex flex-col justify-between">
            <div>
              <button 
                onClick={() => setActiveCategory(null)}
                className="text-gray-400 hover:text-white font-sans text-xs uppercase tracking-widest mb-8"
              >
                ✕ Close
              </button>

              <p className="font-sans font-light text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">
                Choice Properties & Stays
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{currentDetail.title}</h2>
              <p className="font-sans font-light text-base text-gray-300 leading-relaxed mb-8 border-b border-white/10 pb-6">
                {currentDetail.subtitle}
              </p>

              <div className="space-y-6 mb-8">
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400">Featured Allocations</h4>
                {currentDetail.properties.map((p, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-lg border border-white/5">
                    <p className="font-sans text-xs tracking-wider uppercase text-white/60 mb-1">{p.location}</p>
                    <p className="font-serif text-lg text-white">{p.stays}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-12">
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Key Inclusions</h4>
                {currentDetail.inclusions.map((inc, idx) => (
                  <p key={idx} className="font-sans font-light text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-white/40">•</span> {inc}
                  </p>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center border border-white/40 text-white py-4 font-sans text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all"
            >
              Request Arrangement via WhatsApp →
            </a>
          </div>
        </div>
      )}
    </FadeInSection>
  );
}

// ============================================
// HOUSE EXPERIENCES — 2x2 GRID
// ============================================
const houseExperiences = [
  { 
    image: '/house-wellness.jpg', 
    title: 'Wellness Programmes', 
    line: "Private wellness stays and medical retreat arrangements layered seamlessly into the member's global itinerary." 
  },
  { 
    image: '/house-chef.jpg', 
    title: 'The Private Chef Arrangement', 
    line: 'Bespoke dining curated for a single evening, wherever the member resides.' 
  },
  { 
    image: '/house-afterhours.jpg', 
    title: 'After Hours Access', 
    line: 'Private entry to galleries, vineyards, or historical estates after public hours.' 
  },
  { 
    image: '/house-quiet.jpg', 
    title: 'The Quiet Occasion', 
    line: 'Discreet milestone moments organized in complete privacy.' 
  },
];

function HouseExperiences() {
  return (
    <FadeInSection className="px-8 md:px-16 py-24 md:py-32 bg-black">
      <p className="font-sans font-light text-xs tracking-[0.3em] uppercase text-gray-400 mb-2 text-center">
        House Experiences
      </p>
      <h2 className="font-serif text-3xl md:text-5xl text-white mb-16 text-center" style={{ letterSpacing: '0.01em' }}>
        Permanent Standing Arrangements
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {houseExperiences.map((item) => {
          const waUrl = `https://wa.me/2349020316094?text=${encodeURIComponent(`Hello Sarvene, I would like details regarding: ${item.title}`)}`;
          return (
            <div key={item.title} className="flex flex-col sm:flex-row gap-6 bg-[#111111] border border-white/10 p-6 rounded-xl">
              <div className="w-full sm:w-44 h-44 flex-shrink-0 overflow-hidden rounded-lg">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                  <p className="font-sans font-light text-sm text-gray-400 leading-relaxed mb-4">{item.line}</p>
                </div>
                <a 
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start font-sans text-xs tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors"
                >
                  Request Details →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </FadeInSection>
  );
}

// ============================================
// PREFERRED PROPERTIES FOOTER
// ============================================
const preferredProperties = ['Aman', 'Belmond', 'Rosewood', 'Six Senses', 'One&Only', 'Cheval Blanc', 'Bulgari Hotels', 'Mandarin Oriental'];

function PreferredPropertiesFooter() {
  return (
    <FadeInSection className="px-8 md:px-16 py-20 bg-black border-t border-white/10">
      <p className="font-sans font-light text-xs tracking-[0.3em] uppercase text-gray-400 mb-8 text-center">
        Preferred Property Network
      </p>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 max-w-3xl mx-auto mb-12">
        {preferredProperties.map((name) => (
          <span key={name} className="font-serif text-base md:text-xl text-gray-400">{name}</span>
        ))}
      </div>
      <p className="font-sans font-light text-xs text-gray-500 text-center">©️ Sarvene Beyond</p>
    </FadeInSection>
  );
}

// ============================================
// MAIN BEYOND PAGE
// ============================================
function BeyondPage() {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const granted = localStorage.getItem(BEYOND_ACCESS_KEY) === 'granted';
    setHasAccess(granted);
  }, []);

  const handleGranted = useCallback(() => setHasAccess(true), []);

  if (hasAccess === null) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Header Fold */}
      <div className="px-8 md:px-16 pt-32 pb-20 text-center flex flex-col items-center max-w-3xl mx-auto">
        <img 
          src="/beyond-logo.png" 
          alt="SARVENE Beyond" 
          className="h-20 sm:h-28 w-auto object-contain mb-8 mix-blend-lighten drop-shadow-2xl" 
        />
        <p className="font-sans font-light text-sm tracking-[0.35em] uppercase text-gray-300 mb-4">
          A World Above
        </p>
        <p className="font-sans font-light text-base md:text-lg text-gray-400 leading-relaxed">
          Private assembly, sovereign allocations, and curated hospitality for members. Access is by arrangement.
        </p>
      </div>

      <Featured />
      <Calendar />
      <Categories />
      <HouseExperiences />
      <PreferredPropertiesFooter />

      {!hasAccess && <EmailGate onGranted={handleGranted} />}
    </div>
  );
}

export default BeyondPage;