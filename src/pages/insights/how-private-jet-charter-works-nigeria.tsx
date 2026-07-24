import PageLayout from '../../components/PageLayout';
import BlogLayout from '../../components/BlogLayout';

const HowCharterWorks = () => (
  <PageLayout
    title="How Private Jet Charter Works in Nigeria"
    description="A clear guide to how private jet charter works in Nigeria. Booking process, operators, pricing and what to expect. Sarvene Jets."
  >
    <BlogLayout
      title="How Private Jet Charter Works in Nigeria"
      category="Education"
      readTime="6 min"
      relatedItems={[
        { label: 'Lagos to Abuja Route', href: '/routes/lagos-to-abuja', type: 'route' },
        { label: 'Lagos to London Route', href: '/routes/lagos-to-london', type: 'route' },
        { label: 'Lagos to Accra Route', href: '/routes/lagos-to-accra', type: 'route' },
        { label: 'Private Jet vs First Class', href: '/insights/private-jet-vs-first-class', type: 'insight' },
        { label: 'Get an Instant Estimate', href: '/charterestimates', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
    >
      <div className="space-y-8 font-sans text-gray-600 leading-relaxed">
        <p className="text-lg text-sarvene-obsidian leading-relaxed">
          Private jet charter in Nigeria is more accessible than most people assume, and more nuanced than most first-time clients expect. This is a practical guide to how the process actually works — from first enquiry to wheels up.
        </p>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">The Difference Between an Operator and a Broker</h2>
          <p className="mb-4">The private aviation market in Nigeria has two types of companies:</p>
          <p className="mb-3"><strong className="text-sarvene-obsidian">Operators</strong> own or manage aircraft directly. They are licensed by the NCAA (Nigerian Civil Aviation Authority) and are responsible for airworthiness, crew and flight operations. There are a limited number of NCAA-certified operators in Nigeria.</p>
          <p><strong className="text-sarvene-obsidian">Brokers</strong> do not own aircraft. They source aircraft from operators — locally and internationally — on behalf of clients. A well-connected broker has access to far more aircraft than any single operator, which means better availability, better pricing and more options on any given route. Sarvene Jets operates as a broker, which means clients benefit from access to the full market rather than a single operator's available fleet.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">How the Booking Process Works</h2>
          <p className="mb-3">Most private charter bookings in Nigeria follow this sequence:</p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="font-serif text-2xl text-gray-200 flex-shrink-0">01</span>
              <div>
                <p className="font-semibold text-sarvene-obsidian mb-1">Enquiry</p>
                <p>You submit a route, date, passenger count and any specific requirements. This can be done via an estimator, a contact form or directly with an advisor. Sarvene Jets responds within the hour.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-serif text-2xl text-gray-200 flex-shrink-0">02</span>
              <div>
                <p className="font-semibold text-sarvene-obsidian mb-1">Aircraft sourcing and quote</p>
                <p>Your advisor checks live availability from the operator network, selects the most suitable aircraft for your route and passenger requirements, and provides a formal quote. A good quote specifies the aircraft type, pricing inclusive of repositioning, and what is included.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-serif text-2xl text-gray-200 flex-shrink-0">03</span>
              <div>
                <p className="font-semibold text-sarvene-obsidian mb-1">Confirmation and payment</p>
                <p>Once you accept the quote, a booking confirmation is issued. Full payment is required before departure. In Nigeria, the standard payment method for larger charters is USD wire transfer. Card payments and crypto (USDT) are also accepted.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-serif text-2xl text-gray-200 flex-shrink-0">04</span>
              <div>
                <p className="font-semibold text-sarvene-obsidian mb-1">Passenger manifest and documentation</p>
                <p>A complete passenger manifest — names, passport details and applicable visas — must be submitted no later than 24 hours before departure. For international flights, this is non-negotiable.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-serif text-2xl text-gray-200 flex-shrink-0">05</span>
              <div>
                <p className="font-semibold text-sarvene-obsidian mb-1">Departure</p>
                <p>You arrive at the private terminal — FBO or general aviation terminal — typically 30–45 minutes before departure. There are no queues, no public check-in and no waiting at gates. The aircraft is ready when you arrive.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">What Repositioning Means — and Why It Matters</h2>
          <p>One of the most misunderstood aspects of private charter pricing is repositioning. When you charter an aircraft for a one-way flight, someone has to account for what the aircraft does next.</p>
          <p className="mt-4">How that gets billed depends on the aircraft, not a single industry-wide rule. A home based aircraft — one tied to a fixed hub with a thin local network around it — genuinely does have to fly back empty or sit idle, so the client typically covers something close to a full round trip. A floating fleet aircraft, moving continuously across a wider network of hubs, is usually repositioning into its next booking rather than flying home empty, so the charge is closer to the live flight time plus a modest positioning fee. A transparent quote should tell you which model applies to your route and why, not just quote a flat total.</p>
          <p className="mt-4">The exception is empty leg flights — where an aircraft is already repositioning and you can book the return leg at a reduced rate. Sarvene Jets monitors empty leg availability across West Africa and alerts clients when relevant opportunities arise.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">What Affects Pricing in Nigeria</h2>
          <p className="mb-3">Several factors specific to the Nigerian market affect charter pricing:</p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>Limited local operator fleet means some routes require sourcing aircraft from neighbouring countries, adding positioning costs.</li>
            <li>International routes attract a 20% fee buffer for handling, landing and fuel variables.</li>
            <li>Demand spikes — particularly around elections, public holidays and major events — affect availability and pricing.</li>
            <li>Last-minute bookings on high-demand routes carry a premium.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Getting Started</h2>
          <p>
            With access to over 3,500 aircraft worldwide and strategic partnerships across aviation and hospitality, Sarvene Jets delivers private travel across six continents. The best way to understand what a specific route will cost is to use the real-time estimator — enter your origin and destination for an instant figure — or to speak directly with an advisor for a formal quote.
          </p>
        </div>
      </div>
    </BlogLayout>
  </PageLayout>
);

export default HowCharterWorks;
