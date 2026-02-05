import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@ds/ui'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isInvalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium input',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    placeholder: 'Invalid input',
    defaultValue: 'Invalid value',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello World',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input placeholder="Default" />
      <Input placeholder="Invalid" isInvalid />
      <Input placeholder="Disabled" disabled />
    </div>
  ),
}

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
  </svg>
)

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ cursor: 'pointer' }}>
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88l6.5-3.81Z" />
  </svg>
)

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <SearchIcon />,
    placeholder: 'Search...',
  },
}

export const WithRightIcon: Story = {
  args: {
    rightIcon: <CloseIcon />,
    placeholder: 'Type to search...',
    defaultValue: 'Some text',
  },
}

export const WithBothIcons: Story = {
  args: {
    leftIcon: <MailIcon />,
    rightIcon: <CloseIcon />,
    placeholder: 'Enter email...',
  },
}

export const IconSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input size="sm" leftIcon={<SearchIcon />} placeholder="Small with icon" />
      <Input size="md" leftIcon={<SearchIcon />} placeholder="Medium with icon" />
      <Input size="lg" leftIcon={<SearchIcon />} placeholder="Large with icon" />
    </div>
  ),
}
