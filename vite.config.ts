import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import libCss from 'vite-plugin-libcss';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    dts({
      insertTypesEntry: true,
    }),
    libCss(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@ma9pie/test-package',
      fileName: 'index',
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      treeshake: 'recommended',
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
