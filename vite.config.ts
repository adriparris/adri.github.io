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
    chunkSizeWarningLimit: 1000, // Prevents large chunk warnings
      },
    },
  );
