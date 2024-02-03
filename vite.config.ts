import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'custom-form-utils',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'antd', 'react-dom'], // Add your external dependencies here
      plugins: [dts()],
    },
  },
});
