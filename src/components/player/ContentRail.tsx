import { CaretRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { ScrollRow } from './ScrollRow'

interface ContentRailProps {
  title: string
  subtitle?: string
  href?: string
  linkLabel?: string
  children: ReactNode
}

export function ContentRail({ title, subtitle, href, linkLabel = 'Show all', children }: ContentRailProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
            {title}
          </h2>
          {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
        </div>
        {href && (
          <Link
            to={href}
            className="flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-signal"
          >
            {linkLabel}
            <CaretRight size={12} />
          </Link>
        )}
      </div>
      <ScrollRow>{children}</ScrollRow>
    </section>
  )
}
