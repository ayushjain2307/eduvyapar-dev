import { useRef, useState, useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { IconBell, IconHelpCircle, IconMoon, IconSun, IconUser, IconSettings, IconLogout, IconChevronDown } from '@tabler/icons-react'
import { useTheme } from '../../hooks/useTheme'

interface TopbarProps {
  title: string
  breadcrumb?: string
}

export default function Topbar({ title, breadcrumb }: TopbarProps) {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const [profileOpen, setProfileOpen] = useState(false)
  const profileRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const iconBtn: React.CSSProperties = {
    width: 32, height: 32, borderRadius: 8, border: 'none',
    background: 'transparent', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--text-secondary)', transition: '0.15s', position: 'relative',
  }

  const menuItem: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '9px 14px', fontSize: 13, color: 'var(--text-primary)',
    cursor: 'pointer', transition: '0.12s', border: 'none',
    background: 'transparent', width: '100%', fontFamily: 'inherit',
    textAlign: 'left', borderRadius: 6,
  }

  return (
    <div
      className="topbar"
      style={{ height: 'var(--topbar-h)', zIndex: 90, display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px', flexShrink: 0 }}
    >
      <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', flexShrink: 0 }}>{title}</span>
      {breadcrumb && (
        <>
          <div style={{ width: '0.5px', height: 16, background: 'var(--border-secondary)', margin: '0 4px', flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: 'var(--text-secondary)', flexShrink: 0 }}>{breadcrumb}</span>
        </>
      )}

      {/* Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto', height: 34, borderRadius: 'var(--r20)', padding: '0 12px', background: 'var(--bg-secondary)', width: 220, flexShrink: 0 }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input placeholder="Search anything…" autoComplete="off" style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: 12, color: 'var(--text-primary)', width: '100%', fontFamily: 'inherit' }} />
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 8, flexShrink: 0 }}>
        <button style={iconBtn} title="Notifications"
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)' }}
        >
          <IconBell size={18} />
          <span style={{ position: 'absolute', top: 5, right: 5, width: 7, height: 7, borderRadius: '50%', background: '#EF4444', border: '1.5px solid var(--bg-primary)' }} />
        </button>
        <button style={iconBtn} title="Help"
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)' }}
        >
          <IconHelpCircle size={18} />
        </button>
        <button style={iconBtn} onClick={toggleTheme} title="Toggle theme"
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)' }}
        >
          {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
        </button>

        {/* Profile avatar + dropdown */}
        <div ref={profileRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setProfileOpen(o => !o)}
            style={{ display: 'flex', alignItems: 'center', gap: 6, height: 34, padding: '0 8px 0 4px', borderRadius: 'var(--r20)', border: '0.5px solid var(--border-secondary)', background: profileOpen ? 'var(--bg-secondary)' : 'transparent', cursor: 'pointer', transition: '0.15s', fontFamily: 'inherit' }}
            title="Account"
          >
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--te-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: 'var(--te-700)', border: '0.5px solid var(--te-200)', flexShrink: 0 }}>
              DU
            </div>
            <IconChevronDown size={13} style={{ color: 'var(--text-secondary)', transform: profileOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
          </button>

          {/* Dropdown */}
          {profileOpen && (
            <div style={{ position: 'absolute', top: 'calc(100% + 6px)', right: 0, width: 200, background: 'var(--bg-primary)', border: '0.5px solid var(--border-secondary)', borderRadius: 'var(--r12)', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 300, padding: 6, overflow: 'hidden' }}>
              {/* User info */}
              <div style={{ padding: '10px 14px 10px', borderBottom: '0.5px solid var(--border-tertiary)', marginBottom: 4 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)' }}>Default User</div>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 1 }}>admin@aivrm.edu</div>
              </div>

              <button style={menuItem}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-secondary)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                <IconUser size={15} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
                Profile
              </button>
              <button style={menuItem}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-secondary)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                <IconSettings size={15} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
                Settings
              </button>

              {/* Divider */}
              <div style={{ height: '0.5px', background: 'var(--border-tertiary)', margin: '4px 8px' }} />

              <button
                style={{ ...menuItem, color: '#DC2626' }}
                onClick={() => { setProfileOpen(false); navigate({ to: '/signin' }) }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FEF2F2' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                <IconLogout size={15} style={{ color: '#DC2626', flexShrink: 0 }} />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
