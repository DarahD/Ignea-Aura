import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen relative">
      <section 
        className="h-screen w-full relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("/IGNEA-AURA-LP1 copy.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 text-center text-white px-4 mt-96">
          <div className="pt-14">
            <p className="text-lg md:text-xl mb-3 tracking-wide">Luxury Candles & Home Fragrances</p>
          </div>
          <button className="bg-white bg-opacity-60 text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-50 transition">
            Shop Collection
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;