// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode, command }) => {
  const isDev = mode === "development";
  const isBuild = command === "build";

  return {
    server: { host: "::", port: 8080, strictPort: true },
    plugins: [
      react(),
      // splitVendorChunkPlugin removed in Vite >=5.2.7 – use manualChunks instead
    ],
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
      dedupe: ["react", "react-dom"],
    },
    optimizeDeps: {
      include: ["react", "react-dom", "@tanstack/react-query"],
      esbuildOptions: { target: "es2020" },
    },
    build: {
      target: "es2020",
      sourcemap: isDev,
      modulePreload: { polyfill: false },
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;
            if (id.includes("react")) return "react-vendor";
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
    define: {
      __DEV__: JSON.stringify(isDev),
    },
  };
});
