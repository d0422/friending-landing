/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'friending-image-test-bucket.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
  reactStrictMode: false,
  rewrites: async function () {
    return [
      {
        source: '/profile/:path*',
        destination: 'http://api.friending.online/profile/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
