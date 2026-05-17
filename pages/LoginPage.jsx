import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT */}
        <div className="hidden lg:block relative">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Furniture"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">

            <div className="flex items-center gap-2 mb-3">
              <ShoppingBag size={28} />
              <h1 className="text-3xl font-bold">HOMTIDY</h1>
            </div>

            <p className="text-sm text-gray-200">
              Premium furniture & home decor for modern living.
            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-12 flex flex-col justify-center">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              Login to continue your shopping experience.
            </p>
          </div>

          <form className="space-y-4">

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>

              <div className="flex items-center border rounded-xl px-3 py-2 mt-1 focus-within:border-green-500">
                <Mail size={18} className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full outline-none px-2 text-sm"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <div className="flex justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <button className="text-xs text-gray-500 hover:text-green-600">
                  Forgot?
                </button>
              </div>

              <div className="flex items-center border rounded-xl px-3 py-2 mt-1 focus-within:border-green-500">
                <Lock size={18} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full outline-none px-2 text-sm"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-500" />
                  ) : (
                    <Eye size={18} className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              Login <ArrowRight size={18} />
            </button>

          </form>

          {/* DIVIDER */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* SOCIAL */}
          <div className="grid grid-cols-2 gap-3">

            <button className="border rounded-xl py-2 text-sm hover:bg-gray-50">
              Google
            </button>

            <button className="border rounded-xl py-2 text-sm hover:bg-gray-50">
              Facebook
            </button>

          </div>

          {/* SIGNUP */}
          <p className="text-center text-sm text-gray-500 mt-6">
            No account?{" "}
            <Link to="/register" className="text-green-600 font-semibold">
              Sign up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;