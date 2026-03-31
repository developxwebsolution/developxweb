import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ API routes need a server
  trailingSlash: false,

  // ✅ Prevent redirect issues
  skipTrailingSlashRedirect: true,

  
  
};

export default nextConfig;












// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   trailingSlash: true,
//   images: {
//     domains: ["images.unsplash.com"],
//     unoptimized: true,
//   },
  
// };

// export default nextConfig;


