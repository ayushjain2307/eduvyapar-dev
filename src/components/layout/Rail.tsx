import { Link, useRouterState } from '@tanstack/react-router'
import {
  IconSchool,
  IconDashboard,
  IconGridDots,
  IconBuildingCommunity,
  IconChartBar,
  IconFileDescription,
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
          <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--te-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconSchool size={20} color="#fff" />
          </div>
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
    </div>
  )
}
