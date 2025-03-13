import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Clock } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      } bg-[#F8FAFC]`}
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
          <Link
            to="/about"
            className="text-sm font-medium text-foreground/80 hover:text-[#1272A6] transition-colors"
          >
            About
          </Link>
          <Link
            to="/how-it-works"
            className="text-sm font-medium text-foreground/80 hover:text-[#1272A6] transition-colors"
          >
            How It Works
          </Link>
          <Link
            to="/categories"
            className="text-sm font-medium text-foreground/80 hover:text-[#1272A6] transition-colors"
          >
            Categories
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="btn btn-outline btn-sm rounded-full 
               bg-white/95 hover:bg-gray-100 
               border-2 border-solid hover:border-gray-400 
               text-gray-700 hover:text-gray-900 
               font-semibold 
               px-6 py-2 
               transition-all duration-300 
               ease-in-out
               active:bg-gray-200"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="btn btn-primary btn-sm rounded-full 
               bg-[#1272A6] hover:bg-[#0F5C87] 
               text-white 
               font-semibold 
               px-6 py-2 
               transition-all duration-300 
               ease-in-out 
               shadow-md hover:shadow-lg
               active:bg-[#0D4A6E]"
          >
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
        <div
          className="md:hidden absolute top-full left-0 right-0 
                  glass border-t border-border/50 
                  py-6 px-6 
                  flex flex-col space-y-6 
                  animate-fade-down 
                  bg-white/95 backdrop-blur-md 
                  shadow-lg z-50"
        >
          <Link
            to="/about"
            className="text-sm font-medium 
                 text-gray-700 hover:text-[#1272A6] 
                 transition-colors duration-200 
                 py-2 px-3 
                 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/how-it-works"
            className="text-sm font-medium 
                 text-gray-700 hover:text-[#1272A6] 
                 transition-colors duration-200 
                 py-2 px-3 
                 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            to="/categories"
            className="text-sm font-medium 
                 text-gray-700 hover:text-[#1272A6] 
                 transition-colors duration-200 
                 py-2 px-3 
                 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Categories
          </Link>
          <div className="flex flex-row space-x-4 pt-4 border-t border-gray-200">
            <Link
              to="/login"
              className="btn btn-outline w-full rounded-full 
               bg-white/95 hover:bg-gray-100 
               border-gray-300 hover:border-gray-400 
               text-gray-700 hover:text-gray-900 
               py-2 px-4 
               transition-all duration-200 
               font-medium 
               focus:ring-2 focus:ring-gray-300 focus:ring-offset-1
               active:bg-gray-200"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="btn btn-primary w-full rounded-full 
               bg-[#1272A6] hover:bg-[#0F5C87] 
               text-white 
               py-2 px-4 
               shadow-md hover:shadow-lg 
               transition-all duration-200 
               font-medium 
               focus:ring-2 focus:ring-[#1272A6] focus:ring-offset-1
               active:bg-[#0D4A6E]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;