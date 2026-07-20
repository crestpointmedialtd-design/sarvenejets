import PageLayout from '../../components/PageLayout';
import RoutePage from '../../components/RoutePage';

const LagosLondon = () => (
  <PageLayout
    title="Private Jet Charter Lagos to London"
    description="Private jet charter from Lagos to London. Heavy jet recommended for non-stop service. Starts from $120,000 inclusive of repositioning. Sarvene Jets."
  >
    <RoutePage
      from="Lagos"
      to="London"
      fromCode="LOS"
      toCode="LHR"
      flightTime="6.5 – 7 hours"
      routeType="Intercontinental"
      distance="4,679 km / 2,907 miles"
      recommendedAircraft="Heavy Jet"
      intro="Lagos to London is one of the most important intercontinental routes on the African continent. For Nigerian executives, diaspora travellers and high-net-worth individuals who move regularly between both cities, a private charter eliminates the variables that commercial travel cannot control."
      whyRoute="London is Nigeria's most significant international business and diaspora hub. Billions in trade, investment, legal and financial transactions flow between Lagos and London annually. The individuals at the centre of those transactions — executives, legal counsel, private equity principals, political figures — require a level of discretion, flexibility and reliability that commercial aviation is structurally unable to provide. A private charter on this route means departing from the private terminal, no queues, passport control in minutes, and a cabin configured around your schedule."
      aircraftDetails={[
        {
          type: 'Heavy Jet — Recommended',
          description: 'A heavy jet is the recommended aircraft for this route. With a range of 4,000–7,500 nautical miles, a heavy jet can operate Lagos to London non-stop. Fully equipped galley, separate seating areas, stand-up cabin. Gulfstream G650, Falcon 7X and Challenger 650 are typical options. Seats 10–16 passengers.',
        },
        {
          type: 'Midsize Jet',
          description: 'A midsize jet can fly this route but will require a technical stop for refuelling, typically in Casablanca, Lisbon or the Canary Islands. This adds time to the journey. Challenger 3500, Citation Latitude and Hawker 800XP are typical options. Suitable for groups where the technical stop is acceptable.',
        },
        {
          type: 'Ultra Long Range',
          description: 'For larger groups or passengers who require multiple cabin zones, a private bedroom and shower facilities, an ultra long range jet — Global 7500 or Gulfstream G700 — offers the highest standard of intercontinental travel on this route.',
        },
      ]}
      relatedItems={[
        { label: 'Lagos to Dubai', href: '/routes/lagos-to-dubai', type: 'route' },
        { label: 'Lagos to Accra', href: '/routes/lagos-to-accra', type: 'route' },
        { label: 'Cost of a Private Jet from Lagos to London', href: '/insights/cost-private-jet-lagos-to-london', type: 'insight' },
        { label: 'Private Jet vs First Class', href: '/insights/private-jet-vs-first-class', type: 'insight' },
        { label: 'Get an Instant Estimate', href: '/#booking-estimator', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
      faqs={[
        {
          q: 'How much does a private jet from Lagos to London cost?',
          a: 'A heavy jet charter from Lagos to London starts from approximately $120,000, inclusive of repositioning fees. A midsize jet with a technical refuelling stop starts from approximately $90,000. Final pricing depends on aircraft type, group size and timing. Use the estimator for an instant figure or request a formal quote.',
        },
        {
          q: 'Which airport in London does Sarvene Jets fly to?',
          a: 'Most private charters from Lagos arrive at London Farnborough (EGLF) or London Luton (LTN), both of which offer dedicated private terminal facilities. London Heathrow (LHR) and London Gatwick (LGW) are also available subject to slot availability. Your advisor will confirm the optimal arrival airport based on your final destination.',
        },
        {
          q: 'Do I need a visa to fly privately from Lagos to London?',
          a: 'Yes. A valid UK visa is required for Nigerian passport holders regardless of how you travel. Sarvene Jets can coordinate with ground handlers to facilitate expedited immigration processing at the private terminal, but visa arrangement remains the passenger\'s responsibility.',
        },
      ]}
    />
  </PageLayout>
);

export default LagosLondon;
