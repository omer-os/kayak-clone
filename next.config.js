/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "media.istockphoto.com",
      "plus.unsplash.com",
      "content.r9cdn.net",
    ],
  },
};

module.exports = nextConfig;
