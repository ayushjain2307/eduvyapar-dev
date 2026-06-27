import { useState, useMemo } from 'react'
import { useNavigate } from '@tanstack/react-router'
import Topbar from '../components/layout/Topbar'
import { mockModules, type Module } from '../lib/mock-data'
import { IconPin } from '@tabler/icons-react'

const CATEGORIES = ['All modules', 'Pinned', 'Configuration', 'Admission', 'Finance', 'Academics', 'Staff', 'Analytics', 'Campus']

export default function ModulesPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All modules')
  const [modules, setModules] = useState<Module[]>(mockModules)

  const filtered = useMemo(() => {
    return modules.filter(m => {
      const matchSearch = !search || m.name.toLowerCase().includes(search.toLowerCase())
      const matchFilter =
        activeFilter === 'All modules' ||
        (activeFilter === 'Pinned' && m.pinned) ||
        m.category === activeFilter
      return matchSearch && matchFilter
    })
  }, [modules, search, activeFilter])

  const grouped = useMemo(() => {
    const g: Record<string, Module[]> = {}
    filtered.forEach(m => {
      if (!g[m.category]) g[m.category] = []
      g[m.category].push(m)
    })
    return g
  }, [filtered])

  const togglePin = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setModules(ms => ms.map(m => m.id === id ? { ...m, pinned: !m.pinned } : m))
  }

  const handleModuleClick = (m: Module) => {
    if (m.id === 'admission') navigate({ to: '/admission' })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="All Modules" breadcrumb={`${filtered.length} modules`} />

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 0' }}>
        {/* Filter bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, height: 34, borderRadius: 'var(--r20)', padding: '0 12px', background: 'var(--bg-secondary)', width: 200 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search modules…" style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: 12, color: 'var(--text-primary)', width: '100%', fontFamily: 'inherit' }} />
          </div>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '5px 14px',
                borderRadius: 'var(--r20)',
                fontSize: 12,
                fontWeight: 500,
                border: '0.5px solid var(--border-secondary)',
                background: activeFilter === cat ? 'var(--te-600)' : 'var(--bg-primary)',
                color: activeFilter === cat ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: '0.15s',
              }}
            >
              {cat}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--text-secondary)' }}>
            Showing {filtered.length} module{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Groups */}
        {Object.keys(grouped).length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)', fontSize: 13 }}>
            No modules match your search.
          </div>
        ) : (
          Object.entries(grouped).map(([cat, mods]) => (
            <div key={cat} style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-secondary)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                {cat}
                <span style={{ flex: 1, height: '0.5px', background: 'var(--border-tertiary)' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
                {mods.map(m => (
                  <div
                    key={m.id}
                    onClick={() => handleModuleClick(m)}
                    style={{
                      background: 'var(--bg-primary)',
                      borderRadius: 'var(--r12)',
                      padding: 14,
                      border: `0.5px solid ${m.pinned ? 'var(--te-300)' : 'var(--border-tertiary)'}`,
                      cursor: 'pointer',
                      transition: '0.2s',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--te-400)'
                      e.currentTarget.style.boxShadow = '0 2px 12px rgba(13,148,136,.1)'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = m.pinned ? 'var(--te-300)' : 'var(--border-tertiary)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.transform = 'none'
                    }}
                  >
                    {/* Pin indicator */}
                    {m.pinned && (
                      <div style={{ position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderRadius: 6, background: 'var(--te-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconPin size={12} color="#fff" />
                      </div>
                    )}
                    {!m.pinned && (
                      <button
                        onClick={e => togglePin(m.id, e)}
                        title="Pin to sidebar"
                        style={{ position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderRadius: 6, border: 'none', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: 0, transition: '0.15s', fontSize: 12, color: 'var(--text-secondary)' }}
                        className="pin-hover-btn"
                      >
                        <IconPin size={12} />
                      </button>
                    )}

                    <div style={{ width: 40, height: 40, borderRadius: 'var(--r8)', background: m.bg, color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10, fontSize: 20 }}>
                      <i className={`ti ${m.icon}`} />
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 3 }}>{m.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{m.subs.length} sections</div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
        <div style={{ height: 24 }} />
      </div>
    </div>
  )
}
