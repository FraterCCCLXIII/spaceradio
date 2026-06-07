import { Link } from 'react-router-dom'
import { formatUtc } from '../../lib/format'
import { transmissions } from '../../lib/demo-data'
import { TierBadge } from '../registry/TierBadge'

export function TransmissionTicker() {
  const items = [...transmissions, ...transmissions]

  return (
    <section className="overflow-hidden border-y border-signal/10 bg-void-elevated py-3">
      <div className="flex animate-ticker whitespace-nowrap motion-reduce:animate-none">
        {items.map((tx, i) => (
          <Link
            key={`${tx.id}-${i}`}
            to={`/transmissions/${tx.id}`}
            className="mx-8 inline-flex items-center gap-3 font-mono text-xs text-muted transition-colors hover:text-signal"
          >
            <span className="text-signal">{tx.id}</span>
            <TierBadge tier={tx.tier} active={tx.status === 'active'} />
            <span>{formatUtc(tx.scheduledAtUtc)}</span>
            <span className="text-charcoal-500">·</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
