import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wifi, Utensils, Armchair, Moon, Music, Headset } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Armchair,
    title: 'Bespoke Interiors',
    description: 'Hand-crafted cabins with lie-flat beds, rare wood finishes, and hand-stitched leather appointed to your taste.',
  },
  {
    icon: Utensils,
    title: 'Curated Dining',
    description: 'Menus from world-renowned chefs, tailored to your dietary preferences and served at 40,000 feet.',
  },
  {
    icon: Wifi,
    title: 'Global Connectivity',
    description: 'High-speed Ka-band internet keeps you connected across oceans and continents without interruption.',
  },
  {
    icon: Moon,
    title: 'Quiet Cabins',
    description: 'Advanced acoustic engineering creates the quietest environment in private aviation for restful travel.',
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Cinema-quality screens with immersive audio. Your personal theater at altitude.',
  },
  {
    icon: Headset,
    title: 'On the Ground',
    description: 'Your advisor handles ground transport, hotel arrangements and everything surrounding the flight. Available around the clock.',
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-item', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: '.exp-grid', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">Onboard Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sarvene-black font-normal tracking-tight">Every detail considered</h2>
        </div>

        <div className="exp-grid grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-sarvene-black/8">
          {features.map((feature) => (
            <div key={feature.title} className="exp-item group bg-white p-8 md:p-10 hover:bg-sarvene-cream/50 transition-colors">
              <feature.icon className="w-5 h-5 text-sarvene-obsidian/40 mb-6 group-hover:text-sarvene-obsidian transition-colors" />
              <h3 className="font-sans text-sm font-semibold tracking-wide text-sarvene-black mb-3">{feature.title}</h3>
              <p className="font-sans text-sm text-sarvene-black/50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
