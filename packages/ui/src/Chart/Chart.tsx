import { type CSSProperties } from 'react'

export type ChartColor = 'primary' | 'accent' | 'success' | 'warning' | 'danger'

export interface BaseChartProps<T = Record<string, unknown>> {
  /** データ配列 */
  data: T[]
  /** チャートの幅 */
  width?: number | `${number}%`
  /** チャートの高さ */
  height?: number
  /** カラーテーマ */
  color?: ChartColor
  /** アニメーションを有効化 */
  animate?: boolean
  /** グリッドを表示 */
  showGrid?: boolean
  /** 凡例を表示 */
  showLegend?: boolean
  /** ツールチップを表示 */
  showTooltip?: boolean
  /** カスタムクラス名 */
  className?: string
  /** カスタムスタイル */
  style?: CSSProperties
}

/**
 * CSS変数からカラー値を取得するユーティリティ
 */
export const getChartColor = (color: ChartColor): string => {
  const colorMap: Record<ChartColor, string> = {
    primary: 'var(--color-primary)',
    accent: 'var(--color-accent)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    danger: 'var(--color-danger)',
  }
  return colorMap[color]
}

/**
 * チャートのカラーパレットを生成
 */
export const getChartColors = (): string[] => {
  return [
    'var(--color-primary)',
    'var(--color-accent)',
    'var(--color-success)',
    'var(--color-warning)',
    'var(--color-danger)',
  ]
}

/**
 * 共通のツールチップスタイル
 */
export const tooltipStyle: CSSProperties = {
  backgroundColor: 'var(--color-bg-elevated)',
  border: '1px solid var(--color-border-default)',
  borderRadius: '6px',
  padding: '8px 12px',
  boxShadow: 'var(--shadow-md)',
}

/**
 * 共通のツールチップラベルスタイル
 */
export const tooltipLabelStyle: CSSProperties = {
  color: 'var(--color-text-primary)',
  fontWeight: 600,
  marginBottom: '4px',
}

/**
 * 共通のツールチップアイテムスタイル
 */
export const tooltipItemStyle: CSSProperties = {
  color: 'var(--color-text-secondary)',
}
