import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Clock } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-semibold text-timecoin-700"
        >
          <Clock className="w-6 h-6 text-[#1272A6]" />
          <span className="tracking-tight text-[#1272A6]">TimeCoin</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-timecoin-600 transition-colors">
            About
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium text-foreground/80 hover:text-timecoin-600 transition-colors">
            How It Works
          </Link>
          <Link to="/categories" className="text-sm font-medium text-foreground/80 hover:text-timecoin-600 transition-colors">
            Categories
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="btn btn-outline btn-sm rounded-full">
            Sign In
          </Link>
          <Link to="/register" className="btn btn-primary btn-sm rounded-full">
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border/50 py-4 px-6 flex flex-col space-y-4 animate-fade-down">
          <Link 
            to="/about" 
            className="text-sm font-medium text-foreground/80 hover:text-timecoin-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-sm font-medium text-foreground/80 hover:text-timecoin-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            to="/categories" 
            className="text-sm font-medium text-foreground/80 hover:text-timecoin-600 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Categories
          </Link>
          <div className="flex flex-col space-y-2 pt-2">
            <Link to="/login" className="btn btn-outline w-full rounded-full">
              Sign In
            </Link>
            <Link to="/register" className="btn btn-primary w-full rounded-full">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
