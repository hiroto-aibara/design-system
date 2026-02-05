import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading } from '@ds/ui'

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
    },
    noMargin: {
      control: 'boolean',
    },
    leftAlign: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    level: 'h1',
    children: 'Heading Level 1',
  },
}

export const H2: Story = {
  args: {
    level: 'h2',
    children: 'Heading Level 2',
  },
}

export const H3: Story = {
  args: {
    level: 'h3',
    children: 'Heading Level 3',
  },
}

export const H4: Story = {
  args: {
    level: 'h4',
    children: 'Heading Level 4',
  },
}

export const H5: Story = {
  args: {
    level: 'h5',
    children: 'Heading Level 5',
  },
}

export const NoMargin: Story = {
  args: {
    level: 'h2',
    noMargin: true,
    children: 'Heading without margin',
  },
}

export const LeftAlign: Story = {
  args: {
    level: 'h2',
    leftAlign: true,
    children: 'Left-aligned heading',
  },
}

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '500px' }}>
      <Heading level="h1">Heading 1</Heading>
      <Heading level="h2">Heading 2</Heading>
      <Heading level="h3">Heading 3</Heading>
      <Heading level="h4">Heading 4</Heading>
      <Heading level="h5">Heading 5</Heading>
    </div>
  ),
}

export const AllLevelsNoMargin: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
      <Heading level="h1" noMargin>Heading 1 (no margin)</Heading>
      <Heading level="h2" noMargin>Heading 2 (no margin)</Heading>
      <Heading level="h3" noMargin>Heading 3 (no margin)</Heading>
      <Heading level="h4" noMargin>Heading 4 (no margin)</Heading>
      <Heading level="h5" noMargin>Heading 5 (no margin)</Heading>
    </div>
  ),
}
