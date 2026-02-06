import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import './Checkbox.css'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** エラー状態 */
  isInvalid?: boolean
  /** ラベル */
  children?: ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      isInvalid,
      disabled,
      children,
      className,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const invalid = isInvalid ?? (ariaInvalid === true || ariaInvalid === 'true')

    const wrapperClasses = [
      'ds-checkbox',
      invalid && 'ds-checkbox--invalid',
      disabled && 'ds-checkbox--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <label className={wrapperClasses}>
        <input
          ref={ref}
          type="checkbox"
          className="ds-checkbox__input"
          disabled={disabled}
          aria-invalid={invalid || undefined}
          {...props}
        />
        <span className="ds-checkbox__box" aria-hidden="true">
          <svg className="ds-checkbox__check" viewBox="0 0 16 16" fill="none">
            <path
              d="M13.5 4.5L6 12L2.5 8.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {children && <span className="ds-checkbox__label">{children}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
