import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import { extname, relative, resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: new URL('lib/main.ts', import.meta.url).pathname,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: glob.sync('lib/**/*.ts').reduce(
        (acc, file) => {
          const name = relative(resolve('lib'), file).replace(
            extname(file),
            ''
          );
          acc[name] = file;
          return acc;
        },
        {} as Record<string, string>
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});
