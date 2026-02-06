import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Select, Option } from '@ds/ui'

const meta = {
  title: 'Form/Select',
  component: Select,
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
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Select {...args} style={{ width: '250px' }}>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  ),
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: '選択してください',
  },
  render: (args) => (
    <Select {...args} defaultValue="" style={{ width: '250px' }}>
      <Option value="apple">Apple</Option>
      <Option value="banana">Banana</Option>
      <Option value="orange">Orange</Option>
    </Select>
  ),
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (
    <Select {...args} style={{ width: '200px' }}>
      <Option value="1">Small Select</Option>
      <Option value="2">Option 2</Option>
    </Select>
  ),
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <Select {...args} style={{ width: '250px' }}>
      <Option value="1">Medium Select</Option>
      <Option value="2">Option 2</Option>
    </Select>
  ),
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => (
    <Select {...args} style={{ width: '300px' }}>
      <Option value="1">Large Select</Option>
      <Option value="2">Option 2</Option>
    </Select>
  ),
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
  render: (args) => (
    <Select {...args} style={{ width: '250px' }}>
      <Option value="1">Invalid State</Option>
      <Option value="2">Option 2</Option>
    </Select>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Select {...args} style={{ width: '250px' }}>
      <Option value="1">Disabled</Option>
      <Option value="2">Option 2</Option>
    </Select>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select size="sm" defaultValue="sm">
        <Option value="sm">Small</Option>
        <Option value="other">Other</Option>
      </Select>
      <Select size="md" defaultValue="md">
        <Option value="md">Medium</Option>
        <Option value="other">Other</Option>
      </Select>
      <Select size="lg" defaultValue="lg">
        <Option value="lg">Large</Option>
        <Option value="other">Other</Option>
      </Select>
    </div>
  ),
}

/* isInvalid / aria-invalid tests */
export const InvalidAriaTest: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select data-testid="invalid-select" isInvalid>
        <Option value="1">Invalid</Option>
      </Select>
      <Select data-testid="valid-select">
        <Option value="1">Valid</Option>
      </Select>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const invalidSelect = canvas.getByTestId('invalid-select')
    expect(invalidSelect).toHaveAttribute('aria-invalid', 'true')

    const validSelect = canvas.getByTestId('valid-select')
    expect(validSelect).not.toHaveAttribute('aria-invalid')
  },
}
