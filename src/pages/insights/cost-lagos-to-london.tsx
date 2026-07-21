import PageLayout from '../../components/PageLayout';
import BlogLayout from '../../components/BlogLayout';

const CostLagosLondon = () => (
  <PageLayout
    title="Cost of a Private Jet from Lagos to London"
    description="How much does a private jet from Lagos to London cost? A complete breakdown of aircraft options, pricing factors and what to expect. Sarvene Jets."
  >
    <BlogLayout
      title="Cost of a Private Jet from Lagos to London"
      category="Pricing"
      readTime="5 min"
      relatedItems={[
        { label: 'Lagos to London Route', href: '/routes/lagos-to-london', type: 'route' },
        { label: 'Lagos to Dubai Route', href: '/routes/lagos-to-dubai', type: 'route' },
        { label: 'Cost of a Private Jet from Lagos to Dubai', href: '/insights/cost-lagos-to-dubai', type: 'insight' },
        { label: 'Private Jet vs First Class', href: '/insights/private-jet-vs-first-class', type: 'insight' },
        { label: 'Get an Instant Estimate', href: '/#booking-estimator', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
    >
      <div className="space-y-8 font-sans text-gray-600 leading-relaxed">
        <p className="text-lg text-sarvene-obsidian leading-relaxed">
          Lagos to London is the most consequential intercontinental private jet route in West Africa. Understanding what it costs — and what determines that cost — is the starting point for anyone seriously considering it.
        </p>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">What Determines the Cost</h2>
          <p className="mb-4">Private jet pricing is not a fixed number. Four variables shape every quote on this route:</p>
          <p className="mb-3"><strong className="text-sarvene-obsidian">Aircraft category.</strong> The single biggest variable. A midsize jet costs significantly less per hour than a heavy jet, but on a route of this distance, aircraft selection also affects whether you fly non-stop or need a fuel stop. That distinction has real implications for journey time and total cost.</p>
          <p className="mb-3"><strong className="text-sarvene-obsidian">Repositioning fees.</strong> In private aviation, the client covers the cost of the aircraft returning to its base after the flight. This effectively means you are paying for a round trip even on a one-way journey. All legitimate quotes should include this. If a quote does not mention repositioning, ask directly.</p>
          <p className="mb-3"><strong className="text-sarvene-obsidian">Availability and timing.</strong> Last-minute bookings on a route with limited available heavy jets in West Africa will cost more. Planning 48–72 hours ahead gives access to better availability and stronger pricing.</p>
          <p><strong className="text-sarvene-obsidian">Group size and additional services.</strong> Catering upgrades, ground transfers, special handling and visa coordination all add to the final invoice. Know what is included before you accept a quote.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Aircraft Options on This Route</h2>

          <div className="border-l-2 border-gray-100 pl-5 mb-6">
            <p className="font-semibold text-sarvene-obsidian mb-1">Midsize Jet</p>
            <p>A midsize jet can operate Lagos to London but will require a technical stop for refuelling — typically in Casablanca, Lisbon or the Canary Islands. This adds between 45 minutes and 1.5 hours to the journey. The trade-off is cost: a midsize jet is the lower-cost option on this route, starting from approximately $54,000 inclusive of repositioning. Suitable if the technical stop is operationally acceptable.</p>
          </div>

          <div className="border-l-2 border-gray-100 pl-5 mb-6">
            <p className="font-semibold text-sarvene-obsidian mb-1">Heavy Jet — Recommended</p>
            <p>A heavy jet is the recommended aircraft for this route. With sufficient range to fly Lagos to London non-stop, a heavy jet eliminates the refuelling stop, reduces total journey time and offers a significantly larger cabin — stand-up height, fully equipped galley, separate seating areas. Pricing starts from approximately $62,000 inclusive of repositioning. The Challenger 650 and Legacy 650 are typical heavy jet options on this sector.</p>
          </div>

          <div className="border-l-2 border-gray-100 pl-5">
            <p className="font-semibold text-sarvene-obsidian mb-1">Ultra Long Range</p>
            <p>For larger groups or those requiring a private bedroom, shower facilities and multiple cabin zones at altitude, an ultra long range jet — Global 7500, Gulfstream G700 — represents the highest standard on this route. Pricing is higher but the experience is categorically different.</p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">What to Ask Before You Accept a Quote</h2>
          <p className="mb-3">Any quote for this route should answer these questions clearly:</p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>Does the price include repositioning fees?</li>
            <li>Is the aircraft non-stop or does it require a technical fuel stop?</li>
            <li>What is included in catering — and what is extra?</li>
            <li>Which London airport does the aircraft arrive at?</li>
            <li>Are handling fees at both ends included?</li>
          </ul>
          <p className="mt-4">A well-structured quote is transparent on all of these. A vague quote is worth clarifying before proceeding.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Getting an Accurate Figure</h2>
          <p>
            Charter pricing on this route moves with availability, aircraft positioning and timing. The most accurate way to get a current figure is to use a real-time estimator or request a formal quote from an operator with active access to heavy jets in the West African market.
          </p>
          <p className="mt-4">
            With access to over 3,500 aircraft worldwide and strategic partnerships across aviation and hospitality, Sarvene Jets delivers private travel across six continents. Our advisors have direct operator relationships and can provide a formal quote on this route within the hour.
          </p>
        </div>
      </div>
    </BlogLayout>
  </PageLayout>
);

export default CostLagosLondon;
