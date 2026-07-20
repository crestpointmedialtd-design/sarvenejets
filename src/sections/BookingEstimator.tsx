import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- STRICTLY CURATED REALISTIC AIRPORT DICTIONARY ---
export interface Airport {
  city: string;
  iata: string;
  icao: string;
  country: string;
  region: 'WEST_AFRICA' | 'EUROPE' | 'US' | 'MENA' | 'REST_AFRICA';
}

export const REALISTIC_AIRPORTS: Airport[] = [
  // West Africa Core & Domestic Hubs
  { city: "Lagos", iata: "LOS", icao: "DNMM", country: "Nigeria", region: "WEST_AFRICA" },
  { city: "Abuja", iata: "ABV", icao: "DNAA", country: "Nigeria", region: "WEST_AFRICA" },
  { city: "Kano", iata: "KAN", icao: "DNKN", country: "Nigeria", region: "WEST_AFRICA" },
  { city: "Ibadan", iata: "IBA", icao: "DNIB", country: "Nigeria", region: "WEST_AFRICA" },
  { city: "Benin City", iata: "BNI", icao: "DNBE", country: "Nigeria", region: "WEST_AFRICA" },
  { city: "Accra", iata: "ACC", icao: "DGAA", country: "Ghana", region: "WEST_AFRICA" },
  { city: "Port Harcourt", iata: "PHC", icao: "DNPO", country: "Nigeria", region: "WEST_AFRICA" },

  // Southern, East & Central Africa
  { city: "Nairobi", iata: "NBO", icao: "HKJK", country: "Kenya", region: "REST_AFRICA" },
  { city: "Kigali", iata: "KGL", icao: "HRYR", country: "Rwanda", region: "REST_AFRICA" },
  { city: "Cape Town", iata: "CPT", icao: "FACT", country: "South Africa", region: "REST_AFRICA" },
  { city: "Johannesburg (Lanseria)", iata: "HLA", icao: "FALA", country: "South Africa", region: "REST_AFRICA" },

  // Europe Core Hubs
  { city: "London (Farnborough)", iata: "FAB", icao: "EGLF", country: "United Kingdom", region: "EUROPE" },
  { city: "Paris (Le Bourget)", iata: "LBG", icao: "LFPB", country: "France", region: "EUROPE" },
  { city: "Geneva", iata: "GVA", icao: "LSGG", country: "Switzerland", region: "EUROPE" },
  { city: "Milan (Linate)", iata: "LIN", icao: "LIML", country: "Italy", region: "EUROPE" },
  { city: "Ibiza", iata: "IBZ", icao: "LEIB", country: "Spain", region: "EUROPE" },

  // MENA
  { city: "Dubai (Al Maktoum)", iata: "DWC", icao: "OMDW", country: "UAE", region: "MENA" },
  { city: "Riyadh", iata: "RUH", icao: "OERK", country: "Saudi Arabia", region: "MENA" },
];

interface FleetOption {
  aircraft: string;
  category: 'Light Jet' | 'Midsize Jet' | 'Heavy Jet' | 'Ultra Long Range';
  hourlyRate: number;
}

const FLEET_ROSTER: FleetOption[] = [
  { aircraft: 'Phenom 300E', category: 'Light Jet', hourlyRate: 5500 },
  { aircraft: 'Hawker 850XP', category: 'Midsize Jet', hourlyRate: 6750 }, // Adjusted to exact $6,750 base
  { aircraft: 'Challenger 604', category: 'Heavy Jet', hourlyRate: 7500 },
  { aircraft: 'Legacy 650', category: 'Heavy Jet', hourlyRate: 8200 },
  { aircraft: 'Global 6000', category: 'Ultra Long Range', hourlyRate: 12500 },
];

// 20 High-Density Real-World Corridors (Forcing African diversity)
const HIGH_DENSITY_ROUTES = [
  // Domestic Nigeria (High Frequency)
  { origin: "Lagos", dest: "Kano", fleetIdx: 1, baseRate: 13500, discount: 40 },
  { origin: "Abuja", dest: "Ibadan", fleetIdx: 0, baseRate: 11000, discount: 45 },
  { origin: "Lagos", dest: "Benin City", fleetIdx: 0, baseRate: 11000, discount: 50 },
  { origin: "Kano", dest: "Abuja", fleetIdx: 1, baseRate: 12000, discount: 35 },
  
  // West Africa Regional
  { origin: "Lagos", dest: "Accra", fleetIdx: 1, baseRate: 13500, discount: 30 },
  { origin: "Port Harcourt", dest: "Lagos", fleetIdx: 0, baseRate: 11000, discount: 45 },

  // East & Southern Africa
  { origin: "Lagos", dest: "Nairobi", fleetIdx: 3, baseRate: 65000, discount: 25 },
  { origin: "Nairobi", dest: "Kigali", fleetIdx: 1, baseRate: 15000, discount: 20 },
  { origin: "Cape Town", dest: "Lagos", fleetIdx: 4, baseRate: 92000, discount: 30 },
  { origin: "Johannesburg (Lanseria)", dest: "Nairobi", fleetIdx: 2, baseRate: 45000, discount: 28 },
  
  // Intercontinental (Africa ➔ Europe/MENA)
  { origin: "Lagos", dest: "London (Farnborough)", fleetIdx: 4, baseRate: 100000, discount: 32 },
  { origin: "London (Farnborough)", dest: "Lagos", fleetIdx: 3, baseRate: 95000, discount: 28 },
  { origin: "Abuja", dest: "Dubai (Al Maktoum)", fleetIdx: 4, baseRate: 85000, discount: 26 },
  { origin: "Lagos", dest: "Paris (Le Bourget)", fleetIdx: 3, baseRate: 88000, discount: 25 },
  { origin: "Kano", dest: "Riyadh", fleetIdx: 2, baseRate: 55000, discount: 22 },

  // Intra-Europe & Positioning
  { origin: "London (Farnborough)", dest: "Geneva", fleetIdx: 0, baseRate: 9800, discount: 22 },
  { origin: "Paris (Le Bourget)", dest: "Milan (Linate)", fleetIdx: 1, baseRate: 12500, discount: 24 },
  { origin: "Geneva", dest: "Ibiza", fleetIdx: 2, baseRate: 16000, discount: 28 },
  { origin: "Dubai (Al Maktoum)", dest: "Riyadh", fleetIdx: 1, baseRate: 24000, discount: 22 },
  { origin: "Milan (Linate)", dest: "London (Farnborough)", fleetIdx: 0, baseRate: 11000, discount: 20 },
];

export interface EmptyLegCardData {
  route: string;
  routeCode: string;
  date: string;
  aircraft: string;
  category: string;
  standardRate: number;
  emptyLegPrice: number;
  discountPercent: number;
}

// Generates exactly 20 Empty Legs based on the varied array above
const generateWeekly20EmptyLegs = (): EmptyLegCardData[] => {
  const today = new Date();
  
  return HIGH_DENSITY_ROUTES.map((routeData, index) => {
    const originApt = REALISTIC_AIRPORTS.find(a => a.city === routeData.origin) || REALISTIC_AIRPORTS[0];
    const destApt = REALISTIC_AIRPORTS.find(a => a.city === routeData.dest) || REALISTIC_AIRPORTS[1];
    const fleet = FLEET_ROSTER[routeData.fleetIdx];

    const standardRate = routeData.baseRate;
    const discountPercent = routeData.discount;
    const rawPrice = standardRate * (1 - discountPercent / 100);
    const emptyLegPrice = Math.round(rawPrice / 100) * 100;

    // Stagger dates realistically across the next 14 days
    const flightDate = new Date(today);
    flightDate.setDate(today.getDate() + ((index % 12) + 1));

    const formattedDate = flightDate.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    });

    return {
      route: `${originApt.city} ── ${destApt.city}`,
      routeCode: `${originApt.iata} — ${destApt.iata}`,
      date: formattedDate,
      aircraft: fleet.aircraft,
      category: fleet.category,
      standardRate,
      emptyLegPrice,
      discountPercent
    };
  });
};

const EmptyLegs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [emptyLegsList] = useState<EmptyLegCardData[]>(generateWeekly20EmptyLegs());

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.el-header', { opacity: 0, y: 25 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
      gsap.fromTo('.el-card', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08,
        scrollTrigger: { trigger: '.el-grid', start: 'top 85%' }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="empty-legs" ref={sectionRef} className="bg-white py-20 md:py-28 text-sarvene-black">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        
        {/* Header Visual Structure */}
        <div className="el-header text-center mb-16 border-b border-sarvene-black/10 pb-10">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-3 font-semibold">
            AVAILABLE NOW · 20 ACTIVE CORRIDORS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-sarvene-black mb-4">
            Empty Legs
          </h2>
          <p className="font-sans text-sm text-sarvene-black/60 max-w-xl mx-auto leading-relaxed">
            Subsidized one-way routes available at non-published rates. Flexible departures across preferred global corridors.
          </p>
        </div>

        {/* 20 Empty Legs Stream Grid */}
        <div className="el-grid space-y-6">
          {emptyLegsList.map((leg, i) => {
            const whatsappMsg = `Hi, I am interested in booking the empty leg flight: ${leg.route} on ${leg.date} (${leg.aircraft}) quoted at $${leg.emptyLegPrice.toLocaleString()}. Please send me more details.`;
            const whatsappUrl = `https://wa.me/2349020316094?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div 
                key={i} 
                className="el-card border border-sarvene-black/15 bg-white p-6 md:p-8 hover:border-sarvene-black/40 transition-all duration-300 shadow-sm"
              >
                {/* Top Row: Route & Badge */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif text-2xl md:text-3xl font-normal text-sarvene-black tracking-tight">
                    {leg.route}
                  </h3>
                  <div>
                    <span className="inline-block font-sans text-[10px] tracking-[0.15em] uppercase font-semibold text-sarvene-black bg-sarvene-black/5 border border-sarvene-black/15 px-3 py-1">
                      SAVE {leg.discountPercent}%
                    </span>
                  </div>
                </div>

                {/* Subtitle Details */}
                <p className="font-sans text-xs text-sarvene-black/60 mb-6">
                  {leg.date} · <span className="font-medium text-sarvene-black">{leg.aircraft}</span> ({leg.category})
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-sans text-2xl md:text-3xl font-semibold text-sarvene-black tracking-tight">
                    ${leg.emptyLegPrice.toLocaleString()}
                  </span>
                  <span className="font-sans text-base text-sarvene-black/40 line-through decoration-sarvene-black/30">
                    ${leg.standardRate.toLocaleString()}
                  </span>
                </div>

                {/* Direct Lead Conversion CTA */}
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-sans text-[11px] tracking-[0.18em] uppercase font-semibold text-sarvene-black border-b-2 border-sarvene-black pb-1 hover:opacity-60 transition-opacity"
                  >
                    REQUEST THIS LEG  →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Disclaimer */}
        <div className="mt-14 pt-6 border-t border-sarvene-black/10">
          <p className="font-sans text-[10px] tracking-wider uppercase text-sarvene-black/40 leading-relaxed max-w-3xl">
            * Subsidized positioning legs represent guaranteed single-leg quotes subject to fleet repositioning windows and operator schedule confirmation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default EmptyLegs;
