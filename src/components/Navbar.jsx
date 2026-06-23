import { useState } from "react";
import { Menu, X, ShoppingCart, Search, User, LayoutDashboard, Shield } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.02)] border-b border-zinc-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* LOGO (ব্যানার ও ফুটারের মতো ক্যাপিটাল ও ট্র্যাকিং স্পেসিং বিশিষ্ট) */}
        <Link to="/" className="text-xl md:text-2xl font-black tracking-[0.2em] uppercase text-black">
          HOMTIDY
        </Link>

        {/* DESKTOP MENU (প্রিমিয়াম মিনিমালিস্ট ফন্ট) */}
        <ul className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-zinc-600">
          
          <Link to="/" className="hover:text-black transition-colors duration-300"><li>Home</li></Link>
          <Link to="/shop" className="hover:text-black transition-colors duration-300"><li>Shop</li></Link>
          <Link to="/categories" className="hover:text-black transition-colors duration-300"><li>Categories</li></Link>
          <Link to="/about" className="hover:text-black transition-colors duration-300"><li>About</li></Link>

          {/* USER DASHBOARD (ক্লিন ও মিনিমাল ডিজাইন) */}
          <Link to="/user/dashboard" className="text-zinc-600 hover:text-black transition-colors duration-300">
            <li className="flex items-center gap-1">
              <LayoutDashboard size={14} />
              User Dashboard
            </li>
          </Link>

          {/* ADMIN DASHBOARD (মিনিমাল রেড হিউ) */}
          <Link to="/admin/dashboard" className="text-zinc-500 hover:text-red-600 transition-colors duration-300">
            <li className="flex items-center gap-1">
              <Shield size={14} />
              Admin Dashboard
            </li>
          </Link>

        </ul>

        {/* SEARCH BOX (শার্প রেকট্যাঙ্গুলার ডিজাইন) */}
        <div className="hidden md:flex items-center border border-zinc-200 rounded-[4px] px-3.5 py-1.5 focus-within:border-black transition duration-300">
          <Search size={15} className="text-zinc-400" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 text-xs text-black placeholder:text-zinc-400 bg-transparent w-36 focus:w-48 transition-all duration-300"
          />
        </div>

        {/* RIGHT AREA */}
        <div className="flex items-center gap-5">

          {/* CART (সলিড প্রিমিয়াম ব্ল্যাক ব্যাজ) */}
          <Link to="/cart" className="text-black hover:text-zinc-600 transition duration-300">
            <div className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                2
              </span>
            </div>
          </Link>

          {/* LOGIN (ব্যানারের মতো শার্প কর্নার বাটন) */}
          <Link to="/login">
            <button className="hidden md:flex items-center gap-1.5 bg-black hover:bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-[4px] transition-all duration-300">
              <User size={14} />
              Login
            </button>
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button className="md:hidden text-black p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* MOBILE DRAWER MENU (মোবাইলের জন্য ক্লিন ও অর্গানাইজড লেআউট) */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 space-y-4 bg-white border-t border-zinc-100 text-xs font-bold uppercase tracking-wider text-zinc-600">

          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-zinc-50 hover:text-black">Home</Link>
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-zinc-50 hover:text-black">Shop</Link>
          <Link to="/categories" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-zinc-50 hover:text-black">Categories</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-zinc-50 hover:text-black">About</Link>

          <Link to="/user/dashboard" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-zinc-50 text-zinc-600 hover:text-black">
            <p className="flex items-center gap-1.5">
              <LayoutDashboard size={14} />
              User Dashboard
            </p>
          </Link>

          <Link to="/admin/dashboard" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-zinc-50 text-zinc-500 hover:text-red-600">
            <p className="flex items-center gap-1.5">
              <Shield size={14} />
              Admin Dashboard
            </p>
          </Link>

          <Link to="/cart" onClick={() => setMobileOpen(false)} className="block py-2 border-b border-zinc-50 hover:text-black">Cart</Link>

          <Link to="/login" onClick={() => setMobileOpen(false)} className="block pt-2">
            <button className="w-full bg-black hover:bg-zinc-900 text-white py-3 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all duration-300">
              Login
            </button>
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;