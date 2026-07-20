import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const africanCities = [
  { city: 'Lagos', code: 'LOS', country: 'Nigeria', region: 'West Africa' },
  { city: 'Abuja', code: 'ABV', country: 'Nigeria', region: 'West Africa' },
  { city: 'Accra', code: 'ACC', country: 'Ghana', region: 'West Africa' },
  { city: 'Abidjan', code: 'ABJ', country: 'Cote d\'Ivoire', region: 'West Africa' },
  { city: 'Dakar', code: 'DSS', country: 'Senegal', region: 'West Africa' },
  { city: 'Nairobi', code: 'NBO', country: 'Kenya', region: 'East Africa' },
  { city: 'Kigali', code: 'KGL', country: 'Rwanda', region: 'East Africa' },
  { city: 'Addis Ababa', code: 'ADD', country: 'Ethiopia', region: 'East Africa' },
  { city: 'Entebbe', code: 'EBB', country: 'Uganda', region: 'East Africa' },
  { city: 'Johannesburg', code: 'JNB', country: 'South Africa', region: 'Southern Africa' },
  { city: 'Cape Town', code: 'CPT', country: 'South Africa', region: 'Southern Africa' },
  { city: 'Casablanca', code: 'CMN', country: 'Morocco', region: 'North Africa' },
];

const globalHubs = [
  { city: 'London', code: 'LHR', country: 'United Kingdom' },
  { city: 'Paris', code: 'CDG', country: 'France' },
  { city: 'Geneva', code: 'GVA', country: 'Switzerland' },
  { city: 'New York', code: 'JFK', country: 'United States' },
  { city: 'Los Angeles', code: 'LAX', country: 'United States' },
  { city: 'Dubai', code: 'DXB', country: 'UAE' },
  { city: 'Singapore', code: 'SIN', country: 'Singapore' },
];

const Network = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.net-panel', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.fromTo('.net-city', { opacity: 0, y: 15 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.05,
        scrollTrigger: { trigger: '.net-cities', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="network" ref={sectionRef} className="bg-sarvene-matte py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="net-panel mb-16">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">Global Reach</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-normal tracking-tight mb-4">
            Africa-first, globally connected
          </h2>
          <p className="font-sans text-sm text-white/50 max-w-2xl leading-relaxed">
            While our roots are in Africa, our reach is global. From Lagos to London, Nairobi to New York — private travel across six continents, handled from one place.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* African Cities */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-sarvene-sage/60 mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-sarvene-sage/30" /> African Network
            </h3>
            <div className="net-cities grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/6">
              {africanCities.map((dest) => (
                <div key={dest.code} className="net-city group bg-sarvene-matte p-5 hover:bg-white/5 transition-colors flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 text-sarvene-sage/40 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-sans text-sm text-white">{dest.city}</div>
                    <div className="font-sans text-[10px] tracking-wider text-white/30">{dest.country}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Hubs + Stats */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-sarvene-sage/60 mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-sarvene-sage/30" /> Global Hubs
            </h3>
            <div className="space-y-3 mb-12">
              {globalHubs.map((hub) => (
                <div key={hub.code} className="flex items-center justify-between py-3 border-b border-white/6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-3.5 h-3.5 text-sarvene-sage/30" />
                    <span className="font-sans text-sm text-white">{hub.city}</span>
                  </div>
                  <span className="font-sans text-[11px] text-white/30">{hub.country}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-10 pt-6">
              <div>
                <div className="font-serif text-3xl text-white mb-1" style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 700}}>180+</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/35">Airports</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-white mb-1" style={{fontFamily: "'Cormorant Garamond', serif", fontWeight: 700}}>24h</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/35">Clearance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
