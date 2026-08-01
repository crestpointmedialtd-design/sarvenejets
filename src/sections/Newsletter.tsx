import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nl-content', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="bg-sarvene-matte py-24 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex justify-center">
        <div className="nl-content w-full max-w-2xl text-left flex flex-col items-start">

          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/30 mb-6">
            Stay Informed
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-white font-normal tracking-tight mb-10 leading-tight">
            Empty legs. Market updates.<br />
            <em className="text-sarvene-sage">First.</em>
          </h2>

          {!submitted ? (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex items-stretch max-w-xl w-full overflow-hidden mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-white text-sarvene-black font-sans text-sm px-5 py-4 placeholder:text-sarvene-black/30 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-sarvene-sage text-sarvene-black font-sans text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? 'Subscribing...' : <>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>}
                </button>
              </form>

              <p className="font-sans text-[11px] text-white/25 mt-5 leading-relaxed text-left w-full">
                marketing@sarvenejets.com · No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="max-w-xl py-6 border-t border-white/10">
              <p className="font-serif text-xl text-white mb-2">You're on the list.</p>
              <p className="font-sans text-sm text-white/40">Empty legs and market updates — you'll hear from us first.</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
