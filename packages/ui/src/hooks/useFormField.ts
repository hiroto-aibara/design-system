import { useId, useMemo } from 'react'

export interface UseFormFieldOptions {
  /** エラーメッセージ */
  error?: string
  /** 補足説明 */
  description?: string
  /** 必須フィールド */
  required?: boolean
  /** カスタムID（省略時は自動生成） */
  id?: string
}

export interface UseFormFieldReturn {
  /** フィールドのID */
  fieldId: string
  /** エラーメッセージのID */
  errorId: string
  /** 説明文のID */
  descriptionId: string
  /** aria-describedby の値 */
  ariaDescribedBy: string | undefined
  /** aria-invalid の値 */
  ariaInvalid: boolean
  /** aria-required の値 */
  ariaRequired: boolean | undefined
  /** エラーがあるか */
  hasError: boolean
  /** 説明があるか */
  hasDescription: boolean
  /** 入力要素に渡すprops */
  inputProps: {
    id: string
    'aria-describedby': string | undefined
    'aria-invalid': boolean | undefined
    'aria-required': boolean | undefined
  }
  /** ラベル要素に渡すprops */
  labelProps: {
    htmlFor: string
  }
  /** エラー要素に渡すprops */
  errorProps: {
    id: string
    role: 'alert'
  }
  /** 説明要素に渡すprops */
  descriptionProps: {
    id: string
  }
}

/**
 * フォームフィールドのa11y属性を管理するヘッドレスフック
 *
 * @example
 * ```tsx
 * const {
 *   inputProps,
 *   labelProps,
 *   errorProps,
 *   descriptionProps,
 *   hasError,
 *   hasDescription,
 * } = useFormField({
 *   error: 'エラーメッセージ',
 *   description: '補足説明',
 *   required: true,
 * })
 *
 * return (
 *   <div>
 *     <label {...labelProps}>ラベル</label>
 *     {hasDescription && <p {...descriptionProps}>補足説明</p>}
 *     <input {...inputProps} />
 *     {hasError && <p {...errorProps}>エラーメッセージ</p>}
 *   </div>
 * )
 * ```
 */
export function useFormField({
  error,
  description,
  required,
  id: customId,
}: UseFormFieldOptions): UseFormFieldReturn {
  const generatedId = useId()
  const fieldId = customId || `field-${generatedId}`
  const errorId = `${fieldId}-error`
  const descriptionId = `${fieldId}-description`

  const hasError = Boolean(error)
  const hasDescription = Boolean(description)

  const ariaDescribedBy = useMemo(() => {
    const ids: string[] = []
    if (hasError) ids.push(errorId)
    if (hasDescription) ids.push(descriptionId)
    return ids.length > 0 ? ids.join(' ') : undefined
  }, [hasError, hasDescription, errorId, descriptionId])

  const ariaInvalid = hasError
  const ariaRequired = required || undefined

  const inputProps = {
    id: fieldId,
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid || undefined,
    'aria-required': ariaRequired,
  }

  const labelProps = {
    htmlFor: fieldId,
  }

  const errorProps = {
    id: errorId,
    role: 'alert' as const,
  }

  const descriptionProps = {
    id: descriptionId,
  }

  return {
    fieldId,
    errorId,
    descriptionId,
    ariaDescribedBy,
    ariaInvalid,
    ariaRequired,
    hasError,
    hasDescription,
    inputProps,
    labelProps,
    errorProps,
    descriptionProps,
  }
}
