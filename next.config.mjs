/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The book page moved so its URL carries the title keyword.
      { source: '/book', destination: '/coffee', permanent: true },
    ];
  },
};

export default nextConfig;
