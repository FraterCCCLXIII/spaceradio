export type TransmissionTier = 1 | 2 | 3 | 4
export type TransmissionStatus = 'scheduled' | 'active' | 'completed' | 'failed'

export interface Track {
  id: string
  title: string
  artist: string
  catalogId: string
  durationSec: number
  bpm: number
  genre: string
  energy: number
  missionSlug: string
  curatorNote: string
  demoAudioUrl: string
  artworkUrl: string
}

export interface Mission {
  slug: string
  name: string
  description: string
  tieIn: string
  sponsor?: string
  imageUrl: string
  trackIds: string[]
  /** Ideation / pre-feasibility mission — not yet on-air programming */
  concept?: boolean
  registryId?: string
  missionStatus?: string
  tierTarget?: TransmissionTier
  tagline?: string
  stationBlock?: string
  programSlug?: string
}

export interface Transmission {
  id: string
  tier: TransmissionTier
  status: TransmissionStatus
  scheduledAtUtc: string
  completedAtUtc?: string
  trackIds: string[]
  payloadChecksum: string
  sponsor?: string
  publicNotes: string
  demo?: boolean
}

export interface Show {
  id: string
  title: string
  host: string
  scheduleUtc: string
  durationMin: number
  missionSlug?: string
}

export interface NowPlaying {
  track: Track
  mission: Mission
  show: Show
  startedAtUtc: string
  listenersEstimate: number
  transmission?: Transmission
  upNext: Track[]
}

export type PlayerStatus = 'idle' | 'connecting' | 'playing' | 'paused' | 'buffering' | 'error'
