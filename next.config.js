/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir: true
  },
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        destination: 'admin-bizdir.vercel.app/:path*',
        permanent: false, // Set this to true if you want permanent redirects (HTTP 301)
      },
    ]
  },
  
  reactStrictMode: true,
}

module.exports = nextConfig
