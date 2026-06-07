import { Link } from 'react-router-dom'
import { missions } from '../../lib/demo-data'
import type { Mission } from '../../lib/types'

function MissionCard({ m }: { m: Mission }) {
  return (
    <Link
      to={`/app/missions/${m.slug}`}
      className="group relative min-h-[240px] overflow-hidden rounded-lg bg-void-panel"
    >
      <img
        src={m.imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
      <div className="relative flex h-full min-h-[240px] flex-col justify-end p-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">{m.tieIn}</p>
          {m.concept && (
            <span className="rounded-full border border-beam/30 bg-beam/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-beam">
              Concept
            </span>
          )}
        </div>
        <h2 className="mt-2 font-display text-lg font-normal uppercase tracking-wide text-signal">
          {m.name}
        </h2>
        <p className="mt-2 text-sm text-charcoal-200 line-clamp-2">{m.description}</p>
      </div>
    </Link>
  )
}

export function AppMissionsPage() {
  const programming = missions.filter((m) => !m.concept)
  const concepts = missions.filter((m) => m.concept)

  return (
    <div className="min-h-full px-5 py-8 sm:px-8 lg:px-10">
      <h1 className="font-display text-3xl font-normal uppercase tracking-wide text-signal sm:text-4xl">
        Missions
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Themed programming blocks and mission concept whitepapers.
      </p>

      <section className="mt-10">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">On-air</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programming.map((m) => (
            <MissionCard key={m.slug} m={m} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
          Mission concepts
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((m) => (
            <MissionCard key={m.slug} m={m} />
          ))}
        </div>
      </section>
    </div>
  )
}
