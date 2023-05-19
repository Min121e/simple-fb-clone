/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [
      'links.papareact.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
      'https://www.facebook.com',
      'https://https://www.netlify.com/'
    ]
  }
}
