import { tracks } from '../lib/demo-data'
import { formatDuration } from '../lib/format'

export function OriginalsPage() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="page-heading">SpaceRadio Originals</h1>
      <p className="mt-4 max-w-xl text-charcoal-200">
        Human-curated catalog with documented provenance. Demo build uses placeholder audio.
      </p>

      <div className="mt-12 space-y-4">
        {tracks.map((track) => (
          <article
            key={track.id}
            className="grid gap-4 rounded-2xl border border-signal/10 bg-void-panel p-5 md:grid-cols-[1fr_2fr_auto]"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-charcoal-600/40 bg-gradient-to-br from-charcoal-700 to-charcoal-800 font-mono text-xs text-orbit">
              {track.catalogId.replace('SR-OR-', '')}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{track.title}</h2>
              <p className="mt-1 text-sm text-muted">{track.curatorNote}</p>
              <div className="mt-2 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                <span>{track.genre}</span>
                <span>·</span>
                <span>{track.bpm} BPM</span>
                <span>·</span>
                <span>Energy {track.energy}/5</span>
              </div>
            </div>
            <div className="text-right font-mono text-xs text-muted">
              {formatDuration(track.durationSec)}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
