import { forwardRef, type HTMLAttributes, type ReactNode, type CSSProperties } from 'react'
import './Container.css'

export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum width of the container (preset or custom value) */
  maxWidth?: ContainerMaxWidth
  /** Width as ratio/percentage (e.g., '80%', '90%') - overrides maxWidth */
  width?: string
  /** Horizontal padding */
  padding?: boolean
  children: ReactNode
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth = 'lg', width, padding = true, className = '', style, children, ...props }, ref) => {
    const classes = [
      'ds-container',
      !width && `ds-container--${maxWidth}`,
      padding && 'ds-container--padded',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const containerStyle: CSSProperties | undefined = width
      ? { ...style, width, maxWidth: width }
      : style

    return (
      <div ref={ref} className={classes} style={containerStyle} {...props}>
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
