/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/start", destination: "/", permanent: false },
      { source: "/:path*", has: [{ type: "host", value: "jedroplus.com" }], destination: "https://www.jedroplus.com/:path*", permanent: true },
      { source: "/about", destination: "/o-nas", permanent: true },
      { source: "/features", destination: "/funkcije", permanent: true },
      { source: "/industries", destination: "/panoge", permanent: true },
      { source: "/pricing", destination: "/cenik", permanent: true },
      { source: "/terms", destination: "/pogoji-uporabe", permanent: true },
      { source: "/privacy", destination: "/zasebnost", permanent: true },
      { source: "/faq", destination: "/", permanent: true },
      { source: "/contact", destination: "/#kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
