import { Pause, Play, SpeakerHigh, SpeakerSlash } from '@phosphor-icons/react'
import { useState } from 'react'
import { usePlayerStore } from '../../store/playerStore'
import { Button } from '../ui/Button'

export function PlayerControls({ large }: { large?: boolean }) {
  const { status, toggle, volume, setVolume } = usePlayerStore()
  const [muted, setMuted] = useState(false)
  const playing = status === 'playing' || status === 'buffering'

  const iconSize = large ? 28 : 22

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
    <div className={`flex items-center gap-4 ${large ? 'justify-center' : ''}`}>
      <button
        type="button"
        onClick={() => void toggle()}
        aria-label={playing ? 'Pause SpaceRadio live stream' : 'Play SpaceRadio live stream'}
        className={`flex items-center justify-center rounded-full bg-signal text-void transition-transform active:scale-[0.98] ${
          large ? 'h-14 w-14' : 'h-10 w-10'
        }`}
      >
        {playing ? (
          <Pause size={iconSize} weight="fill" />
        ) : (
          <Play size={iconSize} weight="fill" className="ml-0.5" />
        )}
      </button>

      {large && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className="text-muted hover:text-[#e8eaed]"
          >
            {muted || volume === 0 ? (
              <SpeakerSlash size={20} />
            ) : (
              <SpeakerHigh size={20} />
            )}
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
            className="h-1 w-28 cursor-pointer appearance-none rounded-full bg-white/10 accent-signal"
            aria-label="Volume"
          />
        </div>
      )}
    </div>
  )
}

export function PlayerError() {
  const { status, errorMessage, play } = usePlayerStore()

  if (status !== 'error' || !errorMessage) return null

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm">
      <span>{errorMessage}</span>
      <Button variant="secondary" className="!px-4 !py-1.5 text-xs" onClick={() => void play()}>
        Retry
      </Button>
    </div>
  )
}
