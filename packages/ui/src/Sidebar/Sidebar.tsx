import React from 'react'

export interface SidebarProps {
  children?: React.ReactNode
  /** Width of the sidebar (default: 256px / 16rem) */
  width?: string
  /** Additional className for customization */
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  width = '260px',
  className = '',
}) => {
  return (
    <aside
      className={`ds-sidebar ${className}`}
      style={{
        width,
        height: '100%',
        flexShrink: 0,
        borderRight: '1px solid var(--color-border-default)',
        overflowY: 'auto',
        padding: '20px 16px',
        backgroundColor: 'var(--color-bg-surface)',
      }}
    >
      {children}
    </aside>
  )
}

export interface SidebarSectionProps {
  children?: React.ReactNode
  title?: string
  className?: string
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  children,
  title,
  className = '',
}) => {
  return (
    <div className={className} style={{ marginBottom: '24px' }}>
      {title && (
        <div
          style={{
            padding: '8px 12px',
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
          }}
        >
          {title}
        </div>
      )}
      <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '0' }}>
        {children}
      </div>
    </div>
  )
}

export interface SidebarItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  isActive?: boolean
  href?: string
  onClick?: () => void
  className?: string
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  icon,
  isActive = false,
  href = '#',
  onClick,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`ds-sidebar-item ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 12px',
        borderRadius: '0',
        fontSize: '14px',
        fontWeight: 400,
        textDecoration: 'none',
        transition: 'background-color 0.15s ease, color 0.15s ease',
        color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
        backgroundColor: isActive ? 'var(--color-primary-subtle)' : 'transparent',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'var(--color-bg-surface-hover)'
          e.currentTarget.style.color = 'var(--color-text-primary)'
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = 'var(--color-text-secondary)'
        }
      }}
    >
      {icon && (
        <span style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {icon}
        </span>
      )}
      <span>{children}</span>
    </a>
  )
}
