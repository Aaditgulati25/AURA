import React from 'react';

const products = [
  {
    id: 1,
    name: 'Silk Evening Dress',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Cashmere Sweater',
    price: '$420',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Tailored Blazer',
    price: '$680',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Wool Coat',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80',
  },
];

export default function FeaturedCollection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-gray-500">Curated pieces for the modern wardrobe</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className={`group animate-scale-in delay-${index * 100}`}>
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 py-3 text-sm tracking-wider opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover-lift">
                  QUICK VIEW
                </button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}