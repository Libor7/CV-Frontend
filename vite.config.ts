import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@auth": path.resolve(__dirname, "./src/modules/auth"),
      "@cv": path.resolve(__dirname, "./src/modules/cv"),
      "@error": path.resolve(__dirname, "./src/modules/error"),
      "@shared": path.resolve(__dirname, "./src/modules/shared"),
      "@src": path.resolve(__dirname, "./src"),
    },
  },
});
