
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-comments text-white text-lg"></i>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              ChatCampus
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">How It Works</a>
            <a href="#colleges" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Colleges</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">About</a>
            <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Start Chatting
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-orange-600 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Home</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">How It Works</a>
              <a href="#colleges" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Colleges</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">About</a>
              <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full">
                Start Chatting
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
