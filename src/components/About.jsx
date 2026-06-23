// src/pages/About.jsx
import React from 'react';
import { Leaf, Award, Users, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar'; // আপনার ডিরেক্টরি অনুযায়ী সঠিক পাথ

function About() {
  // আপনার দেওয়া ফেসবুক সিডিএন ইমেজ লিঙ্কটি এখানে ভ্যারিয়েবল হিসেবে রাখা হয়েছে
  const mainBrandImage = "https://scontent.fdac146-1.fna.fbcdn.net/v/t39.30808-6/653789591_2135874913829010_8573288018658583036_n.jpg?stp=dst-jpg_tt6&cstp=mx2039x2048&ctp=s2039x2048&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGOG6tHboKn1EdrXDSuzIG37ordrmIRwz3uit2uYhHDPf16CuPDoFaHgOLqsBa19d5pnPbb0B867QwdgDrfsYK4&_nc_ohc=2heT7mnaeZkQ7kNvwFUMeF9&_nc_oc=AdownWn86x4yzKEjLH1zpnzh2SrExWAf_cQPH0pkk6EDop4jzw1HMVYDD6oOF1_M6Wk&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_gid=8mlZT0Cfvf482WadjYJiVg&_nc_ss=7b2a8&oh=00_Af8eSxpNEThsrVziRtKNoz9kxtp4KOWdsDMB19VEoEEGRg&oe=6A334131";

  // টিম মেম্বারদের জন্য ডামি প্রোফাইল ইমেজ (আগের সিডিএন লিঙ্কের সাথে ডায়নামিক স্ট্রিং যোগ করলে লিঙ্ক ভেঙে যায়, তাই এগুলো ব্যবহার করা হয়েছে)
  const teamMembers = [
    { name: "Sarah Jenkins", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "David Miller", role: "Head of Design", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Aisha Rahman", role: "Sourcing Specialist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Liam Carter", role: "Customer Experience", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <>
      <Navbar />
      {/* ব্যাকগ্রাউন্ড হিসেবে একটি সফট ওয়ার্ম টোন ব্যবহার করা হয়েছে যা হোম ডেকর ব্র্যান্ডের সাথে সামঞ্জস্যপূর্ণ */}
      <div className="min-h-screen bg-[#FBFBFA] text-[#2D2B2A] pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Hero & Intro Section (একটি মাত্র বড় ছবি সম্বলিত লেআউট) */}
          <section className="grid lg:grid-cols-12 gap-8 items-center pt-6">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase block">
                Welcome to Homtidy
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight leading-tight text-gray-900">
                Crafting Spaces, <br />
                Inspiring Stories.
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                At HOMTIDY, we believe your home should be a reflection of you – a sanctuary of comfort, style, and warmth. We curate a thoughtful collection of home decor and furniture that transforms spaces into cherished havens.
              </p>
              <div className="pt-2">
                <a 
                  href="#our-story" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-900 hover:text-amber-700 transition-colors"
                >
                  Discover Our Story <ArrowRight size={16} />
                </a>
              </div>
            </div>
            
            {/* শুরুতেই একক আকর্ষণীয় ফিচার ইমেজ */}
            <div className="lg:col-span-7 relative">
              <div className="absolute inset-0 bg-amber-100/30 rounded-2xl transform translate-x-3 translate-y-3 -z-10"></div>
              <div className="overflow-hidden rounded-2xl shadow-xl border border-stone-200">
                <img
                  src={mainBrandImage}
                  alt="HOMTIDY Elegant Interior Decor"
                  className="w-full h-[350px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </section>

          {/* Our Story & Mission Section */}
          <section id="our-story" className="border-t border-stone-200/80 pt-16">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-serif font-medium text-gray-900 tracking-tight">
                  Our Journey & <br />What Drives Us
                </h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed text-base">
                <p>
                  Founded in 2023, HOMTIDY started with a simple idea: to make beautiful and functional home essentials accessible to everyone. We noticed a gap in the market for quality, aesthetically pleasing items that don't break the bank.
                </p>
                <p>
                  Our mission is to empower you to create living spaces that inspire joy and comfort. We meticulously source our products, focusing on sustainable materials, ethical production, and timeless design, ensuring every piece tells a story and adds value to your home.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-[#F5F3EF] rounded-2xl p-8 md:p-12 border border-stone-200/60">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-serif font-medium text-gray-900">
                The Core of HOMTIDY
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-stone-200/40 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800 mb-4">
                  <Leaf size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Sustainable & Ethical</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We prioritize eco-friendly materials and ethical sourcing to ensure a positive impact.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-stone-200/40 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Craftsmanship</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every product is selected for its superior quality, durability, and exquisite design.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-stone-200/40 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-800 mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Centric</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your satisfaction is our priority. We offer exceptional support and a seamless shopping experience.
                </p>
              </div>
            </div>
          </section>

          {/* Clean & Elegant Team Section */}
          <section className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase">
                Our People
              </span>
              <h2 className="text-3xl font-serif font-medium text-gray-900">
                Meet Our Creative Team
              </h2>
              <p className="text-gray-600 text-sm max-w-xl mx-auto">
                A dedicated team passionate about home design and committed to bringing you the best products and service.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, i) => (
                <div key={i} className="group text-center">
                  <div className="overflow-hidden rounded-xl bg-stone-100 aspect-square mb-4 shadow-sm border border-stone-200/50">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-base">{member.name}</h4>
                  <p className="text-gray-500 text-xs mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default About;