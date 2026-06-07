import { Link } from 'react-router-dom'
import { ContentRail } from '../../components/player/ContentRail'
import { LiveIndicator } from '../../components/player/LiveIndicator'
import { TrackArtwork } from '../../components/player/TrackArtwork'
import { missions, shows, tracks } from '../../lib/demo-data'
import { formatUtc } from '../../lib/format'
import { usePlayerStore } from '../../store/playerStore'

const programmingMissions = missions.filter((m) => !m.concept)
const conceptMissions = missions.filter((m) => m.concept)

export function AppStationPage() {
  const { nowPlaying, status } = usePlayerStore()
  const live = status === 'playing' || status === 'buffering' || status === 'connecting'

  return (
    <div className="relative min-h-full">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-charcoal-700/30 to-transparent"
        aria-hidden
      />

      <div className="relative px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-3">
          <LiveIndicator live={live} />
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            {formatUtc(nowPlaying.startedAtUtc)} · {nowPlaying.listenersEstimate} listeners
          </p>
        </div>

        <Link
          to="/app/now-playing"
          className="group mt-8 flex flex-col gap-6 sm:flex-row sm:items-end"
        >
          <TrackArtwork
            track={nowPlaying.track}
            size="lg"
            className="h-48 w-48 shrink-0 shadow-2xl shadow-void transition-transform group-hover:scale-[1.02] sm:h-56 sm:w-56"
          />
          <div className="min-w-0 pb-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
              Now broadcasting
            </p>
            <h1 className="mt-2 font-display text-4xl font-normal uppercase tracking-wide text-signal sm:text-5xl lg:text-6xl">
              {nowPlaying.track.title}
            </h1>
            <p className="mt-3 text-base text-charcoal-200">
              {nowPlaying.mission.name} · {nowPlaying.show.title}
            </p>
            <p className="mt-2 font-mono text-[10px] text-muted">
              {nowPlaying.track.catalogId} · {nowPlaying.track.bpm} BPM
            </p>
          </div>
        </Link>

        <div className="mt-12 space-y-10">
          <ContentRail title="Up next" subtitle="Scheduled rotation" href="/app/now-playing">
            {nowPlaying.upNext.map((track) => (
              <Link
                key={track.id}
                to="/app/now-playing"
                className="w-40 shrink-0 rounded-lg bg-void-panel p-4 transition-colors hover:bg-charcoal-700/40"
              >
                <TrackArtwork track={track} size="md" className="mb-3" />
                <p className="truncate text-sm font-medium">{track.title}</p>
                <p className="mt-1 truncate font-mono text-[10px] text-muted">{track.catalogId}</p>
              </Link>
            ))}
          </ContentRail>

          <ContentRail title="On-air missions" href="/app/missions">
            {programmingMissions.map((m) => (
              <Link
                key={m.slug}
                to={`/app/missions/${m.slug}`}
                className="group relative h-44 w-44 shrink-0 overflow-hidden rounded-lg bg-void-panel"
              >
                <img
                  src={m.imageUrl}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-orbit">
                    {m.tieIn}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-signal">{m.name}</p>
                </div>
              </Link>
            ))}
          </ContentRail>

          <ContentRail title="SpaceRadio Originals" href="/app/library">
            {tracks.slice(0, 8).map((track) => (
              <Link
                key={track.id}
                to="/app/library"
                className="w-40 shrink-0 rounded-lg bg-void-panel p-4 transition-colors hover:bg-charcoal-700/40"
              >
                <TrackArtwork track={track} size="md" className="mb-3" />
                <p className="truncate text-sm font-medium">{track.title}</p>
                <p className="mt-1 font-mono text-[10px] text-muted">{track.genre}</p>
              </Link>
            ))}
          </ContentRail>

          <ContentRail title="Mission concepts" subtitle="Whitepaper programs" href="/app/missions">
            {conceptMissions.map((m) => (
              <Link
                key={m.slug}
                to={`/app/missions/${m.slug}`}
                className="group relative h-44 w-44 shrink-0 overflow-hidden rounded-lg border border-beam/20 bg-void-panel"
              >
                <img
                  src={m.imageUrl}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-4">
                  <span className="mb-2 w-fit rounded-full border border-beam/30 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-beam">
                    Concept
                  </span>
                  <p className="text-sm font-semibold text-signal">{m.name}</p>
                </div>
              </Link>
            ))}
          </ContentRail>

          <section>
            <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
              Today&apos;s schedule
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {shows.map((s) => (
                <li
                  key={s.id}
                  className="flex items-center justify-between rounded-lg border border-signal/10 bg-void-panel px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium">{s.title}</p>
                    <p className="font-mono text-[10px] text-muted">
                      {s.scheduleUtc} UTC · {s.host}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted">{s.durationMin}m</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
