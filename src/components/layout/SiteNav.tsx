import { List, Pause, Play, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { usePlayerStore } from '../../store/playerStore'
import { LiveIndicator } from '../player/LiveIndicator'

const links = [
  { to: '/listen', label: 'Listen' },
  { to: '/missions', label: 'Missions' },
  { to: '/originals', label: 'Originals' },
  { to: '/transmissions', label: 'Transmissions' },
  { to: '/sponsors', label: 'Sponsors' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const { status, toggle } = usePlayerStore()
  const playing = status === 'playing' || status === 'buffering'

  return (
    <header className="sticky top-0 z-40 border-b border-signal/10 bg-void/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px]">
        <Link to="/" className="shrink-0 text-lg font-semibold tracking-tight">
          Space<span className="text-signal">Radio</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? 'text-signal' : 'text-muted hover:text-[#e8eaed]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LiveIndicator live={playing || status === 'connecting'} compact />
          <button
            type="button"
            onClick={() => void toggle()}
            className="hidden items-center gap-2 rounded-full border border-signal/30 px-4 py-1.5 text-sm text-signal transition-colors hover:bg-signal/10 sm:inline-flex"
          >
            {playing ? <Pause size={16} weight="fill" /> : <Play size={16} weight="fill" />}
            {playing ? 'Pause' : 'Play'}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-muted hover:bg-white/5 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-signal/10 bg-void-elevated px-4 py-4 lg:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm ${isActive ? 'text-signal' : 'text-muted'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
