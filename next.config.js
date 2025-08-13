/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // enables static export
  basePath: isProd ? '/bulgarianestates' : '',
  assetPrefix: isProd ? '/bulgarianestates/' : '',
};