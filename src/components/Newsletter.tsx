import React, { useState, useEffect } from 'react';

export default function Newsletter() {
  const [showSubscribe, setShowSubscribe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubscribe(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Join Our World</h2>
          <p className="text-gray-500 mb-8">
            Subscribe to receive exclusive updates, early access to new collections, and personalized style recommendations.
          </p>
          <form className={`flex gap-4 max-w-md mx-auto transition-all duration-700 ${showSubscribe ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 text-sm"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-8 py-3 text-sm tracking-wider hover-lift"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}