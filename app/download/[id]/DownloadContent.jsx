"use client";

import { useParams, useSearchParams } from "next/navigation";
import { pdfs } from "@/src/data/pdfdata";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function DownloadContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const paymentId = searchParams?.get ? searchParams.get('payment_id') : null;
  const id = params?.id;

  useEffect(() => {
    if (id) {
      const foundPdf = pdfs.find(p => p.id === parseInt(id));
      setPdf(foundPdf);
    }
    setLoading(false);
  }, [id]);

  const handleDownload = () => {
    if (pdf) {
      const link = document.createElement('a');
      link.href = pdf.pdfUrl;
      link.download = pdf.title + '.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1e3c72] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!pdf) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">PDF not found!</h2>
          <Link 
            href="/pdfs"
            className="text-[#1e3c72] hover:text-[#2a5298] font-medium inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Browse PDFs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Payment Successful! 🎉
        </h1>
        
        <p className="text-center text-gray-600 mb-1">
          {pdf.title}
        </p>
        
        {paymentId && (
          <p className="text-center text-xs text-gray-400 mb-6">
            Payment ID: {paymentId.slice(0, 10)}...
          </p>
        )}

        <button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition shadow-lg mb-4"
        >
          📥 Download PDF
        </button>

        <Link 
          href="/" 
          className="block text-center text-sm text-gray-500 hover:text-gray-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}