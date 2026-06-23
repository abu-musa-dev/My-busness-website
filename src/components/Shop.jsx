import React, { useState, useEffect } from 'react';
import { Grid, List, Search, ChevronDown, Star } from 'lucide-react';
import Navbar from '../components/Navbar';

// স্ক্রিনশট অনুযায়ী প্রোডাক্ট ডেটা এবং লাইভ টাইমার সেটআপ
const initialProducts = [
  {
    id: 'p1',
    name: 'Digital Shoppy NODELAND Coffee Table',
    price: 200.00,
    originalPrice: null,
    discount: null,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop',
    category: 'Living Room',
    rating: 3,
    timerSeconds: null,
  },
  {
    id: 'p2',
    name: 'IKEA Gladom Tray Table Black 504.119.90 Size',
    price: 249.00,
    originalPrice: 300.00,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop',
    category: 'Living Room',
    rating: 4,
    timerSeconds: 589 * 86400 + 15 * 3600 + 27 * 60 + 13,
  },
  {
    id: 'p3',
    name: 'Ikea Hol Acacia Side Table Wooden',
    price: 200.00,
    originalPrice: null,
    discount: null,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop',
    category: 'Living Room',
    rating: 4,
    timerSeconds: null,
  },
  {
    id: 'p4',
    name: 'ClosetMaid 8987 Stackable 3-Shelf Organizer',
    price: 300.00,
    originalPrice: null,
    discount: null,
    image: 'https://images.unsplash.com/photo-1617180479701-d70c406b0d9e?q=80&w=600&auto=format&fit=crop',
    category: 'Bedroom',
    rating: 5,
    timerSeconds: null,
  },
  {
    id: 'p5',
    name: 'Floating Shelves, Wall Shelf Outdoor Wall',
    price: 400.00,
    originalPrice: 500.00,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop',
    category: 'Dining Room',
    rating: 4,
    timerSeconds: 600 * 86400 + 15 * 3600 + 27 * 60 + 13,
  },
  {
    id: 'p6',
    name: 'Portable Smart Side Table Bluetooth Speaker',
    price: 200.00,
    originalPrice: 208.00,
    discount: 4,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop',
    category: 'Living Room',
    rating: 4.5,
    timerSeconds: 582 * 86400 + 15 * 3600 + 27 * 60 + 13,
  },
];

function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', ...new Set(initialProducts.map(p => p.category))];

  const filteredProducts = initialProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortOrder === 'price-asc') return a.price - b.price;
    if (sortOrder === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <>
      <Navbar />
      {/* মোবাইলের অতিরিক্ত ফাঁকা অংশ কমাতে pt-20 এবং ডেস্কটপে pt-28 করা হয়েছে */}
      <div className="min-h-screen bg-[#FAF9F6] pt-20 md:pt-28 pb-20 px-3 md:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Page Header */}
          <div className="text-center md:text-left py-4 border-b border-zinc-200">
            <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
              Exclusive Deals
            </span>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-black uppercase mt-1">
              Shop Modern Furniture
            </h1>
          </div>

          {/* Filters & Control Bar */}
          <div className="bg-white p-4 rounded-[4px] border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm shadow-sm">
            
            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search items..."
                className="w-full pl-9 pr-4 py-2.5 bg-[#FAF9F6] border border-zinc-200 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-black text-black text-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={14} className="absolute left-3 top-3.5 text-zinc-400" />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <div className="relative min-w-[140px] w-full sm:w-auto">
                <select
                  className="block w-full appearance-none bg-white border border-zinc-200 px-4 py-2.5 pr-10 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-black text-black font-semibold text-xs cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              </div>

              <div className="relative min-w-[160px] w-full sm:w-auto">
                <select
                  className="block w-full appearance-none bg-white border border-zinc-200 px-4 py-2.5 pr-10 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-black text-black font-semibold text-xs cursor-pointer"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="default">Default Sorting</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              </div>
            </div>

            {/* View Grid Toggle */}
            <div className="flex items-center gap-1 border border-zinc-200 p-1 rounded-[4px] bg-white ml-auto md:ml-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-[2px] transition-all ${viewMode === 'grid' ? 'bg-black text-white' : 'text-zinc-400 hover:bg-zinc-100'}`}
              >
                <Grid size={15} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-[2px] transition-all ${viewMode === 'list' ? 'bg-black text-white' : 'text-zinc-400 hover:bg-zinc-100'}`}
              >
                <List size={15} />
              </button>
            </div>
          </div>

          {/* Product Cards Layout */}
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8' : 'space-y-6'}`}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

// লাইভ কাউন্টডাউন টাইমার কম্পোনেন্ট
const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const days = Math.floor(seconds / (3600 * 24));
  const hrs = Math.floor((seconds % (3600 * 24)) / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const timeBlocks = [
    { label: 'DAYS', value: days, isSec: false },
    { label: 'HRS', value: hrs, isSec: false },
    { label: 'MIN', value: mins, isSec: false },
    { label: 'SEC', value: secs, isSec: true },
  ];

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5 bg-white/95 px-1 sm:px-2 py-1 rounded-[2px] shadow-sm border border-zinc-100 z-10 w-[92%] justify-between">
      {timeBlocks.map((block, idx) => (
        <div key={idx} className="flex flex-col items-center flex-1">
          <span className={`text-[10px] sm:text-xs font-extrabold tracking-tight leading-none ${block.isSec ? 'text-red-500' : 'text-black'}`}>
            {String(block.value).padStart(2, '0')}
          </span>
          <span className={`text-[5px] sm:text-[7px] font-bold tracking-tighter mt-0.5 ${block.isSec ? 'text-red-500' : 'text-zinc-400'}`}>
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};

// প্রোডাক্ট কার্ড কম্পোনেন্ট
const ProductCard = ({ product, viewMode }) => {
  return (
    <div className={`group bg-white rounded-[4px] border border-zinc-200/60 p-3 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] ${
      viewMode === 'list' ? 'md:flex-row gap-6 border-b border-zinc-100 pb-6' : ''
    }`}>
      
      {/* ইমেজ সেকশন */}
      <div className={`relative overflow-hidden bg-[#ECE9E4] rounded-[4px] flex items-center justify-center p-3 ${
        viewMode === 'list' ? 'w-full md:w-48 h-48' : 'w-full h-40 sm:h-48 md:h-64'
      }`}>
        
        {/* ডিসকাউন্ট ব্যাজ */}
        {product.discount && (
          <span className="absolute top-2 left-2 bg-black text-white text-[9px] font-black tracking-tighter px-1.5 py-0.5 rounded-[2px] shadow-sm z-10">
            -{product.discount}%
          </span>
        )}

        {/* প্রোডাক্ট ইমেজ */}
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
        />

        {/* লাইভ টাইমার */}
        {product.timerSeconds && (
          <CountdownTimer initialSeconds={product.timerSeconds} />
        )}

      </div>

      {/* প্রোডাক্ট ডিটেইলস */}
      <div className="flex-grow flex flex-col justify-between pt-3">
        <div>
          {/* ক্যাটাগরি */}
          <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest block mb-1">
            {product.category}
          </span>

          {/* টাইটেল */}
          <h3 className="text-xs sm:text-sm font-semibold text-black leading-snug group-hover:text-zinc-600 transition cursor-pointer line-clamp-2 h-8 sm:h-10">
            {product.name}
          </h3>

          {/* স্টার রেটিং */}
          <div className="flex items-center gap-0.5 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'text-amber-400 fill-current'
                    : 'text-zinc-200'
                }`}
              />
            ))}
          </div>

          {/* দাম বিন্যাস */}
          <div className="flex items-baseline gap-2 mt-2">
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-zinc-400 line-through">
                ${product.originalPrice.toFixed(0)}
              </span>
            )}
            <span className="text-sm sm:text-base font-bold text-black">
              ${product.price.toFixed(0)}
            </span>
          </div>
        </div>

        {/* অ্যাড টু কার্ট বাটন */}
        <button className="mt-4 w-full bg-black hover:bg-zinc-900 text-white py-3 rounded-[4px] text-[10px] font-bold uppercase tracking-wider transition-all duration-300">
          Add To Cart
        </button>
      </div>

    </div>
  );
};

export default Shop;