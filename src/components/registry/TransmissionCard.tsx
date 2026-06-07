import { Link } from 'react-router-dom'
import { getTrackById } from '../../lib/demo-data'
import { formatUtc, truncateChecksum } from '../../lib/format'
import type { Transmission } from '../../lib/types'
import { TierBadge } from './TierBadge'

interface TransmissionCardProps {
  transmission: Transmission
}

const statusColors: Record<string, string> = {
  scheduled: 'text-muted',
  active: 'text-signal',
  completed: 'text-orbit',
  failed: 'text-muted',
}

export function TransmissionCard({ transmission: tx }: TransmissionCardProps) {
  const track = getTrackById(tx.trackIds[0])

  return (
    <Link
      to={`/transmissions/${tx.id}`}
      className="block rounded-2xl border border-signal/10 bg-void-panel p-5 transition-colors hover:border-signal/25"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <span className="font-mono text-sm text-signal">{tx.id}</span>
        <TierBadge tier={tx.tier} active={tx.status === 'active'} />
      </div>

      <p className={`mt-2 font-mono text-xs uppercase tracking-wider ${statusColors[tx.status]}`}>
        {tx.status}
      </p>

      <p className="mt-3 text-sm text-muted">{tx.publicNotes}</p>

      <div className="mt-4 space-y-1 font-mono text-[10px] text-muted">
        <p>Scheduled: {formatUtc(tx.scheduledAtUtc)}</p>
        {tx.completedAtUtc && <p>Completed: {formatUtc(tx.completedAtUtc)}</p>}
        <p>Checksum: {truncateChecksum(tx.payloadChecksum)}</p>
        {track && <p>Track: {track.title}</p>}
      </div>
    </Link>
  )
}
