import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Sidebar, SidebarSection, SidebarItem } from '@ds/ui'

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 1.414 1.414L4 10.414V17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-7-7Z" />
  </svg>
)

const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M3.75 3A1.75 1.75 0 0 0 2 4.75v10.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 18 15.25v-8.5A1.75 1.75 0 0 0 16.25 5H9.373l-.443-.886A1.75 1.75 0 0 0 7.366 3H3.75Z" />
  </svg>
)

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
  </svg>
)

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
  </svg>
)

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M15.5 2A1.5 1.5 0 0 0 14 3.5v13a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 2h-1ZM9.5 6A1.5 1.5 0 0 0 8 7.5v9A1.5 1.5 0 0 0 9.5 18h1a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 6h-1ZM3.5 10A1.5 1.5 0 0 0 2 11.5v5A1.5 1.5 0 0 0 3.5 18h1A1.5 1.5 0 0 0 6 16.5v-5A1.5 1.5 0 0 0 4.5 10h-1Z" />
  </svg>
)

export const Default: Story = {
  render: () => (
    <div style={{ height: '400px' }}>
      <Sidebar>
        <SidebarItem>Dashboard</SidebarItem>
        <SidebarItem>Projects</SidebarItem>
        <SidebarItem>Settings</SidebarItem>
      </Sidebar>
    </div>
  ),
}

export const WithSections: Story = {
  render: () => (
    <div style={{ height: '500px' }}>
      <Sidebar>
        <SidebarSection title="Main">
          <SidebarItem>Dashboard</SidebarItem>
          <SidebarItem>Projects</SidebarItem>
          <SidebarItem>Analytics</SidebarItem>
        </SidebarSection>
        <SidebarSection title="Settings">
          <SidebarItem>Profile</SidebarItem>
          <SidebarItem>Team</SidebarItem>
          <SidebarItem>Preferences</SidebarItem>
        </SidebarSection>
      </Sidebar>
    </div>
  ),
}

export const WithActiveItem: Story = {
  render: () => (
    <div style={{ height: '400px' }}>
      <Sidebar>
        <SidebarSection title="Navigation">
          <SidebarItem isActive>Dashboard</SidebarItem>
          <SidebarItem>Projects</SidebarItem>
          <SidebarItem>Settings</SidebarItem>
        </SidebarSection>
      </Sidebar>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div style={{ height: '500px' }}>
      <Sidebar>
        <SidebarSection title="Navigation">
          <SidebarItem icon={<HomeIcon />} isActive>Dashboard</SidebarItem>
          <SidebarItem icon={<FolderIcon />}>Projects</SidebarItem>
          <SidebarItem icon={<ChartIcon />}>Analytics</SidebarItem>
          <SidebarItem icon={<UsersIcon />}>Team</SidebarItem>
          <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
        </SidebarSection>
      </Sidebar>
    </div>
  ),
}

export const CustomWidth: Story = {
  render: () => (
    <div style={{ height: '400px' }}>
      <Sidebar width="320px">
        <SidebarSection title="Wide Sidebar">
          <SidebarItem icon={<HomeIcon />}>Dashboard</SidebarItem>
          <SidebarItem icon={<FolderIcon />}>Projects</SidebarItem>
        </SidebarSection>
      </Sidebar>
    </div>
  ),
}

export const FullExample: Story = {
  render: () => (
    <div style={{ height: '600px' }}>
      <Sidebar>
        <SidebarSection title="Main">
          <SidebarItem icon={<HomeIcon />} isActive>Dashboard</SidebarItem>
          <SidebarItem icon={<FolderIcon />}>Projects</SidebarItem>
          <SidebarItem icon={<ChartIcon />}>Analytics</SidebarItem>
        </SidebarSection>
        <SidebarSection title="Team">
          <SidebarItem icon={<UsersIcon />}>Members</SidebarItem>
        </SidebarSection>
        <SidebarSection title="Settings">
          <SidebarItem icon={<SettingsIcon />}>Preferences</SidebarItem>
        </SidebarSection>
      </Sidebar>
    </div>
  ),
}

/* Coverage Tests - SidebarItem onClick and hover */

const SidebarItemClickExample = () => {
  const [selected, setSelected] = useState('Dashboard')
  return (
    <div style={{ height: '400px' }}>
      <Sidebar>
        <SidebarSection title="Navigation">
          <SidebarItem
            isActive={selected === 'Dashboard'}
            onClick={() => setSelected('Dashboard')}
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            isActive={selected === 'Projects'}
            onClick={() => setSelected('Projects')}
          >
            Projects
          </SidebarItem>
          <SidebarItem
            isActive={selected === 'Settings'}
            onClick={() => setSelected('Settings')}
          >
            Settings
          </SidebarItem>
        </SidebarSection>
        <div style={{ padding: '12px', fontSize: '12px', color: 'var(--color-text-muted)' }}>
          Selected: {selected}
        </div>
      </Sidebar>
    </div>
  )
}

export const SidebarItemClick: Story = {
  render: () => <SidebarItemClickExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Click on Projects using getByRole
    const projectsItem = canvas.getByRole('link', { name: 'Projects' })
    await userEvent.click(projectsItem)
    await expect(canvas.getByText('Selected: Projects')).toBeInTheDocument()

    // Click on Settings
    const settingsItem = canvas.getByRole('link', { name: 'Settings' })
    await userEvent.click(settingsItem)
    await expect(canvas.getByText('Selected: Settings')).toBeInTheDocument()
  },
}

export const SidebarItemHover: Story = {
  render: () => (
    <div style={{ height: '400px' }}>
      <Sidebar>
        <SidebarSection title="Navigation">
          <SidebarItem>Hover Me</SidebarItem>
          <SidebarItem isActive>Active Item</SidebarItem>
        </SidebarSection>
      </Sidebar>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Hover over non-active item
    const hoverItem = canvas.getByRole('link', { name: 'Hover Me' })
    await userEvent.hover(hoverItem)
    await userEvent.unhover(hoverItem)

    // Hover over active item (should not change styles)
    const activeItem = canvas.getByRole('link', { name: 'Active Item' })
    await userEvent.hover(activeItem)
    await userEvent.unhover(activeItem)
  },
}

/* SidebarSection without title */
export const SectionWithoutTitle: Story = {
  render: () => (
    <div style={{ height: '400px' }}>
      <Sidebar>
        <SidebarSection>
          <SidebarItem icon={<HomeIcon />}>Dashboard</SidebarItem>
          <SidebarItem icon={<FolderIcon />}>Projects</SidebarItem>
        </SidebarSection>
      </Sidebar>
    </div>
  ),
}
