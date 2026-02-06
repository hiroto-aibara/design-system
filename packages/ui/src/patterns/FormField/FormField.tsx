import { useId, cloneElement, isValidElement, ReactElement, ReactNode } from 'react'
import './FormField.css'

export interface FormFieldProps {
  /** ラベルテキスト */
  label: string
  /** 必須マーク表示 */
  required?: boolean
  /** エラーメッセージ */
  error?: string
  /** 補足説明 */
  description?: string
  /** フォーム要素 */
  children: ReactNode
  /** カスタムクラス名 */
  className?: string
}

export function FormField({
  label,
  required,
  error,
  description,
  children,
  className,
}: FormFieldProps) {
  const id = useId()
  const inputId = `${id}-input`
  const errorId = `${id}-error`
  const descriptionId = `${id}-description`

  // aria-describedby の構築
  const describedByIds: string[] = []
  if (error) describedByIds.push(errorId)
  if (description) describedByIds.push(descriptionId)
  const ariaDescribedBy = describedByIds.length > 0 ? describedByIds.join(' ') : undefined

  // children に a11y 属性を注入
  const enhancedChildren = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        id: inputId,
        'aria-describedby': ariaDescribedBy,
        'aria-invalid': error ? true : undefined,
        'aria-required': required || undefined,
      })
    : children

  return (
    <div className={`ds-form-field ${error ? 'ds-form-field--error' : ''} ${className || ''}`}>
      <label htmlFor={inputId} className="ds-form-field__label">
        {label}
        {required && <span className="ds-form-field__required">*</span>}
      </label>

      {description && (
        <p id={descriptionId} className="ds-form-field__description">
          {description}
        </p>
      )}

      <div className="ds-form-field__input">
        {enhancedChildren}
      </div>

      {error && (
        <p id={errorId} className="ds-form-field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
