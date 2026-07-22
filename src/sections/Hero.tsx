import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const heroSlides = [
  { src: '/hero-1.jpg', alt: 'Gulfstream cabin interior' },
  { src: '/hero-2.jpg', alt: 'Private jet cabin with Hermès blankets' },
  { src: '/hero-3.jpg', alt: 'Ultra long range jet lounge seating' },
  { src: '/hero-4.jpg', alt: 'VIP airliner conference cabin' },
  { src: '/hero-5.jpg', alt: 'Private jet window seat view' },
];

export default function Hero() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
      gsap.fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 });
      gsap.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 });
      gsap.fromTo('.hero-form', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef}>
      <div className="relative h-screen min-h-[700px] max-h-[1000px]">
        {/* Crossfade slideshow — no swipe, auto 5s */}
        {heroSlides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'low'}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === activeSlide ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-sarvene-matte/70 via-sarvene-matte/20 to-sarvene-matte/30" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          {/* SEO: brand-line stays visible, H1 is keyword target for Google */}
          <p className="brand-line hero-title font-serif text-4xl md:text-6xl lg:text-7xl text-white font-normal tracking-tight mb-6 max-w-4xl leading-[1.15]">
            Architecture of Flight
          </p>
          <h1 className="sr-only">Private Jet Charter in Nigeria</h1>
          {/* SEO: H2 secondary keyword */}
          <h2 className="sr-only">Private Jet Charter Nigeria — Lagos, Abuja and West Africa</h2>
          <p className="hero-subtitle font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/75 mb-10 max-w-lg">
            Connecting the continent to the world. On your schedule, at your altitude.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center gap-4">
            <a href="#contact" className="group bg-white text-sarvene-black px-8 py-3.5 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-sarvene-cream transition-colors inline-flex items-center gap-2">
              Request a Charter <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#fleet" className="border border-white/40 text-white px-8 py-3.5 font-sans text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-white/10 transition-colors">
              Explore Our Fleet
            </a>
          </div>
        </div>
      </div>

      <div id="flight-form" className="bg-sarvene-cream py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sarvene-black/45 mb-8">
            Request a Charter
          </p>
          <p className="font-sans text-sm text-sarvene-black/55 mb-10 max-w-2xl leading-relaxed">
            Enter your flight details and our team will contact you within minutes.
            Private jet charter prices are subject to market rates and start from $5,500 per hour.
          </p>

          <div className="hero-form bg-white rounded-sm shadow-sm border border-sarvene-black/5 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-end">
              <div>
                <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40 mb-2">From</label>
                <input type="text" value={from} onChange={(e) => setFrom(e.target.value.toUpperCase())} placeholder="Lagos (LOS)" className="w-full bg-transparent border-b border-sarvene-black/12 py-3 font-sans text-sm text-sarvene-black placeholder:text-sarvene-black/25 focus:border-sarvene-obsidian focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40 mb-2">To</label>
                <input type="text" value={to} onChange={(e) => setTo(e.target.value.toUpperCase())} placeholder="London (LHR)" className="w-full bg-transparent border-b border-sarvene-black/12 py-3 font-sans text-sm text-sarvene-black placeholder:text-sarvene-black/25 focus:border-sarvene-obsidian focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40 mb-2">Departure</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent border-b border-sarvene-black/12 py-3 font-sans text-sm text-sarvene-black focus:border-sarvene-obsidian focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40 mb-2">Passengers</label>
                <div className="flex items-center border-b border-sarvene-black/12">
                  <button type="button" onClick={() => setPassengers(Math.max(1, passengers - 1))} className="py-3 px-2 font-sans text-sm text-sarvene-black/50">-</button>
                  <span className="flex-1 text-center font-sans text-sm text-sarvene-black py-3"><span className="font-mont">{passengers}</span> {passengers === 1 ? 'Passenger' : 'Passengers'}</span>
                  <button type="button" onClick={() => setPassengers(Math.min(50, passengers + 1))} className="py-3 px-2 font-sans text-sm text-sarvene-black/50">+</button>
                </div>
              </div>
              <button 
                onClick={() => {
                  const params = new URLSearchParams();
                  if (from) params.set('from', from);
                  if (to) params.set('to', to);
                  if (date) params.set('date', date);
                  params.set('passengers', passengers.toString());
                  
                  // Store in localStorage for Request Charter button access
                  localStorage.setItem('sarvene_flight_data', JSON.stringify({
                    from, to, date, passengers
                  }));
                  
                  navigate(`/charterestimates?${params.toString()}`);
                }}
                className="bg-sarvene-obsidian text-sarvene-cream py-3.5 px-6 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-sarvene-matte transition-colors w-full md:w-auto text-center"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Netlify form — hidden, captures submissions for backend */}
          <form name="quote-request" method="POST" data-netlify="true" action="/thank-you" className="hidden">
            <input type="hidden" name="form-name" value="quote-request" />
            <input type="text" name="name" required />
            <input type="email" name="email" required />
            <input type="text" name="route" />
            <textarea name="message"></textarea>
            <button type="submit">Request Quote</button>
          </form>

          {/* Trust line */}
          <p className="font-sans text-xs text-sarvene-black/45 mt-8 max-w-2xl leading-relaxed">
            With access to over 3,500 aircraft worldwide and strategic partnerships across aviation and hospitality, Sarvene Jets delivers private travel across six continents.
          </p>
        </div>
      </div>
    </section>
  );
}
