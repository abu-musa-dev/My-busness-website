import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, DollarSign, ShoppingBag, Download, ArrowUpRight, ArrowLeft } from "lucide-react";

// ডেমো অ্যানালিটিক্স ডেটা
const topProducts = [
  { id: "1", name: "Modern Sofa (Lux Series)", category: "Furniture", sold: 15, revenue: 375000 },
  { id: "2", name: "Oak Slatted Dining Table", category: "Dining Room", sold: 8, revenue: 336000 },
  { id: "3", name: "Ergonomic Wooden Chair", category: "Bedroom", sold: 22, revenue: 265110 },
  { id: "4", name: "Minimalist Coffee Table", category: "Living Room", sold: 12, revenue: 118800 },
];

const monthlySales = [
  { month: "Jan", sales: 45, revenue: 54000 },
  { month: "Feb", sales: 65, revenue: 78000 },
  { month: "Mar", sales: 50, revenue: 60000 },
  { month: "Apr", sales: 85, revenue: 102000 },
  { month: "May", sales: 70, revenue: 84000 },
  { month: "Jun", sales: 95, revenue: 114000 },
];

const categoriesShare = [
  { name: "Furniture", share: 60, color: "bg-black" },
  { name: "Kitchen", share: 22, color: "bg-zinc-500" },
  { name: "Electronics", share: 10, color: "bg-zinc-300" },
  { name: "Others", share: 8, color: "bg-zinc-200" },
];

function ReportsPage() {
  const [reportPeriod, setSortPeriod] = useState("This Month");

  const totalRevenue = topProducts.reduce((sum, p) => sum + p.revenue, 0);
  const totalSold = topProducts.reduce((sum, p) => sum + p.sold, 0);

  const handleExport = (format) => {
    alert(`Exporting report as ${format.toUpperCase()}...`);
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm text-stone-700">
      
      {/* ১. হেডার ও এক্সপোর্ট বাটন (ক্লিন ও শার্প লেআউট) */}
      <div className="bg-white p-4 rounded-[4px] border border-stone-200/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/admin/dashboard" className="text-zinc-600 hover:text-black transition">
            <ArrowLeft size={18} />
          </Link>
          <h1 className="text-sm font-bold text-stone-800 uppercase tracking-wider">
            Reports & Analytics
          </h1>
        </div>
        
        {/* এক্সপোর্ট অ্যাকশন বোতামসমূহ */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleExport("csv")}
            className="flex items-center gap-1.5 bg-white hover:bg-stone-50 text-black border border-zinc-200 px-4 py-2.5 rounded-[4px] font-bold text-[10px] uppercase tracking-wider transition"
          >
            <Download size={12} /> Export CSV
          </button>
          <button 
            onClick={() => handleExport("pdf")}
            className="flex items-center gap-1.5 bg-black hover:bg-zinc-900 text-white px-4 py-2.5 rounded-[4px] font-bold text-[10px] uppercase tracking-wider transition"
          >
            <Download size={12} /> Print PDF
          </button>
        </div>
      </div>

      {/* ২. পারফরম্যান্স স্ট্যাট কার্ডস */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-[4px] border border-stone-200/60 shadow-sm">
          <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Total Sales Revenue</p>
          <h2 className="text-lg md:text-xl font-extrabold text-stone-900 mt-0.5">৳{totalRevenue.toLocaleString('en-IN')}</h2>
          <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 mt-1.5">
            <ArrowUpRight size={12} /> +14.2% Since last month
          </span>
        </div>

        <div className="bg-white p-5 rounded-[4px] border border-stone-200/60 shadow-sm">
          <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Avg. Order Value</p>
          <h2 className="text-lg md:text-xl font-extrabold text-stone-900 mt-0.5">৳{(totalRevenue / totalSold).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</h2>
          <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 mt-1.5">
            <ArrowUpRight size={12} /> +2.5% Average basket value
          </span>
        </div>

        <div className="bg-white p-5 rounded-[4px] border border-stone-200/60 shadow-sm">
          <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Total Items Sold</p>
          <h2 className="text-lg md:text-xl font-extrabold text-stone-900 mt-0.5">{totalSold} Items</h2>
          <span className="text-[10px] font-bold text-zinc-400 flex items-center gap-0.5 mt-1.5">
            Stable product dispatch
          </span>
        </div>

        <div className="bg-white p-5 rounded-[4px] border border-stone-200/60 shadow-sm">
          <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Conversion Rate</p>
          <h2 className="text-lg md:text-xl font-extrabold text-stone-900 mt-0.5">3.45%</h2>
          <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 mt-1.5">
            <ArrowUpRight size={12} /> +0.8% Store conversion
          </span>
        </div>

      </div>

      {/* ৩. স্প্লিট লেআউট: সেলস বার চার্ট এবং ক্যাটাগরি শেয়ার চার্ট */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* কলাম ১: মাসিক সেলস ওভারভিউ বার চার্ট */}
        <div className="bg-white p-6 rounded-[4px] border border-stone-200/60 shadow-sm lg:col-span-8 space-y-4">
          <h2 className="text-xs font-bold text-stone-800 border-b border-stone-100 pb-3 flex items-center gap-2 uppercase tracking-widest">
            <BarChart3 size={15} className="text-zinc-800" /> Monthly Revenue Trend
          </h2>
          
          {/* টেইলউইন্ড বার চার্ট */}
          <div className="flex items-end justify-between gap-4 h-48 pt-6 px-2 md:px-6 border-b border-stone-100">
            {monthlySales.map((bar, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 group">
                {/* বার উচ্চতা এবং অ্যানিমেশন */}
                <div
                  style={{ height: `${bar.sales}%` }}
                  className="w-full rounded-t-[2px] bg-stone-200 group-hover:bg-black transition-all duration-500 cursor-pointer relative"
                >
                  {/* টুলটিপ হোভার কন্টেন্ট */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow">
                    ৳{bar.revenue.toLocaleString()}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-stone-400 mt-2 uppercase tracking-wider">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* কলাম ২: ক্যাটাগরি ডিস্ট্রিবিউশন বার শেয়ার চার্ট */}
        <div className="bg-white p-6 rounded-[4px] border border-stone-200/60 shadow-sm lg:col-span-4 space-y-5">
          <h2 className="text-xs font-bold text-stone-800 border-b border-stone-100 pb-3 flex items-center gap-2 uppercase tracking-widest">
            <TrendingUp size={15} className="text-zinc-800" /> Category Share
          </h2>

          <div className="space-y-4">
            {/* ডাইনামিক কালারফুল হরাইজন্টাল শেয়ার বার */}
            <div className="h-4 w-full flex rounded-[2px] overflow-hidden border border-stone-100 shadow-sm">
              {categoriesShare.map((cat, idx) => (
                <div 
                  key={idx} 
                  style={{ width: `${cat.share}%` }} 
                  className={`${cat.color} transition-all`}
                  title={`${cat.name}: ${cat.share}%`}
                />
              ))}
            </div>

            {/* ক্যাটাগরি ইন্ডেক্স লেবেল তালিকা */}
            <div className="space-y-2 pt-2 text-xs">
              {categoriesShare.map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-[2px] ${cat.color}`} />
                    <span className="font-semibold text-stone-700">{cat.name}</span>
                  </div>
                  <span className="font-bold text-stone-900">{cat.share}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ৪. টপ পারফর্মিং প্রোডাক্ট টেবিল (রেসপন্সিভ স্ক্রোল কন্টেইনার সহ) */}
      <div className="bg-white rounded-[4px] border border-stone-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#FAF9F6] border-b border-zinc-200 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-4 px-6">Product Details</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6 text-right">Units Sold</th>
                <th className="py-4 px-6 text-right">Total Revenue Generated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {topProducts.map((product) => (
                <tr key={product.id} className="hover:bg-[#FAF9F6]/50 transition-colors">
                  
                  {/* প্রোডাক্ট নাম */}
                  <td className="py-4 px-6">
                    <h4 className="font-semibold text-stone-900 text-sm">{product.name}</h4>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wide">ID: {product.id}</span>
                  </td>

                  {/* ক্যাটাগরি */}
                  <td className="py-4 px-6">
                    <span className="text-zinc-500 font-semibold uppercase tracking-wider">{product.category}</span>
                  </td>

                  {/* সোল্ড সংখ্যা */}
                  <td className="py-4 px-6 text-right font-bold text-stone-800">
                    {product.sold} Units
                  </td>

                  {/* মোট জেনারেটেড রেভিনিউ */}
                  <td className="py-4 px-6 text-right font-bold text-stone-950 text-sm">
                    ৳{product.revenue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default ReportsPage;