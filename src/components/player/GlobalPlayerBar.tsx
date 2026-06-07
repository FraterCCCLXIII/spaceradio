import { CaretUp, Pause, Play } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { usePlayerStore } from '../../store/playerStore'
import { LiveIndicator } from './LiveIndicator'

export function GlobalPlayerBar() {
  const { nowPlaying, status, toggle } = usePlayerStore()
  const playing = status === 'playing' || status === 'buffering'

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-signal/10 bg-void-elevated/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => void toggle()}
          aria-label={playing ? 'Pause' : 'Play'}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal text-void active:scale-[0.98]"
        >
          {playing ? (
            <Pause size={18} weight="fill" />
          ) : (
            <Play size={18} weight="fill" className="ml-0.5" />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{nowPlaying.track.title}</p>
          <p className="truncate font-mono text-[10px] text-muted">
            {nowPlaying.mission.name}
          </p>
        </div>

        <LiveIndicator live={playing || status === 'connecting'} compact />

        <Link
          to="/listen"
          className="hidden rounded-full p-2 text-muted transition-colors hover:bg-white/5 hover:text-beam sm:block"
          aria-label="Expand player"
        >
          <CaretUp size={18} />
        </Link>
      </div>
    </div>
  )
}
