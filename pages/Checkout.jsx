import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../src/data/products.json";
import Navbar from "../src/components/Navbar";

function Checkout() {
  const { id } = useParams();

  const product = products.find((p) => p.id == id);

  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold text-green-700">
        Product Not Found
      </div>
    );
  }

  const deliveryCost = 10;
  const subtotal = product.price * quantity;
  const total = subtotal + deliveryCost;

  return (
    <section className="min-h-screen mt[-40px] bg-gradient-to-br from-green-50 to-white py-6 px-4">
      <Navbar></Navbar>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-5">

        {/* LEFT */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />

          <div className="p-5">

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              {product.category}
            </span>

            <h2 className="text-2xl font-bold mt-3 text-gray-900">
              {product.name}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Premium quality product with modern design.
            </p>

            {/* Quantity */}
            <div className="mt-5">

              <h3 className="font-semibold mb-3 text-gray-800">
                Quantity
              </h3>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    quantity > 1 && setQuantity(quantity - 1)
                  }
                  className="w-9 h-9 rounded-full bg-green-100 hover:bg-green-600 hover:text-white transition"
                >
                  -
                </button>

                <span className="text-xl font-bold text-green-700">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="w-9 h-9 rounded-full bg-green-100 hover:bg-green-600 hover:text-white transition"
                >
                  +
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl shadow-lg p-5 border border-green-100">

          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Checkout
          </h2>

          {/* Form */}
          <form className="space-y-3">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-green-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-green-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-green-500"
            />

            <textarea
              placeholder="Delivery Address"
              className="w-full border border-gray-200 p-3 rounded-xl h-24 outline-none focus:border-green-500"
            />

          </form>

          {/* Payment */}
          <div className="mt-6">

            <h3 className="font-bold mb-4 text-lg">
              Payment Method
            </h3>

            <div className="space-y-3">

              {[
                { key: "cod", title: "Cash On Delivery" },
                { key: "bkash", title: "bKash" },
                { key: "nagad", title: "Nagad" },
                { key: "card", title: "Card Payment" },
              ].map((method) => (

                <label
                  key={method.key}
                  className={`flex items-center justify-between border rounded-xl p-3 cursor-pointer transition ${
                    paymentMethod === method.key
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-green-400"
                  }`}
                >

                  <span className="font-medium">
                    {method.title}
                  </span>

                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === method.key}
                    onChange={() => setPaymentMethod(method.key)}
                    className="accent-green-600"
                  />

                </label>

              ))}

            </div>

          </div>

          {/* Dynamic Inputs */}
          {(paymentMethod === "bkash" || paymentMethod === "nagad") && (
            <div className="mt-4 space-y-3">

              <input
                type="text"
                placeholder={
                  paymentMethod === "bkash"
                    ? "bKash Number"
                    : "Nagad Number"
                }
                className="w-full border p-3 rounded-xl outline-none focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Transaction ID"
                className="w-full border p-3 rounded-xl outline-none focus:border-green-500"
              />

            </div>
          )}

          {paymentMethod === "card" && (
            <div className="mt-4 space-y-3">

              <input
                type="text"
                placeholder="Card Number"
                className="w-full border p-3 rounded-xl outline-none focus:border-green-500"
              />

              <div className="grid grid-cols-2 gap-3">

                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border p-3 rounded-xl outline-none focus:border-green-500"
                />

                <input
                  type="text"
                  placeholder="CVV"
                  className="border p-3 rounded-xl outline-none focus:border-green-500"
                />

              </div>

            </div>
          )}

          {/* Summary */}
          <div className="mt-6 bg-green-50 rounded-2xl p-4 space-y-3">

            <div className="flex justify-between text-sm">
              <span>Price</span>
              <span>${product.price}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Quantity</span>
              <span>{quantity}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Delivery</span>
              <span>${deliveryCost}</span>
            </div>

            <div className="flex justify-between border-t pt-3 text-lg font-bold text-green-700">
              <span>Total</span>
              <span>${total}</span>
            </div>

          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white py-3 rounded-xl font-semibold transition">
            Confirm Order
          </button>

        </div>

      </div>
    </section>
  );
}

export default Checkout;