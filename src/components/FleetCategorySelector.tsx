import { useState } from 'react';
import { ChevronDown, ChevronRight, Plane } from 'lucide-react';
import { SARVENE_FLEET, type JetModel } from '../data/fleetData';

type Category = 'Light' | 'Midsize' | 'Heavy' | 'Ultra Long Range';

const CATEGORIES: Category[] = ['Light', 'Midsize', 'Heavy', 'Ultra Long Range'];

interface FleetCategorySelectorProps {
  onJetSelect?: (jet: JetModel) => void;
  selectedJetId?: string;
}

export default function FleetCategorySelector({ onJetSelect, selectedJetId }: FleetCategorySelectorProps) {
  const [expandedCategory, setExpandedCategory] = useState<Category | null>(null);

  const toggleCategory = (category: Category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const selectJet = (jet: JetModel) => {
    onJetSelect?.(jet);
  };

  const getJetsByCategory = (category: Category) => {
    return SARVENE_FLEET.filter(jet => jet.category === category);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-2">
        {CATEGORIES.map((category) => {
          const jets = getJetsByCategory(category);
          const isExpanded = expandedCategory === category;

          return (
            <div key={category} className="border border-sarvene-black/10 rounded-lg overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-sarvene-cream/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Plane className="w-4 h-4 text-sarvene-obsidian" />
                  <span className="font-sans text-sm tracking-[0.15em] uppercase text-sarvene-obsidian">
                    {category}
                  </span>
                  <span className="font-sans text-xs text-sarvene-black/40">
                    ({jets.length})
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-sarvene-black/40" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-sarvene-black/40" />
                )}
              </button>

              {/* Jet Drawer */}
              {isExpanded && (
                <div className="border-t border-sarvene-black/10 bg-sarvene-cream/30">
                  {jets.map((jet) => {
                    const isSelected = selectedJetId === jet.id;
                    return (
                      <button
                        key={jet.id}
                        onClick={() => selectJet(jet)}
                        className={`w-full text-left px-6 py-4 border-b border-sarvene-black/5 last:border-b-0 transition-colors ${
                          isSelected
                            ? 'bg-sarvene-obsidian text-white'
                            : 'hover:bg-white/50 text-sarvene-black'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className={`font-serif text-base mb-1 ${isSelected ? 'text-white' : 'text-sarvene-obsidian'}`}>
                              {jet.name}
                            </h4>
                            <p className={`font-sans text-xs leading-relaxed ${isSelected ? 'text-white/70' : 'text-sarvene-black/60'}`}>
                              {jet.description}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1 text-xs">
                            <span className={isSelected ? 'text-white/80' : 'text-sarvene-black/50'}>
                              {jet.maxRangeNM.toLocaleString()} NM
                            </span>
                            <span className={isSelected ? 'text-white/80' : 'text-sarvene-black/50'}>
                              {jet.maxPassengers} pax
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
