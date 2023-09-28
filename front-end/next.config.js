/** @type {import('next').NextConfig} */

const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
