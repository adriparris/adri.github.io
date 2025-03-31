import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression(), // Enables Brotli & Gzip compression
  ],
  build: {
    chunkSizeWarningLimit: 500, // Prevents large chunk warnings
    rollupOptions: {
      output: {
        // manualChunks(id) {
        //   if (id.includes("node_modules")) {
        //     return "vendor"; // Moves dependencies into a separate file
        //   }
        },
      },
    },
  },
});
