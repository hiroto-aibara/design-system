import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { GlobalNav, NavItem, NavLogo, Button } from '@ds/ui'

const meta = {
  title: 'Layout/GlobalNav',
  component: GlobalNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlobalNav>

export default meta
type Story = StoryObj<typeof meta>

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6ZM8.05 14.943a33.54 33.54 0 0 0 3.9 0 2 2 0 0 1-3.9 0Z" clipRule="evenodd" />
  </svg>
)

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
  </svg>
)

export const Default: Story = {
  render: () => (
    <GlobalNav
      logo={<NavLogo icon="DS" title="Design System" />}
    />
  ),
}

export const WithNavigation: Story = {
  render: () => (
    <GlobalNav
      logo={<NavLogo icon="DS" title="Design System" />}
      navigation={
        <>
          <NavItem isActive>Dashboard</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Team</NavItem>
          <NavItem>Reports</NavItem>
        </>
      }
    />
  ),
}

export const WithActions: Story = {
  render: () => (
    <GlobalNav
      logo={<NavLogo icon="DS" title="Design System" />}
      actions={
        <>
          <Button variant="ghost" size="sm">
            <BellIcon />
          </Button>
          <Button variant="ghost" size="sm">
            <UserIcon />
          </Button>
        </>
      }
    />
  ),
}

export const FullNavigation: Story = {
  render: () => (
    <GlobalNav
      logo={<NavLogo icon="DS" title="Design System" />}
      navigation={
        <>
          <NavItem isActive>Dashboard</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Team</NavItem>
          <NavItem>Reports</NavItem>
        </>
      }
      actions={
        <>
          <Button variant="ghost" size="sm">
            <BellIcon />
          </Button>
          <Button variant="primary" size="sm">Sign In</Button>
        </>
      }
    />
  ),
}

export const WithActiveItem: Story = {
  render: () => (
    <GlobalNav
      logo={<NavLogo icon="DS" title="Design System" />}
      navigation={
        <>
          <NavItem>Home</NavItem>
          <NavItem isActive>Products</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </>
      }
    />
  ),
}

export const LogoOnly: Story = {
  render: () => (
    <GlobalNav
      logo={<NavLogo icon="DS" title="My Application" />}
    />
  ),
}

export const CustomLogo: Story = {
  render: () => (
    <GlobalNav
      logo={
        <NavLogo title="Acme Inc">
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-danger)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '14px',
              marginRight: '12px',
            }}
          >
            A
          </div>
        </NavLogo>
      }
      navigation={
        <>
          <NavItem isActive>Home</NavItem>
          <NavItem>Products</NavItem>
        </>
      }
    />
  ),
}

/* Coverage Tests - NavItem onClick and hover */

const NavItemClickExample = () => {
  const [selected, setSelected] = useState('Dashboard')
  return (
    <GlobalNav
      logo={<NavLogo icon="DS" title="Design System" />}
      navigation={
        <>
          <NavItem
            isActive={selected === 'Dashboard'}
            onClick={() => setSelected('Dashboard')}
          >
            Dashboard
          </NavItem>
          <NavItem
            isActive={selected === 'Projects'}
            onClick={() => setSelected('Projects')}
          >
            Projects
          </NavItem>
          <NavItem
            isActive={selected === 'Settings'}
            onClick={() => setSelected('Settings')}
          >
            Settings
          </NavItem>
        </>
      }
      actions={
        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
          Selected: {selected}
        </span>
      }
    />
  )
}

export const NavItemClick: Story = {
  render: () => <NavItemClickExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Click Projects using getByRole
    await userEvent.click(canvas.getByRole('button', { name: 'Projects' }))
    await expect(canvas.getByText('Selected: Projects')).toBeInTheDocument()

    // Click Settings
    await userEvent.click(canvas.getByRole('button', { name: 'Settings' }))
    await expect(canvas.getByText('Selected: Settings')).toBeInTheDocument()

    // Click Dashboard
    await userEvent.click(canvas.getByRole('button', { name: 'Dashboard' }))
    await expect(canvas.getByText('Selected: Dashboard')).toBeInTheDocument()
  },
}

export const NavItemHover: Story = {
  render: () => (
    <GlobalNav
      logo={<NavLogo icon="DS" title="Design System" />}
      navigation={
        <>
          <NavItem>Hover Me</NavItem>
          <NavItem isActive>Active Item</NavItem>
        </>
      }
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Hover over non-active item
    const hoverItem = canvas.getByRole('button', { name: 'Hover Me' })
    await userEvent.hover(hoverItem)
    await userEvent.unhover(hoverItem)

    // Hover over active item
    const activeItem = canvas.getByRole('button', { name: 'Active Item' })
    await userEvent.hover(activeItem)
    await userEvent.unhover(activeItem)
  },
}
