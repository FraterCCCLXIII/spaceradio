import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { PlayerLaunchBlocker } from '../launch/PlayerLaunchBlocker'
import { useLaunchCountdown } from '../../hooks/useLaunchCountdown'
import { formatListenerCount } from '../../lib/listener-presence'
import { canPlayStation } from '../../lib/station-rotation'
import { usePlayerStore } from '../../store/playerStore'
import { LiveIndicator } from '../player/LiveIndicator'
import { PlayerControls } from '../player/PlayerControls'
import { Waveform } from '../player/Waveform'
import { NowPlayingMeta } from '../player/NowPlayingMeta'
import { TrackArtwork } from '../player/TrackArtwork'
const HeroWarp = lazy(() =>
  import('./HeroWarp').then((m) => ({ default: m.HeroWarp })),
)

export function HeroSection() {
  const nowPlaying = usePlayerStore((s) => s.nowPlaying)
  const status = usePlayerStore((s) => s.status)
  const listenerCount = usePlayerStore((s) => s.listenerCount)
  const launch = useLaunchCountdown()
  const live = status === 'playing' || status === 'buffering' || status === 'connecting'
  const playerLocked = !launch.live && !canPlayStation()

  return (
    <section id="hero" className="relative flex min-h-[100dvh] items-end overflow-hidden">
      <Suspense fallback={null}>
        <HeroWarp />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/75 to-void/20" />
      <div className="absolute inset-0 bg-void/25" />

      <div className="relative z-10 grid w-full gap-10 px-6 pb-24 pt-32 sm:px-10 lg:grid-cols-[1fr_380px] lg:items-end lg:gap-16 lg:px-16 lg:pb-28">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-normal uppercase leading-[1.05] tracking-wide text-signal sm:text-5xl lg:text-6xl">
            Music for the stars
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal-200 sm:text-lg">
            SpaceRadio plays original compositions for Earth and logs every
            transmission toward the stars.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              to="/app"
              className="font-mono text-xs uppercase tracking-[0.18em] text-signal underline decoration-charcoal-500 underline-offset-4 transition-colors hover:text-beam"
            >
              Listen live
            </Link>
            <Link
              to="/manifesto"
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-signal"
            >
              Manifesto
            </Link>
            <Link
              to="/program"
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-signal"
            >
              Whitepapers
            </Link>
            <Link
              to="/transmissions"
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-signal"
            >
              Registry
            </Link>
          </div>
        </div>

        <div className="relative border border-charcoal-600/40 bg-void/60 p-5 backdrop-blur-md sm:p-6">
          {playerLocked && <PlayerLaunchBlocker variant="card" />}
          <div
            className={playerLocked ? 'pointer-events-none select-none opacity-40' : undefined}
            aria-hidden={playerLocked}
          >
          <div className="mb-4 flex items-center justify-between">
            <LiveIndicator live={live} />
            <span className="font-mono text-[10px] text-muted">
              {formatListenerCount(listenerCount)}
            </span>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <TrackArtwork track={nowPlaying.track} size="sm" />
            <div className="min-w-0 flex-1">
              <NowPlayingMeta data={nowPlaying} size="sm" />
            </div>
          </div>
          <div className="mb-4">
            <Waveform />
          </div>
          <div className="mt-4">
            <PlayerControls />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
