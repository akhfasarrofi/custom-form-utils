import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "custom-form-utils",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "antd", "react-dom"], // Add your external dependencies here
      output: {
        sourcemap: true,
      },
      plugins: [dts()],
    },
  },
});
