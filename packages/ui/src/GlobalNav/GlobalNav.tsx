import React from 'react'

export interface GlobalNavProps {
  children?: React.ReactNode
  /** Logo/brand area content */
  logo?: React.ReactNode
  /** Navigation items */
  navigation?: React.ReactNode
  /** Right side actions (buttons, icons, etc.) */
  actions?: React.ReactNode
  /** Additional className for customization */
  className?: string
}

export const GlobalNav: React.FC<GlobalNavProps> = ({
  children,
  logo,
  navigation,
  actions,
  className = '',
}) => {
  return (
    <nav
      className={`ds-global-nav ${className}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        borderBottom: '1px solid var(--color-border-default)',
        backgroundColor: 'var(--color-bg-surface)',
      }}
    >
      {/* Left section: Logo + Navigation */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {logo && (
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            {logo}
          </div>
        )}

        {navigation && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginLeft: '48px' }}>
            {navigation}
          </div>
        )}
      </div>

      {/* Right section: Actions */}
      {actions && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {actions}
        </div>
      )}

      {children}
    </nav>
  )
}

export interface NavItemProps {
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export const NavItem: React.FC<NavItemProps> = ({
  children,
  isActive = false,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`ds-nav-item ${className}`}
      style={{
        fontSize: '15px',
        fontWeight: 500,
        color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        transition: 'color 0.15s ease',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.color = 'var(--color-text-primary)'
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.color = 'var(--color-text-secondary)'
        }
      }}
    >
      {children}
    </button>
  )
}

export interface NavLogoProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  title?: string
  className?: string
}

export const NavLogo: React.FC<NavLogoProps> = ({
  children,
  icon,
  title,
  className = '',
}) => {
  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {icon && (
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '13px',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
          }}
        >
          {icon}
        </div>
      )}
      {title && (
        <span
          style={{
            fontWeight: 600,
            fontSize: '16px',
            color: 'var(--color-text-primary)',
          }}
        >
          {title}
        </span>
      )}
      {children}
    </div>
  )
}
