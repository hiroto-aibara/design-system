import {
  forwardRef,
  useEffect,
  useCallback,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

export type ModalSize = 'sm' | 'md' | 'lg'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  /** モーダルの表示状態 */
  isOpen: boolean
  /** 閉じるハンドラー */
  onClose: () => void
  /** タイトル */
  title?: string
  /** サイズ */
  size?: ModalSize
  /** オーバーレイクリックで閉じるか */
  closeOnOverlayClick?: boolean
  /** ESCキーで閉じるか */
  closeOnEsc?: boolean
  /** 子要素 */
  children: ReactNode
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      size = 'md',
      closeOnOverlayClick = true,
      closeOnEsc = true,
      children,
      className,
      ...props
    },
    ref
  ) => {
    // ESCキーで閉じる
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (closeOnEsc && e.key === 'Escape') {
          onClose()
        }
      },
      [closeOnEsc, onClose]
    )

    // bodyスクロールロック
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', handleKeyDown)
      }

      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [isOpen, handleKeyDown])

    if (!isOpen) return null

    const handleOverlayClick = (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose()
      }
    }

    const modalContent = (
      <div className="ds-modal-overlay" onClick={handleOverlayClick}>
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          className={`ds-modal ds-modal--${size} ${className || ''}`}
          {...props}
        >
          {title && (
            <div className="ds-modal__header">
              <h2 id="modal-title" className="ds-modal__title">
                {title}
              </h2>
              <button
                type="button"
                className="ds-modal__close"
                onClick={onClose}
                aria-label="閉じる"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
              </button>
            </div>
          )}
          <div className="ds-modal__body">{children}</div>
        </div>
      </div>
    )

    return createPortal(modalContent, document.body)
  }
)

Modal.displayName = 'Modal'

/* Modal Footer */
export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`ds-modal__footer ${className || ''}`} {...props}>
        {children}
      </div>
    )
  }
)

ModalFooter.displayName = 'ModalFooter'
