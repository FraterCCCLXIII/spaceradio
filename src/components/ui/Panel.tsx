import type { ReactNode } from 'react'

interface PanelProps {
  children: ReactNode
  className?: string
}

export function Panel({ children, className = '' }: PanelProps) {
  return (
    <div
      className={`rounded-2xl border border-signal/10 bg-void-panel/80 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  )
}
