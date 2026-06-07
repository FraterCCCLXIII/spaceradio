import { Broadcast, Compass, Disc, House, MusicNotes } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/app', label: 'Station', icon: House, end: true },
  { to: '/app/now-playing', label: 'Playing', icon: Disc },
  { to: '/app/library', label: 'Library', icon: MusicNotes },
  { to: '/app/browse', label: 'Browse', icon: Compass },
  { to: '/app/transmissions', label: 'Registry', icon: Broadcast },
]

export function PlayerMobileNav() {
  return (
    <nav className="flex items-center justify-around border-t border-charcoal-700/40 bg-void-elevated px-2 py-2 lg:hidden">
      {items.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] ${
              isActive ? 'text-signal' : 'text-muted'
            }`
          }
        >
          <Icon size={20} weight="duotone" />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
