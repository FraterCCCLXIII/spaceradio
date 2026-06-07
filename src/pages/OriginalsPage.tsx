import { tracks } from '../lib/demo-data'
import { formatDuration } from '../lib/format'

export function OriginalsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        SpaceRadio Originals
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Human-curated catalog with documented provenance. Demo build uses placeholder audio.
      </p>

      <div className="mt-12 space-y-4">
        {tracks.map((track) => (
          <article
            key={track.id}
            className="grid gap-4 rounded-2xl border border-signal/10 bg-void-panel p-5 md:grid-cols-[1fr_2fr_auto]"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-orbit/30 to-beam/20 font-mono text-xs text-signal">
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
