import React, { ReactNode } from 'react'

export interface AppShellProps {
  /** Global navigation component */
  nav?: ReactNode
  /** Sidebar component */
  sidebar?: ReactNode
  /** Footer component */
  footer?: ReactNode
  /** Sidebar width (default: 260px) */
  sidebarWidth?: string
  /** Nav height for sticky sidebar calculation (default: 60px) */
  navHeight?: string
  /** Main content */
  children: ReactNode
  /** Additional className */
  className?: string
}

export const AppShell: React.FC<AppShellProps> = ({
  nav,
  sidebar,
  footer,
  sidebarWidth = '260px',
  navHeight = '60px',
  children,
  className = '',
}) => {
  return (
    <div
      className={`ds-app-shell ${className}`}
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-bg-base)',
      }}
    >
      {/* Navigation */}
      {nav}

      {/* Content Area - Scrollable */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            minHeight: '100%',
          }}
        >
          {/* Sidebar - Sticky with independent scroll */}
          {sidebar && (
            <aside
              style={{
                width: sidebarWidth,
                flexShrink: 0,
                position: 'sticky',
                top: 0,
                alignSelf: 'flex-start',
                height: `calc(100vh - ${navHeight})`,
                overflowY: 'auto',
                borderRight: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-bg-surface)',
              }}
            >
              {sidebar}
            </aside>
          )}

          {/* Main Content */}
          <main
            style={{
              flex: 1,
              minWidth: 0,
            }}
          >
            {children}
          </main>
        </div>

        {/* Footer - Full width, scrolls with content */}
        {footer}
      </div>
    </div>
  )
}

AppShell.displayName = 'AppShell'
