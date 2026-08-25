import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Dev-only proxy: the browser talks to Vite (5173), and Vite forwards /api and
// /auth to the backend (8000). Same origin in dev = cookies behave like they
// will in production, where the backend serves the built frontend itself.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    strictPort: true,
    proxy: {
      "/api": "http://127.0.0.1:8000",
      "/auth": "http://127.0.0.1:8000",
    },
  },
});
