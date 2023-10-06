const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  module.exports = withBundleAnalyzer({
    async redirects(){
      return [
        {
          source: "/",
          destination: "/smc",
          permanent: false
        },
        {
          source: "/user",
          destination: "/user/profile",
          permanent: false
        }
      ]
    }
  })