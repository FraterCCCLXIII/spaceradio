import { Link } from 'react-router-dom'
import { missions } from '../lib/demo-data'

export function MissionsPage() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="page-heading">Missions</h1>
      <p className="mt-4 max-w-xl text-charcoal-200">
        Themed programming blocks tied to space missions, science, and sponsor packages.
      </p>

      <div className="mt-12 grid gap-px bg-charcoal-700/40 sm:grid-cols-2">
        {missions.map((m) => (
          <Link
            key={m.slug}
            to={`/missions/${m.slug}`}
            className="group relative min-h-[280px] overflow-hidden bg-void"
          >
            <img
              src={m.imageUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
            <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
                {m.tieIn}
              </p>
              <h2 className="mt-2 font-display text-xl font-normal uppercase tracking-wide text-signal">
                {m.name}
              </h2>
              <p className="mt-2 text-sm text-charcoal-200 line-clamp-2">{m.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
