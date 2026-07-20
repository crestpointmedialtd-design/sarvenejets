import PageLayout from '../../components/PageLayout';
import BlogLayout from '../../components/BlogLayout';

const CostLagosDubai = () => (
  <PageLayout
    title="Cost of a Private Jet from Lagos to Dubai"
    description="How much does a private jet from Lagos to Dubai cost? Pricing, aircraft options and key factors explained. Starts from $100,000. Sarvene Jets."
  >
    <BlogLayout
      title="Cost of a Private Jet from Lagos to Dubai"
      category="Pricing"
      readTime="4 min"
      relatedItems={[
        { label: 'Lagos to Dubai Route', href: '/routes/lagos-to-dubai', type: 'route' },
        { label: 'Lagos to London Route', href: '/routes/lagos-to-london', type: 'route' },
        { label: 'Cost of a Private Jet from Lagos to London', href: '/insights/cost-private-jet-lagos-to-london', type: 'insight' },
        { label: 'Private Jet vs First Class', href: '/insights/private-jet-vs-first-class', type: 'insight' },
        { label: 'Get an Instant Estimate', href: '/#booking-estimator', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
    >
      <div className="space-y-8 font-sans text-gray-600 leading-relaxed">
        <p className="text-lg text-sarvene-obsidian leading-relaxed">
          Lagos to Dubai is one of the most-chartered intercontinental routes from West Africa. The corridor connects two of the world's most commercially active cities for Nigerian business, and understanding its cost structure is straightforward once you know the variables.
        </p>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">The Route in Numbers</h2>
          <p className="mb-3">Lagos (LOS) to Dubai (DXB) covers approximately 3,660 miles — just under 5,900 kilometres. Flight time on a heavy jet is between 6 and 8 hours depending on aircraft type, routing and wind conditions. This places it firmly in heavy jet territory for a direct, non-stop service.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">What the Charter Costs</h2>
          <p className="mb-4">A private charter from Lagos to Dubai starts from approximately $100,000, inclusive of repositioning fees. That figure covers the full aircraft — not per person — and includes the cost of the aircraft returning to its base after delivery.</p>
          <p>For a group of eight to ten passengers, that translates to approximately $10,000–$12,500 per person — comparable to a high-end first class return on a commercial carrier, but with a fundamentally different experience: private terminal, any departure time, full cabin to your party, no connections.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Aircraft Options</h2>

          <div className="border-l-2 border-gray-100 pl-5 mb-6">
            <p className="font-semibold text-sarvene-obsidian mb-1">Heavy Jet — Recommended</p>
            <p>At 3,660 miles, a heavy jet is the natural match for this route. It covers the distance with the right range margin, offers a full stand-up cabin with galley and separate seating areas, and carries up to 16 passengers. The Gulfstream G650, Challenger 650 and Falcon 7X are typical heavy jet options. Pricing from approximately $100,000 inclusive of repositioning.</p>
          </div>

          <div className="border-l-2 border-gray-100 pl-5 mb-6">
            <p className="font-semibold text-sarvene-obsidian mb-1">Midsize Jet</p>
            <p>A midsize jet may require a fuel stop on this route depending on the specific aircraft and payload. This adds time but reduces the base cost. Suitable for smaller groups where the technical stop is acceptable.</p>
          </div>

          <div className="border-l-2 border-gray-100 pl-5">
            <p className="font-semibold text-sarvene-obsidian mb-1">Ultra Long Range</p>
            <p>For larger delegations or passengers who travel with significant luggage and require the highest inflight standard — private bedroom, shower facilities, multiple cabin zones — an ultra long range jet is available on this route at a higher price point.</p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">What Drives the Final Number</h2>
          <p className="mb-3">Several variables move the price above or below the starting figure:</p>
          <ul className="space-y-2 pl-5 list-disc">
            <li><strong className="text-sarvene-obsidian">Aircraft availability in the region.</strong> If the right heavy jet needs to position from outside Nigeria, that positioning cost is passed on.</li>
            <li><strong className="text-sarvene-obsidian">Timing.</strong> Last-minute bookings during high-demand periods carry a premium.</li>
            <li><strong className="text-sarvene-obsidian">Catering and ground services.</strong> Standard VIP catering is typically included. Upgrades, special dietary requirements and ground transfers are costed separately.</li>
            <li><strong className="text-sarvene-obsidian">Dubai arrival terminal.</strong> Al Maktoum International (DWC) and Dubai International (DXB) private terminals carry different handling fees.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Getting an Accurate Quote</h2>
          <p>
            Charter pricing on this route reflects live market conditions. The most accurate figure comes from a real-time estimator or a formal quote from an advisor with active access to heavy jets operating in and out of West Africa. With access to over 3,500 aircraft worldwide and strategic partnerships across aviation and hospitality, Sarvene Jets delivers private travel across six continents — and can provide a formal quote on this route within the hour.
          </p>
        </div>
      </div>
    </BlogLayout>
  </PageLayout>
);

export default CostLagosDubai;
