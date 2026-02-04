import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ds/tokens': path.resolve(__dirname, '../../packages/tokens/src/index.css'),
      '@ds/ui/styles.css': path.resolve(__dirname, '../../packages/ui/src/styles.css'),
      '@ds/ui': path.resolve(__dirname, '../../packages/ui/src/index.ts'),
    },
  },
})
