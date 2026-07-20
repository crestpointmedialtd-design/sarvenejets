import { type ReactNode } from 'react';
import { Link } from 'react-router';
import { scrollToSection } from '../utils/scrollToSection';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import RelatedLinks from './RelatedLinks';

interface RelatedItem {
  label: string;
  href: string;
  type: 'route' | 'insight' | 'estimator' | 'contact';
}

interface BlogLayoutProps {
  title: string;
  category: string;
  readTime: string;
  children: ReactNode;
  relatedItems?: RelatedItem[];
}

const BlogLayout = ({ title, category, readTime, children, relatedItems }: BlogLayoutProps) => {
  return (
    <div>
      {/* Header */}
      <section className="bg-sarvene-matte py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30">{category}</span>
            <span className="text-white/20">·</span>
            <span className="font-sans text-[10px] text-white/30">{readTime} read</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-white font-normal tracking-tight leading-tight">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="prose-sarvene">
            {children}
          </div>

          {relatedItems && relatedItems.length > 0 && (
            <RelatedLinks title="Continue Exploring" items={relatedItems} />
          )}

          {/* CTA */}
          <div className="mt-16 bg-gray-50 p-8 md:p-10">
            <p className="font-serif text-2xl text-sarvene-obsidian mb-3">Ready to fly?</p>
            <p className="font-sans text-sm text-gray-500 mb-6">
              Use our real-time estimator for an instant charter price or speak directly with a Sarvene aviation advisor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
  onClick={() => scrollToSection('booking-estimator')}
  className="inline-flex items-center justify-center gap-2 bg-sarvene-obsidian text-white px-6 py-3 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
>
  Get Instant Estimate <ArrowRight className="w-3.5 h-3.5" />
</button>
              <a
                href="mailto:charter@sarvenejets.com?subject=Charter%20Enquiry&body=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20private%20charter%20flight."
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-sarvene-obsidian px-6 py-3 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors"
              >
                Speak to an Advisor
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-gray-400 hover:text-sarvene-obsidian transition-colors"
            >
              <ArrowLeft className="w-3 h-3" /> Back to Insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogLayout;
