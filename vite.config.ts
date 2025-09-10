// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode, command }) => {
  const isDev = mode === "development";
  const isBuild = command === "build";

  return {
    server: { host: "::", port: 8080, strictPort: true },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        // ensure a single React instance everywhere
        react: path.resolve(__dirname, "node_modules/react"),
        "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
        // 🚑 force ESM build so React is actually imported in use-callback-ref
        "use-callback-ref": "use-callback-ref/dist/es2019/index.js",
      },
      dedupe: ["react", "react-dom"],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "@tanstack/react-query",
        "use-callback-ref",
        "react-resizable-panels",
      ],
      esbuildOptions: { target: "es2020" },
    },
    build: {
      target: "es2020",
      sourcemap: true,
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
    define: { __DEV__: JSON.stringify(isDev) },
  };
});
