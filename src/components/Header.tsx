import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_PHONE } from '../data/bakeryData';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Cakes & Desserts', href: '#cakes-desserts' },
    { label: 'Locations', href: '#locations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E7DECE] py-3'
          : 'bg-[#FAF7F2] border-b border-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A0F1B] rounded-sm"
            aria-label="Divine Bakers Home"
          >
            <BrandLogo />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#44403C]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap transition-colors duration-200 hover:text-[#5A0F1B] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#5A0F1B] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#5A0F1B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A0F1B] hover:text-[#3E0A12] px-2.5 py-1.5 rounded transition-colors"
              title="Call Divine Bakers"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="tabular-nums">{CONTACT_PHONE}</span>
            </a>

            <button
              onClick={onOpenOrderModal}
              className="whitespace-nowrap inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold tracking-wide text-white bg-[#5A0F1B] hover:bg-[#480B15] active:bg-[#380910] rounded transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A0F1B] focus-visible:ring-offset-2"
            >
              Order Now
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#44403C] hover:text-[#5A0F1B] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A0F1B]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E7DECE] bg-[#FAF7F2] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#292524] hover:text-[#5A0F1B] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-[#EAE3D5] flex items-center justify-between">
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A0F1B]"
              >
                <Phone className="w-4 h-4" />
                <span className="tabular-nums">{CONTACT_PHONE}</span>
              </a>
              <span className="text-xs text-[#78716C]">Lahore Branches</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
