import { Link } from 'react-router-dom'
import { BarChart } from '../components/whitepaper/BarChart'
import { DataTable } from '../components/whitepaper/DataTable'
import { resourceImages } from '../lib/resource-images'

export function ManifestoPage() {
  return (
    <article>
      <header className="relative min-h-[55vh] overflow-hidden border-b border-charcoal-700/40">
        <img
          src={resourceImages.beamBlackholeCubesats}
          alt="Signal beam from Earth toward the cosmos"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/40" />
        <div className="relative px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-orbit">
            SpaceRadio ù Orchard Program
          </p>
          <h1 className="page-heading mt-4 max-w-4xl">Manifesto</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-200">
            Why we broadcast music toward the stars ù and why harmony is the best
            first signal humanity can send.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10 lg:px-16">
        <section className="space-y-4 text-sm leading-relaxed text-charcoal-200">
          <p>
            SpaceRadio is not a playlist with a space wallpaper. It is the cultural
            transmission layer of the Orchard Program ù a century-scale architecture
            for placing human meaning into the galaxy in a form that survives the
            death of its senders.
          </p>
          <p>
            We reject the fantasy of real-time conversation between civilizations.
            The Milky Way is 13.6 billion years old; technological species may
            overlap for less than a millionth of galactic history. The right design
            target is not dialogue ù it is <strong className="font-normal text-signal">communication between epochs</strong>.
          </p>
        </section>

        <figure className="my-12 overflow-hidden rounded-2xl border border-charcoal-600/40">
          <img
            src={resourceImages.portalFutureCity}
            alt="Portal between present landscape and future civilization"
            className="h-64 w-full object-cover sm:h-80"
          />
          <figcaption className="bg-void-panel px-5 py-3 font-mono text-[10px] text-muted">
            We build bridges between eras, not between simultaneous listeners.
          </figcaption>
        </figure>

        <section className="mt-12">
          <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
            What we are doing
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-charcoal-200">
            <p>
              On Earth, SpaceRadio is a 24/7 station: original space music, mission-linked
              programming, a public transmission registry, and an Eternity Archive. Every
              track is curated, documented, and tier-honest.
            </p>
            <p>
              Off Earth, we participate in the Orchard Program ù targeted beacons,
              gravitational-lens relays, and ultimately self-replicating seeds that carry
              layered messages into deep time. SpaceRadio supplies{' '}
              <strong className="font-normal text-signal">Layer 3</strong>: who we are,
              in language, image, and sound.
            </p>
          </div>
          <div className="mt-6">
          <DataTable
            caption="Three layers of the SpaceRadio stack"
            headers={['Layer', 'What', 'Horizon']}
            rows={[
              ['Station', 'Broadcast & culture on Earth', 'Now'],
              ['Transmission registry', 'Logged beams Tier 1ù4', 'Years'],
              ['Orchard archive', 'Music in the beacon message', 'Centuries ? megayears'],
            ]}
          />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
            Why music is the best first contact
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-charcoal-200">
            <p>
              Any recipient must first decide: is this signal artificial? Mathematics
              alone is necessary but cold. Music is mathematics made{' '}
              <em>felt</em> ù ratios, primes, periodicity, and structure that any
              intelligence parsing patterns cannot dismiss as noise.
            </p>
            <p>
              Harmonic series are physics: vibrating bodies produce integer multiples.
              Rhythm is counting. Melody is grammar over time. A civilization that
              understands the hydrogen line can recognize that our music encodes the
              same logic as our science ù deliberately, beautifully, redundantly.
            </p>
            <p>
              Music carries emotion without requiring shared biology. It does not
              demand immediate reply. It can loop for centuries on a beacon cadence
              while a receiver integrates, decodes, and grows ready for deeper layers.
              It is the ideal Layer 3 payload: cultural, compressible, verifiable, and
              transmissible at low SNR.
            </p>
          </div>

          <BarChart
            caption="Why music beats other Layer-3 candidates (qualitative)"
            bars={[
              { label: 'Mathematical proof alone', value: 40, display: 'Necessary, not sufficient' },
              { label: 'Natural language text', value: 35, display: 'High ambiguity' },
              { label: 'Static imagery', value: 50, display: 'Sparse redundancy' },
              { label: 'Music + metadata', value: 95, display: 'Optimal first cultural signal' },
            ]}
          />
        </section>

        <figure className="my-12 overflow-hidden rounded-2xl border border-charcoal-600/40">
          <img
            src={resourceImages.beaconDishSun}
            alt="Radio telescope transmitting toward the Sun"
            className="h-56 w-full object-cover sm:h-72"
          />
          <figcaption className="bg-void-panel px-5 py-3 font-mono text-[10px] text-muted">
            Beacon One ù directed energy, repeated cadence, water-hole frequencies. Music
            rides the wideband payload.
          </figcaption>
        </figure>

        <section className="mt-12">
          <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
            How it works
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-charcoal-200">
            <p>
              <strong className="font-normal text-signal">Listen.</strong> The station
              composes and curates SpaceRadio Originals under Sound DNA constraints ù
              human judgment, AI assistance, full provenance.
            </p>
            <p>
              <strong className="font-normal text-signal">Log.</strong> Every
              transmission event enters the public registry with tier labels. Tier 1
              symbolic beams are not disguised as deep-space photons.
            </p>
            <p>
              <strong className="font-normal text-signal">Archive.</strong> Lossless
              masters live in the Eternity Archive ù geo-redundant, institution-bound,
              succession-planned.
            </p>
            <p>
              <strong className="font-normal text-signal">Beam.</strong> Selected
              originals encode into the Orchard message stack: carrier and pulse train
              for acquisition, wideband channel for the cultural packet, Layer 4
              instructions to build the next node.
            </p>
          </div>
        </section>

        <figure className="my-12 overflow-hidden rounded-2xl border border-charcoal-600/40">
          <img
            src={resourceImages.orbitalCubeEarth}
            alt="Autonomous cube in orbit above Earth"
            className="h-56 w-full object-cover sm:h-72"
          />
          <figcaption className="bg-void-panel px-5 py-3 font-mono text-[10px] text-muted">
            Mnemosyne-class orbital instruments ù music born in vacuum, downlinked until
            silence, archived forever on Earth.
          </figcaption>
        </figure>

        <section className="mt-12 rounded-2xl border border-beam/20 bg-beam/5 p-6 sm:p-8">
          <h2 className="font-display text-lg font-normal uppercase tracking-wide text-signal">
            The invitation
          </h2>
          <p className="mt-4 text-sm italic leading-relaxed text-charcoal-200">
            We are one civilization in one era. We may not survive to hear you; you may
            not survive to hear others. But if you receive this ù decode the primes,
            lock the carrier, hear the music, build another beacon, add your archive,
            and send it onward. Let intelligence become cumulative across the dark.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/program"
              className="rounded-full bg-signal px-6 py-2.5 text-sm font-medium text-void"
            >
              Read the whitepapers
            </Link>
            <Link
              to="/app"
              className="rounded-full border border-signal/20 px-6 py-2.5 text-sm font-medium text-signal hover:border-signal/40"
            >
              Listen to the station
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
