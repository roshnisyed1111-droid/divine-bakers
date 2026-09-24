import React from 'react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_PHONE, WHATSAPP_LINK } from '../data/bakeryData';
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-[#D6D3D1] pt-16 pb-12 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2E2A27]">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <BrandLogo variant="dark" showTagline />
            <p className="mt-4 text-xs sm:text-sm text-[#A8A29E] leading-relaxed max-w-sm font-sans">
              Quality bakery products and sweets made with pure ingredients.
            </p>
            <p className="mt-3 text-xs text-[#DFC285] font-serif italic">
              “Making every happiness special.”
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              Contact & Outlets
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-[#E7E5E4]">
                <Phone className="w-4 h-4 text-[#DFC285] shrink-0" />
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
                  className="hover:underline tabular-nums font-semibold"
                >
                  {CONTACT_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#E7E5E4]">
                <MapPin className="w-4 h-4 text-[#DFC285] shrink-0" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="text-[11px] text-[#A8A29E] pl-6 space-y-0.5">
                <p>· PIA Road</p>
                <p>· Sabzar Ziaat Chowk</p>
                <p>· Bahria Town</p>
                <p>· Samnabad</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D6D3D1] hover:text-[#DFC285] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D6D3D1] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p>© 2026 Divine Bakers. All rights reserved.</p>
          <p className="text-[11px]">Bakery & Sweets · Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
};
