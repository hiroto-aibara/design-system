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
  showLegend = true,
  showTooltip = true,
  innerRadius = 0,
  outerRadius = 80,
  showLabels = false,
  className,
  style,
}: PieChartProps<T>) {
  const colors = getChartColors()

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
            outerRadius={outerRadius}
            paddingAngle={2}
            isAnimationActive={animate}
            animationDuration={500}
            label={showLabels ? ({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%` : false}
            labelLine={showLabels}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                stroke="var(--color-bg-surface)"
                strokeWidth={2}
              />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}

PieChart.displayName = 'PieChart'
