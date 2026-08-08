import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: 'Vantage',
    label: 'Select',
    description: 'Capped hourly rates across all five aircraft categories with priority empty leg alerts.',
    features: [
      'Capped hourly rates across all five aircraft categories',
      '48 hour booking window',
      'No peak day surcharges',
      '7% liquidation fee on refund',
      'Priority empty leg alerts',
    ],
    highlighted: false,
    mailto: 'mailto:operations@sarvenejets.com?subject=Sarvene%20Jet%20Card%2C%20Vantage%20Enquiry&body=Hello%2C%20I%27m%20interested%20in%20the%20Sarvene%20Jet%20Card%2C%20Vantage%20tier%20at%20%24100%2C000%20minimum%20deposit.%20Please%20send%20me%20the%20next%20steps.%0A%0AName%3A%0APhone%3A',
  },
  {
    name: 'Meridian',
    label: 'Most Requested',
    description: 'Capped hourly rates with dedicated account manager and exclusive event invitations.',
    features: [
      'Capped hourly rates across all five aircraft categories',
      '48 hour booking window',
      'No peak day surcharges',
      '3% bonus credit on every top up',
      '7% liquidation fee on refund',
      'Dedicated account manager',
      'Annual client dinner, principal plus one',
      'Two invitations a year to select events (Wimbledon, F1, and similar), principal plus one guest per invite',
      'Priority empty leg alerts',
    ],
    highlighted: true,
    mailto: 'mailto:operations@sarvenejets.com?subject=Sarvene%20Jet%20Card%2C%20Meridian%20Enquiry&body=Hello%2C%20I%27m%20interested%20in%20the%20Sarvene%20Jet%20Card%2C%20Meridian%20tier%20at%20%24250%2C000%20minimum%20deposit.%20Please%20send%20me%20the%20next%20steps.%0A%0AName%3A%0APhone%3A',
  },
  {
    name: 'Zenith',
    label: 'Sovereign',
    description: 'Ultimate tier with same-day priority booking, waived fuel surcharges, and first right of refusal.',
    features: [
      'Capped hourly rates across all five aircraft categories',
      'Same day priority booking',
      'No peak day surcharges',
      '5% bonus credit on every top up',
      '7% liquidation fee on refund',
      'Waived fuel surcharge where applicable',
      'Annual empty leg credit',
      'Dedicated account manager',
      'Annual client dinner, principal plus two',
      'Five invitations a year to select events (Wimbledon, F1, and similar), principal plus four guests per invite',
      'First right of refusal on Sarvene\'s own aircraft during peak dates',
    ],
    highlighted: false,
    mailto: 'mailto:operations@sarvenejets.com?subject=Sarvene%20Jet%20Card%2C%20Zenith%20Enquiry&body=Hello%2C%20I%27m%20interested%20in%20the%20Sarvene%20Jet%20Card%2C%20Zenith%20tier%20at%20%241%2C000%2C000%20minimum%20deposit.%20Please%20send%20me%20the%20next%20steps.%0A%0AName%3A%0APhone%3A',
  },
];

const JetCard = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.jc-heading', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
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
                href={tier.mailto}
                className="group w-full bg-sarvene-obsidian text-sarvene-cream py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-sarvene-matte transition-colors flex items-center justify-center gap-2">
                Select <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
