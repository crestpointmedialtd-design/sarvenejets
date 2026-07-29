import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import type { JetModel } from '../data/fleetData';

interface RangeGlobeProps {
  origin?: { lat: number; lng: number };
  destination?: { lat: number; lng: number };
  selectedJet?: JetModel;
}

export default function RangeGlobe({ origin, destination, selectedJet }: RangeGlobeProps) {
  const globeEl = useRef<any>(null);
  const [tripDistance, setTripDistance] = useState<number>(0);
  const [requiresFuelStop, setRequiresFuelStop] = useState<boolean>(false);

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 3440; // Earth's radius in nautical miles
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    if (origin && destination) {
      const distance = calculateDistance(origin.lat, origin.lng, destination.lat, destination.lng);
      setTripDistance(distance);
      
      if (selectedJet) {
        setRequiresFuelStop(distance > selectedJet.maxRangeNM);
      }
    }
  }, [origin, destination, selectedJet]);

  // Arc data for route
  const arcsData = origin && destination
    ? [
        {
          startLat: origin.lat,
          startLng: origin.lng,
          endLat: destination.lat,
          endLng: destination.lng,
          color: ['#C5A059', '#C5A059'],
        },
      ]
    : [];

  // Range ring data
  const ringsData = selectedJet && origin
    ? [
        {
          lat: origin.lat,
          lng: origin.lng,
          radius: selectedJet.maxRangeNM / 3440, // Convert NM to radians (approximate)
          color: '#C5A059',
        },
      ]
    : [];

  return (
    <div className="relative w-full h-full min-h-[500px] bg-[#080808]">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        arcsData={arcsData}
        arcStartLat={(d: any) => d.startLat}
        arcStartLng={(d: any) => d.startLng}
        arcEndLat={(d: any) => d.endLat}
        arcEndLng={(d: any) => d.endLng}
        arcColor={(d: any) => d.color}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashInitialGap={0}
        arcDashAnimateTime={2000}
        arcStroke={0.5}
        arcAltitude={0.1}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      
      {/* Range Status Overlay */}
      {selectedJet && origin && destination && (
        <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-sarvene-black/20 p-6 rounded-lg">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-8">
              <span className="font-sans text-xs tracking-[0.15em] uppercase text-sarvene-black/60">
                Trip Distance
              </span>
              <span className="font-serif text-lg text-sarvene-cream">
                {tripDistance.toLocaleString()} NM
              </span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span className="font-sans text-xs tracking-[0.15em] uppercase text-sarvene-black/60">
                Aircraft Range
              </span>
              <span className="font-serif text-lg text-sarvene-cream">
                {selectedJet.maxRangeNM.toLocaleString()} NM
              </span>
            </div>
            <div className="pt-3 border-t border-sarvene-black/20">
              <div
                className={`font-sans text-sm tracking-[0.2em] uppercase ${
                  requiresFuelStop ? 'text-red-400' : 'text-sarvene-sage'
                }`}
              >
                {requiresFuelStop ? 'Fuel Stop Required' : 'Non-Stop'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
