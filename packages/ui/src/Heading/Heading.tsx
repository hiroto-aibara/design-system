import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import './Heading.css'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading level (h1-h5) */
  level: HeadingLevel
  /** Remove default margins */
  noMargin?: boolean
  children: ReactNode
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, noMargin = false, className = '', children, ...props }, ref) => {
    const Tag = level

    const classes = [
      'ds-heading',
      `ds-heading--${level}`,
      noMargin && 'ds-heading--no-margin',
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
