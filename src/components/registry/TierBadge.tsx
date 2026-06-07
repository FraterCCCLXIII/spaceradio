import { tierLabel } from '../../lib/format'
import type { TransmissionTier } from '../../lib/types'

interface TierBadgeProps {
  tier: TransmissionTier
  active?: boolean
}

export function TierBadge({ tier, active }: TierBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
        active
          ? 'bg-charcoal-600/80 text-signal'
          : 'bg-charcoal-700/40 text-muted'
      }`}
    >
      T{tier} · {tierLabel(tier)}
    </span>
  )
}
