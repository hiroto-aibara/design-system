import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within, waitFor } from 'storybook/test'
import { Toast, ToastProvider, useToast, Button } from '@ds/ui'

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    closable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    message: 'This is an informational message.',
    variant: 'info',
  },
}

export const Success: Story = {
  args: {
    message: 'Your changes have been saved successfully!',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    message: 'Please review your input before continuing.',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    message: 'An error occurred while processing your request.',
    variant: 'error',
  },
}

export const NotClosable: Story = {
  args: {
    message: 'This toast cannot be closed manually.',
    variant: 'info',
    closable: false,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '350px' }}>
      <Toast message="Info: This is an informational message." variant="info" />
      <Toast message="Success: Your changes have been saved!" variant="success" />
      <Toast message="Warning: Please review your input." variant="warning" />
      <Toast message="Error: Something went wrong." variant="error" />
    </div>
  ),
}

// Interactive example with ToastProvider
const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <Button
        onClick={() => toast({ message: 'This is an info toast!', variant: 'info' })}
      >
        Show Info
      </Button>
      <Button
        variant="primary"
        onClick={() => toast({ message: 'Successfully saved!', variant: 'success' })}
      >
        Show Success
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast({ message: 'Please check your input.', variant: 'warning' })}
      >
        Show Warning
      </Button>
      <Button
        variant="danger"
        onClick={() => toast({ message: 'An error occurred!', variant: 'error' })}
      >
        Show Error
      </Button>
    </div>
  )
}

export const Interactive: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => <ToastDemo />,
}

const CustomDurationDemo = () => {
  const { toast } = useToast()

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <Button
        onClick={() => toast({ message: 'Quick toast (2s)', variant: 'info', duration: 2000 })}
      >
        2 seconds
      </Button>
      <Button
        onClick={() => toast({ message: 'Default toast (5s)', variant: 'info' })}
      >
        5 seconds (default)
      </Button>
      <Button
        onClick={() => toast({ message: 'Long toast (10s)', variant: 'info', duration: 10000 })}
      >
        10 seconds
      </Button>
      <Button
        onClick={() => toast({ message: 'Manual close only', variant: 'warning', duration: 0 })}
      >
        No auto-close
      </Button>
    </div>
  )
}

export const CustomDuration: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => <CustomDurationDemo />,
}

const MultipleToastsDemo = () => {
  const { toast } = useToast()
  let count = 0

  return (
    <Button
      onClick={() => {
        count++
        toast({
          message: `Toast notification #${count}`,
          variant: ['info', 'success', 'warning', 'error'][count % 4] as 'info' | 'success' | 'warning' | 'error',
        })
      }}
    >
      Add Toast
    </Button>
  )
}

export const MultipleToasts: Story = {
  decorators: [
    (Story) => (
      <ToastProvider maxToasts={5}>
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => <MultipleToastsDemo />,
}

/* Coverage Tests - Toast close button and auto-dismiss */

const ToastCloseDemo = () => {
  const { toast } = useToast()
  const [clickCount, setClickCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Button
        onClick={() => {
          setClickCount(c => c + 1)
          toast({ message: `Toast #${clickCount + 1}`, variant: 'info', duration: 0 })
        }}
        data-testid="show-toast"
      >
        Show Toast
      </Button>
      <p data-testid="click-count">Toasts shown: {clickCount}</p>
    </div>
  )
}

export const ToastClose: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => <ToastCloseDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Show a toast
    await userEvent.click(canvas.getByTestId('show-toast'))

    // Wait for toast to appear
    await waitFor(() => {
      expect(document.querySelector('.ds-toast')).toBeInTheDocument()
    })

    // Click the close button
    const closeButton = document.querySelector('.ds-toast__close') as HTMLElement
    if (closeButton) {
      await userEvent.click(closeButton)
    }

    // Wait for toast to disappear
    await waitFor(() => {
      expect(document.querySelector('.ds-toast')).not.toBeInTheDocument()
    })
  },
}

const ToastAutoDismissDemo = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => toast({ message: 'Auto dismiss in 1s', variant: 'success', duration: 1000 })}
      data-testid="show-auto-toast"
    >
      Show Auto-dismiss Toast
    </Button>
  )
}

export const ToastAutoDismiss: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => <ToastAutoDismissDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Show toast with short duration
    await userEvent.click(canvas.getByTestId('show-auto-toast'))

    // Wait for toast to appear
    await waitFor(() => {
      expect(document.querySelector('.ds-toast')).toBeInTheDocument()
    })

    // Wait for auto-dismiss (1 second + buffer)
    await waitFor(
      () => {
        expect(document.querySelector('.ds-toast')).not.toBeInTheDocument()
      },
      { timeout: 2000 }
    )
  },
}

const MaxToastsDemo = () => {
  const { toast } = useToast()
  let count = 0

  return (
    <Button
      onClick={() => {
        count++
        toast({ message: `Toast ${count}`, variant: 'info', duration: 0 })
      }}
      data-testid="add-toast"
    >
      Add Toast
    </Button>
  )
}

export const MaxToastsLimit: Story = {
  decorators: [
    (Story) => (
      <ToastProvider maxToasts={3}>
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => <MaxToastsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const addButton = canvas.getByTestId('add-toast')

    // Add 5 toasts (but maxToasts is 3)
    for (let i = 0; i < 5; i++) {
      await userEvent.click(addButton)
      // Small delay between clicks
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    // Should only show 3 toasts due to maxToasts limit
    await waitFor(() => {
      const toasts = document.querySelectorAll('.ds-toast')
      expect(toasts.length).toBeLessThanOrEqual(3)
    })
  },
}

/* Test all toast variants with play function */
const AllVariantsDemo = () => {
  const { toast } = useToast()

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Button data-testid="info-btn" onClick={() => toast({ message: 'Info', variant: 'info' })}>
        Info
      </Button>
      <Button data-testid="success-btn" onClick={() => toast({ message: 'Success', variant: 'success' })}>
        Success
      </Button>
      <Button data-testid="warning-btn" onClick={() => toast({ message: 'Warning', variant: 'warning' })}>
        Warning
      </Button>
      <Button data-testid="error-btn" onClick={() => toast({ message: 'Error', variant: 'error' })}>
        Error
      </Button>
    </div>
  )
}

export const ToastVariantsTest: Story = {
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => <AllVariantsDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Click each variant button
    await userEvent.click(canvas.getByTestId('info-btn'))
    await waitFor(() => {
      expect(document.querySelector('.ds-toast--info')).toBeInTheDocument()
    })

    await userEvent.click(canvas.getByTestId('success-btn'))
    await waitFor(() => {
      expect(document.querySelector('.ds-toast--success')).toBeInTheDocument()
    })

    await userEvent.click(canvas.getByTestId('warning-btn'))
    await waitFor(() => {
      expect(document.querySelector('.ds-toast--warning')).toBeInTheDocument()
    })

    await userEvent.click(canvas.getByTestId('error-btn'))
    await waitFor(() => {
      expect(document.querySelector('.ds-toast--error')).toBeInTheDocument()
    })
  },
}
