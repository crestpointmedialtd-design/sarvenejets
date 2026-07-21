import PageLayout from '../../components/PageLayout';
import BlogLayout from '../../components/BlogLayout';

const FloatingFleetVsHomeBased = () => (
  <PageLayout
    title="Floating Fleets vs Home Based Operators: Why Charter Quotes Vary So Much"
    description="Why two charter companies can quote wildly different prices for the same route. How floating fleet and home based operators price differently, and what it means for your quote."
  >
    <BlogLayout
      title="Floating Fleets vs Home Based Operators: Why Charter Quotes Vary So Much"
      category="Industry"
      readTime="6 min"
      relatedItems={[
        { label: 'Lagos to London Route', href: '/routes/lagos-to-london', type: 'route' },
        { label: 'Cost of a Private Jet from Lagos to Dubai', href: '/insights/cost-private-jet-lagos-to-dubai', type: 'insight' },
        { label: 'How Private Jet Charter Works in Nigeria', href: '/insights/how-private-jet-charter-works-nigeria', type: 'insight' },
        { label: 'Get an Instant Estimate', href: '/charterestimates', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
    >
      <div className="space-y-8 font-sans text-gray-600 leading-relaxed">
        <p className="text-lg text-sarvene-obsidian leading-relaxed">
          Ask three charter companies for a quote on the same route and you can get three very different numbers, sometimes tens of thousands of dollars apart. Most clients assume this means someone is overcharging. Often the real explanation is simpler: the two companies are pricing against different aircraft models entirely.
        </p>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Two Ways an Aircraft Can Be Positioned</h2>
          <p className="mb-4">
            Every charter quote has to account for what the aircraft does after it drops you off. There are two dominant models in the industry, and which one applies to your quote changes the price significantly.
          </p>
          <p className="mb-3"><strong className="text-sarvene-obsidian">Home based operators</strong> keep an aircraft parked at a fixed hub. If that aircraft flies you one way, it has to fly back empty, or sit idle at the destination racking up parking and crew costs. Either way, the client pays for it. This is why a one way home based quote is often priced close to a full round trip.</p>
          <p><strong className="text-sarvene-obsidian">Floating fleet operators</strong> — names like VistaJet, NetJets and Flexjet are the best known examples — do not tie an aircraft to one base. They run their fleet like a network, moving aircraft continuously to match demand across regions. When their jet drops a client in Lagos, they are not paying to fly it back empty. They are counting on another booking out of West Africa within a day or two. That changes the maths entirely: instead of billing a full return flight, they bill the live flight hours plus a modest repositioning charge.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Why the Same Route Prices Differently by Market</h2>
          <p className="mb-3">This is not just a home based versus floating fleet question. It is also a question of how dense the aircraft network is in a given region.</p>
          <ul className="space-y-2 pl-5 list-disc">
            <li><strong className="text-sarvene-obsidian">West Africa</strong> has a thin operator network. Most aircraft are home based, so short regional hops are typically billed on a two hour minimum, round trip basis, because there is nowhere nearby for the aircraft to pick up a return booking.</li>
            <li><strong className="text-sarvene-obsidian">Europe, the US Gulf coast and the Middle East</strong> are dense floating fleet markets. Aircraft move constantly between hubs, so even a one way charter is priced close to live flight time, with a small buffer, because the operator has real confidence in finding a return booking fast.</li>
            <li><strong className="text-sarvene-obsidian">Long intercontinental legs</strong> — Lagos to London, Geneva to Cape Town — sit in between. These are usually served by the same floating fleet aircraft that work the dense markets, repositioning across continents rather than flying home empty. Priced correctly, this is meaningfully cheaper than treating the trip as a Nigeria based round trip.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Where Charter Companies Get It Wrong</h2>
          <p className="mb-4">
            The most common pricing mistake in the industry is applying one market's logic everywhere. A company that only knows the Nigerian market will price a Lagos to Cape Town charter the same way it prices Lagos to Abuja — full round trip, local rates — and the client ends up quoted two to three times what a correctly sourced floating fleet aircraft would actually cost on that corridor.
          </p>
          <p>
            The reverse mistake also happens. A company that defaults to floating fleet logic on every route can under price a short regional hop that genuinely needs a home based, round trip aircraft, and then struggles to actually deliver at the number quoted.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">What This Means for Your Quote</h2>
          <p className="mb-3">A quote that gets this right should be able to tell you, plainly:</p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>Whether the aircraft is home based or part of a floating fleet network</li>
            <li>Whether you are being billed for a live one way leg or a full round trip</li>
            <li>Why that billing model applies to your specific route, not just a flat house rate</li>
          </ul>
          <p className="mt-4">
            If an advisor cannot answer those three questions, the number in front of you was probably built on one market's assumptions, not the route you actually asked about.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Getting an Accurate Estimate</h2>
          <p>
            Sarvene Jets prices routes against the operator model that actually applies — home based, regional floating fleet, or long haul repositioning — rather than one flat house rate applied everywhere. Use the instant estimator for a route specific figure, or speak directly with an advisor for a formal quote.
          </p>
        </div>
      </div>
    </BlogLayout>
  </PageLayout>
);

export default FloatingFleetVsHomeBased;
