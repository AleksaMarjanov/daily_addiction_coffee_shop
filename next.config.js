/** @type {import('next').NextConfig} */
const nextConfig = {
  javascript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    sanity_token: process.env.REACT_APP_SANITY_TOKEN,

  }
}

module.exports = nextConfig
