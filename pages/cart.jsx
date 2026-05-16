import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";

import { Link } from "react-router-dom";

function CartPage() {
  // --- Dummy Data (Replace with real state management in a live app) ---
  const cartItems = [
    {
      id: 1,
      name: "Modern Sofa (Lux Series)",
      price: 250.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
      description: "Experience unparalleled comfort with our premium modern sofa, perfect for any living space."
    },
    {
      id: 2,
      name: "Ergonomic Wooden Chair",
      price: 120.50, // Added decimal for realism
      quantity: 2,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      description: "Designed for optimal posture and long-lasting durability. A timeless addition to your home or office."
    },
    {
      id: 3,
      name: "Minimalist Coffee Table",
      price: 99.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1592078652614-6c39f1c7f0b8?q=80&w=1200&auto=format&fit=crop",
      description: "Sleek and functional, this coffee table complements any modern decor with its understated elegance."
    }
  ];
  // --- End Dummy Data ---

  // Handle empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 md:px-10 py-28">
        <div className="text-center bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100 animate-fade-in">
          <ShoppingBag className="w-24 h-24 mx-auto text-orange-400 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Your Cart is Empty!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg
                       transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={20} />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Calculations
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 20.00; // Explicitly a decimal
  const discount = 0.00; // For later implementation
  const total = subtotal + shipping - discount;

  // --- Placeholder functions for actions (implement in a real app with state) ---
  const handleRemoveItem = (id) => { console.log("Remove item:", id); };
  const handleIncreaseQuantity = (id) => { console.log("Increase quantity for:", id); };
  const handleDecreaseQuantity = (id) => { console.log("Decrease quantity for:", id); };
  const handleApplyCoupon = () => { console.log("Apply coupon"); };
  const handleCheckout = () => { console.log("Proceed to checkout"); };
  // --- End Placeholder functions ---

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-28 pb-20 px-4 md:px-10">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between flex-wrap gap-6 animate-fade-in-up">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Your Shopping Cart
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Review your selected products and proceed to checkout.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 border-2 border-gray-300 px-6 py-3 rounded-full text-gray-700 font-medium
                     hover:bg-gray-100 hover:border-gray-400 transition-all duration-300
                     transform hover:scale-105 active:scale-95 shadow-sm"
        >
          <ArrowLeft size={20} />
          Continue Shopping
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Side - Cart Items */}
        <div className="lg:col-span-2 space-y-6 animate-slide-in-left">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden rounded-2xl flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info & Actions */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm line-clamp-2">
                      {item.description || "Premium quality product for your home."}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors transform hover:scale-110 active:scale-90 p-2 rounded-full"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={24} />
                  </button>
                </div>

                {/* Quantity & Total Price */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors rounded-l-full disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus size={18} />
                    </button>
                    <span className="px-5 font-semibold text-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors rounded-r-full"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  {/* Item Total Price */}
                  <p className="text-2xl font-extrabold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 h-fit sticky top-28 animate-slide-in-right">

          <div className="flex items-center gap-4 mb-8 border-b pb-4 border-gray-100">
            <ShoppingBag className="text-orange-500 w-8 h-8" />
            <h2 className="text-3xl font-extrabold text-gray-900">
              Order Summary
            </h2>
          </div>

          {/* Summary Details */}
          <div className="space-y-5 mb-8">
            <div className="flex justify-between items-center text-lg text-gray-700">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center text-lg text-gray-700">
              <span>Shipping</span>
              <span className="font-semibold">${shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center text-lg text-gray-700">
              <span>Discount</span>
              <span className="font-semibold text-red-500">-${discount.toFixed(2)}</span>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <div className="flex justify-between items-center text-3xl font-extrabold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Coupon Input */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="font-bold text-gray-800 mb-3">Have a Promo Code?</p>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter your code"
                className="flex-1 border-2 border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-gray-800"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold
                           hover:bg-gray-900 transition-colors transform hover:scale-105 active:scale-95 shadow-md"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="w-full mt-10 bg-orange-500 text-white py-4 rounded-2xl text-xl font-extrabold
                       hover:bg-orange-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            Proceed To Checkout
          </button>

          {/* Secure Payment Info */}
          <div className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <p>Secure Checkout • SSL Protected Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;