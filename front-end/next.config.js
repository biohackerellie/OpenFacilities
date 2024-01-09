/** @type {import('next').NextConfig} */

const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typeScript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    optimizePackageImports: ['bcryptjs', 'googleapis'],
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
      })
    );
    return config;
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = nextConfig;
