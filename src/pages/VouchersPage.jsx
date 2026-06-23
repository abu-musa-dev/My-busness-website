import { useState } from "react";
import { Trash2, Tag, Ticket } from "lucide-react";

function VouchersPage() {
  // ডামি কুপন লিস্ট (টাকার অংক রিয়ালিস্টিক করা হয়েছে)
  const [voucherList, setVoucherList] = useState([
    { id: 1, code: "HOME2000", discount: 2000.00, minSpend: 15000 },
    { id: 2, code: "WELCOME500", discount: 500.00, minSpend: 5000 },
    { id: 3, code: "HTLOUNGE10", discount: 1500.00, minSpend: 10000 },
  ]);

  const [voucherForm, setVoucherForm] = useState({
    code: "",
    discount: "",
    minSpend: "",
  });

  const handleVoucherSubmit = (e) => {
    e.preventDefault();
    const newVoucher = {
      id: Date.now(),
      code: voucherForm.code.toUpperCase(),
      discount: parseFloat(voucherForm.discount),
      minSpend: parseFloat(voucherForm.minSpend) || 0,
    };

    setVoucherList([newVoucher, ...voucherList]);
    alert("New discount voucher generated!");
    setVoucherForm({ code: "", discount: "", minSpend: "" }); // রিসেট
  };

  const handleDeleteVoucher = (id) => {
    if (confirm("Are you sure you want to delete this coupon?")) {
      setVoucherList(voucherList.filter((v) => v.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start animate-fade-in">
      
      {/* ১. বাম পাশের কলাম: ক্রিয়েট কুপন ফর্ম (১২ কলামের ৫ কলাম জুড়ে থাকবে) */}
      <div className="bg-white p-6 sm:p-8 rounded-[4px] border border-stone-200/60 shadow-sm md:col-span-5 text-xs space-y-5">
        <h3 className="text-sm font-bold text-stone-800 border-b border-stone-100 pb-3 flex items-center gap-2 uppercase tracking-widest">
          <Tag size={15} className="text-zinc-800" /> Create Coupon
        </h3>
        
        <form onSubmit={handleVoucherSubmit} className="space-y-4 text-stone-700">
          
          {/* প্রোমো কোড */}
          <div>
            <label className="font-bold text-stone-600 uppercase tracking-wider">Promo Coupon Code *</label>
            <input
              type="text"
              required
              value={voucherForm.code}
              onChange={(e) => setVoucherForm({ ...voucherForm, code: e.target.value })}
              placeholder="e.g. NEWYEAR20"
              className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black uppercase font-mono font-bold text-sm tracking-wider"
            />
          </div>

          {/* ডিসকাউন্ট অ্যামাউন্ট */}
          <div>
            <label className="font-bold text-stone-600 uppercase tracking-wider">Discount Amount (৳) *</label>
            <input
              type="number"
              required
              value={voucherForm.discount}
              onChange={(e) => setVoucherForm({ ...voucherForm, discount: e.target.value })}
              placeholder="Flat discount amount"
              className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black text-black font-semibold transition"
            />
          </div>

          {/* মিনিমাম স্পেন্ড */}
          <div>
            <label className="font-bold text-stone-600 uppercase tracking-wider">Minimum Order Spend (৳)</label>
            <input
              type="number"
              value={voucherForm.minSpend}
              onChange={(e) => setVoucherForm({ ...voucherForm, minSpend: e.target.value })}
              placeholder="Minimum amount needed"
              className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black text-black font-semibold transition"
            />
          </div>

          {/* ক্রিয়েট বাটন */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-zinc-900 text-white py-3.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition duration-300"
          >
            Create Coupon
          </button>
          
        </form>
      </div>

      {/* ২. ডান পাশের কলাম: সক্রিয় কুপনসমূহ (১২ কলামের ৭ কলাম জুড়ে থাকবে) */}
      <div className="bg-white p-6 sm:p-8 rounded-[4px] border border-stone-200/60 shadow-sm md:col-span-7 text-xs space-y-5">
        <h3 className="text-sm font-bold text-stone-800 border-b border-stone-100 pb-3 flex items-center gap-2 uppercase tracking-widest">
          <Ticket size={15} className="text-zinc-800" /> Active Coupons
        </h3>

        {/* কুপন টিকিটের তালিকা */}
        <div className="space-y-4">
          {voucherList.length > 0 ? (
            voucherList.map((v) => (
              <div 
                key={v.id} 
                className="relative border border-dashed border-zinc-200 p-4 rounded-[4px] hover:border-zinc-300 transition-all duration-300 flex items-center justify-between bg-[#FAF9F6]"
              >
                {/* বাঁ পাশের টিকিট ইনফো */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    {/* কুপন কোড (ব্যানার বেইজ থিম) */}
                    <span className="font-mono font-extrabold tracking-wider text-black bg-[#ECE9E4] border border-zinc-200/60 px-3 py-1 rounded-[2px] text-xs uppercase">
                      {v.code}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wide">
                    ৳{v.discount.toLocaleString()} Flat Off • Min. spend: ৳{v.minSpend.toLocaleString()}
                  </p>
                </div>

                {/* ডিলিট বাটন */}
                <button
                  onClick={() => handleDeleteVoucher(v.id)}
                  className="text-stone-400 hover:text-red-600 p-2.5 rounded-[4px] hover:bg-red-50 transition-all duration-300 flex-shrink-0"
                  aria-label="Delete coupon"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-stone-400 py-12 text-xs font-semibold uppercase tracking-wider">No active coupons found.</p>
          )}
        </div>
      </div>

    </div>
  );
}

export default VouchersPage;