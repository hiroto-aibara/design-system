# Design System

マルチブランド対応のデザインシステムです。

CSS変数を活用したテーマ機構により、1つのコンポーネントセットで複数のブランドやダークモードに対応できます。コンポーネント側のコードを変更することなく、HTML属性を切り替えるだけでテーマを変更できる設計になっています。

## クイックスタート

```bash
# インストール
pnpm add @ds/tokens @ds/ui @ds/icons
```

```tsx
// main.tsx
import '@ds/tokens'
import '@ds/ui/styles.css'
```

```tsx
// 使用例
import { Button, Card, CardBody } from '@ds/ui'
import { CheckIcon } from '@ds/icons'

function App() {
  return (
    <Card>
      <CardBody>
        <Button variant="primary">
          <CheckIcon /> 完了
        </Button>
      </CardBody>
    </Card>
  )
}
```

## パッケージ

| パッケージ | 説明 |
|-----------|------|
| `@ds/tokens` | デザイントークン（カラー、スペーシング、タイポグラフィ等） |
| `@ds/ui` | UIコンポーネント + パターン + Hooks |
| `@ds/icons` | アイコンコンポーネント |

## ドキュメント

| ドキュメント | 内容 |
|-------------|------|
| [利用ガイド](./docs/guide.md) | インストール、テーマ切り替え、ブランド追加、ダークモード |
| [コンポーネント](./docs/components.md) | 全コンポーネント・パターン・アイコン・HooksのAPI |
| [コントリビュート](./docs/contributing.md) | 開発環境、アーキテクチャ、Headless設計、PRガイドライン |

## 開発

```bash
# 依存関係インストール
pnpm install

# デモアプリ起動（http://localhost:5173）
pnpm dev

# Storybook起動（http://localhost:6006）
pnpm storybook

# ビルド
pnpm build

# テスト
pnpm --filter @ds/storybook test
```

## アーキテクチャ

```
┌───────────────────────────────────────────┐
│  Patterns: FormField, DataTable, ...      │
├───────────────────────────────────────────┤
│  Components: Button, Input, Card, ...     │
├───────────────────────────────────────────┤
│  Hooks: useModal, useFormField            │
└───────────────────────────────────────────┘
```

詳細は[コントリビュートガイド](./docs/contributing.md)を参照してください。
