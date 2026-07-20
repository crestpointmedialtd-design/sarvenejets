import PageLayout from '../components/PageLayout';

const CookiePolicy = () => (
  <PageLayout
    title="Cookie Policy | Sarvene Jets"
    description="Sarvene Jets cookie policy. How we use cookies and similar technologies on our website."
  >
    <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-24 md:py-32">
      <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">Legal</p>
      <h1 className="font-serif text-4xl md:text-5xl text-sarvene-black font-normal tracking-tight mb-4">Cookie Policy</h1>
      <p className="font-sans text-sm text-sarvene-black/40 mb-16">Last updated: May 2026</p>

      <div className="space-y-12 font-sans text-sm text-sarvene-black/60 leading-relaxed">

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">1. What Are Cookies</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They allow the website to remember your actions and preferences over time, so you don't have to re-enter information every time you return or navigate between pages.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">2. Cookies We Use</h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-sarvene-black mb-2">Essential Cookies</p>
              <p>Required for the website to function correctly. These include session management and security cookies. They cannot be disabled.</p>
            </div>
            <div>
              <p className="font-semibold text-sarvene-black mb-2">Analytics Cookies</p>
              <p>We use Google Analytics (via Google Tag Manager) to understand how visitors interact with our website — which pages are most visited, how long visitors stay, and where they come from. This data is aggregated and anonymous. You can opt out via your browser settings or Google's opt-out tool.</p>
            </div>
            <div>
              <p className="font-semibold text-sarvene-black mb-2">Preference Cookies</p>
              <p>These remember your preferences such as language and region settings to improve your experience on return visits.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">3. Third-Party Cookies</h2>
          <p className="mb-3">Some cookies are placed by third-party services that appear on our pages. These include:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Google Analytics — website usage analysis</li>
            <li>Google Tag Manager — tag management</li>
            <li>Netlify — form submission and hosting functionality</li>
          </ul>
          <p className="mt-3">We do not control these third-party cookies. Please refer to the respective privacy policies of these providers for more information.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">4. Managing Cookies</h2>
          <p className="mb-3">You can control and delete cookies through your browser settings. Disabling cookies may affect the functionality of some parts of our website. Most browsers allow you to:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>View what cookies are stored and delete them individually</li>
            <li>Block third-party cookies</li>
            <li>Block all cookies from specific sites</li>
            <li>Block all cookies from being set</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">5. Changes to This Policy</h2>
          <p>We may update this cookie policy from time to time. The date at the top of this page reflects the most recent revision.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-sarvene-black mb-4">6. Contact</h2>
          <p>For questions about our use of cookies, contact us at <a href="mailto:charter@sarvenejets.com" className="text-sarvene-obsidian underline">charter@sarvenejets.com</a>.</p>
        </div>

      </div>
    </div>
  </PageLayout>
);

export default CookiePolicy;
