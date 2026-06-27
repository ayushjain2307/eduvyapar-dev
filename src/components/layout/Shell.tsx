import { useState } from 'react'
import { Outlet } from '@tanstack/react-router'
import Rail from './Rail'
import ModulesPanel from './ModulesPanel'

export default function Shell() {
  const [modsOpen, setModsOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
      <Rail onModulesToggle={() => setModsOpen(o => !o)} />
      <ModulesPanel isOpen={modsOpen} onClose={() => setModsOpen(false)} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
