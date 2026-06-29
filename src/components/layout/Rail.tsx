import { Link, useRouterState } from '@tanstack/react-router'
import {
  IconDashboard,
  IconGridDots,
  IconBuildingCommunity,
  IconChartBar,
  IconFileDescription,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconBrandFacebook,
} from '@tabler/icons-react'

interface RailProps {
  onModulesToggle: () => void
}

function RailItem({
  icon,
  tooltip,
  active,
  onClick,
  to,
}: {
  icon: React.ReactNode
  tooltip: string
  active?: boolean
  onClick?: () => void
  to?: string
}) {
  const baseStyle: React.CSSProperties = {
    width: 36, height: 36,
    borderRadius: 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    border: 'none',
    transition: 'all 0.15s',
    background: active ? 'var(--te-100)' : 'transparent',
    color: active ? 'var(--te-700)' : 'var(--text-secondary)',
    textDecoration: 'none',
    flexShrink: 0,
  }

  const inner = (
    <>
      {icon}
      <span className="rail-tooltip">{tooltip}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} style={baseStyle}
        onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = 'var(--te-50)'; (e.currentTarget as HTMLElement).style.color = 'var(--te-600)' } }}
        onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)' } }}
      >
        {inner}
      </Link>
    )
  }
  return (
    <button style={baseStyle} onClick={onClick}
      onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'var(--te-50)'; e.currentTarget.style.color = 'var(--te-600)' } }}
      onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)' } }}
    >
      {inner}
    </button>
  )
}

export default function Rail({ onModulesToggle }: RailProps) {
  const { location } = useRouterState()
  const path = location.pathname

  return (
    <div
      className="rail"
      style={{ width: 'var(--sidebar-width)', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 100 }}
    >
      {/* Logo — same height as topbar so it aligns perfectly */}
      <div style={{ height: 'var(--topbar-h)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Eduvyapar" style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: 6 }} />
        </Link>
      </div>

      {/* Nav items — top-aligned, flow downward */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, paddingTop: 6, width: '100%' }}>
        <RailItem icon={<IconDashboard size={18} />} tooltip="Dashboard" to="/dashboard" active={path === '/dashboard'} />

        <div style={{ width: 28, height: '0.5px', background: 'var(--border-tertiary)', margin: '4px 0' }} />

        <RailItem icon={<IconGridDots size={18} />} tooltip="All Modules" onClick={onModulesToggle} active={path === '/modules'} />
        <RailItem icon={<IconBuildingCommunity size={18} />} tooltip="Departments" to="/departments" active={path === '/departments'} />

        <div style={{ width: 28, height: '0.5px', background: 'var(--border-tertiary)', margin: '4px 0' }} />

        <RailItem icon={<IconChartBar size={18} />} tooltip="Reports" />
        <RailItem icon={<IconFileDescription size={18} />} tooltip="Brochure" to="/brochure" active={path === '/brochure'} />
      </div>

      {/* Social icons — pinned to bottom */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, paddingBottom: 12 }}>
        <div style={{ width: 28, height: '0.5px', background: 'var(--border-tertiary)', margin: '4px 0' }} />
        <a
          href="https://wa.me/" target="_blank" rel="noopener noreferrer"
          style={{ width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textDecoration: 'none', transition: '0.15s', position: 'relative' }}
          title="WhatsApp"
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#dcfce7'; (e.currentTarget as HTMLElement).style.color = '#16a34a' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)' }}
        >
          <IconBrandWhatsapp size={18} />
          <span className="rail-tooltip">WhatsApp</span>
        </a>
        <a
          href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          style={{ width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textDecoration: 'none', transition: '0.15s', position: 'relative' }}
          title="LinkedIn"
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#dbeafe'; (e.currentTarget as HTMLElement).style.color = '#1d4ed8' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)' }}
        >
          <IconBrandLinkedin size={18} />
          <span className="rail-tooltip">LinkedIn</span>
        </a>
        <a
          href="https://facebook.com" target="_blank" rel="noopener noreferrer"
          style={{ width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textDecoration: 'none', transition: '0.15s', position: 'relative' }}
          title="Facebook"
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#eff6ff'; (e.currentTarget as HTMLElement).style.color = '#1877f2' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)' }}
        >
          <IconBrandFacebook size={18} />
          <span className="rail-tooltip">Facebook</span>
        </a>
      </div>
    </div>
  )
}
