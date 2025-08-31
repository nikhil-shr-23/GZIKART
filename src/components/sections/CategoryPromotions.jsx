import { categoryPromotions } from '../../data/products';

const CategoryPromotions = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium supplements across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryPromotions.map((promo) => (
            <div
              key={promo.id}
              className={`${promo.bgColor} rounded-2xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full translate-y-10 -translate-x-10"></div>
              </div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  {promo.image ? (
                    <img src={promo.image} alt={promo.title} className="mx-auto h-24 w-24 object-contain" />
                  ) : (
                    <div className="mx-auto h-24 w-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className={`text-3xl font-bold ${promo.textColor}`}>
                        {promo.id.toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${promo.textColor}`}>
                  {promo.title}
                </h3>
                
                <p className={`text-base mb-4 ${promo.textColor} opacity-90 font-medium`}>
                  {promo.subtitle}
                </p>
                
                <div className={`text-2xl font-bold ${promo.textColor} mb-4`}>
                  {promo.price}
                </div>
                
                {promo.id === 'hkvitals' && (
                  <div className="text-sm text-gray-600 bg-white bg-opacity-20 rounded-lg px-3 py-2">
                    *Avail Offer At Checkout | On Selected Range
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPromotions;

