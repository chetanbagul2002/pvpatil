import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setScrolled(window.scrollY > heroHeight - 70);
      } else {
        setScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 md:p-6 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-md' 
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link 
          to="/" 
          className={`text-2xl md:text-3xl font-bold cursor-pointer transition-colors duration-300 ${
            scrolled || !isHomePage ? 'text-green-700' : 'text-white'
          }`}
        >
          Logo
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-lg font-semibold">
          <Link 
            to="/" 
            className={`hover:text-green-600 transition-colors duration-300 ${
              scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-green-600 transition-colors duration-300 ${
              scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
            }`}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`hover:text-green-600 transition-colors duration-300 ${
              scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
            }`}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-green-600 transition-colors duration-300 ${
              scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`focus:outline-none transition-colors duration-300 ${
              scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 pt-20 px-4 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 text-xl">
          <Link 
            to="/" 
            className="text-gray-800 hover:text-green-600 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-800 hover:text-green-600 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className="text-gray-800 hover:text-green-600 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-800 hover:text-green-600 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;