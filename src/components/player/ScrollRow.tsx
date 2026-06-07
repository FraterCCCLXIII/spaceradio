import type { ReactNode } from 'react'

interface ScrollRowProps {
  children: ReactNode
  className?: string
}

export function ScrollRow({ children, className = '' }: ScrollRowProps) {
  return (
    <div className={`scroll-row flex gap-4 ${className}`}>
      {children}
    </div>
  )
}
