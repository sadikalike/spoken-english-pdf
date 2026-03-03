// src/components/PdfCard.jsx
import Image from "next/image";

export default function PdfCard({ pdf, onBuyClick }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* PDF Image/Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-[#1e3c72] to-[#2a5298]">
        {pdf.image ? (
          <Image
            src={pdf.image}
            alt={pdf.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-20 h-20 text-white/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/>
            </svg>
          </div>
        )}
        
        {/* Category Badge */}
        {pdf.category && (
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#1e3c72]">
            {pdf.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {pdf.title}
        </h3>
        
        {pdf.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {pdf.description}
          </p>
        )}

        {/* Price and Buy Button */}
        <div className="flex items-center justify-between mt-4">
          <div>
            {pdf.free ? (
              <span className="text-2xl font-bold text-green-600">Free</span>
            ) : (
              <div>
                <span className="text-2xl font-bold text-[#1e3c72]">
                  ₹{pdf.price}
                </span>
                {pdf.originalPrice && (
                  <span className="ml-2 text-sm text-gray-400 line-through">
                    ₹{pdf.originalPrice}
                  </span>
                )}
              </div>
            )}
          </div>
          
          <button
            onClick={() => onBuyClick(pdf)}
            className="px-6 py-2 bg-[#1e3c72] text-white rounded-xl hover:bg-[#2a5298] transition font-medium"
          >
            {pdf.free ? "Download Now" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}