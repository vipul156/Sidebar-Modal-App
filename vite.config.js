import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "dchlwg-5173.csb.app", // ✅ Allow your sandbox host
    ],
  },
});
