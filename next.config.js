/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  staticPageGenerationTimeout: 3000,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin-web-dev.wikagedung.id',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'admin-web-dev.wikagedung.id',
        port: '',
        pathname: '/uploaded_file/**',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
