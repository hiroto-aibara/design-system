import type { Meta, StoryObj } from '@storybook/react-vite'
import { LineChart, BarChart, PieChart, AreaChart } from '@ds/ui'

const meta = {
  title: 'Data Display/Chart',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

// Sample data
const lineData = [
  { month: 'Jan', value: 400 },
  { month: 'Feb', value: 300 },
  { month: 'Mar', value: 600 },
  { month: 'Apr', value: 800 },
  { month: 'May', value: 500 },
  { month: 'Jun', value: 900 },
]

const barData = [
  { category: 'A', count: 120 },
  { category: 'B', count: 80 },
  { category: 'C', count: 150 },
  { category: 'D', count: 90 },
  { category: 'E', count: 200 },
]

const pieData = [
  { label: 'Desktop', value: 400 },
  { label: 'Mobile', value: 300 },
  { label: 'Tablet', value: 200 },
  { label: 'Other', value: 100 },
]

const areaData = [
  { date: 'Mon', amount: 2400 },
  { date: 'Tue', amount: 1398 },
  { date: 'Wed', amount: 9800 },
  { date: 'Thu', amount: 3908 },
  { date: 'Fri', amount: 4800 },
  { date: 'Sat', amount: 3800 },
  { date: 'Sun', amount: 4300 },
]

// LineChart Stories
export const Line: StoryObj = {
  render: () => (
    <LineChart
      data={lineData}
      xKey="month"
      yKey="value"
      height={300}
    />
  ),
}

export const LineWithAccent: StoryObj = {
  render: () => (
    <LineChart
      data={lineData}
      xKey="month"
      yKey="value"
      color="accent"
      height={300}
    />
  ),
}

export const LineSmooth: StoryObj = {
  render: () => (
    <LineChart
      data={lineData}
      xKey="month"
      yKey="value"
      smooth
      showDots
      color="success"
      height={300}
    />
  ),
}

// BarChart Stories
export const Bar: StoryObj = {
  render: () => (
    <BarChart
      data={barData}
      xKey="category"
      yKey="count"
      height={300}
    />
  ),
}

export const BarWithAccent: StoryObj = {
  render: () => (
    <BarChart
      data={barData}
      xKey="category"
      yKey="count"
      color="accent"
      height={300}
    />
  ),
}

export const BarColors: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
      <BarChart data={barData} xKey="category" yKey="count" color="primary" height={200} />
      <BarChart data={barData} xKey="category" yKey="count" color="accent" height={200} />
      <BarChart data={barData} xKey="category" yKey="count" color="success" height={200} />
      <BarChart data={barData} xKey="category" yKey="count" color="danger" height={200} />
    </div>
  ),
}

// PieChart Stories
export const Pie: StoryObj = {
  render: () => (
    <PieChart
      data={pieData}
      nameKey="label"
      valueKey="value"
      height={300}
    />
  ),
}

export const Donut: StoryObj = {
  render: () => (
    <PieChart
      data={pieData}
      nameKey="label"
      valueKey="value"
      innerRadius={60}
      outerRadius={100}
      height={300}
    />
  ),
}

export const PieWithLabels: StoryObj = {
  render: () => (
    <PieChart
      data={pieData}
      nameKey="label"
      valueKey="value"
      showLabels
      height={350}
    />
  ),
}

// AreaChart Stories
export const Area: StoryObj = {
  render: () => (
    <AreaChart
      data={areaData}
      xKey="date"
      yKey="amount"
      height={300}
    />
  ),
}

export const AreaWithAccent: StoryObj = {
  render: () => (
    <AreaChart
      data={areaData}
      xKey="date"
      yKey="amount"
      color="accent"
      height={300}
    />
  ),
}

export const AreaNoGradient: StoryObj = {
  render: () => (
    <AreaChart
      data={areaData}
      xKey="date"
      yKey="amount"
      gradient={false}
      color="success"
      height={300}
    />
  ),
}

// All Charts
export const AllCharts: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}>Line Chart</h3>
        <LineChart data={lineData} xKey="month" yKey="value" height={250} />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}>Bar Chart</h3>
        <BarChart data={barData} xKey="category" yKey="count" color="accent" height={250} />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}>Pie Chart</h3>
        <PieChart data={pieData} nameKey="label" valueKey="value" height={250} />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}>Area Chart</h3>
        <AreaChart data={areaData} xKey="date" yKey="amount" color="success" height={250} />
      </div>
    </div>
  ),
}
