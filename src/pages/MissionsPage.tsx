import { Link } from 'react-router-dom'
import { orchardWhitepapers } from '../content/orchard-program/whitepapers'
import { missions } from '../lib/demo-data'
import { programPdfDocuments, whitepaperSourceFiles } from '../lib/program-sources'
import { FileMd, FilePdf } from '@phosphor-icons/react'
import type { Mission } from '../lib/types'

function MissionCard({ m }: { m: Mission }) {
  const href = m.concept && m.programSlug ? `/program/${m.programSlug}` : `/missions/${m.slug}`

  return (
    <Link
      to={href}
      className="group relative min-h-[280px] overflow-hidden bg-void"
    >
      <img
        src={m.imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
      <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
            {m.tieIn}
          </p>
          {m.concept && (
            <span className="rounded-full border border-beam/30 bg-beam/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-beam">
              Concept · Whitepaper
            </span>
          )}
        </div>
        <h2 className="mt-2 font-display text-xl font-normal uppercase tracking-wide text-signal">
          {m.name}
        </h2>
        <p className="mt-2 text-sm text-charcoal-200 line-clamp-2">{m.description}</p>
        {m.registryId && (
          <p className="mt-3 font-mono text-[10px] text-muted">{m.registryId}</p>
        )}
      </div>
    </Link>
  )
}

export function MissionsPage() {
  const programming = missions.filter((m) => !m.concept)
  const concepts = missions.filter((m) => m.concept)

  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="page-heading">Missions</h1>
      <p className="mt-4 max-w-xl text-charcoal-200">
        On-air programming blocks and the Orchard Program — our deep-time communication
        architecture documented in five whitepapers.
      </p>

      <section className="mt-10 rounded-2xl border border-signal/15 bg-void-panel p-6 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
          Orchard Program
        </p>
        <h2 className="mt-2 font-display text-xl font-normal uppercase tracking-wide text-signal">
          Research & whitepapers
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-charcoal-200">
          SpaceRadio is the cultural transmission layer. Read the{' '}
          <Link to="/manifesto" className="text-signal hover:underline">
            manifesto
          </Link>{' '}
          first, then explore the full paper suite.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {orchardWhitepapers.map((paper) => (
            <Link
              key={paper.slug}
              to={`/program/${paper.slug}`}
              className="flex gap-3 rounded-xl border border-charcoal-600/40 p-3 transition-colors hover:border-signal/25 hover:bg-charcoal-700/20"
            >
              <img
                src={paper.heroImage}
                alt=""
                className="h-16 w-16 shrink-0 rounded-lg object-cover opacity-90"
              />
              <div className="min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-orbit">
                  WP-{paper.number}
                </p>
                <p className="mt-0.5 truncate text-sm font-medium text-signal">
                  {paper.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            to="/program"
            className="font-mono text-[10px] uppercase tracking-[0.16em] text-beam hover:underline"
          >
            Full whitepaper index →
          </Link>
        </div>
        <div className="mt-6 border-t border-charcoal-700/40 pt-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            Original sources
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {orchardWhitepapers.map((paper) => {
              const source = whitepaperSourceFiles[paper.slug]
              if (!source) return null
              return (
                <a
                  key={paper.slug}
                  href={source.markdown}
                  download={source.filename}
                  className="inline-flex items-center gap-1 rounded-full border border-charcoal-600/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted hover:border-signal/30 hover:text-signal"
                >
                  <FileMd size={10} />
                  WP-{paper.number}
                </a>
              )
            })}
            {programPdfDocuments.map((doc) => (
              <a
                key={doc.slug}
                href={doc.pdf}
                target="_blank"
                rel="noopener noreferrer"
                title={doc.title}
                className="inline-flex items-center gap-1 rounded-full border border-charcoal-600/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted hover:border-signal/30 hover:text-signal"
              >
                <FilePdf size={10} />
                {doc.filename.replace('_Paper.pdf', '').replace(/_/g, ' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
          On-air programming
        </h2>
        <div className="mt-4 grid gap-px bg-charcoal-700/40 sm:grid-cols-2">
          {programming.map((m) => (
            <MissionCard key={m.slug} m={m} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
          Mission concepts
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-charcoal-200">
          Station concepts linked to Orchard Program papers. Click a card to open the full
          whitepaper with tables and charts.
        </p>
        <div className="mt-4 grid gap-px bg-charcoal-700/40 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((m) => (
            <MissionCard key={m.slug} m={m} />
          ))}
        </div>
      </section>
    </div>
  )
}
