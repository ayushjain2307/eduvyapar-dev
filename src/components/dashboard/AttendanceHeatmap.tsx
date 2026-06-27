// CSS grid heatmap for June 2026
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

// June 2026 starts on Monday
const attendanceData: Record<number, number> = {
  1: 96, 2: 94, 3: 92, 4: 97, 5: 95,
  8: 88, 9: 91, 10: 94, 11: 96, 12: 93,
  15: 0, // holiday
  16: 90, 17: 92, 18: 89, 19: 94, 20: 91,
  22: 0, 23: 88, 24: 93, 25: 95, 26: 94, 27: 91,
  29: 92, 30: 89,
}

function getColor(val: number) {
  if (val === 0) return '#F1F5F9'
  if (val < 85) return 'var(--te-200)'
  if (val < 92) return 'var(--te-400)'
  return 'var(--te-600)'
}

export default function AttendanceHeatmap() {
  // June 2026: starts Monday (offset 0), 30 days
  const offset = 0
  const totalDays = 30
  const cells: (number | null)[] = Array(offset).fill(null)
  for (let d = 1; d <= totalDays; d++) cells.push(d)

  return (
    <div>
      {/* Day labels */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3, marginBottom: 4 }}>
        {DAYS.map((d, i) => (
          <div key={i} style={{ fontSize: 10, color: 'var(--text-secondary)', textAlign: 'center', fontWeight: 500 }}>{d}</div>
        ))}
      </div>
      {/* Cells */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
        {cells.map((day, i) => (
          <div
            key={i}
            title={day ? `Jun ${day}: ${attendanceData[day] ?? 0}%` : ''}
            style={{
              height: 20,
              borderRadius: 3,
              background: day ? getColor(attendanceData[day] ?? 0) : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 9,
              color: day && (attendanceData[day] ?? 0) >= 92 ? '#fff' : 'var(--text-secondary)',
              fontWeight: 500,
              cursor: day ? 'default' : 'default',
            }}
          >
            {day}
          </div>
        ))}
      </div>
      {/* Legend */}
      <div className="flex items-center gap-1.5" style={{ marginTop: 10 }}>
        <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>Low</span>
        <div className="flex gap-1">
          {['#F1F5F9', 'var(--te-200)', 'var(--te-400)', 'var(--te-600)'].map((c, i) => (
            <div key={i} style={{ width: 12, height: 12, borderRadius: 2, background: c }} />
          ))}
        </div>
        <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>High</span>
      </div>
    </div>
  )
}
