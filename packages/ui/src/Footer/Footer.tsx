import React from 'react'

export interface FooterProps {
  children?: React.ReactNode
  /** Left side content (e.g., copyright) */
  left?: React.ReactNode
  /** Right side content (e.g., social links) */
  right?: React.ReactNode
  /** Additional className for customization */
  className?: string
}

export const Footer: React.FC<FooterProps> = ({
  children,
  left,
  right,
  className = '',
}) => {
  return (
    <footer
      className={`ds-footer ${className}`}
      style={{
        borderTop: '1px solid var(--color-border-default)',
        padding: '40px 24px',
        backgroundColor: 'var(--color-bg-surface)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {left && (
          <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
            {left}
          </div>
        )}
        {right && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {right}
          </div>
        )}
        {children}
      </div>
    </footer>
  )
}

export interface FooterLinkProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  children,
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
      className={`ds-footer-link ${className}`}
      style={{
        padding: '8px',
        borderRadius: '6px',
        color: 'var(--color-text-secondary)',
        textDecoration: 'none',
        transition: 'background-color 0.15s ease, color 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-bg-surface-hover)'
        e.currentTarget.style.color = 'var(--color-text-primary)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent'
        e.currentTarget.style.color = 'var(--color-text-secondary)'
      }}
    >
      {children}
    </a>
  )
}
