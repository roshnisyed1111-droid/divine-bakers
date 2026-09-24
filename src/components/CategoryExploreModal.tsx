import React from 'react';
import { Category } from '../types/bakery';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/bakeryData';

interface CategoryExploreModalProps {
  category: Category | null;
  onClose: () => void;
  onOrderCategory: (category: Category) => void;
}

export const CategoryExploreModal: React.FC<CategoryExploreModalProps> = ({
  category,
  onClose,
  onOrderCategory,
}) => {
  if (!category) return null;

  const categoryHighlights: Record<string, string[]> = {
    cakes: [
      'Belgian Chocolate Fudge & Silk Ganache',
      'Fresh Strawberry & Pineapple Cream Sponge',
      'Red Velvet with Cream Cheese Frosting',
      'Custom 2-Tier & 3-Tier Birthday & Wedding Specials',
    ],
    sweets: [
      'Pure Desi Ghee Milky Ladoo & Motichoor',
      'Classic Warm Cardamom Gulab Jamun',
      'Pistachio & Almond Khoya Barfi',
      'Festive Assorted Mithai Platters',
    ],
    pastries: [
      'French Vanilla & Dark Chocolate Eclairs',
      'Glazed Seasonal Fruit Custard Tarts',
      'Opera Coffee Cream Slices',
      'Black Forest Pastries with Dark Cherries',
    ],
    biscuits: [
      'Lahori Almond Nan Khatai (Traditional)',
      'Buttery Roasted Cumin (Zeera) Tea Biscuits',
      'Pistachio Shortbread Cookies',
      'Crispy Baked Sugar Puff Biscuits',
    ],
    'bakery-items': [
      'Golden Flaky Chicken Puff Patties',
      'Soft Stuffed Chicken Bread with Sesame Seeds',
      'Spicy Vegetable Rolls & Pinwheels',
      'Freshly Baked Breakfast Loaves & Buns',
    ],
    'celebration-specials': [
      'Luxury Velvet-Finish Burgundy Sweet Gift Boxes',
      'Bespoke Themed Anniversary & Eid Hampers',
      'Custom Corporate Confectionery Trays',
      'Personalized Celebration Cake Orders',
    ],
  };

  const highlights = categoryHighlights[category.id] || [
    'Baked fresh daily with pure ingredients',
    'Handcrafted by expert Lahore confectionery masters',
    'Available for takeaway and advance celebration booking',
  ];

  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Assalam-o-alaikum Divine Bakers, I am interested in inquiring about your ${category.name} collection.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-[#E7DECE] overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 border border-[#E7DECE] text-[#44403C] hover:text-[#5A0F1B] flex items-center justify-center shadow-xs transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero image for Category */}
        <div className="relative aspect-[16/9] w-full bg-[#F5EFE6] overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-[10px] uppercase tracking-widest text-[#DFC285] font-semibold">
              Divine Bakers Lahore
            </span>
            <h3 className="text-2xl font-editorial font-bold text-white">
              {category.name}
            </h3>
            <p className="text-xs text-[#EAE3D5] mt-0.5">
              {category.subtitle}
            </p>
          </div>
        </div>

        {/* Content Highlights */}
        <div className="p-6 overflow-y-auto">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#5A0F1B] mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Popular Items & Specialties</span>
          </p>

          <div className="space-y-2.5 mt-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E7DECE] text-xs sm:text-sm text-[#292524]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A0F1B] mt-1.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#F0E9DC] grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => {
                onClose();
                onOrderCategory(category);
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#5A0F1B] hover:bg-[#480B15] rounded transition-colors shadow-xs"
            >
              <span>Order {category.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded transition-colors"
            >
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
