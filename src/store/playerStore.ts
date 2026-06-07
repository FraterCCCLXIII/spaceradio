import { create } from 'zustand'
import {
  advanceRotation,
  buildNowPlaying,
  getRotationIndex,
  syncRotationFromClock,
} from '../lib/demo-data'
import { bindAudioAnalyser, resumeAudioAnalyser } from '../lib/audio-analyser'
import {
  initListenerPresence,
  setListenerPresenceActive,
} from '../lib/listener-presence'
import {
  canPlayStation,
  findTrackIndex,
  getClockPosition,
  isBehindSchedule,
  setRotationState,
} from '../lib/station-rotation'
import type { NowPlaying, PlayerStatus, Track } from '../lib/types'

const VOLUME_KEY = 'spaceradio-volume'

function loadVolume(): number {
  try {
    const stored = localStorage.getItem(VOLUME_KEY)
    if (stored) {
      const v = parseFloat(stored)
      if (!Number.isNaN(v) && v >= 0 && v <= 1) return v
    }
  } catch {
    // localStorage unavailable
  }
  return 0.75
}

let audio: HTMLAudioElement | null = null
let rotationTimer: ReturnType<typeof setInterval> | null = null
let initialized = false
let advancingTrack = false

function getAudio(): HTMLAudioElement {
  if (!audio) {
    audio = new Audio()
  }
  return audio
}

export function getPlayerAudioElement(): HTMLAudioElement {
  return getAudio()
}

function resolveAudioSrc(url: string): string {
  try {
    return new URL(url, window.location.href).href
  } catch {
    return url
  }
}

/** Normalize to NFC so URLs match Linux/git static hosting (Vercel). */
function resolvePlaybackSrc(url: string): string {
  return resolveAudioSrc(url).normalize('NFC')
}

function stopCurrentPlayback(): void {
  const el = getAudio()
  el.pause()
  el.currentTime = 0
}

function applyTrackToAudio(track: Track, offsetSec = 0): void {
  const el = getAudio()
  const playbackSrc = resolvePlaybackSrc(track.demoAudioUrl)
  const currentSrc = el.src ? resolvePlaybackSrc(el.src) : ''

  const seek = () => {
    if (offsetSec > 0 && Number.isFinite(el.duration) && offsetSec < el.duration - 0.25) {
      el.currentTime = offsetSec
    }
  }

  if (currentSrc !== playbackSrc) {
    el.pause()
    el.src = playbackSrc
    el.load()
    el.addEventListener('loadedmetadata', seek, { once: true })
  } else {
    el.pause()
    el.currentTime = offsetSec
    seek()
  }
}

interface PlayerState {
  status: PlayerStatus
  nowPlaying: NowPlaying
  listenerCount: number
  volume: number
  errorMessage: string | null
  currentTimeSec: number
  durationSec: number
  init: () => void
  play: () => Promise<void>
  playTrack: (trackId: string) => Promise<void>
  pause: () => void
  toggle: () => Promise<void>
  setVolume: (v: number) => void
  refreshNowPlaying: () => void
}

export const usePlayerStore = create<PlayerState>((set, get) => {
  const syncListenerPresence = (status: PlayerStatus) => {
    setListenerPresenceActive(status === 'playing' || status === 'buffering')
  }

  const transitionToIndex = (
    index: number,
    offsetSec = 0,
    startedAtUtc?: string,
    options?: { keepStatus?: boolean },
  ) => {
    setRotationState(index, offsetSec)
    const np = buildNowPlaying(index, startedAtUtc ?? new Date().toISOString())
    const status = get().status

    set({
      nowPlaying: np,
      currentTimeSec: offsetSec,
      durationSec: np.track.durationSec,
      errorMessage: null,
      status: options?.keepStatus && (status === 'playing' || status === 'buffering')
        ? 'connecting'
        : status,
    })
    applyTrackToAudio(np.track, offsetSec)
    return np
  }

  const playNextTrack = async () => {
    if (advancingTrack) return
    advancingTrack = true

    const previousId = get().nowPlaying.track.id
    const nextIndex = advanceRotation()
    const next = transitionToIndex(nextIndex, 0)

    if (next.track.id === previousId) {
      advancingTrack = false
      return
    }

    const el = getAudio()
    try {
      bindAudioAnalyser(el)
      await resumeAudioAnalyser()
      await el.play()
      set({ status: 'playing' })
    } catch {
      set({
        status: 'error',
        errorMessage: 'Signal lost. Reacquiring.',
      })
    } finally {
      advancingTrack = false
    }
  }

  return {
    status: 'idle',
    nowPlaying: (() => {
      const pos = syncRotationFromClock()
      return buildNowPlaying(pos.index, pos.trackStartedAtUtc)
    })(),
    listenerCount: 0,
    volume: loadVolume(),
    errorMessage: null,
    currentTimeSec: 0,
    durationSec: 0,

    init: () => {
      if (initialized) return
      initialized = true

      initListenerPresence((count) => {
        set({ listenerCount: count })
      })

      const el = getAudio()
      bindAudioAnalyser(el)
      const { volume } = get()
      const pos = syncRotationFromClock()
      const np = buildNowPlaying(pos.index, pos.trackStartedAtUtc)

      el.volume = volume
      applyTrackToAudio(np.track, pos.offsetSec)
      set({
        nowPlaying: np,
        durationSec: np.track.durationSec,
        currentTimeSec: pos.offsetSec,
      })

      el.addEventListener('playing', () => {
        set({ status: 'playing', errorMessage: null })
        syncListenerPresence('playing')
      })
      el.addEventListener('pause', () => {
        if (get().status !== 'connecting') {
          set({ status: 'paused' })
          syncListenerPresence('paused')
        }
      })
      el.addEventListener('waiting', () => {
        if (get().status === 'playing') set({ status: 'buffering' })
      })
      el.addEventListener('error', () => {
        set({
          status: 'error',
          errorMessage: 'Signal lost. Reacquiring.',
        })
      })
      el.addEventListener('timeupdate', () => {
        const duration = Number.isFinite(el.duration)
          ? el.duration
          : get().nowPlaying.track.durationSec

        set({
          currentTimeSec: el.currentTime,
          durationSec: duration,
        })

        if (get().status !== 'playing' || advancingTrack) return
        if (duration <= 0 || el.currentTime < duration - 0.35) return

        void playNextTrack()
      })
      el.addEventListener('loadedmetadata', () => {
        set({
          durationSec: Number.isFinite(el.duration)
            ? el.duration
            : get().nowPlaying.track.durationSec,
        })
      })
      el.addEventListener('ended', () => {
        void playNextTrack()
      })

      if (rotationTimer) clearInterval(rotationTimer)
      rotationTimer = setInterval(() => {
        if (get().status !== 'playing') return

        const localIndex = getRotationIndex()
        const clock = getClockPosition()

        if (!isBehindSchedule(clock.index, localIndex)) return

        transitionToIndex(clock.index, clock.offsetSec, clock.trackStartedAtUtc, {
          keepStatus: true,
        })
      }, 10000)
    },

    play: async () => {
      if (!canPlayStation()) {
        getAudio().pause()
        set({ status: 'idle', errorMessage: null })
        return
      }

      const el = getAudio()
      const pos = syncRotationFromClock()
      const np = transitionToIndex(pos.index, pos.offsetSec, pos.trackStartedAtUtc)

      set({ status: 'connecting', errorMessage: null, nowPlaying: np })

      try {
        bindAudioAnalyser(el)
        await resumeAudioAnalyser()
        await el.play()
        set({ status: 'playing' })
      } catch {
        set({
          status: 'error',
          errorMessage: 'Autoplay blocked. Press play to acquire signal.',
        })
      }
    },

    playTrack: async (trackId: string) => {
      if (!canPlayStation()) return

      const index = findTrackIndex(trackId)
      if (index < 0) return

      advancingTrack = false
      stopCurrentPlayback()

      const el = getAudio()
      transitionToIndex(index, 0)
      set({ status: 'connecting', errorMessage: null, currentTimeSec: 0 })

      try {
        bindAudioAnalyser(el)
        await resumeAudioAnalyser()
        await el.play()
        set({ status: 'playing' })
      } catch {
        set({
          status: 'error',
          errorMessage: 'Autoplay blocked. Press play to acquire signal.',
        })
      }
    },

    pause: () => {
      getAudio().pause()
      set({ status: 'paused' })
      syncListenerPresence('paused')
    },

    toggle: async () => {
      const { status, play, pause } = get()
      if (status === 'playing' || status === 'buffering') {
        pause()
      } else {
        await play()
      }
    },

    setVolume: (v: number) => {
      const clamped = Math.min(1, Math.max(0, v))
      getAudio().volume = clamped
      try {
        localStorage.setItem(VOLUME_KEY, String(clamped))
      } catch {
        // ignore
      }
      set({ volume: clamped })
    },

    refreshNowPlaying: () => {
      const index = getRotationIndex()
      set({ nowPlaying: buildNowPlaying(index) })
    },
  }
})
