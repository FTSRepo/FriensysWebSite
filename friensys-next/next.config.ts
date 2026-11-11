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
  // Static export for IIS: `npm run build` writes plain files to out/.
  // Old-URL redirects live in public/web.config (IIS URL Rewrite).
  output: "export",
  images: { unoptimized: true },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin({ dev: isDev }));
    return config;
  },
};

export default nextConfig;
