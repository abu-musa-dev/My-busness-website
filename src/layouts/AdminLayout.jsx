import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Plus,
  Edit,
  Tag,
  BarChart3,
  User,
  Settings,
  Menu,
  X,
  LogOut,
  Bell,
  Home
} from 'lucide-react';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // কারেন্ট অ্যাক্টিভ লিংক ট্র্যাক করার জন্য

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#F4F5F7] flex text-[#2D2C2A] antialiased">
      
      {/* ১. লেফট সাইডবার (RESPONSIVE SIDEBAR) */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#1E1E2F] text-stone-200 p-5 flex flex-col justify-between
        transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out
      `}>
        <div className="space-y-6">
          {/* সাইডবার হেডার / লোগো */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-amber-500 rounded-lg text-slate-950 font-black">HT</span>
              <span className="font-serif font-bold text-lg tracking-wide text-white">HOMTIDY</span>
            </div>
            {/* মোবাইল ক্লোজ বাটন */}
            <button 
              onClick={() => setIsSidebarOpen(false)} 
              className="lg:hidden text-stone-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* সাইডবার নেভিগেশন লিংকসমূহ */}
          <nav className="space-y-1.5">
            <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block px-3 mb-2">Main Menu</span>
            
            <SidebarLink to="/admin/dashboard" icon={<Home size={18} />} label="Dashboard" active={isActive("/admin/dashboard")} />
            <SidebarLink to="/admin/add-product" icon={<Plus size={18} />} label="Add Product" active={isActive("/admin/add-product")} />
            <SidebarLink to="/admin/manage-inventory" icon={<Edit size={18} />} label="Inventory" active={isActive("/admin/manage-inventory")} />
            <SidebarLink to="/admin/vouchers" icon={<Tag size={18} />} label="Vouchers" active={isActive("/admin/vouchers")} />
            <SidebarLink to="/admin/customers" icon={<User size={18} />} label="Customers" active={isActive("/admin/customers")} />
            <SidebarLink to="/admin/reports" icon={<BarChart3 size={18} />} label="Reports" active={isActive("/admin/reports")} />
            
            <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block px-3 pt-4 mb-2">Settings</span>
            <SidebarLink to="/admin/settings" icon={<Settings size={18} />} label="Store Settings" active={isActive("/admin/settings")} />
          </nav>
        </div>

        {/* সাইডবার ফুটার */}
        <div className="border-t border-stone-800 pt-4">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 text-sm text-stone-400 hover:text-red-400 transition-colors">
            <LogOut size={18} />
            <span>Go to Shop</span>
          </Link>
        </div>
      </aside>

      {/* মোবাইল ব্যাকড্রপ (যখন সাইডবার ওপেন থাকবে) */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)} 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* ২. মেইন কন্টেন্ট এরিয়া */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* টপ হেডার (DASHBOARD TOP HEADER - স্টিকি) */}
        <header className="bg-white border-b border-stone-200/80 h-16 px-6 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-4">
            {/* মোবাইল স্ক্রিনে সাইডবার খোলার বাটন */}
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="lg:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg"
            >
              <Menu size={20} />
            </button>
            <div className="hidden md:block">
              <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Hello Admin, welcome back!</span>
              <h1 className="text-sm font-bold text-stone-800">HOMTIDY Seller Center</h1>
            </div>
          </div>

          {/* হেডার রাইট সাইড অ্যাকশনস */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-stone-500 hover:bg-stone-100 rounded-full relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-stone-200" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-sm">
                A
              </div>
              <span className="text-xs font-semibold text-stone-700 hidden sm:inline-block">Admin S.</span>
            </div>
          </div>
        </header>

        {/* ৩. চাইল্ড পেজ কন্টেন্ট এরিয়া (এখানে সব পেজের কন্টেন্ট রেন্ডার হবে) */}
        <main className="p-4 md:p-8 space-y-6 max-w-7xl w-full mx-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

// সাইডবার লিংক সাব-কম্পোনেন্ট
function SidebarLink({ to, icon, label, active = false }) {
  return (
    <Link
      to={to}
      className={`
        flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
        ${active 
          ? "bg-amber-500/10 text-amber-400 border-l-4 border-amber-500 font-semibold" 
          : "text-stone-400 hover:text-white hover:bg-stone-800/40"
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default AdminLayout;