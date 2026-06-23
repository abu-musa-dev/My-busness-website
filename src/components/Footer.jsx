import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white pt-20 pb-10 border-t border-zinc-800">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* TOP SECTION (৪ কলাম বিশিষ্ট প্রফেশনাল গ্রিড) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 border-b border-zinc-800 pb-16">
          
          {/* ১. ব্র্যান্ড ইনফরমেশন */}
          <div className="space-y-5">
            <Link
              to="/"
              className="text-2xl font-black tracking-[0.2em] uppercase text-white hover:text-zinc-200 transition"
            >
              HOMTIDY
            </Link>

            <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
              Discover premium lifestyle products, elegant furniture, smart
              electronics, and home essentials crafted for modern living and
              everyday comfort.
            </p>

            {/* কাস্টমার ট্রাস্ট ব্যাজ (মিনিমাল লুক) */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-[2px] backdrop-blur-md">
              <span className="w-2.5 h-2.5 bg-zinc-400 rounded-full animate-pulse"></span>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Trusted by 2K+ customers
              </p>
            </div>
          </div>

          {/* ২. কুইক লিংকস (শার্প ও ক্যাপিটাল হেডিংস) */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-7">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3.5 text-zinc-400 text-xs sm:text-sm">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              <Link to="/products" className="hover:text-white transition">
                Products
              </Link>
              <Link to="/cart" className="hover:text-white transition">
                Cart
              </Link>
              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>
              <Link to="/register" className="hover:text-white transition">
                Register
              </Link>
            </div>
          </div>

          {/* ৩. কন্টাক্ট ইনফরমেশন */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-7">
              Contact Info
            </h3>

            <div className="space-y-4.5 text-zinc-400 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <Mail className="text-zinc-400" size={16} />
                <p>support@homora.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-zinc-400" size={16} />
                <p>
                  <a href="tel:+8801306783349" className="hover:text-white transition">
                    +880 1306-783 349
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-zinc-400" size={16} />
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* ৪. নিউজলেটার (শার্প কর্নার সাবস্ক্রাইব বক্স) */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-7">
              Newsletter
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
              Subscribe now and get special offers, updates, and new arrivals
              directly to your inbox.
            </p>

            {/* ইনপুট বক্স ও বাটন (শার্প কর্নার rounded-[4px] ডিজাইন) */}
            <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-[4px] overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 outline-none text-white text-xs sm:text-sm placeholder:text-zinc-500"
              />
              <button className="bg-white text-black hover:bg-zinc-200 px-4 py-3.5 transition flex items-center justify-center rounded-[2px]">
                <Send size={14} className="fill-current" />
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION (কপিরাইট ও পলিসি লিংক) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-10 text-zinc-500 text-[11px] tracking-wider uppercase font-medium">
          <p>© {new Date().getFullYear()} HOMTIDY. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;