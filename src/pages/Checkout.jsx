import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Edit2,
  Truck,
  ArrowLeft,
  Check, // কনফার্মেশন মোডালের জন্য Check আইকনটি আনা হয়েছে
} from "lucide-react";

// আপনার data ফোল্ডারের products.json ফাইল থেকে প্রোডাক্ট ডাটা ইম্পোর্ট করা হচ্ছে
import products from "../data/products.json";

function Checkout() {
  const { id } = useParams(); // URL থেকে প্রোডাক্টের ID নেওয়া হচ্ছে
  const [step, setStep] = useState(1); // 1: Shipping & Review, 2: Payment
  const [showSuccessModal, setShowSuccessModal] = useState(false); // সুন্দর পপ-আপের জন্য স্টেট
  const [randomOrderId] = useState(() => Math.floor(100000 + Math.random() * 900000)); // ইউনিক অর্ডার আইডি

  // URL ID অনুযায়ী নির্দিষ্ট প্রোডাক্টটি খুঁজে বের করা হচ্ছে
  const product = products?.find((p) => String(p.id) === String(id)) || {
    name: "Modern Luxury Fabric Sofa",
    price: 250,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500",
    category: "Furniture"
  };

  // Quantity State
  const [quantity, setQuantity] = useState(1);

  // Address State
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [address, setAddress] = useState({
    name: "Sakib Al Hasan",
    phone: "+8801712345678",
    email: "sakib@example.com",
    city: "Dhaka",
    area: "Mirpur 10",
    street: "House 12, Road 5, Block C",
    label: "Home",
  });

  const [tempAddress, setTempAddress] = useState({ ...address });
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedVoucher, setAppliedVoucher] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("cod"); // ডিফল্ট Cash on Delivery 

  // Dynamic calculations
  const subtotal = product.price * quantity;
  const shippingFee = 15;
  const total = subtotal + shippingFee - discount;

  const handleApplyVoucher = () => {
    if (voucher.toUpperCase() === "HOME20") {
      setDiscount(20);
      setAppliedVoucher("HOME20");
    } else {
      alert("Invalid Voucher Code! Try: HOME20");
    }
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    setAddress({ ...tempAddress });
    setIsEditingAddress(false);
  };

  return (
    <section className="min-h-screen bg-[#f4fbf7] py-6 px-3 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP HEADER */}
        <div className="flex items-center justify-between bg-white px-4 py-3 rounded-md shadow-sm mb-4 border border-green-50">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-2xl font-black text-green-600 tracking-wider uppercase">
              HOMTIDY
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-sm font-medium text-gray-600">Secure Checkout</span>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm">
            <span className={`${step === 1 ? "text-green-600 font-semibold" : "text-gray-400"}`}>
              1. Shipping & Review
            </span>
            <span className="text-gray-300">›</span>
            <span className={`${step === 2 ? "text-green-600 font-semibold" : "text-gray-400"}`}>
              2. Payment Method
            </span>
          </div>
        </div>

        {/* MAIN BODY */}
        <div className="grid lg:grid-cols-12 gap-4 items-start">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-4">
            {step === 1 && (
              <>
                {/* 1. DELIVERY ADDRESS CARD */}
                <div className="bg-white p-4 rounded-md shadow-sm border border-green-50/50">
                  <div className="flex items-center justify-between border-b pb-3 mb-4">
                    <h2 className="text-base font-medium text-gray-800 flex items-center gap-2">
                      <MapPin size={18} className="text-green-600" />
                      Delivery Address
                    </h2>
                    {!isEditingAddress && (
                      <button
                        onClick={() => {
                          setTempAddress({ ...address });
                          setIsEditingAddress(true);
                        }}
                        className="text-xs text-green-600 hover:underline flex items-center gap-1 font-semibold"
                      >
                        <Edit2 size={12} /> Change / Edit
                      </button>
                    )}
                  </div>

                  {isEditingAddress ? (
                    <form onSubmit={handleSaveAddress} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-gray-500">Full Name</label>
                          <input
                            type="text"
                            required
                            value={tempAddress.name}
                            onChange={(e) => setTempAddress({ ...tempAddress, name: e.target.value })}
                            className="w-full mt-1 border rounded px-3 py-2 text-sm outline-none focus:border-green-600"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">Phone Number</label>
                          <input
                            type="text"
                            required
                            value={tempAddress.phone}
                            onChange={(e) => setTempAddress({ ...tempAddress, phone: e.target.value })}
                            className="w-full mt-1 border rounded px-3 py-2 text-sm outline-none focus:border-green-600"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">City</label>
                          <input
                            type="text"
                            required
                            value={tempAddress.city}
                            onChange={(e) => setTempAddress({ ...tempAddress, city: e.target.value })}
                            className="w-full mt-1 border rounded px-3 py-2 text-sm outline-none focus:border-green-600"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">Area</label>
                          <input
                            type="text"
                            required
                            value={tempAddress.area}
                            onChange={(e) => setTempAddress({ ...tempAddress, area: e.target.value })}
                            className="w-full mt-1 border rounded px-3 py-2 text-sm outline-none focus:border-green-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-gray-500">Street Address</label>
                        <textarea
                          rows="2"
                          required
                          value={tempAddress.street}
                          onChange={(e) => setTempAddress({ ...tempAddress, street: e.target.value })}
                          className="w-full mt-1 border rounded px-3 py-2 text-sm outline-none resize-none focus:border-green-600"
                        ></textarea>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setTempAddress({ ...tempAddress, label: "Home" })}
                          className={`px-4 py-1.5 rounded text-xs font-semibold border ${
                            tempAddress.label === "Home"
                              ? "border-green-600 text-green-600 bg-green-50"
                              : "border-gray-200 text-gray-600"
                          }`}
                        >
                          Home
                        </button>
                        <button
                          type="button"
                          onClick={() => setTempAddress({ ...tempAddress, label: "Office" })}
                          className={`px-4 py-1.5 rounded text-xs font-semibold border ${
                            tempAddress.label === "Office"
                              ? "border-green-600 text-green-600 bg-green-50"
                              : "border-gray-200 text-gray-600"
                          }`}
                        >
                          Office
                        </button>
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsEditingAddress(false)}
                          className="px-4 py-2 border rounded text-xs font-medium text-gray-600 hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-green-600 text-white rounded text-xs font-medium hover:bg-green-700 transition"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-sm text-gray-700 space-y-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900">{address.name}</span>
                        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                          {address.label}
                        </span>
                      </div>
                      <p className="flex items-center gap-2 text-xs text-gray-600">
                        <Phone size={13} /> {address.phone}
                      </p>
                      <p className="flex items-center gap-2 text-xs text-gray-600">
                        <Mail size={13} /> {address.email}
                      </p>
                      <p className="text-xs text-gray-600 mt-2 pl-5">
                        {address.street}, {address.area}, {address.city}
                      </p>
                    </div>
                  )}
                </div>

                {/* 2. DYNAMIC PACKAGE REVIEW CARD */}
                <div className="bg-white p-4 rounded-md shadow-sm border border-green-50/50">
                  <div className="border-b pb-2 mb-4">
                    <h2 className="text-sm font-semibold text-gray-800">
                      Package 1 of 1
                    </h2>
                    <p className="text-xs text-gray-400">Category: {product.category}</p>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex gap-4 items-start">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 rounded object-cover border"
                      />
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {product.name}
                        </h3>
                        <p className="text-xs text-green-600 mt-2 font-semibold">
                          ৳ {product.price}
                        </p>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <span className="text-xs text-gray-500">Qty:</span>
                          <div className="flex items-center border rounded">
                            <button 
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="px-2 py-0.5 text-xs bg-gray-100 hover:bg-gray-200"
                            >
                              -
                            </button>
                            <span className="px-3 text-xs font-semibold">{quantity}</span>
                            <button 
                              onClick={() => setQuantity(quantity + 1)}
                              className="px-2 py-0.5 text-xs bg-gray-100 hover:bg-gray-200"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#fafafa] p-3 rounded-md border min-w-[220px] border-green-50">
                      <div className="flex items-center gap-2">
                        <Truck size={16} className="text-green-600" />
                        <span className="text-xs font-semibold text-gray-700">Standard Delivery</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 pl-6">
                        Estimated: 3 - 5 days
                      </p>
                      <p className="text-xs text-gray-700 font-semibold mt-2 pl-6">
                        Shipping Fee: ৳ {shippingFee}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <div className="bg-white p-4 rounded-md shadow-sm border border-green-50/50">
                <div className="flex items-center justify-between border-b pb-3 mb-6">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-green-600 flex items-center gap-1 font-semibold hover:underline"
                  >
                    <ArrowLeft size={14} /> Back to Shipping
                  </button>
                  <h2 className="text-base font-semibold text-gray-800">
                    Select Payment Method
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* bKash */}
                  <div
                    onClick={() => setSelectedPayment("bkash")}
                    className={`cursor-pointer border rounded-lg p-4 flex flex-col justify-between h-28 relative transition ${
                      selectedPayment === "bkash"
                        ? "border-[#e2136e] bg-pink-50/50"
                        : "hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#e2136e]">bKash</span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === "bkash" ? "border-[#e2136e]" : "border-gray-300"
                      }`}>
                        {selectedPayment === "bkash" && <span className="w-2 h-2 rounded-full bg-[#e2136e]"></span>}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Save 10% on paying via bKash</p>
                  </div>

                  {/* Nagad */}
                  <div
                    onClick={() => setSelectedPayment("nagad")}
                    className={`cursor-pointer border rounded-lg p-4 flex flex-col justify-between h-28 relative transition ${
                      selectedPayment === "nagad"
                        ? "border-[#f57224] bg-orange-50/50"
                        : "hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#f57224]">Nagad</span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === "nagad" ? "border-[#f57224]" : "border-gray-300"
                      }`}>
                        {selectedPayment === "nagad" && <span className="w-2 h-2 rounded-full bg-[#f57224]"></span>}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Pay safely using Nagad wallet</p>
                  </div>

                  {/* Card */}
                  <div
                    onClick={() => setSelectedPayment("card")}
                    className={`cursor-pointer border rounded-lg p-4 flex flex-col justify-between h-28 relative transition ${
                      selectedPayment === "card"
                        ? "border-blue-600 bg-blue-50/50"
                        : "hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-blue-800">Credit/Debit Card</span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === "card" ? "border-blue-600" : "border-gray-300"
                      }`}>
                        {selectedPayment === "card" && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Visa, Mastercard, DBBL Nexus</p>
                  </div>

                  {/* COD */}
                  <div
                    onClick={() => setSelectedPayment("cod")}
                    className={`cursor-pointer border rounded-lg p-4 flex flex-col justify-between h-28 relative transition ${
                      selectedPayment === "cod"
                        ? "border-green-600 bg-green-50/50"
                        : "hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-green-700">Cash On Delivery</span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === "cod" ? "border-green-600" : "border-gray-300"
                      }`}>
                        {selectedPayment === "cod" && <span className="w-2 h-2 rounded-full bg-green-600"></span>}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Pay cash upon receiving products</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-white p-4 rounded-md shadow-sm border border-green-50/50">
              <h3 className="text-sm font-medium mb-2 text-gray-800">Promotion Code</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Voucher Code"
                  value={voucher}
                  onChange={(e) => setVoucher(e.target.value)}
                  disabled={!!appliedVoucher}
                  className="w-full border rounded px-3 py-2 text-xs outline-none focus:border-green-600 uppercase"
                />
                <button
                  onClick={handleApplyVoucher}
                  disabled={!voucher || !!appliedVoucher}
                  className="bg-[#fafafa] border px-4 py-2 rounded text-xs text-green-600 border-green-600 font-semibold hover:bg-green-50 disabled:opacity-50 transition"
                >
                  APPLY
                </button>
              </div>
              {appliedVoucher && (
                <p className="text-[11px] text-green-600 mt-2 font-semibold">
                  ✓ Voucher "{appliedVoucher}" successfully applied!
                </p>
              )}
              <p className="text-[10px] text-gray-400 mt-2">
                Tip: Use code <span className="font-semibold">"HOME20"</span> for ৳20 off.
              </p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm border border-green-50/50">
              <h3 className="text-sm font-semibold mb-4 text-gray-800 border-b pb-2">Order Summary</h3>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Items Subtotal ({quantity} {quantity > 1 ? "items" : "item"})</span>
                  <span>৳ {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span>৳ {shippingFee}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Voucher Discount</span>
                    <span>- ৳ {discount}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between border-t mt-4 pt-3 items-center">
                <span className="text-sm font-semibold text-gray-800">Total Payment</span>
                <span className="text-xl font-bold text-green-600">৳ {total}</span>
              </div>

              {step === 1 ? (
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded text-sm font-semibold mt-6 transition text-center tracking-wider"
                >
                  PROCEED TO PAYMENT
                </button>
              ) : (
                <button
                  onClick={() => setShowSuccessModal(true)} // পপ-আপ ট্রিগার করার হ্যান্ডলার
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded text-sm font-semibold mt-6 transition text-center tracking-wider"
                >
                  CONFIRM ORDER
                </button>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* BEAUTIFUL ORDER SUCCESS MODAL OVERLAY */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl text-center relative border border-green-100">
            
            {/* Green Check Animated Circle */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-4 animate-bounce">
              <Check size={36} strokeWidth={3} />
            </div>

            {/* Main Success Heading */}
            <h2 className="text-2xl font-black text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-xs text-gray-500 mb-5 leading-relaxed">
              Thank you for shopping with <span className="font-bold text-green-600">HOMTIDY</span>. 
              Your order has been placed successfully and is being processed.
            </p>

            {/* Dynamic Summary Box */}
            <div className="bg-green-50/60 rounded-xl p-4 text-left text-xs text-gray-700 space-y-2.5 mb-6 border border-green-100/50">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Order ID</span>
                <span className="font-bold text-gray-900">#HT-{randomOrderId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Payment Method</span>
                <span className="font-bold uppercase text-gray-900">{selectedPayment}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Shipping Details</span>
                <span className="font-semibold text-gray-900 truncate max-w-[180px] text-right">
                  {address.name} ({address.label})
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-green-200/50 pt-2.5">
                <span className="text-gray-600 font-medium">Total Amount Paid</span>
                <span className="font-bold text-green-700 text-sm">৳{total}</span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Link
              to="/"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-green-600/20 text-center text-xs tracking-wider uppercase"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}

    </section>
  );
}

export default Checkout;