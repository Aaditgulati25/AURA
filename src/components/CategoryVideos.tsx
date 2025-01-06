import React from 'react';

export default function CategoryVideos() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[600px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/451991234.sd.mp4?s=341d4d6c5e2597674e5b3c4c2a075a66c238b15d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative h-[600px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/403890334.sd.mp4?s=d4982692c7767b4f3f1c5c086c0626fc0e188858&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* Centered buttons over both videos */}
      <div className="absolute inset-0 flex items-center justify-center gap-8 z-10">
        <button className="bg-white/90 backdrop-blur-sm text-gray-900 px-12 py-4 text-sm tracking-wider hover-lift animate-fade-up shadow-lg">
          WOMEN'S COLLECTION
        </button>
        <button className="bg-white/90 backdrop-blur-sm text-gray-900 px-12 py-4 text-sm tracking-wider hover-lift animate-fade-up delay-200 shadow-lg">
          MEN'S COLLECTION
        </button>
      </div>
    </section>
  );
}