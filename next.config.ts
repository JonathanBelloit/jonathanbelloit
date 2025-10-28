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
  
  // Using local images; remotePatterns/domains not needed at the moment.
};

export default nextConfig;
