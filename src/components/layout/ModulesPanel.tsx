import { Link } from '@tanstack/react-router'
import { IconX, IconGridDots, IconArrowRight } from '@tabler/icons-react'
import { mockModules } from '../../lib/mock-data'

interface ModulesPanelProps {
  isOpen: boolean
  onClose: () => void
}

const pinnedModules = mockModules.filter(m => m.pinned)
const recentModules = mockModules.slice(0, 4)

export default function ModulesPanel({ isOpen, onClose }: ModulesPanelProps) {
  return (
    <div
      className="mods-panel flex-shrink-0 flex flex-col overflow-hidden transition-all duration-200"
      style={{
        width: isOpen ? 220 : 0,
        borderRight: '0.5px solid var(--glass-border)',
        transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <div style={{ width: 220, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header */}
        <div
          className="flex items-center justify-between flex-shrink-0"
          style={{ padding: '14px 14px 10px', borderBottom: '0.5px solid var(--border-tertiary)' }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Quick Access
          </span>
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded-lg border-0 cursor-pointer transition-all duration-150"
            style={{ width: 24, height: 24, background: 'transparent', color: 'var(--text-secondary)' }}
          >
            <IconX size={13} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {/* Pinned */}
          <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '10px 14px 4px', whiteSpace: 'nowrap' }}>
            Pinned
          </div>
          {pinnedModules.map(m => (
            <div
              key={m.id}
              className="flex items-center gap-2.5 cursor-pointer transition-all duration-150"
              style={{ padding: '8px 14px' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-secondary)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div
                className="flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ width: 28, height: 28, background: m.bg, color: m.color, fontSize: 14 }}
              >
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
              className="flex items-center gap-2.5 cursor-pointer transition-all duration-150"
              style={{ padding: '8px 14px' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-secondary)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div
                className="flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ width: 28, height: 28, background: m.bg, color: m.color, fontSize: 14 }}
              >
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
          <Link
            to="/modules"
            className="flex items-center gap-2"
            style={{
              height: 36,
              padding: '0 12px',
              borderRadius: 'var(--r8)',
              background: 'var(--te-50)',
              border: '0.5px solid var(--te-200)',
              color: 'var(--te-700)',
              fontSize: 12,
              fontWeight: 500,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
            onClick={onClose}
          >
            <IconGridDots size={15} />
            All Modules
            <IconArrowRight size={13} style={{ marginLeft: 'auto' }} />
          </Link>
        </div>
      </div>
    </div>
  )
}
