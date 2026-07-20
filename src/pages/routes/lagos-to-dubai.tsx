import PageLayout from '../../components/PageLayout';
import RoutePage from '../../components/RoutePage';

const LagosDubai = () => (
  <PageLayout
    title="Private Jet Charter Lagos to Dubai"
    description="Private jet charter from Lagos to Dubai. 6–8 hours flight time, 3,660 miles. Starts from $100,000 inclusive of repositioning. Sarvene Jets."
  >
    <RoutePage
      from="Lagos"
      to="Dubai"
      fromCode="LOS"
      toCode="DXB"
      flightTime="6 – 8 hours"
      routeType="Intercontinental"
      distance="5,893 km / 3,662 miles"
      recommendedAircraft="Heavy Jet"
      intro="Lagos to Dubai is a route defined by commerce, investment and movement. Nigerian entrepreneurs, investors and high-net-worth families travel this corridor for trade, real estate, hospitality and business. A private charter gives full control over the journey — departure time, cabin configuration and arrival terminal."
      whyRoute="Dubai has become one of the most significant international hubs for Nigerian business and investment. Real estate transactions, commodity trading and financial services draw a consistent flow of high-net-worth Nigerians to the UAE. The route is equally relevant for personal travel — Dubai's infrastructure is among the most developed in the world, and Nigerian travellers are among its highest-spending visitors. A private charter on this route means no layovers, no connection risk and a cabin built around your requirements."
      aircraftDetails={[
        {
          type: 'Heavy Jet — Recommended',
          description: 'A heavy jet is well-matched to this route distance. With a range of 4,000–7,500 nautical miles and a flight time of approximately 7 hours, heavy jets including the Gulfstream G650, Challenger 650 and Falcon 7X can operate this sector comfortably with a full passenger complement and luggage.',
        },
        {
          type: 'Midsize Jet',
          description: 'A midsize jet can cover this route but may require a technical fuel stop depending on the specific aircraft and payload. Flight time increases accordingly. Suitable for smaller groups where the additional stop is manageable.',
        },
        {
          type: 'Ultra Long Range',
          description: 'For larger delegations or those seeking the highest standard of inflight comfort, ultra long range aircraft offer multiple cabin zones, permanent bedrooms and shower facilities. The Global 7500 and Gulfstream G700 are the benchmark options on this sector.',
        },
      ]}
      relatedItems={[
        { label: 'Lagos to London', href: '/routes/lagos-to-london', type: 'route' },
        { label: 'Abuja to Nairobi', href: '/routes/abuja-to-nairobi', type: 'route' },
        { label: 'Cost of a Private Jet from Lagos to Dubai', href: '/insights/cost-lagos-to-dubai', type: 'insight' },
        { label: 'Private Jet vs First Class', href: '/insights/private-jet-vs-first-class', type: 'insight' },
        { label: 'Get an Instant Estimate', href: '/#booking-estimator', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
      faqs={[
        {
          q: 'How much does a private jet from Lagos to Dubai cost?',
          a: 'Charter starts from approximately $100,000 for a heavy jet, inclusive of repositioning fees. Flight time is 6 to 8 hours depending on aircraft type and range. Use the estimator for an instant figure or speak to an advisor for a formal quote based on your specific requirements.',
        },
        {
          q: 'Which Dubai airport does the private charter arrive at?',
          a: 'Private charters typically arrive at Al Maktoum International Airport (DWC) or Dubai International Airport (DXB) private terminals. Dubai World Central is often preferred for private aviation due to dedicated FBO facilities. Your advisor will confirm based on your onward arrangements.',
        },
        {
          q: 'Can Sarvene Jets arrange ground transfers in Dubai?',
          a: 'Yes. Sarvene Jets coordinates ground transfers and hotel arrangements on arrival in Dubai. Speak to your advisor at the time of booking and every detail will be handled.',
        },
      ]}
    />
  </PageLayout>
);

export default LagosDubai;
