import { forwardRef, type HTMLAttributes, type ThHTMLAttributes, type TdHTMLAttributes, type ReactNode } from 'react'
import './Table.css'

export type TableSize = 'sm' | 'md' | 'lg'

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /** テーブルのサイズ */
  size?: TableSize
  /** 縞模様を表示 */
  striped?: boolean
  /** ホバー効果を有効化 */
  hoverable?: boolean
  /** ボーダーを表示 */
  bordered?: boolean
  /** 子要素 */
  children: ReactNode
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      size = 'md',
      striped = false,
      hoverable = false,
      bordered = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const classes = [
      'ds-table',
      `ds-table--${size}`,
      striped && 'ds-table--striped',
      hoverable && 'ds-table--hoverable',
      bordered && 'ds-table--bordered',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <table ref={ref} className={classes} {...props}>
        {children}
      </table>
    )
  }
)

Table.displayName = 'Table'

/* Thead */
export interface TheadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

export const Thead = forwardRef<HTMLTableSectionElement, TheadProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <thead ref={ref} className={`ds-table__head ${className || ''}`} {...props}>
        {children}
      </thead>
    )
  }
)

Thead.displayName = 'Thead'

/* Tbody */
export interface TbodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

export const Tbody = forwardRef<HTMLTableSectionElement, TbodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <tbody ref={ref} className={`ds-table__body ${className || ''}`} {...props}>
        {children}
      </tbody>
    )
  }
)

Tbody.displayName = 'Tbody'

/* Tfoot */
export interface TfootProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

export const Tfoot = forwardRef<HTMLTableSectionElement, TfootProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <tfoot ref={ref} className={`ds-table__foot ${className || ''}`} {...props}>
        {children}
      </tfoot>
    )
  }
)

Tfoot.displayName = 'Tfoot'

/* Tr */
export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode
}

export const Tr = forwardRef<HTMLTableRowElement, TrProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <tr ref={ref} className={`ds-table__row ${className || ''}`} {...props}>
        {children}
      </tr>
    )
  }
)

Tr.displayName = 'Tr'

/* Th */
export interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode
}

export const Th = forwardRef<HTMLTableCellElement, ThProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <th ref={ref} className={`ds-table__header-cell ${className || ''}`} {...props}>
        {children}
      </th>
    )
  }
)

Th.displayName = 'Th'

/* Td */
export interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode
}

export const Td = forwardRef<HTMLTableCellElement, TdProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <td ref={ref} className={`ds-table__cell ${className || ''}`} {...props}>
        {children}
      </td>
    )
  }
)

Td.displayName = 'Td'
