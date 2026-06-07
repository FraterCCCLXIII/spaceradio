import { FullBleedSection } from './FullBleedSection'

const sections = [
  {
    date: 'Always on',
    title: 'Broadcasting from Earth',
    description:
      'SpaceRadio is a 24/7 station playing original space music — curated compositions tied to missions, launches, and the rhythm of orbit.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    cta: { label: 'Listen live', to: '/listen' },
  },
  {
    title: 'Composing for the cosmos',
    description:
      'The AI Space Music Lab produces SpaceRadio Originals with human curation, documented provenance, and a defined Sound DNA.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02ca77fc67?w=1600&q=80',
    cta: { label: 'Browse catalog', to: '/originals' },
  },
  {
    title: 'Logging every transmission',
    description:
      'Music leaves Earth in tiers — from symbolic registry beams to terrestrial RF and orbital payloads. Every event is timestamped and public.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&q=80',
    cta: { label: 'View registry', to: '/transmissions' },
  },
  {
    title: 'Preserved for the long horizon',
    description:
      'The Eternity Archive stores lossless masters across redundant storage, open mirrors, and institutional deposits.',
    image: 'https://images.unsplash.com/photo-1507400492013-162706c8c161?w=1600&q=80',
    cta: { label: 'Learn more', to: '/transmissions' },
  },
]

export function MissionSections() {
  return (
    <div>
      {sections.map((s) => (
        <FullBleedSection key={s.title} {...s} />
      ))}
    </div>
  )
}
