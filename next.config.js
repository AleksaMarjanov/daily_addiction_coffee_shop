/** @type {import('next').NextConfig} */
const nextConfig = {
  javascript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
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
    emailJs_template_careers: process.env.REACT_APP_EMAILJS_TEMPLATE,
    emailJs_template_contact: process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT,
    emailJs_API: process.env.REACT_APP_EMAILJS_API_KEY,
    recaptcha: process.env.REACT_APP_RECAPTCHA_SITE_KEY,


  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
