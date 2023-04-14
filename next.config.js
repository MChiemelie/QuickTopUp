/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: '/src/:path*',
        destination: '/src/:path*',
      },
    ]
  },
  async headers() {
    return [
      {
        // Serve all PNG and SVG files with a Cache-Control header of 1 week
        source: '/(.png|.svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
    ]
  },
}


module.exports = nextConfig
