import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

import { Link } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex relative">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
            alt="Furniture"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-10 text-white">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag size={32} />
              <h1 className="text-4xl font-bold">
                HOMTIDY
              </h1>
            </div>

            <p className="text-lg text-gray-200 leading-relaxed">
              Discover premium furniture and modern home decor
              crafted to make your living space elegant and stylish.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-14 flex flex-col justify-center">

          {/* Logo */}
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-900">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mt-3">
              Login to continue shopping with HOMTIDY.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <div className="flex items-center border rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-black">
                <Mail className="text-gray-400" size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none px-3"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-medium text-gray-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="flex items-center border rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-black">
                <Lock className="text-gray-400" size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full outline-none px-3"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-gray-500" size={20} />
                  ) : (
                    <Eye className="text-gray-500" size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between flex-wrap gap-3">

              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <p className="text-sm text-gray-500">
                Secure login protected
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
            >
              Login
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-gray-400 text-sm">
              OR CONTINUE WITH
            </span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">

            <button className="border py-3 rounded-2xl font-medium hover:bg-gray-50 transition">
              Google
            </button>

            <button className="border py-3 rounded-2xl font-medium hover:bg-gray-50 transition">
              Facebook
            </button>
          </div>

          {/* Signup */}
          <p className="text-center text-gray-500 mt-8">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-black font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;