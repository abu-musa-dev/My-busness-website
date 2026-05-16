import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

import { Link } from "react-router-dom";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({}); // For form validation (added for realism)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      // Here you would integrate with your backend for registration
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-7xl bg-white rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 transform scale-95 md:scale-100 grid grid-cols-1 lg:grid-cols-2 animate-pop-in">

        {/* Left Side - Promotional Banner */}
        <div className="hidden lg:flex relative h-full min-h-[600px] xl:min-h-[700px]">
          <img
            src="https://images.unsplash.com/photo-1544457007-88ce42646278?q=80&w=1800&auto=format&fit=crop" // More elegant furniture image
            alt="Modern Furniture Collection"
            className="w-full h-full object-cover absolute inset-0 filter brightness-90"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 via-black/40 to-transparent flex flex-col justify-between p-12 text-white">
            <div className="flex items-center gap-4 animate-fade-in-up">
              <ShoppingBag className="text-orange-300" size={40} />
              <h1 className="text-5xl font-extrabold tracking-wide">
                HOMTIDY
              </h1>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h3 className="text-4xl font-bold mb-4 leading-tight">
                Unlock Your Perfect Home.
              </h3>
              <p className="text-lg text-gray-100 leading-relaxed max-w-md">
                Create your account today and embark on a seamless journey to furnish your space with modern elegance and comfort.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="p-8 md:p-14 lg:p-16 flex flex-col justify-center animate-fade-in-up delay-300">

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
              Create Your Account ✨
            </h2>

            <p className="text-lg text-gray-600">
              Join HOMTIDY and transform your living experience.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label htmlFor="fullName" className="block mb-2 font-semibold text-gray-800">
                Full Name
              </label>
              <div className={`flex items-center border-2 rounded-2xl px-5 py-3
                                 ${errors.fullName ? 'border-red-500' : 'border-gray-200 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500'}
                                 transition-all duration-300`}
              >
                <User className="text-gray-400" size={20} />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full outline-none px-4 text-gray-800 bg-transparent"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">
                Email Address
              </label>
              <div className={`flex items-center border-2 rounded-2xl px-5 py-3
                                 ${errors.email ? 'border-red-500' : 'border-gray-200 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500'}
                                 transition-all duration-300`}
              >
                <Mail className="text-gray-400" size={20} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none px-4 text-gray-800 bg-transparent"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block mb-2 font-semibold text-gray-800">
                Password
              </label>
              <div className={`flex items-center border-2 rounded-2xl px-5 py-3
                                 ${errors.password ? 'border-red-500' : 'border-gray-200 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500'}
                                 transition-all duration-300`}
              >
                <Lock className="text-gray-400" size={20} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full outline-none px-4 text-gray-800 bg-transparent"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Terms */}
            <label className="flex items-center gap-3 text-gray-600 text-base cursor-pointer">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-orange-500 rounded-md focus:ring-orange-500 border-gray-300"
              />
              <span className="font-medium">
                I agree to <Link to="/terms" className="text-orange-500 hover:underline">Terms & Conditions</Link>
              </span>
            </label>
            {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}


            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-2xl text-xl font-bold flex items-center justify-center gap-3
                         hover:scale-[1.02] active:scale-98 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Create Account
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-gray-500 text-sm font-medium tracking-wide">
              OR REGISTER WITH
            </span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 border-2 border-gray-200 py-3 rounded-2xl font-semibold text-gray-700
                               hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 transform hover:scale-[1.01]"
            >
              <img src="https://www.svgrepo.com/show/303102/google-icon-logo.svg" alt="Google" className="w-6 h-6" />
              Google
            </button>

            <button className="flex items-center justify-center gap-3 border-2 border-gray-200 py-3 rounded-2xl font-semibold text-gray-700
                               hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 transform hover:scale-[1.01]"
            >
              <img src="https://www.svgrepo.com/show/303111/facebook-1-logo.svg" alt="Facebook" className="w-6 h-6" />
              Facebook
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-10">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 font-bold hover:underline hover:text-orange-600 transition-colors"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;