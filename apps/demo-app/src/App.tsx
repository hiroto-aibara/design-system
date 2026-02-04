import { useState } from 'react'
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  GlobalNav,
  NavLogo,
  NavItem,
  Sidebar,
  SidebarSection,
  SidebarItem,
  Footer,
  FooterLink,
} from '@ds/ui'

type Theme = 'light' | 'dark'

// Icons
const SunIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

const MoonIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)

const HomeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path d="M9 22V12h6v10" />
  </svg>
)

const BoxIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
  </svg>
)

const GitHubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [activeNav, setActiveNav] = useState('components')
  const [activeSidebar, setActiveSidebar] = useState('intro')
  const [isLoading, setIsLoading] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.dataset.theme = newTheme
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      {/* Global Navigation */}
      <GlobalNav
        logo={<NavLogo icon="DS" title="Design System" />}
        navigation={
          <>
            <NavItem isActive={activeNav === 'home'} onClick={() => setActiveNav('home')}>
              Home
            </NavItem>
            <NavItem isActive={activeNav === 'components'} onClick={() => setActiveNav('components')}>
              Components
            </NavItem>
            <NavItem isActive={activeNav === 'tokens'} onClick={() => setActiveNav('tokens')}>
              Tokens
            </NavItem>
            <NavItem isActive={activeNav === 'docs'} onClick={() => setActiveNav('docs')}>
              Docs
            </NavItem>
          </>
        }
        actions={
          <>
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </>
        }
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar>
          <SidebarSection title="Getting Started">
            <SidebarItem
              icon={<HomeIcon />}
              isActive={activeSidebar === 'intro'}
              onClick={() => setActiveSidebar('intro')}
            >
              Introduction
            </SidebarItem>
            <SidebarItem
              icon={<BoxIcon />}
              isActive={activeSidebar === 'button'}
              onClick={() => setActiveSidebar('button')}
            >
              Button
            </SidebarItem>
            <SidebarItem
              icon={<BoxIcon />}
              isActive={activeSidebar === 'input'}
              onClick={() => setActiveSidebar('input')}
            >
              Input
            </SidebarItem>
            <SidebarItem
              icon={<BoxIcon />}
              isActive={activeSidebar === 'card'}
              onClick={() => setActiveSidebar('card')}
            >
              Card
            </SidebarItem>
          </SidebarSection>
        </Sidebar>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-10">
            {/* Hero Section */}
            <section className="text-center py-12 mb-12">
              <h1
                className="text-5xl font-bold mb-5"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Design System
              </h1>
              <p
                className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                A modern, Replit-inspired design system with dark mode support,
                beautiful animations, and accessible components.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="primary" size="lg">Get Started</Button>
                <Button variant="secondary" size="lg">View on GitHub</Button>
              </div>
            </section>

            {/* Registration Form */}
            <section className="mb-12">
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Registration Form
              </h2>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    Create Account
                  </h3>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                        Name
                      </label>
                      <Input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                        Email
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                        Password
                      </label>
                      <Input type="password" placeholder="Enter your password" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                        Invalid Example
                      </label>
                      <Input type="text" placeholder="This field has an error" isInvalid />
                      <span className="text-sm" style={{ color: 'var(--color-danger-text)' }}>
                        This field is required
                      </span>
                    </div>
                  </form>
                </CardBody>
                <CardFooter>
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="primary" isLoading={isLoading} onClick={handleSubmit}>
                      Register
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </section>

            {/* Button Variants */}
            <section className="mb-12">
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Button Variants
              </h2>
              <Card>
                <CardBody>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="w-28 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Primary:</span>
                      <Button variant="primary" size="sm">Small</Button>
                      <Button variant="primary" size="md">Medium</Button>
                      <Button variant="primary" size="lg">Large</Button>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="w-28 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Secondary:</span>
                      <Button variant="secondary" size="sm">Small</Button>
                      <Button variant="secondary" size="md">Medium</Button>
                      <Button variant="secondary" size="lg">Large</Button>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="w-28 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Ghost:</span>
                      <Button variant="ghost" size="sm">Small</Button>
                      <Button variant="ghost" size="md">Medium</Button>
                      <Button variant="ghost" size="lg">Large</Button>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="w-28 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Danger:</span>
                      <Button variant="danger" size="sm">Small</Button>
                      <Button variant="danger" size="md">Medium</Button>
                      <Button variant="danger" size="lg">Large</Button>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="w-28 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Accent:</span>
                      <Button variant="accent" size="sm">Small</Button>
                      <Button variant="accent" size="md">Medium</Button>
                      <Button variant="accent" size="lg">Large</Button>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="w-28 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>States:</span>
                      <Button variant="primary" disabled>Disabled</Button>
                      <Button variant="primary" isLoading>Loading</Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </section>

            {/* Input Sizes */}
            <section className="mb-12">
              <h2
                className="text-2xl font-semibold mb-6"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Input Sizes
              </h2>
              <Card>
                <CardBody>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <span className="w-28 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Small:</span>
                      <div className="flex-1 max-w-sm">
                        <Input size="sm" placeholder="Small input" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-28 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Medium:</span>
                      <div className="flex-1 max-w-sm">
                        <Input size="md" placeholder="Medium input" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-28 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Large:</span>
                      <div className="flex-1 max-w-sm">
                        <Input size="lg" placeholder="Large input" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-28 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Disabled:</span>
                      <div className="flex-1 max-w-sm">
                        <Input placeholder="Disabled input" disabled />
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </section>
          </div>
        </main>
      </div>

      {/* Footer - Full width */}
      <Footer
        left="© 2024 Design System. All rights reserved."
        right={
          <FooterLink href="https://github.com">
            <GitHubIcon />
          </FooterLink>
        }
      />
    </div>
  )
}

export default App
