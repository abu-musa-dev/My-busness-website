// src/pages/Categories.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // আপনার ডিরেক্টরি অনুযায়ী সঠিক পাথ

const categories = [
  { 
    name: 'Living Room', 
    description: 'Sofas, coffee tables, TV units', 
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    name: 'Bedroom', 
    description: 'Beds, wardrobes, nightstands', 
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    name: 'Dining Room', 
    description: 'Dining tables, chairs, sideboards', 
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    name: 'Home Office', 
    description: 'Desks, office chairs, bookshelves', 
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    name: 'Lighting', 
    description: 'Lamps, chandeliers, string lights', 
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    name: 'Storage', 
    description: 'Shelves, cabinets, storage boxes', 
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80' 
  },
];

function Categories() {
  return (
    <>
      <Navbar />
      {/* একটি ক্লাসি এবং সফট অফ-হোয়াইট ব্যাকগ্রাউন্ড ব্যবহার করা হয়েছে */}
      <div className="min-h-screen bg-[#FBFBFA] pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* Page Header */}
          <div className="text-center space-y-3 py-4">
            <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase block">
              Our Collections
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 tracking-tight">
              Browse Categories
            </h1>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Find exactly what you need for every room in your home.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                to={`/shop?category=${category.name}`} 
                key={category.name} 
                className="group block overflow-hidden rounded-xl bg-white border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* হোভার করলে হালকা আবছা ইফেক্ট দেওয়ার জন্য overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Text Area (কোনো আইকন রাখা হয়নি) */}
                <div className="p-5 space-y-1">
                  <h2 className="text-xl font-serif font-medium text-stone-800 group-hover:text-amber-900 transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default Categories;