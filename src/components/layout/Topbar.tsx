import { IconBell, IconHelpCircle, IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from '../../hooks/useTheme'

interface TopbarProps {
  title: string
  breadcrumb?: string
}

export default function Topbar({ title, breadcrumb }: TopbarProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className="topbar flex-shrink-0 flex items-center gap-2.5 px-4"
      style={{ height: 'var(--topbar-h)', zIndex: 90 }}
    >
      <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' }}>{title}</span>
      {breadcrumb && (
        <>
          <div style={{ width: '0.5px', height: 16, background: 'var(--border-secondary)', margin: '0 4px' }} />
          <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{breadcrumb}</span>
        </>
      )}

      {/* Search */}
      <div
        className="flex items-center gap-2 ml-auto"
        style={{
          height: 34,
          borderRadius: 'var(--r20)',
          padding: '0 12px',
          background: 'var(--bg-secondary)',
          width: 220,
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          placeholder="Search anything…"
          autoComplete="off"
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: 12,
            color: 'var(--text-primary)',
            width: '100%',
            fontFamily: 'inherit',
          }}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1.5 ml-2">
        <button
          className="relative flex items-center justify-center rounded-lg border-0 cursor-pointer transition-all duration-150"
          style={{ width: 32, height: 32, background: 'transparent', color: 'var(--text-secondary)' }}
          title="Notifications"
        >
          <IconBell size={18} />
          <span
            className="absolute rounded-full"
            style={{ top: 5, right: 5, width: 7, height: 7, background: '#EF4444', border: '1.5px solid var(--bg-primary)' }}
          />
        </button>
        <button
          className="flex items-center justify-center rounded-lg border-0 cursor-pointer transition-all duration-150"
          style={{ width: 32, height: 32, background: 'transparent', color: 'var(--text-secondary)' }}
          title="Help"
        >
          <IconHelpCircle size={18} />
        </button>
        <button
          className="theme-btn"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
        </button>
        <div
          className="flex items-center justify-center rounded-full cursor-pointer"
          style={{
            width: 32,
            height: 32,
            background: 'var(--te-100)',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--te-700)',
            border: '0.5px solid var(--te-200)',
          }}
          title="Default User"
        >
          DU
        </div>
      </div>
    </div>
  )
}
