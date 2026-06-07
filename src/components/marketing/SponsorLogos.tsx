import { sponsorLogos } from '../../lib/demo-data'

export function SponsorLogos() {
  return (
    <section className="border-t border-charcoal-700/40 bg-void-elevated px-6 py-16 sm:px-10 lg:px-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        In conversation with space industry partners
      </p>
      <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
        {sponsorLogos.map((s) => (
          <span
            key={s.slug}
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-orbit"
          >
            {s.name}
          </span>
        ))}
      </div>
    </section>
  )
}
