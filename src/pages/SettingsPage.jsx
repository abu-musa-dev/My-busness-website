import React, { useState } from "react";
import { Save, Store, MapPin, Truck, Percent, Mail, Phone } from "lucide-react";

function SettingsPage() {
  const [settingsForm, setSettingsForm] = useState({
    storeName: "HOMTIDY",
    tagline: "Discover premium lifestyle products and modern furniture.",
    email: "support@homora.com",
    phone: "+880 1306-783 349",
    address: "Dhaka, Bangladesh",
    currency: "BDT (৳)",
    deliveryFee: "120",
    taxPercentage: "5.0",
  });

  const handleChange = (e) => {
    setSettingsForm({
      ...settingsForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Store settings saved successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in text-xs sm:text-sm text-stone-700">
      
      {/* হেডার ব্যানার (মিনিমাল লাক্সারি লুক) */}
      <div className="bg-white rounded-[4px] shadow-sm p-6 border border-stone-200/60">
        <h2 className="text-xl md:text-2xl font-serif font-medium text-stone-900">
          Store Settings
        </h2>
        <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">
          Configure your e-commerce storefront details, location, currency, shipping and taxes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* সেকশন ১: বেসিক ইনফরমেশন */}
        <div className="bg-white p-6 sm:p-8 rounded-[4px] border border-stone-200/60 shadow-sm space-y-5">
          <h3 className="text-sm font-bold text-stone-800 border-b border-stone-100 pb-3 flex items-center gap-2 uppercase tracking-widest">
            <Store size={15} className="text-zinc-800" /> Basic Store Info
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-5 text-stone-700">
            {/* স্টোরের নাম */}
            <div>
              <label className="font-bold text-stone-600 uppercase tracking-wider">Store Name *</label>
              <input
                type="text"
                name="storeName"
                required
                value={settingsForm.storeName}
                onChange={handleChange}
                className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black text-black font-semibold transition"
              />
            </div>

            {/* স্টোর ট্যাগলাইন */}
            <div>
              <label className="font-bold text-stone-600 uppercase tracking-wider">Store Tagline</label>
              <input
                type="text"
                name="tagline"
                value={settingsForm.tagline}
                onChange={handleChange}
                className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black text-black font-semibold transition"
              />
            </div>

            {/* স্টোর ইমেইল */}
            <div>
              <label className="font-bold text-stone-600 uppercase tracking-wider">Store Email *</label>
              <div className="flex items-center border border-stone-200 rounded-[4px] px-3.5 py-2.5 mt-1.5 focus-within:border-black bg-white transition">
                <Mail size={15} className="text-stone-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  required
                  value={settingsForm.email}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-black font-semibold"
                />
              </div>
            </div>

            {/* ফোন নম্বর */}
            <div>
              <label className="font-bold text-stone-600 uppercase tracking-wider">Store Phone *</label>
              <div className="flex items-center border border-stone-200 rounded-[4px] px-3.5 py-2.5 mt-1.5 focus-within:border-black bg-white transition">
                <Phone size={15} className="text-stone-400 mr-2" />
                <input
                  type="text"
                  name="phone"
                  required
                  value={settingsForm.phone}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-black font-semibold"
                />
              </div>
            </div>
          </div>
        </div>

        {/* সেকশন ২: লোকেশন ও কারেন্সি */}
        <div className="bg-white p-6 sm:p-8 rounded-[4px] border border-stone-200/60 shadow-sm space-y-5">
          <h3 className="text-sm font-bold text-stone-800 border-b border-stone-100 pb-3 flex items-center gap-2 uppercase tracking-widest">
            <MapPin size={15} className="text-zinc-800" /> Location & Currency
          </h3>

          <div className="grid sm:grid-cols-2 gap-5 text-stone-700">
            {/* ঠিকানা */}
            <div>
              <label className="font-bold text-stone-600 uppercase tracking-wider">Store Address *</label>
              <input
                type="text"
                name="address"
                required
                value={settingsForm.address}
                onChange={handleChange}
                className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black text-black font-semibold transition"
              />
            </div>

            {/* কারেন্সি বা মুদ্রা */}
            <div>
              <label className="font-bold text-stone-600 uppercase tracking-wider">Default Currency *</label>
              <select
                name="currency"
                value={settingsForm.currency}
                onChange={handleChange}
                className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black cursor-pointer text-black bg-white font-semibold"
              >
                <option value="BDT (৳)">BDT - Bangladeshi Taka (৳)</option>
                <option value="USD ($)">USD - US Dollar ($)</option>
                <option value="EUR (€)">EUR - Euro (€)</option>
              </select>
            </div>
          </div>
        </div>

        {/* সেকশন ৩: শিপিং ও ট্যাক্স সেটিংস */}
        <div className="bg-white p-6 sm:p-8 rounded-[4px] border border-stone-200/60 shadow-sm space-y-5">
          <h3 className="text-sm font-bold text-stone-800 border-b border-stone-100 pb-3 flex items-center gap-2 uppercase tracking-widest">
            <Truck size={15} className="text-zinc-800" /> Shipping & Taxes
          </h3>

          <div className="grid sm:grid-cols-2 gap-5 text-stone-700">
            {/* ডেলিভারি চার্জ */}
            <div>
              <label className="font-bold text-stone-600 uppercase tracking-wider">Flat Delivery Fee (৳) *</label>
              <div className="flex items-center border border-stone-200 rounded-[4px] px-3.5 py-2.5 mt-1.5 focus-within:border-black bg-white transition">
                <Truck size={15} className="text-stone-400 mr-2" />
                <input
                  type="number"
                  name="deliveryFee"
                  required
                  value={settingsForm.deliveryFee}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-black font-semibold"
                />
              </div>
            </div>

            {/* ট্যাক্স পার্সেন্টেজ */}
            <div>
              <label className="font-bold text-stone-600 uppercase tracking-wider">Vat / Tax Percentage (%) *</label>
              <div className="flex items-center border border-stone-200 rounded-[4px] px-3.5 py-2.5 mt-1.5 focus-within:border-black bg-white transition">
                <Percent size={15} className="text-stone-400 mr-2" />
                <input
                  type="number"
                  step="0.1"
                  name="taxPercentage"
                  required
                  value={settingsForm.taxPercentage}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-black font-semibold"
                />
              </div>
            </div>
          </div>
        </div>

        {/* সেভ বাটন (সলিড ব্ল্যাক এবং শার্প কর্নার) */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-black hover:bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-[4px] transition-all duration-300 shadow-md active:scale-95"
          >
            <Save size={14} /> Save Settings
          </button>
        </div>

      </form>
    </div>
  );
}

export default SettingsPage;