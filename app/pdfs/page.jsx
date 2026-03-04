"use client";

import PdfCard from "@/src/components/PdfCard";
import { pdfs } from "@/src/data/pdfdata";
import { handlePayment } from "@/src/components/RazorpayButton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PDFsPage() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
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
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-[#0a1a2f] to-[#1e3c72] text-white overflow-hidden py-16">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        {/* Floating Particles */}
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
            Grammar, Vocabulary, Daily Use Sentences ಮತ್ತು Communication Practice ವಿಷಯಗಳನ್ನು ಆಧರಿಸಿದ ನಮ್ಮ ಅಭ್ಯಾಸ ಮೆಟೀರಿಯಲ್‌ಗಳು ನಿಮ್ಮ Spoken English ಅನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">📚</span>
              <span className="text-sm">4+ PDFs Available</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">⭐</span>
              <span className="text-sm">Expert Assured</span>
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
            <span className="font-semibold text-[#1e3c72] text-lg">4+</span> 
            <span className="text-gray-500"> PDFs bundle available for you</span>
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

        {/* 🚀 FEATURES SECTION - ನೀವು ಕೇಳಿದ್ದು ಇದೇ */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our PDFs?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: Expert Assured */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-20 h-20 bg-[#1e3c72]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-[#1e3c72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Assured</h3>
              <p className="text-gray-600 leading-relaxed">
                ಎಲ್ಲಾ PDFಗಳನ್ನು ಪರಿಶೀಲಿಸಿದ್ದಾರೆ. ಗುಣಮಟ್ಟದ ಭರವಸೆ.
              </p>
            </div>

            {/* Feature 2: PDFs */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-20 h-20 bg-[#1e3c72]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-[#1e3c72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">4+ PDFs Bundle</h3>
              <p className="text-gray-600 leading-relaxed">
                Grammar, Vocabulary, Communication ಮತ್ತು Advanced PDFಗಳ ಸಂಪೂರ್ಣ ಬಂಡಲ್ ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ.
              </p>
            </div>

            {/* Feature 3: Customer Support */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-20 h-20 bg-[#1e3c72]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-[#1e3c72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Customer Support</h3>
              <p className="text-gray-600 leading-relaxed">
                ನಿಮಗೆ ಯಾವುದೇ ಸಮಸ್ಯೆ ಇದ್ದರೂ, WhatsApp ಮೂಲಕ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಬಹುದು.
              </p>
              <a 
                href="https://wa.me/917510436350" 
                target="_blank"
                className="inline-flex items-center gap-2 mt-4 text-[#1e3c72] hover:text-[#2a5298] font-medium"
              >
                <span>Message on WhatsApp</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bonus: Trust Badges */}
        {/* <div className="mt-16 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <span className="text-green-600">✓</span>
            <span className="text-sm text-gray-600">Instant Download</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <span className="text-green-600">✓</span>
            <span className="text-sm text-gray-600">30-Day Refund</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <span className="text-green-600">✓</span>
            <span className="text-sm text-gray-600">Secure Payment</span>
          </div>
        </div> */}
      </div>

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