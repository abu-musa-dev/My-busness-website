import { useState, useEffect } from "react";
import {
  ShoppingBag,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  Package,
  Heart,
  ChevronDown,
  Activity,
  LogOut,
  ChevronRight,
} from "lucide-react";

import Navbar from "../components/Navbar";

// ডামি রিয়ালিস্টিক অর্ডার ডেটা (টাকার অংক আপডেট করা হয়েছে)
const initialOrders = [
  {
    id: "HT-928103",
    date: "12 May 2026",
    status: "Delivered",
    productName: "Modern Sofa (Lux Series)",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    price: 25000.0,
    quantity: 1,
  },
  {
    id: "HT-928104",
    date: "18 May 2026",
    status: "Processing",
    productName: "Ergonomic Wooden Chair",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    price: 12050.0,
    quantity: 2,
  },
  {
    id: "HT-928105",
    date: "05 May 2026",
    status: "Pending",
    productName: "Minimalist Coffee Table",
    image: "https://images.unsplash.com/photo-1592078652614-6c39f1c7f0b8?q=80&w=1200&auto=format&fit=crop",
    price: 9900.0,
    quantity: 1,
  },
  {
    id: "HT-928106",
    date: "20 May 2026",
    status: "Pending",
    productName: "Decorative Vase Set",
    image: "https://images.unsplash.com/photo-1599420186595-d81232c4b82d?q=80&w=1200&auto=format&fit=crop",
    price: 4500.0,
    quantity: 3,
  },
];

const getStatusConfig = (status) => {
  switch (status) {
    case "Delivered":
      return {
        text: "text-green-700 bg-green-50 border-green-100",
        icon: <CheckCircle size={12} />,
      };
    case "Processing":
      return {
        text: "text-blue-700 bg-blue-50 border-blue-100",
        icon: <Truck size={12} />,
      };
    case "Pending":
      return {
        text: "text-yellow-700 bg-yellow-50 border-yellow-100",
        icon: <Clock size={12} />,
      };
    case "Cancelled":
      return {
        text: "text-red-700 bg-red-50 border-red-100",
        icon: <XCircle size={12} />,
      };
    default:
      return {
        text: "text-stone-500 bg-stone-50 border-stone-100",
        icon: null,
      };
  }
};

function UserDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userOrders, setUserOrders] = useState(initialOrders);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      console.log("User not logged in. Redirecting...");
    }
  }, [isLoggedIn]);

  const handleCancelOrder = (orderId) => {
    setUserOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "Cancelled" } : order
      )
    );
    alert(`Order ${orderId} has been cancelled.`);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <div className="bg-white p-8 rounded-[4px] border border-stone-200/60 shadow-sm text-center max-w-sm">
          <p className="text-stone-600 font-semibold text-sm uppercase tracking-wide">Please log in to view your dashboard.</p>
        </div>
      </div>
    );
  }

  // ড্যাশবোর্ড ওভারভিউ ডাটা
  const totalOrders = userOrders.length;
  const pendingOrders = userOrders.filter((order) => order.status === "Pending").length;
  const deliveredOrders = userOrders.filter((order) => order.status === "Delivered").length;

  return (
    <>
      <Navbar />

      {/* মোবাইলের টপ-প্যাডিং অপ্টিমাইজড */}
      <div className="min-h-screen bg-[#FAF9F6] pt-20 md:pt-28 pb-16 px-3 md:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* ১. বাম পাশের সাইডবার (MInimalist Left Navigation) */}
          <div className="md:col-span-1 bg-white p-5 rounded-[4px] border border-zinc-200 text-xs space-y-6 shadow-sm">
            {/* ইউজার প্রোফাইল ও আমাদের বেইজ অবতার */}
            <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
              <div className="w-10 h-10 rounded-full bg-[#ECE9E4] text-black border border-zinc-200 flex items-center justify-center font-bold text-sm">
                AM
              </div>
              <div>
                <p className="text-zinc-400 font-medium">Hello,</p>
                <h3 className="font-bold text-black text-sm">Abu Musa</h3>
              </div>
            </div>

            {/* মেনু আইটেমসমূহ */}
            <div className="space-y-5">
              {/* মাই ড্যাশবোর্ড */}
              <div>
                <h4
                  onClick={() => setActiveTab("dashboard")}
                  className={`font-bold text-black uppercase tracking-wider mb-2 flex items-center justify-between cursor-pointer ${
                    activeTab === "dashboard" ? "underline underline-offset-4" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Activity size={14} /> My Dashboard
                  </span>
                </h4>
              </div>

              {/* অ্যাকাউন্ট সেটিংস */}
              <div>
                <h4 className="font-bold text-black uppercase tracking-wider mb-2 flex items-center justify-between cursor-pointer">
                  Manage Account
                  <ChevronDown size={14} className="text-zinc-400" />
                </h4>
                <ul className="pl-4 space-y-2 text-zinc-500 font-medium">
                  <li
                    onClick={() => setActiveTab("profile")}
                    className={`cursor-pointer hover:text-black ${
                      activeTab === "profile" ? "text-black font-bold" : ""
                    }`}
                  >
                    My Profile
                  </li>
                  <li className="hover:text-black cursor-pointer">Address Book</li>
                  <li className="hover:text-black cursor-pointer">Payment Options</li>
                </ul>
              </div>

              {/* মাই অর্ডারস */}
              <div>
                <h4 className="font-bold text-black uppercase tracking-wider mb-2 flex items-center justify-between cursor-pointer">
                  My Orders
                  <ChevronDown size={14} className="text-zinc-400" />
                </h4>
                <ul className="pl-4 space-y-2 text-zinc-500 font-medium">
                  <li
                    onClick={() => setActiveTab("orders")}
                    className={`cursor-pointer hover:text-black ${
                      activeTab === "orders" ? "text-black font-bold" : ""
                    }`}
                  >
                    Recent Orders
                  </li>
                  <li className="hover:text-black cursor-pointer">Returns & Cancellations</li>
                </ul>
              </div>

              {/* মাই উইশলিস্ট */}
              <div>
                <h4
                  onClick={() => setActiveTab("wishlist")}
                  className={`font-bold text-black uppercase tracking-wider flex items-center justify-between cursor-pointer ${
                    activeTab === "wishlist" ? "underline underline-offset-4" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Heart size={14} /> My Wishlist
                  </span>
                </h4>
              </div>

              {/* লগআউট বোতাম */}
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-2 text-red-600 font-bold hover:bg-red-50 p-2.5 rounded-[4px] transition"
              >
                <LogOut size={14} /> Logout
              </button>
            </div>
          </div>

          {/* ২. ডান পাশের এরিয়া: অ্যাকাউন্ট ইনফরমেশন */}
          <div className="md:col-span-3 space-y-6">
            
            {/* ড্যাশবোর্ড ওভারভিউ ট্যাব */}
            {activeTab === "dashboard" && (
              <div className="bg-white p-6 rounded-[4px] border border-zinc-200 shadow-sm">
                <h2 className="text-sm font-bold text-black border-b border-zinc-100 pb-3 mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <Activity size={15} className="text-black" /> Dashboard Overview
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StatCard icon={<ShoppingBag size={18} />} title="Total Orders" value={totalOrders} color="blue" />
                  <StatCard icon={<Clock size={18} />} title="Pending Orders" value={pendingOrders} color="yellow" />
                  <StatCard icon={<CheckCircle size={18} />} title="Delivered Orders" value={deliveredOrders} color="green" />
                </div>
              </div>
            )}

            {/* প্রোফাইল ট্যাব */}
            {(activeTab === "dashboard" || activeTab === "profile") && (
              <div className="bg-white p-6 rounded-[4px] border border-zinc-200 shadow-sm">
                <h2 className="text-sm font-bold text-black border-b border-zinc-100 pb-3 mb-4 uppercase tracking-widest">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-700">
                  {/* প্রোফাইল ডিটেইলস */}
                  <div className="p-4 border border-zinc-150 rounded-[4px] bg-[#FAF9F6]/30 space-y-2">
                    <div className="flex justify-between items-center font-bold text-black">
                      <span>Personal Profile</span>
                      <button className="text-black font-semibold hover:underline">Edit</button>
                    </div>
                    <div className="space-y-1 mt-2 font-medium">
                      <p className="font-bold text-black">Abu Musa</p>
                      <p>abu.musa@example.com</p>
                      <p className="text-zinc-400 mt-2">Subscribe to newsletter</p>
                    </div>
                  </div>

                  {/* শিপিং অ্যাড্রেস */}
                  <div className="p-4 border border-zinc-150 rounded-[4px] bg-[#FAF9F6]/30 space-y-2">
                    <div className="flex justify-between items-center font-bold text-black">
                      <span>Shipping Address</span>
                      <button className="text-black font-semibold hover:underline">Edit</button>
                    </div>
                    <div className="space-y-1 mt-2 font-medium">
                      <p className="font-bold text-black">Abu Musa (Home)</p>
                      <p>+880 1712-345 678</p>
                      <p className="text-zinc-500">House 12, Road 5, Block C, Mirpur 10, Dhaka</p>
                    </div>
                  </div>

                  {/* বিলিং অ্যাড্রেস */}
                  <div className="p-4 border border-zinc-150 rounded-[4px] bg-[#FAF9F6]/30 space-y-2">
                    <div className="flex justify-between items-center font-bold text-black">
                      <span>Billing Address</span>
                      <button className="text-black font-semibold hover:underline">Edit</button>
                    </div>
                    <div className="space-y-1 mt-2 font-medium">
                      <p className="font-bold text-black">Abu Musa (Home)</p>
                      <p>+880 1712-345 678</p>
                      <p className="text-zinc-500">House 12, Road 5, Block C, Mirpur 10, Dhaka</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* মাই অর্ডারস ট্যাব */}
            {(activeTab === "dashboard" || activeTab === "orders") && (
              <div className="bg-white p-6 rounded-[4px] border border-zinc-200 shadow-sm">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
                  <h2 className="text-sm font-bold text-black flex items-center gap-1.5 uppercase tracking-widest">
                    <Package size={15} className="text-black" /> Recent Orders List
                  </h2>
                  <button className="text-xs text-zinc-500 font-bold hover:text-black uppercase tracking-wider flex items-center">
                    View All <ChevronRight size={14} />
                  </button>
                </div>

                {/* অর্ডার লিস্ট কার্ডস */}
                <div className="space-y-5">
                  {userOrders
                    .sort((a, b) => b.id.localeCompare(a.id))
                    .slice(0, activeTab === "dashboard" ? 2 : userOrders.length)
                    .map((order) => (
                      <OrderCard
                        key={order.id}
                        order={order}
                        onCancelOrder={handleCancelOrder}
                      />
                    ))}
                </div>
              </div>
            )}

            {/* মাই উইশলিস্ট ট্যাব */}
            {activeTab === "wishlist" && (
              <div className="bg-white p-6 rounded-[4px] border border-zinc-200 shadow-sm">
                <h2 className="text-sm font-bold text-black border-b border-zinc-100 pb-3 mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <Heart size={15} className="text-black" /> My Wishlist
                </h2>
                <div className="h-32 bg-[#FAF9F6] flex items-center justify-center text-zinc-400 text-xs font-semibold uppercase tracking-wider rounded-[4px] border border-dashed border-zinc-200">
                  [ Your Wishlist Items will appear here ]
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </>
  );
}

/* ---------- REUSABLE SUB-COMPONENTS ---------- */

// স্ট্যাটাস বক্স সাব-কম্পোনেন্ট
function StatCard({ icon, title, value, color }) {
  const colorMap = {
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    yellow: "text-yellow-600 bg-yellow-50 border-yellow-100",
    green: "text-green-600 bg-green-50 border-green-100",
  };

  return (
    <div className="p-4 border border-zinc-150 rounded-[4px] flex items-center gap-4 bg-[#FAF9F6]/20">
      <div className={`p-2.5 rounded-[4px] border ${colorMap[color] || "text-zinc-600 bg-zinc-50"}`}>
        {icon}
      </div>
      <div>
        <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">{title}</p>
        <h3 className="text-base font-extrabold text-black mt-0.5">{value}</h3>
      </div>
    </div>
  );
}

// অর্ডার কার্ড সাব-কম্পোনেন্ট
function OrderCard({ order, onCancelOrder }) {
  const statusConfig = getStatusConfig(order.status);
  const canCancel = order.status === "Pending";

  return (
    <div className="border border-zinc-200 rounded-[4px] overflow-hidden text-xs">
      {/* অর্ডার কার্ডের হেডার */}
      <div className="bg-[#FAF9F6] px-4 py-3 border-b border-zinc-200 flex flex-wrap justify-between items-center gap-2 text-zinc-500 font-bold uppercase tracking-wider text-[10px]">
        <div className="flex gap-5">
          <span>
            Order ID: <span className="font-extrabold text-black">#{order.id}</span>
          </span>
          <span>
            Date: <span className="font-extrabold text-black">{order.date}</span>
          </span>
        </div>
        {canCancel && (
          <button
            onClick={() => onCancelOrder(order.id)}
            className="text-red-600 hover:text-red-700 font-bold uppercase tracking-wider cursor-pointer"
          >
            Cancel Order
          </button>
        )}
        {!canCancel && order.status !== "Cancelled" && (
          <button className="text-black hover:text-zinc-600 font-bold uppercase tracking-wider">
            Track Order
          </button>
        )}
      </div>

      {/* প্রোডাক্টের বিবরণ (ব্যানারের মতো #ECE9E4 ইমেজ ব্যাকগ্রাউন্ড সহ) */}
      <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
        <div className="flex gap-4 items-center">
          <div className="w-14 h-14 bg-[#ECE9E4] rounded-[4px] flex items-center justify-center p-1 border border-zinc-100 flex-shrink-0 overflow-hidden">
            <img
              src={order.image}
              alt={order.productName}
              className="max-w-full max-h-full object-contain mix-blend-multiply"
            />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-black text-sm hover:text-zinc-600 cursor-pointer">
              {order.productName}
            </h4>
            <p className="text-zinc-400 font-semibold">Qty: {order.quantity}</p>
          </div>
        </div>

        {/* প্রাইস এবং স্ট্যাটাস ব্যাজ */}
        <div className="flex items-center justify-between md:justify-end gap-6 md:min-w-[200px]">
          <div className="text-right">
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Price</p>
            <p className="font-bold text-black text-sm">৳{order.price.toLocaleString('en-IN')}</p>
          </div>

          <div
            className={`px-2.5 py-1 rounded-[2px] border flex items-center gap-1 font-bold text-[9px] uppercase tracking-wide ${statusConfig.text}`}
          >
            {statusConfig.icon}
            <span>{order.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;