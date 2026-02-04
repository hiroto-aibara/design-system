# Design System

マルチブランド対応のデザインシステムです。

CSS変数を活用したテーマ機構により、1つのコンポーネントセットで複数のブランドやダークモードに対応できます。コンポーネント側のコードを変更することなく、HTML属性を切り替えるだけでテーマを変更できる設計になっています。

## 内容物

このリポジトリには以下が含まれています。

**パッケージ**

- **@ds/tokens** - デザイントークン。カラーパレット、スペーシング、角丸、タイポグラフィなどの値をCSS変数として定義しています。
- **@ds/ui** - UIコンポーネント。Button、Input、Cardなど、トークンを使用したReactコンポーネントを提供します。

**アプリケーション（開発・確認用）**

- **demo-app** - デザインシステムを使用したデモアプリケーション。実際の使用感を確認できます。
- **storybook** - コンポーネントカタログ。各コンポーネントのバリエーションや使い方をインタラクティブに確認できます。

---

## 利用者向けガイド

このセクションは、デザインシステムを自分のアプリケーションに導入する開発者向けです。

### インストール

**方法1: GitHubリポジトリから直接インストール**

npmへの公開前、またはプライベート利用の場合はこちらを使用します。

```bash
pnpm add github:hiroto-aibara/design-system#main&path:packages/tokens
pnpm add github:hiroto-aibara/design-system#main&path:packages/ui
```

package.jsonには以下のように記録されます。

```json
{
  "dependencies": {
    "@ds/tokens": "github:hiroto-aibara/design-system#main&path:packages/tokens",
    "@ds/ui": "github:hiroto-aibara/design-system#main&path:packages/ui"
  }
}
```

特定のバージョンを固定したい場合は、`#main`の代わりにタグ（例: `#v1.0.0`）やコミットハッシュを指定できます。

**方法2: npmからインストール（公開後）**

npmに公開されている場合は、通常の方法でインストールできます。

```bash
pnpm add @ds/tokens @ds/ui
```

### 基本的な使い方

まず、アプリケーションのエントリーポイント（main.tsxなど）でトークンとスタイルを読み込みます。これは1回だけ行えば、アプリ全体でデザインシステムが使えるようになります。

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

### テーマの切り替え

テーマはHTML要素の`data-brand`属性と`data-theme`属性で制御します。JavaScriptから動的に切り替えることも、HTMLに直接記述することもできます。

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

### コンポーネント一覧

#### Button

ボタンコンポーネントです。4つのバリアント（見た目）と3つのサイズを選べます。ローディング状態や無効状態にも対応しています。

```tsx
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

#### Input

テキスト入力コンポーネントです。サイズ変更やエラー状態の表示に対応しています。

```tsx
<Input placeholder="テキストを入力" />
<Input size="lg" placeholder="大きめの入力欄" />
<Input isInvalid placeholder="エラー状態" />
<Input disabled placeholder="無効状態" />
```

#### Card

コンテンツをグループ化するカードコンポーネントです。ヘッダー、ボディ、フッターの3つの領域を持ち、影やボーダーの有無を選べます。

```tsx
<Card padding="md" shadow>
  <CardHeader>カードのタイトル</CardHeader>
  <CardBody>カードの本文がここに入ります。</CardBody>
  <CardFooter>
    <Button variant="primary">アクション</Button>
  </CardFooter>
</Card>
```

---

## 開発者向けガイド

このセクションは、デザインシステム自体を開発・拡張する開発者向けです。

### 環境構築

以下のツールが必要です。

- Node.js 22（mise.tomlで指定）
- pnpm 9.15.4（package.jsonで指定）

リポジトリをクローンしたら、以下のコマンドで開発環境をセットアップします。

```bash
# pnpmを有効化（初回のみ）
corepack enable
corepack prepare pnpm@9.15.4 --activate

# 依存関係をインストール
pnpm install
```

### 開発の進め方

**デモアプリで確認しながら開発する場合**

```bash
pnpm dev
```

http://localhost:5173 でデモアプリが起動します。コンポーネントやトークンを変更すると、ホットリロードで即座に反映されます。

**Storybookでコンポーネントを確認する場合**

```bash
pnpm storybook
```

http://localhost:6006 でStorybookが起動します。各コンポーネントのバリエーションを一覧で確認できます。

**全パッケージをビルドする場合**

```bash
pnpm build
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

### ディレクトリ構造

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
│   └── ui/                    # UIコンポーネント
│       └── src/
│           ├── Button/
│           ├── Input/
│           └── Card/
│
├── apps/
│   ├── demo-app/              # デモアプリケーション
│   └── storybook/             # Storybook
│
└── docker/                    # Docker設定
```

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

### 新しいブランドを追加する

`packages/tokens/src/brands/` に新しいCSSファイルを作成します。

```css
/* packages/tokens/src/brands/acme.css */
[data-brand="acme"] {
  --color-primary: var(--palette-green-600);
  --color-primary-hover: var(--palette-green-700);
  --radius-md: 12px;
}
```

### ダークモードを追加する

`packages/tokens/src/modes/` に新しいCSSファイルを作成します。

```css
/* packages/tokens/src/modes/dark.css */
[data-theme="dark"] {
  --color-bg-surface: var(--palette-gray-900);
  --color-bg-muted: var(--palette-gray-800);
  --color-text-primary: var(--palette-gray-50);
}
```

### ポート一覧

| サービス | ローカル開発 | Docker |
|---------|-------------|--------|
| デモアプリ | 5173 | 13003 |
| Storybook | 6006 | 13004 |
