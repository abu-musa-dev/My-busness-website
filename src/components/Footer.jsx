import React from 'react';
import { Link } from 'react-router-dom';

import {
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#052e16] via-[#064e3b] to-[#022c22] text-white pt-24 pb-10">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-green-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 border-b border-white/10 pb-16">

          {/* BRAND */}
          <div>

            <Link
              to="/"
              className="text-4xl font-black bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent"
            >
              Homora
            </Link>

            <p className="mt-6 text-gray-300 leading-8 text-sm">
              Discover premium lifestyle products,
              elegant furniture, smart electronics,
              and home essentials crafted for modern
              living and everyday comfort.
            </p>

            {/* Badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">

              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

              <p className="text-sm text-green-200">
                Trusted by 2K+ customers
              </p>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-2xl font-bold mb-7">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

              <Link
                to="/"
                className="hover:text-green-300 transition"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="hover:text-green-300 transition"
              >
                Products
              </Link>

              <Link
                to="/cart"
                className="hover:text-green-300 transition"
              >
                Cart
              </Link>

              <Link
                to="/login"
                className="hover:text-green-300 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hover:text-green-300 transition"
              >
                Register
              </Link>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl font-bold mb-7">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-start gap-3">

                <Mail className="text-green-300 mt-1" size={20} />

                <p>
                  support@homora.com
                </p>

              </div>

              <div className="flex items-start gap-3">

                <Phone className="text-green-300 mt-1" size={20} />

                <p>
                  +880 1700-000000
                </p>

              </div>

              <div className="flex items-start gap-3">

                <MapPin className="text-green-300 mt-1" size={20} />

                <p>
                  Dhaka, Bangladesh
                </p>

              </div>

            </div>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h3 className="text-2xl font-bold mb-7">
              Newsletter
            </h3>

            <p className="text-gray-300 text-sm leading-7 mb-5">
              Subscribe now and get special offers,
              updates, and new arrivals directly
              to your inbox.
            </p>

            {/* Input */}
            <div className="flex items-center bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">

              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-5 py-4 outline-none text-white placeholder:text-gray-400"
              />

              <button className="bg-gradient-to-r from-green-500 to-emerald-400 px-5 py-4 hover:opacity-90 transition">

                <Send size={20} />

              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-10 text-gray-400 text-sm">

          <p>
            © {new Date().getFullYear()} Homora. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/privacy-policy"
              className="hover:text-green-300 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-green-300 transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;