import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, Heart } from 'lucide-react';
import products from '../data/products.json';

function Products() {
  return (
    <section className="py-24 px-4 lg:px-10 bg-gradient-to-br from-[#ecfdf5] via-white to-[#d1fae5] overflow-hidden relative">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-200/40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-emerald-200/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-green-100 px-5 py-2 rounded-full shadow-sm mb-5">

            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

            <p className="text-green-700 font-medium text-sm">
              Premium Collection
            </p>

          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">

            Discover Our
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
              Trending Products
            </span>

          </h2>

          <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto leading-8">
            Explore beautifully crafted lifestyle products,
            furniture, electronics, and smart home essentials
            designed for modern living.
          </p>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.map((product) => {

            const oldPrice = Math.floor(
              product.price + product.price * 0.25
            );

            return (
              <div
                key={product.id}
                className="group relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Image */}
                <div className="relative overflow-hidden h-64">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Floating Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 transition duration-500">

                    {/* Wishlist */}
                    <button className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition">
                      <Heart size={18} />
                    </button>

                    {/* View */}
                    <Link
                      to={`/product/${product.id}`}
                      className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition"
                    >
                      <Eye size={18} />
                    </Link>

                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4">

                    <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      25% OFF
                    </span>

                  </div>

                </div>

                {/* Content */}
                <div className="p-5">

                  {/* Category */}
                  <span className="text-sm text-green-600 font-semibold capitalize">
                    {product.category}
                  </span>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 mt-2 leading-snug group-hover:text-green-600 transition">

                    {product.name}

                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-6 mt-3">
                    Premium quality product designed for modern
                    lifestyle and everyday comfort.
                  </p>

                  {/* Price Section */}
                  <div className="flex items-center justify-between mt-6">

                    <div>

                      {/* Current + Old Price */}
                      <div className="flex items-center gap-3">

                        <p className="text-3xl font-black text-gray-900">
                          ${product.price}
                        </p>

                        <span className="text-lg text-gray-400 line-through">
                          ${oldPrice}
                        </span>

                      </div>

                      {/* Delivery */}
                      <p className="text-sm text-green-600 font-semibold mt-1">
                        Free Delivery
                      </p>

                    </div>

                    {/* Cart Button */}
                    <button className="w-12 h-12 rounded-2xl bg-green-100 hover:bg-green-600 hover:text-white flex items-center justify-center transition duration-300 shadow-md">

                      <ShoppingCart size={20} />

                    </button>

                  </div>

                  {/* Buy Button */}
                  <Link
                    to={`/checkout/${product.id}`}
                    className="block mt-6"
                  >

                    <button className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white py-3 rounded-2xl font-semibold shadow-xl hover:scale-[1.02] transition duration-300">

                      Buy Now

                    </button>

                  </Link>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Products;