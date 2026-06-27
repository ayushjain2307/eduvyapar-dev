import { useNavigate } from '@tanstack/react-router'
import { IconX, IconGridDots, IconArrowRight } from '@tabler/icons-react'
import { mockModules } from '../../lib/mock-data'

interface ModulesPanelProps {
  isOpen: boolean
  onClose: () => void
}

const pinnedModules = mockModules.filter(m => m.pinned)
const recentModules = mockModules.filter(m => !m.pinned).slice(0, 4)

const MODULE_ROUTES: Record<string, string> = {
  admission: '/admission',
  'pre-admission': '/admission',
}

export default function ModulesPanel({ isOpen, onClose }: ModulesPanelProps) {
  const navigate = useNavigate()

  const handleItemClick = (id: string) => {
    const route = MODULE_ROUTES[id]
    if (route) navigate({ to: route as any })
    onClose()
  }

  return (
    <div
      className="mods-panel"
      style={{
        width: isOpen ? 220 : 0,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'width 0.22s cubic-bezier(0.4,0,0.2,1)',
        borderRight: '0.5px solid var(--glass-border)',
      }}
    >
      <div style={{ width: 220, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header */}
        <div style={{ padding: '14px 14px 10px', borderBottom: '0.5px solid var(--border-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Quick Access
          </span>
          <button
            onClick={onClose}
            style={{ width: 24, height: 24, background: 'transparent', border: 'none', borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}
          >
            <IconX size={13} />
          </button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {/* Pinned */}
          <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '10px 14px 4px', whiteSpace: 'nowrap' }}>
            Pinned
          </div>
          {pinnedModules.map(m => (
            <div
              key={m.id}
              onClick={() => handleItemClick(m.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', cursor: 'pointer', transition: '0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-secondary)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ width: 28, height: 28, borderRadius: 6, background: m.bg, color: m.color, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className={`ti ${m.icon}`} />
              </div>
              <span style={{ fontSize: 12, color: 'var(--text-primary)', fontWeight: 500, flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {m.name}
              </span>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--te-500)', flexShrink: 0 }} />
            </div>
          ))}

          {/* Frequently Used */}
          <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '10px 14px 4px', whiteSpace: 'nowrap' }}>
            Frequently Used
          </div>
          {recentModules.map(m => (
            <div
              key={m.id}
              onClick={() => handleItemClick(m.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', cursor: 'pointer', transition: '0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-secondary)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ width: 28, height: 28, borderRadius: 6, background: m.bg, color: m.color, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className={`ti ${m.icon}`} />
              </div>
              <span style={{ fontSize: 12, color: 'var(--text-primary)', fontWeight: 500, flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {m.name}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: 10, borderTop: '0.5px solid var(--border-tertiary)', flexShrink: 0 }}>
          <button
            onClick={() => { navigate({ to: '/modules' }); onClose() }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', height: 36, padding: '0 12px', borderRadius: 'var(--r8)', background: 'var(--te-50)', border: '0.5px solid var(--te-200)', color: 'var(--te-700)', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', transition: '0.15s' }}
          >
            <IconGridDots size={15} />
            All Modules
            <IconArrowRight size={13} style={{ marginLeft: 'auto' }} />
          </button>
        </div>
      </div>
    </div>
  )
}
