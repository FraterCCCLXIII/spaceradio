import { Link, useParams } from 'react-router-dom'
import { getTrackById, getTransmissionById } from '../lib/demo-data'
import { formatUtc, truncateChecksum } from '../lib/format'
import { TierBadge } from '../components/registry/TierBadge'

export function TransmissionDetailPage() {
  const { id } = useParams()
  const tx = id ? getTransmissionById(id) : undefined

  if (!tx) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="text-muted">Transmission not found.</p>
        <Link to="/transmissions" className="mt-4 inline-block text-signal">
          ← Registry
        </Link>
      </div>
    )
  }

  const tracks = tx.trackIds.map((tid) => getTrackById(tid)).filter(Boolean)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        to="/transmissions"
        className="font-mono text-[10px] uppercase tracking-wider text-muted hover:text-beam"
      >
        ← Registry
      </Link>

      <div className="mt-6 rounded-2xl border border-signal/20 bg-void-panel p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-mono text-xl text-signal md:text-2xl">{tx.id}</h1>
          <TierBadge tier={tx.tier} active={tx.status === 'active'} />
        </div>

        {tx.demo && (
          <p className="mt-4 rounded-lg bg-charcoal-700/50 px-3 py-2 font-mono text-xs text-orbit">
            Demo registry entry. Symbolic Tier 1 unless labeled Tier 3+.
          </p>
        )}

        <dl className="mt-8 space-y-4 font-mono text-sm">
          <div className="flex justify-between border-b border-signal/10 pb-3">
            <dt className="text-muted">Status</dt>
            <dd className="uppercase">{tx.status}</dd>
          </div>
          <div className="flex justify-between border-b border-signal/10 pb-3">
            <dt className="text-muted">Scheduled</dt>
            <dd>{formatUtc(tx.scheduledAtUtc)}</dd>
          </div>
          {tx.completedAtUtc && (
            <div className="flex justify-between border-b border-signal/10 pb-3">
              <dt className="text-muted">Completed</dt>
              <dd>{formatUtc(tx.completedAtUtc)}</dd>
            </div>
          )}
          <div className="flex justify-between border-b border-signal/10 pb-3">
            <dt className="text-muted">Payload SHA-256</dt>
            <dd className="text-right text-xs">{truncateChecksum(tx.payloadChecksum, 24)}</dd>
          </div>
          {tx.sponsor && (
            <div className="flex justify-between border-b border-signal/10 pb-3">
              <dt className="text-muted">Sponsor</dt>
              <dd>{tx.sponsor}</dd>
            </div>
          )}
        </dl>

        <p className="mt-6 text-sm text-muted">{tx.publicNotes}</p>

        {tracks.length > 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-semibold">Tracks in payload</h2>
            <ul className="mt-3 space-y-2">
              {tracks.map(
                (t) =>
                  t && (
                    <li key={t.id} className="font-mono text-xs text-muted">
                      {t.catalogId} · {t.title}
                    </li>
                  ),
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
