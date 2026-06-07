import { X } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { usePlayerStore } from '../../store/playerStore'
import { LiveIndicator } from './LiveIndicator'
import { TrackRow } from './TrackRow'

interface QueuePanelProps {
  open: boolean
  onClose: () => void
}

export function QueuePanel({ open, onClose }: QueuePanelProps) {
  const { nowPlaying, status } = usePlayerStore()
  const live = status === 'playing' || status === 'buffering' || status === 'connecting'

  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-void/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-label="Close queue"
        />
      )}
      <aside
        className={`fixed right-0 top-0 z-40 flex h-full w-full max-w-sm flex-col border-l border-charcoal-700/40 bg-void-elevated transition-transform duration-300 lg:static lg:z-0 lg:max-w-[320px] lg:translate-x-0 ${
          open ? 'translate-x-0' : 'translate-x-full lg:hidden'
        }`}
      >
        <div className="flex items-center justify-between border-b border-charcoal-700/40 px-5 py-4">
          <div>
            <h2 className="font-display text-sm font-normal uppercase tracking-wide text-signal">
              Queue
            </h2>
            <p className="mt-1 font-mono text-[10px] text-muted">Scheduled programming</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-muted hover:bg-charcoal-700/50 hover:text-signal lg:hidden"
            aria-label="Close queue"
          >
            <X size={18} />
          </button>
        </div>

        <div className="border-b border-charcoal-700/40 px-5 py-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-orbit">
              Now playing
            </p>
            <LiveIndicator live={live} compact />
          </div>
          <TrackRow track={nowPlaying.track} active showDuration />
          <Link
            to="/app/now-playing"
            onClick={onClose}
            className="mt-3 inline-block font-mono text-[10px] uppercase tracking-wider text-beam hover:underline"
          >
            Open full player →
          </Link>
        </div>

        <div className="scroll-list flex-1 px-2 py-3">
          <p className="px-3 pb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Up next
          </p>
          {nowPlaying.upNext.map((track, i) => (
            <TrackRow key={track.id} track={track} index={i + 1} showIndex showDuration />
          ))}
        </div>

        <div className="border-t border-charcoal-700/40 px-5 py-4">
          <p className="font-mono text-[10px] text-muted">
            Live broadcast — skip disabled. Queue reflects scheduled rotation.
          </p>
        </div>
      </aside>
    </>
  )
}
