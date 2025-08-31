import { Search, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Top promotional banner */}
      <div className="bg-blue-600 text-white text-center py-3 text-sm font-medium">
        Get Extra 5% Off on Biozyme Range | Code : ZYMX5
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold">
              <span className="bg-gzikart-green text-white px-3 py-2 rounded-lg">GZI</span>
              <span className="gzikart-teal ml-2">KART</span>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products & brands..."
                className="w-full px-6 py-3 border border-gray-300 rounded-xl focus:outline-none search-bar text-base"
              />
              <Search className="absolute right-4 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <Button variant="outline" className="gzikart-teal border-[#00BCD4] px-6 py-2.5 text-base font-medium">
              <User className="h-5 w-5 mr-2" />
              Login
            </Button>
            <div className="relative cursor-pointer">
              <ShoppingCart className="h-7 w-7 text-gray-600 hover:text-gzikart-teal transition-colors" />
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-semibold">
                0
              </span>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="border-t border-gray-200 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 nav-item cursor-pointer hover:text-gzikart-teal transition-colors font-medium">
                <Menu className="h-5 w-5" />
                <span>Shop By Category</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="nav-item hover:text-gzikart-teal transition-colors font-medium">Best Sellers</a>
              <a href="#" className="nav-item hover:text-gzikart-teal transition-colors font-medium">Brands</a>
              <a href="#" className="nav-item hover:text-gzikart-teal transition-colors font-medium">Offer Zone</a>
              <a href="#" className="nav-item hover:text-gzikart-teal transition-colors font-medium">Blogs</a>
              <a href="#" className="nav-item hover:text-gzikart-teal transition-colors font-medium">Gift Card</a>
              <a href="#" className="nav-item hover:text-gzikart-teal transition-colors font-medium">Customer Support</a>
              <a href="#" className="nav-item hover:text-gzikart-teal transition-colors font-medium">Store locator</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

