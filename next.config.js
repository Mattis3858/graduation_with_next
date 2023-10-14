/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URI: process.env.API_URI,
  },
};

module.exports = nextConfig;
