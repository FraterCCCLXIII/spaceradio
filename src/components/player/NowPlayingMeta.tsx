import { Link } from 'react-router-dom'
import { formatDuration } from '../../lib/format'
import type { NowPlaying } from '../../lib/types'
import { TierBadge } from '../registry/TierBadge'

interface NowPlayingMetaProps {
  data: NowPlaying
  size?: 'sm' | 'md' | 'lg'
}

export function NowPlayingMeta({ data, size = 'md' }: NowPlayingMetaProps) {
  const { track, mission, transmission } = data

  const titleClass =
    size === 'lg'
      ? 'text-2xl font-semibold tracking-tight'
      : size === 'sm'
        ? 'text-sm font-medium'
        : 'text-lg font-semibold tracking-tight'

  return (
    <div className="space-y-2">
      <p className={titleClass} aria-live="polite">
        {track.title}
      </p>
      <p className="font-mono text-xs text-muted">
        {track.artist} · {track.catalogId} · {track.bpm} BPM ·{' '}
        {formatDuration(track.durationSec)}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Link
          to={`/missions/${mission.slug}`}
          className="rounded-full bg-charcoal-700/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-orbit transition-colors hover:bg-charcoal-600/60"
        >
          {mission.name}
        </Link>
        {transmission && (
          <Link to={`/transmissions/${transmission.id}`}>
            <TierBadge tier={transmission.tier} active={transmission.status === 'active'} />
          </Link>
        )}
      </div>
    </div>
  )
}
