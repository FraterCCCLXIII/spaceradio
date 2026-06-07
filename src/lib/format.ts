export function formatUtc(iso: string): string {
  return new Date(iso).toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
}

export function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function truncateChecksum(checksum: string, len = 12): string {
  return checksum.length > len ? `${checksum.slice(0, len)}…` : checksum
}

export function tierLabel(tier: number): string {
  const labels: Record<number, string> = {
    1: 'Symbolic',
    2: 'Terrestrial',
    3: 'Orbital',
    4: 'Deep Space',
  }
  return labels[tier] ?? `Tier ${tier}`
}
