import {
  BarChart as RechartsBarChart,
  Bar,
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

export interface BarChartProps<T = Record<string, unknown>> extends BaseChartProps<T> {
  /** X軸のデータキー */
  xKey: keyof T & string
  /** Y軸のデータキー */
  yKey: keyof T & string
  /** バーの角丸 */
  radius?: number
  /** バーの最大幅 */
  barSize?: number
}

export function BarChart<T extends Record<string, unknown>>({
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
  radius = 4,
  barSize = 40,
  className,
  style,
}: BarChartProps<T>) {
  const chartColor = getChartColor(color)

  return (
    <div className={`ds-chart ${className || ''}`} style={style}>
      <ResponsiveContainer width={width} height={height}>
        <RechartsBarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
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
              cursor={{ fill: 'var(--color-bg-muted)', opacity: 0.5 }}
            />
          )}
          {showLegend && <Legend />}
          <Bar
            dataKey={yKey}
            fill={chartColor}
            radius={[radius, radius, 0, 0]}
            maxBarSize={barSize}
            isAnimationActive={animate}
            animationDuration={500}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

BarChart.displayName = 'BarChart'
