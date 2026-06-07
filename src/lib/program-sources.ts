const base = import.meta.env.BASE_URL

export interface ProgramPdfDocument {
  slug: string
  title: string
  description: string
  pdf: string
  filename: string
}

export interface WhitepaperSourceFile {
  markdown: string
  filename: string
}

export const programPdfDocuments: ProgramPdfDocument[] = [
  {
    slug: 'orchard-program',
    title: 'Orchard Program Paper',
    description: 'Master program document — architecture, roadmap, and opportunity (PDF edition).',
    pdf: `${base}resources/Orchard_Program_Paper.pdf`,
    filename: 'Orchard_Program_Paper.pdf',
  },
  {
    slug: 'spacegate-zero',
    title: 'SpaceGate Zero Paper',
    description: 'Gateway and early-beacon concept — companion to the Phase 1 pilot.',
    pdf: `${base}resources/SpaceGate_Zero_Paper.pdf`,
    filename: 'SpaceGate_Zero_Paper.pdf',
  },
  {
    slug: 'evergreen-probe',
    title: 'Evergreen Probe Paper',
    description: 'Long-duration autonomous probe architecture — precursor to Orchard seeds.',
    pdf: `${base}resources/EVERGREEN_Probe_Paper.pdf`,
    filename: 'EVERGREEN_Probe_Paper.pdf',
  },
]

export const whitepaperSourceFiles: Record<string, WhitepaperSourceFile> = {
  'wp-0-program-architecture': {
    markdown: `${base}resources/whitepapers/WP-0_Program_Architecture.md`,
    filename: 'WP-0_Program_Architecture.md',
  },
  'wp-1-beacon-strategy': {
    markdown: `${base}resources/whitepapers/WP-1_Beacon_Strategy.md`,
    filename: 'WP-1_Beacon_Strategy.md',
  },
  'wp-2-beacon-one': {
    markdown: `${base}resources/whitepapers/WP-2_Beacon_One_Phase1.md`,
    filename: 'WP-2_Beacon_One_Phase1.md',
  },
  'wp-3-solar-gravitational-lens': {
    markdown: `${base}resources/whitepapers/WP-3_Solar_Gravitational_Lens.md`,
    filename: 'WP-3_Solar_Gravitational_Lens.md',
  },
  'wp-4-orchard-network': {
    markdown: `${base}resources/whitepapers/WP-4_Orchard_Network.md`,
    filename: 'WP-4_Orchard_Network.md',
  },
}

export function getWhitepaperSource(slug: string): WhitepaperSourceFile | undefined {
  return whitepaperSourceFiles[slug]
}
