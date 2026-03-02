"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a1a2f] shadow-xl py-2" : "bg-[#0f2b4b] py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - White text */}
        <Link href="/" className="group flex items-center space-x-2">
          <span className="text-3xl font-bold text-white">
            Speak Easy
          </span>
          <span className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="relative font-medium text-white/80 hover:text-white transition-colors duration-300 group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/pdfs" 
            className="relative font-medium text-white/80 hover:text-white transition-colors duration-300 group"
          >
            PDFs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/contact" 
            className="relative font-medium text-white/80 hover:text-white transition-colors duration-300 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          {/* CTA Button - White with blue text */}
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
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/pdfs" 
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
            >
              PDFs
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
            >
              Contact
            </Link>
            <div className="border-t border-white/10 my-2"></div>
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