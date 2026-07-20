import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock, Tag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EmptyLeg {
  route: string;
  date: string;
  aircraft: string;
  price: string;
  originalPrice: string;
  savings: string;
}

const regionalHubs = [
  // ── NIGERIA DOMESTIC ──────────────────────────────────────────────────────
  { route: 'Lagos — Abuja',           craftType: 'nigerian',  hours: 1.0,  isInternational: false },
  { route: 'Abuja — Lagos',           craftType: 'nigerian',  hours: 1.0,  isInternational: false },
  { route: 'Lagos — Port Harcourt',   craftType: 'nigerian',  hours: 1.0,  isInternational: false },
  { route: 'Port Harcourt — Lagos',   craftType: 'nigerian',  hours: 1.0,  isInternational: false },
  { route: 'Lagos — Kano',            craftType: 'nigerian',  hours: 1.3,  isInternational: false },
  { route: 'Kano — Lagos',            craftType: 'nigerian',  hours: 1.3,  isInternational: false },
  { route: 'Kano — Abuja',            craftType: 'nigerian',  hours: 0.8,  isInternational: false },
  { route: 'Abuja — Kano',            craftType: 'nigerian',  hours: 0.8,  isInternational: false },
  { route: 'Port Harcourt — Abuja',   craftType: 'nigerian',  hours: 1.0,  isInternational: false },
  { route: 'Abuja — Port Harcourt',   craftType: 'nigerian',  hours: 1.0,  isInternational: false },
  { route: 'Lagos — Benin City',      craftType: 'nigerian',  hours: 0.8,  isInternational: false },
  { route: 'Benin City — Lagos',      craftType: 'nigerian',  hours: 0.8,  isInternational: false },
  { route: 'Lagos — Ibadan',          craftType: 'nigerian',  hours: 0.5,  isInternational: false },
  { route: 'Abuja — Ibadan',          craftType: 'nigerian',  hours: 0.9,  isInternational: false },
  { route: 'Lagos — Enugu',           craftType: 'nigerian',  hours: 1.0,  isInternational: false },
  { route: 'Abuja — Enugu',           craftType: 'nigerian',  hours: 0.8,  isInternational: false },
  { route: 'Lagos — Calabar',         craftType: 'nigerian',  hours: 1.2,  isInternational: false },
  { route: 'Lagos — Warri',           craftType: 'nigerian',  hours: 0.7,  isInternational: false },
  { route: 'Lagos — Owerri',          craftType: 'nigerian',  hours: 1.0,  isInternational: false },
  { route: 'Abuja — Yola',            craftType: 'nigerian',  hours: 1.0,  isInternational: false },
  { route: 'Lagos — Maiduguri',       craftType: 'nigerian',  hours: 2.0,  isInternational: false },
  { route: 'Kano — Port Harcourt',    craftType: 'nigerian',  hours: 1.8,  isInternational: false },
  { route: 'Port Harcourt — Kano',    craftType: 'nigerian',  hours: 1.8,  isInternational: false },
  { route: 'Abuja — Benin City',      craftType: 'nigerian',  hours: 0.9,  isInternational: false },
  { route: 'Benin City — Abuja',      craftType: 'nigerian',  hours: 0.9,  isInternational: false },

  // ── NIGERIA TO WEST AFRICA ────────────────────────────────────────────────
  { route: 'Lagos — Accra',           craftType: 'nigerianIntl', hours: 1.2, isInternational: true },
  { route: 'Accra — Lagos',           craftType: 'nigerianIntl', hours: 1.2, isInternational: true },
  { route: 'Port Harcourt — Accra',   craftType: 'nigerianIntl', hours: 1.5, isInternational: true },
  { route: 'Abuja — Accra',           craftType: 'nigerianIntl', hours: 1.5, isInternational: true },
  { route: 'Lagos — Abidjan',         craftType: 'nigerianIntl', hours: 1.5, isInternational: true },
  { route: 'Abidjan — Lagos',         craftType: 'nigerianIntl', hours: 1.5, isInternational: true },
  { route: 'Lagos — Dakar',           craftType: 'heavy',        hours: 3.5, isInternational: true },
  { route: 'Abuja — Dakar',           craftType: 'heavy',        hours: 3.8, isInternational: true },
  { route: 'Lagos — Cotonou',         craftType: 'nigerianIntl', hours: 0.6, isInternational: true },
  { route: 'Cotonou — Lagos',         craftType: 'nigerianIntl', hours: 0.6, isInternational: true },
  { route: 'Lagos — Lomé',            craftType: 'nigerianIntl', hours: 1.0, isInternational: true },
  { route: 'Lagos — Freetown',        craftType: 'heavy',        hours: 3.0, isInternational: true },
  { route: 'Lagos — Monrovia',        craftType: 'heavy',        hours: 3.2, isInternational: true },
  { route: 'Lagos — Bamako',          craftType: 'heavy',        hours: 3.8, isInternational: true },
  { route: 'Accra — Dakar',           craftType: 'heavy',        hours: 3.2, isInternational: true },
  { route: 'Accra — Abidjan',         craftType: 'light',        hours: 0.9, isInternational: true },
  { route: 'Accra — Lomé',            craftType: 'light',        hours: 0.5, isInternational: true },
  { route: 'Accra — Abuja',           craftType: 'nigerianIntl', hours: 1.5, isInternational: true },
  { route: 'Lagos — Conakry',         craftType: 'heavy',        hours: 3.3, isInternational: true },
  { route: 'Lagos — Ouagadougou',     craftType: 'heavy',        hours: 3.5, isInternational: true },
  { route: 'Lagos — Douala',          craftType: 'nigerianIntl', hours: 2.0, isInternational: true },
  { route: 'Douala — Lagos',          craftType: 'nigerianIntl', hours: 2.0, isInternational: true },
  { route: 'Lagos — Libreville',      craftType: 'nigerianIntl', hours: 2.2, isInternational: true },
  { route: 'Libreville — Lagos',      craftType: 'nigerianIntl', hours: 2.2, isInternational: true },
  { route: 'Lagos — Malabo',          craftType: 'nigerianIntl', hours: 1.5, isInternational: true },
  { route: 'Abuja — Malabo',          craftType: 'nigerianIntl', hours: 1.5, isInternational: true },
  { route: 'Lagos — São Tomé',        craftType: 'nigerianIntl', hours: 1.5, isInternational: true },
  { route: 'São Tomé — Lagos',        craftType: 'nigerianIntl', hours: 1.5, isInternational: true },
  { route: "Lagos — N'Djamena",       craftType: 'heavy',        hours: 3.0, isInternational: true },
  { route: 'Abuja — Niamey',          craftType: 'nigerianIntl', hours: 1.5, isInternational: true },

  // ── TRANS AFRICAN ─────────────────────────────────────────────────────────
  { route: 'Lagos — Nairobi',         craftType: 'ultraLong', hours: 5.5,  isInternational: true },
  { route: 'Nairobi — Lagos',         craftType: 'ultraLong', hours: 5.5,  isInternational: true },
  { route: 'Lagos — Johannesburg',    craftType: 'ultraLong', hours: 6.0,  isInternational: true },
  { route: 'Johannesburg — Lagos',    craftType: 'ultraLong', hours: 6.0,  isInternational: true },
  { route: 'Lagos — Cape Town',       craftType: 'ultraLong', hours: 6.5,  isInternational: true },
  { route: 'Cape Town — Lagos',       craftType: 'ultraLong', hours: 6.5,  isInternational: true },
  { route: 'Lagos — Kigali',          craftType: 'heavy',     hours: 5.0,  isInternational: true },
  { route: 'Kigali — Lagos',          craftType: 'heavy',     hours: 5.0,  isInternational: true },
  { route: 'Lagos — Addis Ababa',     craftType: 'ultraLong', hours: 5.8,  isInternational: true },
  { route: 'Lagos — Dar es Salaam',   craftType: 'ultraLong', hours: 5.8,  isInternational: true },
  { route: 'Lagos — Kampala',         craftType: 'heavy',     hours: 5.2,  isInternational: true },
  { route: 'Lagos — Luanda',          craftType: 'heavy',     hours: 3.8,  isInternational: true },
  { route: 'Luanda — Lagos',          craftType: 'heavy',     hours: 3.8,  isInternational: true },
  { route: 'Accra — Nairobi',         craftType: 'heavy',     hours: 5.0,  isInternational: true },
  { route: 'Accra — Johannesburg',    craftType: 'ultraLong', hours: 5.8,  isInternational: true },
  { route: 'Abuja — Nairobi',         craftType: 'heavy',     hours: 5.2,  isInternational: true },
  { route: 'Kinshasa — Accra',        craftType: 'heavy',     hours: 3.5,  isInternational: true },
  { route: 'Accra — Kinshasa',        craftType: 'heavy',     hours: 3.5,  isInternational: true },
  { route: 'Kinshasa — Lagos',        craftType: 'heavy',     hours: 3.8,  isInternational: true },
  { route: 'Kinshasa — Nairobi',      craftType: 'heavy',     hours: 4.0,  isInternational: true },
  { route: 'Kinshasa — Johannesburg', craftType: 'heavy',     hours: 4.2,  isInternational: true },
  { route: 'Johannesburg — Nairobi',  craftType: 'heavy',     hours: 4.5,  isInternational: true },
  { route: 'Nairobi — Johannesburg',  craftType: 'heavy',     hours: 4.5,  isInternational: true },
  { route: 'Cape Town — Nairobi',     craftType: 'heavy',     hours: 5.0,  isInternational: true },
  { route: 'Addis Ababa — Accra',     craftType: 'heavy',     hours: 5.0,  isInternational: true },

  // ── EAST AFRICA INTRA-REGIONAL ────────────────────────────────────────────
  { route: 'Nairobi — Kigali',         craftType: 'light',    hours: 1.2,  isInternational: true },
  { route: 'Kigali — Nairobi',         craftType: 'light',    hours: 1.2,  isInternational: true },
  { route: 'Nairobi — Kampala',        craftType: 'light',    hours: 1.0,  isInternational: true },
  { route: 'Kampala — Nairobi',        craftType: 'light',    hours: 1.0,  isInternational: true },
  { route: 'Nairobi — Dar es Salaam',  craftType: 'light',    hours: 1.0,  isInternational: true },
  { route: 'Dar es Salaam — Nairobi',  craftType: 'light',    hours: 1.0,  isInternational: true },
  { route: 'Addis Ababa — Nairobi',    craftType: 'midsize',  hours: 1.8,  isInternational: true },
  { route: 'Nairobi — Addis Ababa',    craftType: 'midsize',  hours: 1.8,  isInternational: true },
  { route: 'Kigali — Kinshasa',        craftType: 'light',    hours: 1.2,  isInternational: true },
  { route: 'Kigali — Kampala',         craftType: 'light',    hours: 0.5,  isInternational: true },
  { route: 'Kampala — Kigali',         craftType: 'light',    hours: 0.5,  isInternational: true },
  { route: 'Luanda — Kinshasa',        craftType: 'light',    hours: 1.2,  isInternational: true },
  { route: 'Dar es Salaam — Zanzibar', craftType: 'light',    hours: 0.3,  isInternational: true },

  // ── NORTH AFRICA ──────────────────────────────────────────────────────────
  { route: 'Lagos — Cairo',            craftType: 'ultraLong', hours: 5.0,  isInternational: true },
  { route: 'Cairo — Lagos',            craftType: 'ultraLong', hours: 5.0,  isInternational: true },
  { route: 'Lagos — Casablanca',       craftType: 'heavy',     hours: 4.5,  isInternational: true },
  { route: 'Casablanca — Lagos',       craftType: 'heavy',     hours: 4.5,  isInternational: true },
  { route: 'Lagos — Tunis',            craftType: 'heavy',     hours: 4.2,  isInternational: true },
  { route: 'Lagos — Algiers',          craftType: 'heavy',     hours: 4.0,  isInternational: true },
  { route: 'Abuja — Cairo',            craftType: 'heavy',     hours: 5.0,  isInternational: true },
  { route: 'Accra — Cairo',            craftType: 'heavy',     hours: 5.2,  isInternational: true },

  // ── SOUTHERN AFRICA INTRA-REGIONAL ───────────────────────────────────────
  { route: 'Johannesburg — Cape Town', craftType: 'light',     hours: 2.0,  isInternational: true },
  { route: 'Cape Town — Johannesburg', craftType: 'light',     hours: 2.0,  isInternational: true },
  { route: 'Johannesburg — Harare',    craftType: 'midsize',   hours: 1.8,  isInternational: true },
  { route: 'Harare — Johannesburg',    craftType: 'midsize',   hours: 1.8,  isInternational: true },
  { route: 'Johannesburg — Lusaka',    craftType: 'midsize',   hours: 2.0,  isInternational: true },
  { route: 'Johannesburg — Maputo',    craftType: 'light',     hours: 0.8,  isInternational: true },
  { route: 'Johannesburg — Windhoek',  craftType: 'light',     hours: 2.2,  isInternational: true },
  { route: 'Johannesburg — Gaborone',  craftType: 'light',     hours: 0.8,  isInternational: true },

  // ── NIGERIA TO EUROPE ─────────────────────────────────────────────────────
  { route: 'Lagos — London',           craftType: 'ultraLong', hours: 6.5,  isInternational: true },
  { route: 'London — Lagos',           craftType: 'ultraLong', hours: 6.5,  isInternational: true },
  { route: 'Port Harcourt — London',   craftType: 'ultraLong', hours: 6.8,  isInternational: true },
  { route: 'London — Abuja',           craftType: 'ultraLong', hours: 6.5,  isInternational: true },
  { route: 'Abuja — London',           craftType: 'ultraLong', hours: 6.5,  isInternational: true },
  { route: 'Lagos — Paris',            craftType: 'ultraLong', hours: 6.8,  isInternational: true },
  { route: 'Paris — Lagos',            craftType: 'ultraLong', hours: 6.8,  isInternational: true },
  { route: 'Lagos — Geneva',           craftType: 'ultraLong', hours: 7.0,  isInternational: true },
  { route: 'Geneva — Lagos',           craftType: 'ultraLong', hours: 7.0,  isInternational: true },
  { route: 'Lagos — Amsterdam',        craftType: 'ultraLong', hours: 6.8,  isInternational: true },
  { route: 'Lagos — Madrid',           craftType: 'ultraLong', hours: 6.5,  isInternational: true },
  { route: 'Lagos — Frankfurt',        craftType: 'ultraLong', hours: 7.0,  isInternational: true },
  { route: 'Lagos — Lisbon',           craftType: 'heavy',     hours: 6.2,  isInternational: true },
  { route: 'Lagos — Rome',             craftType: 'heavy',     hours: 6.5,  isInternational: true },
  { route: 'Lagos — Zurich',           craftType: 'ultraLong', hours: 7.0,  isInternational: true },
  { route: 'Accra — London',           craftType: 'ultraLong', hours: 6.3,  isInternational: true },
  { route: 'Accra — Paris',            craftType: 'ultraLong', hours: 6.5,  isInternational: true },
  { route: 'Nairobi — London',         craftType: 'ultraLong', hours: 8.5,  isInternational: true },
  { route: 'Johannesburg — London',    craftType: 'ultraLong', hours: 10.5, isInternational: true },
  { route: 'Cotonou — Paris',          craftType: 'heavy',     hours: 6.5,  isInternational: true },

  // ── NIGERIA TO MIDDLE EAST ────────────────────────────────────────────────
  { route: 'Lagos — Dubai',            craftType: 'ultraLong', hours: 7.0,  isInternational: true },
  { route: 'Dubai — Lagos',            craftType: 'ultraLong', hours: 7.0,  isInternational: true },
  { route: 'Abuja — Dubai',            craftType: 'ultraLong', hours: 7.0,  isInternational: true },
  { route: 'Lagos — Riyadh',           craftType: 'ultraLong', hours: 7.5,  isInternational: true },
  { route: 'Lagos — Doha',             craftType: 'ultraLong', hours: 7.2,  isInternational: true },
  { route: 'Nairobi — Dubai',          craftType: 'ultraLong', hours: 5.0,  isInternational: true },
  { route: 'Johannesburg — Dubai',     craftType: 'ultraLong', hours: 8.0,  isInternational: true },
  { route: 'Accra — Dubai',            craftType: 'ultraLong', hours: 7.0,  isInternational: true },
];

// ─── FLEET POOLS ─────────────────────────────────────────────────────────────
// nigerian: Hawker 800XP and 900XP dominant. Challenger 605 for longer legs.
// nigerianIntl: Hawker 900XP and Challenger 605. $6,500-$7,000/hr.
// light: Phenom 300/300E and Learjet 45 for non-Nigerian short hops.
// midsize: Legacy 600 for mid-range African routes.
// heavy: Challenger 605, Legacy 600, Legacy 650 for long African routes.
// ultraLong: Gulfstream G-IV and Falcon 7X. Falcon 7X international only.

const fleets = {
  nigerian:    ['Hawker 800XP', 'Hawker 900XP', 'Hawker 800XP', 'Challenger 605', 'Hawker 900XP'],
  nigerianIntl:['Hawker 900XP', 'Challenger 605', 'Hawker 900XP', 'Challenger 605'],
  light:       ['Phenom 300', 'Phenom 300E', 'Learjet 45'],
  midsize:     ['Legacy 600', 'Hawker 900XP'],
  heavy:       ['Challenger 605', 'Legacy 600', 'Legacy 650'],
  ultraLong:   ['Gulfstream G-IV', 'Falcon 7X'],
};

// Savings tiers — varied to feel realistic, not uniform
const savingsTiers = [54, 57, 60, 63, 66, 70, 72, 75, 78, 81];

const nigerianCities = ['Lagos', 'Abuja', 'Kano', 'Port Harcourt', 'Benin City', 'Calabar', 'Warri', 'Owerri', 'Yola', 'Maiduguri', 'Ibadan', 'Enugu'];

const isNigerianRoute = (route: string): boolean =>
  nigerianCities.some(city => route.includes(city));

const generateDynamicDeals = (count: number): EmptyLeg[] => {
  const generatedDeals: EmptyLeg[] = [];
  const today = new Date();

  for (let i = 0; i < count; i++) {
    const routeData = regionalHubs[i % regionalHubs.length];

    const dealDate = new Date(today);
    dealDate.setDate(today.getDate() + (i % 58) + 2);

    const formattedDate = dealDate.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });

    // Aircraft selection — Falcon 7X never on Nigerian routes
    let craftPool = [...fleets[routeData.craftType as keyof typeof fleets]];
    if (isNigerianRoute(routeData.route)) {
      craftPool = craftPool.filter(craft => craft !== 'Falcon 7X');
    }
    const chosenAircraft = craftPool[i % craftPool.length];

    // Hourly rates — corrected per aircraft type
    // Nigerian domestic Hawkers: $6,000/hr
    // Nigerian international Hawkers: $6,500/hr
    // Challenger 605 Nigeria: $8,500/hr
    // Heavy African routes: $8,000/hr
    // G-IV international: $12,000/hr
    // Falcon 7X: $10,000/hr
    let hourlyRate = 6000;

    if (routeData.craftType === 'nigerian') {
      hourlyRate = chosenAircraft === 'Challenger 605' ? 8500 : 6000;
    } else if (routeData.craftType === 'nigerianIntl') {
      hourlyRate = chosenAircraft === 'Challenger 605' ? 8500 : 6500;
    } else if (routeData.craftType === 'light') {
      hourlyRate = 5500;
    } else if (routeData.craftType === 'midsize') {
      hourlyRate = 6500;
    } else if (routeData.craftType === 'heavy') {
      hourlyRate = 8000;
    } else if (routeData.craftType === 'ultraLong') {
      hourlyRate = chosenAircraft === 'Gulfstream G-IV' ? 12000 : 10000;
    }

    // Regional fuel premium variance — up to 15%
    const regionalPremium = 1.0 + ((i * 2) % 4) * 0.05;

    // Retail = single leg hours × hourly rate × premium
    const calculatedRetail = Math.round(routeData.hours * hourlyRate * regionalPremium);

    // Savings pulled from varied tiers — not uniform
    const savingsPercent = savingsTiers[i % savingsTiers.length];
    const discountedPrice = Math.round(calculatedRetail * (1 - savingsPercent / 100));

    generatedDeals.push({
      route:         routeData.route,
      date:          formattedDate,
      aircraft:      chosenAircraft,
      price:         `$${discountedPrice.toLocaleString()}`,
      originalPrice: `$${calculatedRetail.toLocaleString()}`,
      savings:       `${savingsPercent}%`,
    });
  }

  return generatedDeals.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};

const allLegs: EmptyLeg[] = generateDynamicDeals(200);

const PAGE_SIZE = 20;

const EmptyLegs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.el-heading', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.fromTo('.el-row', { opacity: 0, y: 15 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08,
        scrollTrigger: { trigger: '.el-table', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const visibleLegs = allLegs.slice(0, visibleCount);
  const hasMore = visibleCount < allLegs.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + PAGE_SIZE, allLegs.length));
  };
const handleCollapseList = () => {
  setVisibleCount(8);

  sectionRef.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
  return (
    <section id="empty-legs" ref={sectionRef} className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="el-heading flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">Available Now</p>
            <h2 className="font-serif text-4xl md:text-5xl text-sarvene-black font-normal tracking-tight">Empty Legs</h2>
          </div>
          <div className="max-w-md">
  <p className="font-sans text-sm text-sarvene-black/50 leading-relaxed">
    Repositioning flights at significantly reduced rates. Ideal for flexible travelers seeking exceptional value on private aviation. Updated daily.
  </p>

  <p className="font-sans text-xs text-sarvene-black/40 leading-relaxed mt-2">
    Kindly note: Empty leg flights are one-way repositioning routes made available when aircraft fly without passengers to their next destination, offered at significantly reduced rates.
  </p>
</div>
        
        </div>

        <div className="el-table border border-sarvene-black/8">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-sarvene-cream/50 border-b border-sarvene-black/8">
            <div className="col-span-3 font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40">Route</div>
            <div className="col-span-2 font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40">Date</div>
            <div className="col-span-3 font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40">Aircraft</div>
            <div className="col-span-2 font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40">Price</div>
            <div className="col-span-2"></div>
          </div>

          {visibleLegs.map((leg, i) => (
            <div key={i} className="el-row grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 border-b border-sarvene-black/5 hover:bg-sarvene-cream/30 transition-colors items-center">
              <div className="col-span-3">
                <p className="font-sans text-sm font-medium text-sarvene-black">{leg.route}</p>
                <div className="md:hidden flex items-center gap-2 mt-1">
                  <span className="font-sans text-[11px] text-sarvene-black/40">{leg.date}</span>
                  <span className="font-sans text-[11px] text-sarvene-black/40">{leg.aircraft}</span>
                </div>
              </div>
              <div className="col-span-2 hidden md:flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sarvene-obsidian/30" />
                <span className="font-sans text-sm text-sarvene-black/60">{leg.date}</span>
              </div>
              <div className="col-span-3 hidden md:block">
                <span className="font-sans text-sm text-sarvene-black/60">{leg.aircraft}</span>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-sm font-medium text-sarvene-black">{leg.price}</span>
                  <span className="font-sans text-xs text-sarvene-black/30 line-through">{leg.originalPrice}</span>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-between md:justify-end gap-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 font-sans text-[10px] tracking-wider text-green-700">
                  <Tag className="w-3 h-3" /> Save {leg.savings}
                </span>
                <a
                  href={`https://wa.me/2349020316094?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20empty%20leg%20flight%3A%20${encodeURIComponent(leg.route)}%20on%20${encodeURIComponent(leg.date)}%20(${encodeURIComponent(leg.aircraft)}).%20Please%20send%20me%20more%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] tracking-[0.12em] uppercase text-sarvene-obsidian hover:text-sarvene-matte transition-colors flex items-center gap-1"
                >
                  Book <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
  {hasMore && (
    <button
      onClick={handleShowMore}
      className="font-sans text-[11px] tracking-[0.2em] uppercase text-sarvene-obsidian border border-sarvene-black/20 px-8 py-3 hover:bg-sarvene-cream/50 transition-colors"
    >
      Show More
    </button>
  )}

  {visibleCount > 8 && (
    <button
      onClick={handleCollapseList}
      className="font-sans text-[11px] tracking-[0.2em] uppercase text-sarvene-obsidian border border-sarvene-black/20 px-8 py-3 hover:bg-sarvene-black/5 transition-colors"
    >
      Collapse List
    </button>
  )}
</div>

        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="font-sans text-[11px] text-gray-400 tracking-wide leading-relaxed uppercase max-w-4xl">
            * All flights are subject to operator availability and final schedule confirmation. Original rates represent standard market single-leg charter baselines. To check real-time availability, contact the desk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmptyLegs;