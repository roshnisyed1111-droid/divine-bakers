import React from 'react';
import { CATEGORIES } from '../data/bakeryData';
import { ArrowRight } from 'lucide-react';
import { Category } from '../types/bakery';

interface CategoriesSectionProps {
  onSelectCategory: (category: Category) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#5A0F1B]">
            Our Offerings
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-editorial font-semibold text-[#1C1917] tracking-tight">
            Something for Every Celebration
          </h2>
          <p className="mt-3 text-base text-[#57534E] leading-relaxed">
            From everyday treats to special occasions, discover something everyone can enjoy.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group cursor-pointer rounded-lg bg-white border border-[#E7DECE] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col focus-within:ring-2 focus-within:ring-[#5A0F1B]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(cat);
                }
              }}
              aria-label={`Explore ${cat.name}`}
            >
              {/* Category Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5EFE6]">
                <img
                  src={cat.image}
                  alt={`Divine Bakers ${cat.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <span className="absolute top-3 right-3 text-[11px] font-medium tracking-wide bg-white/90 backdrop-blur-xs text-[#5A0F1B] px-2.5 py-1 rounded shadow-xs">
                  {cat.itemCount}
                </span>
              </div>

              {/* Content Footer */}
              <div className="p-5 flex items-center justify-between gap-4 border-t border-[#F0E9DC]">
                <div>
                  <h3 className="text-lg font-semibold font-editorial text-[#1C1917] group-hover:text-[#5A0F1B] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#78716C] mt-0.5 line-clamp-1">
                    {cat.subtitle}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#5A0F1B] group-hover:translate-x-1 transition-transform whitespace-nowrap">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
