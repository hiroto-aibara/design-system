import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { FormField, Input, Select } from '@ds/ui'

const meta = {
  title: 'Patterns/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField label="メールアドレス">
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField label="名前" required>
        <Input placeholder="山田 太郎" />
      </FormField>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField
        label="パスワード"
        required
        description="8文字以上で、英数字を含めてください"
      >
        <Input type="password" placeholder="••••••••" />
      </FormField>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField
        label="メールアドレス"
        required
        error="有効なメールアドレスを入力してください"
      >
        <Input type="email" defaultValue="invalid-email" isInvalid />
      </FormField>
    </div>
  ),
}

export const WithErrorAndDescription: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField
        label="パスワード"
        required
        description="8文字以上で、英数字を含めてください"
        error="パスワードが短すぎます"
      >
        <Input type="password" defaultValue="123" isInvalid />
      </FormField>
    </div>
  ),
}

export const WithSelect: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField label="国" required>
        <Select>
          <option value="">選択してください</option>
          <option value="jp">日本</option>
          <option value="us">アメリカ</option>
          <option value="uk">イギリス</option>
        </Select>
      </FormField>
    </div>
  ),
}

const FormExample = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const nameError = submitted && !name ? '名前は必須です' : undefined
  const emailError =
    submitted && !email
      ? 'メールアドレスは必須です'
      : submitted && !email.includes('@')
      ? '有効なメールアドレスを入力してください'
      : undefined

  return (
    <form
      style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <FormField label="名前" required error={nameError}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="山田 太郎"
        />
      </FormField>
      <FormField
        label="メールアドレス"
        required
        description="確認メールを送信します"
        error={emailError}
      >
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </FormField>
      <button type="submit" style={{ padding: '8px 16px', marginTop: '8px' }}>
        送信
      </button>
    </form>
  )
}

export const FormValidation: Story = {
  render: () => <FormExample />,
}

/* Coverage Tests */
export const AccessibilityTest: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField
        label="テストフィールド"
        required
        description="これは説明文です"
        error="これはエラーメッセージです"
      >
        <Input data-testid="test-input" />
      </FormField>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Input要素の確認
    const input = canvas.getByTestId('test-input')
    expect(input).toBeInTheDocument()

    // aria属性の確認
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-required', 'true')
    expect(input).toHaveAttribute('aria-describedby')

    // ラベルの確認
    expect(canvas.getByText('テストフィールド')).toBeInTheDocument()
    expect(canvas.getByText('*')).toBeInTheDocument()

    // 説明文とエラーメッセージの確認
    expect(canvas.getByText('これは説明文です')).toBeInTheDocument()
    expect(canvas.getByText('これはエラーメッセージです')).toBeInTheDocument()
  },
}

const InteractionTestExample = () => {
  const [value, setValue] = useState('')
  return (
    <div style={{ width: '320px' }}>
      <FormField label="入力テスト">
        <Input
          data-testid="input-field"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormField>
      <p data-testid="output">入力値: {value}</p>
    </div>
  )
}

export const InteractionTest: Story = {
  render: () => <InteractionTestExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByTestId('input-field')
    await userEvent.type(input, 'テスト入力')

    await expect(canvas.getByTestId('output')).toHaveTextContent('入力値: テスト入力')
  },
}
