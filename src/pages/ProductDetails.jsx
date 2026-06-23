import { useState } from "react";
import {
  Check,
  CreditCard,
  Truck,
  MapPin,
  Phone,
  User,
} from "lucide-react";

function CheckoutPage() {

  const [step, setStep] = useState(1);

  return (
    <section className="min-h-screen bg-[#f8f8f8] py-10 px-4">

      <div className="max-w-7xl mx-auto bg-white border rounded-md shadow-sm">

        {/* TOP HEADER */}
        <div className="border-b px-6 lg:px-12 py-8">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">

            <p>Home</p>

            <span>›</span>

            <p>Cart</p>

            <span>›</span>

            <p className="text-gray-700 font-medium">
              Checkout
            </p>

          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-light text-gray-900">
            Checkout
          </h1>

          {/* STEPS */}
          <div className="flex items-center justify-center mt-10">

            {/* STEP 1 */}
            <div className="flex flex-col items-center relative">

              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                step >= 1
                  ? "border-orange-500 text-orange-500"
                  : "border-gray-300 text-gray-400"
              }`}>

                {step > 1 ? <Check size={18} /> : "1"}

              </div>

              <p className="text-sm mt-3 text-gray-700">
                Billing Address
              </p>

            </div>

            <div className="w-24 sm:w-40 h-[2px] bg-gray-200"></div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center relative">

              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                step >= 2
                  ? "border-orange-500 text-orange-500"
                  : "border-gray-300 text-gray-400"
              }`}>

                {step > 2 ? <Check size={18} /> : "2"}

              </div>

              <p className="text-sm mt-3 text-gray-700">
                Shipping Method
              </p>

            </div>

            <div className="w-24 sm:w-40 h-[2px] bg-gray-200"></div>

            {/* STEP 3 */}
            <div className="flex flex-col items-center relative">

              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                step >= 3
                  ? "border-orange-500 text-orange-500"
                  : "border-gray-300 text-gray-400"
              }`}>

                3

              </div>

              <p className="text-sm mt-3 text-gray-700">
                Payment Method
              </p>

            </div>

          </div>

        </div>

        {/* BODY */}
        <div className="grid lg:grid-cols-3 gap-10 p-6 lg:p-12">

          {/* LEFT FORM */}
          <div className="lg:col-span-2">

            {/* STEP 1 */}
            {step === 1 && (
              <div>

                <div className="flex items-center justify-between mb-8">

                  <h2 className="text-2xl font-semibold text-gray-900">
                    Billing Information
                  </h2>

                  <button className="text-orange-500 text-sm hover:underline">
                    Already Registered? Login
                  </button>

                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  {/* FIRST NAME */}
                  <div>

                    <label className="text-sm font-semibold text-gray-700 uppercase">
                      First Name
                    </label>

                    <div className="mt-2 border rounded px-4 py-3 flex items-center gap-3">

                      <User size={18} className="text-gray-400" />

                      <input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full outline-none text-sm"
                      />

                    </div>

                  </div>

                  {/* LAST NAME */}
                  <div>

                    <label className="text-sm font-semibold text-gray-700 uppercase">
                      Last Name
                    </label>

                    <div className="mt-2 border rounded px-4 py-3 flex items-center gap-3">

                      <User size={18} className="text-gray-400" />

                      <input
                        type="text"
                        placeholder="Enter last name"
                        className="w-full outline-none text-sm"
                      />

                    </div>

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="text-sm font-semibold text-gray-700 uppercase">
                      Email
                    </label>

                    <div className="mt-2 border rounded px-4 py-3 flex items-center gap-3">

                      <Mail size={18} className="text-gray-400" />

                      <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full outline-none text-sm"
                      />

                    </div>

                  </div>

                  {/* PHONE */}
                  <div>

                    <label className="text-sm font-semibold text-gray-700 uppercase">
                      Telephone
                    </label>

                    <div className="mt-2 border rounded px-4 py-3 flex items-center gap-3">

                      <Phone size={18} className="text-gray-400" />

                      <input
                        type="text"
                        placeholder="+8801XXXXXXXXX"
                        className="w-full outline-none text-sm"
                      />

                    </div>

                  </div>

                </div>

                {/* ADDRESS */}
                <div className="mt-5">

                  <label className="text-sm font-semibold text-gray-700 uppercase">
                    Address
                  </label>

                  <div className="mt-2 border rounded px-4 py-3 flex items-start gap-3">

                    <MapPin size={18} className="text-gray-400 mt-1" />

                    <textarea
                      rows="4"
                      placeholder="Enter full address"
                      className="w-full outline-none text-sm resize-none"
                    ></textarea>

                  </div>

                </div>

                {/* CITY + ZIP */}
                <div className="grid sm:grid-cols-2 gap-5 mt-5">

                  <div>

                    <label className="text-sm font-semibold text-gray-700 uppercase">
                      City
                    </label>

                    <input
                      type="text"
                      placeholder="City"
                      className="w-full border rounded px-4 py-3 mt-2 outline-none text-sm"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-semibold text-gray-700 uppercase">
                      Zip / Postal Code
                    </label>

                    <input
                      type="text"
                      placeholder="ZIP Code"
                      className="w-full border rounded px-4 py-3 mt-2 outline-none text-sm"
                    />

                  </div>

                </div>

                {/* COUNTRY */}
                <div className="mt-5">

                  <label className="text-sm font-semibold text-gray-700 uppercase">
                    Country
                  </label>

                  <select className="w-full border rounded px-4 py-3 mt-2 outline-none text-sm">

                    <option>Select Country</option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>

                  </select>

                </div>

                {/* CHECKBOX */}
                <div className="space-y-3 mt-8">

                  <label className="flex items-center gap-3 text-sm text-gray-600">

                    <input type="checkbox" />

                    Sign Up for Newsletter

                  </label>

                  <label className="flex items-center gap-3 text-sm text-gray-600">

                    <input type="checkbox" defaultChecked />

                    Ship to same Address

                  </label>

                </div>

                {/* BUTTON */}
                <div className="mt-10 flex justify-end">

                  <button
                    onClick={() => setStep(2)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded font-semibold transition"
                  >

                    CONTINUE

                  </button>

                </div>

              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Shipping Method
                </h2>

                <div className="space-y-5">

                  <div className="border rounded-lg p-5 flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <Truck className="text-orange-500" />

                      <div>

                        <h3 className="font-semibold">
                          Standard Delivery
                        </h3>

                        <p className="text-sm text-gray-500">
                          Delivery within 3-5 days
                        </p>

                      </div>

                    </div>

                    <input type="radio" checked readOnly />

                  </div>

                  <div className="border rounded-lg p-5 flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <Truck className="text-orange-500" />

                      <div>

                        <h3 className="font-semibold">
                          Express Delivery
                        </h3>

                        <p className="text-sm text-gray-500">
                          Delivery within 24 hours
                        </p>

                      </div>

                    </div>

                    <input type="radio" />

                  </div>

                </div>

                <div className="mt-10 flex justify-between">

                  <button
                    onClick={() => setStep(1)}
                    className="border px-8 py-4 rounded font-semibold hover:bg-gray-100"
                  >

                    BACK

                  </button>

                  <button
                    onClick={() => setStep(3)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded font-semibold transition"
                  >

                    CONTINUE

                  </button>

                </div>

              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Payment Method
                </h2>

                <div className="border rounded-lg p-6">

                  <div className="flex items-center gap-4">

                    <CreditCard className="text-orange-500" />

                    <div>

                      <h3 className="font-semibold">
                        Cash On Delivery
                      </h3>

                      <p className="text-sm text-gray-500">
                        Pay when product arrives
                      </p>

                    </div>

                  </div>

                </div>

                <div className="mt-10 flex justify-between">

                  <button
                    onClick={() => setStep(2)}
                    className="border px-8 py-4 rounded font-semibold hover:bg-gray-100"
                  >

                    BACK

                  </button>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded font-semibold transition">

                    PLACE ORDER

                  </button>

                </div>

              </div>
            )}

          </div>

          {/* ORDER SUMMARY */}
          <div>

            <div className="border rounded-lg p-6 bg-[#fafafa] sticky top-10">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-semibold text-gray-900">
                  Order Summary
                </h2>

                <button className="text-sm text-gray-500 hover:text-orange-500">
                  Edit
                </button>

              </div>

              {/* PRODUCT */}
              <div className="flex gap-4 pb-6 border-b">

                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500"
                  alt="product"
                  className="w-24 h-24 rounded object-cover"
                />

                <div>

                  <h3 className="font-semibold text-gray-900">
                    Modern Sofa
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    Premium furniture for modern homes.
                  </p>

                  <p className="text-sm text-gray-700 mt-3">
                    Qty: 1
                  </p>

                </div>

              </div>

              {/* PRICE */}
              <div className="space-y-4 mt-6">

                <div className="flex items-center justify-between text-gray-600">

                  <p>Subtotal</p>

                  <p>$250</p>

                </div>

                <div className="flex items-center justify-between text-gray-600">

                  <p>Shipping</p>

                  <p>$10</p>

                </div>

                <div className="flex items-center justify-between text-xl font-bold text-gray-900 border-t pt-4">

                  <p>Total</p>

                  <p>$260</p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CheckoutPage;