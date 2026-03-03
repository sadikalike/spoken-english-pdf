"use client";

import { useParams, useSearchParams } from "next/navigation";
import { pdfs } from "@/src/data/pdfdata";
import { useEffect, useState } from "react";
import Link from "next/link";

// Bundle PDFs list - ನಿಮ್ಮ files ಗೆ match ಮಾಡಿದೆ
const BUNDLE_PDFS = [
  {
    id: 1,
    title: "Advanced Speaking Course",
    file: "/pdffile/advance Level.pdf",
    category: "Speaking"
  },
  {
    id: 2,
    title: "Communication Skills",
    file: "/pdffile/communication.pdf",
    category: "Communication"
  },
  {
    id: 3,
    title: "Grammar Book",
    file: "/pdffile/grammar.book.pdf",
    category: "Grammar"
  },
  {
    id: 4,
    title: "Vocabulary Builder",
    file: "/pdffile/vocabulary.pdf",
    category: "Vocabulary"
  }
];

export default function DownloadContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [pdf, setPdf] = useState(null);
  const [isBundle, setIsBundle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [downloadedCount, setDownloadedCount] = useState(0);
  
  const paymentId = searchParams?.get ? searchParams.get('payment_id') : null;
  const id = params?.id;

  useEffect(() => {
    // ID 1 ಆಗಿದ್ದರೆ bundle ಅಂತ ತಿಳಿಯಿರಿ
    if (id === "1" || id === 1) {
      setIsBundle(true);
      setPdf({
        id: 1,
        title: "English Learning Bundle (4 PDFs)",
        price: 69,
        description: "4 Premium PDFs"
      });
    } else if (id) {
      const foundPdf = pdfs.find(p => p.id === parseInt(id));
      setPdf(foundPdf);
    }
    setLoading(false);
  }, [id]);

  const handleDownloadAll = () => {
    setDownloading(true);
    setDownloadedCount(0);
    
    // Download all bundle PDFs one by one
    BUNDLE_PDFS.forEach((pdf, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = pdf.file;
        link.download = pdf.title + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setDownloadedCount(index + 1);
        
        if (index === BUNDLE_PDFS.length - 1) {
          setTimeout(() => {
            setDownloading(false);
            setDownloadedCount(0);
          }, 1000);
        }
      }, index * 800);
    });
  };

  const handleSingleDownload = (file, title) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = title + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            href="/"
            className="text-[#1e3c72] hover:text-[#2a5298] font-medium inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Bundle View
  if (isBundle) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            
            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Payment Successful! 🎉
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

            {/* Progress Bar - when downloading */}
            {downloading && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Downloading... {downloadedCount}/{BUNDLE_PDFS.length}</span>
                  <span>{Math.round((downloadedCount/BUNDLE_PDFS.length)*100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${(downloadedCount/BUNDLE_PDFS.length)*100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Bundle Items */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-[#1e3c72] text-white rounded-full flex items-center justify-center text-sm">✓</span>
                Your Bundle Includes (4 Premium PDFs):
              </h3>
              <div className="space-y-3">
                {BUNDLE_PDFS.map((pdf, index) => (
                  <div key={pdf.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium text-gray-800">{pdf.title}</p>
                        <p className="text-xs text-gray-500">{pdf.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSingleDownload(pdf.file, pdf.title)}
                      className="text-sm bg-[#1e3c72] text-white px-3 py-1 rounded-lg hover:bg-[#2a5298] transition"
                      disabled={downloading}
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                <span className="font-bold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-[#1e3c72]">₹69</span>
              </div>
            </div>

            {/* Download All Button */}
            <button
              onClick={handleDownloadAll}
              disabled={downloading}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition shadow-lg mb-4 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {downloading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Downloading... ({downloadedCount}/{BUNDLE_PDFS.length})
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

            {/* Back to Home */}
            <div className="text-center">
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

  // Single PDF View (ನಿಮ್ಮ existing code)
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
          onClick={() => handleSingleDownload(pdf.pdfUrl, pdf.title)}
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