import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
    'storybook/viewport',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    viewport: true,
  },
  viteFinal: async (config) => {
    // Docker環境でのHMR WebSocket設定
    // STORYBOOK_CLIENT_PORT 環境変数で外部ポートを指定可能
    const clientPort = process.env.STORYBOOK_CLIENT_PORT
      ? parseInt(process.env.STORYBOOK_CLIENT_PORT, 10)
      : undefined

    if (clientPort) {
      config.server = {
        ...config.server,
        hmr: {
          clientPort,
        },
      }
    }

    return config
  },
}

export default config
