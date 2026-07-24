import PageLayout from '../../components/PageLayout';
import RoutePage from '../../components/RoutePage';

const LagosAbuja = () => (
  <PageLayout
    title="Private Jet Charter Lagos to Abuja"
    description="Private jet charter from Lagos to Abuja. One hour flight, same-day booking available. Starts from $11,000 inclusive of repositioning. Sarvene Jets."
  >
    <RoutePage
      from="Lagos"
      to="Abuja"
      fromCode="LOS"
      toCode="ABV"
      flightTime="1 hour"
      routeType="Domestic"
      distance="476 km / 296 miles"
      recommendedAircraft="Light Jet"
      intro="Lagos to Abuja is Nigeria's most-flown private charter route. For executives, politicians and business owners who cannot afford to lose half a day to airport queues and commercial delays, a private charter on this route changes the calculation entirely."
      whyRoute="Lagos and Abuja are the two centres of gravity in Nigerian business and government. The decisions that shape industries, policy and commerce move between these two cities daily. A commercial return trip can consume an entire working day. A private charter covers the same journey in one hour each way, on your schedule, with no connection risk and no waiting. For corporate travellers on retainer programmes, this route is often the most frequently flown of the year."
      aircraftDetails={[
        {
          type: 'Light Jet — Recommended',
          description: 'Ideal for this route. The Lagos–Abuja leg takes under one hour for any light jet in the fleet. Seats 4–8 passengers comfortably. Citation CJ4, Phenom 300E and Learjet 75 are typical options. Efficient, fast and well-suited to the route distance.',
        },
        {
          type: 'Midsize Jet',
          description: 'Available on request. A midsize jet covers this route with the same speed but offers a larger cabin and more luggage capacity. Challenger 3500, Citation Latitude and Hawker 800XP are typical options. Suited to groups or passengers with substantial baggage requirements.',
        },
      ]}
      faqs={[
        {
          q: 'How much does a private jet from Lagos to Abuja cost?',
          a: 'Charter starts from $11,000 for a light jet, inclusive of repositioning fees for the aircraft to return to base. Final pricing depends on aircraft type, availability and timing. Use the estimator for an instant figure or contact an advisor for a formal quote.',
        },
        {
          q: 'How quickly can I book a Lagos to Abuja private charter?',
          a: 'Same-day booking is available on this route subject to aircraft availability. Sarvene Jets can typically confirm a flight within the hour. Contact our charter team directly for urgent departures.',
        },
        {
          q: 'What airports are used for Lagos to Abuja private charters?',
          a: "Departures operate from Murtala Muhammed International Airport (LOS) or the general aviation terminal in Lagos, arriving at Nnamdi Azikiwe International Airport (ABV) in Abuja. Private terminal handling is available at both airports.",
        },
      ]}
      relatedItems={[
        { label: 'Lagos to Accra', href: '/routes/lagos-to-accra', type: 'route' },
        { label: 'Lagos to London', href: '/routes/lagos-to-london', type: 'route' },
        { label: 'How Private Jet Charter Works in Nigeria', href: '/insights/how-private-jet-charter-works-nigeria', type: 'insight' },
        { label: 'Best Private Jet Routes from Lagos', href: '/insights/best-private-jet-routes-lagos', type: 'insight' },
        { label: 'Get an Instant Estimate', href: '/charterestimates', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
    />
  </PageLayout>
);

export default LagosAbuja;
