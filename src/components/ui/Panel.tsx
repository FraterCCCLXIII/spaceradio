import type { ReactNode } from 'react'

interface PanelProps {
  children: ReactNode
  className?: string
}

export function Panel({ children, className = '' }: PanelProps) {
  return (
    <div
      className={`rounded-2xl border border-charcoal-600/30 bg-void-panel/90 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  )
}
