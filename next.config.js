/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
  },
  eslint: {
    dirs: ['pages']
  }
}

module.exports = nextConfig
