import React from 'react';
import { Product } from '../types/bakery';
import { CONTACT_PHONE, WHATSAPP_PHONE } from '../data/bakeryData';
import { X, Phone, MessageCircle, Sparkles, Check } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenOrderWithProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenOrderWithProduct,
}) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-alaikum Divine Bakers, I am interested in ordering/inquiring about: ${product.name}. Please share price and availability.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#E7DECE] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 border border-[#E7DECE] text-[#44403C] hover:text-[#5A0F1B] flex items-center justify-center shadow-xs transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 relative bg-[#F5EFE6] aspect-square md:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-[#5A0F1B] text-white text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5A0F1B] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Divine Bakers Special</span>
            </div>

            <h3 className="mt-1.5 text-2xl font-editorial font-bold text-[#1C1917]">
              {product.name}
            </h3>

            <p className="mt-3 text-sm text-[#57534E] leading-relaxed font-sans">
              {product.fullDescription}
            </p>

            {product.serving && (
              <div className="mt-4 p-3 rounded-lg bg-[#FAF7F2] border border-[#E7DECE]">
                <p className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold">
                  Serving & Portions
                </p>
                <p className="text-xs font-medium text-[#1C1917] mt-0.5">
                  {product.serving}
                </p>
              </div>
            )}

            <div className="mt-4 space-y-1.5 text-xs text-[#57534E]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#5A0F1B]" />
                <span>Made fresh with pure ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#5A0F1B]" />
                <span>Available across all Lahore branches</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-5 border-t border-[#F0E9DC] flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask for Price on WhatsApp</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenOrderWithProduct(product);
                }}
                className="w-full px-3 py-2 text-xs font-semibold text-white bg-[#5A0F1B] hover:bg-[#480B15] rounded transition-colors"
              >
                Place Order
              </button>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-[#1C1917] bg-[#FAF7F2] hover:bg-[#EFE9DF] border border-[#E7DECE] rounded transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Branch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
