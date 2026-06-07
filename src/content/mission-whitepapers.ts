export interface MissionPhase {
  phase: string
  name: string
  summary: string
  tier: string
}

export interface MissionWhitepaper {
  slug: string
  registryId: string
  version: string
  documentClass: string
  executiveSummary: string
  problemStatement: string
  phases: MissionPhase[]
  stationBlock: string
  openQuestions?: string[]
  honestyNote?: string
}

export const missionWhitepapers: Record<string, MissionWhitepaper> = {
  'helios-relay': {
    slug: 'helios-relay',
    registryId: 'SR-MIS-HEL-001',
    version: '0.1',
    documentClass: 'Mission concept · Tier 4 pathway',
    executiveSummary:
      'Encode SpaceRadio Originals into a deep-space laser communications payload and point a terminal toward the Sun as a heliocentric navigation anchor — not as a mailbox. Phase 1 is symbolic + photonic record: a logged registry event with verifiable pointing parameters. Later phases partner with lasercomm testbeds and observatories for Tier 4 verification.',
    problemStatement:
      'Radio carried human culture across Earth for a century; interstellar leakage is faint and deliberate messaging is politically sensitive. Optical comms offer higher bandwidth than RF. Pointing toward the Sun gives a coherent story: we aligned our signal to the star every orbit in the system uses as clock.',
    phases: [
      { phase: 'H0', name: 'Ephemeris Beam', summary: 'Registry entry + certificate; JPL ephemeris pointing; no photons', tier: '1' },
      { phase: 'H1', name: 'Terrestrial Lasercomm', summary: 'Partner ground station test pattern + music excerpt; public log', tier: '2' },
      { phase: 'H2', name: 'Cislunar Terminal', summary: 'Lasercomm from lunar or Gateway-class asset; Sun-referenced attitude log', tier: '3' },
      { phase: 'H3', name: 'Deep Space Optical', summary: 'Interplanetary terminal; observatory confirms photon budget / null result', tier: '4' },
    ],
    stationBlock: 'Helios Hour — weekly rotation during H-phase windows.',
    openQuestions: [
      'Is solar gravitational lensing a credible Phase H4 narrative or separate mission?',
      'Minimum excerpt duration for cultural payload vs. comms overhead?',
      'Single global Helios window vs. distributed stations?',
    ],
    honestyNote:
      'Avoid “we sent music to aliens.” Prefer “we logged a cultural photonic package aligned to the Sun.” Tier 4 requires observatory attestation — never implied by UI.',
  },
  'eidolon-mesh': {
    slug: 'eidolon-mesh',
    registryId: 'SR-MIS-EID-001',
    version: '0.1',
    documentClass: 'Mission concept · research + Tier 1–2 registry',
    executiveSummary:
      'A quantum-assisted timing and keying network that synchronizes open music distribution nodes on Earth (and eventually in orbit). Entanglement does not transport music faster than light — it supplies correlated randomness and time anchors for authenticating SpaceRadio open-beam packets and coordinating global listening windows.',
    problemStatement:
      'Digital music is abundant but not permanent, verifiable, or coordinated at planetary scale. Classical CDNs solve delivery; they do not solve ceremony + proof. Eidolon maps commercially available QKD into SpaceRadio’s registry.',
    phases: [
      { phase: 'E0', name: 'Symbolic window', summary: 'Synchronized global listen on web; registry only', tier: '1' },
      { phase: 'E1', name: 'QKD attestation', summary: 'Partner lab signs registry events for a transmission window', tier: '2' },
      { phase: 'E2', name: 'Checksum challenge', summary: 'Listeners verify identical SHA across independent mirrors', tier: '1–2' },
      { phase: 'E3', name: 'Orbital QKD', summary: 'Research experiment tags one uplink — not consumer entanglement streaming', tier: '3' },
    ],
    stationBlock: 'Eidolon Open Hour — SR-OPEN-BEAM catalog only; no mid-roll ads.',
    honestyNote:
      'Always say “quantum-assisted verification and timing.” Never imply FTL communication.',
  },
  'mnemosyne-cube': {
    slug: 'mnemosyne-cube',
    registryId: 'SR-MIS-MNE-001',
    version: '0.1',
    documentClass: 'Mission concept · Tier 3 primary · Tier 4 aspirational',
    executiveSummary:
      'A small orbital payload (CubeSat-class) carrying hardened AI music generation, storage, and RF downlink. Generate, catalog, and transmit SpaceRadio Originals for as long as the platform survives — with honest timeline: years (realistic), decades (stretch), eternity (archival intent via Eternity Archive succession).',
    problemStatement:
      'Earth-bound AI composes without pause; only a space-qualified autonomous system ties composition to the mission narrative. Voyager carried static golden records. Mnemosyne is a dynamic artifact within radiation and compute limits.',
    phases: [
      { phase: 'M0', name: 'Flatsat', summary: 'Earth-based generation; symbolic orbital registry', tier: '1' },
      { phase: 'M1', name: 'Launch', summary: 'Commissioning; first downlink verified', tier: '3' },
      { phase: 'M2', name: 'Scheduled passes', summary: 'Excerpts broadcast to ham / partner stations', tier: '2–3' },
      { phase: 'M3', name: 'End-of-life burst', summary: 'Full archive dump + golden-package mirror', tier: '3' },
    ],
    stationBlock: 'Mnemosyne Sol — weekly drop of orbital originals after ground QC.',
    honestyNote:
      'Mnemosyne may fall quiet. The archive is designed not to.',
  },
}

export function getMissionWhitepaper(slug: string): MissionWhitepaper | undefined {
  return missionWhitepapers[slug]
}
