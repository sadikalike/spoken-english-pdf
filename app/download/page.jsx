"use client";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        
        {/* Success Icon */}
        <div className="text-5xl mb-4">✅</div>

        {/* Heading */}
        <h1 className="text-2xl font-bold mb-2 text-gray-800">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Click below to download your PDF.
        </p>

        {/* Download Button */}
        <a
          href="/pdfs/spoken-english.pdf"
          download
          className="block w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition mb-3"
        >
          Download PDF
        </a>

        {/* Support line */}
        <p className="text-xs text-gray-500 mt-4">
          Having trouble? Contact us anytime.
        </p>
      </div>
    </main>
  );
}