import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Zap, Shield, Users, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    title: 'Head of Operations',
    department: 'Operations',
    location: 'Lagos',
    type: 'Full-time',
  },
  {
    title: 'Licensed Cabin Crew',
    department: 'In-Flight Services',
    location: 'Lagos · Abuja · Accra · London',
    type: 'Contract',
  },
  {
    title: 'Client Experience Lead',
    department: 'Client Services',
    location: 'Lagos / London',
    type: 'Full-time',
  },
  {
    title: 'Fulfilment Coordinator',
    department: 'Operations',
    location: 'Lagos / Abuja',
    type: 'Hybrid',
  },
];

const Careers = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.careers-panel', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="careers" ref={sectionRef} className="bg-sarvene-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="careers-panel">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">Join Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-sarvene-black font-normal tracking-tight mb-6">
              Careers at Sarvene
            </h2>
            <p className="font-sans text-sm text-sarvene-black/55 leading-relaxed mb-8">
              Founded in 2026, Sarvene Jets is redefining private aviation across Africa and beyond. We move with precision, operate with discretion, and hold ourselves to the standard our clients expect at 40,000 feet.
            </p>
            <p className="font-sans text-sm text-sarvene-black/55 leading-relaxed mb-10">
              Our team is lean and intentional. If you are exceptional at what you do and want to be part of building something that matters, we want to hear from you.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, label: 'Client-First Culture', desc: 'Every decision starts with the client' },
                { icon: Globe, label: 'Pan-African Reach', desc: 'Connecting Africa to the world' },
                { icon: Zap, label: 'Move With Urgency', desc: 'Small team, large ambitions' },
                { icon: Shield, label: 'Safety First', desc: 'Zero-compromise standards, always' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-sarvene-obsidian/40 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs font-medium text-sarvene-black">{item.label}</p>
                    <p className="font-sans text-[11px] text-sarvene-black/45">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Open roles */}
          <div className="careers-panel">
            <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-sarvene-black/40 mb-6">Open Positions</h3>
            <div className="space-y-3">
              {roles.map((role) => (
                <a 
                  key={role.title} 
                  href={`mailto:careers@sarvenejets.com?subject=Application: ${encodeURIComponent(role.title)}&body=${encodeURIComponent(`Hello Sarvene HR, I am writing to apply for the ${role.title} position. Please find my details below: Name: Experience: Kind regards,`)}`}
                  className="group bg-white border border-sarvene-black/6 p-6 hover:border-sarvene-obsidian/20 transition-all cursor-pointer block"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-sans text-sm font-medium text-sarvene-black mb-2 group-hover:text-sarvene-obsidian transition-colors">
                        {role.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-sans text-[11px] text-sarvene-black/40">{role.department}</span>
                        <span className="w-1 h-1 bg-sarvene-black/15 rounded-full" />
                        <span className="font-sans text-[11px] text-sarvene-black/40">{role.location}</span>
                        <span className="w-1 h-1 bg-sarvene-black/15 rounded-full" />
                        <span className="font-sans text-[11px] text-sarvene-black/40">{role.type}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-sarvene-black/20 group-hover:text-sarvene-obsidian group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 border border-sarvene-obsidian/10 bg-white">
              <p className="font-sans text-sm text-sarvene-black/60 leading-relaxed">
                Don't see your role? We are always looking for exceptional people. Send your CV to{' '}
                <a href="mailto:careers@sarvenejets.com" className="text-sarvene-obsidian underline underline-offset-2">careers@sarvenejets.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
