"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-purple-600">
          No Speak Easy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          <Link href="/pdfs" className="hover:text-purple-600">
            PDFs
          </Link>
          <Link href="/contact" className="hover:text-purple-600">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 font-medium bg-white">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/pdfs" onClick={() => setMenuOpen(false)}>
            PDFs
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}