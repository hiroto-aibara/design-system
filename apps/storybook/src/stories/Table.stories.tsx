import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@ds/ui'

const meta = {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    striped: {
      control: 'boolean',
    },
    hoverable: {
      control: 'boolean',
    },
    bordered: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'QA Engineer' },
]

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((row) => (
          <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
}

export const Striped: Story = {
  args: {
    striped: true,
  },
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((row) => (
          <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
}

export const Hoverable: Story = {
  args: {
    hoverable: true,
  },
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((row) => (
          <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
}

export const Bordered: Story = {
  args: {
    bordered: true,
  },
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((row) => (
          <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
}

export const Small: Story = {
  args: {
    size: 'sm',
    striped: true,
  },
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((row) => (
          <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
}

export const Large: Story = {
  args: {
    size: 'lg',
    striped: true,
  },
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((row) => (
          <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
}

export const WithFooter: Story = {
  args: {
    striped: true,
    bordered: true,
  },
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Product</Th>
          <Th>Qty</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Widget A</Td>
          <Td>10</Td>
          <Td>$100</Td>
        </Tr>
        <Tr>
          <Td>Widget B</Td>
          <Td>5</Td>
          <Td>$75</Td>
        </Tr>
        <Tr>
          <Td>Widget C</Td>
          <Td>20</Td>
          <Td>$200</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Td>Total</Td>
          <Td>35</Td>
          <Td>$375</Td>
        </Tr>
      </Tfoot>
    </Table>
  ),
}

export const FullFeatured: Story = {
  args: {
    striped: true,
    hoverable: true,
    bordered: true,
  },
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sampleData.map((row) => (
          <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.email}</Td>
            <Td>{row.role}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
}
