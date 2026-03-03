/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Dynamic routes ಗಾಗಿ 'standalone' ಬಳಸಿ
  output: 'standalone',
  
  // Images optimization
  images: {
    unoptimized: true,
  },
  
  // Recommended settings
  reactStrictMode: true,
  // ❌ swcMinify: true - ಇದನ್ನು ತೆಗೆದುಹಾಕಿ (Next.js 16+ ನಲ್ಲಿ automatic)
};

module.exports = nextConfig;