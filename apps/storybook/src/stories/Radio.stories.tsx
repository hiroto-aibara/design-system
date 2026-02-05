import { useState, useId } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
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

/* Coverage Tests - RadioGroup and Radio onChange */

const RadioClickExample = () => {
  const [value, setValue] = useState('')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RadioGroup name="click-test" value={value} onChange={setValue}>
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="cherry">Cherry</Radio>
      </RadioGroup>
      <p style={{ margin: 0, fontSize: '14px' }}>
        Selected: {value || 'none'}
      </p>
    </div>
  )
}

export const RadioClick: Story = {
  render: () => <RadioClickExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Click on Apple using getByRole
    await userEvent.click(canvas.getByRole('radio', { name: 'Apple' }))
    await expect(canvas.getByText('Selected: apple')).toBeInTheDocument()

    // Click on Banana
    await userEvent.click(canvas.getByRole('radio', { name: 'Banana' }))
    await expect(canvas.getByText('Selected: banana')).toBeInTheDocument()

    // Click on Cherry
    await userEvent.click(canvas.getByRole('radio', { name: 'Cherry' }))
    await expect(canvas.getByText('Selected: cherry')).toBeInTheDocument()
  },
}

const UncontrolledRadioExample = () => {
  const id = useId()
  return (
    <RadioGroup name={`uncontrolled-${id}`} defaultValue="first">
      <Radio value="first">First</Radio>
      <Radio value="second">Second</Radio>
      <Radio value="third">Third</Radio>
    </RadioGroup>
  )
}

export const UncontrolledRadio: Story = {
  render: () => <UncontrolledRadioExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Default value is "first", click on second
    const secondRadio = canvas.getByRole('radio', { name: 'Second' })
    await userEvent.click(secondRadio)

    // Verify the radio input is checked
    await expect(secondRadio).toBeChecked()

    // Click on third
    const thirdRadio = canvas.getByRole('radio', { name: 'Third' })
    await userEvent.click(thirdRadio)

    await expect(thirdRadio).toBeChecked()
  },
}

const RadioHoverExample = () => {
  const id = useId()
  return (
    <RadioGroup name={`hover-${id}`} defaultValue="opt1">
      <Radio value="opt1">Option 1</Radio>
      <Radio value="opt2">Option 2</Radio>
      <Radio value="opt3" disabled>Disabled Option</Radio>
    </RadioGroup>
  )
}

export const RadioHover: Story = {
  render: () => <RadioHoverExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Hover over normal radio - use the label text
    const label1 = canvas.getByText('Option 1')
    await userEvent.hover(label1)
    await userEvent.unhover(label1)

    // Hover over another radio
    const label2 = canvas.getByText('Option 2')
    await userEvent.hover(label2)
    await userEvent.unhover(label2)

    // Hover over disabled radio
    const disabledLabel = canvas.getByText('Disabled Option')
    await userEvent.hover(disabledLabel)
    await userEvent.unhover(disabledLabel)
  },
}
