import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** カードのパディング */
  padding?: CardPadding
  /** 影を付けるか */
  shadow?: boolean
  /** ボーダーを付けるか */
  bordered?: boolean
  /** 子要素 */
  children: ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      padding = 'md',
      shadow = true,
      bordered = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const classes = [
      'ds-card',
      `ds-card--padding-${padding}`,
      shadow && 'ds-card--shadow',
      bordered && 'ds-card--bordered',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

/* Card Header */
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`ds-card__header ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

/* Card Body */
export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`ds-card__body ${className || ''}`} {...props}>
        {children}
      </div>
    )
  }
)

CardBody.displayName = 'CardBody'

/* Card Footer */
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`ds-card__footer ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'
