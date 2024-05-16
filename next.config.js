/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
