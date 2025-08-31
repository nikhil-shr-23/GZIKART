import { categoryPromotions } from '../../data/products';

const CategoryPromotions = () => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryPromotions.map((promo) => (
          <div
            key={promo.id}
            className={`${promo.bgColor} rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition-shadow`}
          >
            <div className="mb-4">
              {promo.image ? (
                <img src={promo.image} alt={promo.title} className="mx-auto h-20 w-20 object-contain" />
              ) : (
                <div className="mx-auto h-20 w-20 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className={`text-2xl font-bold ${promo.textColor}`}>
                    {promo.id.toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            
            <h3 className={`text-lg font-bold mb-2 ${promo.textColor}`}>
              {promo.title}
            </h3>
            
            <p className={`text-sm mb-3 ${promo.textColor} opacity-80`}>
              {promo.subtitle}
            </p>
            
            <div className={`text-lg font-bold ${promo.textColor}`}>
              {promo.price}
            </div>
            
            {promo.id === 'hkvitals' && (
              <div className="mt-3 text-xs text-gray-600">
                *Avail Offer At Checkout | On Selected Range
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPromotions;

