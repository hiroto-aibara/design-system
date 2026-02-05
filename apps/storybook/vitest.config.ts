import { defineConfig } from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import istanbul from 'vite-plugin-istanbul'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const monorepoRoot = path.resolve(dirname, '../..')

export default defineConfig({
  plugins: [
    storybookTest({
      configDir: path.join(dirname, '.storybook'),
    }),
    istanbul({
      include: ['**/packages/ui/src/**/*'],
      exclude: ['node_modules', '**/*.css'],
      extension: ['.ts', '.tsx'],
    }),
  ],
  resolve: {
    alias: {
      '@ds/ui': path.join(monorepoRoot, 'packages/ui/src'),
    },
  },
  optimizeDeps: {
    include: ['@storybook/react-vite'],
  },
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [{ browser: 'chromium' }],
    },
    setupFiles: ['./.storybook/vitest.setup.ts'],
    isolate: false,
    coverage: {
      provider: 'istanbul',
      enabled: true,
      allowExternal: true,
      include: ['**/packages/ui/src/**/*.tsx'],
      exclude: ['**/index.ts'],
      reportsDirectory: './coverage',
    },
  },
})
