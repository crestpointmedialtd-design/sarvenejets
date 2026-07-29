export interface JetModel {
  id: string;
  name: string;
  category: 'Light' | 'Midsize' | 'Heavy' | 'Ultra Long Range';
  maxRangeNM: number;
  maxPassengers: number;
  speedKts: number;
  description: string;
}

export const SARVENE_FLEET: JetModel[] = [
  // Light
  { id: 'phenom-300', name: 'Embraer Phenom 300', category: 'Light', maxRangeNM: 2010, maxPassengers: 7, speedKts: 453, description: 'Efficient short-haul agile access' },
  { id: 'learjet-75', name: 'Bombardier Learjet 75', category: 'Light', maxRangeNM: 2040, maxPassengers: 8, speedKts: 465, description: 'High-speed performance with pocket-rocket climb capability' },

  
  // Midsize
  { id: 'hawker-800xp', name: 'Hawker 800XP', category: 'Midsize', maxRangeNM: 2540, maxPassengers: 8, speedKts: 447, description: 'Stand-up cabin comfort for mid-range flights' },
  { id: 'citation-xls', name: 'Citation XLS+', category: 'Midsize', maxRangeNM: 2100, maxPassengers: 9, speedKts: 441, description: 'Versatile regional workhorse' },

  // Heavy
  { id: 'gulfstream-g4', name: 'Gulfstream G-IV / G-IVSP', category: 'Heavy', maxRangeNM: 4166, maxPassengers: 14, speedKts: 476, description: 'Intercontinental transcontinental heavy jet' },
  { id: 'challenger-605', name: 'Bombardier Challenger 605', category: 'Heavy', maxRangeNM: 4000, maxPassengers: 12, speedKts: 470, description: 'Wide-body executive luxury' },

  // Ultra Long Range
  { id: 'falcon-7x', name: 'Dassault Falcon 7X', category: 'Ultra Long Range', maxRangeNM: 5950, maxPassengers: 14, speedKts: 488, description: 'Tri-jet performance with non-stop intercontinental capability' },
  { id: 'gulfstream-g550', name: 'Gulfstream G550', category: 'Ultra Long Range', maxRangeNM: 6750, maxPassengers: 16, speedKts: 488, description: 'Global reach flagship' }
];
