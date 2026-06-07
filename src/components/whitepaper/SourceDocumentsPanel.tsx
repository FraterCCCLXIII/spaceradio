import { ArrowSquareOut, FileMd, FilePdf } from '@phosphor-icons/react'
import {
  getWhitepaperSource,
  programPdfDocuments,
} from '../../lib/program-sources'

interface SourceDocumentsPanelProps {
  slug: string
  compact?: boolean
}

export function SourceDocumentsPanel({ slug, compact = false }: SourceDocumentsPanelProps) {
  const source = getWhitepaperSource(slug)

  if (!source) return null

  const linkClass = compact
    ? 'flex items-center gap-2 rounded-lg border border-charcoal-600/40 px-3 py-2 text-xs text-charcoal-200 transition-colors hover:border-signal/30 hover:text-signal'
    : 'flex items-start gap-3 rounded-xl border border-charcoal-600/40 bg-void-panel p-4 transition-colors hover:border-signal/25'

  return (
    <section className={compact ? '' : 'mt-10'}>
      {!compact && (
        <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
          Original documents
        </h2>
      )}
      <div className={compact ? 'flex flex-wrap gap-2' : 'mt-4 space-y-3'}>
        <a
          href={source.markdown}
          download={source.filename}
          className={linkClass}
        >
          <FileMd size={compact ? 16 : 20} className="shrink-0 text-orbit" />
          <span>
            <span className="block font-medium text-signal">
              {compact ? 'Markdown' : 'Download markdown source'}
            </span>
            {!compact && (
              <span className="mt-0.5 block font-mono text-[10px] text-muted">
                {source.filename}
              </span>
            )}
          </span>
        </a>
        <a
          href={source.markdown}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <ArrowSquareOut size={compact ? 16 : 20} className="shrink-0 text-orbit" />
          <span>
            <span className="block font-medium text-signal">
              {compact ? 'View markdown' : 'View markdown in browser'}
            </span>
            {!compact && (
              <span className="mt-0.5 block text-[10px] text-muted">
                Full unabridged paper with equations and tables
              </span>
            )}
          </span>
        </a>
      </div>

      {!compact && (
        <div className="mt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Companion PDFs
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {programPdfDocuments.map((doc) => (
              <a
                key={doc.slug}
                href={doc.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 rounded-lg border border-charcoal-600/30 p-3 text-xs transition-colors hover:border-signal/25"
              >
                <FilePdf size={16} className="mt-0.5 shrink-0 text-beam" />
                <span>
                  <span className="font-medium text-signal">{doc.title}</span>
                  <span className="mt-0.5 block text-muted line-clamp-2">
                    {doc.description}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
