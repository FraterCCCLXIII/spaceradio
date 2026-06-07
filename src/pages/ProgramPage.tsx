import { Link } from 'react-router-dom'
import { orchardWhitepapers } from '../content/orchard-program/whitepapers'
import { programPdfDocuments, whitepaperSourceFiles } from '../lib/program-sources'
import { resourceImages } from '../lib/resource-images'
import { toDisplayText } from '../lib/typography'
import { FileMd, FilePdf } from '@phosphor-icons/react'

export function ProgramPage() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <div className="relative mb-12 overflow-hidden rounded-2xl border border-charcoal-600/40">
        <img
          src={resourceImages.portalDesertMoons}
          alt="Portal to another world under desert moons"
          className="h-48 w-full object-cover opacity-85 sm:h-56"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
            Orchard Program
          </p>
          <h1 className="page-heading mt-2">Whitepaper suite</h1>
          <p className="mt-3 max-w-xl text-sm text-charcoal-200">
            Deep-time interstellar communication ù from Beacon One to the self-replicating
            Orchard Network. Interactive summaries below; full original papers available as
            markdown and PDF.
          </p>
        </div>
      </div>

      <Link
        to="/manifesto"
        className="mb-10 flex items-center justify-between rounded-2xl border border-signal/15 bg-void-panel p-5 transition-colors hover:border-signal/30 sm:p-6"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-beam">
            Start here
          </p>
          <p className="mt-1 font-display text-lg uppercase tracking-wide text-signal">
            Manifesto
          </p>
          <p className="mt-2 text-sm text-muted">
            What we are doing, why, and how music is the best first contact.
          </p>
        </div>
        <span className="font-mono text-xs text-orbit">?</span>
      </Link>

      <section className="mb-12">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
          Interactive papers
        </h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {orchardWhitepapers.map((paper) => {
            const source = whitepaperSourceFiles[paper.slug]
            return (
              <div
                key={paper.slug}
                className="overflow-hidden rounded-2xl border border-charcoal-600/40 bg-void-panel"
              >
                <Link to={`/program/${paper.slug}`} className="group block">
                  <img
                    src={paper.heroImage}
                    alt=""
                    className="h-40 w-full object-cover opacity-85 transition-opacity group-hover:opacity-100"
                  />
                  <div className="p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-orbit">
                      Whitepaper {paper.number} ù v{paper.version}
                    </p>
                    <h3 className="mt-2 font-display text-lg uppercase tracking-wide text-signal">
                      {paper.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{paper.subtitle}</p>
                    <p className="mt-3 text-xs text-charcoal-200 line-clamp-3">
                      {toDisplayText(paper.abstract)}
                    </p>
                  </div>
                </Link>
                {source && (
                  <div className="flex flex-wrap gap-2 border-t border-charcoal-700/40 px-5 py-3">
                    <a
                      href={source.markdown}
                      download={source.filename}
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted hover:text-signal"
                    >
                      <FileMd size={12} />
                      Markdown
                    </a>
                    <a
                      href={source.markdown}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted hover:text-signal"
                    >
                      View source
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-charcoal-600/40 bg-void-panel p-6 sm:p-8">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
          Original PDF editions
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-charcoal-200">
          Companion PDF documents from the Resources archive ù including the master Orchard
          Program paper, SpaceGate Zero gateway concept, and Evergreen Probe architecture.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {programPdfDocuments.map((doc) => (
            <a
              key={doc.slug}
              href={doc.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-xl border border-charcoal-600/40 p-4 transition-colors hover:border-signal/25"
            >
              <FilePdf size={24} className="text-beam" />
              <p className="mt-3 text-sm font-medium text-signal">{doc.title}</p>
              <p className="mt-1 flex-1 text-xs text-muted">{doc.description}</p>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-orbit">
                {doc.filename}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-charcoal-600/30 p-6 sm:p-8">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
          How to read the suite
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-charcoal-200">
          <li>
            <strong className="font-normal text-signal">WP-0</strong> ù vision, economics,
            and phased roadmap
          </li>
          <li>
            <strong className="font-normal text-signal">WP-1</strong> ù why beams and
            repetition win (link-budget physics)
          </li>
          <li>
            <strong className="font-normal text-signal">WP-2</strong> ù what we can build
            now and what it costs (Beacon One)
          </li>
          <li>
            <strong className="font-normal text-signal">WP-3</strong> ù the Sun as a
            ~25-km antenna (gravitational lens relay)
          </li>
          <li>
            <strong className="font-normal text-signal">WP-4</strong> ù how a finite
            civilization plants an orchard it will never harvest
          </li>
        </ol>
        <p className="mt-4 text-xs text-muted">
          Each interactive page is a structured summary. Download the markdown or PDF for
          the complete unabridged text, equations, and references.
        </p>
      </section>
    </div>
  )
}
