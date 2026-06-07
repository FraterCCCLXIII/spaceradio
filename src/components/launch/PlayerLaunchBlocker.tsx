import { X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { APP_LAUNCH_MODAL_KEY } from '../../lib/launch'
import { useLaunchCountdown } from '../../hooks/useLaunchCountdown'
import { LaunchCountdownPanel } from './LaunchCountdownPanel'

interface PlayerLaunchBlockerProps {
  /** Cover the hero player card on the homepage */
  variant?: 'card' | 'app'
  onDismiss?: () => void
}

export function PlayerLaunchBlocker({ variant = 'card', onDismiss }: PlayerLaunchBlockerProps) {
  const countdown = useLaunchCountdown()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (variant !== 'app' || countdown.live) return

    try {
      const dismissed = localStorage.getItem(APP_LAUNCH_MODAL_KEY)
      if (!dismissed) setOpen(true)
    } catch {
      setOpen(true)
    }
  }, [variant, countdown.live])

  useEffect(() => {
    if (variant !== 'app' || !open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [variant, open])

  const dismiss = () => {
    try {
      localStorage.setItem(APP_LAUNCH_MODAL_KEY, '1')
    } catch {
      // ignore
    }
    setOpen(false)
    onDismiss?.()
  }

  if (countdown.live) return null

  if (variant === 'app') {
    if (!open) return null

    return (
      <div
        className="pointer-events-auto fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="player-launch-title"
        aria-describedby="player-launch-desc"
      >
        <button
          type="button"
          className="absolute inset-0 bg-void/90 backdrop-blur-md"
          onClick={dismiss}
          aria-label="Dismiss launch announcement"
        />

        <div className="relative z-10 w-full max-w-md rounded-2xl border border-charcoal-600/50 bg-void-elevated p-6 shadow-2xl sm:p-8">
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-4 top-4 rounded-full p-2 text-muted transition-colors hover:bg-charcoal-700/50 hover:text-signal"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <LaunchCountdownPanel size="lg" />
          <p id="player-launch-desc" className="mt-6 text-sm leading-relaxed text-charcoal-200">
            The station is sealed until Black Rock City gates open. Playback unlocks
            automatically at launch — you can still browse the app until then.
          </p>
          <button
            type="button"
            onClick={dismiss}
            className="mt-6 w-full rounded-full bg-signal px-6 py-2.5 text-sm font-medium text-void transition-opacity hover:opacity-90"
          >
            Explore the app
          </button>
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
