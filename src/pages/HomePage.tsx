import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { BentoPillars } from '../components/marketing/BentoPillars'
import { OriginalsRail } from '../components/marketing/OriginalsRail'
import { SponsorLogos } from '../components/marketing/SponsorLogos'
import { TransmissionTicker } from '../components/marketing/TransmissionTicker'
import { WaitlistForm } from '../components/marketing/WaitlistForm'
import { PlayerCard } from '../components/player/PlayerCard'
import { Button } from '../components/ui/Button'

export function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pt-16 sm:px-6 lg:min-h-[calc(100dvh-72px)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
            24/7 space radio
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.05]">
            Music for the stars.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            SpaceRadio plays original music for Earth and logs every transmission
            toward the stars.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/listen">
              <Button>Listen Live</Button>
            </Link>
            <Link to="/transmissions">
              <Button variant="secondary">View Registry</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-4"
        >
          <PlayerCard />
          <div className="overflow-hidden rounded-2xl border border-signal/10">
            <img
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
              alt="Radio telescope array at dusk"
              className="h-40 w-full object-cover opacity-80"
            />
          </div>
        </motion.div>
      </section>

      <TransmissionTicker />
      <BentoPillars />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <blockquote className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
          &ldquo;We build music that leaves a record on Earth before it asks to leave the planet.&rdquo;
        </blockquote>
        <img
          src="https://images.unsplash.com/photo-1454789549943-d2bcffef2f47?w=800&q=80"
          alt="Deep space nebula"
          className="rounded-2xl border border-signal/10 object-cover"
        />
      </section>

      <OriginalsRail />
      <SponsorLogos />
      <WaitlistForm />
    </>
  )
}
