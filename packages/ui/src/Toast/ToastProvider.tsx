import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { Toast, type ToastVariant } from './Toast'
import './Toast.css'

export interface ToastOptions {
  /** メッセージ */
  message: string
  /** バリアント */
  variant?: ToastVariant
  /** 表示時間（ms）、0で自動消去なし */
  duration?: number
  /** 閉じるボタンを表示 */
  closable?: boolean
}

interface ToastItem extends ToastOptions {
  id: string
}

interface ToastContextValue {
  toast: (options: ToastOptions) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export interface ToastProviderProps {
  children: ReactNode
  /** デフォルトの表示時間（ms） */
  defaultDuration?: number
  /** 最大表示数 */
  maxToasts?: number
}

export const ToastProvider = ({
  children,
  defaultDuration = 5000,
  maxToasts = 5,
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback(
    (options: ToastOptions) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      const duration = options.duration ?? defaultDuration

      const newToast: ToastItem = {
        ...options,
        id,
        closable: options.closable ?? true,
      }

      setToasts((prev) => {
        const updated = [...prev, newToast]
        // 最大数を超えた場合、古いものから削除
        if (updated.length > maxToasts) {
          return updated.slice(-maxToasts)
        }
        return updated
      })

      // 自動消去
      if (duration > 0) {
        setTimeout(() => {
          removeToast(id)
        }, duration)
      }
    },
    [defaultDuration, maxToasts, removeToast]
  )

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      {typeof document !== 'undefined' &&
        createPortal(
          <div className="ds-toast-container">
            {toasts.map((t) => (
              <Toast
                key={t.id}
                message={t.message}
                variant={t.variant}
                closable={t.closable}
                onClose={() => removeToast(t.id)}
              />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  )
}

ToastProvider.displayName = 'ToastProvider'

/* useToast hook */
export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
