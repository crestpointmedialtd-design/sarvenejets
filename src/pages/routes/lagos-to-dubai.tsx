import PageLayout from '../../components/PageLayout';
import RoutePage from '../../components/RoutePage';

const LagosDubai = () => (
  <PageLayout
    title="Private Jet Charter Lagos to Dubai"
    description="Private jet charter from Lagos to Dubai. 7.5 hours flight time, 3,169 NM. Starts from $80,240 inclusive of repositioning. Sarvene Jets."
  >
    <RoutePage
      from="Lagos"
      to="Dubai"
      fromCode="LOS"
      toCode="DWC"
      flightTime="7.5 hours (8hr billed)"
      routeType="Intercontinental"
      distance="3,169 NM / 5,869 km"
      recommendedAircraft="Heavy Jet"
      intro="Lagos to Dubai is a route defined by commerce, investment and movement. Nigerian entrepreneurs, investors and high-net-worth families travel this corridor for trade, real estate, hospitality and business. A private charter gives full control over the journey — departure time, cabin configuration and arrival terminal."
      whyRoute="Dubai has become one of the most significant international hubs for Nigerian business and investment. Real estate transactions, commodity trading and financial services draw a consistent flow of high-net-worth Nigerians to the UAE. The route is equally relevant for personal travel — Dubai's infrastructure is among the most developed in the world, and Nigerian travellers are among its highest-spending visitors. A private charter on this route means no layovers, no connection risk and a cabin built around your requirements."
      aircraftDetails={[
        {
          type: 'Heavy Jet — Recommended',
          description: 'A heavy jet is the optimal non-stop choice for this 3,169 NM sector. With an estimated flight time of 7.5 hours (8 hours billed), heavy jets including the Challenger 650, Legacy 650, and Gulfstream G650 operate non-stop with full passenger and luggage capacity. Estimates typically range from $80,240 to $92,276.',
        },
        {
          type: 'Midsize & Light Jets (e.g. Citation XLS, Phenom 300E)',
          description: 'Smaller aircraft like the Citation XLS or Phenom 300E require 1 technical fuel stop on this route. Suitable for smaller groups where an additional operational stop is acceptable.',
        },
        {
          type: 'Ultra Long Range',
          description: 'For larger delegations or those seeking maximum cabin space, ultra long range aircraft offer multiple cabin zones, staterooms, and extended operational buffers across intercontinental legs.',
        },
      ]}
      relatedItems={[
        { label: 'Lagos to London', href: '/routes/lagos-to-london', type: 'route' },
        { label: 'Abuja to Nairobi', href: '/routes/abuja-to-nairobi', type: 'route' },
        { label: 'Cost of a Private Jet from Lagos to Dubai', href: '/insights/cost-lagos-to-dubai', type: 'insight' },
        { label: 'Private Jet vs First Class', href: '/insights/private-jet-vs-first-class', type: 'insight' },
        { label: 'Get an Instant Estimate', href: '/charterestimates', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
      faqs={[
        {
          q: 'How much does a private jet from Lagos to Dubai cost?',
          a: 'Charter estimates for a heavy jet range between $80,240 and $92,276 based on 8 hours billed, reflecting one-way floating-fleet positioning for long-range routes. Final pricing depends on live aircraft availability and routing requirements.',
        },
        {
          q: 'Which Dubai airport does the private charter arrive at?',
          a: 'Private charters typically arrive at Dubai Al Maktoum International Airport (DWC / Executive Terminal) or Dubai International Airport (DXB). DWC is preferred for private aviation due to dedicated VIP FBO facilities and fast customs clearance.',
        },
        {
          q: 'Can Sarvene Jets arrange ground transfers in Dubai?',
          a: 'Yes. Sarvene Jets coordinates executive ground transfers and chauffeur arrangements upon arrival at DWC or DXB. Speak to your advisor at the time of booking.',
        },
      ]}
    />
  </PageLayout>
);

export default LagosDubai;