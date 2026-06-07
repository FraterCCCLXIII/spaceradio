import type { ChartData } from '../../content/orchard-program/types'

export function BarChart({ caption, bars, maxValue }: ChartData) {
  const max = maxValue ?? Math.max(...bars.map((b) => b.value), 1)

  return (
    <div className="rounded-xl border border-charcoal-600/40 bg-void-panel p-5">
      {caption && (
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-orbit">
          {caption}
        </p>
      )}
      <div className="space-y-3">
        {bars.map((bar) => {
          const pct = Math.max(4, (bar.value / max) * 100)
          return (
            <div key={bar.label}>
              <div className="mb-1 flex items-baseline justify-between gap-2">
                <span className="text-xs text-charcoal-200">{bar.label}</span>
                <span className="shrink-0 font-mono text-[10px] text-signal">
                  {bar.display ?? `${bar.value}${bar.unit ? ` ${bar.unit}` : ''}`}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-charcoal-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-charcoal-500 to-signal"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
