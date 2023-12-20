/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [400, 600, 800, 1000, 1200, 1600, 2000, 2400],
    imageSizes: [400, 600, 800, 1000, 1200, 1600, 2000, 2400],
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
