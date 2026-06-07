import { Link } from 'react-router-dom'

const pillars = [
  {
    title: 'The Station',
    description: '24/7 original programming tied to real missions and cosmic sound.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    link: '/listen',
    tint: 'from-beam/20',
  },
  {
    title: 'AI Space Music Lab',
    description: 'Human-curated compositions with documented provenance and Sound DNA.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02ca77fc67?w=800&q=80',
    link: '/originals',
    tint: 'from-orbit/30',
  },
  {
    title: 'Eternity Archive',
    description: 'Lossless masters preserved for institutions and open mirrors.',
    image: 'https://images.unsplash.com/photo-1507400492013-162706c8c161?w=800&q=80',
    link: '/transmissions',
    tint: 'from-signal/20',
  },
]

export function BentoPillars() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Link
            key={p.title}
            to={p.link}
            className={`group relative overflow-hidden rounded-2xl border border-signal/10 ${
              i === 0 ? 'md:col-span-2 md:row-span-1' : ''
            }`}
          >
            <img
              src={p.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${p.tint} to-void/90`} />
            <div className="relative p-8">
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-muted">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
