import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'], // Add your external dependencies here
      plugins: [dts()],
    },
    sourcemap: true,
  },
  optimizeDeps: {
    exclude: ['react', 'react-dom'], // Add your external dependencies here
  },
});
