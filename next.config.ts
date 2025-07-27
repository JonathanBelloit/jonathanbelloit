import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tell Next.js to look for pages/app in the src directory  
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Enable static file serving from public directory
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/:path*',
      },
    ];
  },
  
  // Configure image domains if needed
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
