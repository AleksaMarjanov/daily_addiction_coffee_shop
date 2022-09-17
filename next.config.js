/** @type {import('next').NextConfig} */
const nextConfig = {
  javascript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'images.unsplash.com'
    ],
  },
  env: {
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    sanity_token: process.env.REACT_APP_SANITY_TOKEN,
    emailJs_service: process.env.REACT_APP_EMAILJS_SERVICE,
    emailJs_tempalte: process.env.REACT_APP_EMAILJS_TEMPLATE,
    emailJs_API: process.env.REACT_APP_EMAILJS_API_KEY,
    recaptcha: process.env.REACT_APP_RECAPTCHA_SITE_KEY,


  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
