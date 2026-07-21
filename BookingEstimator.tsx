import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calculator, MessageSquare, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// SARVENE JETS - CHARTER ESTIMATE CALCULATOR
// Aviation standard: round up to nearest 0.5hr
// ============================================

const airportDatabase: { city: string; iata: string; icao: string; country: string; lat: number; lon: number }[] = [
  // NIGERIA
  { city: 'Lagos', iata: 'LOS', icao: 'DNMM', country: 'Nigeria', lat: 6.577, lon: 3.321 },
  { city: 'Abuja', iata: 'ABV', icao: 'DNAA', country: 'Nigeria', lat: 9.007, lon: 7.263 },
  { city: 'Port Harcourt', iata: 'PHC', icao: 'DNPO', country: 'Nigeria', lat: 5.015, lon: 6.949 },
  { city: 'Kano', iata: 'KAN', icao: 'DNKN', country: 'Nigeria', lat: 12.048, lon: 8.524 },
  { city: 'Enugu', iata: 'ENU', icao: 'DNEN', country: 'Nigeria', lat: 6.474, lon: 7.562 },
  { city: 'Owerri', iata: 'QOW', icao: 'DNIM', country: 'Nigeria', lat: 5.427, lon: 7.026 },
  { city: 'Asaba', iata: 'ABB', icao: 'DNAS', country: 'Nigeria', lat: 6.204, lon: 6.665 },
  { city: 'Uyo', iata: 'QUO', icao: 'DNUY', country: 'Nigeria', lat: 4.874, lon: 8.093 },
  { city: 'Calabar', iata: 'CBQ', icao: 'DNCA', country: 'Nigeria', lat: 4.976, lon: 8.347 },
  { city: 'Benin City', iata: 'BNI', icao: 'DNBE', country: 'Nigeria', lat: 6.320, lon: 5.600 },
  { city: 'Ilorin', iata: 'ILR', icao: 'DNIL', country: 'Nigeria', lat: 8.440, lon: 4.493 },
  { city: 'Maiduguri', iata: 'MIU', icao: 'DNMA', country: 'Nigeria', lat: 11.855, lon: 13.081 },
  { city: 'Sokoto', iata: 'SKO', icao: 'DNSO', country: 'Nigeria', lat: 12.916, lon: 5.207 },
  { city: 'Yola', iata: 'YOL', icao: 'DNYO', country: 'Nigeria', lat: 9.257, lon: 12.430 },
  { city: 'Kaduna', iata: 'KAD', icao: 'DNKA', country: 'Nigeria', lat: 10.696, lon: 7.320 },
  { city: 'Jos', iata: 'JOS', icao: 'DNJO', country: 'Nigeria', lat: 9.640, lon: 8.860 },
  { city: 'Ibadan', iata: 'IBA', icao: 'DNIB', country: 'Nigeria', lat: 7.362, lon: 3.978 },
  { city: 'Akure', iata: 'AKR', icao: 'DNAK', country: 'Nigeria', lat: 7.247, lon: 5.301 },
  { city: 'Warri', iata: 'QRW', icao: 'DNSU', country: 'Nigeria', lat: 5.520, lon: 5.750 },
  { city: 'Bauchi', iata: 'BCU', icao: 'DNBC', country: 'Nigeria', lat: 10.294, lon: 9.814 },
  // GHANA
  { city: 'Accra', iata: 'ACC', icao: 'DGAA', country: 'Ghana', lat: 5.605, lon: -0.167 },
  { city: 'Kumasi', iata: 'KMS', icao: 'DGSI', country: 'Ghana', lat: 6.711, lon: -1.591 },
  { city: 'Takoradi', iata: 'TKD', icao: 'DGTK', country: 'Ghana', lat: 4.896, lon: -1.774 },
  // OTHER WEST / CENTRAL AFRICA
  { city: 'Lome', iata: 'LFW', icao: 'DXXX', country: 'Togo', lat: 6.166, lon: 1.254 },
  { city: 'Cotonou', iata: 'COO', icao: 'DBBB', country: 'Benin', lat: 6.357, lon: 2.384 },
  { city: 'Abidjan', iata: 'ABJ', icao: 'DIAP', country: "Cote d'Ivoire", lat: 5.261, lon: -3.926 },
  { city: 'Dakar', iata: 'DSS', icao: 'GOBD', country: 'Senegal', lat: 14.670, lon: -17.073 },
  { city: 'Freetown', iata: 'FNA', icao: 'GFLL', country: 'Sierra Leone', lat: 8.616, lon: -13.196 },
  { city: 'Monrovia', iata: 'ROB', icao: 'GLRB', country: 'Liberia', lat: 6.234, lon: -10.362 },
  { city: 'Conakry', iata: 'CKY', icao: 'GUCY', country: 'Guinea', lat: 9.577, lon: -13.612 },
  { city: 'Bamako', iata: 'BKO', icao: 'GABS', country: 'Mali', lat: 12.533, lon: -7.950 },
  { city: 'Niamey', iata: 'NIM', icao: 'DRRN', country: 'Niger', lat: 13.481, lon: 2.183 },
  { city: "N'Djamena", iata: 'NDJ', icao: 'FTTJ', country: 'Chad', lat: 12.134, lon: 15.034 },
  { city: 'Douala', iata: 'DLA', icao: 'FKKD', country: 'Cameroon', lat: 4.006, lon: 9.719 },
  { city: 'Yaounde', iata: 'NSI', icao: 'FKYS', country: 'Cameroon', lat: 3.722, lon: 11.553 },
  { city: 'Libreville', iata: 'LBV', icao: 'FOOL', country: 'Gabon', lat: 0.459, lon: 9.412 },
  { city: 'Kinshasa', iata: 'FIH', icao: 'FZAA', country: 'DR Congo', lat: -4.386, lon: 15.445 },
  // EAST AFRICA
  { city: 'Entebbe / Kampala', iata: 'EBB', icao: 'HUEN', country: 'Uganda', lat: 0.050, lon: 32.460 },
  { city: 'Kigali', iata: 'KGL', icao: 'HRYR', country: 'Rwanda', lat: -1.963, lon: 30.140 },
  { city: 'Nairobi', iata: 'NBO', icao: 'HKJK', country: 'Kenya', lat: -1.319, lon: 36.925 },
  { city: 'Nairobi Wilson', iata: 'WIL', icao: 'HKNW', country: 'Kenya', lat: -1.322, lon: 36.815 },
  { city: 'Mombasa', iata: 'MBA', icao: 'HKMO', country: 'Kenya', lat: -4.035, lon: 39.594 },
  { city: 'Dar es Salaam', iata: 'DAR', icao: 'HTDA', country: 'Tanzania', lat: -6.878, lon: 39.203 },
  { city: 'Zanzibar', iata: 'ZNZ', icao: 'HTZA', country: 'Tanzania', lat: -6.222, lon: 39.225 },
  { city: 'Addis Ababa', iata: 'ADD', icao: 'HAAB', country: 'Ethiopia', lat: 8.978, lon: 38.799 },
  // SOUTHERN AFRICA
  { city: 'Johannesburg', iata: 'JNB', icao: 'FAOR', country: 'South Africa', lat: -26.139, lon: 28.246 },
  { city: 'Johannesburg Lanseria', iata: 'HLA', icao: 'FALA', country: 'South Africa', lat: -25.939, lon: 27.926 },
  { city: 'Cape Town', iata: 'CPT', icao: 'FACT', country: 'South Africa', lat: -33.971, lon: 18.602 },
  { city: 'Durban', iata: 'DUR', icao: 'FALE', country: 'South Africa', lat: -29.615, lon: 31.119 },
  { city: 'Windhoek', iata: 'WDH', icao: 'FYWH', country: 'Namibia', lat: -22.480, lon: 17.470 },
  { city: 'Gaborone', iata: 'GBE', icao: 'FBSK', country: 'Botswana', lat: -24.555, lon: 25.918 },
  { city: 'Lusaka', iata: 'LUN', icao: 'FLLS', country: 'Zambia', lat: -15.331, lon: 28.452 },
  { city: 'Harare', iata: 'HRE', icao: 'FVHA', country: 'Zimbabwe', lat: -17.932, lon: 31.093 },
  { city: 'Maputo', iata: 'MPM', icao: 'FQMA', country: 'Mozambique', lat: -25.921, lon: 32.573 },
  { city: 'Port Louis', iata: 'MRU', icao: 'FIMP', country: 'Mauritius', lat: -20.430, lon: 57.684 },
  { city: 'Mahe / Victoria', iata: 'SEZ', icao: 'FSIA', country: 'Seychelles', lat: -4.674, lon: 55.522 },
  // NORTH AFRICA
  { city: 'Cairo', iata: 'CAI', icao: 'HECA', country: 'Egypt', lat: 30.122, lon: 31.406 },
  { city: 'Alexandria', iata: 'HBE', icao: 'HEBA', country: 'Egypt', lat: 30.918, lon: 29.696 },
  { city: 'Casablanca', iata: 'CMN', icao: 'GMMN', country: 'Morocco', lat: 33.367, lon: -7.590 },
  { city: 'Marrakech', iata: 'RAK', icao: 'GMMX', country: 'Morocco', lat: 31.606, lon: -8.036 },
  { city: 'Tunis', iata: 'TUN', icao: 'DTTA', country: 'Tunisia', lat: 36.851, lon: 10.227 },
  { city: 'Algiers', iata: 'ALG', icao: 'DAAG', country: 'Algeria', lat: 36.691, lon: 3.215 },
  // UAE / MIDDLE EAST
  { city: 'Dubai', iata: 'DXB', icao: 'OMDB', country: 'UAE', lat: 25.253, lon: 55.365 },
  { city: 'Dubai Al Maktoum', iata: 'DWC', icao: 'OMDW', country: 'UAE', lat: 24.897, lon: 55.161 },
  { city: 'Abu Dhabi', iata: 'AUH', icao: 'OMAA', country: 'UAE', lat: 24.433, lon: 54.651 },
  { city: 'Doha', iata: 'DOH', icao: 'OTHH', country: 'Qatar', lat: 25.273, lon: 51.608 },
  { city: 'Riyadh', iata: 'RUH', icao: 'OERK', country: 'Saudi Arabia', lat: 24.958, lon: 46.699 },
  { city: 'Jeddah', iata: 'JED', icao: 'OEJN', country: 'Saudi Arabia', lat: 21.680, lon: 39.157 },
  { city: 'Kuwait City', iata: 'KWI', icao: 'OKBK', country: 'Kuwait', lat: 29.227, lon: 47.969 },
  { city: 'Manama', iata: 'BAH', icao: 'OBBI', country: 'Bahrain', lat: 26.271, lon: 50.635 },
  // EUROPE
  { city: 'London Heathrow', iata: 'LHR', icao: 'EGLL', country: 'United Kingdom', lat: 51.470, lon: -0.461 },
  { city: 'London Farnborough', iata: 'FAB', icao: 'EGLF', country: 'United Kingdom', lat: 51.276, lon: -0.776 },
  { city: 'London Luton', iata: 'LTN', icao: 'EGGW', country: 'United Kingdom', lat: 51.874, lon: -0.368 },
  { city: 'London Stansted', iata: 'STN', icao: 'EGSS', country: 'United Kingdom', lat: 51.885, lon: 0.235 },
  { city: 'Paris CDG', iata: 'CDG', icao: 'LFPG', country: 'France', lat: 49.009, lon: 2.548 },
  { city: 'Paris Le Bourget', iata: 'LBG', icao: 'LFPB', country: 'France', lat: 48.969, lon: 2.441 },
  { city: 'Nice', iata: 'NCE', icao: 'LFMN', country: 'France', lat: 43.658, lon: 7.215 },
  { city: 'Geneva', iata: 'GVA', icao: 'LSGG', country: 'Switzerland', lat: 46.238, lon: 6.109 },
  { city: 'Zurich', iata: 'ZRH', icao: 'LSZH', country: 'Switzerland', lat: 47.464, lon: 8.549 },
  { city: 'Amsterdam', iata: 'AMS', icao: 'EHAM', country: 'Netherlands', lat: 52.310, lon: 4.768 },
  { city: 'Frankfurt', iata: 'FRA', icao: 'EDDF', country: 'Germany', lat: 50.037, lon: 8.562 },
  { city: 'Munich', iata: 'MUC', icao: 'EDDM', country: 'Germany', lat: 48.354, lon: 11.786 },
  { city: 'Milan', iata: 'MXP', icao: 'LIMC', country: 'Italy', lat: 45.630, lon: 8.728 },
  { city: 'Rome', iata: 'FCO', icao: 'LIRF', country: 'Italy', lat: 41.799, lon: 12.246 },
  { city: 'Madrid', iata: 'MAD', icao: 'LEMD', country: 'Spain', lat: 40.493, lon: -3.566 },
  { city: 'Marbella / Malaga', iata: 'AGP', icao: 'LEMG', country: 'Spain', lat: 36.675, lon: -4.499 },
  { city: 'Ibiza', iata: 'IBZ', icao: 'LEIB', country: 'Spain', lat: 38.873, lon: 1.373 },
  { city: 'Lisbon', iata: 'LIS', icao: 'LPPT', country: 'Portugal', lat: 38.781, lon: -9.136 },
  { city: 'Brussels', iata: 'BRU', icao: 'EBBR', country: 'Belgium', lat: 50.901, lon: 4.484 },
  { city: 'Vienna', iata: 'VIE', icao: 'LOWW', country: 'Austria', lat: 48.110, lon: 16.570 },
  { city: 'Dublin', iata: 'DUB', icao: 'EIDW', country: 'Ireland', lat: 53.421, lon: -6.270 },
  { city: 'Athens', iata: 'ATH', icao: 'LGAV', country: 'Greece', lat: 37.936, lon: 23.947 },
  { city: 'Malta', iata: 'MLA', icao: 'LMML', country: 'Malta', lat: 35.857, lon: 14.477 },
  // USA
  { city: 'New York JFK', iata: 'JFK', icao: 'KJFK', country: 'USA', lat: 40.641, lon: -73.778 },
  { city: 'Teterboro', iata: 'TEB', icao: 'KTEB', country: 'USA', lat: 40.850, lon: -74.061 },
  { city: 'Miami', iata: 'MIA', icao: 'KMIA', country: 'USA', lat: 25.795, lon: -80.287 },
  { city: 'Palm Beach', iata: 'PBI', icao: 'KPBI', country: 'USA', lat: 26.683, lon: -80.096 },
  { city: 'Los Angeles', iata: 'LAX', icao: 'KLAX', country: 'USA', lat: 33.942, lon: -118.408 },
  { city: 'Van Nuys', iata: 'VNY', icao: 'KVNY', country: 'USA', lat: 34.210, lon: -118.490 },
  { city: 'Las Vegas', iata: 'LAS', icao: 'KLAS', country: 'USA', lat: 36.084, lon: -115.153 },
  { city: 'San Francisco', iata: 'SFO', icao: 'KSFO', country: 'USA', lat: 37.621, lon: -122.379 },
  { city: 'Houston', iata: 'IAH', icao: 'KIAH', country: 'USA', lat: 29.984, lon: -95.341 },
  { city: 'Dallas', iata: 'DFW', icao: 'KDFW', country: 'USA', lat: 32.897, lon: -97.038 },
  { city: 'Chicago', iata: 'ORD', icao: 'KORD', country: 'USA', lat: 41.978, lon: -87.904 },
  { city: 'Boston', iata: 'BOS', icao: 'KBOS', country: 'USA', lat: 42.365, lon: -71.010 },
  { city: 'Atlanta', iata: 'ATL', icao: 'KATL', country: 'USA', lat: 33.640, lon: -84.427 },
  { city: 'Washington DC', iata: 'IAD', icao: 'KIAD', country: 'USA', lat: 38.953, lon: -77.456 },
  // ASIA
  { city: 'Singapore', iata: 'SIN', icao: 'WSSS', country: 'Singapore', lat: 1.364, lon: 103.991 },
  { city: 'Hong Kong', iata: 'HKG', icao: 'VHHH', country: 'Hong Kong', lat: 22.308, lon: 113.915 },
  { city: 'Tokyo', iata: 'NRT', icao: 'RJAA', country: 'Japan', lat: 35.765, lon: 140.386 },
  { city: 'Mumbai', iata: 'BOM', icao: 'VABB', country: 'India', lat: 19.089, lon: 72.868 },
  { city: 'Delhi', iata: 'DEL', icao: 'VIDP', country: 'India', lat: 28.556, lon: 77.100 },
  { city: 'Bangkok', iata: 'BKK', icao: 'VTBS', country: 'Thailand', lat: 13.681, lon: 100.747 },
  { city: 'Kuala Lumpur', iata: 'KUL', icao: 'WMKK', country: 'Malaysia', lat: 2.745, lon: 101.710 },
  { city: 'Beijing', iata: 'PEK', icao: 'ZBAA', country: 'China', lat: 40.080, lon: 116.584 },
  { city: 'Shanghai', iata: 'PVG', icao: 'ZSPD', country: 'China', lat: 31.143, lon: 121.805 },
  { city: 'Seoul', iata: 'ICN', icao: 'RKSI', country: 'South Korea', lat: 37.469, lon: 126.451 },
  { city: 'Jakarta', iata: 'CGK', icao: 'WIII', country: 'Indonesia', lat: -6.126, lon: 106.656 },
  { city: 'Bali', iata: 'DPS', icao: 'WADD', country: 'Indonesia', lat: -8.748, lon: 115.167 },
  { city: 'Manila', iata: 'MNL', icao: 'RPLL', country: 'Philippines', lat: 14.509, lon: 121.020 },
  { city: 'Ho Chi Minh City', iata: 'SGN', icao: 'VVTS', country: 'Vietnam', lat: 10.819, lon: 106.652 },
  { city: 'Male', iata: 'MLE', icao: 'VRMM', country: 'Maldives', lat: 4.192, lon: 73.529 },
];

const jetCategories = [
  { name: 'Light Jet', rate: 5500, maxHours: 4.0, cruiseKt: 400, classRatio: 0.42, maxRangeNM: 1600, exampleAircraft: 'Phenom 300E' },
  { name: 'Midsize Jet', rate: 6500, maxHours: 6.4, cruiseKt: 420, classRatio: 0.50, maxRangeNM: 2700, exampleAircraft: 'Citation XLS' },
  { name: 'Heavy Jet', rate: 8000, maxHours: 8.7, cruiseKt: 450, classRatio: 0.59, maxRangeNM: 3900, exampleAircraft: 'Legacy 650' },
  { name: 'Ultra Long Range / VIP', rate: 16000, maxHours: 24, cruiseKt: 480, classRatio: 1.0, maxRangeNM: 6000, exampleAircraft: 'Global 6000' },
];

// Approximate speed of sound at typical business-jet cruise altitude (~FL380-FL410, ISA conditions)
const SPEED_OF_SOUND_KT = 573;

// ============================================
// REGIONAL PRICING MATRIX
// ============================================
// West Africa & rest of Africa are home-based hub markets — short intra-
// regional hops bill a 2-hour-minimum round trip because the aircraft has
// to return to base. Europe, US, MEA and Asia are dense floating-fleet
// markets — intra-regional hops bill live block hours (1hr floor) with a
// tight local buffer, since competition keeps positioning cheap. Any leg
// that CROSSES regions (e.g. Lagos-London, Geneva-Cape Town, Dubai-Lagos)
// bills as one-way intercontinental floating-fleet repositioning off the
// ORIGIN region's rate table, shown as a range.
const WEST_AFRICA_COUNTRIES = new Set(['Nigeria', 'Ghana', "Cote d'Ivoire", 'Senegal', 'Togo', 'Benin', 'Sierra Leone', 'Liberia', 'Guinea', 'Mali', 'Niger', 'Chad', 'Cameroon', 'Gabon', 'DR Congo']);
const AFRICA_OTHER_COUNTRIES = new Set(['Uganda', 'Rwanda', 'Kenya', 'South Africa', 'Ethiopia', 'Egypt', 'Morocco', 'Tanzania', 'Namibia', 'Botswana', 'Zambia', 'Zimbabwe', 'Mozambique', 'Mauritius', 'Seychelles', 'Tunisia', 'Algeria']);
const EUROPE_COUNTRIES = new Set(['United Kingdom', 'France', 'Switzerland', 'Netherlands', 'Germany', 'Italy', 'Spain', 'Portugal', 'Belgium', 'Austria', 'Ireland', 'Greece', 'Malta']);
const MEA_COUNTRIES = new Set(['UAE', 'Qatar', 'Saudi Arabia', 'Kuwait', 'Bahrain']);
const ASIA_COUNTRIES = new Set(['Singapore', 'Hong Kong', 'Japan', 'India', 'Thailand', 'Malaysia', 'China', 'South Korea', 'Indonesia', 'Philippines', 'Vietnam', 'Maldives']);
const USA_COUNTRIES = new Set(['USA']);

type Region = 'WEST_AFRICA' | 'AFRICA_OTHER' | 'EUROPE' | 'USA' | 'MEA' | 'ASIA' | 'DEFAULT';

function getRegion(country: string): Region {
  if (WEST_AFRICA_COUNTRIES.has(country)) return 'WEST_AFRICA';
  if (AFRICA_OTHER_COUNTRIES.has(country)) return 'AFRICA_OTHER';
  if (EUROPE_COUNTRIES.has(country)) return 'EUROPE';
  if (USA_COUNTRIES.has(country)) return 'USA';
  if (MEA_COUNTRIES.has(country)) return 'MEA';
  if (ASIA_COUNTRIES.has(country)) return 'ASIA';
  return 'DEFAULT';
}

// Intra-region hourly rates for floating-fleet-dense markets (per class)
const INTRA_REGION_RATES: Record<string, { light: number; midsize: number; heavy: number; ulr: number; bufferLow: number; bufferHigh: number; hourFloor: number }> = {
  EUROPE: { light: 5250, midsize: 6250, heavy: 7375, ulr: 12500, bufferLow: 1.15, bufferHigh: 1.20, hourFloor: 1.0 },
  USA:    { light: 5000, midsize: 6500, heavy: 9500,  ulr: 15000, bufferLow: 1.10, bufferHigh: 1.15, hourFloor: 1.0 },
  MEA:    { light: 6000, midsize: 7500, heavy: 10500, ulr: 15000, bufferLow: 1.18, bufferHigh: 1.22, hourFloor: 1.0 },
  ASIA:   { light: 5750, midsize: 7250, heavy: 10000, ulr: 13500, bufferLow: 1.25, bufferHigh: 1.30, hourFloor: 1.0 },
};

// Cross-region (intercontinental) one-way floating-fleet ULR-class rates, keyed by ORIGIN region.
// Rate is roughly global for a true floating-fleet network — Africa is not
// charged a premium here; the old Nigeria-specific premium lives in the
// jetCategories base rates above, for home-based intra-West-Africa legs only.
const FLOATING_FLEET_RATES: Record<string, number> = {
  EUROPE: 16500,
  USA: 17500,
  MEA: 17000,
  ASIA: 18500,
  WEST_AFRICA: 17500,
  AFRICA_OTHER: 17500,
  DEFAULT: 17500,
};

function jetClassKey(jetName: string): 'light' | 'midsize' | 'heavy' | 'ulr' {
  if (jetName.startsWith('Light')) return 'light';
  if (jetName.startsWith('Midsize')) return 'midsize';
  if (jetName.startsWith('Heavy')) return 'heavy';
  return 'ulr';
}

// Haversine distance in nautical miles
function calculateDistanceNM(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3440.065;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
}

// Aviation standard: round UP to nearest 0.5hr
function roundUpHalf(hours: number): number {
  return Math.ceil(hours * 2) / 2;
}

// Find airport by IATA code, ICAO code, or city name — exact first, then partial
function findAirport(input: string) {
  const search = input.trim().toUpperCase();
  return (
    airportDatabase.find(a => a.iata === search) ||
    airportDatabase.find(a => a.icao === search) ||
    airportDatabase.find(a => a.city.toUpperCase() === search) ||
    airportDatabase.find(a => a.city.toUpperCase().startsWith(search) && search.length >= 2) ||
    null
  );
}

// Deduplicated autocomplete suggestions — matches city, IATA or ICAO
function getAutocompleteSuggestions(input: string) {
  if (!input || input.length < 2) return [];
  const search = input.toUpperCase();
  const seen = new Set<string>();
  return airportDatabase
    .filter(a => a.city.toUpperCase().includes(search) || a.iata.includes(search) || a.icao.includes(search))
    .filter(a => { if (seen.has(a.iata)) return false; seen.add(a.iata); return true; })
    .slice(0, 6)
    .map(a => ({ label: `${a.city} (${a.iata} / ${a.icao})`, value: a.iata, city: a.city }));
}

function calculateSarveneEstimate(originInput: string, destinationInput: string) {
  const origin = findAirport(originInput);
  const destination = findAirport(destinationInput);

  if (!origin) return { error: `"${originInput}" not recognised. Try a city name or IATA code.` };
  if (!destination) return { error: `"${destinationInput}" not recognised. Try a city name or IATA code.` };
  if (origin.iata === destination.iata) return { error: 'Origin and destination cannot be the same.' };

  const distanceNM = calculateDistanceNM(origin.lat, origin.lon, destination.lat, destination.lon);
  const originRegion = getRegion(origin.country);
  const destRegion = getRegion(destination.country);
  const isDomestic = origin.country === 'Nigeria' && destination.country === 'Nigeria';

  // Select aircraft by checking each class against ITS OWN cruise speed —
  // not a single conservative pass — so borderline routes don't get bumped
  // up a class purely because the selection pass used a slower reference speed.
  let selectedJet = jetCategories[jetCategories.length - 1];
  let actualLegTime = roundUpHalf(distanceNM / selectedJet.cruiseKt);
  for (const jet of jetCategories) {
    const legTime = roundUpHalf(distanceNM / jet.cruiseKt);
    if (legTime <= jet.maxHours) {
      selectedJet = jet;
      actualLegTime = legTime;
      break;
    }
  }
  const classKey = jetClassKey(selectedJet.name);

  const sameRegion = originRegion === destRegion;
  const isFloatingFleetRegion = originRegion === 'EUROPE' || originRegion === 'USA' || originRegion === 'MEA' || originRegion === 'ASIA';

  let billingHours: number;
  let amountLow: number;
  let amountHigh: number;
  let disclaimer: string;
  let isLongHaul = false;

  if (sameRegion && (originRegion === 'WEST_AFRICA' || (originRegion === 'AFRICA_OTHER' && actualLegTime < 4))) {
    // Home-based hub rule: 2-hour minimum round trip billing
    const feeMultiplier = isDomestic ? 1.12 : 1.20;
    const roundTripTime = Math.max(actualLegTime * 2, 2.0);
    billingHours = Math.ceil(roundTripTime);
    const amount = Math.round(billingHours * selectedJet.rate * feeMultiplier);
    amountLow = amount;
    amountHigh = Math.round(amount * 1.08);
    disclaimer = 'Estimate includes repositioning fees to return aircraft to base (2-hour minimum billing applies).';
  } else if (sameRegion && originRegion === 'AFRICA_OTHER') {
    // Major inter-African corridor — floating fleet one-way, no round trip
    billingHours = Math.ceil(actualLegTime * 1.30);
    const amount = Math.round(billingHours * selectedJet.rate);
    amountLow = amount;
    amountHigh = Math.round(amount * 1.12);
    disclaimer = 'Estimate reflects one-way floating-fleet positioning on a major inter-African corridor. Final routing subject to live aircraft availability.';
  } else if (sameRegion && isFloatingFleetRegion) {
    // Intra-region floating fleet market: live hours, 1hr floor, tight local buffer
    const table = INTRA_REGION_RATES[originRegion];
    const billableHours = Math.max(actualLegTime, table.hourFloor);
    const rate = table[classKey];
    amountLow = Math.round(billableHours * rate * table.bufferLow);
    amountHigh = Math.round(billableHours * rate * table.bufferHigh);
    billingHours = Math.ceil(billableHours);
    disclaimer = 'Estimate reflects live block time at standard intra-regional floating-fleet rates. Final quote subject to live aircraft availability.';
  } else {
    // Cross-region: intercontinental one-way floating-fleet repositioning.
    // Rate is the ULR-tier rate for the cheaper of the two connected regions
    // (a broker sources the cheapest available floating aircraft from either
    // end), scaled down by aircraft class since a Heavy jet doesn't cost the
    // same per hour as a ULR on the same corridor.
    isLongHaul = true;
    const baseRate = Math.min(
      FLOATING_FLEET_RATES[originRegion] ?? FLOATING_FLEET_RATES.DEFAULT,
      FLOATING_FLEET_RATES[destRegion] ?? FLOATING_FLEET_RATES.DEFAULT
    );
    const rate = Math.round(baseRate * selectedJet.classRatio);
    billingHours = Math.ceil(actualLegTime);
    const amount = billingHours * rate;
    amountLow = amount;
    amountHigh = Math.round(amount * 1.15);
    disclaimer = 'Estimate reflects one-way floating-fleet positioning for long-range routes. Final routing and pricing subject to live aircraft availability.';
  }

  return {
    amountLow,
    amountHigh,
    jetName: selectedJet.name,
    selectedJet,
    billingHours,
    roundedLegTime: actualLegTime,
    originCity: origin.city,
    originIata: origin.iata,
    destinationCity: destination.city,
    destinationIata: destination.iata,
    distanceNM,
    isDomestic,
    isLongHaul,
    disclaimer,
  };
}

// ============================================
// REACT COMPONENT
// ============================================

const BookingEstimator = ({
  onRequestQuote = () => {},
  prefillFrom = '',
  prefillTo = '',
  prefillDate = '',
}: {
  onRequestQuote?: (route: string, date: string) => void;
  prefillFrom?: string;
  prefillTo?: string;
  prefillDate?: string;
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fromSuggestions, setFromSuggestions] = useState<{label:string;value:string;city:string}[]>([]);
  const [toSuggestions, setToSuggestions] = useState<{label:string;value:string;city:string}[]>([]);
  const [result, setResult] = useState<ReturnType<typeof calculateSarveneEstimate> | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAdvisor, setShowAdvisor] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.estimator-panel', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (prefillFrom) setFrom(prefillFrom);
    if (prefillTo) setTo(prefillTo);
  }, [prefillFrom, prefillTo]);

  const handleFromChange = (val: string) => {
    setFrom(val);
    setFromSuggestions(getAutocompleteSuggestions(val));
    setResult(null);
  };

  const handleToChange = (val: string) => {
    setTo(val);
    setToSuggestions(getAutocompleteSuggestions(val));
    setResult(null);
  };

  const selectFrom = (city: string) => { setFrom(city); setFromSuggestions([]); };
  const selectTo = (city: string) => { setTo(city); setToSuggestions([]); };

  const calculate = () => {
    if (!from.trim() || !to.trim()) return;
    setIsCalculating(true);
    setResult(null);
    setTimeout(() => {
      setResult(calculateSarveneEstimate(from, to));
      setIsCalculating(false);
    }, 400);
  };

  const setRoute = (f: string, t: string) => {
    setFrom(f); setTo(t);
    setFromSuggestions([]); setToSuggestions([]);
    setResult(null);
  };

  const res = result && 'amountLow' in result ? result : null;
  const err = result && 'error' in result ? result.error : null;

  return (
    <section id="booking-estimator" ref={sectionRef} className="bg-sarvene-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-14">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-sarvene-black/40 mb-4">
            Charter Estimator
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-sarvene-black font-normal tracking-tight mb-4">
            Get an Instant Estimate
          </h2>
          <p className="font-sans text-sm text-sarvene-black/50 leading-relaxed max-w-xl">
            Enter your departure city and destination to see a real-time charter estimate. For tailored quotes, speak directly with an advisor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Estimator */}
          <div className="estimator-panel bg-white border border-sarvene-black/6 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-4 h-4 text-sarvene-obsidian/50" />
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sarvene-black/40">Charter Estimate</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Origin */}
              <div className="relative">
                <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40 mb-2">Origin</label>
                <input
                  type="text" value={from}
                  onChange={e => handleFromChange(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && calculate()}
                  placeholder="Lagos or LOS"
                  className="w-full bg-transparent border-b border-sarvene-black/12 py-3 font-sans text-sm text-sarvene-black placeholder:text-sarvene-black/25 focus:border-sarvene-obsidian focus:outline-none transition-colors"
                />
                {fromSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-sarvene-black/10 z-20 shadow-sm">
                    {fromSuggestions.map(s => (
                      <button key={s.value + s.city} onClick={() => selectFrom(s.city)}
                        className="w-full text-left px-3 py-2 font-sans text-xs text-sarvene-black/70 hover:bg-sarvene-cream transition-colors">
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Destination */}
              <div className="relative">
                <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40 mb-2">Destination</label>
                <input
                  type="text" value={to}
                  onChange={e => handleToChange(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && calculate()}
                  placeholder="London or LHR"
                  className="w-full bg-transparent border-b border-sarvene-black/12 py-3 font-sans text-sm text-sarvene-black placeholder:text-sarvene-black/25 focus:border-sarvene-obsidian focus:outline-none transition-colors"
                />
                {toSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-sarvene-black/10 z-20 shadow-sm">
                    {toSuggestions.map(s => (
                      <button key={s.value + s.city} onClick={() => selectTo(s.city)}
                        className="w-full text-left px-3 py-2 font-sans text-xs text-sarvene-black/70 hover:bg-sarvene-cream transition-colors">
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button onClick={calculate} disabled={!from.trim() || !to.trim() || isCalculating}
              className="group w-full bg-sarvene-obsidian text-sarvene-cream py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-sarvene-matte transition-colors flex items-center justify-center gap-2 disabled:opacity-40">
              {isCalculating ? 'Calculating...' : <>Calculate Estimate <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" /></>}
            </button>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="font-sans text-[10px] text-sarvene-black/30">Popular:</span>
              {[['Lagos','London'],['Lagos','Dubai'],['Lagos','Abuja'],['Lagos','Accra'],['Abuja','New York']].map(([f,t]) => (
                <button key={`${f}-${t}`} onClick={() => setRoute(f, t)}
                  className="font-sans text-[10px] text-sarvene-obsidian/50 hover:text-sarvene-obsidian transition-colors underline underline-offset-2 decoration-sarvene-black/10">
                  {f}–{t}
                </button>
              ))}
            </div>

            {err && (
              <div className="mt-6 p-4 border border-red-200 bg-red-50">
                <p className="font-sans text-xs text-red-600">{err}</p>
              </div>
            )}

            {res && (
              <div className="mt-8 pt-6 border-t border-sarvene-black/8">
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-sarvene-black/40 mb-1">Estimated Charter Cost</p>
                <p className="font-mont text-[11px] text-sarvene-black/40 mb-3">
                  {res.originCity} → {res.destinationCity} · {res.jetName} · {res.billingHours}hr billed
                </p>
                <p className="font-sans text-[11px] text-sarvene-black/30 mb-1">Estimated range</p>
                <p className="font-mont text-3xl md:text-4xl font-semibold text-sarvene-obsidian mb-1">
                  ${(res.amountLow ?? 0).toLocaleString()} – ${(res.amountHigh ?? 0).toLocaleString()}
                </p>
                <p className="font-sans text-[10px] text-sarvene-black/35 mb-4 italic">
                  {res.disclaimer}
                </p>
                <button
                  onClick={() => {
                    onRequestQuote(`${res.originCity} to ${res.destinationCity}`, prefillDate);
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-sarvene-obsidian hover:text-sarvene-matte transition-colors">
                  Request Formal Quote <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          {/* Advisor */}
          <div className="estimator-panel bg-sarvene-matte p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-4 h-4 text-sarvene-sage/50" />
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/40">Private Advisor</p>
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">Complex routing?</h3>
            <p className="font-sans text-sm text-white/50 leading-relaxed mb-8">
              Multi-leg itineraries, bespoke cargo, group coordination — our aviation advisors handle every detail.
            </p>
            <ul className="space-y-3 mb-10 flex-1">
              {['Multi-leg global routing','Group charter coordination','Bespoke cargo & logistics','Airport slot procurement'].map(item => (
                <li key={item} className="flex items-center gap-3 font-sans text-xs text-white/45">
                  <span className="w-1 h-1 bg-sarvene-sage/50 rounded-full" />{item}
                </li>
              ))}
            </ul>
            {showAdvisor && (
              <div className="mb-6 p-4 border border-sarvene-sage/15 bg-white/5">
                <p className="font-sans text-xs text-white/60 leading-relaxed">
                  Our advisors are available 24/7. Call +234 902 031 6094 or submit the charter form below.
                </p>
              </div>
            )}
            <button onClick={() => setShowAdvisor(true)}
              className="w-full border border-white/15 text-white py-3.5 font-sans text-[11px] tracking-[0.15em] uppercase hover:bg-white hover:text-sarvene-matte transition-all">
              Consult Advisor
            </button>
          </div>

        </div>

        {res && (
          <div className="estimator-panel mt-6 border border-sarvene-black/6 overflow-hidden">
            <div className="flex items-center justify-between px-6 md:px-8 py-5 bg-white border-b border-sarvene-black/6">
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-sarvene-black/40">Range &amp; Routing Calculator</p>
              <p className="font-mont text-xs font-semibold text-sarvene-obsidian">{res.distanceNM.toLocaleString()} NM</p>
            </div>

            <div className="bg-gradient-to-br from-sarvene-matte to-sarvene-obsidian p-6 md:p-8">
              {/* Route arc */}
              <div className="relative h-40 md:h-48 mb-6">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="routeArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#52B788" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#52B788" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 30,120 Q 200,10 370,60"
                    fill="none"
                    stroke="url(#routeArcGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="route-arc-draw"
                  />
                  <circle cx="30" cy="120" r="4" fill="#F8F9F6" />
                  <circle cx="370" cy="60" r="4" fill="#52B788" />
                </svg>
                <div className="absolute left-0 bottom-0 translate-y-1/2">
                  <p className="font-mont text-xs font-semibold text-white">{res.originIata}</p>
                  <p className="font-sans text-[10px] text-white/40">{res.originCity}</p>
                </div>
                <div className="absolute right-0 top-1/3">
                  <p className="font-mont text-xs font-semibold text-sarvene-sage">{res.destinationIata}</p>
                  <p className="font-sans text-[10px] text-white/40">{res.destinationCity}</p>
                </div>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-3 gap-1 bg-black/25 backdrop-blur-sm p-3 md:p-4 mb-6 border-t border-white/10">
                <div className="text-center">
                  <p className="font-sans text-[9px] tracking-widest text-white/35 uppercase mb-1">Distance</p>
                  <p className="font-mont text-sm md:text-base font-semibold text-white">{res.distanceNM.toLocaleString()} NM</p>
                </div>
                <div className="text-center border-x border-white/10">
                  <p className="font-sans text-[9px] tracking-widest text-white/35 uppercase mb-1">Flight Time</p>
                  <p className="font-mont text-sm md:text-base font-semibold text-white">{res.roundedLegTime}h</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-[9px] tracking-widest text-white/35 uppercase mb-1">Cruise Speed</p>
                  <p className="font-mont text-sm md:text-base font-semibold text-sarvene-sage">
                    Mach {(res.selectedJet.cruiseKt / SPEED_OF_SOUND_KT).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Aircraft feasibility */}
              <p className="font-sans text-[10px] tracking-widest text-white/35 uppercase mb-3">Aircraft Feasibility</p>
              <div className="space-y-1.5">
                {jetCategories.map(jet => {
                  const isRecommended = jet.name === res.jetName;
                  const stops = res.distanceNM <= jet.maxRangeNM ? 0 : Math.ceil(res.distanceNM / jet.maxRangeNM) - 1;
                  const statusLabel = stops === 0 ? 'Non-Stop' : `${stops} Tech Stop${stops > 1 ? 's' : ''} Required`;
                  return (
                    <div
                      key={jet.name}
                      className={`flex items-center justify-between px-3 py-2.5 font-sans text-xs ${
                        isRecommended ? 'bg-white/10 border border-sarvene-sage/30' : 'border border-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${stops === 0 ? 'bg-sarvene-sage' : 'bg-amber-400'}`} />
                        <span className={isRecommended ? 'text-white font-medium' : 'text-white/50'}>
                          {jet.name} <span className="text-white/30">({jet.exampleAircraft})</span>
                        </span>
                      </div>
                      <span className={`font-mont text-[11px] font-medium ${stops === 0 ? 'text-sarvene-sage' : 'text-amber-400'}`}>
                        {statusLabel}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="font-sans text-[10px] text-white/25 mt-4 italic">
                Range and Mach figures are estimates for planning purposes. Actual routing, tech stops and cruise performance depend on the aircraft assigned and prevailing winds.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default BookingEstimator;
