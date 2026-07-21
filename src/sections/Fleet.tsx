import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Fuel, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface JetCategory {
  name: string;
  description: string;
  image: string;
  passengers: string;
  range: string;
  examples: string[];
}

const categories: JetCategory[] = [
  {
    name: 'Light Jets',
    description: 'Ideal for short-haul flights of 2-3 hours. Efficient, agile, and perfectly suited for quick hops between West African cities or to regional hubs.',
    image: '/fleet-light.jpg',
    passengers: '4-8',
    range: '1,200 - 2,000 nm',
    examples: ['Citation CJ4', 'Phenom 300E', 'Learjet 75'],
  },
  {
    name: 'Midsize Jets',
    description: 'The versatile workhorse of private aviation. Spacious stand-up cabins, transcontinental range, and full lavatory facilities for regional and continental travel.',
    image: '/fleet-midsize.jpg',
    passengers: '7-9',
    range: '2,500 - 3,500 nm',
    examples: ['Challenger 3500', 'Citation Latitude', 'Hawker 800XP'],
  },
  {
    name: 'Heavy Jets',
    description: 'True intercontinental capability with expansive cabin space. Fully equipped galleys, separate living areas, and the range to connect Africa to Europe non-stop.',
    image: '/fleet-heavy.jpg',
    passengers: '10-16',
    range: '4,000 - 7,500 nm',
    examples: ['Gulfstream G650', 'Falcon 7X', 'Challenger 650'],
  },
  {
    name: 'Ultra Long Range',
    description: 'The pinnacle of business aviation. Connect any two points on Earth non-stop. Multiple cabin zones, permanent bedrooms, and shower facilities at 40,000 feet.',
    image: '/fleet-ultra.jpg',
    passengers: '14-19',
    range: '6,500 - 7,700 nm',
    examples: ['Global 7500', 'Gulfstream G700', 'Falcon 10X'],
  },
  {
    name: 'VIP Airliners',
    description: 'Converted commercial airliners configured for heads of state, corporate delegations and large groups requiring the highest standard of intercontinental travel.',
    image: '/fleet-vip.jpg',
    passengers: '19-50',
    range: '4,000 - 8,000 nm',
    examples: ['ACJ320neo', 'BBJ 737 MAX', 'ACJ TwoTwenty'],
  },
];

const Fleet = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.fleet-heading', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.fromTo('.fleet-tabs', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, delay: 0.2,
        scrollTrigger: { trigger: '.fleet-tabs', start: 'top 85%' },
      });
      gsap.fromTo('.fleet-display', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, delay: 0.3,
        scrollTrigger: { trigger: '.fleet-display', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const current = categories[activeCategory];

  return (
    <section id="fleet" ref={sectionRef} className="bg-sarvene-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="fleet-heading mb-12">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">The Fleet</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sarvene-black font-normal tracking-tight mb-4">
            Aircraft for every mission
          </h2>
          <p className="font-sans text-sm text-sarvene-black/55 max-w-xl leading-relaxed">
            From nimble light jets for regional travel to VIP airliners for delegations, the Sarvene fleet spans every category of private aviation.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="fleet-tabs flex flex-wrap gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2.5 font-sans text-[11px] tracking-[0.12em] uppercase transition-all border ${
                activeCategory === i
                  ? 'bg-sarvene-obsidian text-sarvene-cream border-sarvene-obsidian'
                  : 'bg-white text-sarvene-black/60 border-sarvene-black/8 hover:border-sarvene-black/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="fleet-display grid lg:grid-cols-2 gap-0 border border-sarvene-black/8 overflow-hidden bg-white">
          <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
            <img src={current.image} alt={current.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700" key={current.image} />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <h3 className="font-serif text-3xl md:text-4xl text-sarvene-black mb-4">{current.name}</h3>
            <p className="font-sans text-sm text-sarvene-black/55 leading-relaxed mb-8">{current.description}</p>

            <div className="flex items-center gap-10 mb-8">
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/35 mb-1">Passengers</p>
                <p className="font-mont text-sm text-sarvene-black flex items-center gap-2"><Users className="w-3.5 h-3.5 text-sarvene-obsidian/40" />{current.passengers}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/35 mb-1">Range</p>
                <p className="font-mont text-sm text-sarvene-black flex items-center gap-2"><Fuel className="w-3.5 h-3.5 text-sarvene-obsidian/40" />{current.range}</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/35 mb-3">Available Aircraft</p>
              <div className="flex flex-wrap gap-2">
                {current.examples.map((ex) => (
                  <span key={ex} className="px-3 py-1.5 bg-sarvene-cream font-sans text-[11px] text-sarvene-black/60">{ex}</span>
                ))}
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-sarvene-obsidian hover:text-sarvene-matte transition-colors group/link">
              Request Availability <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
