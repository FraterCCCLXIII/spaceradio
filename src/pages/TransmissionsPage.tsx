import { useState } from 'react'
import { transmissions } from '../lib/demo-data'
import type { TransmissionTier } from '../lib/types'
import { TransmissionCard } from '../components/registry/TransmissionCard'

type Filter = 'all' | TransmissionTier

export function TransmissionsPage() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered =
    filter === 'all'
      ? transmissions
      : filter === 2
        ? transmissions.filter((t) => t.tier >= 2)
        : transmissions.filter((t) => t.tier === filter)

  const pills: { label: string; value: Filter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Tier 1', value: 1 },
    { label: 'Tier 2+', value: 2 },
  ]

  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="page-heading">Transmission Registry</h1>
      <p className="mt-4 max-w-2xl text-charcoal-200">
        Append-only log of off-Earth broadcast events. Tier labels are explicit.
        Tier 1 entries are symbolic registry beams unless stated otherwise.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {pills.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setFilter(p.value)}
            className={`rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors ${
              filter === p.value
                ? 'bg-signal text-void'
                : 'border border-charcoal-500/50 text-muted hover:text-signal'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((tx) => (
          <TransmissionCard key={tx.id} transmission={tx} />
        ))}
      </div>
    </div>
  )
}
