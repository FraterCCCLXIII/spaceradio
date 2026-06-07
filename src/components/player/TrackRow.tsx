import { Pause, Play } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { formatDuration } from '../../lib/format'
import type { Track } from '../../lib/types'
import { usePlayerStore } from '../../store/playerStore'
import { TrackArtwork } from './TrackArtwork'

interface TrackRowProps {
  track: Track
  index?: number
  showIndex?: boolean
  showDuration?: boolean
  to?: string
  active?: boolean
}

export function TrackRow({
  track,
  index,
  showIndex = false,
  showDuration = true,
  to,
  active,
}: TrackRowProps) {
  const { nowPlaying, status, toggle } = usePlayerStore()
  const isCurrent = active ?? nowPlaying.track.id === track.id
  const playing = isCurrent && (status === 'playing' || status === 'buffering')

  const content = (
    <div
      className={`group flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-charcoal-700/40 ${
        isCurrent ? 'bg-charcoal-700/30' : ''
      }`}
    >
      <div className="flex w-8 shrink-0 items-center justify-center">
        {showIndex && !isCurrent && (
          <span className="font-mono text-xs text-muted group-hover:hidden">{index}</span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            void toggle()
          }}
          className={`${showIndex && !isCurrent ? 'hidden group-hover:flex' : 'flex'} h-8 w-8 items-center justify-center text-signal`}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? <Pause size={16} weight="fill" /> : <Play size={16} weight="fill" />}
        </button>
      </div>

      <TrackArtwork track={track} size="xs" />

      <div className="min-w-0 flex-1">
        <p className={`truncate text-sm ${isCurrent ? 'text-signal' : 'text-charcoal-100'}`}>
          {track.title}
        </p>
        <p className="truncate font-mono text-[10px] text-muted">
          {track.artist} · {track.catalogId}
        </p>
      </div>

      {showDuration && (
        <span className="shrink-0 font-mono text-xs text-muted">
          {formatDuration(track.durationSec)}
        </span>
      )}
    </div>
  )

  if (to) {
    return <Link to={to}>{content}</Link>
  }

  return content
}
