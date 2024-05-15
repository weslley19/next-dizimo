/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: '/signin',
        destination: '/login'
      }
    ]
  }
};

export default nextConfig;
