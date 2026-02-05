import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  AppShell,
  GlobalNav,
  NavLogo,
  NavItem,
  SidebarSection,
  SidebarItem,
  Footer,
  FooterLink,
  Container,
  Heading,
  Card,
  CardBody,
  Button,
} from '@ds/ui'

const meta = {
  title: 'Layout/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppShell>

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

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M15.5 2A1.5 1.5 0 0 0 14 3.5v13a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 2h-1ZM9.5 6A1.5 1.5 0 0 0 8 7.5v9A1.5 1.5 0 0 0 9.5 18h1a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 6h-1ZM3.5 10A1.5 1.5 0 0 0 2 11.5v5A1.5 1.5 0 0 0 3.5 18h1A1.5 1.5 0 0 0 6 16.5v-5A1.5 1.5 0 0 0 4.5 10h-1Z" />
  </svg>
)

const SampleNav = () => (
  <GlobalNav
    logo={<NavLogo icon="DS" title="Design System" />}
    navigation={
      <>
        <NavItem isActive>Dashboard</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Team</NavItem>
      </>
    }
    actions={
      <Button variant="primary" size="sm">Sign In</Button>
    }
  />
)

const SampleSidebar = () => (
  <div style={{ padding: '20px 16px' }}>
    <SidebarSection title="Navigation">
      <SidebarItem icon={<HomeIcon />} isActive>Dashboard</SidebarItem>
      <SidebarItem icon={<FolderIcon />}>Projects</SidebarItem>
      <SidebarItem icon={<ChartIcon />}>Analytics</SidebarItem>
      <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
    </SidebarSection>
  </div>
)

const SampleFooter = () => (
  <Footer
    left="© 2024 Design System"
    right={
      <>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Terms</FooterLink>
      </>
    }
  />
)

const SampleContent = () => (
  <Container maxWidth="xl" style={{ padding: '32px 24px' }}>
    <Heading level="h1" leftAlign noMargin>Dashboard</Heading>
    <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px' }}>
      Welcome back! Here's an overview of your projects.
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '32px' }}>
      <Card shadow>
        <CardBody>
          <h3 style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)' }}>Total Projects</h3>
          <p style={{ margin: '8px 0 0', fontSize: '32px', fontWeight: 700 }}>24</p>
        </CardBody>
      </Card>
      <Card shadow>
        <CardBody>
          <h3 style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)' }}>Active Tasks</h3>
          <p style={{ margin: '8px 0 0', fontSize: '32px', fontWeight: 700 }}>156</p>
        </CardBody>
      </Card>
      <Card shadow>
        <CardBody>
          <h3 style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)' }}>Team Members</h3>
          <p style={{ margin: '8px 0 0', fontSize: '32px', fontWeight: 700 }}>12</p>
        </CardBody>
      </Card>
    </div>
  </Container>
)

export const Default: Story = {
  render: () => (
    <AppShell nav={<SampleNav />}>
      <SampleContent />
    </AppShell>
  ),
}

export const WithSidebar: Story = {
  render: () => (
    <AppShell nav={<SampleNav />} sidebar={<SampleSidebar />}>
      <SampleContent />
    </AppShell>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <AppShell nav={<SampleNav />} footer={<SampleFooter />}>
      <SampleContent />
    </AppShell>
  ),
}

export const FullLayout: Story = {
  render: () => (
    <AppShell
      nav={<SampleNav />}
      sidebar={<SampleSidebar />}
      footer={<SampleFooter />}
    >
      <SampleContent />
    </AppShell>
  ),
}

export const CustomSidebarWidth: Story = {
  render: () => (
    <AppShell
      nav={<SampleNav />}
      sidebar={<SampleSidebar />}
      sidebarWidth="320px"
    >
      <SampleContent />
    </AppShell>
  ),
}

export const MinimalLayout: Story = {
  render: () => (
    <AppShell
      nav={
        <GlobalNav
          logo={<NavLogo icon="A" title="App" />}
        />
      }
    >
      <Container style={{ padding: '48px 24px', textAlign: 'center' }}>
        <Heading level="h2" noMargin>Minimal Layout</Heading>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '16px' }}>
          AppShell with only navigation and content.
        </p>
      </Container>
    </AppShell>
  ),
}
