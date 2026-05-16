function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center px-6 lg:px-16 pt-32">

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <p className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-6">
            🛍️ Trusted Home & Daily Products Shop
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            Everything
            <span className="block text-orange-500">
              For Your Home
            </span>
          </h1>

          <p className="text-gray-600 text-lg mt-8 leading-relaxed max-w-xl">
            Discover quality home essentials, kitchen products,
            electronics, fashion items, furniture, and daily needs
            at the best prices for your family.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-xl">
              Shop Now
            </button>

            <button className="border border-gray-300 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition duration-300">
              View Products
            </button>

          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 flex-wrap">

            <div>
              <h2 className="text-3xl font-bold text-gray-900">500+</h2>
              <p className="text-gray-500">Products Available</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">2K+</h2>
              <p className="text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">24/7</h2>
              <p className="text-gray-500">Customer Support</p>
            </div>

          </div>

        </div>

        {/* Right Side Cards */}
        <div className="relative flex justify-center">

          <div className="w-[360px] rounded-[40px] bg-white shadow-2xl border border-gray-200 p-8 space-y-5">

            <div className="bg-orange-100 p-5 rounded-3xl">
              <h3 className="text-2xl font-semibold text-gray-900">
                🛋️ Home Furniture
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Stylish and comfortable furniture for every room.
              </p>
            </div>

            <div className="bg-yellow-100 p-5 rounded-3xl">
              <h3 className="text-2xl font-semibold text-gray-900">
                🍳 Kitchen Essentials
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Premium kitchen tools and daily cooking products.
              </p>
            </div>

            <div className="bg-green-100 p-5 rounded-3xl">
              <h3 className="text-2xl font-semibold text-gray-900">
                📱 Electronics
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                Smart gadgets and useful home electronics.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero