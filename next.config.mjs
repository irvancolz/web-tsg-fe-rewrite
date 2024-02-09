/** @type {import('next').NextConfig} */
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["localhost", "web-be-tsg-6x2sh.ondigitalocean.app"],
  },
  async redirects() {
    return [];
  },
  output: "export",
};

export default nextConfig;
