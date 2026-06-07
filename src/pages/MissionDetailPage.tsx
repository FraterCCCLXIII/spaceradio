import { Link, useParams } from 'react-router-dom'
import { getMissionBySlug, getTrackById } from '../lib/demo-data'
import { formatDuration } from '../lib/format'

export function MissionDetailPage() {
  const { slug } = useParams()
  const mission = slug ? getMissionBySlug(slug) : undefined

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
          <p className="font-mono text-[10px] uppercase tracking-wider text-beam">
            {mission.tieIn}
          </p>
          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">{mission.name}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <p className="max-w-2xl text-muted">{mission.description}</p>

        {mission.sponsor && (
          <p className="mt-4 font-mono text-sm text-signal">
            {mission.sponsor} presents {mission.name}
          </p>
        )}

        <h2 className="mt-12 text-xl font-semibold">Mission rotation</h2>
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

        <Link
          to="/listen"
          className="mt-8 inline-block rounded-full bg-signal px-6 py-2.5 text-sm font-medium text-void"
        >
          Listen to mission
        </Link>
      </div>
    </div>
  )
}
