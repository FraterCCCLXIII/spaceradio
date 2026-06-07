import { List, Pause, Play, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { usePlayerStore } from '../../store/playerStore'
import { LogoOrbit } from './LogoOrbit'

const links = [
  { to: '/app', label: 'Listen' },
  { to: '/missions', label: 'Missions' },
  { to: '/originals', label: 'Originals' },
  { to: '/transmissions', label: 'Transmissions' },
  { to: '/sponsors', label: 'Sponsors' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { status, toggle } = usePlayerStore()
  const playing = status === 'playing' || status === 'buffering'
  const overlay = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        overlay
          ? 'bg-gradient-to-b from-void/80 to-transparent'
          : 'border-b border-charcoal-700/40 bg-void/95 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-14 items-center justify-between gap-4 px-6 sm:px-10 lg:h-16 lg:px-16">
        <Link to="/" className="logo-text flex shrink-0 items-center gap-2.5">
          <LogoOrbit />
          SpaceRadio
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  isActive ? 'text-signal' : 'text-muted hover:text-signal'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => void toggle()}
            className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-signal transition-colors hover:text-beam sm:block"
          >
            {playing ? 'Pause' : 'Play'}
          </button>
          <button
            type="button"
            onClick={() => void toggle()}
            className="flex h-8 w-8 items-center justify-center text-signal sm:hidden"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause size={18} weight="fill" /> : <Play size={18} weight="fill" />}
          </button>
          <button
            type="button"
            className="text-muted hover:text-signal lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-charcoal-700/40 bg-void/98 px-6 py-4 backdrop-blur-md lg:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] ${
                  isActive ? 'text-signal' : 'text-muted'
                }`
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
