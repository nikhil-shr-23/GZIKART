import Header from './components/layout/Header';
import HeroCarousel from './components/sections/HeroCarousel';
import ProductSection from './components/sections/ProductSection';
import CategoryPromotions from './components/sections/CategoryPromotions';
import PromotionalBanner from './components/sections/PromotionalBanner';
import { blockbusterDeals, bestSellingProteins, megaDealPacks, gainingZone } from './data/products';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Carousel */}
        <HeroCarousel />
        
        {/* Blockbuster Deals */}
        <ProductSection 
          title="Blockbuster Deals" 
          products={blockbusterDeals} 
        />
        
        {/* Category Promotions */}
        <CategoryPromotions />
        
        {/* Best Selling Proteins */}
        <ProductSection 
          title="Best Selling Proteins" 
          products={bestSellingProteins} 
        />
        
        {/* Mega Deal Packs */}
        <ProductSection 
          title="Mega Deal Packs" 
          products={megaDealPacks} 
        />
        
        {/* Promotional Banner */}
        <PromotionalBanner 
          title="20g SHILAJIT PRO"
          subtitle="Boosts Stamina & Boosts Energy & Endurance"
          offer="BUY ONE GET ONE FREE"
        />
        
        {/* Gaining Zone */}
        <ProductSection 
          title="Gaining-Zone" 
          products={gainingZone} 
        />
      </main>
      
      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="text-3xl font-bold mb-4">
              <span className="bg-gzikart-green text-white px-3 py-2 rounded-lg">GZI</span>
              <span className="gzikart-teal ml-2">KART</span>
            </div>
            <p className="text-xl mb-4">India's Authentic Online Supplement Store</p>
            <p className="text-gray-400 text-lg">Your trusted partner for health and fitness supplements</p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 GZI KART. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

