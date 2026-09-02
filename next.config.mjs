/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Package import optimization
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
  },

  // Headers for caching static assets
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects Links
  async redirects(){
    return[
      {
        source: '/tag/hair-loss-treatments-in-ajmer',
        destination: '/hair-loss-treatments',
        permanent: true,
      },
      {
        source: '/skin-treatment',
        destination: '/skin-treatments',
        permanent: true,
      },
      {
        source: '/laser-skin-treatment',
        destination: '/laser-treatments',
        permanent: true,
      },
      {
        source: '/hair-treatment',
        destination: '/hair-treatments-2',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;

