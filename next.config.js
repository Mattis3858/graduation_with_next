/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URI: process.env.NEXT_PUBLIC_API_URI,
    SUPABASE_URI: process.env.NEXT_PUBLIC_SUPABASE_URI,
    SUPABASE_SECRET: process.env.NEXT_PUBLIC_SUPABASE_SECRET,
  },
};

module.exports = nextConfig;
