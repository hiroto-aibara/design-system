import { ReactNode, useCallback } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from '../../Table'
import { Button } from '../../Button'
import './DataTable.css'

export type SortDirection = 'asc' | 'desc' | null

export interface Column<T> {
  /** カラムのキー */
  key: keyof T | string
  /** カラムのラベル */
  label: string
  /** ソート可能 */
  sortable?: boolean
  /** カスタムレンダラー */
  render?: (value: T[keyof T], row: T, index: number) => ReactNode
  /** カラムの幅 */
  width?: string | number
  /** 配置 */
  align?: 'left' | 'center' | 'right'
}

export interface PaginationProps {
  /** 現在のページ */
  page: number
  /** 1ページあたりの件数 */
  pageSize: number
  /** 総件数 */
  total: number
}

export interface DataTableProps<T extends Record<string, unknown>> {
  /** カラム定義 */
  columns: Column<T>[]
  /** データ配列 */
  data: T[]
  /** ページネーション設定 */
  pagination?: PaginationProps
  /** 現在のソートキー */
  sortKey?: string
  /** 現在のソート方向 */
  sortDirection?: SortDirection
  /** ソート時のコールバック */
  onSort?: (key: string, direction: SortDirection) => void
  /** ページ変更時のコールバック */
  onPageChange?: (page: number) => void
  /** 空状態の表示 */
  emptyState?: ReactNode
  /** 読み込み中の表示 */
  loadingState?: ReactNode
  /** 読み込み中フラグ */
  isLoading?: boolean
  /** 行のキー取得関数 */
  getRowKey?: (row: T, index: number) => string | number
  /** テーブルサイズ */
  size?: 'sm' | 'md' | 'lg'
  /** ストライプ表示 */
  striped?: boolean
  /** ホバー効果 */
  hoverable?: boolean
  /** カスタムクラス名 */
  className?: string
}

const SortIcon = ({ direction }: { direction: SortDirection }) => (
  <span className={`ds-data-table__sort-icon ${direction ? `ds-data-table__sort-icon--${direction}` : ''}`}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 3.5l4 5H4l4-5z" className="ds-data-table__sort-up" />
      <path d="M8 12.5l-4-5h8l-4 5z" className="ds-data-table__sort-down" />
    </svg>
  </span>
)

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  pagination,
  sortKey,
  sortDirection,
  onSort,
  onPageChange,
  emptyState,
  loadingState,
  isLoading,
  getRowKey = (_, index) => index,
  size = 'md',
  striped = true,
  hoverable = true,
  className,
}: DataTableProps<T>) {
  const handleSort = useCallback(
    (key: string) => {
      if (!onSort) return
      let newDirection: SortDirection = 'asc'
      if (sortKey === key) {
        if (sortDirection === 'asc') newDirection = 'desc'
        else if (sortDirection === 'desc') newDirection = null
      }
      onSort(key, newDirection)
    },
    [onSort, sortKey, sortDirection]
  )

  const totalPages = pagination ? Math.ceil(pagination.total / pagination.pageSize) : 0
  const startItem = pagination ? (pagination.page - 1) * pagination.pageSize + 1 : 0
  const endItem = pagination ? Math.min(pagination.page * pagination.pageSize, pagination.total) : 0

  // ローディング中
  if (isLoading && loadingState) {
    return <div className="ds-data-table__state">{loadingState}</div>
  }

  // データなし
  if (!isLoading && data.length === 0 && emptyState) {
    return <div className="ds-data-table__state">{emptyState}</div>
  }

  return (
    <div className={`ds-data-table ${className || ''}`}>
      <div className="ds-data-table__wrapper">
        <Table size={size} striped={striped} hoverable={hoverable}>
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th
                  key={String(column.key)}
                  style={{
                    width: column.width,
                    textAlign: column.align,
                  }}
                  aria-sort={
                    sortKey === column.key && sortDirection
                      ? sortDirection === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : undefined
                  }
                >
                  {column.sortable ? (
                    <button
                      type="button"
                      className="ds-data-table__sort-button"
                      onClick={() => handleSort(String(column.key))}
                    >
                      {column.label}
                      <SortIcon
                        direction={sortKey === column.key ? (sortDirection ?? null) : null}
                      />
                    </button>
                  ) : (
                    column.label
                  )}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, rowIndex) => (
              <Tr key={getRowKey(row, rowIndex)}>
                {columns.map((column) => {
                  const value = row[column.key as keyof T]
                  return (
                    <Td
                      key={String(column.key)}
                      style={{ textAlign: column.align }}
                    >
                      {column.render
                        ? column.render(value, row, rowIndex)
                        : String(value ?? '')}
                    </Td>
                  )
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>

      {pagination && totalPages > 0 && (
        <div className="ds-data-table__pagination">
          <span className="ds-data-table__pagination-info">
            {startItem}〜{endItem} / {pagination.total}件
          </span>
          <div className="ds-data-table__pagination-controls">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange?.(pagination.page - 1)}
              disabled={pagination.page <= 1}
              aria-label="前のページ"
            >
              ‹
            </Button>
            <span className="ds-data-table__pagination-pages">
              {pagination.page} / {totalPages}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPageChange?.(pagination.page + 1)}
              disabled={pagination.page >= totalPages}
              aria-label="次のページ"
            >
              ›
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
