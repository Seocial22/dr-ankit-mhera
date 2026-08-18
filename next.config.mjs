/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

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
