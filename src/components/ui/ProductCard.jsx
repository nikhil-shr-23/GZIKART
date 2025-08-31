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
    <div className="bg-white rounded-lg border border-gray-200 p-4 product-card relative">
      {/* Wishlist Heart */}
      <button className="absolute top-3 right-3 z-10">
        <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" />
      </button>
      
      {/* Badges */}
      {badges.length > 0 && (
        <div className="absolute top-3 left-3 z-10">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`inline-block px-2 py-1 text-xs font-semibold rounded mb-1 mr-1 ${
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
      <div className="aspect-square mb-4 flex items-center justify-center bg-gray-50 rounded">
        {image ? (
          <img src={image} alt={name} className="max-w-full max-h-full object-contain" />
        ) : (
          <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
      </div>
      
      {/* Rating */}
      <div className="flex items-center mb-2">
        <div className="flex items-center mr-2">
          {renderStars(rating)}
        </div>
        <span className="text-sm text-gray-600">
          {rating} ({reviewCount} reviews)
        </span>
      </div>
      
      {/* Product Name */}
      <h3 className="text-sm font-medium text-gray-800 mb-3 line-clamp-2 leading-tight">
        {name}
      </h3>
      
      {/* Price */}
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">₹{currentPrice.toLocaleString()}</span>
          {originalPrice && originalPrice > currentPrice && (
            <>
              <span className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
              <span className="text-sm font-semibold text-green-600">{discountPercentage}% off</span>
            </>
          )}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="space-y-2">
        <Button 
          variant="outline" 
          className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
        >
          Add to Cart
        </Button>
        <Button className="w-full bg-healthkart-orange hover:bg-orange-600 text-white">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

