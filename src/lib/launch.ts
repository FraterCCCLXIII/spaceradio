/** SpaceRadio launch synced to Black Rock City 2026 gate opening (Burning Man). */
export const LAUNCH_AT_UTC = '2026-08-30T19:00:00.000Z' // Sun Aug 30, 2026 · 12:00 PM PDT

export const LAUNCH_COPY = {
  title: 'Station launch',
  subtitle: 'Timed with Black Rock City 2026',
  burningManDates: 'August 30 – September 7, 2026',
  theme: 'Axis Mundi',
  gateNote: 'Gates open Sunday, August 30 — SpaceRadio goes live with the playa.',
} as const

export const HOME_LAUNCH_MODAL_KEY = 'spaceradio-launch-home-dismissed'
export const APP_LAUNCH_MODAL_KEY = 'spaceradio-launch-app-dismissed'

export interface LaunchCountdown {
  live: boolean
  days: number
  hours: number
  minutes: number
  seconds: number
  totalMs: number
}

export function isLaunchLive(now = Date.now()): boolean {
  return now >= new Date(LAUNCH_AT_UTC).getTime()
}

export function getLaunchCountdown(now = Date.now()): LaunchCountdown {
  const target = new Date(LAUNCH_AT_UTC).getTime()
  const totalMs = target - now

  if (totalMs <= 0) {
    return { live: true, days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 }
  }

  const totalSec = Math.floor(totalMs / 1000)
  const days = Math.floor(totalSec / 86400)
  const hours = Math.floor((totalSec % 86400) / 3600)
  const minutes = Math.floor((totalSec % 3600) / 60)
  const seconds = totalSec % 60

  return { live: false, days, hours, minutes, seconds, totalMs }
}

export function formatLaunchTargetLocal(): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
    timeZone: 'America/Los_Angeles',
  }).format(new Date(LAUNCH_AT_UTC))
}
