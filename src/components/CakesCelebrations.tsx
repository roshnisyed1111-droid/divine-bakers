import React from 'react';
import { BAKERY_IMAGES } from '../data/bakeryData';
import { Cake, Gift, Sparkles, Heart } from 'lucide-react';

interface CakesCelebrationsProps {
  onOrderCake: () => void;
  onPlanCelebration: () => void;
}

export const CakesCelebrations: React.FC<CakesCelebrationsProps> = ({
  onOrderCake,
  onPlanCelebration,
}) => {
  const celebrationPillars = [
    { title: 'Birthday Cakes', icon: Cake, desc: 'Fresh cream, chocolate fudge & custom cartoon or theme designs' },
    { title: 'Celebration Cakes', icon: Sparkles, desc: 'Multi-tiered floral wedding & engagement showstoppers' },
    { title: 'Desserts', icon: Heart, desc: 'Velvety mousse cups, fruit tarts, and fresh eclairs' },
    { title: 'Gift Boxes', icon: Gift, desc: 'Luxury burgundy hampers with gold-sealed ribbons' },
    { title: 'Festive Sweets', icon: Sparkles, desc: 'Pure desi ghee ladoo, gulab jamun & assorted mithai' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with high-end photography */}
        <div className="relative rounded-xl overflow-hidden border border-[#E7DECE] shadow-lg bg-[#5A0F1B] text-white">
          <div className="relative h-72 sm:h-80 md:h-96 w-full">
            <img
              src={BAKERY_IMAGES.celebrationCollection}
              alt="Divine Bakers luxury celebration cakes, gift boxes, and festive desserts"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Measured gradient scrim for 4.5:1 text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

            {/* Banner Text Overlay */}
            <div className="absolute inset-0 p-6 sm:p-10 md:p-12 flex flex-col justify-end max-w-3xl">
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#DFC285]">
                Customized & Bespoke
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-editorial font-semibold text-white tracking-tight leading-tight">
                Made for Your Special Moments
              </h2>
              <p className="mt-2.5 text-xs sm:text-base text-[#F4EFE6] max-w-xl font-sans">
                From milestone birthdays to auspicious weddings and Eid celebrations, Divine Bakers crafts confections that elevate every happy occasion in Lahore.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOrderCake}
                  className="whitespace-nowrap px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#5A0F1B] hover:bg-[#480B15] border border-white/20 rounded transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Order a Cake
                </button>
                <button
                  onClick={onPlanCelebration}
                  className="whitespace-nowrap px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#5A0F1B] bg-[#DFC285] hover:bg-[#F0D69D] rounded transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC285]"
                >
                  Plan Your Celebration
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Celebration Items Showcase */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {celebrationPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-4 rounded-lg bg-white border border-[#E7DECE] shadow-2xs hover:border-[#5A0F1B]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-md bg-[#FAF7F2] text-[#5A0F1B] border border-[#E7DECE] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1C1917] font-editorial">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#78716C] mt-1 line-clamp-2 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
