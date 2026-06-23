import React, { useState } from "react";
import { Search, Mail, Phone, ShoppingBag, Trash2, ShieldAlert, Award } from "lucide-react";

// ডেমো কাস্টমার ডেটা (রিয়ালিস্টিক শপিং হিস্ট্রি সহ)
const initialCustomers = [
  {
    id: "c1",
    name: "Mushfiqur Rahman",
    email: "mushfiq@gmail.com",
    phone: "+880 1712-345 678",
    status: "VVIP",
    totalSpent: 85000.00,
    totalOrders: 12,
  },
  {
    id: "c2",
    name: "Jannatul Ferdous",
    email: "jannat.f@yahoo.com",
    phone: "+880 1819-987 654",
    status: "Premium",
    totalSpent: 42050.50,
    totalOrders: 6,
  },
  {
    id: "c3",
    name: "Tanvir Ahmed",
    email: "tanvir.ahmed@outlook.com",
    phone: "+880 1911-223 344",
    status: "Standard",
    totalSpent: 12000.00,
    totalOrders: 2,
  },
  {
    id: "c4",
    name: "Sadia Islam",
    email: "sadia.islam@gmail.com",
    phone: "+880 1306-112 233",
    status: "Standard",
    totalSpent: 8500.00,
    totalOrders: 1,
  },
];

function CustomersPage() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // কাস্টমার ডিলিট করার ফাংশন
  const handleDeleteCustomer = (id) => {
    if (confirm("Are you sure you want to remove this customer from database?")) {
      setCustomers(customers.filter((c) => c.id !== id));
    }
  };

  // সার্চ এবং ফিল্টারিং লজিক
  const filteredCustomers = customers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" || c.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm text-stone-700">
      
      {/* ১. স্ট্যাটাস কার্ডস (কাস্টমার স্ট্যাটিস্টিকস) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="bg-white p-5 rounded-[4px] border border-stone-200/60 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-zinc-50 border border-zinc-200 text-black rounded-[4px]">
            <Search size={16} />
          </div>
          <div>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Total Customers</p>
            <h2 className="text-lg font-extrabold text-stone-900 mt-0.5">{customers.length} Users</h2>
          </div>
        </div>

        <div className="bg-white p-5 rounded-[4px] border border-stone-200/60 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-yellow-50 border border-yellow-100 text-yellow-600 rounded-[4px]">
            <Award size={16} />
          </div>
          <div>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Active VIP Members</p>
            <h2 className="text-lg font-extrabold text-stone-900 mt-0.5">
              {customers.filter(c => c.status === "VVIP" || c.status === "Premium").length} Members
            </h2>
          </div>
        </div>

        <div className="bg-white p-5 rounded-[4px] border border-stone-200/60 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-50 border border-green-100 text-green-600 rounded-[4px]">
            <ShoppingBag size={16} />
          </div>
          <div>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Total Spent by Users</p>
            <h2 className="text-lg font-extrabold text-stone-900 mt-0.5">
              ৳{customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </h2>
          </div>
        </div>

      </div>

      {/* ২. কন্ট্রোল বার (সার্চ ও ফিল্টার ড্রপডাউন) */}
      <div className="bg-white p-4 rounded-[4px] border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* সার্চ বক্স */}
        <div className="flex items-center border border-zinc-200 rounded-[4px] px-3.5 py-2 text-xs w-full sm:max-w-xs focus-within:border-black bg-white transition">
          <Search size={14} className="text-zinc-400 mr-2 flex-shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full outline-none bg-transparent text-black font-semibold"
          />
        </div>

        {/* ফিল্টার ড্রপডাউন */}
        <div className="w-full sm:w-auto min-w-[150px]">
          <select
            className="block w-full appearance-none bg-white border border-zinc-200 px-4 py-2.5 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-black text-black font-semibold text-xs cursor-pointer"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="All">All Tiers</option>
            <option value="VVIP">VVIP Members</option>
            <option value="Premium">Premium Members</option>
            <option value="Standard">Standard Users</option>
          </select>
        </div>

      </div>

      {/* ৩. কাস্টমার টেবিল (রেসপন্সিভ স্ক্রোল কন্টেইনার সহ) */}
      <div className="bg-white rounded-[4px] border border-stone-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#FAF9F6] border-b border-zinc-200 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-4 px-6">Customer Info</th>
                <th className="py-4 px-6">Contact</th>
                <th className="py-4 px-6">Tier Status</th>
                <th className="py-4 px-6 text-right">Orders</th>
                <th className="py-4 px-6 text-right">Total Spent</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((c) => (
                  <tr key={c.id} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    
                    {/* কাস্টমার নাম ও অবতার */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        {/* নামের আদ্যক্ষর দিয়ে তৈরি স্টাইলিশ অবতার */}
                        <div className="w-10 h-10 rounded-full bg-[#ECE9E4] text-black border border-zinc-200 flex items-center justify-center font-bold text-xs">
                          {c.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <h4 className="font-semibold text-stone-900 text-sm">{c.name}</h4>
                          <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wide">ID: {c.id}</span>
                        </div>
                      </div>
                    </td>

                    {/* ইমেইল ও ফোন */}
                    <td className="py-4 px-6 space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-500">
                        <Mail size={12} />
                        <span>{c.email}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-500">
                        <Phone size={12} />
                        <span>{c.phone}</span>
                      </div>
                    </td>

                    {/* মেম্বারশিপ টায়ার স্ট্যাটাস */}
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase px-2 py-0.5 border rounded-[2px] ${
                        c.status === "VVIP"
                          ? "text-red-700 bg-red-50 border-red-100"
                          : c.status === "Premium"
                            ? "text-yellow-700 bg-yellow-50 border-yellow-100"
                            : "text-zinc-600 bg-zinc-50 border-zinc-200"
                      }`}>
                        {c.status}
                      </span>
                    </td>

                    {/* টোটাল অর্ডার */}
                    <td className="py-4 px-6 text-right font-semibold text-stone-800">
                      {c.totalOrders} Orders
                    </td>

                    {/* মোট খরচ বা কেনাকাটা */}
                    <td className="py-4 px-6 text-right font-bold text-stone-900 text-sm">
                      ৳{c.totalSpent.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>

                    {/* ডিলিট বোতাম */}
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleDeleteCustomer(c.id)}
                        className="text-stone-400 hover:text-red-600 p-2 rounded-[4px] hover:bg-red-50 transition-all duration-300 inline-flex items-center justify-center"
                        aria-label="Delete Customer"
                      >
                        <Trash2 size={15} />
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-stone-400 py-12 text-xs font-semibold uppercase tracking-wider">
                    No customers found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default CustomersPage;