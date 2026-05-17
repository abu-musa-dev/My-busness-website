import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center px-4">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1544457007-88ce42646278?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="home"
          />
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-12 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Create Account
          </h2>

          <p className="text-gray-500 text-sm mt-1 mb-6">
            Join HOMTIDY and start shopping
          </p>

          <form className="space-y-4">

            {/* NAME */}
            <div className="flex items-center border rounded-xl px-3 py-2">
              <User size={18} className="text-gray-400" />
              <input
                name="fullName"
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-2 outline-none text-sm"
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center border rounded-xl px-3 py-2">
              <Mail size={18} className="text-gray-400" />
              <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-2 outline-none text-sm"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex items-center border rounded-xl px-3 py-2">
              <Lock size={18} className="text-gray-400" />

              <input
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-2 outline-none text-sm"
              />

              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-500" />
                ) : (
                  <Eye size={18} className="text-gray-500" />
                )}
              </button>
            </div>

            {/* TERMS */}
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="agree"
                onChange={handleChange}
              />
              I agree to Terms
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              Create Account <ArrowRight size={18} />
            </button>

          </form>

          {/* LOGIN LINK */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Already have account?{" "}
            <Link to="/login" className="text-orange-500 font-semibold">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default RegisterPage;