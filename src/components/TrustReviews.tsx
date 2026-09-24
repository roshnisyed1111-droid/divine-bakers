import React from 'react';
import { Star, MapPin } from 'lucide-react';

export const TrustReviews: React.FC = () => {
  return (
    <section className="py-14 bg-[#FAF7F2] border-b border-[#E7DECE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex flex-col items-center p-8 rounded-xl bg-white border border-[#E7DECE] shadow-xs w-full max-w-lg mx-auto">
          {/* Rating stars */}
          <div className="flex items-center gap-1.5 text-[#C5A059] mb-3" aria-label="Rating 4.2 out of 5 stars">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-5 h-5 fill-[#C5A059]" />
            ))}
            <div className="relative">
              <Star className="w-5 h-5 text-[#C5A059]" />
              <div className="absolute inset-0 overflow-hidden w-[40%]">
                <Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" />
              </div>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold font-editorial text-[#1C1917] tracking-tight tabular-nums">
              4.2
            </span>
            <span className="text-sm font-medium text-[#78716C]">
              out of 5
            </span>
          </div>

          <p className="mt-1 text-sm font-semibold text-[#44403C]">
            Based on <span className="tabular-nums">247</span> Google Reviews
          </p>

          <p className="mt-2 text-xs text-[#78716C] max-w-sm">
            Recognized across Lahore for consistent sweetness, hygienic baking, and celebration favorites.
          </p>

          <div className="mt-6">
            <a
              href="#locations"
              className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#5A0F1B] hover:bg-[#480B15] rounded transition-colors shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A0F1B]"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
