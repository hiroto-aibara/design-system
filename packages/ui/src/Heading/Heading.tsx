import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import './Heading.css'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading level (h1-h5) */
  level: HeadingLevel
  /** Remove default margins */
  noMargin?: boolean
  /** Left-align the heading (default is centered) */
  leftAlign?: boolean
  children: ReactNode
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, noMargin = false, leftAlign = false, className = '', children, ...props }, ref) => {
    const Tag = level

    const classes = [
      'ds-heading',
      `ds-heading--${level}`,
      noMargin && 'ds-heading--no-margin',
      leftAlign && 'ds-heading--left',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Tag ref={ref} className={classes} {...props}>
        {children}
      </Tag>
    )
  }
)

Heading.displayName = 'Heading'
