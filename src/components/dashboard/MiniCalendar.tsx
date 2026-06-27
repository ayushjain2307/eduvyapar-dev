import { useState } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

const EVENT_DAYS = new Set([10, 15, 20, 28])

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number) {
  const d = new Date(year, month, 1).getDay()
  return d === 0 ? 6 : d - 1 // Mon=0
}

export default function MiniCalendar() {
  const [year, setYear] = useState(2026)
  const [month, setMonth] = useState(5) // June

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfWeek(year, month)
  const today = month === 5 && year === 2026 ? 10 : -1 // mock today

  const cells: (number | null)[] = Array(firstDay).fill(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const prev = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  const next = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  return (
    <div>
      <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)' }}>
          {MONTHS[month]} {year}
        </span>
        <div className="flex gap-1">
          <button
            onClick={prev}
            style={{ width: 24, height: 24, borderRadius: 6, border: '0.5px solid var(--border-secondary)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}
          >
            <IconChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            style={{ width: 24, height: 24, borderRadius: 6, border: '0.5px solid var(--border-secondary)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}
          >
            <IconChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Day labels */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>
        {DAYS.map((d, i) => (
          <div key={i} style={{ fontSize: 10, color: 'var(--text-secondary)', textAlign: 'center', fontWeight: 500, padding: '2px 0' }}>{d}</div>
        ))}
      </div>

      {/* Cells */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
        {cells.map((day, i) => (
          <div
            key={i}
            style={{
              height: 26,
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 11,
              cursor: day ? 'pointer' : 'default',
              background: day === today ? 'var(--te-600)' : 'transparent',
              color: day === today ? '#fff' : day ? 'var(--text-primary)' : 'transparent',
              fontWeight: day === today ? 500 : 400,
              position: 'relative',
            }}
          >
            {day}
            {day && EVENT_DAYS.has(day) && day !== today && (
              <span style={{ position: 'absolute', bottom: 2, width: 4, height: 4, borderRadius: '50%', background: 'var(--te-500)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
