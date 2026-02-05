import { useState, useCallback } from 'react'
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import {
  type BaseChartProps,
  getChartColors,
  getAnimationConfig,
  tooltipStyle,
  tooltipLabelStyle,
  tooltipItemStyle,
} from './Chart'
import './Chart.css'

export interface PieChartProps<T = Record<string, unknown>> extends BaseChartProps<T> {
  /** ラベル名のデータキー */
  nameKey: keyof T & string
  /** 値のデータキー */
  valueKey: keyof T & string
  /** 内側の半径（ドーナツチャート用） */
  innerRadius?: number
  /** 外側の半径 */
  outerRadius?: number
  /** ラベルを表示 */
  showLabels?: boolean
}

export function PieChart<T extends Record<string, unknown>>({
  data,
  nameKey,
  valueKey,
  width = '100%',
  height = 300,
  animate = true,
  animationConfig,
  hoverEffect = true,
  showLegend = true,
  showTooltip = true,
  innerRadius = 0,
  outerRadius = 80,
  showLabels = false,
  className,
  style,
}: PieChartProps<T>) {
  const colors = getChartColors()
  const anim = getAnimationConfig(animate, animationConfig)
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)

  const onPieEnter = useCallback((_: unknown, index: number) => {
    if (hoverEffect) {
      setActiveIndex(index)
    }
  }, [hoverEffect])

  const onPieLeave = useCallback(() => {
    setActiveIndex(undefined)
  }, [])

  return (
    <div className={`ds-chart ${className || ''}`} style={style}>
      <ResponsiveContainer width={width} height={height}>
        <RechartsPieChart>
          {showTooltip && (
            <Tooltip
              contentStyle={tooltipStyle}
              labelStyle={tooltipLabelStyle}
              itemStyle={tooltipItemStyle}
            />
          )}
          {showLegend && (
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span style={{ color: 'var(--color-text-secondary)' }}>{value}</span>
              )}
            />
          )}
          <Pie
            data={data}
            dataKey={valueKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={hoverEffect && activeIndex !== undefined ? outerRadius : outerRadius}
            paddingAngle={2}
            isAnimationActive={anim.enabled}
            animationDuration={anim.duration}
            animationEasing={anim.easing}
            animationBegin={0}
            label={showLabels ? ({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%` : false}
            labelLine={showLabels}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
          >
            {data.map((_, index) => {
              const isActive = activeIndex === index
              const isInactive = hoverEffect && activeIndex !== undefined && activeIndex !== index
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                  stroke="var(--color-bg-surface)"
                  strokeWidth={2}
                  opacity={isInactive ? 0.4 : 1}
                  style={{
                    transition: 'all 0.2s ease-out',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    transformOrigin: 'center',
                    filter: isActive ? 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))' : 'none',
                  }}
                />
              )
            })}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}

PieChart.displayName = 'PieChart'
