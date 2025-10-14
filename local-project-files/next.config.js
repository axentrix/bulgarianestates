/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isProd ? '/bulgarianestates' : '',
  assetPrefix: isProd ? '/bulgarianestates' : '',
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
