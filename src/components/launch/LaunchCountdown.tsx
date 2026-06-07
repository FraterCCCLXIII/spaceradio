import { useLaunchCountdown } from '../../hooks/useLaunchCountdown'
import { LAUNCH_COPY } from '../../lib/launch'

interface LaunchCountdownProps {
  size?: 'sm' | 'lg'
}

const UNITS = ['days', 'hours', 'minutes', 'seconds'] as const

export function LaunchCountdown({ size = 'lg' }: LaunchCountdownProps) {
  const countdown = useLaunchCountdown()
  const large = size === 'lg'

  if (countdown.live) {
    return (
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-beam">
        Station live — welcome to orbit
      </p>
    )
  }

  return (
    <div>
      <div
        className={`grid grid-cols-4 gap-2 ${large ? 'sm:gap-3' : 'gap-1.5'}`}
        role="timer"
        aria-live="polite"
        aria-label="Time until SpaceRadio launch"
      >
        {UNITS.map((unit) => (
          <div
            key={unit}
            className={`rounded-xl border border-charcoal-600/50 bg-void-panel text-center ${
              large ? 'px-3 py-4 sm:px-4 sm:py-5' : 'px-2 py-2.5'
            }`}
          >
            <p
              className={`font-mono font-medium tabular-nums text-signal ${
                large ? 'text-2xl sm:text-3xl' : 'text-lg'
              }`}
            >
              {String(countdown[unit]).padStart(2, '0')}
            </p>
            <p
              className={`mt-1 font-mono uppercase tracking-[0.14em] text-muted ${
                large ? 'text-[10px]' : 'text-[9px]'
              }`}
            >
              {unit}
            </p>
          </div>
        ))}
      </div>
      <p className={`mt-3 text-muted ${large ? 'text-sm' : 'text-xs'}`}>
        {LAUNCH_COPY.gateNote}
      </p>
    </div>
  )
}
