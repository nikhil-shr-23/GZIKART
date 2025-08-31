import { Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    image,
    rating,
    reviewCount,
    currentPrice,
    originalPrice,
    discountPercentage,
    badges = []
  } = product;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 product-card relative h-full flex flex-col">
      {/* Wishlist Heart */}
      <button className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200">
        <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" />
      </button>
      
      {/* Badges */}
      {badges.length > 0 && (
        <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-lg shadow-sm ${
                badge === 'Freebie' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      )}
      
      {/* Product Image */}
      <div className="aspect-square mb-6 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="max-w-full max-h-full object-contain" />
        ) : (
          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
      </div>
      
      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-3">
          {renderStars(rating)}
        </div>
        <span className="text-sm text-gray-600 font-medium">
          {rating} ({reviewCount} reviews)
        </span>
      </div>
      
      {/* Product Name */}
      <h3 className="text-base font-semibold text-gray-800 mb-4 line-clamp-2 leading-tight flex-grow">
        {name}
      </h3>
      
      {/* Price */}
      <div className="mb-6">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold text-gray-900">₹{currentPrice.toLocaleString()}</span>
          {originalPrice && originalPrice > currentPrice && (
            <>
              <span className="text-base text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">{discountPercentage}% off</span>
            </>
          )}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="space-y-3 mt-auto">
        <Button 
          variant="outline" 
          className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 py-3 text-base font-medium rounded-lg transition-all duration-200"
        >
          Add to Cart
        </Button>
        <Button className="w-full bg-gzikart-orange hover:bg-orange-600 text-white py-3 text-base font-medium rounded-lg transition-all duration-200">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

