import { useState, useId } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, RadioGroup } from '@ds/ui'

const meta = {
  title: 'Form/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const DefaultExample = (args: { disabled?: boolean }) => {
  const id = useId()
  return (
    <RadioGroup {...args} name={`default-${id}`} defaultValue="option1">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  )
}

export const Default: Story = {
  render: (args) => <DefaultExample {...args} />,
}

const WithDefaultValueExample = (args: { disabled?: boolean }) => {
  const id = useId()
  return (
    <RadioGroup {...args} name={`preset-${id}`} defaultValue="medium">
      <Radio value="small">Small</Radio>
      <Radio value="medium">Medium</Radio>
      <Radio value="large">Large</Radio>
    </RadioGroup>
  )
}

export const WithDefaultValue: Story = {
  render: (args) => <WithDefaultValueExample {...args} />,
}

const DisabledExample = (args: { disabled?: boolean }) => {
  const id = useId()
  return (
    <RadioGroup {...args} name={`disabled-${id}`} defaultValue="option1">
      <Radio value="option1">Disabled Option 1</Radio>
      <Radio value="option2">Disabled Option 2</Radio>
      <Radio value="option3">Disabled Option 3</Radio>
    </RadioGroup>
  )
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <DisabledExample {...args} />,
}

const IndividualDisabledExample = (args: { disabled?: boolean }) => {
  const id = useId()
  return (
    <RadioGroup {...args} name={`individual-${id}`} defaultValue="option1">
      <Radio value="option1">Available</Radio>
      <Radio value="option2" disabled>Unavailable</Radio>
      <Radio value="option3">Available</Radio>
    </RadioGroup>
  )
}

export const IndividualDisabled: Story = {
  render: (args) => <IndividualDisabledExample {...args} />,
}

const ControlledExample = () => {
  const id = useId()
  const [value, setValue] = useState('react')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RadioGroup name={`framework-${id}`} value={value} onChange={setValue}>
        <Radio value="react">React</Radio>
        <Radio value="vue">Vue</Radio>
        <Radio value="angular">Angular</Radio>
        <Radio value="svelte">Svelte</Radio>
      </RadioGroup>
      <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)' }}>
        Selected: {value}
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}

const HorizontalExample = (args: { disabled?: boolean }) => {
  const id = useId()
  return (
    <RadioGroup {...args} name={`horizontal-${id}`} defaultValue="yes" style={{ flexDirection: 'row', gap: '24px' }}>
      <Radio value="yes">Yes</Radio>
      <Radio value="no">No</Radio>
      <Radio value="maybe">Maybe</Radio>
    </RadioGroup>
  )
}

export const Horizontal: Story = {
  render: (args) => <HorizontalExample {...args} />,
}

const FormExampleComponent = () => {
  const id = useId()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
          Subscription Plan
        </label>
        <RadioGroup name={`plan-${id}`} defaultValue="pro">
          <Radio value="free">Free - $0/month</Radio>
          <Radio value="pro">Pro - $9/month</Radio>
          <Radio value="enterprise">Enterprise - $29/month</Radio>
        </RadioGroup>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
          Billing Cycle
        </label>
        <RadioGroup name={`billing-${id}`} defaultValue="monthly" style={{ flexDirection: 'row', gap: '24px' }}>
          <Radio value="monthly">Monthly</Radio>
          <Radio value="yearly">Yearly (Save 20%)</Radio>
        </RadioGroup>
      </div>
    </div>
  )
}

export const FormExample: Story = {
  render: () => <FormExampleComponent />,
}
