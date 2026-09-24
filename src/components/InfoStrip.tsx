import React from 'react';
import { Cake, Sparkles, HeartHandshake, MapPin } from 'lucide-react';

export const InfoStrip: React.FC = () => {
  const items = [
    {
      icon: Cake,
      title: 'Fresh Bakery Products',
      detail: 'Baked every morning',
    },
    {
      icon: Sparkles,
      title: 'Quality Ingredients',
      detail: 'Pure desi ghee & rich dairy',
    },
    {
      icon: HeartHandshake,
      title: 'Cakes & Sweets',
      detail: 'Everyday treats & celebrations',
    },
    {
      icon: MapPin,
      title: 'Multiple Lahore Locations',
      detail: 'PIA, Sabzazar, Bahria & Samanabad',
    },
  ];

  return (
    <div className="w-full bg-[#F4EFE6] border-y border-[#E7DECE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-3.5 ${
                  idx !== 0 ? 'md:border-l md:border-[#E0D5C3] md:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#5A0F1B]/10 text-[#5A0F1B] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-semibold text-[#1C1917] tracking-tight leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#78716C] mt-0.5 leading-relaxed font-sans">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
