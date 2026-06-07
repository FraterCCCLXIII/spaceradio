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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Transmission Registry
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
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
                : 'border border-signal/20 text-muted hover:text-[#e8eaed]'
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
