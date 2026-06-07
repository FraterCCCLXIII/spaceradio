import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-signal/10 bg-void-elevated">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">
              Space<span className="text-signal">Radio</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Original space music for Earth. Every transmission logged in the public registry.
            </p>
          </div>
          <div className="font-mono text-xs text-muted">
            <p className="mb-2 uppercase tracking-wider text-signal">Registry</p>
            <Link to="/transmissions" className="hover:text-beam">
              View all transmissions →
            </Link>
          </div>
          <div className="text-xs text-muted">
            <p>
              SpaceRadio Originals. Composition and sound recording © SpaceRadio 2026.
              AI-assisted production; see track provenance.
            </p>
            <p className="mt-2">
              Tier 1 events are symbolic registry entries unless labeled Tier 3+.
            </p>
          </div>
        </div>
        <p className="mt-8 font-mono text-[10px] text-muted/60">
          DEMO BUILD · Stream uses placeholder audio for demonstration
        </p>
      </div>
    </footer>
  )
}
