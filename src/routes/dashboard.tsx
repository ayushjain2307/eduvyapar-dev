import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import Topbar from '../components/layout/Topbar'
import ApplicationBarChart from '../components/dashboard/ApplicationBarChart'
import FeeTrendChart from '../components/dashboard/FeeTrendChart'
import DonutChart from '../components/dashboard/DonutChart'
import AttendanceHeatmap from '../components/dashboard/AttendanceHeatmap'
import MiniCalendar from '../components/dashboard/MiniCalendar'
import { useMetrics, useNotices, useEvents } from '../hooks/useQueries'
import {
  IconUsers, IconClock, IconCash, IconClipboardList,
  IconUserPlus, IconPlus, IconLayoutDashboard,
  IconX, IconToggleRight, IconToggleLeft,
} from '@tabler/icons-react'

interface Widget {
  id: string
  label: string
  visible: boolean
}

const INITIAL_WIDGETS: Widget[] = [
  { id: 'appbar', label: 'Application Report', visible: true },
  { id: 'quickact', label: 'Quick Actions', visible: true },
  { id: 'heatmap', label: 'Attendance Heatmap', visible: true },
  { id: 'notices', label: 'Notices', visible: true },
  { id: 'fees', label: 'Fee Trend', visible: true },
  { id: 'donut', label: 'Application Status', visible: true },
  { id: 'calendar', label: 'Calendar', visible: true },
  { id: 'events', label: 'Upcoming Events', visible: true },
]

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: 'var(--bg-primary)',
      borderRadius: 'var(--r12)',
      border: '0.5px solid var(--border-tertiary)',
      padding: 14,
      transition: '0.2s',
      ...style,
    }}>
      {children}
    </div>
  )
}

function CardHeader({ title, link }: { title: string; link?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
      <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)' }}>{title}</span>
      {link && <span style={{ fontSize: 12, color: 'var(--te-600)', cursor: 'pointer' }}>{link}</span>}
    </div>
  )
}

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  Urgent: { bg: '#FEF2F2', color: '#991B1B' },
  General: { bg: 'var(--bg-secondary)', color: 'var(--text-secondary)' },
  Exam: { bg: '#FFF7ED', color: '#C2410C' },
}

const quickActions = [
  { label: 'New Admission', icon: <IconUserPlus size={18} />, bg: 'var(--te-50)', color: 'var(--te-600)', href: '/admission' },
  { label: 'Collect Fee', icon: <IconCash size={18} />, bg: '#FEF9EE', color: 'var(--am-600)' },
  { label: 'Mark Attendance', icon: <IconClipboardList size={18} />, bg: '#F0F9FF', color: '#0369A1' },
  { label: 'Post Notice', icon: <IconUsers size={18} />, bg: '#FFF1F2', color: '#BE123C' },
  { label: 'Add Event', icon: <IconClock size={18} />, bg: '#F5F3FF', color: '#7C3AED' },
  { label: 'All Modules', icon: <IconLayoutDashboard size={18} />, bg: 'var(--bg-secondary)', color: 'var(--text-secondary)', href: '/modules' },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const { data: metrics } = useMetrics()
  const { data: notices } = useNotices()
  const { data: events } = useEvents()
  const [widgets, setWidgets] = useState<Widget[]>(INITIAL_WIDGETS)
  const [customiseOpen, setCustomiseOpen] = useState(false)

  const toggleWidget = (id: string) => {
    setWidgets(ws => ws.map(w => w.id === id ? { ...w, visible: !w.visible } : w))
  }

  const isVisible = (id: string) => widgets.find(w => w.id === id)?.visible ?? true

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <Topbar title="Dashboard" breadcrumb="Academic Year 2025–26" />

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 0' }}>

        {/* GREETING */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 16, alignItems: 'stretch' }}>
          <div className="greeting" style={{ flex: 1, borderRadius: 'var(--r12)', overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>Tuesday, 10 June 2026</div>
              <div style={{ fontSize: 20, fontWeight: 500, color: '#fff', marginBottom: 8 }}>Hi, Default User 👋</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[
                  { text: '48 tasks pending', dot: true },
                  { text: '3 new notices', dot: false },
                  { text: 'PTM scheduled today', dot: false },
                ].map(chip => (
                  <div key={chip.text} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 20, padding: '3px 10px' }}>
                    {chip.dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--am-400)' }} />}
                    {chip.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
            {[
              { label: 'New Admission', icon: <IconUserPlus size={15} />, href: '/admission' },
              { label: 'Quick Add', icon: <IconPlus size={15} /> },
              { label: 'Customise', icon: <IconLayoutDashboard size={15} />, action: () => setCustomiseOpen(true) },
            ].map(btn => (
              <button
                key={btn.label}
                onClick={btn.action ?? (btn.href ? () => navigate({ to: btn.href as any }) : undefined)}
                style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 'var(--r8)', border: '0.5px solid var(--border-secondary)', background: 'var(--bg-primary)', fontSize: 12, color: 'var(--text-primary)', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', transition: '0.15s' }}
              >
                {btn.icon} {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* METRICS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 12 }}>
          {[
            { icon: <IconUsers size={18} />, val: metrics?.totalStudents?.toLocaleString() ?? '2,341', lbl: 'Total Students', badge: '↑ 3.2%', badgeType: 'up', iconBg: 'var(--te-50)', iconColor: 'var(--te-600)' },
            { icon: <IconClock size={18} />, val: `${metrics?.avgAttendance ?? 94.2}%`, lbl: 'Avg Attendance', badge: 'Today', badgeType: 'neutral', iconBg: '#FEF9EE', iconColor: 'var(--am-600)' },
            { icon: <IconCash size={18} />, val: metrics?.feeCollected ?? '₹18.4L', lbl: 'Fee Collected (Jun)', badge: '↑ 8.1%', badgeType: 'up', iconBg: '#F0F9FF', iconColor: '#0369A1' },
            { icon: <IconClipboardList size={18} />, val: String(metrics?.pendingTasks ?? 48), lbl: 'Pending Tasks', badge: '12 overdue', badgeType: 'down', iconBg: '#FFF1F2', iconColor: '#BE123C' },
          ].map(m => (
            <div key={m.lbl} style={{ background: 'var(--bg-primary)', borderRadius: 'var(--r12)', border: '0.5px solid var(--border-tertiary)', padding: '12px 14px', transition: '0.2s', cursor: 'default' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: m.iconBg, color: m.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{m.icon}</div>
                <span style={{ fontSize: 11, padding: '2px 7px', borderRadius: 20, fontWeight: 500, background: m.badgeType === 'up' ? '#F0FDF4' : m.badgeType === 'down' ? '#FFF1F2' : 'var(--bg-secondary)', color: m.badgeType === 'up' ? '#16A34A' : m.badgeType === 'down' ? '#BE123C' : 'var(--text-secondary)' }}>{m.badge}</span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{m.val}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{m.lbl}</div>
            </div>
          ))}
        </div>

        {/* ROW 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 10, marginBottom: 12 }}>
          {isVisible('appbar') && (
            <Card>
              <CardHeader title="Application Report" link="View all →" />
              <div style={{ display: 'flex', gap: 16, marginBottom: 10 }}>
                {[['Total', '486', 'var(--text-primary)'], ['Approved', '312', 'var(--te-600)'], ['Pending', '97', 'var(--am-600)'], ['Rejected', '77', '#EF4444']].map(([l, v, c]) => (
                  <div key={l}>
                    <div style={{ fontSize: 10, color: 'var(--text-secondary)' }}>{l}</div>
                    <div style={{ fontSize: 16, fontWeight: 500, color: c }}>{v}</div>
                  </div>
                ))}
              </div>
              <ApplicationBarChart />
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                {[['var(--te-500)', 'Approved'], ['var(--am-400)', 'Pending'], ['#FCA5A5', 'Rejected']].map(([bg, lbl]) => (
                  <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text-secondary)' }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: bg }} />{lbl}
                  </div>
                ))}
              </div>
            </Card>
          )}
          {isVisible('quickact') && (
            <Card>
              <CardHeader title="Quick Actions" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                {quickActions.map(qa => (
                  <div
                    key={qa.label}
                    onClick={() => qa.href && navigate({ to: qa.href as any })}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '12px 8px', borderRadius: 'var(--r8)', cursor: 'pointer', transition: '0.15s', textAlign: 'center' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-secondary)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 'var(--r8)', background: qa.bg, color: qa.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{qa.icon}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.3 }}>{qa.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* ROW 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 12 }}>
          {isVisible('heatmap') && (
            <Card>
              <CardHeader title="Attendance — June 2026" link="Details →" />
              <AttendanceHeatmap />
            </Card>
          )}
          {isVisible('notices') && (
            <Card>
              <CardHeader title="Notices" link="View all →" />
              <div>
                {(notices ?? []).map(n => (
                  <div key={n.id} style={{ padding: '8px 0', borderBottom: '0.5px solid var(--border-tertiary)' }}>
                    <div style={{ fontSize: 12, color: 'var(--text-primary)', fontWeight: 500, marginBottom: 3 }}>{n.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--text-secondary)' }}>
                      <span style={{ padding: '1px 6px', borderRadius: 4, fontWeight: 500, ...(TAG_COLORS[n.tag] ?? { bg: 'var(--bg-secondary)', color: 'var(--text-secondary)' }), background: TAG_COLORS[n.tag]?.bg, color: TAG_COLORS[n.tag]?.color }}>{n.tag}</span>
                      · {n.date}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          {isVisible('fees') && (
            <Card>
              <CardHeader title="Fee Trend (6 months)" link="Reports →" />
              <FeeTrendChart />
              <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
                {[['Collected', '₹18.4L', 'var(--text-primary)'], ['Pending', '₹3.1L', '#EF4444'], ['Waiver', '₹0.4L', 'var(--am-600)']].map(([l, v, c]) => (
                  <div key={l}>
                    <div style={{ fontSize: 10, color: 'var(--text-secondary)' }}>{l}</div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: c }}>{v}</div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* ROW 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
          {isVisible('donut') && (
            <Card>
              <CardHeader title="Application Status" link="View →" />
              <DonutChart />
            </Card>
          )}
          {isVisible('calendar') && (
            <Card>
              <MiniCalendar />
            </Card>
          )}
          {isVisible('events') && (
            <Card>
              <CardHeader title="Upcoming Events" link="View all →" />
              <div>
                {(events ?? []).map(ev => (
                  <div key={ev.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '0.5px solid var(--border-tertiary)' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: ev.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <div style={{ fontSize: 16, fontWeight: 500, color: ev.dayColor, lineHeight: 1 }}>{ev.day}</div>
                      <div style={{ fontSize: 9, color: 'var(--text-secondary)', fontWeight: 500, textTransform: 'uppercase' }}>{ev.month}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-primary)' }}>{ev.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 1 }}>{ev.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* CUSTOMISE PANEL */}
      {customiseOpen && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: 280, height: '100vh', background: 'var(--bg-primary)', borderLeft: '0.5px solid var(--border-secondary)', zIndex: 300, display: 'flex', flexDirection: 'column', boxShadow: '-4px 0 24px rgba(0,0,0,0.1)' }}>
          <div style={{ padding: '16px 16px 12px', borderBottom: '0.5px solid var(--border-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Customise Dashboard</span>
            <button onClick={() => setCustomiseOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}>
              <IconX size={16} />
            </button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 16 }}>Toggle widgets to show or hide them on your dashboard.</p>
            {widgets.map(w => (
              <div key={w.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '0.5px solid var(--border-tertiary)' }}>
                <span style={{ fontSize: 13, color: 'var(--text-primary)' }}>{w.label}</span>
                <button onClick={() => toggleWidget(w.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: w.visible ? 'var(--te-600)' : 'var(--text-secondary)', display: 'flex' }}>
                  {w.visible ? <IconToggleRight size={24} /> : <IconToggleLeft size={24} />}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
