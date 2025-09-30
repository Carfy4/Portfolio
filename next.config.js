/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  basePath: '',
  assetPrefix: '/',
  images: {
    unoptimized: true
  },
  distDir: 'out',
  experimental: {
    inlineCss: false
  }
}

module.exports = nextConfig