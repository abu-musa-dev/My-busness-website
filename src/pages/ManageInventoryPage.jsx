import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Trash2 } from "lucide-react";

function ManageInventoryPage() {
  // ডামি প্রোডাক্ট লিস্ট (রিয়ালিস্টিক টাকার অংকে আপডেট করা হয়েছে)
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "Modern Sofa (Lux Series)",
      price: 25000.00,
      stock: "In Stock",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
    },
    {
      id: 2,
      name: "Ergonomic Wooden Chair",
      price: 12050.50,
      stock: "Low Stock",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    },
    {
      id: 3,
      name: "Minimalist Coffee Table",
      price: 9900.00,
      stock: "Out of Stock",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1592078652614-6c39f1c7f0b8?q=80&w=1200",
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleDeleteProduct = (id) => {
    if (confirm("Are you sure you want to delete this product listing?")) {
      setProductList(productList.filter((p) => p.id !== id));
    }
  };

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      
      {/* ১. হেডার ও সার্চ বার (ক্লিন ও শার্প লেআউট) */}
      <div className="bg-white p-4 rounded-[4px] border border-stone-200/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/admin/dashboard" className="text-zinc-600 hover:text-black transition">
            <ArrowLeft size={18} />
          </Link>
          <h1 className="text-sm font-bold text-stone-800 uppercase tracking-wider">
            Manage Inventory
          </h1>
        </div>
        
        {/* সার্চ বক্স (শার্প কর্নার) */}
        <div className="flex items-center border border-stone-200 rounded-[4px] px-3.5 py-2 text-xs w-full sm:max-w-xs focus-within:border-black bg-white transition">
          <Search size={14} className="text-stone-400 mr-2 flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search listed products..."
            className="w-full outline-none bg-transparent text-black font-medium"
          />
        </div>
      </div>

      {/* ২. ইনভেন্টরি কন্টেইনার লিস্ট */}
      <div className="bg-white p-6 rounded-[4px] border border-stone-200/60 shadow-sm">
        <div className="divide-y divide-stone-100">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <div key={p.id} className="py-4 flex gap-4 items-center justify-between text-xs">
                
                {/* প্রোডাক্টের ছবি ও বিবরণ */}
                <div className="flex gap-4 items-center min-w-0">
                  <div className="w-14 h-14 bg-[#ECE9E4] rounded-[4px] flex items-center justify-center p-1 border border-stone-100 flex-shrink-0 overflow-hidden">
                    <img src={p.image} alt={p.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                  </div>
                  
                  <div className="min-w-0 space-y-1.5">
                    <h4 className="font-semibold text-stone-900 text-sm truncate">{p.name}</h4>
                    <div className="flex gap-2 items-center text-[10px]">
                      <span className="text-stone-400 uppercase font-bold tracking-wider">{p.category}</span>
                      <span className="text-stone-300">•</span>
                      
                      {/* প্রিমিয়াম বর্ডারড স্টক ব্যাজ */}
                      <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase px-2 py-0.5 rounded-[2px] border ${
                        p.stock === "In Stock" 
                          ? "text-green-700 bg-green-50 border-green-100" 
                          : p.stock === "Low Stock" 
                            ? "text-yellow-700 bg-yellow-50 border-yellow-100" 
                            : "text-red-700 bg-red-50 border-red-100"
                      }`}>{p.stock}</span>
                    </div>
                  </div>
                </div>

                {/* দাম এবং ডিলিট বোতাম */}
                <div className="flex items-center gap-6">
                  <span className="font-bold text-stone-900 text-sm md:text-base">
                    ৳{p.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </span>
                  
                  <button
                    onClick={() => handleDeleteProduct(p.id)}
                    className="text-stone-400 hover:text-red-600 p-2.5 rounded-[4px] hover:bg-red-50 transition-all duration-300"
                    aria-label="Delete product"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

              </div>
            ))
          ) : (
            <p className="text-center text-stone-400 py-12 text-xs font-semibold uppercase tracking-wider">No products found in your inventory.</p>
          )}
        </div>
      </div>

    </div>
  );
}

export default ManageInventoryPage;