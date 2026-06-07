import { Link } from 'react-router-dom'
import { formatListenerCount } from '../../lib/listener-presence'
import { usePlayerStore } from '../../store/playerStore'
import { Panel } from '../ui/Panel'
import { LiveIndicator } from './LiveIndicator'
import { NowPlayingMeta } from './NowPlayingMeta'
import { PlayerControls, PlayerError } from './PlayerControls'
import { TrackArtwork } from './TrackArtwork'
import { Waveform } from './Waveform'

export function PlayerCard() {
  const { nowPlaying, status, listenerCount } = usePlayerStore()
  const live = status === 'playing' || status === 'buffering' || status === 'connecting'

  return (
    <Panel className="overflow-hidden p-6">
      <div className="mb-4 flex items-center justify-between">
        <LiveIndicator live={live} />
        <span className="font-mono text-[10px] text-muted">
          {formatListenerCount(listenerCount)}
        </span>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <TrackArtwork track={nowPlaying.track} size="md" />
        <div className="min-w-0 flex-1">
          <NowPlayingMeta data={nowPlaying} size="sm" />
        </div>
      </div>

      <div className="mb-4 overflow-hidden">
        <Waveform />
      </div>
      <div className="mt-5 space-y-3">
        <PlayerControls />
        <PlayerError />
      </div>

      <Link
        to="/app"
        className="mt-4 block text-center font-mono text-[10px] uppercase tracking-wider text-muted transition-colors hover:text-beam"
      >
        Open full station →
      </Link>
    </Panel>
  )
}
