import { sponsorLogos } from '../../lib/demo-data'

function Monogram({ name }: { name: string }) {
  const letter = name.charAt(0)
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-signal/20 bg-void-panel font-mono text-sm text-signal">
      {letter}
    </div>
  )
}

export function SponsorLogos() {
  return (
    <section className="border-t border-signal/10 bg-void-elevated py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-sm text-muted">
          In conversation with space industry partners
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
          {sponsorLogos.map((s) => (
            <div key={s.slug} className="flex flex-col items-center gap-2 opacity-70">
              <Monogram name={s.name} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
