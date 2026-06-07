import { Link } from 'react-router-dom'
import { LiveIndicator } from '../../components/player/LiveIndicator'
import { NowPlayingMeta } from '../../components/player/NowPlayingMeta'
import { PlayerControls, PlayerError } from '../../components/player/PlayerControls'
import { PlayerProgress } from '../../components/player/PlayerProgress'
import { TrackArtwork } from '../../components/player/TrackArtwork'
import { TrackRow } from '../../components/player/TrackRow'
import { Waveform } from '../../components/player/Waveform'
import { Panel } from '../../components/ui/Panel'
import { shows } from '../../lib/demo-data'
import { formatUtc } from '../../lib/format'
import { usePlayerStore } from '../../store/playerStore'

export function AppNowPlayingPage() {
  const { nowPlaying, status } = usePlayerStore()
  const live = status === 'playing' || status === 'buffering' || status === 'connecting'

  return (
    <div className="min-h-full px-5 py-8 sm:px-8 lg:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
            Full player
          </p>
          <h1 className="mt-2 font-display text-2xl font-normal uppercase tracking-wide text-signal sm:text-3xl">
            Live broadcast
          </h1>
        </div>
        <LiveIndicator live={live} />
      </div>

      <p className="mt-2 font-mono text-[10px] text-muted">
        {formatUtc(nowPlaying.startedAtUtc)} · {nowPlaying.listenersEstimate} listeners ·{' '}
        {nowPlaying.show.title}
      </p>

      <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_360px]">
        <Panel className="p-6 sm:p-10">
          <div className="mx-auto max-w-lg">
            <TrackArtwork
              track={nowPlaying.track}
              size="lg"
              className="mx-auto mb-8 h-56 w-56 border border-charcoal-600/50 sm:h-72 sm:w-72"
            />

            <div className="mb-6 overflow-hidden rounded-xl bg-void-elevated p-4">
              <Waveform className="mx-auto" />
            </div>

            <NowPlayingMeta data={nowPlaying} size="lg" inApp />

            <div className="mt-6">
              <PlayerProgress />
            </div>

            <div className="mt-8 space-y-4">
              <PlayerControls large />
              <PlayerError />
            </div>

            <p className="mt-6 text-center font-mono text-[10px] text-muted">
              Live broadcast: skip disabled. Queue shows scheduled programming.
            </p>
          </div>
        </Panel>

        <div className="space-y-8">
          <Panel className="p-5">
            <h2 className="font-display text-sm font-normal uppercase tracking-wide text-signal">
              On air mission
            </h2>
            <p className="mt-3 font-medium">{nowPlaying.mission.name}</p>
            <p className="mt-2 text-sm text-muted">{nowPlaying.mission.description}</p>
            {nowPlaying.mission.sponsor && (
              <p className="mt-3 font-mono text-[10px] text-signal">
                {nowPlaying.mission.sponsor} presents
              </p>
            )}
            <Link
              to={`/app/missions/${nowPlaying.mission.slug}`}
              className="mt-4 inline-block font-mono text-[10px] uppercase tracking-wider text-beam hover:underline"
            >
              Mission brief →
            </Link>
          </Panel>

          <div>
            <h2 className="font-display text-sm font-normal uppercase tracking-wide text-signal">
              Up next
            </h2>
            <div className="scroll-list mt-3 max-h-72 space-y-1">
              {nowPlaying.upNext.map((track, i) => (
                <TrackRow key={track.id} track={track} index={i + 1} showIndex showDuration />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-sm font-normal uppercase tracking-wide text-signal">
              Schedule
            </h2>
            <ul className="mt-3 space-y-2">
              {shows.map((s) => (
                <li
                  key={s.id}
                  className="flex justify-between rounded-lg border border-signal/10 px-4 py-3 font-mono text-xs"
                >
                  <span>
                    {s.scheduleUtc} UTC · {s.title}
                  </span>
                  <span className="text-muted">{s.durationMin}m</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
