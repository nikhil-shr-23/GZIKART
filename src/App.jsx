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
      
      <main className="container mx-auto px-4">
        {/* Hero Carousel */}
        <div className="py-6">
          <HeroCarousel />
        </div>
        
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
      
      {/* Footer placeholder */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">GZI KART - India's Authentic Online Supplement Store</p>
          <p className="text-gray-400">Your trusted partner for health and fitness supplements</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

