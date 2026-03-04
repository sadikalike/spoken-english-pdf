"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    createParticles();
    animateParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#0a1a2f] via-[#0f2b4b] to-[#1e3c72] text-white overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-bounce">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white/90">✨ New: 100+ Daily Use Sentences Added</span>
          </div>

          {/* Main Heading with Gradient */}
          <h3 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Practice Spoken 
            </span>
            <br />
            <span className="relative">
              English the Smart Way
              <svg className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-8 text-blue-300/30" viewBox="0 0 200 20" fill="none">
                <path d="M0 10 Q 50 0, 100 10 T 200 10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </span>
          </h3>

          {/* Subheading with better readability */}
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          ಸರಿಯಾದ ಅಭ್ಯಾಸದ ಮೂಲಕ ನಿಮ್ಮ ಇಂಗ್ಲಿಷ್ ಮಾತನಾಡುವ ಕೌಶಲ್ಯವನ್ನು ವೇಗವಾಗಿ ಬೆಳೆಸಿಕೊಳ್ಳಿ 🚀
            <span className="block md:inline"> Learn daily speaking sentences step-by-step and improve fast.</span>
          </p>

          {/* CTA Buttons - Modern Design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/pdfs"
              className="group relative px-8 py-4 bg-white text-[#0f2b4b] font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View PDFs
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>

            <Link
              href="#contact"
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white hover:text-[#0f2b4b] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-2">
                Contact Us
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust Indicators - Modern Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10">
              <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm text-blue-100">500+ Daily Use Sentences</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10">
              <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm text-blue-100">Kannada Explanation</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10">
              <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm text-blue-100">Beginner Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-12 text-white" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path d="M0 50 Q 360 0, 720 50 T 1440 50 L 1440 100 L 0 100 Z" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>
    </section>
  );
}