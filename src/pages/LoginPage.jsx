import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("password"); // 'password' or 'otp'
  
  // OTP Code states
  const [timer, setTimer] = useState(0);
  const [isSendingCode, setIsSendingCode] = useState(false);

  const [formData, setFormData] = useState({
    identifier: "", // Can be email or phone
    password: "",
    verificationCode: "",
  });

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendCode = () => {
    setIsSendingCode(true);
    setTimeout(() => {
      setTimer(60);
      setIsSendingCode(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully to HOMTIDY!");
    navigate("/"); // লগইন সফল হলে হোম পেজে নিয়ে যাবে
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
            New member?{" "}
            <Link to="/register" className="text-black font-bold hover:underline">
              Register
            </Link>{" "}
            here.
          </span>
        </div>

        {/* ২. বডি সেকশন */}
        <div className="p-6 md:p-10">
          <div className="max-w-md mx-auto">
            
            <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-6 text-center">
              Welcome to HOMTIDY! Please Login.
            </h2>

            {/* লগইন মেথড ট্যাব (ক্লিন ব্ল্যাক থিম) */}
            <div className="flex border-b border-zinc-200 mb-6 text-xs font-bold uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setLoginMethod("password")}
                className={`flex-1 pb-3 font-bold tracking-wider uppercase border-b-2 transition ${
                  loginMethod === "password"
                    ? "border-black text-black"
                    : "border-transparent text-zinc-400 hover:text-black"
                }`}
              >
                Login with Password
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod("otp")}
                className={`flex-1 pb-3 font-bold tracking-wider uppercase border-b-2 transition ${
                  loginMethod === "otp"
                    ? "border-black text-black"
                    : "border-transparent text-zinc-400 hover:text-black"
                }`}
              >
                Login with SMS Code
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-xs text-stone-700">
              
              {/* ফোন অথবা ইমেইল ইনপুট */}
              <div>
                <label className="font-bold text-stone-600 uppercase tracking-wider">
                  Phone Number or Email *
                </label>
                <div className="flex items-center border border-zinc-200 rounded-[4px] px-3.5 py-2.5 mt-1.5 focus-within:border-black bg-white transition">
                  <Mail size={15} className="text-zinc-400 mr-2" />
                  <input
                    type="text"
                    name="identifier"
                    required
                    value={formData.identifier}
                    placeholder="Please enter your Phone or Email"
                    onChange={handleChange}
                    className="w-full outline-none text-black font-semibold bg-transparent"
                  />
                </div>
              </div>

              {/* ডাইনামিক ফিল্ড (পাসওয়ার্ড অথবা এসএমএস ওটিপি কোড) */}
              {loginMethod === "password" ? (
                <div>
                  <div className="flex justify-between items-center">
                    <label className="font-bold text-stone-600 uppercase tracking-wider">Password *</label>
                    <button
                      type="button"
                      className="text-xs text-zinc-400 hover:text-black font-bold uppercase tracking-wider transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="flex items-center border border-zinc-200 rounded-[4px] px-3.5 py-2.5 mt-1.5 focus-within:border-black bg-white transition">
                    <Lock size={15} className="text-zinc-400 mr-2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={formData.password}
                      placeholder="Please enter your password"
                      onChange={handleChange}
                      className="w-full outline-none text-black font-semibold bg-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-zinc-400 hover:text-black transition"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="font-bold text-stone-600 uppercase tracking-wider">SMS Verification Code *</label>
                  <div className="flex gap-2 mt-1.5">
                    <div className="flex-1 flex items-center border border-zinc-200 rounded-[4px] px-3.5 py-2.5 focus-within:border-black bg-white transition">
                      <input
                        type="text"
                        name="verificationCode"
                        required
                        value={formData.verificationCode}
                        placeholder="6-digit SMS Code"
                        onChange={handleChange}
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
              )}

              {/* লগইন বাটন (সলিড ব্ল্যাক এবং শার্প কর্নার) */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-zinc-900 text-white py-3.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition duration-300"
                >
                  Login
                </button>
              </div>

            </form>

            {/* সোশ্যাল ডিভাইডার */}
            <div className="my-8 flex items-center gap-3">
              <div className="flex-1 h-px bg-zinc-200" />
              <span className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
                OR LOGIN WITH
              </span>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>

            {/* সোশ্যাল বোতামসমূহ (শার্প কর্নার) */}
            <div className="grid grid-cols-2 gap-3 font-bold uppercase tracking-wider text-[10px]">
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

export default LoginPage;