import { ReactNode } from 'react'
import './StateDisplay.css'

export interface EmptyStateProps {
  /** アイコン */
  icon?: ReactNode
  /** タイトル */
  title?: string
  /** メッセージ */
  message?: string
  /** アクション（ボタンなど） */
  action?: ReactNode
  /** カスタムクラス名 */
  className?: string
}

export function EmptyState({
  icon,
  title,
  message,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div className={`ds-state-display ds-empty-state ${className || ''}`}>
      {icon && <div className="ds-state-display__icon">{icon}</div>}
      {title && <h3 className="ds-state-display__title">{title}</h3>}
      {message && <p className="ds-state-display__message">{message}</p>}
      {action && <div className="ds-state-display__action">{action}</div>}
    </div>
  )
}
