"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-pink-500 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Speak English Confidently in 30 Days
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Beginner-friendly Kannada to English PDFs.
          Learn daily speaking sentences step-by-step and improve fast.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pdfs"
            className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            View PDFs
          </Link>

          <Link
            href="/contact"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-purple-700 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-8 text-sm text-white/80">
          ✅ 500+ Daily Use Sentences • ✅ Kannada Explanation • ✅ Beginner Friendly
        </p>
      </div>
    </section>
  );
}