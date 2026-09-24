import React from 'react';
import { LOCATIONS } from '../data/bakeryData';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

interface LocationsSectionProps {
  onContactLocation?: (locationName: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onContactLocation }) => {
  return (
    <section id="locations" className="py-16 md:py-24 bg-[#F4EFE6] border-t border-[#E7DECE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#5A0F1B]">
            Lahore Outlets
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-editorial font-semibold text-[#1C1917] tracking-tight">
            Find a Divine Bakers Near You
          </h2>
          <p className="mt-3 text-sm text-[#78716C]">
            Visit any of our convenient locations across Lahore for fresh bakery treats, sweets, and bespoke cake bookings.
          </p>
        </div>

        {/* 4 Exact Branches (PIA ROAD, SABZAR ZIAAT CHOWK, BAHRIA TOWN, SAMNABAD) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-lg border border-[#E7DECE] p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Branch Header */}
                <div className="flex items-center gap-2 mb-3 text-[#5A0F1B]">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold">
                    Branch
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1C1917] font-editorial tracking-tight uppercase">
                  {loc.name}
                </h3>

                <p className="text-xs font-medium text-[#5A0F1B] mt-0.5">
                  {loc.area}
                </p>

                <p className="text-xs text-[#57534E] mt-3 leading-relaxed">
                  {loc.address}
                </p>

                {/* Timing */}
                <div className="mt-4 flex items-center gap-2 text-xs text-[#78716C] pt-3 border-t border-[#F0E9DC]">
                  <Clock className="w-3.5 h-3.5 shrink-0 text-[#B8860B]" />
                  <span>{loc.hours}</span>
                </div>
              </div>

              {/* Action Buttons: Get Directions & Contact */}
              <div className="mt-6 pt-4 border-t border-[#F0E9DC] grid grid-cols-2 gap-2">
                <a
                  href={loc.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1C1917] bg-[#FAF7F2] hover:bg-[#EFE9DF] border border-[#E7DECE] rounded transition-colors whitespace-nowrap"
                  title={`Get directions to Divine Bakers ${loc.name}`}
                >
                  <Navigation className="w-3 h-3 text-[#5A0F1B]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                  onClick={() => onContactLocation && onContactLocation(loc.name)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#5A0F1B] hover:bg-[#480B15] rounded transition-colors whitespace-nowrap"
                  title={`Call Divine Bakers ${loc.name}`}
                >
                  <Phone className="w-3 h-3" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
