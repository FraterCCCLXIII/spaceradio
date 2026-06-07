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
          ? 'bg-beam/20 text-beam'
          : 'bg-white/5 text-muted'
      }`}
    >
      T{tier} · {tierLabel(tier)}
    </span>
  )
}
