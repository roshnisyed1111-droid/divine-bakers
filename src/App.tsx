import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoStrip } from './components/InfoStrip';
import { CategoriesSection } from './components/CategoriesSection';
import { SignatureProducts } from './components/SignatureProducts';
import { CelebrationSection } from './components/CelebrationSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CakesCelebrations } from './components/CakesCelebrations';
import { LocationsSection } from './components/LocationsSection';
import { TrustReviews } from './components/TrustReviews';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { OrderModal } from './components/OrderModal';
import { CategoryExploreModal } from './components/CategoryExploreModal';
import { Product, Category } from './types/bakery';
import { WheatGrainAccent, CreamSwirlAccent } from './components/Decorative3DAccents';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderModalProduct, setOrderModalProduct] = useState<Product | null>(null);
  const [orderMode, setOrderMode] = useState<'order' | 'celebration'>('order');

  const handleOpenOrderModal = (product?: Product, mode: 'order' | 'celebration' = 'order') => {
    setOrderModalProduct(product || null);
    setOrderMode(mode);
    setIsOrderModalOpen(true);
  };

  const handleAskForPrice = (product: Product) => {
    handleOpenOrderModal(product, 'order');
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917] selection:bg-[#5A0F1B] selection:text-white">
      {/* Header */}
      <Header onOpenOrderModal={() => handleOpenOrderModal(undefined, 'order')} />

      <main className="flex-1">
        {/* Hero Section with 3D Cake Element */}
        <Hero onOpenOrderModal={() => handleOpenOrderModal(undefined, 'order')} />

        {/* Decorative subtle accent 1 */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <WheatGrainAccent className="absolute -top-6 right-8 sm:right-16 hidden md:block" />
        </div>

        {/* Quick Business Info Strip */}
        <InfoStrip />

        {/* Popular Categories (6 Cards) */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* Signature Products Showcase with 3D Hover Effect */}
        <SignatureProducts
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAskForPrice={handleAskForPrice}
        />

        {/* Featured / Seasonal Celebration Section (Deep Burgundy & 3D Dessert Stand) */}
        <CelebrationSection
          onExploreCelebration={() => handleOpenOrderModal(undefined, 'celebration')}
        />

        {/* Decorative subtle accent 2 */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <CreamSwirlAccent className="absolute -top-7 left-6 hidden lg:block" />
        </div>

        {/* About Divine Bakers */}
        <AboutSection
          onDiscoverMore={() => {
            const menuEl = document.getElementById('menu');
            menuEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Why Choose Us (4 minimal features) */}
        <WhyChooseUs />

        {/* Cakes & Celebrations Showcase */}
        <CakesCelebrations
          onOrderCake={() => handleOpenOrderModal(undefined, 'order')}
          onPlanCelebration={() => handleOpenOrderModal(undefined, 'celebration')}
        />

        {/* Locations Section (PIA Road, Sabzazar, Bahria Town, Samanabad) */}
        <LocationsSection
          onContactLocation={() => handleOpenOrderModal(undefined, 'order')}
        />

        {/* Google Reviews Trust Section (4.2 Stars, 247 Reviews) */}
        <TrustReviews />

        {/* Order / Contact CTA Section */}
        <FinalCta
          onOpenOrderModal={() => handleOpenOrderModal(undefined, 'order')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenOrderWithProduct={(prod) => handleOpenOrderModal(prod, 'order')}
      />

      {/* Category Explore Modal */}
      <CategoryExploreModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onOrderCategory={(cat) => {
          handleOpenOrderModal(undefined, 'order');
        }}
      />

      {/* Order / Celebration Planner Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialProduct={orderModalProduct}
        mode={orderMode}
      />
    </div>
  );
}
