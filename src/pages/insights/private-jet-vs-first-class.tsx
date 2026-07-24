import PageLayout from '../../components/PageLayout';
import BlogLayout from '../../components/BlogLayout';

const JetVsFirstClass = () => (
  <PageLayout
    title="Private Jet vs First Class: What's the Real Difference"
    description="Private jet versus first class — a clear comparison for Nigerian business travellers. What you get, what it costs and when one makes more sense than the other."
  >
    <BlogLayout
      title="Private Jet vs First Class: What's the Real Difference"
      category="Education"
      readTime="5 min"
      relatedItems={[
        { label: 'Lagos to London Route', href: '/routes/lagos-to-london', type: 'route' },
        { label: 'Lagos to Dubai Route', href: '/routes/lagos-to-dubai', type: 'route' },
        { label: 'How Private Jet Charter Works in Nigeria', href: '/insights/how-private-jet-charter-works-nigeria', type: 'insight' },
        { label: 'Cost of a Private Jet from Lagos to London', href: '/insights/cost-private-jet-lagos-to-london', type: 'insight' },
        { label: 'Get an Instant Estimate', href: '/charterestimates', type: 'estimator' },
        { label: 'Request a Charter', href: '/#contact', type: 'contact' },
      ]}
    >
      <div className="space-y-8 font-sans text-gray-600 leading-relaxed">
        <p className="text-lg text-sarvene-obsidian leading-relaxed">
          First class and private aviation are both premium travel categories, but they are not the same product. The distinction is practical — what each option actually delivers, and for whom.
        </p>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Schedule and Flexibility</h2>
          <p className="mb-4">First class operates on the airline's schedule. You adapt your plans to their departure windows, their slot allocations and their route network. If the airline does not fly your route non-stop, you connect.</p>
          <p>A private charter operates on your schedule. Departure time is set by you. If the meeting runs late, the aircraft waits. If plans change, the flight changes. That flexibility is not an add-on — for certain categories of traveller, it is the core value proposition.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Privacy and Discretion</h2>
          <p className="mb-4">First class puts you in a premium cabin with other passengers. The environment is managed and the service is attentive, but the space is shared. Who you are, who you are travelling with and what you discuss is observable.</p>
          <p>A private charter is a closed environment. The aircraft, the cabin and the conversation belong entirely to you and your party. For political figures, business principals managing sensitive transactions and high-net-worth individuals who operate under public scrutiny, this is not optional.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">Airport Experience</h2>
          <p className="mb-4">First class provides lounge access, priority boarding and expedited check-in. You still pass through the same airport infrastructure — the same terminals, the same security queues and the same departure gates as other passengers, just with marginally better conditions.</p>
          <p>Private charter uses dedicated private terminals — FBOs and general aviation facilities — entirely separate from the main terminal. Arrival to wheels up in 30 minutes is standard. No security theatre, no departure gate, no boarding queue.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">The Cost Comparison — Honestly</h2>
          <p className="mb-4">First class from Lagos to London costs approximately $4,000–$7,000 per person return on Emirates, British Airways or Virgin Atlantic depending on timing. For two people, that is $8,000–$14,000.</p>
          <p className="mb-4">A private charter on the same route starts from approximately $62,000 for a heavy jet — non-stop, private terminal, any departure time, inclusive of repositioning. For a group of eight to ten passengers, the per-person cost begins to compare more directly.</p>
          <p>The cost question for private aviation is rarely individual versus group. It is total cost of the journey — including time, privacy, flexibility and what is lost or gained by each option — against the price. For a single leisure traveller, first class is often the right answer. For a business principal whose time is worth $10,000 an hour, or a delegation where discretion is non-negotiable, the calculation changes.</p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">When Private Makes Sense</h2>
          <ul className="space-y-3 pl-5 list-disc">
            <li>Groups of four or more travelling together on a short or medium-haul route</li>
            <li>Time-sensitive travel where schedule flexibility is essential</li>
            <li>Confidential or sensitive business travel</li>
            <li>Routes where commercial connections add significant time</li>
            <li>Domestic travel where commercial options are limited or unreliable</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">When First Class Makes Sense</h2>
          <ul className="space-y-3 pl-5 list-disc">
            <li>Solo travel on a well-served commercial route</li>
            <li>Long-haul travel where the airline's flat bed and service standard is the priority</li>
            <li>Travel where schedule flexibility is not a constraint</li>
            <li>Situations where the price differential is not justified by the business need</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-sarvene-obsidian mb-4">The Honest Answer</h2>
          <p>
            Private aviation is not categorically superior to first class. It is a different product that serves a different set of requirements. The right question is not which one is better — it is which one is right for this trip, this group, this set of constraints. With access to over 3,500 aircraft worldwide and strategic partnerships across aviation and hospitality, Sarvene Jets delivers private travel across six continents — and our advisors will tell you honestly when a charter makes sense and when it does not.
          </p>
        </div>
      </div>
    </BlogLayout>
  </PageLayout>
);

export default JetVsFirstClass;
