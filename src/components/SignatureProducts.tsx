import React, { useState, useRef } from 'react';
import { SIGNATURE_PRODUCTS } from '../data/bakeryData';
import { Product } from '../types/bakery';
import { ArrowUpRight } from 'lucide-react';

interface SignatureProductsProps {
  onSelectProduct: (product: Product) => void;
  onAskForPrice: (product: Product) => void;
}

export const SignatureProducts: React.FC<SignatureProductsProps> = ({
  onSelectProduct,
  onAskForPrice,
}) => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-[#F4EFE6] border-t border-[#E7DECE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E0D5C3]">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#5A0F1B]">
              Signature Selection
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-editorial font-semibold text-[#1C1917] tracking-tight">
              Made to Make Moments Special
            </h2>
          </div>
          <p className="text-sm text-[#78716C] max-w-md">
            Prepared with pure dairy, authentic desi ghee, and premium ingredients. Handcrafted daily in Lahore.
          </p>
        </div>

        {/* Product Cards Grid (3 columns desktop, 2 tablet, 1 mobile) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {SIGNATURE_PRODUCTS.map((product) => (
            <ProductCard3D
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onAskForPrice={onAskForPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCard3DProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onAskForPrice: (product: Product) => void;
}

const ProductCard3D: React.FC<ProductCard3DProps> = ({
  product,
  onSelectProduct,
  onAskForPrice,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Very subtle 3D tilt (max 4 degrees)
    const rotateX = ((centerY - y) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-lg border border-[#E7DECE] shadow-xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Product Image Container with 3D forward translation and subtle scale */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF] transition-transform duration-300 ease-out"
        style={{
          transform: isHovered
            ? `translateZ(12px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.03)`
            : 'translateZ(0px) rotateX(0deg) rotateY(0deg) scale(1)',
        }}
        onClick={() => onSelectProduct(product)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        {/* Optional Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#5A0F1B] text-white text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3
            onClick={() => onSelectProduct(product)}
            className="text-base font-semibold text-[#1C1917] font-editorial tracking-tight cursor-pointer hover:text-[#5A0F1B] transition-colors"
          >
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs text-[#57534E] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* CTA Strip (Compliant with: "Do NOT invent exact prices. If prices are unavailable, show 'View Details' or 'Ask for Price'") */}
        <div className="mt-4 pt-3.5 border-t border-[#F0E9DC] flex items-center justify-between gap-2">
          <button
            onClick={() => onAskForPrice(product)}
            className="text-xs font-semibold text-[#5A0F1B] hover:text-[#380910] transition-colors inline-flex items-center gap-1 focus:outline-none focus-visible:underline"
          >
            <span>Ask for Price</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onSelectProduct(product)}
            className="px-2.5 py-1 text-xs font-medium text-[#44403C] hover:text-[#1C1917] hover:bg-[#FAF7F2] border border-[#E7DECE] rounded transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
