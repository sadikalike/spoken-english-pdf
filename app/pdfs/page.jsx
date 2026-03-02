import PdfCard from "@/src/components/PdfCard";
import { pdfs } from "@/src/data/pdfdata";

export default function PDFsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Spoken English PDFs
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Choose your PDF and start improving your English today 🚀
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pdfs.map((pdf) => (
            <PdfCard key={pdf.id} pdf={pdf} />
          ))}
        </div>
      </div>
    </main>
  );
}