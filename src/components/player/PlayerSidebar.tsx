import {
  ArrowLeft,
  BookOpen,
  Broadcast,
  Compass,
  Disc,
  House,
  MusicNotes,
  RocketLaunch,
  Scroll,
} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { missions } from '../../lib/demo-data'
import { LogoOrbit } from '../layout/LogoOrbit'

const navItems = [
  { to: '/app', label: 'Station', icon: House, end: true },
  { to: '/app/now-playing', label: 'Now playing', icon: Disc },
  { to: '/app/library', label: 'Library', icon: MusicNotes },
  { to: '/app/browse', label: 'Browse', icon: Compass },
  { to: '/app/missions', label: 'Missions', icon: RocketLaunch },
  { to: '/app/transmissions', label: 'Transmissions', icon: Broadcast },
]

const quickMissions = missions.filter((m) => !m.concept).slice(0, 4)

export function PlayerSidebar() {
  return (
    <aside className="hidden w-[240px] shrink-0 flex-col border-r border-charcoal-700/40 bg-void lg:flex">
      <div className="px-5 py-5">
        <NavLink to="/app" className="logo-text flex items-center gap-2.5">
          <LogoOrbit />
          SpaceRadio
        </NavLink>
      </div>

      <nav className="scroll-list min-h-0 flex-1 space-y-1 px-3">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                isActive
                  ? 'bg-charcoal-700/50 text-signal'
                  : 'text-muted hover:bg-charcoal-700/30 hover:text-charcoal-100'
              }`
            }
          >
            <Icon size={18} weight="duotone" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-charcoal-700/40 px-5 py-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          On-air missions
        </p>
        <ul className="mt-3 space-y-1">
          {quickMissions.map((m) => (
            <li key={m.slug}>
              <NavLink
                to={`/app/missions/${m.slug}`}
                className={({ isActive }) =>
                  `block truncate rounded px-2 py-1.5 text-sm transition-colors ${
                    isActive ? 'text-signal' : 'text-charcoal-200 hover:text-signal'
                  }`
                }
              >
                {m.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-charcoal-700/40 px-3 py-4 space-y-1">
        <NavLink
          to="/manifesto"
          className="flex items-center gap-3 rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:bg-charcoal-700/30 hover:text-signal"
        >
          <Scroll size={16} weight="duotone" />
          Manifesto
        </NavLink>
        <NavLink
          to="/program"
          className="flex items-center gap-3 rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:bg-charcoal-700/30 hover:text-signal"
        >
          <BookOpen size={16} weight="duotone" />
          Whitepapers
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-md px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-signal"
        >
          <ArrowLeft size={14} />
          Back to site
        </NavLink>
      </div>
    </aside>
  )
}
