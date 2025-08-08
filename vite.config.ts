/** LIBRARIES */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          return undefined;
        },
      },
    },
    target: "es2015",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@cv": path.resolve(__dirname, "./src/modules/cv"),
      "@error": path.resolve(__dirname, "./src/modules/error"),
      "@login": path.resolve(__dirname, "./src/modules/login"),
      "@shared": path.resolve(__dirname, "./src/modules/shared"),
      "@src": path.resolve(__dirname, "./src"),
    },
  },
});
