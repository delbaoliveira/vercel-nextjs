/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: 'experimental-edge',
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
