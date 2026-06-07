import { stationTracks } from './station-playlist'
import {
  advanceRotation,
  getRotationIndex,
  syncRotationFromClock,
} from './station-rotation'
import type { Mission, NowPlaying, Show, Track, Transmission } from './types'

export const tracks: Track[] = stationTracks

export { advanceRotation, getRotationIndex, syncRotationFromClock }

function trackIdsForMission(slug: string): string[] {
  return tracks.filter((track) => track.missionSlug === slug).map((track) => track.id)
}

export const missions: Mission[] = [
  {
    slug: 'deep-orbit',
    name: 'Deep Orbit',
    description: 'Default ambient-space rotation. Slow, expansive beds for focus and wonder.',
    tieIn: 'Always-on station bed',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80',
    trackIds: trackIdsForMission('deep-orbit'),
  },
  {
    slug: 'demo-flight',
    name: 'Demo Flight',
    description: 'Demonstration mission for SpaceRadio platform testing.',
    tieIn: 'Platform demo',
    imageUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=1200&q=80',
    trackIds: trackIdsForMission('demo-flight'),
  },
  {
    slug: 'mars-relay',
    name: 'Mars Relay',
    description: 'Programming tied to Mars missions and relay windows.',
    tieIn: 'Mars exploration',
    sponsor: '[Sponsor TBD]',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&q=80',
    trackIds: trackIdsForMission('mars-relay'),
  },
  {
    slug: 'jwst',
    name: 'Deep Sky',
    description: 'Music for deep-field discovery and observatory releases.',
    tieIn: 'JWST imagery',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80',
    trackIds: trackIdsForMission('jwst'),
  },
  {
    slug: 'artemis',
    name: 'Artemis Hour',
    description: 'Lunar program themed block with sponsor stings.',
    tieIn: 'Artemis program',
    sponsor: '[Sponsor TBD]',
    imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1200&q=80',
    trackIds: trackIdsForMission('artemis'),
  },
  {
    slug: 'voyager-tribute',
    name: 'Voyager Tribute',
    description: 'Interstellar context and long-horizon transmission thinking.',
    tieIn: 'Voyager heritage',
    imageUrl: 'https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?w=1200&q=80',
    trackIds: trackIdsForMission('voyager-tribute'),
  },
  {
    slug: 'commercial',
    name: 'Commercial Space Weekly',
    description: 'Private launch sector and commercial space culture.',
    tieIn: 'Commercial launch',
    sponsor: '[Sponsor TBD]',
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&q=80',
    trackIds: trackIdsForMission('commercial'),
  },
  {
    slug: 'helios-relay',
    name: 'Mission Helios Relay',
    description:
      'Deep-space laser communications using the Sun as a heliocentric beacon. Music aligned to the star.',
    tieIn: 'Tier 4 photonic pathway',
    imageUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&q=80',
    trackIds: [],
    concept: true,
    registryId: 'SR-MIS-HEL-001',
    missionStatus: 'Pre-feasibility · v0.1 ideation',
    tierTarget: 4,
    tagline: 'Music aligned to the star.',
    stationBlock: 'Helios Hour',
    programSlug: 'wp-3-solar-gravitational-lens',
  },
  {
    slug: 'eidolon-mesh',
    name: 'Project Eidolon Mesh',
    description:
      'Quantum-assisted timing and keying for a free-music distribution network. No claim of FTL transfer.',
    tieIn: 'Tier 1–2 trust & sync',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80',
    trackIds: [],
    concept: true,
    registryId: 'SR-MIS-EID-001',
    missionStatus: 'Theoretical architecture · v0.1 ideation',
    tierTarget: 2,
    tagline: 'Ceremony + proof at planetary scale.',
    stationBlock: 'Eidolon Open Hour',
    programSlug: 'wp-4-orchard-network',
  },
  {
    slug: 'mnemosyne-cube',
    name: 'Mission Mnemosyne Cube',
    description:
      'Autonomous orbital AI instrument that composes and transmits SpaceRadio Originals for as long as it survives.',
    tieIn: 'Tier 3 orbital payload',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80',
    trackIds: [],
    concept: true,
    registryId: 'SR-MIS-MNE-001',
    missionStatus: 'Concept design · v0.1 ideation',
    tierTarget: 3,
    tagline: 'Music born in orbit.',
    stationBlock: 'Mnemosyne Sol',
    programSlug: 'wp-4-orchard-network',
  },
]

export const transmissions: Transmission[] = [
  {
    id: 'SR-TX-2026-00001',
    tier: 1,
    status: 'completed',
    scheduledAtUtc: '2026-06-21T12:00:00Z',
    completedAtUtc: '2026-06-21T12:00:42Z',
    trackIds: tracks.slice(0, 1).map((t) => t.id),
    payloadChecksum: 'a3f8c2e91b047d6e8f2a1c9d4e7b0f3a8c5d2e1f9b4a7c0d3e6f8a1b2c5d8e9',
    publicNotes: 'Solstice symbolic beam. Tier 1 registry entry.',
    demo: true,
  },
  {
    id: 'SR-TX-2026-00002',
    tier: 1,
    status: 'active',
    scheduledAtUtc: '2026-06-06T14:00:00Z',
    trackIds: trackIdsForMission('demo-flight'),
    payloadChecksum: 'b7e2d4f1a9c8e3b6d0f5a2c7e1b4d8f3a6c9e2b5d8f1a4c7e0b3d6f9a2c5e8',
    sponsor: '[Sponsor TBD]',
    publicNotes: 'Demo symbolic beam in progress.',
    demo: true,
  },
  {
    id: 'SR-TX-2026-00003',
    tier: 1,
    status: 'scheduled',
    scheduledAtUtc: '2026-06-12T18:30:00Z',
    trackIds: trackIdsForMission('jwst'),
    payloadChecksum: 'c1d9e7f3b5a2e8d4f6c0b3a7e1d9f5c2b8a4e6d0f3c7b9a2e5d8f1c4b7a0e3',
    publicNotes: 'Scheduled Tier 1 beam for Deep Sky session.',
    demo: true,
  },
  {
    id: 'SR-TX-2026-00004',
    tier: 2,
    status: 'scheduled',
    scheduledAtUtc: '2026-07-04T22:00:00Z',
    trackIds: trackIdsForMission('mars-relay'),
    payloadChecksum: 'd4f2a8c6e0b3d7f1a5c9e2b8d4f6a0c3e7b1d5f9a2c6e8b0d4f7a1c5e9b2d6',
    publicNotes: 'Terrestrial RF window [Date TBD]. Partner ground station pending.',
    demo: true,
  },
]

export const shows: Show[] = [
  {
    id: 's1',
    title: 'Mission Control',
    host: 'Alex Chen',
    scheduleUtc: '18:00',
    durationMin: 60,
    missionSlug: 'deep-orbit',
  },
  {
    id: 's2',
    title: 'Deep Sky Sessions',
    host: 'Alex Chen',
    scheduleUtc: '20:00',
    durationMin: 45,
    missionSlug: 'jwst',
  },
  {
    id: 's3',
    title: 'Curator\'s Log',
    host: 'Alex Chen',
    scheduleUtc: '22:00',
    durationMin: 30,
  },
  {
    id: 's4',
    title: 'Artemis Hour',
    host: 'Alex Chen',
    scheduleUtc: '14:00',
    durationMin: 60,
    missionSlug: 'artemis',
  },
]

export const sponsorLogos = [
  { name: 'Orbital Dynamics', slug: 'orbital-dynamics' },
  { name: 'Astra Foundry', slug: 'astra-foundry' },
  { name: 'Helios Launch', slug: 'helios-launch' },
  { name: 'Nebula Systems', slug: 'nebula-systems' },
]

export function getTrackById(id: string): Track | undefined {
  return tracks.find((t) => t.id === id)
}

export function getMissionBySlug(slug: string): Mission | undefined {
  return missions.find((m) => m.slug === slug)
}

export function getTransmissionById(id: string): Transmission | undefined {
  return transmissions.find((t) => t.id === id)
}

export function buildNowPlaying(
  trackIndex = getRotationIndex(),
  startedAtUtc?: string,
): NowPlaying {
  const track = tracks[trackIndex % tracks.length]
  const mission = getMissionBySlug(track.missionSlug) ?? missions[0]
  const show = shows[0]
  const activeTx = transmissions.find((t) => t.status === 'active')

  const upNext = Array.from({ length: 5 }, (_, i) => {
    return tracks[(trackIndex + i + 1) % tracks.length]
  })

  return {
    track,
    mission,
    show,
    startedAtUtc: startedAtUtc ?? new Date().toISOString(),
    transmission: activeTx,
    upNext,
  }
}
