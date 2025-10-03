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
    ssr: {
      noExternal: ["react", "react-dom"],
    },
    build: {
      target: "es2020",
      sourcemap: true,
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
            if (id.includes("@radix-ui")) return "radix";
            if (id.includes("lucide-react")) return "icons";
            if (id.includes("date-fns")) return "date-fns";
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
