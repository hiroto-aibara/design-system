import { forwardRef, SVGProps, ReactNode } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** アイコンのサイズ */
  size?: number | string
  /** タイトル（アクセシビリティ用） */
  title?: string
}

export function createIcon(displayName: string, path: ReactNode) {
  const Icon = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 20, title, ...props }, ref) => (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden={title ? undefined : true}
        role={title ? 'img' : undefined}
        {...props}
      >
        {title && <title>{title}</title>}
        {path}
      </svg>
    )
  )
  Icon.displayName = displayName
  return Icon
}
