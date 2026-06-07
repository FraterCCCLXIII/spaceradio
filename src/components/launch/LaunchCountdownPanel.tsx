import { formatLaunchTargetLocal, LAUNCH_COPY } from '../../lib/launch'
import { LaunchCountdown } from './LaunchCountdown'

interface LaunchCountdownPanelProps {
  size?: 'sm' | 'lg'
  showMeta?: boolean
}

export function LaunchCountdownPanel({ size = 'lg', showMeta = true }: LaunchCountdownPanelProps) {
  return (
    <div className="space-y-5">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
          {LAUNCH_COPY.subtitle}
        </p>
        <h2
          className={`mt-2 font-display font-normal uppercase tracking-wide text-signal ${
            size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-lg'
          }`}
        >
          {LAUNCH_COPY.title}
        </h2>
        {showMeta && (
          <p className="mt-2 text-sm text-charcoal-200">
            Black Rock City {LAUNCH_COPY.burningManDates} · Theme:{' '}
            <span className="text-signal">{LAUNCH_COPY.theme}</span>
          </p>
        )}
      </div>

      <LaunchCountdown size={size} />

      {showMeta && (
        <p className="font-mono text-[10px] text-muted">{formatLaunchTargetLocal()}</p>
      )}
    </div>
  )
}
