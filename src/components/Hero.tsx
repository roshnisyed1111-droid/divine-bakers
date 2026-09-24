import React, { useState, useRef, useEffect } from 'react';
import { BAKERY_IMAGES } from '../data/bakeryData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove);
      node.addEventListener('mouseenter', () => setIsHovered(true));
      node.addEventListener('mouseleave', () => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      });
    }

    return () => {
      if (node) {
        node.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Parallax translation calculations
  const parallaxX = isHovered ? mousePos.x * 24 : 0;
  const parallaxY = isHovered ? mousePos.y * 24 : 0;
  const rotateY = isHovered ? mousePos.x * 12 : 0;
  const rotateX = isHovered ? -mousePos.y * 12 : 0;

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-[#FAF7F2]"
    >
      {/* Subtle warm background depth circles */}
      <div
        className="absolute top-1/4 -left-24 w-96 h-96 bg-[#5A0F1B]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs tracking-[0.22em] uppercase font-semibold text-[#5A0F1B]">
              <span>DIVINE BAKERS</span>
              <span className="text-[#C5A059] font-normal">|</span>
              <span className="text-[#78716C] tracking-[0.25em]">SWEETS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] font-editorial text-[#1C1917] font-semibold tracking-tight text-balance">
              Freshly Made. <br />
              <span className="text-[#5A0F1B] italic font-normal">Made to Celebrate.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl">
              Quality bakery products and sweets made with pure ingredients, crafted for everyday
              moments and special celebrations.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#5A0F1B] hover:bg-[#480B15] active:bg-[#380910] rounded transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A0F1B]"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenOrderModal}
                className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-[#5A0F1B] bg-transparent hover:bg-[#5A0F1B]/5 active:bg-[#5A0F1B]/10 border border-[#5A0F1B]/30 rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A0F1B]"
              >
                Order Now
              </button>
            </div>

            {/* Trusted Note (Exact prompt copy, no invented stats) */}
            <div className="mt-10 pt-6 border-t border-[#E7DECE] w-full max-w-md flex items-center gap-3 text-xs sm:text-sm text-[#78716C]">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#5A0F1B]/10 text-[#5A0F1B] shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span className="font-medium text-[#44403C]">
                Trusted by bakery lovers across Lahore
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Hero Showcase & Tasteful 3D Bakery Element */}
          <div className="lg:col-span-6 relative perspective-1000">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Food Photography Showcase */}
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-[#E7DECE] bg-[#F5EFE6]">
                <img
                  src={BAKERY_IMAGES.hero}
                  alt="Divine Bakers signature collection of cakes, traditional Pakistani mithai, fresh pastries, and bakery items"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                
                {/* Subtle caption badge */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs pointer-events-none">
                  <span className="font-medium tracking-wide drop-shadow-sm">
                    Signature Cakes · Desi Ghee Mithai · Fresh Pastries
                  </span>
                  <span className="hidden sm:inline-block text-[#DFC285] font-serif italic text-xs drop-shadow-sm">
                    Lahore, Pakistan
                  </span>
                </div>
              </div>

              {/* TASTEFUL 3D BAKERY ELEMENT (Section 6) */}
              {/* Isolated artisanal cake slice with realistic lighting, soft shadow, subtle floating animation, and desktop mouse-parallax */}
              <div
                className="hidden sm:block absolute -bottom-8 -left-8 md:-bottom-10 md:-left-12 z-20 pointer-events-none select-none transition-transform duration-200 ease-out animate-float-subtle"
                style={{
                  transform: `translate3d(${parallaxX}px, ${parallaxY}px, 40px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                }}
              >
                <div className="relative group p-2.5">
                  {/* Subtle soft cast shadow */}
                  <div
                    className="absolute -bottom-2 left-4 right-4 h-6 bg-black/25 rounded-full blur-md"
                    aria-hidden="true"
                  />

                  {/* 3D Cake Slice Container */}
                  <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-xl p-1 bg-white/95 backdrop-blur-sm shadow-2xl border border-[#C5A059]/40 overflow-hidden transform transition-all duration-300">
                    <img
                      src={BAKERY_IMAGES.heroFloatingCake}
                      alt="Artisanal chocolate cake slice with edible gold leaf"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-1.5 inset-x-1.5 bg-gradient-to-t from-[#5A0F1B]/90 via-[#5A0F1B]/60 to-transparent py-1 px-2 rounded-b-md text-center">
                      <p className="text-[10px] font-semibold text-white tracking-wider uppercase font-sans">
                        Artisanal Slice
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative subtle gold accent line */}
              <div
                className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#C5A059]/40 pointer-events-none rounded-tr-lg"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
