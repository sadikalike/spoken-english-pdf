"use client";

import { useEffect, useState } from "react";
import { bundlePdfs } from "@/src/data/pdfdata";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BundleDownloadPage() {
  const searchParams = useSearchParams();
  const [downloading, setDownloading] = useState(false);
  const [bundle, setBundle] = useState(null);
  
  const paymentId = searchParams?.get ? searchParams.get('payment_id') : sessionStorage.getItem('paymentId');

  useEffect(() => {
    // Get bundle info
    setBundle(bundlePdfs);
  }, []);

  const handleDownloadAll = () => {
    setDownloading(true);
    
    // Download all PDFs one by one
    bundle.forEach((pdf, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = pdf.pdfUrl;
        link.download = pdf.title + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        if (index === bundle.length - 1) {
          setDownloading(false);
          // Clear session storage
          sessionStorage.removeItem('bundlePurchased');
          sessionStorage.removeItem('paymentId');
        }
      }, index * 800); // 800ms delay between downloads
    });
  };

  if (!bundle) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3c72]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Bundle Purchase Successful! 🎉
            </h1>
            <p className="text-gray-600">
              Thank you for purchasing the English Learning Bundle
            </p>
            {paymentId && (
              <p className="text-xs text-gray-400 mt-2">
                Payment ID: {paymentId?.slice(0, 15)}...
              </p>
            )}
          </div>

          {/* Bundle Items */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#1e3c72] text-white rounded-full flex items-center justify-center text-sm">✓</span>
              Your Bundle Includes (4 PDFs):
            </h3>
            <div className="space-y-3">
              {bundle.map((pdf, index) => (
                <div key={pdf.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">{pdf.title}</p>
                      <p className="text-xs text-gray-500">{pdf.category}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-600">₹{pdf.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
              <span className="font-bold text-gray-800">Total:</span>
              <span className="text-xl font-bold text-[#1e3c72]">₹69</span>
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownloadAll}
            disabled={downloading}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition shadow-lg mb-4 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {downloading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Downloading... ({bundle.length} PDFs)
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download All 4 PDFs
              </>
            )}
          </button>

          {/* Individual Download Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-3">Or download individually:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {bundle.map((pdf) => (
                <a
                  key={pdf.id}
                  href={pdf.pdfUrl}
                  download
                  className="text-sm text-[#1e3c72] hover:text-[#2a5298] underline"
                >
                  {pdf.title}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}