import React from 'react';
import { CONTACT_PHONE, WHATSAPP_LINK } from '../data/bakeryData';
import { Phone, MessageCircle } from 'lucide-react';

interface FinalCtaProps {
  onOpenOrderModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#5A0F1B] text-[#FAF7F2] relative overflow-hidden">
      {/* Decorative gold accent circle */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#400B13] rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#DFC285]">
          Let's Celebrate Together
        </span>

        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-editorial font-semibold text-white tracking-tight leading-tight">
          Ready to Make Your Moment Sweeter?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#E6DCDB] max-w-xl mx-auto font-sans leading-relaxed">
          Visit Divine Bakers or get in touch for your next cake, sweet order or celebration.
        </p>

        {/* Buttons & Contact Channels */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenOrderModal}
            className="whitespace-nowrap inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide text-[#5A0F1B] bg-[#DFC285] hover:bg-[#F2DCAB] active:bg-[#C9A96A] rounded transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC285]"
          >
            Order Now
          </button>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] rounded transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
            className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-transparent hover:bg-white/10 active:bg-white/15 border border-white/30 rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Highlighted Phone Display */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#440A13] border border-[#7E1A29] text-xs text-[#E6DCDB]">
          <span>Helpline & Order Desk:</span>
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
            className="font-bold text-[#DFC285] hover:underline tabular-nums text-sm"
          >
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
};
