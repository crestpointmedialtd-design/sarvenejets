import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: 'Access 25',
    hours: '25',
    label: 'Select',
    description: 'For the occasional flyer. 25 hours of guaranteed access per year across the Sarvene fleet.',
    features: [
      '25 flight hours annually',
      'Access to Light & Midsize Jets',
      'Guaranteed 48-hour booking window',
      'No peak-day surcharges',
      'Fixed hourly rates',
    ],
    highlighted: false,
    whatsapp: 'https://wa.me/2349020316094?text=Hi%2C%20I%20am%20interested%20in%20the%20Sarvene%20Access%2025%20Jet%20Card%20programme%20and%20would%20like%20to%20book%20a%20private%20consultation.',
  },
  {
    name: 'Access 50',
    hours: '50',
    label: 'Most Requested',
    description: 'Our most requested programme. 50 hours with expanded fleet access and priority scheduling.',
    features: [
      '50 flight hours annually',
      'Access to Light through Heavy Jets',
      'Guaranteed 48-hour booking window',
      'No peak-day surcharges',
      'Fixed hourly rates',
      'Complimentary catering upgrades',
    ],
    highlighted: true,
    whatsapp: 'https://wa.me/2349020316094?text=Hi%2C%20I%20am%20interested%20in%20the%20Sarvene%20Access%2050%20Jet%20Card%20programme%20and%20would%20like%20to%20book%20a%20private%20consultation.',
  },
  {
    name: 'Access 100',
    hours: '100',
    label: 'Sovereign',
    description: 'For frequent flyers demanding the best. Full fleet access with guaranteed availability.',
    features: [
      '100 flight hours annually',
      'Full fleet access including Ultra Long Range & VIP',
      'Guaranteed 48-hour booking window',
      'No peak-day surcharges',
      'Fixed hourly rates',
      'Complimentary catering upgrades',
      'Dedicated account manager',
      'Ground arrangements and travel coordination worldwide',
    ],
    highlighted: false,
    whatsapp: 'https://wa.me/2349020316094?text=Hi%2C%20I%20am%20interested%20in%20the%20Sarvene%20Access%20100%20Jet%20Card%20programme%20and%20would%20like%20to%20book%20a%20private%20consultation.',
  },
];

const JetCard = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const touchStartX = useRef(0);
const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.jc-heading', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
useEffect(() => {
  const el = sliderRef.current;
  if (!el) return;
  const handleWheel = (e: WheelEvent) => {
    if (Math.abs(e.deltaX) < 5) return;
    e.preventDefault();
    if (wheelTimeout.current) return;
    if (e.deltaX > 10) setActive(a => Math.min(a + 1, tiers.length - 1));
    else if (e.deltaX < -10) setActive(a => Math.max(a - 1, 0));
    wheelTimeout.current = setTimeout(() => {
      wheelTimeout.current = null;
    }, 500);
  };
  el.addEventListener('wheel', handleWheel, { passive: false });
  return () => el.removeEventListener('wheel', handleWheel);
}, []);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setActive(a => Math.min(a + 1, tiers.length - 1));
      else setActive(a => Math.max(a - 1, 0));
    }
  };

  const tier = tiers[active];

  return (
    <section id="jet-card" ref={sectionRef} className="bg-sarvene-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Heading — centred */}
        <div className="jc-heading text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">Membership</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sarvene-black font-normal tracking-tight mb-4">
            Jet Card Programs
          </h2>
          <p className="font-sans text-sm text-sarvene-black/50 leading-relaxed">
            Pre-purchased flight hours at locked-in rates. Guaranteed availability across the full Sarvene fleet. Speak with an advisor to find the right programme for you.
          </p>
        </div>

        {/* Slide indicators — centred */}
        <div className="flex justify-center gap-2 mb-8">
          {tiers.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`h-[2px] transition-all duration-300 ${i === active ? 'w-8 bg-sarvene-obsidian' : 'w-4 bg-sarvene-black/20'}`}
            />
          ))}
        </div>

        {/* Card — centred, swipeable */}
        <div
          ref={sliderRef}
          className="max-w-2xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`bg-white border p-8 md:p-12 flex flex-col ${tier.highlighted ? 'border-sarvene-obsidian ring-1 ring-sarvene-obsidian' : 'border-sarvene-black/8'}`}>
            <span className={`inline-block self-start px-3 py-1 font-sans text-[10px] tracking-[0.15em] uppercase mb-6 ${tier.highlighted ? 'bg-sarvene-obsidian text-sarvene-cream' : 'bg-sarvene-black/5 text-sarvene-black/50'}`}>
              {tier.label}
            </span>

            <h3 className="text-sarvene-black mb-3" style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '2rem'}}>{tier.name}</h3>
            <p className="font-sans text-sm text-sarvene-black/50 mb-8 leading-relaxed">{tier.description}</p>

            {/* Hours in Cormorant Garamond Bold */}
            <div className="mb-8">
              <span style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '3.5rem', lineHeight: 1, color: 'var(--color-sarvene-obsidian, #1a1a18)'}}>
                {tier.hours}
              </span>
              <span className="font-sans text-sm text-sarvene-black/40 ml-3">hours / year</span>
            </div>

            <ul className="space-y-3 mb-10">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 font-sans text-sm text-sarvene-black/55">
                  <Check className="w-4 h-4 text-sarvene-sage flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-sarvene-black/8">
              <a
                href={tier.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-sarvene-obsidian text-sarvene-cream py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-sarvene-matte transition-colors flex items-center justify-center gap-2">
                Book a Consultation <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Swipe hint */}
          <p className="text-center font-sans text-[10px] text-sarvene-black/25 mt-4 tracking-wider">
            SWIPE TO EXPLORE
          </p>
        </div>

      </div>
    </section>
  );
};

export default JetCard;
