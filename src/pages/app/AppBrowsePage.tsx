import { Link } from 'react-router-dom'
import { ContentRail } from '../../components/player/ContentRail'
import { TrackArtwork } from '../../components/player/TrackArtwork'
import { missions, tracks, transmissions } from '../../lib/demo-data'
import { TransmissionCard } from '../../components/registry/TransmissionCard'

const genres = [...new Set(tracks.map((t) => t.genre))]

export function AppBrowsePage() {
  return (
    <div className="min-h-full px-5 py-8 sm:px-8 lg:px-10">
      <h1 className="font-display text-3xl font-normal uppercase tracking-wide text-signal sm:text-4xl">
        Browse
      </h1>
      <p className="mt-2 text-sm text-muted">
        Missions, genres, and transmission registry — explore the station catalog.
      </p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
            Browse by genre
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {genres.map((genre) => {
              const genreTracks = tracks.filter((t) => t.genre === genre)
              return (
                <Link
                  key={genre}
                  to="/app/library"
                  className="rounded-xl border border-signal/10 bg-void-panel p-5 transition-colors hover:bg-charcoal-700/30"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-orbit">
                    {genreTracks.length} tracks
                  </p>
                  <p className="mt-2 text-lg font-semibold capitalize text-signal">
                    {genre.replace('-', ' ')}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        <ContentRail title="All missions" href="/app/missions">
          {missions.map((m) => (
            <Link
              key={m.slug}
              to={`/app/missions/${m.slug}`}
              className="group relative h-48 w-48 shrink-0 overflow-hidden rounded-lg bg-void-panel"
            >
              <img
                src={m.imageUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-4">
                {m.concept && (
                  <span className="mb-2 w-fit rounded-full border border-beam/30 px-2 py-0.5 font-mono text-[8px] uppercase text-beam">
                    Concept
                  </span>
                )}
                <p className="text-sm font-semibold text-signal">{m.name}</p>
              </div>
            </Link>
          ))}
        </ContentRail>

        <section>
          <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
            Featured originals
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((track) => (
              <Link
                key={track.id}
                to="/app/library"
                className="flex items-center gap-3 rounded-lg border border-signal/10 bg-void-panel p-3 transition-colors hover:bg-charcoal-700/30"
              >
                <TrackArtwork track={track} size="sm" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{track.title}</p>
                  <p className="font-mono text-[10px] text-muted">{track.bpm} BPM</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
              Transmission registry
            </h2>
            <Link
              to="/app/transmissions"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted hover:text-signal"
            >
              View all →
            </Link>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {transmissions.map((tx) => (
              <TransmissionCard
                key={tx.id}
                transmission={tx}
                linkPrefix="/app/transmissions"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
