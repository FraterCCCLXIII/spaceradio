import { Link } from 'react-router-dom'
import { missions } from '../lib/demo-data'
import type { Mission } from '../lib/types'

function MissionCard({ m }: { m: Mission }) {
  return (
    <Link
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
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
            {m.tieIn}
          </p>
          {m.concept && (
            <span className="rounded-full border border-beam/30 bg-beam/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-beam">
              Concept · Whitepaper
            </span>
          )}
        </div>
        <h2 className="mt-2 font-display text-xl font-normal uppercase tracking-wide text-signal">
          {m.name}
        </h2>
        <p className="mt-2 text-sm text-charcoal-200 line-clamp-2">{m.description}</p>
        {m.registryId && (
          <p className="mt-3 font-mono text-[10px] text-muted">{m.registryId}</p>
        )}
      </div>
    </Link>
  )
}

export function MissionsPage() {
  const programming = missions.filter((m) => !m.concept)
  const concepts = missions.filter((m) => m.concept)

  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="page-heading">Missions</h1>
      <p className="mt-4 max-w-xl text-charcoal-200">
        Themed programming blocks tied to space missions, science, and sponsor packages.
      </p>

      <section className="mt-12">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
          On-air programming
        </h2>
        <div className="mt-4 grid gap-px bg-charcoal-700/40 sm:grid-cols-2">
          {programming.map((m) => (
            <MissionCard key={m.slug} m={m} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
          Mission concepts
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-charcoal-200">
          Pre-feasibility whitepapers — ideation documents with tier honesty, phased roadmaps,
          and registry IDs. Not yet on-air programming.
        </p>
        <div className="mt-4 grid gap-px bg-charcoal-700/40 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((m) => (
            <MissionCard key={m.slug} m={m} />
          ))}
        </div>
      </section>
    </div>
  )
}
