/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hztfeqfnvwzkaeiwldmd.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'genesiscare.com.my',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
