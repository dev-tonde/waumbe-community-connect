// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode, command }) => {
  const isDev = mode === "development";
  const isBuild = command === "build";

  return {
    server: { host: "::", port: 8080, strictPort: true },
    plugins: [
      react(),
      isDev && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        // ensure a single React instance everywhere
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
      esbuildOptions: { target: "es2020" },
    },
    build: {
      target: "es2020",
      sourcemap: false,
      modulePreload: { polyfill: false },
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1024,
      commonjsOptions: {
        include: [/node_modules/],
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;
            // Keep all React-related packages together to prevent duplicate instances
            if (id.includes("react") || id.includes("use-callback-ref") || 
                id.includes("react-remove-scroll") || id.includes("react-style-singleton") ||
                id.includes("use-sidecar")) {
              return "react-vendor";
            }
            // Split heavy libraries for better caching
            if (id.includes("@radix-ui")) return "radix";
            if (id.includes("lucide-react")) return "icons";
            if (id.includes("framer-motion")) return "framer";
            if (id.includes("@tanstack/react-query")) return "query";
            if (id.includes("recharts") || id.includes("d3-")) return "charts";
            if (id.includes("date-fns")) return "date-fns";
            if (id.includes("@supabase")) return "supabase";
            if (id.includes("dompurify")) return "sanitize";
            // Everything else goes to vendor
            return "vendor";
          },
        },
      },
    },
    esbuild: {
      legalComments: "none",
      drop: isBuild ? ["console", "debugger"] : [],
    },
    define: { __DEV__: JSON.stringify(isDev) },
  };
});
