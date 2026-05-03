import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Dev-only: disable webpack filesystem/memory caching. On Windows, stale chunk
   * graphs cause MODULE_NOT_FOUND for numbered chunks (e.g. ./447.js) after HMR or
   * interrupted builds. Slightly slower compiles; stable routing.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  async redirects() {
    return [{ source: '/blog', destination: '/open-source', permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
      },
    ],
  },
};

export default nextConfig;
