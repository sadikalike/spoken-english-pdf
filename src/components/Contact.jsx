"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header with Blue Gradient */}
      <div className="relative bg-gradient-to-r from-[#0a1a2f] to-[#1e3c72] text-white overflow-hidden py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        {/* Floating Particles - commented out to avoid hydration issues */}
        {/* <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              }}
            />
          ))}
        </div> */}
        
        <div className="relative max-w-4xl mx-auto text-center px-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>•</span>
            <span>Contact</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          {/* Subheading with Kannada */}
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions? Reach out to us anytime.
          </p>
          <p className="text-lg text-blue-200 mt-2">
            ನಮಗೆ ಯಾವಾಗ ಬೇಕಾದರೂ ಸಂಪರ್ಕಿಸಬಹುದು.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Response Time: &lt; 1hr</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span className="text-sm">24/7 Support</span>
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

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main WhatsApp Card - Featured */}
        <div className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden mb-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                💬
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Chat on WhatsApp</h2>
                <p className="text-blue-100 text-lg">Get instant replies from our team</p>
              </div>
            </div>
            
            <a
              href="https://wa.me/917510436350"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-2xl transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3 text-lg"
            >
              <span>Start Chatting</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/english_with_kannada__?igsh=ZzdtNW45bmhhbjV6"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram</h3>
            <p className="text-gray-500 text-sm mb-4">Follow for daily English tips & updates</p>
            <div className="flex items-center text-[#1e3c72] font-medium">
              <span>@english_with_kannada__</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Threads Card */}
          <a
            href="https://www.threads.com/@english_with_kannada__"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.25 2C9.05 2 6.23 3.2 4.33 5.33c-1.9 2.13-2.8 4.95-2.33 7.92.47 2.97 2.2 5.43 4.83 6.9 2.63 1.47 5.7 1.67 8.47.57 2.77-1.1 4.97-3.3 6.07-6.07 1.1-2.77.9-5.84-.57-8.47-1.47-2.63-3.93-4.36-6.9-4.83-.97-.15-1.95-.2-2.97-.15v.03c-.37 0-.75.02-1.13.05zM16.5 12c0 1.63-.57 2.93-1.5 3.85-.93.92-2.18 1.4-3.5 1.4s-2.57-.48-3.5-1.4c-.93-.92-1.5-2.22-1.5-3.85s.57-2.93 1.5-3.85c.93-.92 2.18-1.4 3.5-1.4s2.57.48 3.5 1.4c.93.92 1.5 2.22 1.5 3.85z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Threads</h3>
            <p className="text-gray-500 text-sm mb-4">Join our Threads community</p>
            <div className="flex items-center text-[#1e3c72] font-medium">
              <span>@english_with_kannada__</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Facebook Card */}
          <a
            href="https://www.facebook.com/share/1CM46QXwDn/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Facebook</h3>
            <p className="text-gray-500 text-sm mb-4">Connect with us on Facebook</p>
            <div className="flex items-center text-[#1e3c72] font-medium">
              <span>Speak Easy</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* WhatsApp Group Card */}
          <a
            href="https://chat.whatsapp.com/G94NMbJ3HVL90isNyq8SZC?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.64 15.33 3.58 16.75L2 22L7.42 20.46C8.81 21.32 10.39 21.81 12.05 21.81C17.5 21.81 21.96 17.36 21.96 11.9C21.96 6.44 17.5 2 12.04 2Z M16.24 14.17C16.04 14.07 15.01 13.57 14.83 13.5C14.65 13.43 14.51 13.4 14.37 13.6C14.23 13.8 13.84 14.26 13.72 14.4C13.6 14.54 13.48 14.56 13.28 14.46C12.3 14.02 11.64 13.68 10.99 12.77C10.79 12.48 11.16 12.5 11.5 11.85C11.58 11.7 11.54 11.57 11.48 11.47C11.42 11.37 10.96 10.33 10.78 9.92C10.6 9.51 10.42 9.55 10.28 9.55C10.15 9.55 9.99 9.55 9.83 9.55C9.67 9.55 9.41 9.61 9.19 9.85C8.97 10.09 8.39 10.71 8.39 11.97C8.39 13.23 9.25 14.45 9.39 14.64C9.53 14.83 10.95 17.04 13.13 17.96C13.83 18.27 14.38 18.44 14.8 18.57C15.5 18.79 16.14 18.76 16.64 18.68C17.21 18.6 18.4 18.17 18.63 17.68C18.86 17.19 18.86 16.77 18.79 16.68C18.72 16.59 18.5 16.5 18.17 16.36C17.84 16.22 16.84 15.72 16.54 15.62C16.24 15.52 16.04 15.47 15.84 15.77C15.64 16.07 15 16.88 14.82 17.09C14.64 17.3 14.46 17.32 14.16 17.18C13.86 17.04 13.2 16.8 12.42 16.05C11.64 15.3 11.13 14.41 10.95 14.11C10.77 13.81 10.92 13.63 11.08 13.43C11.22 13.27 11.39 13.06 11.55 12.86C11.71 12.66 11.77 12.51 11.63 12.25C11.49 11.99 11 10.98 10.77 10.5C10.54 10.02 10.3 10.08 10.12 10.07C9.94 10.06 9.74 10.06 9.54 10.06C9.34 10.06 9.02 10.13 8.77 10.47C8.52 10.81 8.26 11.41 8.52 12.23C8.78 13.05 9.58 14.33 9.72 14.54C9.86 14.75 11.01 16.56 12.89 17.31C13.75 17.66 14.42 17.87 14.94 18.02C15.8 18.27 16.58 18.22 17.17 18.13C17.84 18.03 18.78 17.58 18.99 17.06C19.2 16.54 19.2 16.1 19.12 16C19.04 15.9 18.83 15.8 18.54 15.68C18.25 15.56 16.96 15.03 16.69 14.92C16.42 14.81 16.24 14.77 16.04 15.07C15.84 15.37 15.28 16.07 15.1 16.27C14.92 16.47 14.74 16.5 14.45 16.36C14.16 16.22 13.3 15.9 12.28 14.94C11.26 13.98 10.74 13.01 10.58 12.67C10.42 12.33 10.59 12.16 10.75 11.98C10.89 11.83 11.07 11.6 11.21 11.4C11.35 11.2 11.39 11.05 11.27 10.83C11.15 10.61 10.7 9.6 10.48 9.13C10.26 8.66 10.03 8.72 9.86 8.71C9.69 8.7"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp Group</h3>
            <p className="text-gray-500 text-sm mb-4">Join our free English community</p>
            <div className="flex items-center text-[#1e3c72] font-medium">
              <span>Join Group</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>

        {/* Additional Contact Info */}
        <div className="text-center">
          <p className="text-gray-500 mb-4">Prefer email? Reach us at</p>
          <a
            href="mailto:support@speakeasy.com"
            className="inline-flex items-center gap-2 text-[#1e3c72] font-semibold text-lg hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            englishguide71@gmail.com
          </a>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}