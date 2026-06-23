import React, { useState, useEffect } from "react";
import {
  Users,
  ShoppingCart,
  Package,
  DollarSign,
  Plus,
  Edit,
  Tag,
  BarChart3,
  CheckCircle,
  XCircle,
  Clock,
  ChevronDown,
  LineChart,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

// ডেমো ডেটা
const initialProducts = [
  { id: "p1", name: "Modern Sofa (Lux Series)", price: "25,000", stock: 15 },
  { id: "p2", name: "Ergonomic Wooden Chair", price: "12,050", stock: 5 }, 
  { id: "p3", name: "Minimalist Coffee Table", price: "9,900", stock: 0 }, 
  { id: "p4", name: "Designer Bookshelf", price: "18,000", stock: 25 },
];

const initialOrders = [
  { id: "#101", item: "Modern Sofa", status: "Processing", amount: 25000 },
  { id: "#102", item: "Wooden Chair", status: "Processing", amount: 12050 },
  { id: "#103", item: "Coffee Table", status: "Completed", amount: 9900 },
  { id: "#104", item: "Dining Set", status: "Cancelled", amount: 45000 },
  { id: "#105", item: "Bed Frame", status: "Processing", amount: 30000 },
];

const initialUsers = 120;

function AdminDashboard() {
  const [products, setProducts] = useState(initialProducts);
  const [orders, setOrders] = useState(initialOrders);
  const [activeUsers, setActiveUsers] = useState(initialUsers);

  // ড্যাশবোর্ড স্ট্যাটাস গণনা
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((order) => order.status === "Processing").length;
  const totalRevenue = orders
    .filter((order) => order.status === "Completed")
    .reduce((sum, order) => sum + order.amount, 0);

  const todaySales = 12000;
  const thisWeekSales = 58000;
  const thisMonthSales = 124500;

  // Order status আপডেট করার ফাংশন
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="space-y-6">
      
      {/* ব্র্যান্ডিং ব্যানার (মিনিমাল লাক্সারি লুক) */}
      <div className="bg-white rounded-[4px] shadow-sm p-6 border border-stone-200/60">
        <h2 className="text-xl md:text-2xl font-serif font-medium text-stone-900">
          Seller Dashboard
        </h2>
        <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">
          Monitor your product inventory, latest orders, and real-time revenue analytics.
        </p>
      </div>

      {/* স্ট্যাটাস কার্ডস (পেশাদার গ্রোথ ইন্ডিকেটর সহ) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat icon={<Users size={18} />} title="Active Users" value={activeUsers} trend="+12.5%" color="indigo" />
        <Stat icon={<ShoppingCart size={18} />} title="Total Orders" value={totalOrders} trend="+8.2%" color="blue" />
        <Stat icon={<Package size={18} />} title="Total Products" value={totalProducts} trend="Stable" color="amber" />
        <Stat icon={<DollarSign size={18} />} title="Total Revenue" value={`৳${totalRevenue.toLocaleString()}`} trend="+15%" color="emerald" />
      </div>

      {/* ছোট অতিরিক্ত স্ট্যাটাস রো */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-[4px] border border-stone-200/60 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-yellow-50 text-yellow-600 rounded-[2px]"><Clock size={16} /></div>
            <div>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Pending Orders</p>
              <h3 className="text-lg font-bold text-stone-800">{pendingOrders} Orders</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-[4px] border border-stone-200/60 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-[2px]"><BarChart3 size={16} /></div>
            <div>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Revenue Today</p>
              <h3 className="text-lg font-bold text-stone-800">৳{todaySales.toLocaleString()}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* কুইক অ্যাকশন গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/admin/add-product" className="block hover:no-underline">
          <ActionCard
            icon={<Plus size={16} />}
            title="Add New Product"
            desc="List a new home decoration item or furniture."
            color="green"
          />
        </Link>
        <Link to="/admin/manage-inventory" className="block hover:no-underline">
          <ActionCard
            icon={<Edit size={16} />}
            title="Manage Inventory"
            desc="Modify details of existing store listings."
            color="blue"
          />
        </Link>
        <Link to="/admin/vouchers" className="block hover:no-underline">
          <ActionCard
            icon={<Tag size={16} />}
            title="Vouchers & Coupons"
            desc="Generate unique discounts and codes."
            color="purple"
          />
        </Link>
      </div>

      {/* সেলস ও রেভিনিউ সেকশন (টেইলউইন্ড দিয়ে লাইভ অ্যানিমেটেড চার্ট তৈরি করা হয়েছে) */}
      <div className="bg-white rounded-[4px] shadow-sm p-6 border border-stone-200/60">
        <h2 className="text-xs font-bold text-stone-800 mb-4 flex items-center gap-2 border-b border-stone-100 pb-2 uppercase tracking-widest">
          <LineChart size={15} className="text-zinc-800" /> Sales & Revenue Overview
        </h2>
        
        {/* রিয়েল-টাইম বার গ্রাফ সিমুলেশন */}
        <div className="flex items-end justify-between gap-4 h-44 pt-6 px-2 md:px-10 border-b border-stone-100">
          {[
            { month: "Jan", sales: 40, active: false },
            { month: "Feb", sales: 65, active: false },
            { month: "Mar", sales: 50, active: false },
            { month: "Apr", sales: 85, active: true }, // কারেন্ট হাইলাইটেড মান
            { month: "May", sales: 70, active: false },
            { month: "Jun", sales: 95, active: false },
          ].map((bar, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 group">
              <div
                style={{ height: `${bar.sales}%` }}
                className={`w-full rounded-t-[2px] transition-all duration-500 cursor-pointer ${
                  bar.active ? "bg-black" : "bg-stone-200 group-hover:bg-stone-300"
                }`}
              ></div>
              <span className="text-[10px] font-bold text-stone-400 mt-2 uppercase tracking-wider">{bar.month}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-[#FAF9F6] p-4 rounded-[4px] border border-stone-200/60">
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Today's Sales</p>
            <h2 className="text-xl font-bold text-stone-800 mt-1">৳{todaySales.toLocaleString()}</h2>
          </div>
          <div className="bg-[#FAF9F6] p-4 rounded-[4px] border border-stone-200/60">
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">This Week's Sales</p>
            <h2 className="text-xl font-bold text-stone-800 mt-1">৳{thisWeekSales.toLocaleString()}</h2>
          </div>
          <div className="bg-[#FAF9F6] p-4 rounded-[4px] border border-stone-200/60">
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">This Month's Sales</p>
            <h2 className="text-xl font-bold text-stone-800 mt-1">৳{thisMonthSales.toLocaleString()}</h2>
          </div>
        </div>
      </div>

      {/* স্প্লিট লেআউট: ইনভেন্টরি এবং অর্ডার হিস্ট্রি */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ইনভেন্টরি লিস্ট */}
        <div className="bg-white p-6 rounded-[4px] shadow-sm border border-stone-200/60 lg:col-span-7">
          <h2 className="text-xs font-bold text-stone-800 border-b border-stone-100 pb-2 mb-4 uppercase tracking-widest">
            Inventory Management
          </h2>
          <div className="space-y-3">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                name={product.name}
                price={`৳${product.price}`}
                stock={product.stock > 10 ? "In Stock" : product.stock > 0 ? "Low Stock" : "Out of Stock"}
              />
            ))}
          </div>
        </div>

        {/* লেটেস্ট অর্ডারস */}
        <div className="bg-white p-6 rounded-[4px] shadow-sm border border-stone-200/60 lg:col-span-5">
          <h2 className="text-xs font-bold text-stone-800 border-b border-stone-100 pb-2 mb-4 uppercase tracking-widest">
            Order History
          </h2>
          <div className="space-y-4">
            {orders
              .sort((a, b) => b.id.localeCompare(a.id))
              .slice(0, 4)
              .map((order) => (
                <Order
                  key={order.id}
                  id={order.id}
                  item={order.item}
                  status={order.status}
                  onUpdateStatus={updateOrderStatus}
                />
              ))}
          </div>
        </div>
      </div>

    </div>
  );
}

/* ---------- রিইউজেবল সাব-কম্পোনেন্টস ---------- */

// ১. স্ট্যাট কার্ড কম্পোনেন্ট
function Stat({ icon, title, value, trend, color = "blue" }) {
  const colorMap = {
    indigo: "text-indigo-600 bg-indigo-50 border-indigo-100",
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    amber: "text-amber-600 bg-amber-50 border-amber-100",
    emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
  };

  return (
    <div className="bg-white p-5 rounded-[4px] shadow-sm border border-stone-200/60 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-[4px] border ${colorMap[color] || colorMap.blue}`}>
          {icon}
        </div>
        <div>
          <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">
            {title}
          </p>
          <h2 className="text-sm md:text-base font-extrabold text-stone-800 mt-0.5">{value}</h2>
        </div>
      </div>
      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-[2px] border border-emerald-100">
        {trend}
      </span>
    </div>
  );
}

// ২. অ্যাকশন কার্ড কম্পোনেন্ট
function ActionCard({ icon, title, desc, color }) {
  const colorMap = {
    green: "text-emerald-600 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50/20",
    blue: "text-blue-600 border-blue-100 hover:border-blue-300 hover:bg-blue-50/20",
    purple: "text-purple-600 border-purple-100 hover:border-purple-300 hover:bg-purple-50/20",
  };

  return (
    <div className={`group bg-white rounded-[4px] border border-stone-200/60 p-5 transition-all duration-300 hover:shadow-md ${colorMap[color] || "border-stone-200"}`}>
      <div className="mb-3 w-fit p-2.5 bg-stone-50 rounded-[4px] shadow-sm border border-stone-100">
        {icon}
      </div>
      <h3 className="font-bold text-sm text-stone-800">{title}</h3>
      <p className="text-xs text-stone-500 mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}

// ৩. প্রোডাক্ট আইটেম কম্পোনেন্ট
function ProductItem({ name, price, stock }) {
  const stockConfig = {
    "In Stock": { text: "text-green-700 bg-green-50 border-green-200", icon: <CheckCircle size={10} /> },
    "Low Stock": { text: "text-yellow-700 bg-yellow-50 border-yellow-200", icon: <AlertTriangle size={10} /> },
    "Out of Stock": { text: "text-red-700 bg-red-50 border-red-200", icon: <XCircle size={10} /> },
  };

  const currentStockStatus = stockConfig[stock] || { text: "text-stone-500 bg-stone-50 border-stone-200", icon: null };

  return (
    <div className="flex justify-between items-center border border-stone-100 p-3 rounded-[4px] hover:bg-[#FAF9F6] transition-all duration-300">
      <div className="space-y-1.5">
        <h3 className="text-xs font-semibold text-stone-800">{name}</h3>
        <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase px-2 py-0.5 border rounded-[2px] ${currentStockStatus.text}`}>
          {currentStockStatus.icon} {stock}
        </span>
      </div>
      <div className="font-bold text-zinc-900 text-sm">{price}</div>
    </div>
  );
}

// ৪. অর্ডার আইটেম কম্পোনেন্ট
function Order({ id, item, status, onUpdateStatus }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const statusColors = {
    Completed: { text: "text-green-700 bg-green-50 border-green-200", icon: <CheckCircle size={10} /> },
    Processing: { text: "text-yellow-700 bg-yellow-50 border-yellow-200", icon: <Clock size={10} /> },
    Cancelled: { text: "text-red-700 bg-red-50 border-red-200", icon: <XCircle size={10} /> },
  };

  const currentStatus = statusColors[status] || { text: "text-stone-500 bg-stone-50 border-stone-200", icon: null };

  return (
    <div className="flex justify-between items-center border-b border-stone-100 pb-3 text-xs relative">
      <span className="text-stone-600 font-medium">
        Order ID: <span className="font-bold text-stone-800">{id}</span> — {item}
      </span>

      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className={`font-semibold flex items-center gap-1 text-[10px] uppercase border px-2.5 py-1 rounded-[2px] cursor-pointer transition ${currentStatus.text}`}
        >
          {currentStatus.icon}
          {status}
          <ChevronDown size={10} className="ml-1" />
        </button>

        {showDropdown && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setShowDropdown(false)} />
            <div className="absolute right-0 mt-2 w-32 bg-white border border-stone-200 rounded-[4px] shadow-lg z-20 overflow-hidden py-1">
              {["Processing", "Completed", "Cancelled"].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    onUpdateStatus(id, s);
                    setShowDropdown(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-xs text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;