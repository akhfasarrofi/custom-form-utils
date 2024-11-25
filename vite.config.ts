import react from '@vitejs/plugin-react'
import { glob } from 'glob'
import { extname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'lib',
      outDir: 'dist/types',
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: new URL('lib/index.ts', import.meta.url).pathname,
      formats: ['es'],
      fileName: format => `custom-form-utils.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'crypto-js',
        'dayjs',
        'js-cookie',
      ],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: ['lib/**/*.d.ts'],
          })
          .map(file => [
            // Key for output structure
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // Absolute path from file
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'crypto-js': 'CryptoJS',
          'dayjs': 'dayjs',
          'js-cookie': 'Cookies',
        },
      },
    },

  },
})
