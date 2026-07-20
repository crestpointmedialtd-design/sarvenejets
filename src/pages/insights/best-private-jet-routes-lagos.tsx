import PageLayout from '../../components/PageLayout';
import BlogLayout from '../../components/BlogLayout';
import { Link } from 'react-router';

const BestRoutesLagos = () => (
  <PageLayout
    title="The Best Private Jet Routes from Lagos"
    description="The most important private jet routes from Lagos — domestic, regional and intercontinental. Flight times, aircraft and what makes each one worth knowing. Sarvene Jets."
  >
    
    <BlogLayout
      title="The Best Private Jet Routes from Lagos"
      category="Industry"
      readTime="5 min"
      relatedItems={[
        { label: 'Lagos to Abuja Route', href: '/routes/lagos-to-abuja', type: 'route' },
        { label: 'Lagos to London Route', href: '/routes/lagos-to-london', type: 'route' },
        { label: 'Lagos to Dubai Route', href: '/routes/lagos-to-dubai', type: 'route' },
        { label: 'Lagos to Accra Route', href: '/routes/lagos-to-accra', type: 'route' },
        { label: 'Get an Instant Estimate', href: '/#booking-estimator', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
    >
      <div className="space-y-8 font-sans text-gray-600 leading-relaxed">
        <p className="text-lg text-sarvene-obsidian leading-relaxed">
          Lagos is the operational centre of West African private aviation. The routes that matter most — by volume, by value and by the calibre of passenger flying them — radiate from this city. Here is a clear picture of the most important ones.
        </p>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Lagos to Abuja — The Domestic Standard</h2>
          <p className="mb-3"><strong>Flight time:</strong> 1 hour &nbsp;|&nbsp; <strong>Aircraft:</strong> Light jet &nbsp;|&nbsp; <strong>Starts from:</strong> $11,000</p>
          <p className="mb-4">The most frequently chartered domestic route in Nigeria. Lagos and Abuja represent the country's commercial and governmental centres of gravity, and the executives, political figures and business owners who operate across both cities rely on this route more than any other.</p>
          <p>Commercial flights between Lagos and Abuja operate regularly but remain subject to delays, diversions and the unpredictability that comes with high-volume domestic aviation in Nigeria. A private charter covers the same distance in one hour, from a private terminal, on a schedule you control.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Lagos to London — The Intercontinental Flagship</h2>
          <p className="mb-3"><strong>Flight time:</strong> 6.5–7 hours &nbsp;|&nbsp; <strong>Aircraft:</strong> Heavy jet (recommended) &nbsp;|&nbsp; <strong>Starts from:</strong> $120,000</p>
          <p className="mb-4">London is Nigeria's most significant international business and diaspora hub. Legal, financial and commercial transactions between the two cities run into billions annually. The private individuals at the centre of those transactions require a standard of travel that commercial aviation is not built to provide.</p>
          <p>A heavy jet on this route operates non-stop — no refuelling stop, no connection risk, full cabin. The Gulfstream G650 and Falcon 7X are the benchmark options. A midsize jet is available at a lower price point but requires a technical stop.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Lagos to Dubai — Commerce and Lifestyle</h2>
          <p className="mb-3"><strong>Flight time:</strong> 6–8 hours &nbsp;|&nbsp; <strong>Aircraft:</strong> Heavy jet &nbsp;|&nbsp; <strong>Starts from:</strong> $100,000</p>
          <p className="mb-4">Dubai has become one of the most important international destinations for Nigerian high-net-worth travellers — for business, real estate investment, hospitality and family visits. The route is one of the busiest in West African private aviation.</p>
          <p>Flight time varies between 6 and 8 hours depending on aircraft type and routing. A heavy jet covers the distance comfortably with full payload. This is a route where aircraft selection significantly affects the inflight experience — particularly for groups of eight or more.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Lagos to Accra — The Regional Corridor</h2>
          <p className="mb-3"><strong>Flight time:</strong> Under 1 hour &nbsp;|&nbsp; <strong>Aircraft:</strong> Light jet &nbsp;|&nbsp; <strong>Starts from:</strong> $13,000</p>
          <p className="mb-4">Lagos to Accra is the defining intra-West African business route. Nigeria and Ghana share deep commercial, cultural and creative ties, and the executives, media professionals and entrepreneurs who move between the two cities regularly treat this route as a commute rather than a trip.</p>
          <p>A light jet on this route is efficient, cost-effective and entirely suited to the distance. Same-day return bookings are common. Commercial alternatives are available but often indirect or subject to delays that a private charter eliminates entirely.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Lagos to Nairobi — Pan-African Connectivity</h2>
          <p className="mb-3"><strong>Flight time:</strong> ~5 hours &nbsp;|&nbsp; <strong>Aircraft:</strong> Midsize or heavy jet &nbsp;|&nbsp; <strong>Route type:</strong> Pan-African</p>
          <p className="mb-4">As African economic integration accelerates, the Lagos–Nairobi corridor is emerging as one of the continent's most significant business routes. Nigerian investors, development finance professionals and technology executives increasingly need direct access to East Africa's hub city.</p>
          <p>Commercial connections between Lagos and Nairobi are indirect and time-consuming. A private charter on a midsize jet covers the route in approximately 5 hours — direct, no connections, on your schedule.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">How to Find the Right Route and Aircraft</h2>
          <p>
            With access to over 3,500 aircraft worldwide and strategic partnerships across aviation and hospitality, Sarvene Jets delivers private travel across six continents. Use the real-time estimator to get an instant figure for any of these routes, or speak to an advisor directly for a formal quote on your specific requirements.
          </p>
        </div>
      </div>
    </BlogLayout>
  </PageLayout>
);

export default BestRoutesLagos;
