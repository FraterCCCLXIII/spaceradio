import { Link, useParams } from 'react-router-dom'
import { getMissionWhitepaper } from '../../content/mission-whitepapers'
import { TierBadge } from '../../components/registry/TierBadge'
import { getMissionBySlug, getTrackById } from '../../lib/demo-data'
import { formatDuration } from '../../lib/format'

const WHITEPAPER_FILES: Record<string, string> = {
  'helios-relay': 'HELIOS_RELAY.md',
  'eidolon-mesh': 'EIDOLON_MESH.md',
  'mnemosyne-cube': 'MNEMOSYNE_CUBE.md',
}

export function AppMissionDetailPage() {
  const { slug } = useParams()
  const mission = slug ? getMissionBySlug(slug) : undefined
  const whitepaper = slug ? getMissionWhitepaper(slug) : undefined

  if (!mission) {
    return (
      <div className="px-5 py-20 text-center sm:px-8">
        <p className="text-muted">Mission not found.</p>
        <Link to="/app/missions" className="mt-4 inline-block text-signal">
          ← All missions
        </Link>
      </div>
    )
  }

  const missionTracks = mission.trackIds.map((id) => getTrackById(id)).filter(Boolean)
  const whitepaperFile = slug ? WHITEPAPER_FILES[slug] : undefined
  const whitepaperHref = whitepaperFile
    ? `${import.meta.env.BASE_URL}whitepapers/${whitepaperFile}`
    : undefined

  return (
    <div>
      <div className="relative h-56 overflow-hidden sm:h-64">
        <img src={mission.imageUrl} alt="" className="h-full w-full object-cover opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-beam">{mission.tieIn}</p>
            {mission.concept && (
              <span className="rounded-full border border-beam/30 bg-beam/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-beam">
                Concept
              </span>
            )}
            {mission.tierTarget && <TierBadge tier={mission.tierTarget} />}
          </div>
          <h1 className="mt-2 font-display text-2xl font-normal uppercase tracking-wide text-signal sm:text-3xl">
            {mission.name}
          </h1>
          {mission.tagline && (
            <p className="mt-2 font-mono text-sm italic text-charcoal-200">{mission.tagline}</p>
          )}
        </div>
      </div>

      <div className="px-5 py-8 sm:px-8 lg:px-10">
        <p className="max-w-2xl text-muted">{mission.description}</p>

        {mission.registryId && (
          <p className="mt-4 font-mono text-xs text-orbit">
            {mission.registryId}
            {mission.missionStatus ? ` · ${mission.missionStatus}` : ''}
          </p>
        )}

        {whitepaper && (
          <section className="mt-10 max-w-3xl">
            <h2 className="font-display text-lg font-normal uppercase tracking-wide text-signal">
              Whitepaper
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-200">
              {whitepaper.executiveSummary}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {mission.programSlug && (
                <Link
                  to={`/program/${mission.programSlug}`}
                  className="inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-signal underline decoration-charcoal-500 underline-offset-4 hover:text-beam"
                >
                  Orchard Program whitepaper →
                </Link>
              )}
              {whitepaperHref && (
                <a
                  href={whitepaperHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-muted underline decoration-charcoal-500 underline-offset-4 hover:text-signal"
                >
                  Concept doc (markdown)
                </a>
              )}
            </div>
          </section>
        )}

        {missionTracks.length > 0 && (
          <>
            <h2 className="mt-10 font-display text-lg font-normal uppercase tracking-wide text-signal">
              Rotation
            </h2>
            <ul className="mt-4 max-w-2xl space-y-2">
              {missionTracks.map((t) =>
                t ? (
                  <li
                    key={t.id}
                    className="flex items-center justify-between rounded-lg border border-signal/10 bg-void-panel px-4 py-3"
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
              to="/app/now-playing"
              className="rounded-full bg-signal px-6 py-2.5 text-sm font-medium text-void"
            >
              Listen now
            </Link>
          )}
          <Link
            to="/app/missions"
            className="rounded-full border border-signal/20 px-6 py-2.5 text-sm font-medium text-signal hover:border-signal/40"
          >
            ← All missions
          </Link>
        </div>
      </div>
    </div>
  )
}
