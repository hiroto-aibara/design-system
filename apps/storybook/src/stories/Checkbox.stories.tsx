import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Checkbox } from '@ds/ui'

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isInvalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Checkbox {...args}>Remember me</Checkbox>,
}

export const Checked: Story = {
  render: (args) => (
    <Checkbox {...args} defaultChecked>
      Checked by default
    </Checkbox>
  ),
}

export const WithoutLabel: Story = {
  render: (args) => <Checkbox {...args} aria-label="Toggle option" />,
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
  render: (args) => (
    <Checkbox {...args}>
      I agree to the terms
    </Checkbox>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Checkbox {...args}>Disabled option</Checkbox>,
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Checkbox {...args} defaultChecked>
      Disabled and checked
    </Checkbox>
  ),
}

const ControlledExample = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      >
        Controlled checkbox
      </Checkbox>
      <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)' }}>
        State: {checked ? 'Checked' : 'Unchecked'}
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}

export const MultipleOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox defaultChecked>Option A</Checkbox>
      <Checkbox>Option B</Checkbox>
      <Checkbox>Option C</Checkbox>
      <Checkbox disabled>Option D (disabled)</Checkbox>
    </div>
  ),
}

/* isInvalid / aria-invalid tests */
export const InvalidAriaTest: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox data-testid="invalid-checkbox" isInvalid>Must agree</Checkbox>
      <Checkbox data-testid="valid-checkbox">Optional</Checkbox>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const invalidCheckbox = canvas.getByTestId('invalid-checkbox')
    expect(invalidCheckbox).toHaveAttribute('aria-invalid', 'true')

    const validCheckbox = canvas.getByTestId('valid-checkbox')
    expect(validCheckbox).not.toHaveAttribute('aria-invalid')
  },
}
