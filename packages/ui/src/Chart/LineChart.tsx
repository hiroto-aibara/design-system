import {
  LineChart as RechartsLineChart,
  Line,
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
  getAnimationConfig,
  tooltipStyle,
  tooltipLabelStyle,
  tooltipItemStyle,
} from './Chart'
import './Chart.css'

export interface LineChartProps<T = Record<string, unknown>> extends BaseChartProps<T> {
  /** X軸のデータキー */
  xKey: keyof T & string
  /** Y軸のデータキー */
  yKey: keyof T & string
  /** 曲線を滑らかにする */
  smooth?: boolean
  /** ドットを表示 */
  showDots?: boolean
}

export function LineChart<T extends Record<string, unknown>>({
  data,
  xKey,
  yKey,
  width = '100%',
  height = 300,
  color = 'primary',
  animate = true,
  animationConfig,
  hoverEffect = true,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  smooth = true,
  showDots = true,
  className,
  style,
}: LineChartProps<T>) {
  const chartColor = getChartColor(color)
  const anim = getAnimationConfig(animate, animationConfig)

  return (
    <div className={`ds-chart ${className || ''}`} style={style}>
      <ResponsiveContainer width={width} height={height}>
        <RechartsLineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
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
          <Line
            type={smooth ? 'monotone' : 'linear'}
            dataKey={yKey}
            stroke={chartColor}
            strokeWidth={2}
            dot={showDots ? { fill: chartColor, strokeWidth: 2, r: 4 } : false}
            activeDot={hoverEffect ? {
              r: 8,
              stroke: chartColor,
              strokeWidth: 2,
              fill: 'var(--color-bg-surface)',
              className: 'ds-chart__active-dot',
            } : { r: 6, stroke: chartColor, strokeWidth: 2 }}
            isAnimationActive={anim.enabled}
            animationDuration={anim.duration}
            animationEasing={anim.easing}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

LineChart.displayName = 'LineChart'
