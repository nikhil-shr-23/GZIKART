import ProductCard from '../ui/ProductCard';

const ProductSection = ({ title, products, showViewAll = true }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {showViewAll && (
            <button className="text-gzikart-teal hover:text-[#00ACC1] font-semibold text-lg transition-colors duration-200 hover:underline">
              View All →
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

