import { useLaunchCountdown } from '../../hooks/useLaunchCountdown'
import { LaunchCountdownPanel } from './LaunchCountdownPanel'

interface PlayerLaunchBlockerProps {
  /** Cover the hero player card on the homepage */
  variant?: 'card' | 'app'
}

export function PlayerLaunchBlocker({ variant = 'card' }: PlayerLaunchBlockerProps) {
  const countdown = useLaunchCountdown()

  if (countdown.live) return null

  if (variant === 'app') {
    return (
      <div
        className="pointer-events-auto fixed inset-0 z-[100] flex items-center justify-center bg-void/90 p-4 backdrop-blur-md sm:p-8"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="player-launch-title"
        aria-describedby="player-launch-desc"
      >
        <div className="w-full max-w-md rounded-2xl border border-charcoal-600/50 bg-void-elevated p-6 sm:p-8">
          <LaunchCountdownPanel size="lg" />
          <p id="player-launch-desc" className="mt-6 text-sm leading-relaxed text-charcoal-200">
            The station is sealed until Black Rock City gates open. Playback unlocks
            automatically at launch — no early access.
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Player locked · Pre-launch
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="pointer-events-auto absolute inset-0 z-20 flex flex-col items-center justify-center rounded-none border border-charcoal-600/40 bg-void/92 p-5 text-center backdrop-blur-sm sm:p-6"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="hero-player-launch-title"
      aria-describedby="hero-player-launch-desc"
    >
      <LaunchCountdownPanel size="sm" showMeta={false} />
      <p
        id="hero-player-launch-desc"
        className="mt-4 max-w-[240px] text-xs leading-relaxed text-charcoal-200"
      >
        Player locked until playa gate open. Browse the site — station goes live with
        Burning Man 2026.
      </p>
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
        Locked
      </p>
    </div>
  )
}
