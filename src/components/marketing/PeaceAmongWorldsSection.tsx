import { PeaceAmongWorldsIcon } from './PeaceAmongWorldsIcon'

export function PeaceAmongWorldsSection() {
  return (
    <section
      className="overflow-hidden border-y-4 border-black"
      aria-labelledby="peace-among-worlds-heading"
    >
      <div className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <PeaceAmongWorldsIcon className="mx-auto h-24 w-auto text-black sm:h-32 lg:h-40" />
          <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.35em] text-black/70 sm:mt-8 sm:text-sm">
            A message to the cosmos
          </p>
          <h2
            id="peace-among-worlds-heading"
            className="mt-4 font-display text-[clamp(2.75rem,12vw,7.5rem)] font-normal uppercase leading-[0.92] tracking-[0.04em] text-black"
          >
            Peace Among Worlds
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-snug text-black sm:text-2xl lg:text-3xl">
            Turn it up. Point the dish. Send harmony instead of static.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-black/80 sm:text-lg">
            One station. Every frequency. Zero hostility.
          </p>
          <p className="mx-auto mt-10 max-w-3xl border-t border-black/20 pt-8 text-sm leading-relaxed text-black/90 sm:text-base lg:text-lg">
            SpaceRadio is committed to peace and fellowship with all civilizations -
            on Earth, across worlds, and across the long dark between the stars.
          </p>
        </div>
      </div>
    </section>
  )
}
