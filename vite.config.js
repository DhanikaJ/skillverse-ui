import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    // Keep LightningCSS off to avoid directive stripping issues
    lightningcss: false,
  },
  build: {
    // Prevent extra CSS minification from interfering
    cssMinify: false,
  },
});
