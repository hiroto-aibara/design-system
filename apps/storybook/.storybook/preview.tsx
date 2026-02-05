import type { Preview } from '@storybook/react-vite'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
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
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
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
    theme: 'light',
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
      const theme = context.globals.theme || 'light'

      useEffect(() => {
        document.documentElement.setAttribute('data-brand', brand)
        document.documentElement.setAttribute('data-theme', theme)
        document.body.style.backgroundColor = 'var(--color-bg-base)'
        document.body.style.color = 'var(--color-text-primary)'
        document.body.style.transition = 'background-color 0.2s, color 0.2s'
      }, [brand, theme])

      return <Story />
    },
  ],
}

export default preview
