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
              <span className="text-sm">Quality</span>
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

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ... existing features ... */}
        </div>
      </div>

      {/* ✅ Test Button REMOVED */}

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