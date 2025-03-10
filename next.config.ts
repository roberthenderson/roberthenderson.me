import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next_dev' : '.next',
  reactStrictMode: false,
};

export default nextConfig;
