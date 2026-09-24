import React, { useState } from 'react';
import { Product } from '../types/bakery';
import { LOCATIONS, CONTACT_PHONE, WHATSAPP_PHONE } from '../data/bakeryData';
import { X, Send, Phone, CheckCircle2, MessageCircle, Calendar, MapPin } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
  mode?: 'order' | 'celebration';
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  mode = 'order',
}) => {
  const [selectedBranch, setSelectedBranch] = useState(LOCATIONS[0].name);
  const [selectedCategory, setSelectedCategory] = useState(
    initialProduct ? initialProduct.category : 'cakes'
  );
  const [itemName, setItemName] = useState(initialProduct ? initialProduct.name : '');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `*Divine Bakers Order Inquiry*
*Name:* ${customerName || 'Customer'}
*Phone:* ${customerPhone || 'Not provided'}
*Branch:* ${selectedBranch}
*Item / Category:* ${itemName || selectedCategory}
*Occasion / Notes:* ${notes || 'Fresh order inquiry'}`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-[#E7DECE] overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#5A0F1B] text-white flex items-center justify-between">
          <div>
            <h2 className="text-lg font-editorial font-bold tracking-wide">
              {mode === 'celebration' ? 'Plan Your Celebration' : 'Order / Inquire at Divine Bakers'}
            </h2>
            <p className="text-xs text-[#E6DCDB] mt-0.5">
              Freshly prepared with pure ingredients · Lahore, Pakistan
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-editorial font-bold text-[#1C1917]">
              Inquiry Prepared!
            </h3>
            <p className="mt-2 text-sm text-[#57534E] max-w-sm">
              Connect directly with Divine Bakers <strong>{selectedBranch}</strong> via WhatsApp or phone to finalize weight, flavor, and delivery/pickup time.
            </p>

            <div className="mt-6 w-full flex flex-col gap-3">
              <button
                onClick={handleSendWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Order via WhatsApp ({CONTACT_PHONE})</span>
              </button>

              <a
                href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#1C1917] bg-[#FAF7F2] hover:bg-[#EFE9DF] border border-[#E7DECE] rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Branch ({CONTACT_PHONE})</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-[#78716C] hover:text-[#1C1917] mt-2 underline"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Order Form */
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-[#1C1917]">
            {/* Preferred Lahore Branch */}
            <div>
              <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#5A0F1B]" />
                <span>Select Nearest Branch</span>
              </label>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#D6CBB8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A0F1B]"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} — {loc.area}
                  </option>
                ))}
              </select>
            </div>

            {/* Category / Product */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as any)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#D6CBB8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A0F1B]"
                >
                  <option value="cakes">Cakes (Custom / Fudge / Fresh Cream)</option>
                  <option value="sweets">Traditional Sweets (Desi Ghee Mithai)</option>
                  <option value="pastries">Pastries & Dessert Slices</option>
                  <option value="biscuits">Biscuits & Nan Khatai</option>
                  <option value="snacks">Bakery Snacks & Patties</option>
                  <option value="gifts">Luxury Gift Boxes</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                  Item or Flavor Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chocolate Cake, Milky Ladoo"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#D6CBB8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A0F1B]"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#D6CBB8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A0F1B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0300 1234567"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#D6CBB8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A0F1B]"
                />
              </div>
            </div>

            {/* Custom Celebration Notes */}
            <div>
              <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#5A0F1B]" />
                <span>Special Instructions or Date (Optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Writing on cake, custom weight (e.g. 2 lbs), delivery/pickup date, or special packaging preferences..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#D6CBB8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A0F1B]"
              />
            </div>

            {/* Submit & Immediate Action */}
            <div className="pt-3 border-t border-[#F0E9DC] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Directly</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#5A0F1B] hover:bg-[#480B15] rounded transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
