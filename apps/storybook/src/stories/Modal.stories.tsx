import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within, waitFor } from 'storybook/test'
import { Modal, ModalFooter, Button } from '@ds/ui'

const meta = {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const ModalExample = ({ size = 'md' as const, title = 'Modal Title' }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        size={size}
      >
        <p>This is the modal content. You can put any content here.</p>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const Default: Story = {
  render: () => <ModalExample />,
}

export const Small: Story = {
  render: () => <ModalExample size="sm" title="Small Modal" />,
}

export const Large: Story = {
  render: () => <ModalExample size="lg" title="Large Modal" />,
}

const ConfirmDeleteExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Delete Item
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete Item"
        size="sm"
      >
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => setIsOpen(false)}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const ConfirmDelete: Story = {
  render: () => <ConfirmDeleteExample />,
}

const FormModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Edit Profile</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Edit Profile"
        size="md"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
              Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--color-border-default)',
                borderRadius: '6px',
                fontSize: '14px',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
              Email
            </label>
            <input
              type="email"
              defaultValue="john@example.com"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--color-border-default)',
                borderRadius: '6px',
                fontSize: '14px',
              }}
            />
          </div>
        </div>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const FormModal: Story = {
  render: () => <FormModalExample />,
}

const NoTitleExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal (No Title)</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="var(--color-success)" style={{ marginBottom: '16px' }}>
            <path d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4Zm-4 30-10-10 2.82-2.82L20 28.34l15.18-15.18L38 16 20 34Z" />
          </svg>
          <h3 style={{ margin: '0 0 8px', fontSize: '20px' }}>Success!</h3>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
            Your changes have been saved.
          </p>
        </div>
        <ModalFooter>
          <Button variant="primary" onClick={() => setIsOpen(false)} style={{ width: '100%' }}>
            Done
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const NoTitle: Story = {
  render: () => <NoTitleExample />,
}

/* Coverage Tests - ESC key and overlay click */

const ModalWithCloseTests = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [closeMethod, setCloseMethod] = useState('')
  return (
    <>
      <div>
        <Button onClick={() => setIsOpen(true)} data-testid="open-button">
          Open Modal
        </Button>
        {closeMethod && (
          <p data-testid="close-method" style={{ marginTop: '8px' }}>
            Closed by: {closeMethod}
          </p>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
          setCloseMethod('close handler')
        }}
        title="Test Modal"
        data-testid="test-modal"
      >
        <p>Press ESC or click overlay to close.</p>
        <ModalFooter>
          <Button
            variant="ghost"
            onClick={() => {
              setIsOpen(false)
              setCloseMethod('cancel button')
            }}
            data-testid="cancel-button"
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const CloseWithButton: Story = {
  render: () => <ModalWithCloseTests />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open modal
    await userEvent.click(canvas.getByTestId('open-button'))

    // Wait for modal to appear in document body
    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).toBeInTheDocument()
    })

    // Click cancel button
    const cancelButton = document.querySelector('[data-testid="cancel-button"]') as HTMLElement
    await userEvent.click(cancelButton)

    // Verify modal closed
    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
    })
  },
}

export const CloseWithCloseButton: Story = {
  render: () => <ModalWithCloseTests />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open modal
    await userEvent.click(canvas.getByTestId('open-button'))

    // Wait for modal
    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).toBeInTheDocument()
    })

    // Click the X close button in header
    const closeButton = document.querySelector('.ds-modal__close') as HTMLElement
    if (closeButton) {
      await userEvent.click(closeButton)
    }

    // Verify modal closed
    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
    })
  },
}

export const CloseWithOverlayClick: Story = {
  render: () => <ModalWithCloseTests />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open modal
    await userEvent.click(canvas.getByTestId('open-button'))

    // Wait for modal
    await waitFor(() => {
      expect(document.querySelector('.ds-modal-overlay')).toBeInTheDocument()
    })

    // Click the overlay (not the modal content)
    const overlay = document.querySelector('.ds-modal-overlay') as HTMLElement
    // Click at position that's on overlay but not on modal content
    await userEvent.click(overlay)

    // Verify modal closed
    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
    })
  },
}

export const CloseWithEscapeKey: Story = {
  render: () => <ModalWithCloseTests />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open modal
    await userEvent.click(canvas.getByTestId('open-button'))

    // Wait for modal
    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).toBeInTheDocument()
    })

    // Press Escape key
    await userEvent.keyboard('{Escape}')

    // Verify modal closed
    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
    })
  },
}

/* Test closeOnOverlayClick=false */
const ModalNoOverlayClose = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)} data-testid="open-button">
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="No Overlay Close"
        closeOnOverlayClick={false}
      >
        <p>Overlay click disabled. Use button to close.</p>
        <ModalFooter>
          <Button variant="primary" onClick={() => setIsOpen(false)} data-testid="close-button">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const NoOverlayClose: Story = {
  render: () => <ModalNoOverlayClose />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open modal
    await userEvent.click(canvas.getByTestId('open-button'))

    // Wait for modal
    await waitFor(() => {
      expect(document.querySelector('.ds-modal-overlay')).toBeInTheDocument()
    })

    // Click overlay - should NOT close
    const overlay = document.querySelector('.ds-modal-overlay') as HTMLElement
    await userEvent.click(overlay)

    // Modal should still be open
    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).toBeInTheDocument()
    })

    // Close with button
    const closeButton = document.querySelector('[data-testid="close-button"]') as HTMLElement
    await userEvent.click(closeButton)

    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
    })
  },
}

/* Test closeOnEsc=false */
const ModalNoEscClose = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)} data-testid="open-button">
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="No ESC Close"
        closeOnEsc={false}
      >
        <p>ESC key disabled. Use button to close.</p>
        <ModalFooter>
          <Button variant="primary" onClick={() => setIsOpen(false)} data-testid="close-button">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const NoEscClose: Story = {
  render: () => <ModalNoEscClose />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open modal
    await userEvent.click(canvas.getByTestId('open-button'))

    // Wait for modal
    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).toBeInTheDocument()
    })

    // Press ESC - should NOT close
    await userEvent.keyboard('{Escape}')

    // Modal should still be open
    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).toBeInTheDocument()
    })

    // Close with button
    const closeButton = document.querySelector('[data-testid="close-button"]') as HTMLElement
    await userEvent.click(closeButton)

    await waitFor(() => {
      expect(document.querySelector('[role="dialog"]')).not.toBeInTheDocument()
    })
  },
}

/* Auto-open modal for body scroll lock test */
const AutoOpenModal = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Auto Open Modal"
    >
      <p>This modal opens automatically to test body scroll lock.</p>
      <ModalFooter>
        <Button variant="primary" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export const AutoOpen: Story = {
  render: () => <AutoOpenModal />,
}
