import { ArrowRight } from '@phosphor-icons/react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface FullBleedSectionProps {
  image: string
  imageAlt?: string
  date?: string
  title: string
  description: string
  cta?: { label: string; to: string }
  align?: 'left' | 'center'
  children?: ReactNode
  minHeight?: string
}

export function FullBleedSection({
  image,
  imageAlt = '',
  date,
  title,
  description,
  cta,
  align = 'left',
  children,
  minHeight = 'min-h-[85vh]',
}: FullBleedSectionProps) {
  return (
    <section className={`relative ${minHeight} flex items-end overflow-hidden`}>
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/20" />
      <div
        className={`relative z-10 w-full px-6 pb-16 pt-32 sm:px-10 lg:px-16 lg:pb-24 ${
          align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'
        }`}
      >
        {date && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orbit">
            {date}
          </p>
        )}
        <h2 className="section-heading mt-3">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-200 sm:text-lg">
          {description}
        </p>
        {children}
        {cta && (
          <Link
            to={cta.to}
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-signal transition-colors hover:text-beam"
          >
            {cta.label}
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </section>
  )
}
