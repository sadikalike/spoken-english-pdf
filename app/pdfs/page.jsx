"use client";

import PdfCard from "@/src/components/PdfCard";
import { pdfs } from "@/src/data/pdfdata";
import { handlePayment } from "@/src/components/RazorpayButton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PDFsPage() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Client side ನಲ್ಲಿ ಮಾತ್ರ particles generate ಮಾಡಿ
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `float ${Math.random() * 10 + 5}s linear infinite`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header with Blue Gradient */}
      <div className="relative bg-gradient-to-r from-[#0a1a2f] to-[#1e3c72] text-white overflow-hidden py-16">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        {/* Floating Particles - Fixed hydration issue */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                top: particle.top,
                left: particle.left,
                animation: particle.animation,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>•</span>
            <span>PDF Library</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Spoken English{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              PDFs
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose your PDF and start improving your English today 🚀
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">📚</span>
              <span className="text-sm">{pdfs.length}+ PDFs Available</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">⭐</span>
              <span className="text-sm">Free & Premium</span>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-12 text-white" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
            <path d="M0 50 Q 360 0, 720 50 T 1440 50 L 1440 100 L 0 100 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 text-center md:text-left">
            <span className="font-semibold text-[#1e3c72] text-lg">{pdfs.length}</span> 
            <span className="text-gray-500"> PDFs available for you</span>
          </p>
        </div>

        {/* PDF Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfs.map((pdf) => (
            <PdfCard 
              key={pdf.id} 
              pdf={pdf} 
              onBuyClick={handlePayment}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#1e3c72]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#1e3c72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Instant Download</h3>
            <p className="text-sm text-gray-500">Get your PDF immediately after purchase</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#1e3c72]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#1e3c72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Quality Assured</h3>
            <p className="text-sm text-gray-500">All PDFs are reviewed by English experts</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#1e3c72]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#1e3c72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">30-Day Refund</h3>
            <p className="text-sm text-gray-500">Not satisfied? Full refund within 30 days</p>
          </div>
        </div>
      </div>

      {/* Test Button - Remove after testing */}
      <button 
        onClick={() => {
          const testPdf = {
            id: 1,
            title: "Test PDF",
            price: 100,
            free: false
          };
          handlePayment(testPdf);
        }}
        className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded z-50 hover:bg-red-600 transition"
      >
        Test Razorpay
      </button>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </main>
  );
}