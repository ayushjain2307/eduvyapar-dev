import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { useFeeTrend } from '../../hooks/useQueries'

const TooltipContent = ({ active, payload, label }: any) => {
  if (!active || !payload) return null
  return (
    <div style={{ background: 'var(--bg-primary)', border: '0.5px solid var(--border-secondary)', borderRadius: 8, padding: '8px 12px', fontSize: 12, boxShadow: 'var(--card-shadow)' }}>
      <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{label}</div>
      <div style={{ color: 'var(--te-600)' }}>₹{payload[0]?.value}L</div>
    </div>
  )
}

export default function FeeTrendChart() {
  const { data } = useFeeTrend()

  return (
    <div style={{ height: 80 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data ?? []} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="feeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2DD4BF" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip content={<TooltipContent />} />
          <Area type="monotone" dataKey="collected" stroke="var(--te-500)" strokeWidth={1.5} fill="url(#feeGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
