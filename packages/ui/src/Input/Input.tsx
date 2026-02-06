import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** インプットのサイズ */
  size?: InputSize
  /** エラー状態 */
  isInvalid?: boolean
  /** アイコン（左側） */
  leftIcon?: ReactNode
  /** アイコン（右側） */
  rightIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      isInvalid,
      disabled,
      leftIcon,
      rightIcon,
      className,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const invalid = isInvalid ?? (ariaInvalid === true || ariaInvalid === 'true')
    const hasLeftIcon = !!leftIcon
    const hasRightIcon = !!rightIcon

    return (
      <div
        className={`ds-input-wrapper ds-input-wrapper--${size} ${invalid ? 'ds-input-wrapper--invalid' : ''} ${disabled ? 'ds-input-wrapper--disabled' : ''} ${className || ''}`}
      >
        {leftIcon && (
          <span className="ds-input__icon ds-input__icon--left">{leftIcon}</span>
        )}
        <input
          ref={ref}
          className={`ds-input ${hasLeftIcon ? 'ds-input--has-left-icon' : ''} ${hasRightIcon ? 'ds-input--has-right-icon' : ''}`}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          {...props}
        />
        {rightIcon && (
          <span className="ds-input__icon ds-input__icon--right">{rightIcon}</span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
