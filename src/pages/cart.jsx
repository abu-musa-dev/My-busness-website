import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
  Heart,
  MapPin,
  ChevronRight,
} from "lucide-react";

import Navbar from "../components/Navbar"; // আপনার পাথ অনুযায়ী ঠিক করে নিন

function CartPage() {
  const navigate = useNavigate();

  // রিয়েল-টাইম ইন্টারেকশনের জন্য কার্ট আইটেমে 'selected' প্রোপার্টি যুক্ত করা হয়েছে
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Modern Sofa (Lux Series)",
      price: 250.00,
      originalPrice: 350.00,
      quantity: 1,
      selected: true, // সিলেক্ট করা আছে কি না
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
      description: "Color: Charcoal Grey | Size: Standard"
    },
    {
      id: 2,
      name: "Ergonomic Wooden Chair",
      price: 120.50,
      originalPrice: 170.00,
      quantity: 2,
      selected: true,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      description: "Material: Walnut Wood | Finish: Matte"
    },
    {
      id: 3,
      name: "Minimalist Coffee Table",
      price: 99.00,
      originalPrice: 140.00,
      quantity: 1,
      selected: false, // ডিফল্ট আন-সিলেক্টেড রাখা হলো পরীক্ষার জন্য
      image: "https://images.unsplash.com/photo-1592078652614-6c39f1c7f0b8?q=80&w=1200&auto=format&fit=crop",
      description: "Color: Oak White | Style: Modern"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // ১. একক পণ্য সিলেক্ট বা আন-সিলেক্ট করার হ্যান্ডলার
  const handleSelectItem = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // ২. 'Select All' সিলেক্ট করার হ্যান্ডলার
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setCartItems(cartItems.map((item) => ({ ...item, selected: isChecked })));
  };

  // সব পণ্য সিলেক্ট করা আছে কি না তা যাচাই
  const isAllSelected = cartItems.length > 0 && cartItems.every((item) => item.selected);

  // ৩. কোয়ান্টিটি বাড়ানো এবং কমানো
  const handleIncreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ৪. ডিলিট এবং সিলেক্টেড আইটেম ডিলিট করার হ্যান্ডলার (Daraz Style)
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleDeleteSelected = () => {
    setCartItems(cartItems.filter((item) => !item.selected));
  };

  // ৫. প্রোমো কোড অ্যাপ্লাই করা
  const handleApplyCoupon = () => {
    if (promoCode.toUpperCase() === "HOME20") {
      setDiscount(20.0);
      alert("Promo code applied successfully!");
    } else {
      alert("Invalid Code! Try: HOME20");
    }
  };

  // শুধু সিলেক্ট করা পণ্যগুলোর দাম হিসাব করার ডাইনামিক মেকানিজম (Daraz Logic)
  const selectedItems = cartItems.filter((item) => item.selected);
  const subtotal = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  // ডাইনামিক ডেলিভারি চার্জ ট্র্যাকার (৫০০ টাকার বেশি অর্ডারে ফ্রি ডেলিভারি)
  const freeShippingThreshold = 500;
  const shipping = selectedItems.length > 0 && subtotal < freeShippingThreshold ? 20.00 : 0;
  const total = Math.max(0, subtotal + shipping - discount);

  // ৬. চেকআউট রাউটিং হ্যান্ডলার
  const handleCheckout = () => {
    if (selectedItems.length > 0) {
      navigate(`/checkout/${selectedItems[0].id}`);
    } else {
      alert("Please select at least one item to proceed!");
    }
  };

  // কার্ট সম্পূর্ণ খালি থাকলে
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#eff0f5] flex items-center justify-center px-4 py-28">
        <Navbar />
        <div className="text-center bg-white p-10 md:p-16 rounded-lg shadow-sm border border-gray-200">
          <ShoppingBag className="w-20 h-20 mx-auto text-green-600 mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Cart is Empty!</h1>
          <p className="text-gray-500 mb-6 text-sm">
            No items in your shopping cart. Let's find something premium!
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-sm font-semibold transition"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eff0f5] pt-24 pb-16 px-3 md:px-6">
      <Navbar />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        
        {/* LEFT SIDE: ITEMS & HEADERS (Daraz Layout) */}
        <div className="lg:col-span-8 space-y-3">
          
          {/* Dynamic Free Shipping Banner */}
          <div className="bg-white px-4 py-2.5 rounded-sm shadow-sm flex items-center justify-between text-xs md:text-sm border-l-4 border-green-600">
            {subtotal >= freeShippingThreshold ? (
              <span className="text-green-700 font-medium">
                🎉 Congratulations! You have qualified for <span className="font-bold">FREE SHIPPING!</span>
              </span>
            ) : (
              <span className="text-gray-600">
                Add <span className="font-bold text-green-600">৳{(freeShippingThreshold - subtotal).toFixed(2)}</span> more to qualify for <span className="font-semibold">FREE SHIPPING</span>
              </span>
            )}
            <Link to="/" className="text-green-600 font-semibold hover:underline text-xs">
              Shop More ›
            </Link>
          </div>

          {/* Select All & Delete Header */}
          <div className="bg-white px-4 py-3 rounded-sm shadow-sm flex items-center justify-between text-sm text-gray-700">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
                className="w-4 h-4 rounded text-green-600 focus:ring-green-600 cursor-pointer accent-green-600"
              />
              <span>Select All ({cartItems.length} items)</span>
            </label>
            {selectedItems.length > 0 && (
              <button
                onClick={handleDeleteSelected}
                className="text-red-500 hover:text-red-700 font-semibold flex items-center gap-1 text-xs"
              >
                <Trash2 size={14} /> Delete Selected ({selectedItems.length})
              </button>
            )}
          </div>

          {/* SHOP GROUP (Daraz Style Store Header) */}
          <div className="bg-white rounded-sm shadow-sm overflow-hidden">
            
            {/* Store Name header */}
            <div className="px-4 py-3 bg-[#fafafa] border-b flex items-center justify-between text-xs font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-700 text-[9px] px-1.5 py-0.5 rounded font-bold">STORE</span>
                <span className="text-gray-800 font-bold hover:underline cursor-pointer">
                  HOMTIDY Official Store
                </span>
                <ChevronRight size={14} className="text-gray-400" />
              </div>
              <span className="text-gray-400 font-normal">Shipped from Dhaka</span>
            </div>

            {/* Products List within the Store Group */}
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 flex gap-3 md:gap-4 items-start">
                  
                  {/* Select Checkbox */}
                  <div className="pt-2">
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => handleSelectItem(item.id)}
                      className="w-4 h-4 rounded text-green-600 focus:ring-green-600 cursor-pointer accent-green-600"
                    />
                  </div>

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded border flex-shrink-0"
                  />

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <h3 className="text-sm font-medium text-gray-900 truncate hover:text-green-600">
                        {item.name}
                      </h3>
                      
                      {/* Trash action */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-600 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">{item.description}</p>

                    {/* Price and quantity in one row */}
                    <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-bold text-green-600">
                          ৳{item.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ৳{item.originalPrice.toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center border rounded bg-[#fafafa]">
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
                          disabled={item.quantity <= 1}
                          className="px-2 py-0.5 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs font-semibold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncreaseQuantity(item.id)}
                          className="px-2 py-0.5 text-gray-500 hover:bg-gray-100"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

        {/* RIGHT SIDE: SUMMARY & CHECKOUT BOX (Daraz Style) */}
        <div className="lg:col-span-4 space-y-3">
          
          {/* Shipping Location selector */}
          <div className="bg-white p-4 rounded-sm shadow-sm text-xs text-gray-600 space-y-2">
            <div className="flex justify-between items-center text-gray-400">
              <span>Shipping Option</span>
              <span className="text-green-600 hover:underline cursor-pointer font-semibold">Change</span>
            </div>
            <div className="flex items-start gap-2 text-gray-800 font-semibold mt-1">
              <MapPin size={14} className="text-green-600 mt-0.5" />
              <div>
                <p>Dhaka, Dhaka City, Mirpur 10</p>
                <p className="text-[10px] text-gray-400 font-normal mt-0.5">Estimated delivery: 2-3 Days</p>
              </div>
            </div>
          </div>

          {/* Promo code card */}
          <div className="bg-white p-4 rounded-sm shadow-sm">
            <p className="text-xs font-bold text-gray-800 mb-2">Have a Voucher/Promo Code?</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter (e.g. HOME20)"
                className="flex-1 border rounded px-3 py-1.5 text-xs outline-none focus:border-green-600 uppercase"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-gray-800 hover:bg-gray-950 text-white px-4 py-1.5 rounded text-xs font-semibold transition"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Detailed Calculations */}
          <div className="bg-white p-4 rounded-sm shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-gray-800 border-b pb-2">Order Summary</h3>
            
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal ({selectedItems.length} items)</span>
                <span className="font-semibold text-gray-800">৳{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                {shipping === 0 && selectedItems.length > 0 ? (
                  <span className="text-green-600 font-bold">FREE</span>
                ) : (
                  <span className="font-semibold text-gray-800">৳{shipping.toFixed(2)}</span>
                )}
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>Voucher Discount</span>
                  <span>-৳{discount.toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="flex justify-between border-t pt-3 items-center">
              <span className="text-sm font-semibold text-gray-800">Total Payment</span>
              <span className="text-xl font-bold text-green-600">৳{total.toFixed(2)}</span>
            </div>

            {/* Check Out button (Proceed to Checkout) */}
            <button
              onClick={handleCheckout}
              disabled={selectedItems.length === 0}
              className={`w-full text-white py-3 rounded text-sm font-semibold uppercase tracking-wider transition ${
                selectedItems.length > 0
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Proceed to Checkout ({selectedItems.length})
            </button>

            <div className="text-center text-[10px] text-gray-400 pt-1">
              Secure Checkout • SSL Certified
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CartPage;