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
      isInvalid = false,
      disabled,
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref
  ) => {
    const hasLeftIcon = !!leftIcon
    const hasRightIcon = !!rightIcon

    return (
      <div
        className={`ds-input-wrapper ds-input-wrapper--${size} ${isInvalid ? 'ds-input-wrapper--invalid' : ''} ${disabled ? 'ds-input-wrapper--disabled' : ''} ${className || ''}`}
      >
        {leftIcon && (
          <span className="ds-input__icon ds-input__icon--left">{leftIcon}</span>
        )}
        <input
          ref={ref}
          className={`ds-input ${hasLeftIcon ? 'ds-input--has-left-icon' : ''} ${hasRightIcon ? 'ds-input--has-right-icon' : ''}`}
          disabled={disabled}
          aria-invalid={isInvalid}
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
