import type { Track } from '../../lib/types'

const sizes = {
  xs: 'h-8 w-8 rounded-md',
  sm: 'h-12 w-12 rounded-lg',
  md: 'h-16 w-16 rounded-lg',
  lg: 'h-48 w-48 rounded-2xl',
} as const

interface TrackArtworkProps {
  track: Track
  size?: keyof typeof sizes
  className?: string
}

export function TrackArtwork({ track, size = 'md', className = '' }: TrackArtworkProps) {
  return (
    <img
      src={track.artworkUrl}
      alt=""
      className={`shrink-0 object-cover ${sizes[size]} ${className}`}
    />
  )
}
