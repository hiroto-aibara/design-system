import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { EmptyState, LoadingState, ErrorState, Button } from '@ds/ui'

const SearchIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
    <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" />
  </svg>
)

const FolderIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
    <path d="M7.05 40q-1.2 0-2.1-.925-.9-.925-.9-2.075V11q0-1.15.9-2.075Q5.85 8 7.05 8h14l3 3h16.95q1.15 0 2.075.925.925.925.925 2.075v23q0 1.15-.925 2.075Q42.15 40 41 40Z" />
  </svg>
)

/* EmptyState Stories */
const emptyMeta = {
  title: 'Patterns/StateDisplay/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>

export default emptyMeta
type EmptyStory = StoryObj<typeof emptyMeta>

export const Default: EmptyStory = {
  render: () => (
    <EmptyState
      icon={<SearchIcon />}
      title="検索結果なし"
      message="条件を変更してお試しください"
    />
  ),
}

export const WithAction: EmptyStory = {
  render: () => (
    <EmptyState
      icon={<SearchIcon />}
      title="検索結果なし"
      message="条件を変更してお試しください"
      action={<Button variant="primary">フィルターをクリア</Button>}
    />
  ),
}

export const NoData: EmptyStory = {
  render: () => (
    <EmptyState
      icon={<FolderIcon />}
      title="データがありません"
      message="新しいアイテムを追加して始めましょう"
      action={<Button variant="primary">アイテムを追加</Button>}
    />
  ),
}

export const MinimalEmpty: EmptyStory = {
  render: () => (
    <EmptyState message="表示するデータがありません" />
  ),
}

/* LoadingState Stories */
export const Loading: EmptyStory = {
  render: () => <LoadingState />,
}

export const LoadingWithMessage: EmptyStory = {
  render: () => <LoadingState message="データを読み込み中..." />,
}

export const LoadingSmall: EmptyStory = {
  render: () => <LoadingState size="sm" message="読み込み中" />,
}

export const LoadingLarge: EmptyStory = {
  render: () => <LoadingState size="lg" message="処理中です..." />,
}

/* ErrorState Stories */
export const Error: EmptyStory = {
  render: () => (
    <ErrorState
      title="エラーが発生しました"
      message="しばらく経ってから再度お試しください"
    />
  ),
}

export const ErrorWithRetry: EmptyStory = {
  render: () => (
    <ErrorState
      title="接続エラー"
      message="ネットワーク接続を確認してください"
      action={<Button variant="primary">再試行</Button>}
    />
  ),
}

export const ServerError: EmptyStory = {
  render: () => (
    <ErrorState
      title="サーバーエラー"
      message="サーバーで問題が発生しました。しばらく経ってから再度お試しください。"
      action={
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="ghost">ホームに戻る</Button>
          <Button variant="primary">再試行</Button>
        </div>
      }
    />
  ),
}

/* Coverage Tests */
export const EmptyStateTest: EmptyStory = {
  render: () => (
    <EmptyState
      icon={<SearchIcon />}
      title="テストタイトル"
      message="テストメッセージ"
      action={<Button data-testid="action-button">アクション</Button>}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(canvas.getByText('テストタイトル')).toBeInTheDocument()
    expect(canvas.getByText('テストメッセージ')).toBeInTheDocument()
    expect(canvas.getByTestId('action-button')).toBeInTheDocument()
  },
}

export const LoadingStateTest: EmptyStory = {
  render: () => <LoadingState message="テスト読み込み中" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(canvas.getByText('テスト読み込み中')).toBeInTheDocument()
    expect(canvas.getByRole('status')).toBeInTheDocument()
  },
}

export const ErrorStateTest: EmptyStory = {
  render: () => (
    <ErrorState
      title="テストエラー"
      message="テストエラーメッセージ"
      action={<Button data-testid="retry-button">再試行</Button>}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(canvas.getByText('テストエラー')).toBeInTheDocument()
    expect(canvas.getByText('テストエラーメッセージ')).toBeInTheDocument()
    expect(canvas.getByTestId('retry-button')).toBeInTheDocument()
    expect(canvas.getByRole('alert')).toBeInTheDocument()
  },
}
