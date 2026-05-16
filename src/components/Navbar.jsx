import { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h2 className="text-3xl font-bold text-gray-900 tracking-wide cursor-pointer">
            HOMTIDY
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/">
            <li className="hover:text-black cursor-pointer">Home</li>
          </Link>

          <Link to="/shop">
            <li className="hover:text-black cursor-pointer">Shop</li>
          </Link>

          <Link to="/categories">
            <li className="hover:text-black cursor-pointer">Categories</li>
          </Link>

          <Link to="/about">
            <li className="hover:text-black cursor-pointer">About</li>
          </Link>
        </ul>

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-white">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none px-2 text-sm"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <Link to="/cart">
            <div className="relative cursor-pointer hover:scale-110 transition">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>
          </Link>

          {/* Login */}
          <Link to="/login">
            <button className="hidden md:flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full hover:scale-105 transition">
              <User size={18} />
              Login
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white border-t">

          <Link to="/">
            <p>Home</p>
          </Link>

          <Link to="/shop">
            <p>Shop</p>
          </Link>

          <Link to="/categories">
            <p>Categories</p>
          </Link>

          <Link to="/about">
            <p>About</p>
          </Link>

          <Link to="/cart">
            <p>Cart</p>
          </Link>

          <div className="flex items-center border rounded-full px-3 py-1">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 text-sm w-full"
            />
          </div>

          <Link to="/login">
            <button className="w-full bg-black text-white px-4 py-2 rounded-full">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;