import { Link } from 'react-router-dom'
import { orchardWhitepapers } from '../content/orchard-program/whitepapers'
import { resourceImages } from '../lib/resource-images'

export function ProgramPage() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <div className="relative mb-12 overflow-hidden rounded-2xl border border-charcoal-600/40">
        <img
          src={resourceImages.portalDesertMoons}
          alt="Portal to another world under desert moons"
          className="h-48 w-full object-cover opacity-60 sm:h-56"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
            Orchard Program
          </p>
          <h1 className="page-heading mt-2">Whitepaper suite</h1>
          <p className="mt-3 max-w-xl text-sm text-charcoal-200">
            Deep-time interstellar communication — from Beacon One to the self-replicating
            Orchard Network. SpaceRadio carries the cultural layer.
          </p>
        </div>
      </div>

      <Link
        to="/manifesto"
        className="mb-10 flex items-center justify-between rounded-2xl border border-signal/15 bg-void-panel p-5 transition-colors hover:border-signal/30 sm:p-6"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-beam">
            Start here
          </p>
          <p className="mt-1 font-display text-lg uppercase tracking-wide text-signal">
            Manifesto
          </p>
          <p className="mt-2 text-sm text-muted">
            What we are doing, why, and how music is the best first contact.
          </p>
        </div>
        <span className="font-mono text-xs text-orbit">?</span>
      </Link>

      <div className="grid gap-6 sm:grid-cols-2">
        {orchardWhitepapers.map((paper) => (
          <Link
            key={paper.slug}
            to={`/program/${paper.slug}`}
            className="group overflow-hidden rounded-2xl border border-charcoal-600/40 bg-void-panel transition-colors hover:border-signal/25"
          >
            <img
              src={paper.heroImage}
              alt=""
              className="h-40 w-full object-cover opacity-55 transition-opacity group-hover:opacity-70"
            />
            <div className="p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-orbit">
                Whitepaper {paper.number} · v{paper.version}
              </p>
              <h2 className="mt-2 font-display text-lg uppercase tracking-wide text-signal">
                {paper.title}
              </h2>
              <p className="mt-2 text-sm text-muted line-clamp-2">{paper.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-10 font-mono text-[10px] text-muted">
        Source documents in Resources/ · PDF editions: SpaceGate Zero, Evergreen Probe,
        Orchard Program
      </p>
    </div>
  )
}
