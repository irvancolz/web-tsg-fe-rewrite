/** @type {import('next').NextConfig} */
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// change the last folder name if the supabase host is changed
const STORAGE = "tsg-blog-assets";
const HOSTNAME = process.env.NEXT_PUBLIC_SUPABASE_IMG_DOMAIN;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["localhost", "web-be-tsg-6x2sh.ondigitalocean.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: HOSTNAME,
        port: "",
        pathname: `/storage/v1/object/public/${STORAGE}/**`,
      },
    ],
  },
};

export default nextConfig;
