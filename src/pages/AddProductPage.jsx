import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image, Star, ShoppingCart } from "lucide-react";

function AddProductPage() {
  const navigate = useNavigate();
  const [productForm, setProductForm] = useState({
    name: "",
    category: "Furniture",
    price: "",
    originalPrice: "",
    stock: "In Stock",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setProductForm({
      ...productForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("New product listed successfully!");
    navigate("/admin/dashboard"); // সাবমিট করার পর অ্যাডমিন ড্যাশবোর্ডে নিয়ে যাবে
  };

  // ডিসকাউন্ট পার্সেন্টেজ হিসাব করার ফাংশন
  const calculateDiscount = () => {
    const price = parseFloat(productForm.price);
    const original = parseFloat(productForm.originalPrice);
    if (price && original && original > price) {
      return Math.round(((original - price) / original) * 100);
    }
    return null;
  };

  const discount = calculateDiscount();

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* ১. বাম পাশের কলাম: এড প্রোডাক্ট ফর্ম (১২ কলামের ৭ কলাম জুড়ে থাকবে) */}
      <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[4px] border border-stone-200/60 shadow-sm">
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5 text-xs text-stone-700">
          
          <div className="sm:col-span-2 border-b border-stone-100 pb-3 mb-1">
            <h2 className="text-base font-bold text-stone-800 uppercase tracking-wider">
              Product Information
            </h2>
            <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wide">Fill out the fields to list a new item</p>
          </div>

          {/* প্রোডাক্টের নাম */}
          <div className="sm:col-span-2">
            <label className="font-bold text-stone-600 uppercase tracking-wider">Product Name *</label>
            <input
              type="text"
              name="name"
              required
              value={productForm.name}
              onChange={handleChange}
              placeholder="e.g. Minimalist Wooden Dining Table"
              className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black text-black font-medium transition"
            />
          </div>

          {/* ক্যাটাগরি */}
          <div>
            <label className="font-bold text-stone-600 uppercase tracking-wider">Category *</label>
            <select
              name="category"
              value={productForm.category}
              onChange={handleChange}
              className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black cursor-pointer text-stone-700 bg-white font-medium"
            >
              <option value="Furniture">Furniture</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Electronics">Electronics</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>

          {/* স্টক স্ট্যাটাস */}
          <div>
            <label className="font-bold text-stone-600 uppercase tracking-wider">Stock Status *</label>
            <select
              name="stock"
              value={productForm.stock}
              onChange={handleChange}
              className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black cursor-pointer text-stone-700 bg-white font-medium"
            >
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          {/* বর্তমান দাম */}
          <div>
            <label className="font-bold text-stone-600 uppercase tracking-wider">Selling Price (৳) *</label>
            <input
              type="number"
              name="price"
              required
              value={productForm.price}
              onChange={handleChange}
              placeholder="Regular selling price"
              className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black text-black font-medium transition"
            />
          </div>

          {/* পূর্বের বা আসল দাম */}
          <div>
            <label className="font-bold text-stone-600 uppercase tracking-wider">Original Price (৳)</label>
            <input
              type="number"
              name="originalPrice"
              value={productForm.originalPrice}
              onChange={handleChange}
              placeholder="Price before discount"
              className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black text-black font-medium transition"
            />
          </div>

          {/* ইমেজ লিংক ইনপুট */}
          <div className="sm:col-span-2">
            <label className="font-bold text-stone-600 uppercase tracking-wider">Product Image URL</label>
            <div className="flex items-center border border-stone-200 rounded-[4px] px-3.5 py-2.5 mt-1.5 focus-within:border-black bg-white transition">
              <Image size={15} className="text-stone-400 mr-2" />
              <input
                type="url"
                name="image"
                value={productForm.image}
                onChange={handleChange}
                placeholder="Paste online image link"
                className="w-full outline-none bg-transparent text-black font-medium"
              />
            </div>
          </div>

          {/* ডেসক্রিপশন */}
          <div className="sm:col-span-2">
            <label className="font-bold text-stone-600 uppercase tracking-wider">Product Description</label>
            <textarea
              rows="3"
              name="description"
              value={productForm.description}
              onChange={handleChange}
              placeholder="Specify material details, dimensions, color variants, etc."
              className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none resize-none focus:border-black text-black font-medium transition"
            ></textarea>
          </div>

          {/* সাবমিট বাটন */}
          <div className="sm:col-span-2 pt-2">
            <button
              type="submit"
              className="w-full bg-black hover:bg-zinc-900 text-white py-3.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              List This Product
            </button>
          </div>
          
        </form>
      </div>

      {/* ২. ডান পাশের কলাম: রিয়েল-টাইম লাইভ প্রিভিউ কার্ড (১২ কলামের ৫ কলাম জুড়ে থাকবে - ডেস্কটপে স্টিকি থাকবে) */}
      <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
        
        {/* প্রিভিউ হেডার */}
        <div className="border-b border-stone-200 pb-2">
          <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
            Live Card Preview
          </h3>
          <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wide">How it will look in your storefront</p>
        </div>

        {/* হুবহু HOMTIDY শপ পেজ থিম ম্যাচিং প্রিভিউ কার্ড */}
        <div className="bg-white rounded-[4px] border border-zinc-200 p-4 shadow-sm flex flex-col justify-between">
          
          {/* ইমেজ কন্টেইনার (ব্যানার বেইজ #ECE9E4 কালার সহ) */}
          <div className="relative overflow-hidden bg-[#ECE9E4] rounded-[4px] flex items-center justify-center p-3 h-56">
            
            {/* লাইভ ডিসকাউন্ট ব্যাজ */}
            {discount && (
              <span className="absolute top-2 left-2 bg-black text-white text-[9px] font-black tracking-tighter px-1.5 py-0.5 rounded-[2px] shadow-sm z-10">
                -{discount}%
              </span>
            )}

            {/* প্রোডাক্ট ইমেজ (লিংক না থাকলে ফলব্যাক আইকন দেখাবে) */}
            {productForm.image ? (
              <img
                src={productForm.image}
                alt="Product Preview"
                className="max-w-full max-h-full object-contain mix-blend-multiply"
                onError={(e) => { e.target.style.display = 'none'; }} // ভাঙা ইমেজ লিংক হ্যান্ডেল করতে
              />
            ) : (
              <div className="text-stone-400 flex flex-col items-center gap-2">
                <Image size={32} className="stroke-1" />
                <span className="text-[10px] uppercase font-bold tracking-wider">No Image Loaded</span>
              </div>
            )}

          </div>

          {/* কন্টেন্ট এরিয়া */}
          <div className="pt-4 space-y-2">
            
            {/* লাইভ ক্যাটাগরি */}
            <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest block">
              {productForm.category}
            </span>

            {/* লাইভ প্রোডাক্ট টাইটেল (ফাঁকা থাকলে ডেমো টেক্সট দেখাবে) */}
            <h3 className="text-sm font-semibold text-black leading-snug line-clamp-2 h-10">
              {productForm.name || "Minimalist Product Title Preview"}
            </h3>

            {/* ডেমো ৫ স্টার রেটিং */}
            <div className="flex items-center gap-0.5 pt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="text-amber-400 fill-current" />
              ))}
              <span className="text-[10px] text-zinc-500 font-bold ml-1">(5.0)</span>
            </div>

            {/* লাইভ ডাবল প্রাইসিং বিন্যাস */}
            <div className="flex items-baseline gap-2 pt-1">
              {productForm.originalPrice && (
                <span className="text-[10px] sm:text-xs text-zinc-400 line-through">
                  ৳{parseFloat(productForm.originalPrice).toLocaleString()}
                </span>
              )}
              <span className="text-base font-bold text-black">
                ৳{productForm.price ? parseFloat(productForm.price).toLocaleString() : "0.00"}
              </span>
            </div>

            {/* অ্যাড টু কার্ট ডেমো বাটন */}
            <button className="mt-4 w-full bg-black text-white py-3 rounded-[4px] text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed opacity-90">
              <ShoppingCart size={12} />
              Add To Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddProductPage;