import React from 'react';
import { BAKERY_IMAGES } from '../data/bakeryData';
import { ArrowRight, Check } from 'lucide-react';

interface AboutSectionProps {
  onDiscoverMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverMore }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Storefront & Bakery Image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-[#E7DECE] shadow-md bg-[#F4EFE6]">
                <img
                  src={BAKERY_IMAGES.storefront}
                  alt="Divine Bakers bakery counter and sweets display in Lahore"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-700 hover:scale-101"
                />
              </div>

              {/* Subtle decorative gold badge */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:right-6 bg-white p-4 rounded-lg shadow-lg border border-[#E7DECE] max-w-[240px]">
                <p className="text-xs uppercase tracking-widest text-[#5A0F1B] font-semibold">
                  Pure Ingredients
                </p>
                <p className="text-xs text-[#57534E] mt-1 font-sans">
                  Crafted daily for Lahore's memorable celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: About Copy with actual statement */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#5A0F1B]">
              ABOUT DIVINE BAKERS
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl font-editorial font-semibold text-[#1C1917] tracking-tight">
              Quality You Can Taste
            </h2>

            {/* Actual business statement from prompt */}
            <div className="mt-4 pl-4 border-l-2 border-[#5A0F1B] py-1">
              <p className="text-base sm:text-lg font-serif italic text-[#5A0F1B] font-medium leading-snug">
                “We aim to provide quality bakery products made with pure ingredients!”
              </p>
            </div>

            {/* Natural grounded supporting copy */}
            <div className="mt-5 space-y-4 text-sm sm:text-base text-[#57534E] leading-relaxed font-sans">
              <p>
                At Divine Bakers, we believe that sweetness brings families and communities together.
                Every item that leaves our kitchen — from delicate fresh cream cakes to authentic desi
                ghee traditional sweets — is prepared with uncompromised dedication to freshness.
              </p>
              <p>
                Whether you are picking up warm breakfast biscuits, selecting afternoon pastries, or
                ordering a customized multi-tier cake for an auspicious celebration, our Lahore bakeries
                are committed to serving you with warmth and quality.
              </p>
            </div>

            {/* Quality checkpoints */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {[
                'Freshly baked daily batches',
                'Traditional Pakistani recipes',
                'Pure dairy & desi ghee',
                'Custom celebration orders',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs sm:text-sm text-[#292524]">
                  <span className="w-4 h-4 rounded-full bg-[#5A0F1B]/10 text-[#5A0F1B] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={onDiscoverMore}
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-[#5A0F1B] hover:bg-[#480B15] active:bg-[#380910] rounded transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A0F1B]"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
