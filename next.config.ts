import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'media.tacdn.com', 'www.researchgate.net', 'encrypted-tbn0.gstatic.com', 'www.namasteindiatrip.com'], // Add this domain
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
