import dns from "dns";


/** @type {import('next').NextConfig} */




dns.setDefaultResultOrder('ipv4first');

const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    optimizePackageImports: ['bcryptjs', 'googleapis'],
  },
  

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default nextConfig;
