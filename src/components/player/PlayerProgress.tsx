import { formatDuration } from '../../lib/format'
import { usePlayerStore } from '../../store/playerStore'

interface PlayerProgressProps {
  compact?: boolean
}

export function PlayerProgress({ compact }: PlayerProgressProps) {
  const { currentTimeSec, durationSec, status } = usePlayerStore()
  const live = status === 'playing' || status === 'buffering' || status === 'connecting'
  const progress = durationSec > 0 ? (currentTimeSec / durationSec) * 100 : 0

  if (compact) {
    return (
      <div className="flex w-full max-w-md items-center gap-2">
        <span className="w-10 text-right font-mono text-[10px] text-muted">
          {formatDuration(Math.floor(currentTimeSec))}
        </span>
        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-charcoal-600">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-signal transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="w-10 font-mono text-[10px] text-muted">
          {formatDuration(Math.floor(durationSec || 0))}
        </span>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <div className="relative h-1.5 overflow-hidden rounded-full bg-charcoal-600">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-signal transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between font-mono text-[10px] text-muted">
        <span>{formatDuration(Math.floor(currentTimeSec))}</span>
        <span>{live ? 'Live rotation' : 'Paused'}</span>
        <span>{formatDuration(Math.floor(durationSec || 0))}</span>
      </div>
    </div>
  )
}
