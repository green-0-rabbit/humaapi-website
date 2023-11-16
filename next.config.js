/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   swcMinify: true,
  images: {
     domains: ['wp.humaapi.com']
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'wp.humaapi.com',
    //   },
    // ],
  }
};

module.exports = nextConfig;
