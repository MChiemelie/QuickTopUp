/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js

module.exports = {
  // Other Next.js configuration options...
  pageExtensions: ["ts", "tsx"],
  // Add this configuration to tell Next.js to look for pages in the src directory.
  // You can change the directory to your preference.
  // This will make it easier to maintain your project structure.
  pagesDir: "pages/",
};


module.exports = nextConfig
