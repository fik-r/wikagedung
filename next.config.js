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
        ],
      },
}

module.exports = nextConfig
