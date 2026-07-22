import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // IMPORTANT: this makes Vite use client/index.html as the entry point
  // (the file with the correct Google Ads conversion tracking),
  // instead of defaulting to a root-level index.html.
  root: path.resolve(__dirname, "client"),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    // Output to <project root>/dist, matching vercel.json's outputDirectory
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
