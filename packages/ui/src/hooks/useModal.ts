import { useEffect, useCallback, useRef } from 'react'

export interface UseModalOptions {
  /** モーダルが開いているか */
  isOpen: boolean
  /** モーダルを閉じるコールバック */
  onClose: () => void
  /** ESCキーで閉じる */
  closeOnEsc?: boolean
  /** オーバーレイクリックで閉じる */
  closeOnOverlayClick?: boolean
}

export interface UseModalReturn {
  /** モーダルが開いているか */
  isOpen: boolean
  /** モーダルを閉じる関数 */
  close: () => void
  /** オーバーレイのクリックハンドラー */
  handleOverlayClick: (e: React.MouseEvent) => void
  /** モーダルコンテンツのref */
  modalRef: React.RefObject<HTMLDivElement | null>
}

/**
 * モーダルの振る舞いを管理するヘッドレスフック
 *
 * @example
 * ```tsx
 * const { isOpen, close, handleOverlayClick, modalRef } = useModal({
 *   isOpen: props.isOpen,
 *   onClose: props.onClose,
 *   closeOnEsc: true,
 *   closeOnOverlayClick: true,
 * })
 * ```
 */
export function useModal({
  isOpen,
  onClose,
  closeOnEsc = true,
  closeOnOverlayClick = true,
}: UseModalOptions): UseModalReturn {
  const modalRef = useRef<HTMLDivElement | null>(null)

  // ESCキーハンドリング
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose, closeOnEsc])

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  // フォーカストラップ
  useEffect(() => {
    if (!isOpen || !modalRef.current) return

    const modal = modalRef.current
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // 最初のフォーカス可能な要素にフォーカス
    firstElement?.focus()

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    modal.addEventListener('keydown', handleTab)
    return () => modal.removeEventListener('keydown', handleTab)
  }, [isOpen])

  // オーバーレイクリックハンドラー
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose()
      }
    },
    [closeOnOverlayClick, onClose]
  )

  return {
    isOpen,
    close: onClose,
    handleOverlayClick,
    modalRef,
  }
}
