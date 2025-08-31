import { Search, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Top promotional banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Get Extra 5% Off on Biozyme Range | Code : ZYMX5
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
                      <span className="bg-gzikart-green text-white px-2 py-1 rounded">GZI</span>
        <span className="gzikart-teal ml-1">KART</span>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products & brands..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none search-bar"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="gzikart-teal border-[#00BCD4]">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="border-t border-gray-200 py-3">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-1 nav-item cursor-pointer">
              <Menu className="h-4 w-4" />
              <span>Shop By Category</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <a href="#" className="nav-item hover:text-[#00BCD4] transition-colors">Best Sellers</a>
            <a href="#" className="nav-item hover:text-[#00BCD4] transition-colors">Brands</a>
            <a href="#" className="nav-item hover:text-[#00BCD4] transition-colors">Offer Zone</a>
            <a href="#" className="nav-item hover:text-[#00BCD4] transition-colors">Blogs</a>
            <a href="#" className="nav-item hover:text-[#00BCD4] transition-colors">Gift Card</a>
            <a href="#" className="nav-item hover:text-[#00BCD4] transition-colors">Customer Support</a>
            <a href="#" className="nav-item hover:text-[#00BCD4] transition-colors">Store locator</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

