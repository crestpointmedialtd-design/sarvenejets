import PageLayout from '../components/PageLayout';

const TermsOfService = () => (
  <PageLayout
    title="Terms of Service | Sarvene Jets"
    description="Sarvene Jets terms of service. The terms and conditions governing your use of our services."
  >
    <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-24 md:py-32">
      <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">Legal</p>
      <h1 className="font-serif text-4xl md:text-5xl text-sarvene-black font-normal tracking-tight mb-4">Terms of Service</h1>
      <p className="font-sans text-sm text-sarvene-black/40 mb-16">Last updated: May 2026</p>

      <div className="space-y-12 font-sans text-sm text-sarvene-black/60 leading-relaxed">

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">1. About Sarvene Jets</h2>
          <p>Sarvene Jets is a private aviation brokerage. We act as an intermediary between clients and licensed third-party aircraft operators. We do not own or operate aircraft. The operating carrier on any confirmed flight is a licensed third-party operator who holds the applicable Air Operator's Certificate.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">2. Quotations</h2>
          <p>All quotations issued by Sarvene Jets are subject to aircraft availability at the time of booking and are valid for 72 hours from the date of issue unless otherwise stated. A quotation does not constitute a binding booking. A booking is confirmed only upon receipt of full payment in cleared funds.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">3. Payment</h2>
          <p className="mb-3">All charter pricing is quoted in USD. Full payment is required before departure. No aircraft will be dispatched without cleared funds received by Sarvene Jets.</p>
          <p>Accepted payment methods include USD wire transfer, card payments via Stripe and Flutterwave, and USDT TRC-20.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">4. Cancellation Policy</h2>
          <div className="border border-sarvene-black/8 overflow-hidden mt-4">
            {[
              ['More than 72 hours before departure', '10% of total charter cost'],
              ['48 – 72 hours before departure', '25% of total charter cost'],
              ['24 – 48 hours before departure', '50% of total charter cost'],
              ['Less than 24 hours / no-show', '100% of total charter cost'],
            ].map(([window, fee]) => (
              <div key={window} className="grid grid-cols-2 border-b border-sarvene-black/8 last:border-0">
                <div className="p-4 text-sarvene-black/60">{window}</div>
                <div className="p-4 text-sarvene-black font-medium border-l border-sarvene-black/8">{fee}</div>
              </div>
            ))}
          </div>
          <p className="mt-4">All cancellations must be communicated in writing to <a href="mailto:operations@sarvenejets.com" className="text-sarvene-obsidian underline">operations@sarvenejets.com</a>. Cancellation fees apply from the time written notice is received.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">5. Passenger Responsibilities</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>All passengers must hold valid travel documents and applicable visas for all departure, transit and destination countries</li>
            <li>A complete passenger manifest must be provided no later than 24 hours before scheduled departure</li>
            <li>Sarvene Jets holds no liability for denied boarding or entry arising from inadequate travel documentation</li>
            <li>Passengers are responsible for compliance with all applicable laws at all destinations</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">6. Liability</h2>
          <p>Sarvene Jets acts as a broker and is not the contracting carrier. Liability for the performance of the flight rests with the operating aircraft operator. Sarvene Jets' liability is limited to the brokerage fee received in connection with the relevant booking.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">7. Aircraft Substitution</h2>
          <p>The operating carrier reserves the right to substitute an aircraft of equal or superior standard where operationally necessary. Sarvene Jets will notify the client as soon as practicable and will work to minimise disruption to the client's travel arrangements.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">8. Governing Law</h2>
          <p>These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject to the jurisdiction of the Lagos State courts or, where agreed, referred to arbitration at the Lagos Court of Arbitration.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">9. Contact</h2>
          <p>For any questions regarding these terms, contact us at <a href="mailto:operations@sarvenejets.com" className="text-sarvene-obsidian underline">operations@sarvenejets.com</a> or +234 902 031 6094.</p>
        </div>

      </div>
    </div>
  </PageLayout>
);

export default TermsOfService;
