import { Link } from 'react-router-dom';
import products from '../data/products.json';

function Products() {
  return (
    <section className="py-16 px-4 lg:px-10 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title Section */}
        <div className="text-center mb-12 relative">
          <p className="text-orange-600 font-bold text-sm mb-2 uppercase tracking-wider">
            Our Handpicked Collection
          </p>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover Our <span className="text-orange-500">Popular</span> Products
          </h2>

          <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
            Explore a curated selection of high-quality items designed to enhance your life.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >

              {/* Product Image */}
              <div className="overflow-hidden relative h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}

                {product.isSale && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    SALE
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col justify-between">
                <span className="text-xs text-gray-500 font-medium mb-1 capitalize">
                  {product.category}
                </span>

                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>

                {product.shortDescription && (
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {product.shortDescription}
                  </p>
                )}

                {/* Price + Button */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <p className="text-xl font-extrabold text-gray-900">
                    ${product.price}
                  </p>

                  <Link to={`/product/${product.id}`}>
                    <button
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                    >
                      Details
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;