import { ArrowRight } from 'lucide-react';
import RelatedLinks from './RelatedLinks';
import { scrollToSection } from '../utils/scrollToSection';
interface FAQ {
  q: string;
  a: string;
}

interface RelatedItem {
  label: string;
  href: string;
  type: 'route' | 'insight' | 'estimator' | 'contact';
}

interface RoutePageProps {
  from: string;
  to: string;
  fromCode: string;
  toCode: string;
  flightTime: string;
  routeType: string;
  distance: string;
  recommendedAircraft: string;
  whyRoute: string;
  intro: string;
  aircraftDetails: { type: string; description: string }[];
  faqs: FAQ[];
  relatedItems?: RelatedItem[];
}

const RoutePage = ({
  from, to, fromCode, toCode,
  flightTime, routeType, distance,
  recommendedAircraft, whyRoute, intro,
  aircraftDetails, faqs, relatedItems,
}: RoutePageProps) => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-sarvene-matte py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/30 mb-4">
            Private Charter Route
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-normal tracking-tight mb-6 max-w-3xl">
            Private Jet Charter from {from} to {to}
          </h1>
          <p className="font-sans text-sm text-white/50 leading-relaxed max-w-2xl mb-10">
            {intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
  onClick={() => scrollToSection('booking-estimator')}
  className="inline-flex items-center gap-2 px-8 py-3.5 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
  style={{ backgroundColor: '#C9A84C', color: '#1a1a18' }}
>
  Get Instant Estimate <ArrowRight className="w-3.5 h-3.5" />
</button>
            <a
              href="mailto:charter@sarvenejets.com?subject=Charter%20Enquiry&body=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20private%20charter%20flight."
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
            >
              Speak to an Advisor
            </a>
          </div>
        </div>
      </section>

      {/* Flight Overview */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">Flight Time</p>
              <p className="font-serif text-2xl text-sarvene-obsidian">{flightTime}</p>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">Route Type</p>
              <p className="font-serif text-2xl text-sarvene-obsidian">{routeType}</p>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2">Distance</p>
              <p className="font-serif text-2xl text-sarvene-obsidian">{distance}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft Options */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4">Aircraft</p>
              <h2 className="font-serif text-3xl md:text-4xl text-sarvene-obsidian font-normal tracking-tight mb-6">
                Choosing the Right Aircraft
              </h2>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-8">
                The right aircraft depends on passenger count, luggage, range requirements and your schedule. Our advisors will match you to the most suitable option.
              </p>
              <div className="space-y-6">
                {aircraftDetails.map((a) => (
                  <div key={a.type} className="border-l-2 border-gray-100 pl-5">
                    <p className="font-sans text-xs font-semibold tracking-wide text-sarvene-obsidian mb-1">{a.type}</p>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing + CTA */}
            <div className="bg-gray-50 p-8 md:p-10 flex flex-col">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4">Pricing</p>
              <h3 className="font-serif text-2xl text-sarvene-obsidian font-normal mb-4">
                Transparent Estimates
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                Charter pricing on this route depends on aircraft category, availability, timing and any additional services required. All estimates include repositioning fees for the aircraft to return to base.
              </p>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-8">
                Use our real-time estimator for an instant figure, or speak directly with an advisor for a formal quote.
              </p>
              <button
  onClick={() => scrollToSection('booking-estimator')}
  className="inline-flex items-center justify-center gap-2 bg-sarvene-obsidian text-white px-8 py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:opacity-90 transition-opacity mb-4"
>
  Get Instant Estimate <ArrowRight className="w-3.5 h-3.5" />
</button>
              <a
                href="mailto:charter@sarvenejets.com?subject=Formal%20Quote%20Request&body=Hi%2C%20I%20would%20like%20a%20formal%20quote%20for%20a%20private%20charter%20flight."
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-sarvene-obsidian px-8 py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors"
              >
                Request Formal Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Route */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 max-w-3xl">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4">Context</p>
          <h2 className="font-serif text-3xl md:text-4xl text-sarvene-obsidian font-normal tracking-tight mb-6">
            Why This Route
          </h2>
          <p className="font-sans text-sm text-gray-500 leading-relaxed">{whyRoute}</p>
        </div>
      </section>

      {/* Why Sarvene */}
      <section className="py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4">Why Sarvene Jets</p>
            <p className="font-serif text-2xl text-sarvene-obsidian font-normal leading-relaxed mb-6">
              With access to over 3,500 aircraft worldwide and strategic partnerships across aviation and hospitality, Sarvene Jets delivers private travel across six continents.
            </p>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              Based in Lagos, we understand this market. We know the operators, the routes, the airport handlers and the variables that make the difference between a smooth departure and a difficult one. Every booking is managed from enquiry to touchdown.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4">Questions</p>
          <h2 className="font-serif text-3xl text-sarvene-obsidian font-normal tracking-tight mb-10">
            Frequently Asked
          </h2>
          <div className="space-y-8 max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-8">
                <p className="font-sans text-sm font-semibold text-sarvene-obsidian mb-3">{faq.q}</p>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {relatedItems && relatedItems.length > 0 && (
        <div className="bg-white py-12 md:py-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <RelatedLinks title="Continue Exploring" items={relatedItems} />
          </div>
        </div>
      )}

      <section className="py-16 md:py-20 bg-sarvene-matte border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="font-serif text-3xl md:text-4xl text-white font-normal mb-6">
            Ready to fly {from} to {to}?
          </p>
          <p className="font-sans text-sm text-white/50 mb-10 max-w-xl mx-auto">
            Get an instant estimate or speak directly with a Sarvene aviation advisor. Available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
  onClick={() => scrollToSection('booking-estimator')}
  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
  style={{ backgroundColor: '#C9A84C', color: '#0A0A0A' }}
>
  Get Instant Estimate <ArrowRight className="w-3.5 h-3.5" />
</button>
            <a
              href="mailto:charter@sarvenejets.com?subject=Charter%20Enquiry&body=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20private%20charter%20flight."
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
            >
              Speak to an Advisor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoutePage;
