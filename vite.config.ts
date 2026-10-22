import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Lovable's wrapper sets the deployable dist/ output layout, sandbox preview
// shape and diagnostics. The custom SSR entry (src/server.ts) and the Nitro
// node-server preset used for local builds are preserved via the passthrough
// options; inside Lovable builds LOVABLE_NITRO_PRESET pins the real target.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: { preset: "node-server" },
});
