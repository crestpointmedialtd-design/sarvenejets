import PageLayout from '../../components/PageLayout';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    slug: '/insights/access-stops-being-about-money',
    category: 'Beyond',
    title: 'The Point Where Access Stops Being About Money',
    excerpt: 'Beyond a certain level of wealth, the problem is no longer what you can afford. It is what you are seen doing, and by whom.',
    readTime: '5 min',
  },
  {
    slug: '/insights/cost-private-jet-lagos-to-london',
    category: 'Pricing',
    title: 'Cost of a Private Jet from Lagos to London',
    excerpt: 'A complete breakdown of aircraft options, what drives the price on this route, and what to expect when you request a quote.',
    readTime: '5 min',
  },
  {
    slug: '/insights/cost-private-jet-lagos-to-dubai',
    category: 'Pricing',
    title: 'Cost of a Private Jet from Lagos to Dubai',
    excerpt: 'Lagos to Dubai is one of the fastest-growing private aviation routes out of West Africa. Here is what it costs and why.',
    readTime: '5 min',
  },
  {
    slug: '/insights/how-private-jet-charter-works-nigeria',
    category: 'Education',
    title: 'How Private Jet Charter Works in Nigeria',
    excerpt: 'From requesting a quote to wheels up — a clear explanation of how the private charter process works for first-time and experienced flyers.',
    readTime: '6 min',
  },
  {
    slug: '/insights/private-jet-vs-first-class',
    category: 'Education',
    title: 'Private Jet vs First Class: What\'s the Difference',
    excerpt: 'The honest comparison. What each option actually gives you, where the gaps are, and when the calculation changes.',
    readTime: '5 min',
  },
  {
    slug: '/insights/best-private-jet-routes-lagos',
    category: 'Industry',
    title: 'The Best Private Jet Routes from Lagos',
    excerpt: 'The routes that matter most — domestically, regionally and internationally — and what makes each one worth knowing.',
    readTime: '4 min',
  },
  {
    slug: '/insights/floating-fleet-vs-home-based-operators',
    category: 'Industry',
    title: 'Floating Fleets vs Home Based Operators: Why Charter Quotes Vary So Much',
    excerpt: 'Why three companies can quote three different prices for the same route, and what that actually reveals about how each one prices aircraft.',
    readTime: '6 min',
  },
];

const categories = ['All', 'Beyond', 'Pricing', 'Education', 'Industry'];

const InsightsIndex = () => (
  <PageLayout
    title="Insights — Private Aviation in Africa | Sarvene Jets"
    description="Private aviation insights from Sarvene Jets. Pricing guides, education and industry intelligence on private jet charter across Africa and beyond."
  >
    <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-24 md:py-32">

      {/* Header */}
      <div className="mb-16">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">
          Insights
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-sarvene-black font-normal tracking-tight mb-6">
          Private Aviation Intelligence
        </h1>
        <p className="font-sans text-sm text-sarvene-black/50 leading-relaxed max-w-xl">
          Pricing guides, industry context and practical education on private jet charter across Africa and beyond. No fluff.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <span key={cat}
            className={`font-sans text-[11px] tracking-[0.15em] uppercase px-4 py-2 border cursor-pointer transition-colors
              ${cat === 'All'
                ? 'border-sarvene-obsidian bg-sarvene-obsidian text-white'
                : 'border-sarvene-black/15 text-sarvene-black/50 hover:border-sarvene-obsidian hover:text-sarvene-obsidian'}`}>
            {cat}
          </span>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid md:grid-cols-2 gap-px bg-sarvene-black/8">
        {insights.map((post) => (
          <a key={post.slug} href={post.slug}
            className="group bg-white p-8 md:p-10 hover:bg-sarvene-cream/60 transition-colors flex flex-col">

            <div className="flex items-center justify-between mb-6">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/30">
                {post.category}
              </span>
              <span className="font-sans text-[10px] text-sarvene-black/30">
                {post.readTime} read
              </span>
            </div>

            <h2 className="font-serif text-xl md:text-2xl text-sarvene-obsidian mb-4 tracking-tight leading-snug">
              {post.title}
            </h2>
            <p className="font-sans text-sm text-sarvene-black/45 leading-relaxed mb-8 flex-1">
              {post.excerpt}
            </p>

            <span className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-sarvene-obsidian group-hover:gap-3 transition-all">
              Read Article <ArrowRight className="w-3 h-3" />
            </span>
          </a>
        ))}
      </div>

    </div>
  </PageLayout>
);

export default InsightsIndex;
