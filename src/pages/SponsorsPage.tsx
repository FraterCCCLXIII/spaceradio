import { Button } from '../components/ui/Button'

const packages = [
  {
    name: 'Signal',
    range: '$25K–$75K',
    features: [
      'Logo on site',
      '1 sponsored hour per month',
      'Analytics digest',
    ],
  },
  {
    name: 'Orbit',
    range: '$75K–$250K',
    features: [
      'Weekly named show',
      'Mission playlist co-brand',
      '4 Tier 1 beams per year',
    ],
    highlight: true,
  },
  {
    name: 'Deep Space',
    range: '$250K+',
    features: [
      'Daily programming block',
      'Sponsor portal access',
      'Tier 2 RF or Tier 3 orbital path',
      'Education pack',
    ],
  },
]

export function SponsorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Partner with SpaceRadio
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Space projects need cultural reach beyond press releases. Sponsorship
        packages attach your mission to original music, verified transmissions,
        and education outreach.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`rounded-2xl border p-6 ${
              pkg.highlight
                ? 'border-signal bg-signal/5'
                : 'border-signal/10 bg-void-panel'
            }`}
          >
            <h2 className="text-xl font-semibold">{pkg.name}</h2>
            <p className="mt-1 font-mono text-xs text-muted">{pkg.range}</p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {pkg.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-signal">·</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-signal/10 bg-void-panel p-8 text-center">
        <h2 className="text-xl font-semibold">Start a conversation</h2>
        <p className="mt-2 text-sm text-muted">
          Pricing indicative. In-kind dish time and launch slots available.
        </p>
        <a href="mailto:hello@spaceradio.demo">
          <Button className="mt-6">Partner With Us</Button>
        </a>
      </div>
    </div>
  )
}
