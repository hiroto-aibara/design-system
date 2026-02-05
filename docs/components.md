# コンポーネントリファレンス

## Components

基本的なUIコンポーネントです。

### Button

ボタンコンポーネントです。4つのバリアントと3つのサイズを選べます。

```tsx
import { Button } from '@ds/ui'

// バリアント
<Button variant="primary">メインアクション</Button>
<Button variant="secondary">サブアクション</Button>
<Button variant="ghost">控えめなアクション</Button>
<Button variant="danger">危険なアクション</Button>

// サイズ
<Button size="sm">小</Button>
<Button size="md">中（デフォルト）</Button>
<Button size="lg">大</Button>

// 状態
<Button isLoading>処理中...</Button>
<Button disabled>無効</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | ボタンの見た目 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | ボタンのサイズ |
| `isLoading` | `boolean` | `false` | ローディング状態 |
| `disabled` | `boolean` | `false` | 無効状態 |

### Input

テキスト入力コンポーネントです。

```tsx
import { Input } from '@ds/ui'

<Input placeholder="テキストを入力" />
<Input size="lg" placeholder="大きめの入力欄" />
<Input isInvalid placeholder="エラー状態" />
<Input disabled placeholder="無効状態" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 入力欄のサイズ |
| `isInvalid` | `boolean` | `false` | エラー状態 |

### Card

コンテンツをグループ化するカードコンポーネントです。

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@ds/ui'

<Card padding="md" shadow>
  <CardHeader>カードのタイトル</CardHeader>
  <CardBody>カードの本文がここに入ります。</CardBody>
  <CardFooter>
    <Button variant="primary">アクション</Button>
  </CardFooter>
</Card>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | 内側の余白 |
| `shadow` | `boolean` | `false` | 影の有無 |
| `border` | `boolean` | `true` | ボーダーの有無 |

### Select

セレクトボックスコンポーネントです。

```tsx
import { Select } from '@ds/ui'

<Select>
  <option value="">選択してください</option>
  <option value="jp">日本</option>
  <option value="us">アメリカ</option>
</Select>
```

### Checkbox

チェックボックスコンポーネントです。

```tsx
import { Checkbox } from '@ds/ui'

<Checkbox label="利用規約に同意する" />
<Checkbox label="チェック済み" defaultChecked />
<Checkbox label="無効" disabled />
```

### Radio

ラジオボタンコンポーネントです。

```tsx
import { Radio, RadioGroup } from '@ds/ui'

<RadioGroup name="plan" defaultValue="free">
  <Radio value="free" label="フリープラン" />
  <Radio value="pro" label="プロプラン" />
  <Radio value="enterprise" label="エンタープライズ" />
</RadioGroup>
```

### Modal

モーダルダイアログコンポーネントです。

```tsx
import { Modal } from '@ds/ui'

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="確認">
  <p>この操作を実行しますか？</p>
  <Button onClick={() => setIsOpen(false)}>キャンセル</Button>
  <Button variant="primary" onClick={handleConfirm}>確認</Button>
</Modal>
```

### Toast

トースト通知コンポーネントです。

```tsx
import { ToastProvider, useToast } from '@ds/ui'

// プロバイダーでラップ
<ToastProvider>
  <App />
</ToastProvider>

// コンポーネント内で使用
const { showToast } = useToast()

showToast({ type: 'success', message: '保存しました' })
showToast({ type: 'error', message: 'エラーが発生しました' })
showToast({ type: 'warning', message: '注意が必要です' })
showToast({ type: 'info', message: 'お知らせ' })
```

### Table

テーブルコンポーネントです。

```tsx
import { Table, Thead, Tbody, Tr, Th, Td } from '@ds/ui'

<Table>
  <Thead>
    <Tr>
      <Th>名前</Th>
      <Th>メール</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>山田太郎</Td>
      <Td>yamada@example.com</Td>
    </Tr>
  </Tbody>
</Table>
```

### Heading

見出しコンポーネントです。

```tsx
import { Heading } from '@ds/ui'

<Heading level={1}>h1見出し</Heading>
<Heading level={2}>h2見出し</Heading>
<Heading level={3}>h3見出し</Heading>
```

### Container

コンテンツの最大幅を制限するコンテナコンポーネントです。

```tsx
import { Container } from '@ds/ui'

<Container size="md">
  {/* コンテンツ */}
</Container>
```

---

## Patterns

複数のコンポーネントを組み合わせた再利用可能なパターンです。

### FormField

フォームフィールドのパターンです。ラベル、入力、エラー、説明文を一貫した形で提供します。

```tsx
import { FormField, Input } from '@ds/ui'

<FormField
  label="メールアドレス"
  required
  error="有効なメールアドレスを入力してください"
  description="ログインに使用します"
>
  <Input type="email" />
</FormField>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | ラベルテキスト |
| `required` | `boolean` | `false` | 必須マーク表示 |
| `error` | `string` | - | エラーメッセージ |
| `description` | `string` | - | 補足説明 |
| `children` | `ReactNode` | - | フォーム要素 |

a11y対応：
- `aria-describedby` でerror/descriptionを関連付け
- `aria-required` を自動設定
- `aria-invalid` をchildrenに伝播

### DataTable

データテーブルのパターンです。ソート、ページネーション、空状態、ローディング状態に対応します。

```tsx
import { DataTable } from '@ds/ui'
import type { Column } from '@ds/ui'

const columns: Column<User>[] = [
  { key: 'name', label: '名前', sortable: true },
  { key: 'email', label: 'メール' },
  { key: 'role', label: '権限', sortable: true },
]

<DataTable
  columns={columns}
  data={users}
  pagination={{ page: 1, pageSize: 10, total: 100 }}
  onSort={(key, direction) => handleSort(key, direction)}
  onPageChange={(page) => handlePageChange(page)}
  emptyState={<EmptyState message="ユーザーが見つかりません" />}
  loadingState={<LoadingState />}
  isLoading={isLoading}
  getRowKey={(row) => row.id}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Column<T>[]` | - | カラム定義 |
| `data` | `T[]` | - | データ配列 |
| `pagination` | `PaginationProps` | - | ページネーション設定 |
| `sortKey` | `string` | - | 現在のソートキー |
| `sortDirection` | `'asc' \| 'desc' \| null` | - | ソート方向 |
| `onSort` | `(key, direction) => void` | - | ソート変更時のコールバック |
| `onPageChange` | `(page) => void` | - | ページ変更時のコールバック |
| `emptyState` | `ReactNode` | - | 空状態の表示 |
| `loadingState` | `ReactNode` | - | ローディング状態の表示 |
| `isLoading` | `boolean` | `false` | ローディング中かどうか |
| `getRowKey` | `(row) => string \| number` | - | 行のキー取得関数 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | テーブルサイズ |

### EmptyState

空状態を表示するパターンです。

```tsx
import { EmptyState, Button } from '@ds/ui'

<EmptyState
  icon={<SearchIcon />}
  title="検索結果なし"
  message="条件を変更してお試しください"
  action={<Button>フィルターをクリア</Button>}
/>
```

### LoadingState

ローディング状態を表示するパターンです。

```tsx
import { LoadingState } from '@ds/ui'

<LoadingState message="データを読み込み中..." />
```

### ErrorState

エラー状態を表示するパターンです。

```tsx
import { ErrorState, Button } from '@ds/ui'

<ErrorState
  title="エラーが発生しました"
  message="しばらく経ってから再度お試しください"
  action={<Button onClick={retry}>再試行</Button>}
/>
```

---

## Icons

アイコンコンポーネントです。Tree-shakingに対応しています。

```tsx
import { CheckIcon, CloseIcon, SearchIcon } from '@ds/icons'

<CheckIcon />
<CloseIcon size={24} />
<SearchIcon title="検索" />  {/* アクセシブルなアイコン */}
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `20` | アイコンのサイズ |
| `title` | `string` | - | アクセシブルなタイトル |

### 利用可能なアイコン

| アイコン | 用途 |
|---------|------|
| `CheckIcon` | チェックマーク、完了 |
| `CloseIcon` | 閉じる、削除 |
| `SearchIcon` | 検索 |
| `PlusIcon` | 追加 |
| `HomeIcon` | ホーム |
| `SettingsIcon` | 設定 |
| `MenuIcon` | メニュー |
| `ArrowRightIcon` | 矢印（右） |
| `InfoIcon` | 情報 |
| `SuccessIcon` | 成功 |
| `WarningIcon` | 警告 |
| `AlertIcon` | エラー、危険 |
| `ChevronDownIcon` | 下矢印、展開 |

---

## Hooks

Headlessフック（振る舞いのみを提供）です。

### useModal

モーダルの振る舞いを管理するフックです。

```tsx
import { useModal } from '@ds/ui'

const {
  isOpen,
  onClose,
  handleOverlayClick,
  triggerRef,
  contentRef,
} = useModal({
  isOpen: true,
  onClose: () => setIsOpen(false),
  closeOnEsc: true,        // ESCキーで閉じる
  closeOnOverlayClick: true, // オーバーレイクリックで閉じる
})
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `isOpen` | `boolean` | - | 開閉状態 |
| `onClose` | `() => void` | - | 閉じる時のコールバック |
| `closeOnEsc` | `boolean` | `true` | ESCキーで閉じるか |
| `closeOnOverlayClick` | `boolean` | `true` | オーバーレイクリックで閉じるか |

| Return | Type | Description |
|--------|------|-------------|
| `isOpen` | `boolean` | 開閉状態 |
| `onClose` | `() => void` | 閉じる関数 |
| `handleOverlayClick` | `(e) => void` | オーバーレイクリックハンドラ |
| `triggerRef` | `RefObject` | トリガー要素のref（フォーカス復帰用） |
| `contentRef` | `RefObject` | コンテンツ要素のref（フォーカストラップ用） |

機能：
- ESCキーで閉じる
- オーバーレイクリックで閉じる
- Body scroll lock
- フォーカストラップ
- 閉じた時のフォーカス復帰

### useFormField

フォームフィールドのa11y属性を管理するフックです。

```tsx
import { useFormField } from '@ds/ui'

const {
  inputProps,
  labelProps,
  errorProps,
  descriptionProps,
  hasError,
  hasDescription,
} = useFormField({
  error: 'エラーメッセージ',
  description: '補足説明',
  required: true,
})

return (
  <div>
    <label {...labelProps}>ラベル</label>
    {hasDescription && <p {...descriptionProps}>補足説明</p>}
    <input {...inputProps} />
    {hasError && <p {...errorProps}>エラーメッセージ</p>}
  </div>
)
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `error` | `string` | - | エラーメッセージ |
| `description` | `string` | - | 補足説明 |
| `required` | `boolean` | `false` | 必須フィールドか |
| `id` | `string` | auto | カスタムID |

| Return | Type | Description |
|--------|------|-------------|
| `inputProps` | `object` | 入力要素に渡すprops |
| `labelProps` | `object` | ラベル要素に渡すprops |
| `errorProps` | `object` | エラー要素に渡すprops |
| `descriptionProps` | `object` | 説明要素に渡すprops |
| `hasError` | `boolean` | エラーがあるか |
| `hasDescription` | `boolean` | 説明があるか |
| `fieldId` | `string` | フィールドのID |
| `ariaDescribedBy` | `string \| undefined` | aria-describedbyの値 |
