import type { Meta, StoryObj } from '@storybook/react-vite'
import { Container } from '@ds/ui'

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    padding: {
      control: 'boolean',
    },
    width: {
      control: 'text',
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

const ContentBox = ({ label }: { label: string }) => (
  <div
    style={{
      padding: '2rem',
      backgroundColor: 'var(--color-primary-subtle)',
      border: '2px dashed var(--color-primary)',
      borderRadius: '8px',
      textAlign: 'center',
    }}
  >
    <p style={{ margin: 0, fontWeight: 500 }}>{label}</p>
  </div>
)

export const Default: Story = {
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Default Container (lg)" />
    </Container>
  ),
}

export const Small: Story = {
  args: {
    maxWidth: 'sm',
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Small Container (sm)" />
    </Container>
  ),
}

export const Medium: Story = {
  args: {
    maxWidth: 'md',
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Medium Container (md)" />
    </Container>
  ),
}

export const Large: Story = {
  args: {
    maxWidth: 'lg',
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Large Container (lg)" />
    </Container>
  ),
}

export const ExtraLarge: Story = {
  args: {
    maxWidth: 'xl',
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Extra Large Container (xl)" />
    </Container>
  ),
}

export const TwoXL: Story = {
  args: {
    maxWidth: '2xl',
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="2XL Container (2xl)" />
    </Container>
  ),
}

export const Full: Story = {
  args: {
    maxWidth: 'full',
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Full Width Container" />
    </Container>
  ),
}

export const NoPadding: Story = {
  args: {
    padding: false,
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Container without horizontal padding" />
    </Container>
  ),
}

export const CustomWidth: Story = {
  args: {
    width: '80%',
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Custom Width (80%)" />
    </Container>
  ),
}

export const AllWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
      <Container maxWidth="sm">
        <ContentBox label="sm" />
      </Container>
      <Container maxWidth="md">
        <ContentBox label="md" />
      </Container>
      <Container maxWidth="lg">
        <ContentBox label="lg" />
      </Container>
      <Container maxWidth="xl">
        <ContentBox label="xl" />
      </Container>
      <Container maxWidth="2xl">
        <ContentBox label="2xl" />
      </Container>
      <Container maxWidth="full">
        <ContentBox label="full" />
      </Container>
    </div>
  ),
}
