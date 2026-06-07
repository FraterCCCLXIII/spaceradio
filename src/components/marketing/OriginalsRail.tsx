import { Link } from 'react-router-dom'
import { tracks } from '../../lib/demo-data'
import { formatDuration } from '../../lib/format'

export function OriginalsRail() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        SpaceRadio Originals
      </h2>
      <p className="mt-2 max-w-lg text-sm text-muted">
        Curated catalog with full provenance. Demo tracks use placeholder audio.
      </p>

      <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        {tracks.slice(0, 6).map((track) => (
          <Link
            key={track.id}
            to="/originals"
            className="w-56 shrink-0 snap-start rounded-2xl border border-signal/10 bg-void-panel p-4 transition-colors hover:border-signal/30"
          >
            <div className="mb-3 flex h-32 items-end rounded-xl bg-gradient-to-br from-void-elevated to-orbit/30 p-3">
              <span className="font-mono text-[10px] text-beam">{track.catalogId}</span>
            </div>
            <p className="font-medium">{track.title}</p>
            <p className="mt-1 font-mono text-[10px] text-muted">
              {track.bpm} BPM · {formatDuration(track.durationSec)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
