import { Link } from 'react-router-dom'
import { orchardWhitepapers } from '../../content/orchard-program/whitepapers'
import { whitepaperSourceFiles } from '../../lib/program-sources'
import { ScrollRow } from '../player/ScrollRow'

export function WhitepaperRail() {
  return (
    <section className="border-t border-charcoal-700/40 bg-void-elevated px-6 py-16 sm:px-10 lg:px-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
            Orchard Program
          </p>
          <h2 className="mt-2 font-display text-2xl font-normal uppercase tracking-wide text-signal sm:text-3xl">
            Whitepapers
          </h2>
          <p className="mt-3 max-w-xl text-sm text-charcoal-200">
            Five papers on deep-time communication ù from Beacon One to the self-replicating
            Orchard Network. Start with the{' '}
            <Link to="/manifesto" className="text-signal underline decoration-charcoal-500 underline-offset-2 hover:text-beam">
              manifesto
            </Link>
            .
          </p>
        </div>
        <Link
          to="/program"
          className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted hover:text-signal"
        >
          View all ?
        </Link>
      </div>

      <ScrollRow className="mt-8">
        {orchardWhitepapers.map((paper) => (
          <Link
            key={paper.slug}
            to={`/program/${paper.slug}`}
            className="w-56 shrink-0 overflow-hidden rounded-xl border border-charcoal-600/40 bg-void-panel transition-colors hover:border-signal/25"
          >
            <img
              src={paper.heroImage}
              alt=""
              className="h-32 w-full object-cover opacity-85"
            />
            <div className="p-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-orbit">
                WP-{paper.number}
              </p>
              <p className="mt-1 text-sm font-semibold text-signal">{paper.title}</p>
              {whitepaperSourceFiles[paper.slug] && (
                <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                  Markdown source available
                </p>
              )}
            </div>
          </Link>
        ))}
      </ScrollRow>
    </section>
  )
}
