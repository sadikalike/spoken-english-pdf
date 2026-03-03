/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ IMPORTANT: 'export' ಅನ್ನು REMOVE ಮಾಡಿ
  // output: 'export',  // ಈ line ಇದ್ದರೆ ತೆಗೆದುಹಾಕಿ
  
  // ✅ Dynamic routes ಗಾಗಿ 'standalone' ಬಳಸಿ
  output: 'standalone',
  
  // Images optimization
  images: {
    unoptimized: true,
  },
  
  // Recommended settings
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;