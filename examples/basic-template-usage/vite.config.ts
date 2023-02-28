import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: [{ find: "", replacement: "/src" }],
    alias: {
      Components: path.resolve("src/Components/"),
      Providers: path.resolve("src/Providers/"),
      "@cpqd-quati-tokens": path.resolve("src/@cpqd-quati-tokens/"),
    },
  },
});
