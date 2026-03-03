// app/download/[id]/page.jsx
"use client";

import { useParams, useSearchParams } from "next/navigation";
import { pdfs } from "@/src/data/pdfdata";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DownloadPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [pdf, setPdf] = useState(null);
  
  const paymentId = searchParams.get('payment_id');
  const id = params.id;

  useEffect(() => {
    const foundPdf = pdfs.find(p => p.id === parseInt(id));
    setPdf(foundPdf);
  }, [id]);

  if (!pdf) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Payment Successful! 🎉
          </h1>
          
          <p className="text-gray-600 mb-2">
            Thank you for purchasing <span className="font-semibold text-[#1e3c72]">{pdf.title}</span>
          </p>
          
          {paymentId && (
            <p className="text-sm text-gray-500 mb-8">
              Payment ID: {paymentId}
            </p>
          )}

          {/* Download Button */}
          <div className="mb-8">
            <a
              href={pdf.pdfUrl}
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3c72] text-white rounded-xl hover:bg-[#2a5298] transition text-lg font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 mb-4">
              Your PDF will also be sent to your email shortly.
            </p>
            <Link 
              href="/pdfs"
              className="text-[#1e3c72] hover:text-[#2a5298] font-medium inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Browse More PDFs
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}