import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Trash2,
  Tag,
  List,
  Image,
  ArrowLeft,
  Search,
  CheckCircle,
} from "lucide-react";

import Navbar from "../components/Navbar"; // আপনার ডিরেক্টরি অনুযায়ী সঠিক পাথ

function StoreManagement() {
  const [activeTab, setActiveTab] = useState("add-product"); // Tabs: 'add-product', 'inventory', 'vouchers'

  // ১. প্রোডাক্ট লিস্ট স্টেট (ইনভেন্টরির জন্য)
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "Modern Sofa (Lux Series)",
      price: 250.00,
      originalPrice: 350.00,
      stock: "In Stock",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
    },
    {
      id: 2,
      name: "Ergonomic Wooden Chair",
      price: 120.50,
      originalPrice: 170.00,
      stock: "Low Stock",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    },
    {
      id: 3,
      name: "Minimalist Coffee Table",
      price: 99.00,
      originalPrice: 140.00,
      stock: "Out of Stock",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1592078652614-6c39f1c7f0b8?q=80&w=1200",
    }
  ]);

  // ২. কুপন লিস্ট স্টেট
  const [voucherList, setVoucherList] = useState([
    { id: 1, code: "HOME20", discount: 20.00, minSpend: 100 },
    { id: 2, code: "DARAZ20", discount: 20.00, minSpend: 150 },
    { id: 3, code: "WELCOME10", discount: 10.00, minSpend: 50 },
  ]);

  // ইনভেন্টরি সার্চ স্টেট
  const [searchQuery, setSearchQuery] = useState("");

  // নতুন প্রোডাক্ট ফর্ম স্টেট
  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    originalPrice: "",
    category: "Furniture",
    stock: "In Stock",
    image: "",
    description: "",
  });

  // নতুন কুপন ফর্ম স্টেট
  const [voucherForm, setVoucherForm] = useState({
    code: "",
    discount: "",
    minSpend: "",
  });

  // --- প্রোডাক্ট যোগ করার লজিক ---
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name: productForm.name,
      price: parseFloat(productForm.price),
      originalPrice: parseFloat(productForm.originalPrice) || parseFloat(productForm.price),
      stock: productForm.stock,
      category: productForm.category,
      image: productForm.image || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
    };

    setProductList([newProduct, ...productList]);
    alert("New product listed successfully!");
    
    // ফর্ম রিসেট করা হচ্ছে
    setProductForm({
      name: "",
      price: "",
      originalPrice: "",
      category: "Furniture",
      stock: "In Stock",
      image: "",
      description: "",
    });
    setActiveTab("inventory"); // পণ্য যোগ করার পর সরাসরি ইনভেন্টরিতে নিয়ে যাবে
  };

  // --- কুপন যোগ করার লজিক ---
  const handleVoucherSubmit = (e) => {
    e.preventDefault();
    const newVoucher = {
      id: Date.now(),
      code: voucherForm.code.toUpperCase(),
      discount: parseFloat(voucherForm.discount),
      minSpend: parseFloat(voucherForm.minSpend) || 0,
    };

    setVoucherList([newVoucher, ...voucherList]);
    alert("Coupon code created successfully!");

    // ফর্ম রিসেট
    setVoucherForm({ code: "", discount: "", minSpend: "" });
  };

  // --- আইটেম ডিলিট করার লজিক ---
  const handleDeleteProduct = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProductList(productList.filter((p) => p.id !== id));
    }
  };

  const handleDeleteVoucher = (id) => {
    if (confirm("Are you sure you want to remove this coupon?")) {
      setVoucherList(voucherList.filter((v) => v.id !== id));
    }
  };

  // সার্চ অনুযায়ী ইনভেন্টরি ফিল্টার
  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#eff0f5] pt-24 pb-16 px-3 md:px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          
          {/* HEADER & BACK BUTTON */}
          <div className="bg-white p-4 rounded-sm shadow-sm flex items-center justify-between border border-gray-200/60">
            <div className="flex items-center gap-3">
              <Link to="/admin/dashboard" className="text-green-600 hover:text-green-700 transition">
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-xl font-bold text-gray-800 uppercase">
                Store Management Hub
              </h1>
            </div>
            <span className="text-[10px] bg-green-100 text-green-700 font-bold uppercase px-2 py-0.5 rounded">
              HOMTIDY
            </span>
          </div>

          {/* TAB NAVIGATION TABS */}
          <div className="flex bg-white rounded-sm shadow-sm border border-gray-200/60 text-xs md:text-sm overflow-hidden divide-x">
            <button
              onClick={() => setActiveTab("add-product")}
              className={`flex-1 py-3.5 font-bold flex items-center justify-center gap-1.5 transition ${
                activeTab === "add-product"
                  ? "bg-green-50 text-green-600"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <Plus size={16} /> Add Product
            </button>
            <button
              onClick={() => setActiveTab("inventory")}
              className={`flex-1 py-3.5 font-bold flex items-center justify-center gap-1.5 transition ${
                activeTab === "inventory"
                  ? "bg-green-50 text-green-600"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <List size={16} /> Manage Inventory ({productList.length})
            </button>
            <button
              onClick={() => setActiveTab("vouchers")}
              className={`flex-1 py-3.5 font-bold flex items-center justify-center gap-1.5 transition ${
                activeTab === "vouchers"
                  ? "bg-green-50 text-green-600"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <Tag size={16} /> Vouchers & Coupons ({voucherList.length})
            </button>
          </div>

          {/* 1. ADD NEW PRODUCT FORM TAB */}
          {activeTab === "add-product" && (
            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-200/60">
              <h2 className="text-sm font-bold text-gray-800 border-b pb-2 mb-4">
                List a New Furniture/Decoration Item
              </h2>
              
              <form onSubmit={handleProductSubmit} className="grid sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-gray-600">Product Name *</label>
                  <input
                    type="text"
                    required
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    placeholder="e.g. Minimalist Wooden Dining Table"
                    className="w-full mt-1.5 border rounded px-3 py-2 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-600">Category *</label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full mt-1.5 border rounded px-3 py-2 outline-none focus:border-green-600 cursor-pointer text-gray-600 bg-white"
                  >
                    <option value="Furniture">Furniture</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Gaming">Gaming</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-gray-600">Selling Price (৳) *</label>
                  <input
                    type="number"
                    required
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    placeholder="Regular selling price"
                    className="w-full mt-1.5 border rounded px-3 py-2 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-600">Original / Old Price (৳)</label>
                  <input
                    type="number"
                    value={productForm.originalPrice}
                    onChange={(e) => setProductForm({ ...productForm, originalPrice: e.target.value })}
                    placeholder="Price before discount (to show line-through)"
                    className="w-full mt-1.5 border rounded px-3 py-2 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-600">Inventory Stock Status *</label>
                  <select
                    value={productForm.stock}
                    onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                    className="w-full mt-1.5 border rounded px-3 py-2 outline-none focus:border-green-600 cursor-pointer text-gray-600 bg-white"
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-gray-600">Product Image URL</label>
                  <div className="flex items-center border rounded px-3 py-2 mt-1.5 focus-within:border-green-600">
                    <Image size={14} className="text-gray-400 mr-2" />
                    <input
                      type="url"
                      value={productForm.image}
                      onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                      placeholder="Paste online image link"
                      className="w-full outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="font-semibold text-gray-600">Product Description</label>
                  <textarea
                    rows="3"
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    placeholder="Specify color, material details, etc."
                    className="w-full mt-1.5 border rounded px-3 py-2 outline-none resize-none focus:border-green-600"
                  ></textarea>
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-bold uppercase tracking-wider text-xs transition duration-300"
                  >
                    Submit Product Listings
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* 2. MANAGE INVENTORY TAB */}
          {activeTab === "inventory" && (
            <div className="bg-white p-5 rounded-sm shadow-sm border border-gray-200/60 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b pb-3">
                <h2 className="text-sm font-bold text-gray-800">
                  Listed Store Items Inventory
                </h2>
                {/* Search Bar */}
                <div className="flex items-center border rounded px-3 py-1 text-xs max-w-xs focus-within:border-green-600 bg-white">
                  <Search size={14} className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search listed items..."
                    className="w-full outline-none bg-transparent py-1"
                  />
                </div>
              </div>

              {/* Inventory Products List Grid */}
              <div className="divide-y divide-gray-100">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((p) => (
                    <div key={p.id} className="py-4 flex gap-4 items-center justify-between text-xs">
                      <div className="flex gap-4 items-center min-w-0">
                        <img src={p.image} alt={p.name} className="w-12 h-12 rounded object-cover border flex-shrink-0" />
                        <div className="min-w-0 space-y-1">
                          <h4 className="font-bold text-gray-800 truncate">{p.name}</h4>
                          <div className="flex gap-2 items-center text-[10px]">
                            <span className="text-gray-400 uppercase font-semibold">{p.category}</span>
                            <span>•</span>
                            <span className={`font-bold ${
                              p.stock === "In Stock" ? "text-green-600" : p.stock === "Low Stock" ? "text-yellow-600" : "text-red-500"
                            }`}>{p.stock}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold text-gray-800 text-sm">৳{p.price}</p>
                          {p.originalPrice > p.price && (
                            <span className="text-[10px] text-gray-400 line-through">৳{p.originalPrice}</span>
                          )}
                        </div>
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="text-gray-400 hover:text-red-600 p-2 rounded hover:bg-red-50 transition"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-400 py-8 text-xs">No matching product found.</p>
                )}
              </div>
            </div>
          )}

          {/* 3. VOUCHERS & COUPONS TAB */}
          {activeTab === "vouchers" && (
            <div className="grid md:grid-cols-12 gap-4 items-start">
              
              {/* Left Side: Create Voucher Form */}
              <div className="bg-white p-5 rounded-sm shadow-sm border border-gray-200/60 md:col-span-5 text-xs space-y-4">
                <h3 className="font-bold text-gray-800 border-b pb-2">Generate New Coupon</h3>
                <form onSubmit={handleVoucherSubmit} className="space-y-3">
                  <div>
                    <label className="font-semibold text-gray-600">Promo Coupon Code *</label>
                    <input
                      type="text"
                      required
                      value={voucherForm.code}
                      onChange={(e) => setVoucherForm({ ...voucherForm, code: e.target.value })}
                      placeholder="e.g. NEWYEAR20"
                      className="w-full mt-1.5 border rounded px-3 py-2 outline-none focus:border-green-600 uppercase font-mono"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-gray-600">Discount Amount (৳) *</label>
                    <input
                      type="number"
                      required
                      value={voucherForm.discount}
                      onChange={(e) => setVoucherForm({ ...voucherForm, discount: e.target.value })}
                      placeholder="Flat discount amount"
                      className="w-full mt-1.5 border rounded px-3 py-2 outline-none focus:border-green-600"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-gray-600">Minimum Order Spend (৳)</label>
                    <input
                      type="number"
                      value={voucherForm.minSpend}
                      onChange={(e) => setVoucherForm({ ...voucherForm, minSpend: e.target.value })}
                      placeholder="Minimum subtotal amount needed"
                      className="w-full mt-1.5 border rounded px-3 py-2 outline-none focus:border-green-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded font-bold uppercase tracking-wider text-[10px] transition"
                  >
                    Create Coupon
                  </button>
                </form>
              </div>

              {/* Right Side: Coupons List */}
              <div className="bg-white p-5 rounded-sm shadow-sm border border-gray-200/60 md:col-span-7 text-xs">
                <h3 className="font-bold text-gray-800 border-b pb-2 mb-4">Active Promo Coupons</h3>
                <div className="divide-y divide-gray-100">
                  {voucherList.map((v) => (
                    <div key={v.id} className="py-3 flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold bg-green-50 border border-green-200 text-green-700 px-2.5 py-1 rounded text-xs">
                            {v.code}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-400">
                          ৳{v.discount} flat off • Min. spend: ৳{v.minSpend}
                        </p>
                      </div>

                      <button
                        onClick={() => handleDeleteVoucher(v.id)}
                        className="text-gray-400 hover:text-red-600 p-2 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default StoreManagement;