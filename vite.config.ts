// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Only load the visualizer when ANALYZE=1
const ANALYZE = process.env.ANALYZE === "1";
let visualizer;
if (ANALYZE) {
  // @ts-ignore - optional dev dep
  visualizer = (await import("rollup-plugin-visualizer")).visualizer;
}

export default defineConfig(({ mode, command }) => {
  const isDev = mode === "development";
  const isBuild = command === "build";

  return {
    server: { host: "::", port: 8080, strictPort: true },
    cacheDir: ".vite", // helps cache reuse on CI
    plugins: [
      react(),
      // only attach visualizer when ANALYZE=1
      ANALYZE && visualizer({ filename: "stats.html", gzipSize: true, brotliSize: true, open: true }),
      // only run lovable-tagger in dev
      isDev && (await import("lovable-tagger")).componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        // ensure single React instance
        react: path.resolve(__dirname, "node_modules/react"),
        "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
        "react/jsx-runtime": path.resolve(__dirname, "node_modules/react/jsx-runtime"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime"],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@tanstack/react-query",
        "use-callback-ref",
        "react-resizable-panels",
        "react-remove-scroll",
        "react-style-singleton",
        "use-sidecar",
      ],
      // If you lazy-load big libs (charts, framer), keep them out of dev prebundle:
      exclude: [
        "recharts",
        "framer-motion",
        "date-fns", // if used only in a few places; remove if used widely
      ],
      esbuildOptions: { target: "es2020" },
    },
    build: {
      target: "es2020",
      sourcemap: false,
      modulePreload: { polyfill: false },
      cssCodeSplit: true,
      // raise if you have legit big bundles; otherwise 1024 is fine
      chunkSizeWarningLimit: 1024,
      commonjsOptions: {
        include: [/node_modules/],
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;

            // Keep React ecosystem together to avoid duplicate instances
            if (
              id.includes("react") ||
              id.includes("use-callback-ref") ||
              id.includes("react-remove-scroll") ||
              id.includes("react-style-singleton") ||
              id.includes("use-sidecar")
            ) {
              return "react-vendor";
            }

            // Split other heavy libs for better caching
            if (id.includes("@radix-ui")) return "radix";
            if (id.includes("lucide-react")) return "icons";
            if (id.includes("framer-motion")) return "framer";
            if (id.includes("@tanstack/react-query")) return "query";
            if (id.includes("recharts") || id.includes("d3-")) return "charts";
            if (id.includes("date-fns")) return "date-fns";
            if (id.includes("@supabase")) return "supabase";
            if (id.includes("dompurify")) return "sanitize";

            // Everything else
            return "vendor";
          },
        },
        // optional: treeshake tweaks (Vite defaults are already good)
        treeshake: { preset: "recommended" },
      },
    },
    esbuild: {
      legalComments: "none",
      drop: isBuild ? ["console", "debugger"] : [],
    },
    define: {
      __DEV__: JSON.stringify(isDev),
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
  };
});
