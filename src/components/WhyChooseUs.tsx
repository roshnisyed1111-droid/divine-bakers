import React from 'react';
import { ShieldCheck, Clock, Sparkles, PartyPopper } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Quality Ingredients',
      description: 'Prepared with pure desi ghee, premium dairy, and selected ingredients with no shortcuts.',
    },
    {
      icon: Clock,
      title: 'Freshly Prepared',
      description: 'Daily morning baking schedules ensuring our cakes, snacks, and sweets reach you at peak freshness.',
    },
    {
      icon: Sparkles,
      title: 'Wide Variety',
      description: 'Extensive choice spanning rich cakes, Pakistani traditional mithai, dry biscuits, and savory bites.',
    },
    {
      icon: PartyPopper,
      title: 'Made for Every Occasion',
      description: 'Thoughtfully designed packaging and customized confections for birthdays, weddings, and casual teas.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F4EFE6] border-y border-[#E7DECE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#5A0F1B]">
            Our Commitment
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-editorial font-semibold text-[#1C1917] tracking-tight">
            Why Choose Divine Bakers
          </h2>
          <p className="mt-3 text-sm text-[#78716C]">
            Delivering authentic taste, consistent hygiene, and celebration-worthy confections across Lahore.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg border border-[#E7DECE] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-[#5A0F1B]/10 text-[#5A0F1B] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1C1917] font-editorial">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                    {item.description}
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
