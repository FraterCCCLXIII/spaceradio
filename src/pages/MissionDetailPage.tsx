import { Link, useParams } from 'react-router-dom'
import { getMissionWhitepaper } from '../content/mission-whitepapers'
import { getMissionBySlug, getTrackById } from '../lib/demo-data'
import { formatDuration } from '../lib/format'
import { TierBadge } from '../components/registry/TierBadge'

const WHITEPAPER_FILES: Record<string, string> = {
  'helios-relay': 'HELIOS_RELAY.md',
  'eidolon-mesh': 'EIDOLON_MESH.md',
  'mnemosyne-cube': 'MNEMOSYNE_CUBE.md',
}

export function MissionDetailPage() {
  const { slug } = useParams()
  const mission = slug ? getMissionBySlug(slug) : undefined
  const whitepaper = slug ? getMissionWhitepaper(slug) : undefined

  if (!mission) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="text-muted">Mission not found.</p>
        <Link to="/missions" className="mt-4 inline-block text-signal">
          ← All missions
        </Link>
      </div>
    )
  }

  const missionTracks = mission.trackIds
    .map((id) => getTrackById(id))
    .filter(Boolean)

  const whitepaperFile = slug ? WHITEPAPER_FILES[slug] : undefined
  const whitepaperHref = whitepaperFile
    ? `${import.meta.env.BASE_URL}whitepapers/${whitepaperFile}`
    : undefined

  return (
    <div>
      <div className="relative h-64 overflow-hidden md:h-80">
        <img
          src={mission.imageUrl}
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-4 pb-8 sm:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-beam">
              {mission.tieIn}
            </p>
            {mission.concept && (
              <span className="rounded-full border border-beam/30 bg-beam/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-beam">
                Concept whitepaper
              </span>
            )}
            {mission.tierTarget && <TierBadge tier={mission.tierTarget} />}
          </div>
          <h1 className="page-heading mt-2">{mission.name}</h1>
          {mission.tagline && (
            <p className="mt-2 font-mono text-sm italic text-charcoal-200">{mission.tagline}</p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <p className="max-w-2xl text-muted">{mission.description}</p>

        {mission.registryId && (
          <p className="mt-4 font-mono text-xs text-orbit">
            {mission.registryId}
            {mission.missionStatus ? ` · ${mission.missionStatus}` : ''}
          </p>
        )}

        {mission.sponsor && (
          <p className="mt-4 font-mono text-sm text-signal">
            {mission.sponsor} presents {mission.name}
          </p>
        )}

        {whitepaper && (
          <section className="mt-12 max-w-3xl">
            <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
              Mission whitepaper
            </h2>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted">
              {whitepaper.documentClass} · v{whitepaper.version}
            </p>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
                  Executive summary
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-200">
                  {whitepaper.executiveSummary}
                </p>
              </div>

              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
                  Problem statement
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-200">
                  {whitepaper.problemStatement}
                </p>
              </div>

              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
                  Phased program
                </h3>
                <ul className="mt-4 space-y-3">
                  {whitepaper.phases.map((phase) => (
                    <li
                      key={phase.phase}
                      className="rounded-xl border border-signal/10 bg-void-panel px-5 py-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-mono text-xs text-signal">
                          {phase.phase} · {phase.name}
                        </p>
                        <span className="font-mono text-[10px] text-muted">
                          Tier {phase.tier}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-charcoal-200">{phase.summary}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
                  Station block
                </h3>
                <p className="mt-3 text-sm text-charcoal-200">{whitepaper.stationBlock}</p>
              </div>

              {whitepaper.honestyNote && (
                <p className="rounded-xl border border-beam/20 bg-beam/5 px-5 py-4 text-sm italic text-charcoal-200">
                  {whitepaper.honestyNote}
                </p>
              )}

              {whitepaper.openQuestions && whitepaper.openQuestions.length > 0 && (
                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-orbit">
                    Open questions
                  </h3>
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-charcoal-200">
                    {whitepaper.openQuestions.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {mission.programSlug && (
                <Link
                  to={`/program/${mission.programSlug}`}
                  className="inline-block font-mono text-xs uppercase tracking-[0.16em] text-signal underline decoration-charcoal-500 underline-offset-4 transition-colors hover:text-beam"
                >
                  Orchard Program whitepaper →
                </Link>
              )}
              {whitepaperHref && (
                <a
                  href={whitepaperHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-xs uppercase tracking-[0.16em] text-muted underline decoration-charcoal-500 underline-offset-4 transition-colors hover:text-signal"
                >
                  Mission concept doc (markdown)
                </a>
              )}
            </div>
          </section>
        )}

        {missionTracks.length > 0 && (
          <>
            <h2 className="mt-12 font-display text-xl font-normal uppercase tracking-wide text-signal">
              Mission rotation
            </h2>
            <ul className="mt-4 space-y-3">
              {missionTracks.map((t) =>
                t ? (
                  <li
                    key={t.id}
                    className="flex items-center justify-between rounded-xl border border-signal/10 bg-void-panel px-5 py-4"
                  >
                    <div>
                      <p className="font-medium">{t.title}</p>
                      <p className="font-mono text-[10px] text-muted">
                        {t.catalogId} · {t.bpm} BPM
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted">
                      {formatDuration(t.durationSec)}
                    </span>
                  </li>
                ) : null,
              )}
            </ul>
          </>
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          {!mission.concept && (
            <Link
              to="/app"
              className="inline-block rounded-full bg-signal px-6 py-2.5 text-sm font-medium text-void"
            >
              Listen to mission
            </Link>
          )}
          <Link
            to="/missions"
            className="inline-block rounded-full border border-signal/20 px-6 py-2.5 text-sm font-medium text-signal transition-colors hover:border-signal/40"
          >
            ← All missions
          </Link>
        </div>
      </div>
    </div>
  )
}
