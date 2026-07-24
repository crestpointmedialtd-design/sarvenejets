import PageLayout from '../../components/PageLayout';
import RoutePage from '../../components/RoutePage';

const LagosAccra = () => (
  <PageLayout
    title="Private Jet Charter Lagos to Accra"
    description="Private jet charter from Lagos to Accra, Ghana. Under 1 hour flight. Same-day booking available. Starts from $13,000. Sarvene Jets."
  >
    <RoutePage
      from="Lagos"
      to="Accra"
      fromCode="LOS"
      toCode="ACC"
      flightTime="Under 1 hour"
      routeType="Regional / West Africa"
      distance="370 km / 230 miles"
      recommendedAircraft="Light Jet"
      intro="Lagos to Accra is the defining intra-West African business route. Two of the continent's most economically significant cities, separated by less than an hour of flight time. For executives, entrepreneurs and creatives moving between Nigeria and Ghana, a private charter is the most efficient way to manage the corridor."
      whyRoute="Ghana is Nigeria's closest and most active regional trading partner. Lagos and Accra share business interests across fintech, media, entertainment, energy and real estate. The two cities are also linked by strong diaspora and cultural ties. Executives managing operations across both markets, creative professionals collaborating between the two industries, and investors monitoring portfolios in both countries all rely on this route. A private charter makes the Lagos–Accra trip a morning commute rather than a travel day."
      aircraftDetails={[
        {
          type: 'Light Jet — Recommended',
          description: 'The obvious choice for this route. Lagos to Accra covers approximately 230 miles — well within the range and ideal operating distance of any light jet. Citation CJ4, Phenom 300E and Learjet 75 are typical options. Seats 4–8. Efficient and cost-effective for the distance.',
        },
        {
          type: 'Midsize Jet',
          description: 'Suitable for larger groups or passengers requiring more cabin space and luggage capacity on what is a short flight. A midsize jet on this route is typically requested for group travel or when the return leg involves additional passengers.',
        },
      ]}
      relatedItems={[
        { label: 'Lagos to Abuja', href: '/routes/lagos-to-abuja', type: 'route' },
        { label: 'Abuja to Nairobi', href: '/routes/abuja-to-nairobi', type: 'route' },
        { label: 'Best Private Jet Routes from Lagos', href: '/insights/best-private-jet-routes-lagos', type: 'insight' },
        { label: 'How Private Jet Charter Works in Nigeria', href: '/insights/how-private-jet-charter-works-nigeria', type: 'insight' },
        { label: 'Get an Instant Estimate', href: '/charterestimates', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
      faqs={[
        {
          q: 'How much does a private jet from Lagos to Accra cost?',
          a: 'Charter starts from approximately $13,000 for a light jet, inclusive of repositioning fees. The route is under one hour of flight time. Final pricing depends on aircraft availability and group size. Use the estimator for an instant figure.',
        },
        {
          q: 'Do I need a visa to fly privately from Lagos to Accra?',
          a: 'No. Nigerian passport holders do not require a visa to enter Ghana. As fellow ECOWAS member states, Nigerians can enter Ghana visa-free for up to 90 days. Ensure your Nigerian passport is valid before travel. Sarvene Jets coordinates all ground handling and immigration facilitation at the private terminal.',
        },
        {
          q: 'Can I book a same-day Lagos to Accra private charter?',
          a: 'Yes, subject to aircraft availability. This is one of the most frequently chartered short-haul routes in West Africa and availability is generally strong. Contact our charter team for urgent or same-day bookings.',
        },
      ]}
    />
  </PageLayout>
);

export default LagosAccra;
