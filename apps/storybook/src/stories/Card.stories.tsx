import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@ds/ui'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    shadow: {
      control: 'boolean',
    },
    bordered: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Card content',
    style: { width: '300px' },
  },
}

export const WithShadow: Story = {
  args: {
    shadow: true,
    children: 'Card with shadow',
    style: { width: '300px' },
  },
}

export const WithBorder: Story = {
  args: {
    bordered: true,
    shadow: false,
    children: 'Card with border',
    style: { width: '300px' },
  },
}

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: 'Card with no padding',
    style: { width: '300px' },
  },
}

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: 'Card with small padding',
    style: { width: '300px' },
  },
}

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: 'Card with large padding',
    style: { width: '300px' },
  },
}

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardHeader>
        <h3 style={{ margin: 0 }}>Card Title</h3>
      </CardHeader>
      <CardBody>
        <p style={{ margin: 0 }}>
          This is the card body content. You can put any content here.
        </p>
      </CardBody>
      <CardFooter>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save</Button>
        </div>
      </CardFooter>
    </Card>
  ),
}

export const ProfileCard: Story = {
  render: () => (
    <Card style={{ width: '300px' }}>
      <CardHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            JD
          </div>
          <div>
            <h4 style={{ margin: 0 }}>John Doe</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.7 }}>Developer</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p style={{ margin: 0, fontSize: '0.875rem' }}>
          Full-stack developer with 5 years of experience in React and Node.js.
        </p>
      </CardBody>
      <CardFooter>
        <Button variant="secondary" size="sm" style={{ width: '100%' }}>
          View Profile
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const AllPaddings: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card padding="none" bordered style={{ width: '150px' }}>
        <p style={{ margin: 0 }}>None</p>
      </Card>
      <Card padding="sm" bordered style={{ width: '150px' }}>
        <p style={{ margin: 0 }}>Small</p>
      </Card>
      <Card padding="md" bordered style={{ width: '150px' }}>
        <p style={{ margin: 0 }}>Medium</p>
      </Card>
      <Card padding="lg" bordered style={{ width: '150px' }}>
        <p style={{ margin: 0 }}>Large</p>
      </Card>
    </div>
  ),
}

export const WithShadowAndBorder: Story = {
  args: {
    shadow: true,
    bordered: true,
    children: 'Card with both shadow and border',
    style: { width: '300px' },
  },
}

export const StyleCombinations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card style={{ width: '180px' }}>
        <p style={{ margin: 0, fontWeight: 500 }}>Default</p>
        <p style={{ margin: '4px 0 0', fontSize: '12px', opacity: 0.7 }}>No shadow, no border</p>
      </Card>
      <Card shadow style={{ width: '180px' }}>
        <p style={{ margin: 0, fontWeight: 500 }}>Shadow Only</p>
        <p style={{ margin: '4px 0 0', fontSize: '12px', opacity: 0.7 }}>shadow=true</p>
      </Card>
      <Card bordered style={{ width: '180px' }}>
        <p style={{ margin: 0, fontWeight: 500 }}>Border Only</p>
        <p style={{ margin: '4px 0 0', fontSize: '12px', opacity: 0.7 }}>bordered=true</p>
      </Card>
      <Card shadow bordered style={{ width: '180px' }}>
        <p style={{ margin: 0, fontWeight: 500 }}>Both</p>
        <p style={{ margin: '4px 0 0', fontSize: '12px', opacity: 0.7 }}>shadow + bordered</p>
      </Card>
    </div>
  ),
}
