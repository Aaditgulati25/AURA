import React from 'react';

export default function BrandStory() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80"
              alt="Brand Story"
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded in 2024, Aura represents the pinnacle of modern luxury fashion. Our commitment to exceptional craftsmanship and sustainable practices sets us apart in the industry. Each piece is thoughtfully designed and meticulously crafted to stand the test of time.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in creating timeless pieces that transcend seasonal trends, focusing on quality materials and impeccable attention to detail. Our collections are designed for those who appreciate subtle sophistication and enduring style.
            </p>
            <button className="text-gray-900 border border-gray-900 px-8 py-3 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}