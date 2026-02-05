import type { Preview } from '@storybook/react-vite'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { useEffect } from 'react'
import '../../../packages/tokens/src/index.css'
import '../../../packages/ui/src/styles.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    a11y: {
      test: {
        enable: true,
      },
      config: {
        rules: [
          {
            // Storybookのiframe構造に対応
            id: 'region',
            enabled: false,
          },
        ],
      },
    },
  },
  globalTypes: {
    brand: {
      description: 'Brand theme',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [{ value: 'default', title: 'Default' }],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    brand: 'default',
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    (Story, context) => {
      const brand = context.globals.brand || 'default'

      useEffect(() => {
        document.documentElement.setAttribute('data-brand', brand)
        document.body.style.backgroundColor = 'var(--color-bg-base)'
        document.body.style.color = 'var(--color-text-primary)'
        document.body.style.transition = 'background-color 0.2s, color 0.2s'
      }, [brand])

      return <Story />
    },
  ],
}

export default preview
