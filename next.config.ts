import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'media.tacdn.com'], // Add this domain
  },
  /* config options here */
};

export default nextConfig;
