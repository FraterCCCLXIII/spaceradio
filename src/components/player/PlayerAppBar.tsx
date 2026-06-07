import {
  List,
  Pause,
  Play,
  Queue,
  SpeakerHigh,
  SpeakerSlash,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePlayerStore } from '../../store/playerStore'
import { LiveIndicator } from './LiveIndicator'
import { PlayerProgress } from './PlayerProgress'
import { TrackArtwork } from './TrackArtwork'

interface PlayerAppBarProps {
  onToggleQueue: () => void
  queueOpen: boolean
}

export function PlayerAppBar({ onToggleQueue, queueOpen }: PlayerAppBarProps) {
  const { nowPlaying, status, toggle, volume, setVolume } = usePlayerStore()
  const [muted, setMuted] = useState(false)
  const playing = status === 'playing' || status === 'buffering'

  const handleMute = () => {
    if (muted) {
      setVolume(volume || 0.75)
      setMuted(false)
    } else {
      setVolume(0)
      setMuted(true)
    }
  }

  return (
    <footer className="shrink-0 border-t border-charcoal-700/40 bg-void-elevated">
      <div className="hidden border-b border-charcoal-700/30 px-4 py-2 md:block">
        <div className="mx-auto flex max-w-4xl justify-center">
          <PlayerProgress compact />
        </div>
      </div>

      <div className="grid h-[72px] grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-3">
          <Link to="/app/now-playing" className="shrink-0">
            <TrackArtwork track={nowPlaying.track} size="sm" />
          </Link>
          <div className="min-w-0">
            <Link
              to="/app/now-playing"
              className="block truncate text-sm font-medium text-charcoal-100 hover:underline"
            >
              {nowPlaying.track.title}
            </Link>
            <Link
              to={`/app/missions/${nowPlaying.mission.slug}`}
              className="block truncate font-mono text-[10px] text-muted hover:text-signal"
            >
              {nowPlaying.mission.name}
            </Link>
          </div>
          <LiveIndicator live={playing || status === 'connecting'} compact />
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => void toggle()}
            aria-label={playing ? 'Pause' : 'Play'}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-signal text-void transition-transform active:scale-[0.98] sm:h-11 sm:w-11"
          >
            {playing ? (
              <Pause size={20} weight="fill" />
            ) : (
              <Play size={20} weight="fill" className="ml-0.5" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleMute}
            className="hidden text-muted hover:text-signal sm:block"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted || volume === 0 ? <SpeakerSlash size={18} /> : <SpeakerHigh size={18} />}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={muted ? 0 : volume}
            onChange={(e) => {
              setMuted(false)
              setVolume(parseFloat(e.target.value))
            }}
            className="hidden h-1 w-20 cursor-pointer appearance-none rounded-full bg-charcoal-600 accent-signal sm:block lg:w-24"
            aria-label="Volume"
          />
          <button
            type="button"
            onClick={onToggleQueue}
            className={`rounded-full p-2 transition-colors ${
              queueOpen ? 'bg-charcoal-700/50 text-signal' : 'text-muted hover:text-signal'
            }`}
            aria-label="Toggle queue"
          >
            <Queue size={18} />
          </button>
          <Link
            to="/app/now-playing"
            className="hidden rounded-full p-2 text-muted transition-colors hover:text-signal md:block"
            aria-label="Full player"
          >
            <List size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
