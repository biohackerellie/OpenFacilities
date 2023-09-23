/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
