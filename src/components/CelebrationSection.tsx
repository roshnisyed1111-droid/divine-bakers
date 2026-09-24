import React, { useRef, useState, useEffect } from 'react';
import { BAKERY_IMAGES } from '../data/bakeryData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CelebrationSectionProps {
  onExploreCelebration: () => void;
}

export const CelebrationSection: React.FC<CelebrationSectionProps> = ({
  onExploreCelebration,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setOffset({ x, y });
    };

    const el = sectionRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="cakes-desserts"
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28 bg-[#5A0F1B] text-[#FAF7F2]"
    >
      {/* Subtle gold ambient glow and depth reflections */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#3D0A12] rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Text Information */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#440A13] border border-[#C5A059]/30 text-xs text-[#DFC285] tracking-widest uppercase font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Festive & Celebration Collection</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-semibold text-[#FAF7F2] leading-[1.18] tracking-tight">
              Celebrate With <br />
              <span className="text-[#DFC285] font-normal italic">Something Special</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#E6DCDB] leading-relaxed max-w-xl font-sans">
              From festive sweets to beautifully crafted desserts, make every celebration a little sweeter.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCelebration}
                className="whitespace-nowrap inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-[#5A0F1B] bg-[#DFC285] hover:bg-[#F2DCAB] active:bg-[#C9A96A] rounded transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC285]"
              >
                <span>Explore Celebration Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Subtle Guarantee notes */}
            <div className="mt-10 grid grid-cols-2 gap-6 pt-6 border-t border-[#7E1A29] w-full max-w-lg">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#DFC285] font-semibold">
                  Custom Orders
                </p>
                <p className="text-xs text-[#D8CDC8] mt-1 font-sans">
                  Engagement & Birthday multi-tier cakes
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#DFC285] font-semibold">
                  Festive Mithai
                </p>
                <p className="text-xs text-[#D8CDC8] mt-1 font-sans">
                  Pure Desi Ghee traditional sweets
                </p>
              </div>
            </div>
          </div>

          {/* Premium 3D-Style Celebration Dessert Visual */}
          <div className="lg:col-span-6 relative perspective-1000">
            <div
              className="relative mx-auto max-w-lg lg:max-w-none transition-transform duration-500 ease-out animate-float-dessert"
              style={{
                transform: `translate3d(${offset.x * 16}px, ${offset.y * 16}px, 20px) rotateX(${
                  -offset.y * 6
                }deg) rotateY(${offset.x * 6}deg)`,
              }}
            >
              {/* Soft studio shadow beneath */}
              <div
                className="absolute -bottom-6 inset-x-8 h-10 bg-black/40 rounded-full blur-xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Dessert Stand Composition Container */}
              <div className="relative rounded-lg overflow-hidden border border-[#C5A059]/40 shadow-2xl bg-[#440A13]">
                <img
                  src={BAKERY_IMAGES.celebrationStand}
                  alt="Divine Bakers celebration dessert stand featuring tiered cake and traditional sweets"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-700 hover:scale-102"
                />

                {/* Subtle warm gold rim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between pointer-events-none">
                  <div>
                    <p className="text-xs font-serif italic text-[#DFC285]">
                      Artisanal Celebration Stand
                    </p>
                    <p className="text-sm font-semibold text-white tracking-wide">
                      Pure Desi Ghee & Fresh Cream
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#C5A059]/60 flex items-center justify-center text-[#DFC285] bg-black/30 backdrop-blur-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
