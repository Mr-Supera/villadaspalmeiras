import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { visualizer } from "rollup-plugin-visualizer";

// Lovable's wrapper sets the deployable dist/ output layout, sandbox preview
// shape and diagnostics. The custom SSR entry (src/server.ts) and the Nitro
// node-server preset used for local builds are preserved via the passthrough
// options; inside Lovable builds LOVABLE_NITRO_PRESET pins the real target.
export default defineConfig({
  plugins:
    process.env.ANALYZE_BUNDLE === "1"
      ? [
          visualizer((outputOptions) => {
            const outputName = (outputOptions.dir ?? "root")
              .split(/[\\/]/)
              .slice(-2)
              .join("-");
            return {
              filename: `bundle-stats-${outputName}.json`,
              template: "raw-data",
              gzipSize: true,
              brotliSize: true,
              open: false,
            };
          }),
        ]
      : [],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (!id.includes("node_modules")) return;
            if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return "vendor-react";
            if (id.includes("@tanstack")) return "vendor-tanstack";
            if (id.includes("/lucide-react/")) return "vendor-icons";
            if (id.includes("/zod/")) return "vendor-validation";
            if (id.includes("/date-fns/")) return "vendor-date";
          },
        },
      },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: { preset: "node-server" },
});
