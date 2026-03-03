"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Blue Theme - id="about" add ಮಾಡಿದೆ */}
      <section id="about" className="relative bg-gradient-to-r from-[#0a1a2f] to-[#1e3c72] text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-blue-200 mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>•</span>
              <span>About Us</span>
            </div>
            
            {/* Main Heading with Animation */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Speak Easy
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              We help beginners speak English confidently with simple,
              practical and easy-to-follow PDF courses.
            </p>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-12 text-white" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
            <path d="M0 50 Q 360 0, 720 50 T 1440 50 L 1440 100 L 0 100 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="text-3xl font-bold text-[#1e3c72] mb-2">80K+</div>
            <div className="text-gray-600 text-sm">Instagram Followers</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="text-3xl font-bold text-[#1e3c72] mb-2">20K+</div>
            <div className="text-gray-600 text-sm">Threads Followers</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="text-3xl font-bold text-[#1e3c72] mb-2">50+</div>
            <div className="text-gray-600 text-sm">Happy Learners</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="text-3xl font-bold text-[#1e3c72] mb-2">4+</div>
            <div className="text-gray-600 text-sm">PDF Resources</div>
          </div>
        </div>
      </section>

      {/* Single Mission Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#1e3c72]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#1e3c72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our goal is to make spoken English simple for everyone.
              Whether you are a student, job seeker or business person,
              our PDFs are designed to help you start speaking quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-[#1e3c72]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-[#1e3c72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Free PDF Resources</h3>
            <p className="text-gray-600 mb-4">Access our collection of free English learning PDFs</p>
            <Link href="/pdfs" className="text-[#1e3c72] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Browse PDFs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-14 h-14 bg-[#1e3c72]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-[#1e3c72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Community Support</h3>
            <p className="text-gray-600 mb-4">Join our community of learners and get help when needed</p>
            <Link href="/contact" className="text-[#1e3c72] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Join Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Tip Card */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📘</span>
              <h2 className="text-3xl font-bold">Quick English Tip</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Wrong Way */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 bg-red-400/30 rounded-full flex items-center justify-center text-sm">❌</span>
                  <span className="font-semibold">Common Mistake</span>
                </div>
                <p className="text-xl font-medium text-white/90">"What is your good name?"</p>
              </div>

              {/* Right Way */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 bg-green-400/30 rounded-full flex items-center justify-center text-sm">✅</span>
                  <span className="font-semibold">Correct Way</span>
                </div>
                <p className="text-xl font-medium text-white">"What is your name?"</p>
              </div>
            </div>

            <p className="text-lg text-blue-100 mb-8">
              Want to learn more daily-use English sentences? Check out our premium Spoken English PDFs.
            </p>

            {/* CTA Button */}
            <Link
              href="/pdfs"
              className="inline-flex items-center gap-3 bg-white text-[#1e3c72] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Explore Premium PDFs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}