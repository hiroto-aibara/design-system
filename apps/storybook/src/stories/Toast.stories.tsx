import type { Meta, StoryObj } from '@storybook/react-vite'
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
