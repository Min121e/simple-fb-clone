/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
      'https://www.facebook.com',
    ]
  }
}
