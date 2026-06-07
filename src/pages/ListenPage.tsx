import { Link } from 'react-router-dom'
import { shows } from '../lib/demo-data'
import { formatUtc } from '../lib/format'
import { usePlayerStore } from '../store/playerStore'
import { LiveIndicator } from '../components/player/LiveIndicator'
import { NowPlayingMeta } from '../components/player/NowPlayingMeta'
import { PlayerControls, PlayerError } from '../components/player/PlayerControls'
import { Waveform } from '../components/player/Waveform'
import { Panel } from '../components/ui/Panel'

export function ListenPage() {
  const nowPlaying = usePlayerStore((s) => s.nowPlaying)
  const status = usePlayerStore((s) => s.status)
  const live = status === 'playing' || status === 'buffering' || status === 'connecting'

  return (
    <div>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden border-b border-charcoal-700/40">
        <img
          src="https://images.unsplash.com/photo-1454789549943-d2bcffef2f47?w=1600&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/40" />
        <div className="relative z-10 flex w-full items-end justify-between gap-4 px-6 pb-10 pt-24 sm:px-10 lg:px-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orbit">
              {formatUtc(nowPlaying.startedAtUtc)}
            </p>
            <h1 className="page-heading mt-2">Live broadcast</h1>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {nowPlaying.mission.name} · {nowPlaying.listenersEstimate} listeners
            </p>
          </div>
          <LiveIndicator live={live} />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-16">
      <Panel className="p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-2xl border border-charcoal-600/50 bg-gradient-to-br from-void-elevated via-charcoal-700 to-charcoal-800">
            <span className="font-mono text-4xl text-charcoal-400">
              {nowPlaying.track.catalogId.split('-').pop()}
            </span>
          </div>

          <div className="mb-6 overflow-hidden rounded-xl bg-void-elevated p-4">
            <Waveform className="mx-auto" />
          </div>

          <NowPlayingMeta data={nowPlaying} size="lg" />

          <div className="mt-8 space-y-4">
            <PlayerControls large />
            <PlayerError />
          </div>

          <p className="mt-6 font-mono text-[10px] text-muted">
            Live broadcast: skip disabled. Queue shows scheduled programming.
          </p>
        </div>
      </Panel>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-normal uppercase tracking-wide text-signal">Up next</h2>
          <ul className="mt-4 space-y-2">
            {nowPlaying.upNext.map((t) => (
              <li
                key={t.id}
                className="flex items-center justify-between rounded-lg border border-signal/10 bg-void-panel px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium">{t.title}</p>
                  <p className="font-mono text-[10px] text-muted">{t.catalogId}</p>
                </div>
                <span className="font-mono text-xs text-muted">{t.bpm} BPM</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-normal uppercase tracking-wide text-signal">On air mission</h2>
          <Panel className="mt-4 p-5">
            <p className="font-medium">{nowPlaying.mission.name}</p>
            <p className="mt-2 text-sm text-muted">{nowPlaying.mission.description}</p>
            {nowPlaying.mission.sponsor && (
              <p className="mt-3 font-mono text-[10px] text-signal">
                {nowPlaying.mission.sponsor} presents
              </p>
            )}
            <Link
              to={`/missions/${nowPlaying.mission.slug}`}
              className="mt-4 inline-block font-mono text-[10px] uppercase tracking-wider text-beam hover:underline"
            >
              Mission brief →
            </Link>
          </Panel>

          <h2 className="mt-8 font-display text-lg font-normal uppercase tracking-wide text-signal">Today&apos;s schedule</h2>
          <ul className="mt-4 space-y-2">
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
