# コントリビュートガイド

このガイドは、デザインシステム自体を開発・拡張する開発者向けです。

## 1. 環境構築

### 必要なツール

- Node.js 22（mise.tomlで指定）
- pnpm 9.15.4（package.jsonで指定）

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/hiroto-aibara/design-system.git
cd design-system

# pnpmを有効化（初回のみ）
corepack enable
corepack prepare pnpm@9.15.4 --activate

# 依存関係をインストール
pnpm install
```

## 2. 開発フロー

### デモアプリで確認しながら開発

```bash
pnpm dev
```

http://localhost:5173 でデモアプリが起動します。コンポーネントやトークンを変更すると、ホットリロードで即座に反映されます。

### Storybookでコンポーネントを確認

```bash
pnpm storybook
```

http://localhost:6006 でStorybookが起動します。各コンポーネントのバリエーションを一覧で確認できます。

### 全パッケージをビルド

```bash
pnpm build
```

### リント

```bash
pnpm lint
```

### テスト

```bash
pnpm --filter @ds/storybook test           # テスト実行
pnpm --filter @ds/storybook test:coverage  # カバレッジ付き
```

### Docker環境

チーム開発やCI環境では、Dockerを使うことで環境差異を吸収できます。

```bash
# 全サービスを起動（デモアプリ + Storybook）
pnpm docker:up

# 個別に起動
pnpm docker:up:demo       # デモアプリ → http://localhost:13003
pnpm docker:up:storybook  # Storybook → http://localhost:13004

# 停止
pnpm docker:down
```

### ポート一覧

| サービス | ローカル開発 | Docker |
|---------|-------------|--------|
| デモアプリ | 5173 | 13003 |
| Storybook | 6006 | 13004 |

## 3. ディレクトリ構造

```
design-system/
├── packages/
│   ├── tokens/                # デザイントークン
│   │   └── src/
│   │       ├── raw/           # 生の値（カラーパレット等）
│   │       ├── semantic/      # 意味を持つトークン（primary等）
│   │       ├── brands/        # ブランド別の上書き
│   │       └── modes/         # カラーモード（dark等）
│   │
│   ├── ui/                    # UIコンポーネント
│   │   └── src/
│   │       ├── Button/        # 基本コンポーネント
│   │       ├── Input/
│   │       ├── Card/
│   │       ├── patterns/      # パターン（FormField等）
│   │       └── hooks/         # Headlessフック
│   │
│   └── icons/                 # アイコンパッケージ
│       └── src/
│           ├── createIcon.tsx # アイコン生成ユーティリティ
│           └── icons/         # 個別アイコン
│
├── apps/
│   ├── demo-app/              # デモアプリケーション
│   └── storybook/             # Storybook
│
├── docs/                      # ドキュメント
└── docker/                    # Docker設定
```

## 4. アーキテクチャ

### 3層構造

このデザインシステムは、以下の3層構造で設計されています。

```
┌─────────────────────────────────────────────────────────┐
│  Patterns（パターン）                                    │
│  FormField, DataTable, StateDisplay                     │
│  → 複数コンポーネントの組み合わせ、画面品質の統一        │
├─────────────────────────────────────────────────────────┤
│  Components（コンポーネント）                           │
│  Button, Input, Card, Modal, Table...                  │
│  → 見た目と振る舞いを持つ基本UI                         │
├─────────────────────────────────────────────────────────┤
│  Hooks（Headless）                                      │
│  useModal, useFormField                                │
│  → 振る舞いのみ、見た目なし                             │
└─────────────────────────────────────────────────────────┘
```

### Headless設計

**Headlessとは？**

「振る舞い」と「見た目」を分離する設計パターンです。Hooks層は振る舞い（ロジック、a11y属性、イベントハンドリング）のみを提供し、見た目は含みません。

**なぜHeadless？**

1. **カスタマイズ性** - 独自のUIを作りたい場合、Hooksだけを使って振る舞いを再利用できる
2. **テスタビリティ** - ロジックが分離されているため、単体テストしやすい
3. **関心の分離** - 見た目とロジックが混在しない

**例: useFormFieldの使い方**

```tsx
// Hookを直接使って独自UIを構築
import { useFormField } from '@ds/ui'

function CustomFormField({ label, error, children }) {
  const { inputProps, labelProps, errorProps, hasError } = useFormField({ error })

  return (
    <div className="my-custom-field">
      <label {...labelProps} className="my-label">{label}</label>
      {React.cloneElement(children, inputProps)}
      {hasError && <span {...errorProps} className="my-error">{error}</span>}
    </div>
  )
}
```

**例: useModalの使い方**

```tsx
// 独自のモーダルUIを構築
import { useModal } from '@ds/ui'

function CustomModal({ isOpen, onClose, children }) {
  const { handleOverlayClick, contentRef } = useModal({ isOpen, onClose })

  if (!isOpen) return null

  return (
    <div className="my-overlay" onClick={handleOverlayClick}>
      <div className="my-modal" ref={contentRef}>
        {children}
      </div>
    </div>
  )
}
```

### コンポーネント設計原則

1. **CSS変数でスタイリング** - トークンを使用し、ハードコードしない
2. **a11y対応** - aria属性、キーボード操作、フォーカス管理
3. **TypeScript** - 型安全なProps定義
4. **Storybook** - 全バリエーションのStoryを作成

## 5. 新しいコンポーネントの追加

### 1. ディレクトリ作成

```
packages/ui/src/NewComponent/
├── NewComponent.tsx
├── NewComponent.css
└── index.ts
```

### 2. コンポーネント実装

```tsx
// NewComponent.tsx
import './NewComponent.css'

export interface NewComponentProps {
  // Props定義
}

export function NewComponent({ ...props }: NewComponentProps) {
  return (
    // 実装
  )
}
```

### 3. エクスポート追加

```ts
// packages/ui/src/index.ts
export * from './NewComponent'
```

### 4. Storybook追加

```tsx
// apps/storybook/src/stories/NewComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite'
import { NewComponent } from '@ds/ui'

const meta = {
  title: 'Components/NewComponent',
  component: NewComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof NewComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // デフォルトProps
  },
}
```

## 6. 品質基盤

### ESLint

TypeScriptとReactのルールを適用しています。

```bash
pnpm lint
```

### テスト

Storybookのplay関数でインタラクションテストを実行します。

```bash
pnpm --filter @ds/storybook test
```

### Visual Regression

Chromaticで見た目の差分を検知します（CI連携）。

### a11y

Storybookの`@storybook/addon-a11y`でアクセシビリティチェックを行います。

## 7. PRガイドライン

1. **ブランチ名** - `feat/xxx`, `fix/xxx`, `docs/xxx`
2. **コミットメッセージ** - Conventional Commits形式
3. **PR説明** - 変更内容と動作確認方法を記載
4. **レビュー** - Storybookで見た目を確認、テストがパスすること
