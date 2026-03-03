"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleScrollToSection = (sectionId) => {
    if (pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Go to home page with hash
      window.location.href = `/#${sectionId}`;
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a1a2f] shadow-xl py-2" : "bg-[#0f2b4b] py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-2">
          <span className="text-3xl font-bold text-white">
            Speak Easy
          </span>
          <span className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Home Link - with scroll */}
          <button
            onClick={() => handleScrollToSection('home')}
            className="relative font-medium text-white/80 hover:text-white transition-colors duration-300 group bg-transparent border-none cursor-pointer"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>

          {/* About Link - with scroll */}
          <button
            onClick={() => handleScrollToSection('about')}
            className="relative font-medium text-white/80 hover:text-white transition-colors duration-300 group bg-transparent border-none cursor-pointer"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>

          {/* PDFs Link - to PDFs page */}
          <Link 
            href="/pdfs" 
            className="relative font-medium text-white/80 hover:text-white transition-colors duration-300 group"
          >
            PDFs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Contact Link - with scroll */}
          <button
            onClick={() => handleScrollToSection('contact')}
            className="relative font-medium text-white/80 hover:text-white transition-colors duration-300 group bg-transparent border-none cursor-pointer"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          {/* Get Started Button */}
          <Link 
            href="/get-started" 
            className="px-6 py-2.5 bg-white text-[#0f2b4b] font-medium rounded-full hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${
            menuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full transition-all duration-300 ${
        menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-[#0f2b4b] shadow-xl mx-4 mt-2 rounded-2xl overflow-hidden border border-white/10">
          <div className="flex flex-col p-4">
            {/* Mobile Home Link */}
            <button
              onClick={() => {
                handleScrollToSection('home');
                setMenuOpen(false);
              }}
              className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-left bg-transparent border-none w-full text-left cursor-pointer"
            >
              Home
            </button>

            {/* Mobile About Link */}
            <button
              onClick={() => {
                handleScrollToSection('about');
                setMenuOpen(false);
              }}
              className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-left bg-transparent border-none w-full text-left cursor-pointer"
            >
              About
            </button>

            {/* Mobile PDFs Link */}
            <Link 
              href="/pdfs" 
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-left"
            >
              PDFs
            </Link>

            {/* Mobile Contact Link */}
            <button
              onClick={() => {
                handleScrollToSection('contact');
                setMenuOpen(false);
              }}
              className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-left bg-transparent border-none w-full text-left cursor-pointer"
            >
              Contact
            </button>

            <div className="border-t border-white/10 my-2"></div>

            {/* Mobile Get Started */}
            <Link 
              href="/get-started" 
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 bg-white text-[#0f2b4b] font-medium rounded-xl text-center hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}