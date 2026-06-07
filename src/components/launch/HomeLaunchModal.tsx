import { X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { HOME_LAUNCH_MODAL_KEY, isLaunchLive } from '../../lib/launch'
import { LaunchCountdownPanel } from './LaunchCountdownPanel'

export function HomeLaunchModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (isLaunchLive()) return

    try {
      const dismissed = localStorage.getItem(HOME_LAUNCH_MODAL_KEY)
      if (!dismissed) setOpen(true)
    } catch {
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const dismiss = () => {
    try {
      localStorage.setItem(HOME_LAUNCH_MODAL_KEY, '1')
    } catch {
      // ignore
    }
    setOpen(false)
  }

  if (!open || isLaunchLive()) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="home-launch-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-void/80 backdrop-blur-md"
        onClick={dismiss}
        aria-label="Dismiss launch announcement"
      />

      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-charcoal-600/50 bg-void-elevated p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-4 rounded-full p-2 text-muted transition-colors hover:bg-charcoal-700/50 hover:text-signal"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <LaunchCountdownPanel />

        <p className="mt-6 text-sm leading-relaxed text-charcoal-200">
          SpaceRadio launches in sync with Burning Man 2026 — when Black Rock City
          opens on the playa. Preview the mission registry and originals until the
          station goes live.
        </p>

        <button
          type="button"
          onClick={dismiss}
          className="mt-6 w-full rounded-full bg-signal px-6 py-2.5 text-sm font-medium text-void transition-opacity hover:opacity-90"
        >
          Continue browsing
        </button>
      </div>
    </div>
  )
}
