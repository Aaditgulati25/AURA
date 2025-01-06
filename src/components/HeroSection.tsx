import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover hover-scale"
        />
        <div className="absolute inset-0 luxury-overlay" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wider text-white mb-6 animate-fade-up">
            Timeless Elegance
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 font-light animate-fade-up delay-200">
            Discover our new collection of refined essentials
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 text-sm tracking-wider hover-lift animate-fade-up delay-300">
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
}