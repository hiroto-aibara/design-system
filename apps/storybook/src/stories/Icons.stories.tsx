import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import {
  AlertIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  HomeIcon,
  InfoIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  SuccessIcon,
  WarningIcon,
} from '@ds/icons'

const icons = {
  AlertIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  HomeIcon,
  InfoIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  SuccessIcon,
  WarningIcon,
}

const IconDisplay = ({ name, icon: Icon }: { name: string; icon: typeof AlertIcon }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: 'var(--color-bg-secondary)',
    }}
  >
    <Icon size={24} />
    <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{name}</span>
  </div>
)

const meta = {
  title: 'Foundation/Icons',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '16px',
      }}
    >
      {Object.entries(icons).map(([name, Icon]) => (
        <IconDisplay key={name} name={name} icon={Icon} />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <HomeIcon size={16} />
        <p style={{ margin: '8px 0 0', fontSize: '12px' }}>16px</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <HomeIcon size={20} />
        <p style={{ margin: '8px 0 0', fontSize: '12px' }}>20px (default)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <HomeIcon size={24} />
        <p style={{ margin: '8px 0 0', fontSize: '12px' }}>24px</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <HomeIcon size={32} />
        <p style={{ margin: '8px 0 0', fontSize: '12px' }}>32px</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <HomeIcon size={48} />
        <p style={{ margin: '8px 0 0', fontSize: '12px' }}>48px</p>
      </div>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ color: 'var(--color-text-primary)' }}>
        <SuccessIcon size={24} />
      </div>
      <div style={{ color: 'var(--color-primary)' }}>
        <InfoIcon size={24} />
      </div>
      <div style={{ color: 'var(--color-success)' }}>
        <CheckIcon size={24} />
      </div>
      <div style={{ color: 'var(--color-warning)' }}>
        <WarningIcon size={24} />
      </div>
      <div style={{ color: 'var(--color-danger)' }}>
        <AlertIcon size={24} />
      </div>
    </div>
  ),
}

export const WithTitle: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <HomeIcon size={24} title="ホームに戻る" />
      <SettingsIcon size={24} title="設定を開く" />
      <SearchIcon size={24} title="検索" />
    </div>
  ),
}

/* Coverage Tests */
export const IconRenderTest: Story = {
  render: () => (
    <div data-testid="icons-container" style={{ display: 'flex', gap: '8px' }}>
      <CheckIcon data-testid="check-icon" />
      <CloseIcon data-testid="close-icon" />
      <SearchIcon data-testid="search-icon" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(canvas.getByTestId('check-icon')).toBeInTheDocument()
    expect(canvas.getByTestId('close-icon')).toBeInTheDocument()
    expect(canvas.getByTestId('search-icon')).toBeInTheDocument()

    // SVG要素であることを確認
    const checkIcon = canvas.getByTestId('check-icon')
    expect(checkIcon.tagName.toLowerCase()).toBe('svg')
  },
}

export const IconSizeTest: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <HomeIcon data-testid="small-icon" size={16} />
      <HomeIcon data-testid="default-icon" />
      <HomeIcon data-testid="large-icon" size={32} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const smallIcon = canvas.getByTestId('small-icon')
    const defaultIcon = canvas.getByTestId('default-icon')
    const largeIcon = canvas.getByTestId('large-icon')

    expect(smallIcon).toHaveAttribute('width', '16')
    expect(defaultIcon).toHaveAttribute('width', '20')
    expect(largeIcon).toHaveAttribute('width', '32')
  },
}

export const IconAccessibilityTest: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <HomeIcon data-testid="decorative-icon" />
      <HomeIcon data-testid="accessible-icon" title="ホームに戻る" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // 装飾用アイコン - aria-hidden
    const decorativeIcon = canvas.getByTestId('decorative-icon')
    expect(decorativeIcon).toHaveAttribute('aria-hidden', 'true')

    // アクセシブルなアイコン - title付き
    const accessibleIcon = canvas.getByTestId('accessible-icon')
    expect(accessibleIcon).toHaveAttribute('role', 'img')
    expect(accessibleIcon.querySelector('title')).toHaveTextContent('ホームに戻る')
  },
}
