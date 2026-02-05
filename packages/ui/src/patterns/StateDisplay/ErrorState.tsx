import { ReactNode } from 'react'
import './StateDisplay.css'

export interface ErrorStateProps {
  /** タイトル */
  title?: string
  /** エラーメッセージ */
  message?: string
  /** アクション（再試行ボタンなど） */
  action?: ReactNode
  /** カスタムクラス名 */
  className?: string
}

const ErrorIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="var(--color-danger)">
    <path d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4Zm2 30h-4v-4h4v4Zm0-8h-4V14h4v12Z" />
  </svg>
)

export function ErrorState({
  title = 'エラーが発生しました',
  message,
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={`ds-state-display ds-error-state ${className || ''}`}
      role="alert"
    >
      <div className="ds-state-display__icon">
        <ErrorIcon />
      </div>
      <h3 className="ds-state-display__title ds-error-state__title">{title}</h3>
      {message && <p className="ds-state-display__message">{message}</p>}
      {action && <div className="ds-state-display__action">{action}</div>}
    </div>
  )
}
