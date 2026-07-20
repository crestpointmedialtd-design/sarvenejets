import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plane, ShoppingCart, Settings, CreditCard, Route, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Plane,
    title: 'Private Jet Charter',
    description: 'On-demand charter with access to our entire fleet. From short hops across West Africa to intercontinental journeys, every flight is tailored to your schedule.',
    cta: 'Request a Charter',
    href: '#contact',
  },
  {
    icon: ShoppingCart,
    title: 'Aircraft Acquisition',
    description: 'Expert guidance through the full aircraft purchase process. From market analysis and inspection to negotiation and delivery, we handle every detail.',
    cta: 'Start a Conversation',
    href: 'mailto:operations@sarvenejets.com?subject=Aircraft%20Acquisition%20Enquiry&body=Hi%2C%20I%20am%20making%20an%20enquiry%20regarding%20aircraft%20acquisition%20services.',
  },
  {
    icon: Settings,
    title: 'Aircraft Management',
    description: 'Comprehensive management services including crew staffing, maintenance oversight, regulatory compliance, and charter revenue optimization.',
    cta: 'Enquire About Management',
    href: 'mailto:operations@sarvenejets.com?subject=Aircraft%20Management%20Enquiry&body=Hi%2C%20I%20am%20making%20an%20enquiry%20regarding%20aircraft%20management%20services.',
  },
  {
    icon: CreditCard,
    title: 'Jet Card',
    description: 'Pre-purchased flight hours at locked-in rates. Guaranteed availability, no hidden fees, and a consistent booking experience across the entire Sarvene network.',
    cta: 'Enquire About Jet Cards',
    href: 'https://wa.me/2349020316094?text=Hi%2C%20I%20am%20interested%20in%20the%20Sarvene%20Jets%20Card%20programme%20and%20would%20like%20to%20book%20a%20private%20consultation.',
  },
  {
    icon: Route,
    title: 'Empty Legs',
    description: 'Access repositioning flights at significantly reduced rates. Ideal for flexible travelers seeking exceptional value on private aviation.',
    cta: 'Get Empty Leg Alerts',
    href: 'mailto:marketing@sarvenejets.com?subject=Empty%20Leg%20Alerts%20Subscription&body=Hi%2C%20please%20add%20me%20to%20the%20Sarvene%20Jets%20empty%20leg%20alerts%20list.',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-item', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12,
        scrollTrigger: { trigger: '.services-grid', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sarvene-black font-normal tracking-tight">
            Our Services
          </h2>
        </div>

        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-sarvene-black/8">
          {services.map((svc) => (
            <div key={svc.title} className="service-item group bg-white p-8 md:p-10 hover:bg-sarvene-cream/50 transition-colors flex flex-col">
              <svc.icon className="w-5 h-5 text-sarvene-obsidian/40 mb-5 group-hover:text-sarvene-obsidian transition-colors" />
              <h3 className="font-sans text-sm font-semibold tracking-wide text-sarvene-black mb-3">{svc.title}</h3>
              <p className="font-sans text-sm text-sarvene-black/50 leading-relaxed mb-6 flex-1">{svc.description}</p>
              <a href={svc.href} className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-sarvene-obsidian hover:text-sarvene-matte transition-colors group/link">
                {svc.cta} <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
