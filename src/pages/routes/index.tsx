import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import { scrollToSection } from '../../utils/scrollToSection';
const routes = [
  {
    from: 'Lagos',
    to: 'Abuja',
    slug: 'lagos-to-abuja',
    time: '1 hour',
    type: 'Domestic',
    from_code: 'LOS',
    to_code: 'ABV',
    description: 'Nigeria\'s most-flown private charter route. Same-day booking available.',
  },
  {
    from: 'Lagos',
    to: 'London',
    slug: 'lagos-to-london',
    time: '6.5 – 7 hours',
    type: 'Intercontinental',
    from_code: 'LOS',
    to_code: 'LHR',
    description: 'Non-stop on a heavy jet. Nigeria\'s most significant intercontinental route.',
  },
  {
    from: 'Lagos',
    to: 'Dubai',
    slug: 'lagos-to-dubai',
    time: '6 – 8 hours',
    type: 'Intercontinental',
    from_code: 'LOS',
    to_code: 'DXB',
    description: 'Commerce, investment and movement. One of West Africa\'s busiest long-haul routes.',
  },
  {
    from: 'Lagos',
    to: 'Accra',
    slug: 'lagos-to-accra',
    time: 'Under 1 hour',
    type: 'Regional',
    from_code: 'LOS',
    to_code: 'ACC',
    description: 'West Africa\'s defining intra-regional business corridor.',
  },
  {
    from: 'Abuja',
    to: 'Nairobi',
    slug: 'abuja-to-nairobi',
    time: '~5 hours',
    type: 'Pan-African',
    from_code: 'ABV',
    to_code: 'NBO',
    description: 'Nigeria to East Africa\'s most important business hub. Direct on a midsize jet.',
  },
];

const RoutesIndex = () => (
  <PageLayout
    title="Private Jet Charter Routes from Nigeria"
    description="Popular private jet charter routes from Lagos and Abuja. Domestic, regional and intercontinental. Instant estimates available. Sarvene Jets."
  >
    {/* Header */}
    <section className="bg-sarvene-matte py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/30 mb-4">
          Routes
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-white font-normal tracking-tight mb-6 max-w-2xl">
          Popular Private Jet Routes
        </h1>
        <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xl">
          From domestic hops to intercontinental journeys. Every route handled with the same standard — aircraft sourced, permits arranged, ground logistics coordinated.
        </p>
      </div>
    </section>

    {/* Routes Grid */}
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {routes.map((route) => (
            <Link
              key={route.slug}
              to={`/routes/${route.slug}`}
              className="group bg-white p-8 md:p-10 hover:bg-gray-50 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">
                  {route.type}
                </span>
                <span className="font-sans text-[10px] text-gray-400">{route.time}</span>
              </div>
              <p className="font-serif text-2xl text-sarvene-obsidian mb-2">
                {route.from} → {route.to}
              </p>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-8 flex-1">
                {route.description}
              </p>
              <span className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-sarvene-obsidian group-hover:gap-3 transition-all">
                View Route <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <p className="font-serif text-2xl md:text-3xl text-sarvene-obsidian mb-4">
          Don't see your route?
        </p>
        <p className="font-sans text-sm text-gray-500 mb-8 max-w-lg mx-auto">
          Sarvene Jets operates to over 180 airports worldwide. Use the estimator for any route or speak to an advisor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
  onClick={() => scrollToSection('booking-estimator')}
  className="inline-flex items-center justify-center gap-2 bg-sarvene-obsidian text-white px-8 py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
>
  Open Estimator <ArrowRight className="w-3.5 h-3.5" />
</button>
          <a
            href="mailto:charter@sarvenejets.com?subject=Charter%20Enquiry&body=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20private%20charter%20flight."
            className="inline-flex items-center justify-center gap-2 border border-gray-200 text-sarvene-obsidian px-8 py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors"
          >
            Speak to an Advisor
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default RoutesIndex;
