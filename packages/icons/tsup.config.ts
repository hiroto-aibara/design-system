import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  outExtension: () => ({ js: '.js' }),
  dts: true,
  clean: true,
  external: ['react'],
  treeshake: true,
})
