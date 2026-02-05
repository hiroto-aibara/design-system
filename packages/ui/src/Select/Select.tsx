import { forwardRef, type SelectHTMLAttributes, type OptionHTMLAttributes, type ReactNode } from 'react'
import './Select.css'

export type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** セレクトのサイズ */
  size?: SelectSize
  /** エラー状態 */
  isInvalid?: boolean
  /** プレースホルダー */
  placeholder?: string
  /** 子要素（Option） */
  children: ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      isInvalid = false,
      disabled,
      placeholder,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const wrapperClasses = [
      'ds-select-wrapper',
      `ds-select-wrapper--${size}`,
      isInvalid && 'ds-select-wrapper--invalid',
      disabled && 'ds-select-wrapper--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={wrapperClasses}>
        <select
          ref={ref}
          className="ds-select"
          disabled={disabled}
          aria-invalid={isInvalid}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <span className="ds-select__icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    )
  }
)

Select.displayName = 'Select'

/* Option */
export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode
}

export const Option = forwardRef<HTMLOptionElement, OptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <option ref={ref} {...props}>
        {children}
      </option>
    )
  }
)

Option.displayName = 'Option'
