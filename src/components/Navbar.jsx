import { useState } from "react";
import { Menu, X, ShoppingCart, Search, User, LayoutDashboard, Shield } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <h2 className="text-3xl font-bold text-gray-900">
            HOMTIDY
          </h2>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

          <Link to="/"><li>Home</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to="/categories"><li>Categories</li></Link>
          <Link to="/about"><li>About</li></Link>

          {/* USER DASHBOARD */}
          <Link to="/user/dashboard">
            <li className="flex items-center gap-1 text-green-600">
              <LayoutDashboard size={16} />
              User Dashboard
            </li>
          </Link>

          {/* ADMIN DASHBOARD */}
          <Link to="/admin/dashboard">
            <li className="flex items-center gap-1 text-red-600">
              <Shield size={16} />
              Admin Dashboard
            </li>
          </Link>

        </ul>

        {/* SEARCH */}
        <div className="hidden md:flex items-center border rounded-full px-3 py-1">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 text-sm"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* CART */}
          <Link to="/cart">
            <div className="relative">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>
          </Link>

          {/* LOGIN */}
          <Link to="/login">
            <button className="hidden md:flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full">
              <User size={18} />
              Login
            </button>
          </Link>

          {/* MOBILE MENU */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white border-t">

          <Link to="/"><p>Home</p></Link>
          <Link to="/shop"><p>Shop</p></Link>
          <Link to="/categories"><p>Categories</p></Link>
          <Link to="/about"><p>About</p></Link>

          <Link to="/user/dashboard">
            <p className="text-green-600 flex items-center gap-1">
              <LayoutDashboard size={16} />
              User Dashboard
            </p>
          </Link>

          <Link to="/admin/dashboard">
            <p className="text-red-600 flex items-center gap-1">
              <Shield size={16} />
              Admin Dashboard
            </p>
          </Link>

          <Link to="/cart"><p>Cart</p></Link>

          <Link to="/login">
            <button className="w-full bg-black text-white py-2 rounded-full">
              Login
            </button>
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;