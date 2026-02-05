import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { DataTable, EmptyState, LoadingState, Button } from '@ds/ui'
import type { Column, SortDirection } from '@ds/ui'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const sampleData: User[] = [
  { id: 1, name: '山田 太郎', email: 'yamada@example.com', role: '管理者', status: 'active' },
  { id: 2, name: '鈴木 花子', email: 'suzuki@example.com', role: '編集者', status: 'active' },
  { id: 3, name: '田中 一郎', email: 'tanaka@example.com', role: '閲覧者', status: 'inactive' },
  { id: 4, name: '佐藤 次郎', email: 'sato@example.com', role: '編集者', status: 'active' },
  { id: 5, name: '高橋 三郎', email: 'takahashi@example.com', role: '閲覧者', status: 'active' },
]

const columns: Column<User>[] = [
  { key: 'name', label: '名前', sortable: true },
  { key: 'email', label: 'メールアドレス' },
  { key: 'role', label: '権限', sortable: true },
  {
    key: 'status',
    label: 'ステータス',
    render: (value) => (
      <span
        style={{
          padding: '2px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          backgroundColor: value === 'active' ? 'var(--color-success-bg, #dcfce7)' : 'var(--color-bg-tertiary)',
          color: value === 'active' ? 'var(--color-success, #16a34a)' : 'var(--color-text-secondary)',
        }}
      >
        {value === 'active' ? '有効' : '無効'}
      </span>
    ),
  },
]

const meta = {
  title: 'Patterns/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={sampleData}
      getRowKey={(row) => row.id}
    />
  ),
}

const SortableTable = () => {
  const [sortKey, setSortKey] = useState<string | undefined>()
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

  const sortedData = [...sampleData].sort((a, b) => {
    if (!sortKey || !sortDirection) return 0
    const aVal = a[sortKey as keyof User]
    const bVal = b[sortKey as keyof User]
    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  return (
    <DataTable
      columns={columns}
      data={sortedData}
      sortKey={sortKey}
      sortDirection={sortDirection}
      onSort={(key, direction) => {
        setSortKey(key)
        setSortDirection(direction)
      }}
      getRowKey={(row) => row.id}
    />
  )
}

export const Sortable: Story = {
  render: () => <SortableTable />,
}

const PaginatedTable = () => {
  const [page, setPage] = useState(1)
  const pageSize = 2
  const total = sampleData.length

  const paginatedData = sampleData.slice((page - 1) * pageSize, page * pageSize)

  return (
    <DataTable
      columns={columns}
      data={paginatedData}
      pagination={{ page, pageSize, total }}
      onPageChange={setPage}
      getRowKey={(row) => row.id}
    />
  )
}

export const WithPagination: Story = {
  render: () => <PaginatedTable />,
}

const FullFeaturedTable = () => {
  const [page, setPage] = useState(1)
  const [sortKey, setSortKey] = useState<string | undefined>()
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)
  const pageSize = 3

  const sortedData = [...sampleData].sort((a, b) => {
    if (!sortKey || !sortDirection) return 0
    const aVal = a[sortKey as keyof User]
    const bVal = b[sortKey as keyof User]
    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const paginatedData = sortedData.slice((page - 1) * pageSize, page * pageSize)

  return (
    <DataTable
      columns={columns}
      data={paginatedData}
      sortKey={sortKey}
      sortDirection={sortDirection}
      onSort={(key, direction) => {
        setSortKey(key)
        setSortDirection(direction)
        setPage(1)
      }}
      pagination={{ page, pageSize, total: sampleData.length }}
      onPageChange={setPage}
      getRowKey={(row) => row.id}
    />
  )
}

export const FullFeatured: Story = {
  render: () => <FullFeaturedTable />,
}

export const EmptyData: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      emptyState={
        <EmptyState
          title="ユーザーが見つかりません"
          message="条件を変更してお試しください"
          action={<Button variant="primary">ユーザーを追加</Button>}
        />
      }
      getRowKey={(row) => row.id}
    />
  ),
}

export const LoadingData: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      isLoading
      loadingState={<LoadingState message="データを読み込み中..." />}
      getRowKey={(row) => row.id}
    />
  ),
}

export const SmallSize: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={sampleData}
      size="sm"
      getRowKey={(row) => row.id}
    />
  ),
}

export const LargeSize: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={sampleData}
      size="lg"
      getRowKey={(row) => row.id}
    />
  ),
}

const WithActionsTable = () => {
  const columnsWithActions: Column<User>[] = [
    ...columns,
    {
      key: 'actions',
      label: '操作',
      align: 'right',
      render: (_, _row) => (
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <Button variant="ghost" size="sm">
            編集
          </Button>
          <Button variant="danger" size="sm">
            削除
          </Button>
        </div>
      ),
    },
  ]

  return (
    <DataTable
      columns={columnsWithActions}
      data={sampleData}
      getRowKey={(row) => row.id}
    />
  )
}

export const WithActions: Story = {
  render: () => <WithActionsTable />,
}

/* Coverage Tests */
export const SortingTest: Story = {
  render: () => <SortableTable />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // 名前でソート
    const nameHeader = canvas.getByRole('button', { name: /名前/ })
    await userEvent.click(nameHeader)

    // aria-sort属性の確認
    const th = nameHeader.closest('th')
    expect(th).toHaveAttribute('aria-sort', 'ascending')

    // 再クリックで降順
    await userEvent.click(nameHeader)
    expect(th).toHaveAttribute('aria-sort', 'descending')

    // 再クリックでソート解除
    await userEvent.click(nameHeader)
    expect(th).not.toHaveAttribute('aria-sort')
  },
}

export const PaginationTest: Story = {
  render: () => <PaginatedTable />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // ページ情報の確認
    expect(canvas.getByText(/1〜2/)).toBeInTheDocument()
    expect(canvas.getByText(/5件/)).toBeInTheDocument()

    // 次ページボタンをクリック
    const nextButton = canvas.getByRole('button', { name: '次のページ' })
    await userEvent.click(nextButton)

    // ページが進んだことを確認
    expect(canvas.getByText(/3〜4/)).toBeInTheDocument()
  },
}
