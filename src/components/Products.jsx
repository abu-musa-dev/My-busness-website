import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Eye,
  Heart,
  Search,
} from "lucide-react";

import products from "../data/products.json";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // FILTER PRODUCTS
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="py-16 md:py-24 px-4 lg:px-10 bg-[#FAF9F6] overflow-hidden relative border-t border-zinc-200">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* FILTER + SEARCH BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

          {/* ক্যাটাগরি বাটনসমূহ (মোবাইলে ৩-কলাম গ্রিড এবং ডেস্কটপে ফ্লেক্সিবল ক্যাটাগরি বাটন) */}
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-3 gap-2 md:flex md:flex-wrap w-full md:w-auto">
              {["All", "Furniture", "Kitchen", "Electronics", "Bedroom", "Gaming"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === "All" ? "All" : category)}
                  className={`py-3 px-1 md:px-6 rounded-[4px] text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center transition-all duration-300 md:w-auto ${
                    (category === "All" ? selectedCategory === "All" : selectedCategory === category)
                      ? "bg-black text-white border border-black"
                      : "bg-white border border-zinc-200 text-zinc-700 hover:bg-black hover:text-white hover:border-black"
                  }`}
                >
                  {category === "All" ? "All" : category}
                </button>
              ))}
            </div>
          </div>

          {/* সার্চ বার */}
          <div className="w-full lg:w-[320px]">
            <div className="flex items-center bg-white border border-zinc-200 rounded-[4px] p-1.5 shadow-sm">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-sm text-black placeholder:text-zinc-400 px-3 py-1.5"
              />
              <button className="w-10 h-10 rounded-[2px] bg-black text-white flex items-center justify-center transition active:scale-95 flex-shrink-0">
                <Search size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {filteredProducts.map((product) => {
            const oldPrice = Math.floor(
              product.price + product.price * 0.25
            );

            return (
              <div
                key={product.id}
                className="group relative bg-white border border-zinc-200 rounded-[4px] overflow-hidden transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
              >
                {/* IMAGE AREA */}
                <div className="relative overflow-hidden h-64 bg-[#ECE9E4] flex items-center justify-center p-4">
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition duration-700 mix-blend-multiply"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* FLOATING ACTION BUTTONS */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2.5 opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 transition duration-500">
                    <button className="w-10 h-10 rounded-[4px] bg-white border border-zinc-200 shadow-md flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition">
                      <Heart size={16} />
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="w-10 h-10 rounded-[4px] bg-white border border-zinc-200 shadow-md flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition"
                    >
                      <Eye size={16} />
                    </Link>
                  </div>

                  {/* DISCOUNT TAG */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white text-[9px] font-black tracking-tighter px-1.5 py-0.5 rounded-[2px] shadow-sm">
                      25% OFF
                    </span>
                  </div>

                </div>

                {/* CONTENT AREA */}
                <div className="p-5 flex flex-col justify-between min-h-[220px]">
                  
                  <div>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                      {product.category}
                    </span>

                    <h3 className="text-base font-semibold text-black mt-1 leading-snug group-hover:text-zinc-600 transition duration-300">
                      {product.name}
                    </h3>

                    <p className="text-zinc-500 text-xs leading-relaxed mt-2">
                      Premium quality product designed for modern lifestyle and everyday comfort.
                    </p>
                  </div>

                  {/* PRICE & CART */}
                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-zinc-100">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-zinc-400 line-through">
                          ${oldPrice}
                        </span>
                        <p className="text-lg font-bold text-black">
                          ${product.price}
                        </p>
                      </div>
                      <p className="text-[10px] text-zinc-400 font-semibold uppercase mt-0.5 tracking-wider">
                        Free Delivery
                      </p>
                    </div>

                    {/* CART BUTTON */}
                    <button className="w-10 h-10 rounded-[4px] bg-zinc-100 hover:bg-black hover:text-white flex items-center justify-center transition duration-300">
                      <ShoppingCart size={16} />
                    </button>
                  </div>

                  {/* BUY NOW BUTTON */}
                  <Link to={`/checkout/${product.id}`} className="block mt-4">
                    <button className="w-full bg-black hover:bg-zinc-900 text-white py-3 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all duration-300">
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