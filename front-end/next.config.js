/** @type {import('next').NextConfig} */

const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	webpack(config, { nextRuntime }) {
		if ( typeof nextRuntime === 'undefined' ) {
			const { IgnorePlugin } = require('webpack');
			const ignoreFs = new IgnorePlugin({ resourceRegExp: /fs/ });
			const ignorePath = new IgnorePlugin({ resourceRegExp: /path/ });
			config.plugins.push(ignoreFs, ignorePath);
		}
		return config;
		
	}
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = nextConfig;
