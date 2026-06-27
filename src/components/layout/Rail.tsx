import { Link, useRouterState } from '@tanstack/react-router'
import {
  IconSchool,
  IconDashboard,
  IconGridDots,
  IconBuildingCommunity,
  IconChartBar,
  IconFileDescription,
  IconSettings,
  IconLogout,
} from '@tabler/icons-react'
import { cn } from '../../lib/cn'

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
  const cls = cn(
    'rail-item w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer relative border-0 transition-all duration-150',
    active
      ? 'text-[var(--te-700)]'
      : 'text-[var(--text-secondary)] hover:text-[var(--te-600)]'
  )
  const style = active
    ? { background: 'var(--te-100)' }
    : undefined

  const inner = (
    <>
      {icon}
      <span className="rail-tooltip">{tooltip}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} style={style}>
        {inner}
      </Link>
    )
  }
  return (
    <button className={cls} style={style} onClick={onClick}>
      {inner}
    </button>
  )
}

export default function Rail({ onModulesToggle }: RailProps) {
  const { location } = useRouterState()
  const path = location.pathname

  return (
    <div
      className="rail flex-shrink-0 flex flex-col items-center py-2 gap-0.5 z-[100]"
      style={{ width: 'var(--sidebar-width)', borderRight: '0.5px solid var(--glass-border)' }}
    >
      {/* Logo */}
      <Link to="/dashboard" style={{ marginBottom: 10, textDecoration: 'none' }}>
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: 'var(--te-600)' }}
        >
          <IconSchool size={20} color="#fff" />
        </div>
      </Link>

      <RailItem icon={<IconDashboard size={18} />} tooltip="Dashboard" to="/dashboard" active={path === '/dashboard'} />

      <div className="w-7 my-1" style={{ height: '0.5px', background: 'var(--border-tertiary)' }} />

      <RailItem icon={<IconGridDots size={18} />} tooltip="All Modules" onClick={onModulesToggle} active={path === '/modules'} />
      <RailItem icon={<IconBuildingCommunity size={18} />} tooltip="Departments" to="/departments" active={path === '/departments'} />

      <div className="w-7 my-1" style={{ height: '0.5px', background: 'var(--border-tertiary)' }} />

      <RailItem icon={<IconChartBar size={18} />} tooltip="Reports" />
      <RailItem icon={<IconFileDescription size={18} />} tooltip="Brochure" to="/brochure" active={path === '/brochure'} />

      {/* Bottom */}
      <div className="mt-auto flex flex-col items-center gap-0.5">
        <RailItem icon={<IconSettings size={18} />} tooltip="Settings" />
        <RailItem icon={<IconLogout size={18} />} tooltip="Sign out" to="/signin" />
      </div>
    </div>
  )
}
