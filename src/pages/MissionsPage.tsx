import { Link } from 'react-router-dom'
import { missions } from '../lib/demo-data'

export function MissionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Missions</h1>
      <p className="mt-3 max-w-xl text-muted">
        Themed programming blocks tied to space missions, science, and sponsor packages.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {missions.map((m) => (
          <Link
            key={m.slug}
            to={`/missions/${m.slug}`}
            className="group overflow-hidden rounded-2xl border border-signal/10 bg-void-panel transition-colors hover:border-signal/30"
          >
            <img
              src={m.imageUrl}
              alt=""
              className="h-44 w-full object-cover opacity-70 transition-opacity group-hover:opacity-90"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold">{m.name}</h2>
              <p className="mt-2 text-sm text-muted line-clamp-2">{m.description}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-orbit">
                {m.tieIn}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
