import React from 'react';

const collections = [
  {
    id: 1,
    name: 'The Essentials',
    price: 'Starting at $290',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Evening Wear',
    price: 'Starting at $590',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Autumn Collection',
    price: 'Starting at $420',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80',
  }
];

export default function SignatureCollections() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Signature Collections</h2>
          <p className="text-gray-500">Timeless pieces that define the essence of Aura</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={collection.id} className={`group animate-scale-in delay-${index * 100}`}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                <div className="absolute inset-x-6 bottom-6 text-white text-center">
                  <h3 className="text-xl font-light mb-2">{collection.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{collection.price}</p>
                  <button className="bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-3 text-sm tracking-wider hover-lift w-full">
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}