import { Link } from 'react-router-dom'
import { tracks } from '../../lib/demo-data'
import { formatDuration } from '../../lib/format'

export function OriginalsRail() {
  return (
    <section className="border-t border-charcoal-700/40 bg-void px-6 py-20 sm:px-10 lg:px-16">
      <h2 className="page-heading">SpaceRadio Originals</h2>
      <p className="mt-4 max-w-lg text-charcoal-200">
        Human-curated catalog with documented provenance.
      </p>

      <div className="mt-10 grid gap-px bg-charcoal-700/40 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.slice(0, 6).map((track) => (
          <Link
            key={track.id}
            to="/originals"
            className="group bg-void p-6 transition-colors hover:bg-void-elevated"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
              {track.catalogId}
            </p>
            <p className="mt-2 text-lg font-semibold text-signal">{track.title}</p>
            <p className="mt-1 font-mono text-[10px] text-muted">
              {track.bpm} BPM · {formatDuration(track.durationSec)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
