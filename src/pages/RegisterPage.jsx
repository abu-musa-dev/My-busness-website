import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [registerMethod, setRegisterMethod] = useState("phone"); // 'phone' or 'email'
  
  // OTP Timer Logic
  const [timer, setTimer] = useState(0);
  const [isSendingCode, setIsSendingCode] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    verificationCode: "",
    password: "",
    birthday: "",
    gender: "",
    newsletter: true,
    agree: false,
  });

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => (prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendCode = () => {
    setIsSendingCode(true);
    // Fake sending animation
    setTimeout(() => {
      setTimer(60);
      setIsSendingCode(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the Terms & Conditions!");
      return;
    }
    alert("Account created successfully under HOMTIDY!");
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white rounded-[4px] shadow-sm overflow-hidden border border-zinc-200">
        
        {/* ১. টপ ব্র্যান্ডিং হেডার */}
        <div className="bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-black tracking-[0.2em] uppercase text-black">
            HOMTIDY
          </Link>
          <span className="text-xs text-zinc-500 font-medium">
            Already Member?{" "}
            <Link to="/login" className="text-black font-bold hover:underline">
              Login
            </Link>{" "}
            here.
          </span>
        </div>

        {/* ২. বডি সেকশন */}
        <div className="p-6 md:p-10">
          <div className="max-w-2xl mx-auto">
            
            <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-6 text-center md:text-left">
              Create Your HOMTIDY Account
            </h2>

            {/* মেথড সিলেকশন ট্যাব (ক্লিন ব্ল্যাক থিম) */}
            <div className="flex border-b border-zinc-200 mb-6 text-xs font-bold uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setRegisterMethod("phone")}
                className={`flex-1 md:flex-none pb-3 px-6 border-b-2 transition ${
                  registerMethod === "phone"
                    ? "border-black text-black"
                    : "border-transparent text-zinc-400 hover:text-black"
                }`}
              >
                Register with Phone
              </button>
              <button
                type="button"
                onClick={() => setRegisterMethod("email")}
                className={`flex-1 md:flex-none pb-3 px-6 border-b-2 transition ${
                  registerMethod === "email"
                    ? "border-black text-black"
                    : "border-transparent text-zinc-400 hover:text-black"
                }`}
              >
                Register with Email
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5 text-xs text-stone-700">
              
              {/* ফোন / ইমেইল ইনপুট */}
              <div className="md:col-span-2">
                {registerMethod === "phone" ? (
                  <div>
                    <label className="font-bold text-stone-600 uppercase tracking-wider">Phone Number *</label>
                    <div className="flex items-center border border-zinc-200 rounded-[4px] px-3.5 py-2.5 mt-1.5 focus-within:border-black bg-white transition">
                      <Phone size={15} className="text-zinc-400 mr-2" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Please enter your phone number"
                        onChange={handleChange}
                        className="w-full outline-none text-black font-semibold bg-transparent"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="font-bold text-stone-600 uppercase tracking-wider">Email Address *</label>
                    <div className="flex items-center border border-zinc-200 rounded-[4px] px-3.5 py-2.5 mt-1.5 focus-within:border-black bg-white transition">
                      <Mail size={15} className="text-zinc-400 mr-2" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Please enter your email address"
                        onChange={handleChange}
                        className="w-full outline-none text-black font-semibold bg-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* ওটিপি / ভেরিফিকেশন কোড */}
              <div className="md:col-span-2">
                <label className="font-bold text-stone-600 uppercase tracking-wider">Verification Code *</label>
                <div className="flex gap-2 mt-1.5">
                  <div className="flex-1 flex items-center border border-zinc-200 rounded-[4px] px-3.5 py-2.5 focus-within:border-black bg-white transition">
                    <input
                      type="text"
                      name="verificationCode"
                      required
                      value={formData.verificationCode}
                      onChange={handleChange}
                      placeholder="6-digit SMS / Email Code"
                      className="w-full outline-none text-black font-semibold bg-transparent"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSendCode}
                    disabled={timer > 0 || isSendingCode}
                    className="bg-[#FAF9F6] border border-zinc-200 text-xs font-bold uppercase tracking-wider px-5 rounded-[4px] text-zinc-700 hover:bg-zinc-100 transition disabled:opacity-50 min-w-[120px]"
                  >
                    {isSendingCode ? "Sending..." : timer > 0 ? `${timer}s` : "Get Code"}
                  </button>
                </div>
              </div>

              {/* পাসওয়ার্ড */}
              <div className="sm:col-span-2">
                <label className="font-bold text-stone-600 uppercase tracking-wider">Password *</label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Enter secure password"
                  className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black text-black font-medium transition"
                />
              </div>

              {/* কাস্টমার নাম */}
              <div>
                <label className="font-bold text-stone-600 uppercase tracking-wider">Full Name *</label>
                <div className="flex items-center border border-zinc-200 rounded-[4px] px-3.5 py-2.5 mt-1.5 focus-within:border-black bg-white transition">
                  <User size={15} className="text-zinc-400 mr-2" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter first and last name"
                    onChange={handleChange}
                    className="w-full outline-none text-black font-semibold bg-transparent"
                  />
                </div>
              </div>

              {/* জেন্ডার */}
              <div>
                <label className="font-bold text-stone-600 uppercase tracking-wider">Gender *</label>
                <select
                  name="gender"
                  required
                  className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none focus:border-black cursor-pointer text-stone-700 bg-white font-medium"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* ডেসক্রিপশন বা অতিরিক্ত নোড */}
              <div className="sm:col-span-2">
                <label className="font-bold text-stone-600 uppercase tracking-wider">Personal Address</label>
                <textarea
                  rows="3"
                  name="address"
                  placeholder="Specify House No, Road, Area, City"
                  className="w-full mt-1.5 border border-stone-200 rounded-[4px] px-3.5 py-2.5 outline-none resize-none focus:border-black text-black font-medium transition"
                ></textarea>
              </div>

              {/* এগ্রিমেন্ট ও নিউজলেটার অপশন */}
              <div className="md:col-span-2 space-y-2.5 pt-2 text-zinc-500 font-medium">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="mt-0.5 accent-black rounded"
                  />
                  <span>Subscribe to newsletter for exclusive deals.</span>
                </label>
                
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 accent-black rounded"
                  />
                  <span>
                    I agree to the{" "}
                    <span className="text-black font-bold hover:underline">
                      Terms of Use
                    </span>{" "}
                    and{" "}
                    <span className="text-black font-bold hover:underline">
                      Privacy Policy
                    </span>.
                  </span>
                </label>
              </div>

              {/* সাইন আপ বাটন (সলিড ব্ল্যাক এবং শার্প কর্নার) */}
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-zinc-900 text-white py-3.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition duration-300"
                >
                  Sign Up
                </button>
              </div>

            </form>

            {/* সোশ্যাল ডিভাইডার */}
            <div className="my-8 flex items-center gap-3">
              <div className="flex-1 h-px bg-zinc-200" />
              <span className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
                OR REGISTER WITH
              </span>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>

            {/* সোশ্যাল বোতামসমূহ (শার্প কর্নার) */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto font-bold uppercase tracking-wider text-[10px]">
              <button className="border border-zinc-200 rounded-[4px] py-3 hover:bg-[#FAF9F6] transition text-black">
                Google
              </button>
              <button className="border border-zinc-200 rounded-[4px] py-3 hover:bg-[#FAF9F6] transition text-black">
                Facebook
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default RegisterPage;