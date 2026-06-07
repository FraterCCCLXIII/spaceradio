interface LiveIndicatorProps {
  live?: boolean
  compact?: boolean
}

export function LiveIndicator({ live = false, compact }: LiveIndicatorProps) {
  if (!live) {
    return (
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
        Off air
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-beam">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-beam opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-beam" />
      </span>
      {compact ? 'Live' : 'Live broadcast'}
    </span>
  )
}
