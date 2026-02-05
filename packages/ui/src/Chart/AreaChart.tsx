import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import {
  type BaseChartProps,
  getChartColor,
  tooltipStyle,
  tooltipLabelStyle,
  tooltipItemStyle,
} from './Chart'
import './Chart.css'

export interface AreaChartProps<T = Record<string, unknown>> extends BaseChartProps<T> {
  /** X軸のデータキー */
  xKey: keyof T & string
  /** Y軸のデータキー */
  yKey: keyof T & string
  /** 曲線を滑らかにする */
  smooth?: boolean
  /** グラデーションを有効化 */
  gradient?: boolean
}

export function AreaChart<T extends Record<string, unknown>>({
  data,
  xKey,
  yKey,
  width = '100%',
  height = 300,
  color = 'primary',
  animate = true,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  smooth = true,
  gradient = true,
  className,
  style,
}: AreaChartProps<T>) {
  const chartColor = getChartColor(color)
  const gradientId = `gradient-${color}`

  return (
    <div className={`ds-chart ${className || ''}`} style={style}>
      <ResponsiveContainer width={width} height={height}>
        <RechartsAreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--color-border-default)"
              vertical={false}
            />
          )}
          <XAxis
            dataKey={xKey}
            stroke="var(--color-text-muted)"
            tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
            tickLine={{ stroke: 'var(--color-border-default)' }}
            axisLine={{ stroke: 'var(--color-border-default)' }}
          />
          <YAxis
            stroke="var(--color-text-muted)"
            tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
            tickLine={{ stroke: 'var(--color-border-default)' }}
            axisLine={{ stroke: 'var(--color-border-default)' }}
          />
          {showTooltip && (
            <Tooltip
              contentStyle={tooltipStyle}
              labelStyle={tooltipLabelStyle}
              itemStyle={tooltipItemStyle}
            />
          )}
          {showLegend && <Legend />}
          <Area
            type={smooth ? 'monotone' : 'linear'}
            dataKey={yKey}
            stroke={chartColor}
            strokeWidth={2}
            fill={gradient ? `url(#${gradientId})` : chartColor}
            fillOpacity={gradient ? 1 : 0.2}
            isAnimationActive={animate}
            animationDuration={500}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

AreaChart.displayName = 'AreaChart'
