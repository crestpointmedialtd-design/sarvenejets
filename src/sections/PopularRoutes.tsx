import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

gsap.registerPlugin(ScrollTrigger);

const routes = [
  {
    from: 'Lagos',
    to: 'Abuja',
    type: 'Domestic',
    time: '1 hour',
    slug: '/routes/lagos-to-abuja',
    note: 'Nigeria\'s most-flown private route.',
  },
  {
    from: 'Lagos',
    to: 'London',
    type: 'Intercontinental',
    time: '6.5 – 7 hours',
    slug: '/routes/lagos-to-london',
    note: 'Non-stop on a heavy jet.',
  },
  {
    from: 'Lagos',
    to: 'Dubai',
    type: 'Intercontinental',
    time: '6 – 8 hours',
    slug: '/routes/lagos-to-dubai',
    note: 'Commerce, investment and movement.',
  },
  {
    from: 'Lagos',
    to: 'Accra',
    type: 'Regional',
    time: 'Under 1 hour',
    slug: '/routes/lagos-to-accra',
    note: 'West Africa\'s defining business corridor.',
  },
  {
    from: 'Abuja',
    to: 'Nairobi',
    type: 'Pan-African',
    time: '~5 hours',
    slug: '/routes/abuja-to-nairobi',
    note: 'Nigeria to East Africa\'s business hub.',
  },
];

const PopularRoutes = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.route-card', { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="popular-routes" ref={sectionRef} className="bg-sarvene-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">
              Popular Routes
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-sarvene-black font-normal tracking-tight">
              Where Sarvene Flies
            </h2>
          </div>
          <a
            href="/routes"
            className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-sarvene-obsidian hover:text-sarvene-matte transition-colors"
          >
            View All Routes <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Route cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-sarvene-black/8">
          {routes.map((route) => (
            <a
              key={route.slug}
              href={route.slug}
              className="route-card group bg-white p-8 md:p-10 hover:bg-sarvene-cream/60 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/30">
                  {route.type}
                </span>
                <span className="font-sans text-[10px] text-sarvene-black/30">
                  {route.time}
                </span>
              </div>

              <p className="font-serif text-2xl md:text-3xl text-sarvene-obsidian mb-3 tracking-tight">
                {route.from} → {route.to}
              </p>
              <p className="font-sans text-sm text-sarvene-black/45 leading-relaxed mb-8 flex-1">
                {route.note}
              </p>

              <span className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-sarvene-obsidian group-hover:gap-3 transition-all">
                View Route <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}

          {/* Don't see your route card */}
          <div className="route-card bg-sarvene-matte p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 mb-6">
                180+ Airports
              </p>
              <p className="font-serif text-2xl text-white mb-3">
                Don't see your route?
              </p>
              <p className="font-sans text-sm text-white/45 leading-relaxed mb-8">
                Sarvene Jets operates worldwide. Use the estimator for any route or speak directly to an advisor.
              </p>
            </div>
            <button
              onClick={() => scrollToSection('booking-estimator')}
              className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-sarvene-sage hover:text-white transition-colors"
            >
              Open Estimator <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PopularRoutes;
