function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-white to-[#d1fae5] flex items-center px-6 lg:px-16 pt-32">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-300/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-green-100 px-5 py-2 rounded-full shadow-sm mb-7">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

            <p className="text-green-700 font-medium text-sm">
              Trusted Modern Lifestyle Store
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-gray-900">

            Elevate Your
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
              Everyday Living
            </span>

          </h1>

          {/* Description */}
          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
            Discover premium furniture, elegant home décor,
            smart electronics, kitchen essentials, and daily
            lifestyle products crafted to make your home
            beautiful, comfortable, and modern.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 text-white px-9 py-4 rounded-full font-semibold shadow-2xl hover:scale-105 transition duration-300">

              <span className="relative z-10">
                Shop Collection
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-700 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            </button>

            <button className="bg-white/80 backdrop-blur-md border border-green-100 px-9 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition duration-300 shadow-md">
              Explore Products
            </button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 mt-14 max-w-2xl">

            <div className="bg-white/70 backdrop-blur-md border border-white shadow-lg rounded-3xl p-5 hover:-translate-y-1 transition duration-300">

              <h2 className="text-3xl font-black text-gray-900">
                500+
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Premium Products
              </p>

            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white shadow-lg rounded-3xl p-5 hover:-translate-y-1 transition duration-300">

              <h2 className="text-3xl font-black text-gray-900">
                2K+
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Happy Clients
              </p>

            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white shadow-lg rounded-3xl p-5 hover:-translate-y-1 transition duration-300">

              <h2 className="text-3xl font-black text-gray-900">
                24/7
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Fast Support
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">

          {/* Main Glass Card */}
          <div className="relative w-[420px] bg-white/70 backdrop-blur-2xl border border-white/70 rounded-[40px] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

            {/* Top */}
            <div className="flex items-center justify-between mb-7">

              <div>
                <p className="text-sm text-gray-500">
                  Featured Collection
                </p>

                <h2 className="text-2xl font-black text-gray-900 mt-1">
                  Smart Living
                </h2>
              </div>

              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                New
              </div>

            </div>

            {/* Cards */}
            <div className="space-y-5">

              {/* Card */}
              <div className="group bg-gradient-to-r from-green-100 to-emerald-50 p-5 rounded-3xl hover:shadow-xl transition duration-300">

                <div className="flex items-center justify-between">

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      🛋️ Furniture
                    </h3>

                    <p className="text-sm text-gray-600 mt-2 leading-6">
                      Elegant furniture crafted for modern homes.
                    </p>
                  </div>

                  <div className="text-3xl group-hover:scale-110 transition">
                    →
                  </div>

                </div>

              </div>

              {/* Card */}
              <div className="group bg-gradient-to-r from-emerald-100 to-green-50 p-5 rounded-3xl hover:shadow-xl transition duration-300">

                <div className="flex items-center justify-between">

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      🍳 Kitchen
                    </h3>

                    <p className="text-sm text-gray-600 mt-2 leading-6">
                      Smart kitchen essentials for daily cooking.
                    </p>
                  </div>

                  <div className="text-3xl group-hover:scale-110 transition">
                    →
                  </div>

                </div>

              </div>

              {/* Card */}
              <div className="group bg-gradient-to-r from-lime-100 to-green-50 p-5 rounded-3xl hover:shadow-xl transition duration-300">

                <div className="flex items-center justify-between">

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      📱 Electronics
                    </h3>

                    <p className="text-sm text-gray-600 mt-2 leading-6">
                      Innovative gadgets and home electronics.
                    </p>
                  </div>

                  <div className="text-3xl group-hover:scale-110 transition">
                    →
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Floating Card */}
          <div className="absolute -top-8 -right-5 bg-white shadow-2xl rounded-3xl px-6 py-5 border border-green-100 backdrop-blur-md">

            <h3 className="text-4xl font-black text-green-600">
              30%
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Weekly Discount
            </p>

          </div>

          {/* Bottom Floating */}
          <div className="absolute -bottom-8 -left-5 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-5 rounded-3xl shadow-2xl">

            <p className="text-sm opacity-90">
              Fast Delivery
            </p>

            <h3 className="text-2xl font-bold mt-1">
              Nationwide
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;