import type { Mission, NowPlaying, Show, Track, Transmission } from './types'

const DEMO_AUDIO = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
]

export const tracks: Track[] = [
  {
    id: 't1',
    title: 'Signal Lock',
    artist: 'SpaceRadio Originals',
    catalogId: 'SR-OR-001',
    durationSec: 312,
    bpm: 72,
    genre: 'space-ambient',
    energy: 2,
    missionSlug: 'deep-orbit',
    curatorNote: 'Void-session pad stack tuned for Deep Orbit rotation.',
    demoAudioUrl: DEMO_AUDIO[0],
    artworkUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80',
  },
  {
    id: 't2',
    title: 'Apogee',
    artist: 'SpaceRadio Originals',
    catalogId: 'SR-OR-002',
    durationSec: 284,
    bpm: 88,
    genre: 'mission-pulse',
    energy: 3,
    missionSlug: 'demo-flight',
    curatorNote: 'Ascent energy for Launch Pad rotation.',
    demoAudioUrl: DEMO_AUDIO[1],
    artworkUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600&q=80',
  },
  {
    id: 't3',
    title: 'Terminus',
    artist: 'SpaceRadio Originals',
    catalogId: 'SR-OR-003',
    durationSec: 420,
    bpm: 58,
    genre: 'void',
    energy: 1,
    missionSlug: 'deep-orbit',
    curatorNote: 'Ultra-sparse long-form for Void Session.',
    demoAudioUrl: DEMO_AUDIO[2],
    artworkUrl: 'https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?w=600&q=80',
  },
  {
    id: 't4',
    title: 'Goldstone Rain',
    artist: 'SpaceRadio Originals',
    catalogId: 'SR-OR-004',
    durationSec: 256,
    bpm: 94,
    genre: 'mission-pulse',
    energy: 4,
    missionSlug: 'mars-relay',
    curatorNote: 'Rhythmic forward motion without EDM cliché.',
    demoAudioUrl: DEMO_AUDIO[3],
    artworkUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&q=80',
  },
  {
    id: 't5',
    title: 'Ridge Line',
    artist: 'SpaceRadio Originals',
    catalogId: 'SR-OR-005',
    durationSec: 198,
    bpm: 80,
    genre: 'docking',
    energy: 3,
    missionSlug: 'jwst',
    curatorNote: 'Warm harmonic arrival piece for Deep Sky.',
    demoAudioUrl: DEMO_AUDIO[4],
    artworkUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80',
  },
  {
    id: 't6',
    title: 'Pale Relay',
    artist: 'SpaceRadio Originals',
    catalogId: 'SR-OR-006',
    durationSec: 360,
    bpm: 65,
    genre: 'space-ambient',
    energy: 2,
    missionSlug: 'voyager-tribute',
    curatorNote: 'Interstellar context; sparse Morse motifs.',
    demoAudioUrl: DEMO_AUDIO[5],
    artworkUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80',
  },
  {
    id: 't7',
    title: 'Docking Ring',
    artist: 'SpaceRadio Originals',
    catalogId: 'SR-OR-007',
    durationSec: 240,
    bpm: 76,
    genre: 'docking',
    energy: 2,
    missionSlug: 'artemis',
    curatorNote: 'Resolving chords for lunar mission hour.',
    demoAudioUrl: DEMO_AUDIO[6],
    artworkUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600&q=80',
  },
  {
    id: 't8',
    title: 'Burn Window',
    artist: 'SpaceRadio Originals',
    catalogId: 'SR-OR-008',
    durationSec: 180,
    bpm: 110,
    genre: 'mission-pulse',
    energy: 5,
    missionSlug: 'commercial',
    curatorNote: 'Launch-day energy; event rotation only.',
    demoAudioUrl: DEMO_AUDIO[7],
    artworkUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&q=80',
  },
]

export const missions: Mission[] = [
  {
    slug: 'deep-orbit',
    name: 'Deep Orbit',
    description: 'Default ambient-space rotation. Slow, expansive beds for focus and wonder.',
    tieIn: 'Always-on station bed',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80',
    trackIds: ['t1', 't3'],
  },
  {
    slug: 'demo-flight',
    name: 'Demo Flight',
    description: 'Demonstration mission for SpaceRadio platform testing.',
    tieIn: 'Platform demo',
    imageUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=1200&q=80',
    trackIds: ['t2'],
  },
  {
    slug: 'mars-relay',
    name: 'Mars Relay',
    description: 'Programming tied to Mars missions and relay windows.',
    tieIn: 'Mars exploration',
    sponsor: '[Sponsor TBD]',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&q=80',
    trackIds: ['t4'],
  },
  {
    slug: 'jwst',
    name: 'Deep Sky',
    description: 'Music for deep-field discovery and observatory releases.',
    tieIn: 'JWST imagery',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80',
    trackIds: ['t5'],
  },
  {
    slug: 'artemis',
    name: 'Artemis Hour',
    description: 'Lunar program themed block with sponsor stings.',
    tieIn: 'Artemis program',
    sponsor: '[Sponsor TBD]',
    imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1200&q=80',
    trackIds: ['t7'],
  },
  {
    slug: 'voyager-tribute',
    name: 'Voyager Tribute',
    description: 'Interstellar context and long-horizon transmission thinking.',
    tieIn: 'Voyager heritage',
    imageUrl: 'https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?w=1200&q=80',
    trackIds: ['t6'],
  },
  {
    slug: 'commercial',
    name: 'Commercial Space Weekly',
    description: 'Private launch sector and commercial space culture.',
    tieIn: 'Commercial launch',
    sponsor: '[Sponsor TBD]',
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&q=80',
    trackIds: ['t8'],
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
  },
]

export const transmissions: Transmission[] = [
  {
    id: 'SR-TX-2026-00001',
    tier: 1,
    status: 'completed',
    scheduledAtUtc: '2026-06-21T12:00:00Z',
    completedAtUtc: '2026-06-21T12:00:42Z',
    trackIds: ['t1'],
    payloadChecksum: 'a3f8c2e91b047d6e8f2a1c9d4e7b0f3a8c5d2e1f9b4a7c0d3e6f8a1b2c5d8e9',
    publicNotes: 'Solstice symbolic beam. Tier 1 registry entry.',
    demo: true,
  },
  {
    id: 'SR-TX-2026-00002',
    tier: 1,
    status: 'active',
    scheduledAtUtc: '2026-06-06T14:00:00Z',
    trackIds: ['t2'],
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
    trackIds: ['t5'],
    payloadChecksum: 'c1d9e7f3b5a2e8d4f6c0b3a7e1d9f5c2b8a4e6d0f3c7b9a2e5d8f1c4b7a0e3',
    publicNotes: 'Scheduled Tier 1 beam for Deep Sky session.',
    demo: true,
  },
  {
    id: 'SR-TX-2026-00004',
    tier: 2,
    status: 'scheduled',
    scheduledAtUtc: '2026-07-04T22:00:00Z',
    trackIds: ['t4'],
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

let rotationIndex = 0

export function getTrackById(id: string): Track | undefined {
  return tracks.find((t) => t.id === id)
}

export function getMissionBySlug(slug: string): Mission | undefined {
  return missions.find((m) => m.slug === slug)
}

export function getTransmissionById(id: string): Transmission | undefined {
  return transmissions.find((t) => t.id === id)
}

export function buildNowPlaying(trackIndex = rotationIndex): NowPlaying {
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
    startedAtUtc: new Date().toISOString(),
    listenersEstimate: 142 + (trackIndex % 37),
    transmission: activeTx,
    upNext,
  }
}

export function advanceRotation(): number {
  rotationIndex = (rotationIndex + 1) % tracks.length
  return rotationIndex
}

export function getRotationIndex(): number {
  return rotationIndex
}
