import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production")
  },
  build: {
    emptyOutDir: true,
    outDir: "generated/antd-workbench",
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/workbench-antd.jsx"),
      name: "WorkbenchAntd",
      formats: ["iife"],
      fileName: () => "workbench-antd.js"
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: "workbench-antd.[ext]"
      }
    }
  }
});
