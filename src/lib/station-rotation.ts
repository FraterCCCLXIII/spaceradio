import {
  STATION_EPOCH_MS,
  getStationPlaylistDurationSec,
  hasStationPlaylist,
  stationTracks,
} from './station-playlist'
import { isLaunchLive } from './launch'
import type { Track } from './types'

export interface StationPosition {
  index: number
  offsetSec: number
  trackStartedAtUtc: string
}

let playbackIndex = 0
let playbackOffsetSec = 0

export function getStationTracks(): Track[] {
  return stationTracks
}

export function canPlayStation(): boolean {
  return hasStationPlaylist() || isLaunchLive()
}

/** Wall-clock schedule position — does not mutate playback state. */
export function getClockPosition(now = Date.now()): StationPosition {
  const tracks = getStationTracks()
  if (tracks.length === 0) {
    return {
      index: 0,
      offsetSec: 0,
      trackStartedAtUtc: new Date(now).toISOString(),
    }
  }

  const totalSec = getStationPlaylistDurationSec()
  if (totalSec <= 0) {
    return {
      index: 0,
      offsetSec: 0,
      trackStartedAtUtc: new Date(now).toISOString(),
    }
  }

  const elapsedSec = ((now - STATION_EPOCH_MS) / 1000) % totalSec
  let remaining = elapsedSec

  for (let i = 0; i < tracks.length; i++) {
    const duration = tracks[i].durationSec
    if (remaining < duration) {
      return {
        index: i,
        offsetSec: remaining,
        trackStartedAtUtc: new Date(now - remaining * 1000).toISOString(),
      }
    }
    remaining -= duration
  }

  return {
    index: 0,
    offsetSec: 0,
    trackStartedAtUtc: new Date(now).toISOString(),
  }
}

export function syncRotationFromClock(now = Date.now()): StationPosition {
  const position = getClockPosition(now)
  playbackIndex = position.index
  playbackOffsetSec = position.offsetSec
  return position
}

export function getRotationIndex(): number {
  return playbackIndex
}

export function getRotationOffsetSec(): number {
  return playbackOffsetSec
}

export function findTrackIndex(trackId: string): number {
  return getStationTracks().findIndex((track) => track.id === trackId)
}

export function advanceRotation(): number {
  const tracks = getStationTracks()
  if (tracks.length === 0) return 0
  if (tracks.length === 1) {
    playbackOffsetSec = 0
    return playbackIndex
  }

  const nextIndex = (playbackIndex + 1) % tracks.length
  playbackIndex = nextIndex
  playbackOffsetSec = 0
  return playbackIndex
}

export function setRotationState(index: number, offsetSec = 0): void {
  const tracks = getStationTracks()
  if (tracks.length === 0) return
  playbackIndex = index % tracks.length
  playbackOffsetSec = Math.max(0, offsetSec)
}

/** True when the broadcast schedule is ahead of local playback. */
export function isBehindSchedule(clockIndex: number, localIndex: number): boolean {
  const tracks = getStationTracks()
  const n = tracks.length
  if (n <= 1 || clockIndex === localIndex) return false

  const forward = (clockIndex - localIndex + n) % n
  return forward > 0 && forward <= Math.ceil(n / 2)
}
