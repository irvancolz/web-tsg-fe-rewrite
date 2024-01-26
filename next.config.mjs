/** @type {import('next').NextConfig} */
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/under-construction",
        permanent: true,
      },
      {
        source: "/our-services",
        destination: "/under-construction",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/under-construction",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/under-construction",
        permanent: true,
      },
      {
        source: "/tailor-made-application-development",
        destination: "/under-construction",
        permanent: true,
      },
      {
        source: "/technology-managed-services",
        destination: "/under-construction",
        permanent: true,
      },
      {
        source: "/it-manpower-supply",
        destination: "/under-construction",
        permanent: true,
      },
      {
        source: "/it-roadmap-and-strategic-planning",
        destination: "/under-construction",
        permanent: true,
      },
      {
        source: "/software-qa-and-security-testing",
        destination: "/under-construction",
        permanent: true,
      },
      {
        source: "/agile-and-scrum-training-consulting",
        destination: "/under-construction",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
