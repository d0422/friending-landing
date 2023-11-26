/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  rewrites: async function () {
    return [
      {
        source: '/profile/:id',
        destination: 'http://api.friending.online/profile/:id',
      },
    ];
  },
};

module.exports = nextConfig;
