import './StateDisplay.css'

export interface LoadingStateProps {
  /** メッセージ */
  message?: string
  /** スピナーのサイズ */
  size?: 'sm' | 'md' | 'lg'
  /** カスタムクラス名 */
  className?: string
}

export function LoadingState({
  message = '読み込み中...',
  size = 'md',
  className,
}: LoadingStateProps) {
  return (
    <div
      className={`ds-state-display ds-loading-state ${className || ''}`}
      role="status"
      aria-live="polite"
    >
      <div className={`ds-loading-state__spinner ds-loading-state__spinner--${size}`} />
      {message && <p className="ds-state-display__message">{message}</p>}
    </div>
  )
}
