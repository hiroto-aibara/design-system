import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: false,
  banner: {
    js: "import './index.css';",
  },
})
