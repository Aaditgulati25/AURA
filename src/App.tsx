import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, ChevronDown, X } from 'lucide-react';
import AnimatedLogo from './components/AnimatedLogo';
import HeroSection from './components/HeroSection';
import SignatureCollections from './components/SignatureCollections';
import CategoryVideos from './components/CategoryVideos';
import BrandStory from './components/BrandStory';
import Newsletter from './components/Newsletter';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-900" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-900" />
                )}
              </button>
              <div className="hidden lg:flex items-center space-x-8">
                <NavLink>Collections</NavLink>
                <NavLink>New Arrivals</NavLink>
                <NavLink>Women</NavLink>
                <NavLink>Men</NavLink>
              </div>
            </div>
            
            <AnimatedLogo />

            <div className="flex items-center space-x-4">
              <button className="p-2">
                <Search className="h-5 w-5 text-gray-900" />
              </button>
              <button className="p-2">
                <ShoppingBag className="h-5 w-5 text-gray-900" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
            <MobileNavLink>Collections</MobileNavLink>
            <MobileNavLink>New Arrivals</MobileNavLink>
            <MobileNavLink>Women</MobileNavLink>
            <MobileNavLink>Men</MobileNavLink>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <SignatureCollections />
        <CategoryVideos />
        <BrandStory />
        <Newsletter />
      </main>
    </div>
  );
}

function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="text-sm font-light tracking-wide text-gray-900 hover:text-gray-600 transition-colors flex items-center">
      {children}
      <ChevronDown className="h-4 w-4 ml-1" />
    </a>
  );
}

function MobileNavLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="block px-3 py-2 text-base font-light text-gray-900 hover:bg-gray-50 hover:text-gray-900 transition-colors"
    >
      {children}
    </a>
  );
}

export default App;