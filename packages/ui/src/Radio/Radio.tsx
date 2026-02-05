import {
  forwardRef,
  createContext,
  useContext,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import './Radio.css'

/* RadioGroup Context */
interface RadioGroupContextValue {
  name: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

/* RadioGroup */
export interface RadioGroupProps {
  /** グループ名 */
  name: string
  /** 選択値（制御モード） */
  value?: string
  /** 初期選択値（非制御モード） */
  defaultValue?: string
  /** 変更ハンドラー */
  onChange?: (value: string) => void
  /** 無効状態 */
  disabled?: boolean
  /** 子要素（Radio） */
  children: ReactNode
  /** カスタムクラス名 */
  className?: string
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ name, value, defaultValue, onChange, disabled, children, className, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue)
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const handleChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
    }

    return (
      <RadioGroupContext.Provider value={{ name, value: currentValue, onChange: handleChange, disabled }}>
        <div
          ref={ref}
          role="radiogroup"
          className={`ds-radio-group ${className || ''}`}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

/* Radio */
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** 値 */
  value: string
  /** ラベル */
  children?: ReactNode
  /** 変更ハンドラー（RadioGroup外で使用時） */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, disabled, children, className, onChange, ...props }, ref) => {
    const context = useContext(RadioGroupContext)

    const isDisabled = disabled || context?.disabled
    const isChecked = context ? context.value === value : props.checked
    const name = context?.name || props.name

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (context?.onChange) {
        context.onChange(value)
      }
      onChange?.(e)
    }

    const wrapperClasses = [
      'ds-radio',
      isDisabled && 'ds-radio--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <label className={wrapperClasses}>
        <input
          ref={ref}
          type="radio"
          className="ds-radio__input"
          name={name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleChange}
          {...props}
        />
        <span className="ds-radio__circle" aria-hidden="true">
          <span className="ds-radio__dot" />
        </span>
        {children && <span className="ds-radio__label">{children}</span>}
      </label>
    )
  }
)

Radio.displayName = 'Radio'
