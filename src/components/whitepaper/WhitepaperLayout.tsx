import { Link } from 'react-router-dom'
import type { OrchardWhitepaper } from '../../content/orchard-program/types'
import { toDisplayText } from '../../lib/typography'
import { BarChart } from './BarChart'
import { DataTable } from './DataTable'
import { SourceDocumentsPanel } from './SourceDocumentsPanel'

interface WhitepaperLayoutProps {
  paper: OrchardWhitepaper
}

export function WhitepaperLayout({ paper }: WhitepaperLayoutProps) {
  return (
    <article>
      <header className="relative min-h-[42vh] overflow-hidden border-b border-charcoal-700/40">
        <img
          src={paper.heroImage}
          alt={paper.heroImageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/75 to-void/30" />
        <div className="relative px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <Link
            to="/program"
            className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted hover:text-signal"
          >
            ? Whitepapers
          </Link>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
            Whitepaper {paper.number} ù v{paper.version}
          </p>
          <h1 className="page-heading mt-3 max-w-4xl">{paper.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-charcoal-200">
            {toDisplayText(paper.subtitle)}
          </p>
          <div className="mt-6">
            <SourceDocumentsPanel slug={paper.slug} compact />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10 lg:px-16">
        <section className="rounded-2xl border border-signal/10 bg-void-panel p-6 sm:p-8">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
            Abstract
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-200">
            {toDisplayText(paper.abstract)}
          </p>
        </section>

        {paper.sections.length > 3 && (
          <nav className="mt-8 rounded-xl border border-charcoal-600/30 bg-void-panel/50 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              In this paper
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {paper.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-xs text-charcoal-200 underline decoration-charcoal-600 underline-offset-2 hover:text-signal"
                  >
                    {toDisplayText(section.title)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {paper.sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-12 scroll-mt-24">
            <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
              {toDisplayText(section.title)}
            </h2>
            {section.paragraphs && section.paragraphs.length > 0 && (
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-charcoal-200">
                    {toDisplayText(p)}
                  </p>
                ))}
              </div>
            )}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-charcoal-200">
                {section.bullets.map((item, i) => (
                  <li key={i}>{toDisplayText(item)}</li>
                ))}
              </ul>
            )}
            {section.table && (
              <div className="mt-6">
                <DataTable {...section.table} />
              </div>
            )}
            {section.chart && (
              <div className="mt-6">
                <BarChart {...section.chart} />
              </div>
            )}
            {section.callout && (
              <blockquote className="mt-6 border-l-2 border-beam/40 pl-5 text-sm italic leading-relaxed text-charcoal-200">
                {toDisplayText(section.callout)}
              </blockquote>
            )}
          </section>
        ))}

        <SourceDocumentsPanel slug={paper.slug} />

        {paper.references && (
          <section className="mt-12 border-t border-charcoal-700/40 pt-8">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              References & benchmarks
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              {toDisplayText(paper.references)}
            </p>
          </section>
        )}

        {paper.relatedSlugs.length > 0 && (
          <section className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              Related papers
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {paper.relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  to={`/program/${slug}`}
                  className="rounded-full border border-charcoal-600/50 px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors hover:border-signal/30 hover:text-signal"
                >
                  {slug.replace('wp-', 'WP-').replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
