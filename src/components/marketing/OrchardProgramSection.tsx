import { Link } from 'react-router-dom'
import { resourceImages } from '../../lib/resource-images'

export function OrchardProgramSection() {
  return (
    <section className="border-t border-charcoal-700/40 bg-void">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">
          <img
            src={resourceImages.solarLensRing}
            alt="Gravitational lens against the stars"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-void lg:bg-gradient-to-l lg:from-void lg:via-void/40 lg:to-transparent" />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
            Orchard Program
          </p>
          <h2 className="mt-3 font-display text-2xl font-normal uppercase tracking-wide text-signal sm:text-3xl">
            Music for the long dark
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-charcoal-200">
            SpaceRadio is the cultural layer of a deep-time communication architecture —
            beacons, gravitational-lens relays, and self-replicating seeds. Music is Layer
            3 of the message: the best first contact humanity can send.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/manifesto"
              className="rounded-full bg-signal px-6 py-2.5 text-sm font-medium text-void"
            >
              Read the manifesto
            </Link>
            <Link
              to="/program"
              className="font-mono text-xs uppercase tracking-[0.16em] text-muted underline decoration-charcoal-500 underline-offset-4 hover:text-signal"
            >
              Whitepaper suite ?
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
