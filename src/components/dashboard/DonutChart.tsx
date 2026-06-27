import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { useApplicationStatus } from '../../hooks/useQueries'

export default function DonutChart() {
  const { data } = useApplicationStatus()

  const chartData = [
    { name: 'Approved', value: data?.approved ?? 312, color: 'var(--te-500)' },
    { name: 'Pending', value: data?.pending ?? 97, color: 'var(--am-400)' },
    { name: 'Rejected', value: data?.rejected ?? 77, color: '#FCA5A5' },
  ]

  return (
    <div className="flex items-center gap-4">
      <div style={{ width: 100, height: 100, flexShrink: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={45}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              strokeWidth={0}
            >
              {chartData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: 'var(--bg-primary)',
                border: '0.5px solid var(--border-secondary)',
                borderRadius: 8,
                fontSize: 12,
                boxShadow: 'var(--card-shadow)',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ flex: 1 }}>
        {chartData.map(item => (
          <div key={item.name} className="flex items-center gap-2" style={{ marginBottom: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: item.color, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', flex: 1 }}>{item.name}</span>
            <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-primary)' }}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
