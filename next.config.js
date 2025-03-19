/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/offshore-portal',
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
