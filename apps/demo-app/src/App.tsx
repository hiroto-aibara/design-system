import { useState } from 'react'
import { Button, Input, Card, CardHeader, CardBody, CardFooter } from '@ds/ui'

type Theme = 'light' | 'dark'
type Brand = 'default' | 'acme'

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [brand, setBrand] = useState<Brand>('default')
  const [isLoading, setIsLoading] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.dataset.theme = newTheme
  }

  const toggleBrand = () => {
    const newBrand = brand === 'default' ? 'acme' : 'default'
    setBrand(newBrand)
    document.documentElement.dataset.brand = newBrand
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Design System Demo</h1>
        <div className="theme-controls">
          <Button variant="secondary" size="sm" onClick={toggleTheme}>
            Theme: {theme}
          </Button>
          <Button variant="secondary" size="sm" onClick={toggleBrand}>
            Brand: {brand}
          </Button>
        </div>
      </header>

      <main className="app-main">
        {/* Registration Form */}
        <section className="section">
          <h2>Registration Form</h2>
          <Card>
            <CardHeader>
              <h3>Create Account</h3>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} className="form">
                <div className="form-field">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="invalid-input" className="form-label">
                    Invalid Example
                  </label>
                  <Input
                    id="invalid-input"
                    type="text"
                    placeholder="This field has an error"
                    isInvalid
                  />
                  <span className="form-error">This field is required</span>
                </div>
              </form>
            </CardBody>
            <CardFooter>
              <div className="form-actions">
                <Button variant="ghost">Cancel</Button>
                <Button
                  variant="primary"
                  isLoading={isLoading}
                  onClick={handleSubmit}
                >
                  Register
                </Button>
              </div>
            </CardFooter>
          </Card>
        </section>

        {/* Button Variants */}
        <section className="section">
          <h2>Button Variants</h2>
          <Card>
            <CardBody>
              <div className="button-grid">
                <div className="button-row">
                  <span className="label">Primary:</span>
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
                <div className="button-row">
                  <span className="label">Secondary:</span>
                  <Button variant="secondary" size="sm">Small</Button>
                  <Button variant="secondary" size="md">Medium</Button>
                  <Button variant="secondary" size="lg">Large</Button>
                </div>
                <div className="button-row">
                  <span className="label">Ghost:</span>
                  <Button variant="ghost" size="sm">Small</Button>
                  <Button variant="ghost" size="md">Medium</Button>
                  <Button variant="ghost" size="lg">Large</Button>
                </div>
                <div className="button-row">
                  <span className="label">Danger:</span>
                  <Button variant="danger" size="sm">Small</Button>
                  <Button variant="danger" size="md">Medium</Button>
                  <Button variant="danger" size="lg">Large</Button>
                </div>
                <div className="button-row">
                  <span className="label">States:</span>
                  <Button variant="primary" disabled>Disabled</Button>
                  <Button variant="primary" isLoading>Loading</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Input Sizes */}
        <section className="section">
          <h2>Input Sizes</h2>
          <Card>
            <CardBody>
              <div className="input-grid">
                <div className="input-row">
                  <span className="label">Small:</span>
                  <Input size="sm" placeholder="Small input" />
                </div>
                <div className="input-row">
                  <span className="label">Medium:</span>
                  <Input size="md" placeholder="Medium input" />
                </div>
                <div className="input-row">
                  <span className="label">Large:</span>
                  <Input size="lg" placeholder="Large input" />
                </div>
                <div className="input-row">
                  <span className="label">Disabled:</span>
                  <Input placeholder="Disabled input" disabled />
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App
