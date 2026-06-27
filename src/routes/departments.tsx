import { useState, useMemo } from 'react'
import Topbar from '../components/layout/Topbar'
import { mockDepartments } from '../lib/mock-data'

const FILTERS = ['All', 'Learning', 'Career', 'Commerce', 'Community', 'Support', 'Administration']

export default function DepartmentsPage() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = useMemo(() => {
    return mockDepartments.filter(d => {
      const matchSearch = !search || d.name.toLowerCase().includes(search.toLowerCase())
      const matchFilter = activeFilter === 'All' || d.category === activeFilter
      return matchSearch && matchFilter
    })
  }, [search, activeFilter])

  const grouped = useMemo(() => {
    const g: Record<string, typeof mockDepartments> = {}
    filtered.forEach(d => {
      if (!g[d.category]) g[d.category] = []
      g[d.category].push(d)
    })
    return g
  }, [filtered])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Departments" breadcrumb={`${filtered.length} departments`} />

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
        {/* Filter bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, height: 30, borderRadius: 'var(--r20)', padding: '0 12px', background: 'var(--bg-secondary)', width: 200 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search departments…" style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: 12, color: 'var(--text-primary)', width: '100%', fontFamily: 'inherit' }} />
          </div>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                height: 30, padding: '0 12px',
                borderRadius: 'var(--r20)',
                fontSize: 12, fontWeight: 500,
                border: '0.5px solid var(--border-secondary)',
                background: activeFilter === f ? 'var(--te-600)' : 'var(--bg-primary)',
                color: activeFilter === f ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: '0.15s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Groups */}
        {Object.entries(grouped).map(([cat, depts]) => (
          <div key={cat} style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              {cat}
              <span style={{ flex: 1, height: '0.5px', background: 'var(--border-tertiary)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
              {depts.map(d => (
                <div
                  key={d.id}
                  style={{
                    background: 'var(--bg-primary)',
                    borderRadius: 'var(--r12)',
                    border: '0.5px solid var(--border-tertiary)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: '0.18s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--te-400)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(13,148,136,.12)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    const badge = e.currentTarget.querySelector('.dept-badge') as HTMLElement
                    if (badge) badge.style.background = 'var(--te-600)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-tertiary)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'none'
                    const badge = e.currentTarget.querySelector('.dept-badge') as HTMLElement
                    if (badge) badge.style.background = '#1E3A5F'
                  }}
                >
                  {/* Icon area */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '18px 0 14px', background: 'var(--bg-primary)' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 'var(--r8)', background: d.bg, color: d.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                      <i className={`ti ${d.icon}`} />
                    </div>
                  </div>
                  {/* Badge */}
                  <div
                    className="dept-badge"
                    style={{ background: '#1E3A5F', borderRadius: '0 0 var(--r12) var(--r12)', padding: '10px 12px', textAlign: 'center', transition: '0.18s' }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#fff', letterSpacing: '0.03em', textTransform: 'uppercase', lineHeight: 1.4 }}>{d.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ height: 24 }} />
      </div>
    </div>
  )
}
