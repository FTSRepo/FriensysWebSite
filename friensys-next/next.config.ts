import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

class VeliteWebpackPlugin {
  static started = false;
  constructor(private readonly options: { dev?: boolean } = {}) {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apply(compiler: any) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const { build } = await import("velite");
      await build({ watch: this.options.dev, clean: !this.options.dev });
    });
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
  },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin({ dev: isDev }));
    return config;
  },
  redirects: async () => [
    { source: "/product/schoolErp", destination: "/school-erp", permanent: true },
    { source: "/product/schoolApp", destination: "/products/school-app", permanent: true },
    { source: "/product/escalation", destination: "/products/escalation", permanent: true },
    { source: "/product/ODSAS", destination: "/products/odsas", permanent: true },
    { source: "/product/customerLoyalty", destination: "/products/customer-loyalty", permanent: true },
    { source: "/product/marketplace", destination: "/products/marketplace", permanent: true },
    { source: "/product/collegeErp", destination: "/products/college-erp", permanent: true },
    { source: "/product", destination: "/products", permanent: true },
    { source: "/privacyPolicy", destination: "/legal/privacy-policy", permanent: true },
    { source: "/cancellationPolicy", destination: "/legal/cancellation-policy", permanent: true },
    { source: "/underDevelopment", destination: "/", permanent: true },
    { source: "/services/services", destination: "/services", permanent: true },
    { source: "/services/cloudSolutions", destination: "/services", permanent: false },
    { source: "/services/itConsulting", destination: "/services", permanent: false },
    { source: "/services/softwareDevelopment", destination: "/services", permanent: false },
    { source: "/services/softwareProduct", destination: "/services", permanent: false },
    { source: "/apply", destination: "/careers", permanent: true },
  ],
};

export default nextConfig;
