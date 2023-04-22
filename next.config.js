/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
  },
  eslint: {
    dirs: ['pages']
  },
  assetPrefix: '/portal',
  rewrites() {
    return [
      { source: '/portal/_next/:path*', destination: '/_next/:path*' }
    ]
  }
}

module.exports = nextConfig
