import { Suspense } from "react";
import DownloadContent from "./DownloadContent";

// Dynamic route - build time ನಲ್ಲಿ prerender ಮಾಡಬೇಡಿ
export const dynamic = 'force-dynamic';

export default function DownloadPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1e3c72] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading download page...</p>
        </div>
      </div>
    }>
      <DownloadContent />
    </Suspense>
  );
}