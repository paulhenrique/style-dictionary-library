import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: [{ find: "", replacement: "/src" }],
    alias: {
      "@cpqd-quati-library-example": path.resolve(
        "src/@cpqd-quati-library-example/"
      ),
      "@cpqd-quati-tokens": path.resolve("src/@cpqd-quati-tokens/"),
    },
  },
});
