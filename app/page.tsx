// app/page.jsx
"use client";

import PdfCard from "@/src/components/PdfCard";
import { pdfs } from "@/src/data/pdfdata";
import { handlePayment } from "@/src/components/RazorpayButton";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import { useState } from "react";
import PDFsPage from "./pdfs/page";

export default function HomePage() {
  const [showAllPdfs, setShowAllPdfs] = useState(false);
  
  // ಮೊದಲ 6 PDFs ಮಾತ್ರ show ಮಾಡಲು
  const displayedPdfs = showAllPdfs ? pdfs : pdfs.slice(0, 6);
  
  return (
    <main>
      {/* 1. Hero Section - First */}
      <Hero />
      
      {/* 2. About Section - Second */}
      <About />
      
      {/* 3. PDFs Section - Third */}
      <PDFsPage/>
      {/* 4. Contact Section - Last */}
      <Contact />
    </main>
  );
}