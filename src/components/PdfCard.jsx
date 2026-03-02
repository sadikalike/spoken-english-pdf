"use client";

import Link from "next/link";

export default function PdfCard({ pdf }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col">
      <img
        src={pdf.image}
        alt={pdf.title}
        className="rounded-xl mb-3 h-48 w-full object-cover"
      />

      <h3 className="text-lg font-semibold mb-1">{pdf.title}</h3>

      <p className="text-purple-600 font-bold mb-3">₹{pdf.price}</p>

      {/* Demo Read */}
      <a
        href={pdf.file}
        target="_blank"
        className="text-sm text-blue-600 mb-2 underline"
      >
        Read Demo
      </a>

      {/* Buy Button */}
      <a
        href={pdf.buyLink}
        className="mt-auto bg-purple-600 text-white text-center py-2 rounded-xl hover:bg-purple-700 transition"
      >
        Buy Now
      </a>
    </div>
  );
}