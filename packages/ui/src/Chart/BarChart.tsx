import { useState } from 'react'
import {
  BarChart as RechartsBarChart,
  Bar,
  Cell,
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

export interface BarChartProps<T = Record<string, unknown>> extends BaseChartProps<T> {
  /** X軸のデータキー */
  xKey: keyof T & string
  /** Y軸のデータキー */
  yKey: keyof T & string
  /** バーの角丸 */
  radius?: number
  /** バーの最大幅 */
  barSize?: number
  /** Y軸の表示範囲 [min, max] */
  yDomain?: [number, number]
}

export function BarChart<T extends Record<string, unknown>>({
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
  radius = 4,
  barSize = 40,
  yDomain,
  className,
  style,
}: BarChartProps<T>) {
  const chartColor = getChartColor(color)
  const anim = getAnimationConfig(animate, animationConfig)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className={`ds-chart ${className || ''}`} style={style}>
      <ResponsiveContainer width={width} height={height}>
        <RechartsBarChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          onMouseLeave={() => setActiveIndex(null)}
        >
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
            domain={yDomain}
            allowDataOverflow={yDomain != null}
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
              cursor={{ fill: 'var(--color-bg-muted)', opacity: 0.3 }}
            />
          )}
          {showLegend && <Legend />}
          <Bar
            dataKey={yKey}
            fill={chartColor}
            radius={[radius, radius, 0, 0]}
            maxBarSize={barSize}
            isAnimationActive={anim.enabled}
            animationDuration={anim.duration}
            animationEasing={anim.easing}
            onMouseEnter={(_, index) => hoverEffect && setActiveIndex(index)}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartColor}
                opacity={hoverEffect && activeIndex !== null && activeIndex !== index ? 0.5 : 1}
                style={{
                  transition: 'opacity 0.2s ease-out',
                  animationDelay: anim.staggered ? `${index * anim.staggerDelay}ms` : '0ms',
                }}
              />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

BarChart.displayName = 'BarChart'
