import type { Preview } from '@storybook/react'
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
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
    brand: {
      description: 'Brand theme',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    brand: 'default',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light'
      const brand = context.globals.brand || 'default'

      document.documentElement.setAttribute('data-theme', theme)
      document.documentElement.setAttribute('data-brand', brand)

      return Story()
    },
  ],
}

export default preview
