import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { useApplications } from '../../hooks/useQueries'

const TooltipContent = ({ active, payload, label }: any) => {
  if (!active || !payload) return null
  return (
    <div style={{ background: 'var(--bg-primary)', border: '0.5px solid var(--border-secondary)', borderRadius: 8, padding: '8px 12px', fontSize: 12, boxShadow: 'var(--card-shadow)' }}>
      <div style={{ fontWeight: 500, marginBottom: 4, color: 'var(--text-primary)' }}>{label}</div>
      {payload.map((p: any) => (
        <div key={p.name} style={{ color: p.fill, display: 'flex', gap: 8 }}>
          <span>{p.name}:</span><span style={{ fontWeight: 500 }}>{p.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function ApplicationBarChart() {
  const { data } = useApplications()

  return (
    <div style={{ height: 140 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data ?? []} barSize={10} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-tertiary)" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip content={<TooltipContent />} cursor={{ fill: 'rgba(13,148,136,0.05)' }} />
          <Bar dataKey="approved" name="Approved" fill="var(--te-500)" radius={[3, 3, 0, 0]} />
          <Bar dataKey="pending" name="Pending" fill="var(--am-400)" radius={[3, 3, 0, 0]} />
          <Bar dataKey="rejected" name="Rejected" fill="#FCA5A5" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
