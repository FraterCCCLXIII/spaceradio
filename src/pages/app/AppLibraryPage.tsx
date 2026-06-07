import { MagnifyingGlass } from '@phosphor-icons/react'
import { useMemo, useState } from 'react'
import { TrackRow } from '../../components/player/TrackRow'
import { tracks } from '../../lib/demo-data'

export function AppLibraryPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return tracks
    return tracks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.catalogId.toLowerCase().includes(q) ||
        t.genre.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="min-h-full px-5 py-8 sm:px-8 lg:px-10">
      <h1 className="font-display text-3xl font-normal uppercase tracking-wide text-signal sm:text-4xl">
        Library
      </h1>
      <p className="mt-2 text-sm text-muted">
        SpaceRadio Originals — human-curated catalog with documented provenance.
      </p>

      <div className="relative mt-8 max-w-md">
        <MagnifyingGlass
          size={18}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tracks, catalog IDs, genres…"
          className="w-full rounded-full border border-charcoal-600/50 bg-void-panel py-2.5 pl-10 pr-4 text-sm text-charcoal-100 placeholder:text-muted focus:border-signal/30 focus:outline-none"
        />
      </div>

      <div className="mt-8 overflow-hidden rounded-lg border border-charcoal-700/40">
        <div className="grid grid-cols-[auto_1fr_auto] gap-3 border-b border-charcoal-700/40 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          <span className="w-8 text-center">#</span>
          <span>Title</span>
          <span className="w-12 text-right">Time</span>
        </div>
        <div className="scroll-list max-h-[min(60vh,640px)] divide-y divide-charcoal-700/30">
          {filtered.map((track, i) => (
            <TrackRow key={track.id} track={track} index={i + 1} showIndex showDuration />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="px-4 py-8 text-center text-sm text-muted">No tracks match your search.</p>
        )}
      </div>
    </div>
  )
}
