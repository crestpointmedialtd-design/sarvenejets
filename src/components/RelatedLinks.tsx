import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

interface RelatedItem {
  label: string;
  href: string;
  type: 'route' | 'insight' | 'estimator' | 'contact';
}

interface RelatedLinksProps {
  title?: string;
  items: RelatedItem[];
}

const typeLabel = {
  route: 'Route',
  insight: 'Article',
  estimator: 'Tool',
  contact: 'Action',
};

const RelatedLinks = ({ title = 'Related', items }: RelatedLinksProps) => (
  <div className="border-t border-sarvene-black/8 pt-12 mt-12">
    <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-8">{title}</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sarvene-black/6">
      {items.map((item) => {
        const sectionId = item.href === '/#booking-estimator'
          ? 'booking-estimator'
          : item.href === '/#contact'
          ? 'contact'
          : null;

        return sectionId ? (
          <button
            key={item.href}
            onClick={() => scrollToSection(sectionId)}
            className="group bg-white p-6 hover:bg-sarvene-cream/60 transition-colors flex flex-col justify-between text-left"
          >
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/30 mb-3">
              {typeLabel[item.type]}
            </span>
            <div className="flex items-center justify-between">
              <span className="font-serif text-base text-sarvene-obsidian leading-snug pr-4">{item.label}</span>
              <ArrowRight className="w-3 h-3 text-sarvene-black/30 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
            </div>
          </button>
        ) : (
          <a
            key={item.href}
            href={item.href}
            className="group bg-white p-6 hover:bg-sarvene-cream/60 transition-colors flex flex-col justify-between"
          >
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/30 mb-3">
              {typeLabel[item.type]}
            </span>
            <div className="flex items-center justify-between">
              <span className="font-serif text-base text-sarvene-obsidian leading-snug pr-4">{item.label}</span>
              <ArrowRight className="w-3 h-3 text-sarvene-black/30 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
            </div>
          </a>
        );
      })}
    </div>
  </div>
);

export default RelatedLinks;