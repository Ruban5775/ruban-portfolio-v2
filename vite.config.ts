import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@data": path.resolve(import.meta.dirname, "./public/data.ts"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
});
