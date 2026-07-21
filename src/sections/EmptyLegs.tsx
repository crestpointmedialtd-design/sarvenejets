import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock, Tag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EmptyLeg {
  route: string;
  daysOut: number; // days from today — recomputed on load so dates never go stale
  aircraft: string;
  price: string;
  originalPrice: string;
  savings: string;
}

function formatRollingDate(daysOut: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysOut);
  return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

// Two pricing philosophies, matching how these corridors actually get sourced:
// - West Africa / short regional hops: flat one-way "ferry" rate, roughly half
//   the 2-hour-minimum round-trip baseline (the aircraft only flies once, not there-and-back).
// - Intercontinental floating-fleet corridors: 25-35% off the standard charter
//   range midpoint, reflecting genuine subsidized positioning rather than a fire-sale.
// - Intra-region (Europe/US/MEA/Asia): 15-20% off, since those markets are already
//   competitively priced and don't need a steep discount to be attractive.
const emptyLegs: EmptyLeg[] = [
  { route: 'Lagos — Abuja', daysOut: 2, aircraft: 'Hawker 850XP', price: '$5,500', originalPrice: '$11,000', savings: '50%' },
  { route: 'Lagos — Abuja', daysOut: 3, aircraft: 'Legacy 650', price: '$11,500', originalPrice: '$23,000', savings: '50%' },
  { route: 'Lagos — Accra', daysOut: 4, aircraft: 'Phenom 300E', price: '$5,500', originalPrice: '$11,000', savings: '50%' },
  { route: 'Lagos — Port Harcourt', daysOut: 5, aircraft: 'Phenom 300', price: '$4,750', originalPrice: '$9,500', savings: '50%' },
  { route: 'Abuja — Kano', daysOut: 6, aircraft: 'Citation CJ4', price: '$4,000', originalPrice: '$8,000', savings: '50%' },
  { route: 'Accra — Kumasi', daysOut: 7, aircraft: 'Phenom 300', price: '$3,750', originalPrice: '$7,500', savings: '50%' },
  { route: 'Entebbe — Addis Ababa', daysOut: 8, aircraft: 'Citation CJ4', price: '$15,210', originalPrice: '$19,500', savings: '22%' },
  { route: 'Abuja — Kigali', daysOut: 9, aircraft: 'Hawker 900XP', price: '$36,000', originalPrice: '$48,000', savings: '25%' },
  { route: 'Lagos — London (Farnborough)', daysOut: 5, aircraft: 'Global 6000', price: '$68,000', originalPrice: '$102,000', savings: '33%' },
  { route: 'Lagos — Cape Town', daysOut: 11, aircraft: 'Global 6000', price: '$72,000', originalPrice: '$108,000', savings: '33%' },
  { route: 'Johannesburg — Lagos', daysOut: 12, aircraft: 'Falcon 7X', price: '$55,000', originalPrice: '$83,500', savings: '34%' },
  { route: 'Geneva — Lagos', daysOut: 6, aircraft: 'Challenger 604', price: '$45,000', originalPrice: '$65,000', savings: '31%' },
  { route: 'Lagos — Dubai', daysOut: 14, aircraft: 'Gulfstream G450', price: '$58,000', originalPrice: '$86,500', savings: '33%' },
  { route: 'Dubai — Lagos', daysOut: 15, aircraft: 'Legacy 650', price: '$52,000', originalPrice: '$77,500', savings: '33%' },
  { route: 'Nairobi — Lagos', daysOut: 10, aircraft: 'Challenger 605', price: '$46,000', originalPrice: '$69,000', savings: '33%' },
  { route: 'Cairo — Lagos', daysOut: 13, aircraft: 'Gulfstream G-IV', price: '$49,000', originalPrice: '$73,000', savings: '33%' },
  { route: 'London — Geneva', daysOut: 4, aircraft: 'Challenger 3500', price: '$8,400', originalPrice: '$10,500', savings: '20%' },
  { route: 'Paris — Nice', daysOut: 6, aircraft: 'Citation Latitude', price: '$7,600', originalPrice: '$9,500', savings: '20%' },
  { route: 'New York — Miami', daysOut: 9, aircraft: 'Falcon 7X', price: '$16,720', originalPrice: '$22,000', savings: '24%' },
  { route: 'Dubai — Doha', daysOut: 3, aircraft: 'Phenom 300', price: '$5,400', originalPrice: '$6,800', savings: '20%' },
  { route: 'Singapore — Hong Kong', daysOut: 16, aircraft: 'Gulfstream G450', price: '$25,600', originalPrice: '$32,000', savings: '20%' },
];

const EmptyLegs = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.el-heading', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.fromTo('.el-row', { opacity: 0, y: 15 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08,
        scrollTrigger: { trigger: '.el-table', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="empty-legs" ref={sectionRef} className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="el-heading flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">Available Now</p>
            <h2 className="font-serif text-4xl md:text-5xl text-sarvene-black font-normal tracking-tight">Empty Legs</h2>
          </div>
          <p className="font-sans text-sm text-sarvene-black/50 max-w-md leading-relaxed">
            Positioning flights at reduced rates, available one way only. Confirm live availability with an advisor before booking.
          </p>
        </div>

        <div className="el-table border border-sarvene-black/8">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-sarvene-cream/50 border-b border-sarvene-black/8">
            <div className="col-span-3 font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40">Route</div>
            <div className="col-span-2 font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40">Date</div>
            <div className="col-span-3 font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40">Aircraft</div>
            <div className="col-span-2 font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40">Price</div>
            <div className="col-span-2"></div>
          </div>

          {emptyLegs.map((leg, i) => (
            <div key={i} className="el-row grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 border-b border-sarvene-black/5 hover:bg-sarvene-cream/30 transition-colors items-center">
              <div className="col-span-3">
                <p className="font-sans text-sm font-medium text-sarvene-black">{leg.route}</p>
                <div className="md:hidden flex items-center gap-2 mt-1">
                  <span className="font-sans text-[11px] text-sarvene-black/40">{formatRollingDate(leg.daysOut)}</span>
                  <span className="font-sans text-[11px] text-sarvene-black/40">{leg.aircraft}</span>
                </div>
              </div>
              <div className="col-span-2 hidden md:flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sarvene-obsidian/30" />
                <span className="font-sans text-sm text-sarvene-black/60">{formatRollingDate(leg.daysOut)}</span>
              </div>
              <div className="col-span-3 hidden md:block">
                <span className="font-sans text-sm text-sarvene-black/60">{leg.aircraft}</span>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-3">
                  <span className="font-mont text-sm font-semibold text-sarvene-black">{leg.price}</span>
                  <span className="font-mont text-xs text-sarvene-black/30 line-through">{leg.originalPrice}</span>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-between md:justify-end gap-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 font-sans text-[10px] tracking-wider text-green-700">
                  <Tag className="w-3 h-3" /> Save {leg.savings}
                </span>
                <a
                  href={`https://wa.me/2349020316094?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20empty%20leg%20flight%3A%20${encodeURIComponent(leg.route)}%20on%20${encodeURIComponent(formatRollingDate(leg.daysOut))}%20(${encodeURIComponent(leg.aircraft)}).%20Please%20send%20me%20more%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] tracking-[0.12em] uppercase text-sarvene-obsidian hover:text-sarvene-matte transition-colors flex items-center gap-1"
                >
                  Request This Leg <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="font-sans text-[11px] text-sarvene-black/35 mt-5 flex items-center gap-2">
          <Clock className="w-3.5 h-3.5" /> Last updated 15 minutes ago. Empty legs are subject to change based on confirmed charter schedules.
        </p>
      </div>
    </section>
  );
};

export default EmptyLegs;
