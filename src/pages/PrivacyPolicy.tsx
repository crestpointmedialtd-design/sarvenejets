import PageLayout from '../components/PageLayout';

const PrivacyPolicy = () => (
  <PageLayout
    title="Privacy Policy | Sarvene Jets"
    description="Sarvene Jets privacy policy. How we collect, use and protect your personal data."
  >
    <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-24 md:py-32">
      <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">Legal</p>
      <h1 className="font-serif text-4xl md:text-5xl text-sarvene-black font-normal tracking-tight mb-4">Privacy Policy</h1>
      <p className="font-sans text-sm text-sarvene-black/40 mb-16">Last updated: May 2026</p>

      <div className="space-y-12 font-sans text-sm text-sarvene-black/60 leading-relaxed">

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">1. Who We Are</h2>
          <p>Sarvene Jets is a private aviation brokerage headquartered in Victoria Island, Lagos, Nigeria. We operate under Alderon Group, Sarvene Jets LLC and Sarvene Jets Nigeria. References to "Sarvene Jets", "we", "us" or "our" in this policy refer to Sarvene Jets and its affiliated entities.</p>
          <p className="mt-3">Contact: <a href="mailto:operations@sarvenejets.com" className="text-sarvene-obsidian underline">operations@sarvenejets.com</a></p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">2. Information We Collect</h2>
          <p className="mb-3">We collect information you provide directly to us, including:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Name, email address and phone number when you submit an enquiry or request a quote</li>
            <li>Travel details including departure city, destination, travel dates and passenger count</li>
            <li>Payment information processed through our secure payment partners (Stripe, Flutterwave)</li>
            <li>Communications you send to us via email, WhatsApp or our contact form</li>
            <li>Newsletter subscription details</li>
          </ul>
          <p className="mt-3">We also collect limited technical data including IP address, browser type and pages visited when you use our website.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">3. How We Use Your Information</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>To respond to charter enquiries and provide quotations</li>
            <li>To confirm and manage flight bookings</li>
            <li>To send empty leg alerts and market updates where you have subscribed</li>
            <li>To process payments securely</li>
            <li>To comply with legal and regulatory obligations including aviation authority requirements</li>
            <li>To improve our website and services</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">4. How We Share Your Information</h2>
          <p className="mb-3">We do not sell your personal data. We may share your information with:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Aircraft operators to facilitate confirmed charter bookings — including passenger manifests as required by aviation authorities</li>
            <li>Payment processors (Stripe, Flutterwave, Coinbase Commerce) to process transactions</li>
            <li>Ground handling agents at departure and arrival airports</li>
            <li>Email service providers for newsletter distribution</li>
            <li>Regulatory and government authorities where required by law</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">5. Data Retention</h2>
          <p>We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, including satisfying legal, accounting or regulatory requirements. Charter booking records are retained for a minimum of seven years in line with Nigerian financial regulations.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">6. Your Rights</h2>
          <p className="mb-3">You have the right to:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data where we have no legal basis to retain it</li>
            <li>Withdraw consent to marketing communications at any time</li>
            <li>Lodge a complaint with the relevant data protection authority</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:operations@sarvenejets.com" className="text-sarvene-obsidian underline">operations@sarvenejets.com</a>.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">7. Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction. Payment data is processed exclusively through PCI-DSS compliant payment processors and is never stored on our servers.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">8. Changes to This Policy</h2>
          <p>We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of our website following any changes constitutes acceptance of the updated policy.</p>
        </div>

      </div>
    </div>
  </PageLayout>
);

export default PrivacyPolicy;
