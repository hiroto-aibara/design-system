import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import './Toast.css'

export type ToastVariant = 'info' | 'success' | 'warning' | 'error'

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /** メッセージ */
  message: string
  /** バリアント */
  variant?: ToastVariant
  /** 閉じるボタンを表示 */
  closable?: boolean
  /** 閉じるハンドラー */
  onClose?: () => void
}

const VariantIcon = ({ variant }: { variant: ToastVariant }) => {
  const icons: Record<ToastVariant, ReactNode> = {
    info: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
      </svg>
    ),
    success: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
      </svg>
    ),
    warning: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
      </svg>
    ),
    error: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
      </svg>
    ),
  }

  return <span className="ds-toast__icon">{icons[variant]}</span>
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    { message, variant = 'info', closable = true, onClose, className, ...props },
    ref
  ) => {
    const classes = [
      'ds-toast',
      `ds-toast--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={ref} role="alert" className={classes} {...props}>
        <VariantIcon variant={variant} />
        <span className="ds-toast__message">{message}</span>
        {closable && onClose && (
          <button
            type="button"
            className="ds-toast__close"
            onClick={onClose}
            aria-label="閉じる"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </button>
        )}
      </div>
    )
  }
)

Toast.displayName = 'Toast'
