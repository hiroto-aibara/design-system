# 利用ガイド

このガイドは、デザインシステムを自分のアプリケーションに導入する開発者向けです。

## インストール

### 方法1: GitHubリポジトリから直接インストール

npmへの公開前、またはプライベート利用の場合はこちらを使用します。

```bash
pnpm add github:hiroto-aibara/design-system#main&path:packages/tokens
pnpm add github:hiroto-aibara/design-system#main&path:packages/ui
pnpm add github:hiroto-aibara/design-system#main&path:packages/icons
```

package.jsonには以下のように記録されます。

```json
{
  "dependencies": {
    "@ds/tokens": "github:hiroto-aibara/design-system#main&path:packages/tokens",
    "@ds/ui": "github:hiroto-aibara/design-system#main&path:packages/ui",
    "@ds/icons": "github:hiroto-aibara/design-system#main&path:packages/icons"
  }
}
```

特定のバージョンを固定したい場合は、`#main`の代わりにタグ（例: `#v1.0.0`）やコミットハッシュを指定できます。

### 方法2: npmからインストール（公開後）

npmに公開されている場合は、通常の方法でインストールできます。

```bash
pnpm add @ds/tokens @ds/ui @ds/icons
```

## 基本的な使い方

アプリケーションのエントリーポイント（main.tsxなど）でトークンとスタイルを読み込みます。

```tsx
// main.tsx
import '@ds/tokens'
import '@ds/ui/styles.css'
```

その後、必要なコンポーネントをインポートして使用します。

```tsx
import { Button, Input, Card, CardHeader, CardBody, CardFooter } from '@ds/ui'

function ContactForm() {
  return (
    <Card>
      <CardHeader>お問い合わせ</CardHeader>
      <CardBody>
        <Input placeholder="お名前" />
        <Input placeholder="メールアドレス" />
      </CardBody>
      <CardFooter>
        <Button variant="primary">送信</Button>
      </CardFooter>
    </Card>
  )
}
```

## テーマの切り替え

テーマはHTML要素の`data-brand`属性と`data-theme`属性で制御します。

```tsx
// JavaScriptで切り替える場合
document.documentElement.dataset.brand = 'acme'  // ブランド切り替え
document.documentElement.dataset.theme = 'dark'  // ダークモード切り替え
```

```html
<!-- HTMLに直接記述する場合 -->
<html data-brand="acme" data-theme="dark">
```

コンポーネント側のコードは一切変更する必要がありません。属性を切り替えるだけで、すべてのコンポーネントの見た目が自動的に変わります。

### テーマの仕組み

テーマは3層構造になっています。下の層が上の層を上書きする仕組みです。

1. **ベーステーマ（:root）** - すべてのデフォルト値を定義
2. **ブランド（[data-brand]）** - ブランド固有の値で上書き
3. **カラーモード（[data-theme]）** - ダークモード等で上書き

```css
/* 1. ベーステーマ */
:root {
  --color-primary: var(--palette-blue-600);
}

/* 2. ブランドで上書き */
[data-brand="acme"] {
  --color-primary: var(--palette-green-600);
}

/* 3. カラーモードで上書き */
[data-theme="dark"] {
  --color-bg-surface: var(--palette-gray-900);
}
```

## ブランドの追加

`packages/tokens/src/brands/` に新しいCSSファイルを作成します。

```css
/* packages/tokens/src/brands/acme.css */
[data-brand="acme"] {
  --color-primary: var(--palette-green-600);
  --color-primary-hover: var(--palette-green-700);
  --radius-md: 12px;
}
```

作成したファイルを `packages/tokens/src/index.css` でインポートします。

## ダークモードの追加

`packages/tokens/src/modes/` に新しいCSSファイルを作成します。

```css
/* packages/tokens/src/modes/dark.css */
[data-theme="dark"] {
  --color-bg-surface: var(--palette-gray-900);
  --color-bg-muted: var(--palette-gray-800);
  --color-text-primary: var(--palette-gray-50);
}
```

### システム設定との連動

ユーザーのシステム設定に応じて自動でダークモードを適用する場合：

```tsx
// システム設定を検知して適用
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light'

// 変更を監視
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  document.documentElement.dataset.theme = e.matches ? 'dark' : 'light'
})
```
