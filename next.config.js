/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Для Three.js и WebGL
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './',
    }
    return config
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
