import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    badge: "Explore Our Items",
    title: "The Ultimate Sleep Retreat",
    description: "Special Offer: Unlock Your Discount Now!",
    image: "https://wordpressthemes.live/WCG10/WCM234_furnista/furniture04/wp-content/uploads/revslider/slider/Slider-banner-02.jpg",
    buttonText: "Discover More",
  },
  {
    id: 2,
    badge: "Nordic Craftsmanship",
    title: "The Art of Minimalist Living",
    description: "Discover handcrafted statements pieces for your home.",
    image: "https://wordpressthemes.live/WCG10/WCM234_furnista/furniture04/wp-content/uploads/revslider/slider/Slider-banner-01.jpg",
    buttonText: "Shop Collection",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  // অটো-প্লে ফিচার (প্রতি ৫ সেকেন্ড পর স্লাইড পরিবর্তন হবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[320px] xs:h-[350px] sm:h-[480px] md:h-[580px] lg:h-[700px] overflow-hidden bg-white">
      
      {/* স্লাইডসমূহ */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"
            }`}
          >
            {/* ব্যাকগ্রাউন্ড ইমেজ */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              {/* মোবাইল এবং ডেস্কটপের জন্য মানানসই ওভারলে */}
              <div className="absolute inset-0 bg-black/45 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/40 lg:to-transparent"></div>
            </div>

            {/* টেক্সট কন্টেন্ট কন্টেইনার (মোবাইল ডিভাইসের জন্য স্পেসিং কমানো হয়েছে) */}
            <div className="max-w-7xl mx-auto w-full h-full px-5 sm:px-12 lg:px-16 relative z-10 flex items-center">
              <div className="text-left space-y-3 sm:space-y-5 lg:max-w-2xl animate-fade-in">
                
                {/* সাব-টাইটেল বা ব্যাজ */}
                <span className="text-[9px] sm:text-xs font-bold tracking-[0.25em] text-white/90 uppercase block">
                  {slide.badge}
                </span>

                {/* মূল হেডিং (মোবাইল স্ক্রিনে text-2xl বা text-3xl এবং ডেস্কটপে text-6xl) */}
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.2] sm:leading-[1.1] tracking-normal max-w-xs sm:max-w-xl">
                  {slide.title}
                </h1>

                {/* ডেসক্রিপশন */}
                <p className="text-white/80 text-[11px] sm:text-sm md:text-base leading-relaxed tracking-wide font-normal max-w-[260px] sm:max-w-sm">
                  {slide.description}
                </p>

                {/* টেরাকোটা বাটন (মোবাইলে কিছুটা ছোট করা হয়েছে যাতে স্ক্রিন নষ্ট না করে) */}
                <div className="pt-1.5 sm:pt-4">
                  <button className="bg-[#C68571] hover:bg-[#b07360] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-5 py-3 sm:px-8 sm:py-4 rounded-[4px] transition-all duration-300 shadow-lg active:scale-95">
                    {slide.buttonText}
                  </button>
                </div>

              </div>
            </div>

          </div>
        );
      })}

      {/* ইন্ডিকেটর ডটস */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-auto max-w-7xl mx-auto w-full px-5 sm:px-12 lg:px-16 z-20 flex justify-center lg:justify-start">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === current ? "w-6 bg-white" : "w-1 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

export default Hero;