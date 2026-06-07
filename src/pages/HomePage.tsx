import { HeroSection } from '../components/marketing/HeroSection'
import { MissionSections } from '../components/marketing/MissionSections'
import { OriginalsRail } from '../components/marketing/OriginalsRail'
import { SponsorLogos } from '../components/marketing/SponsorLogos'
import { WaitlistForm } from '../components/marketing/WaitlistForm'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSections />

      <section className="border-t border-charcoal-700/40 bg-void-elevated px-6 py-20 sm:px-10 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-orbit">
          Latest transmission
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-2xl font-normal uppercase tracking-wide text-signal sm:text-3xl">
          SR-TX-2026-00002 symbolic beam in progress
        </h2>
        <p className="mt-4 max-w-xl text-charcoal-200">
          Tier 1 registry entry. Demo symbolic transmission — not a physical
          deep-space broadcast.
        </p>
      </section>

      <OriginalsRail />
      <SponsorLogos />
      <WaitlistForm />
    </>
  )
}
