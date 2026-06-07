import { create } from 'zustand'
import {
  advanceRotation,
  buildNowPlaying,
  getRotationIndex,
} from '../lib/demo-data'
import type { NowPlaying, PlayerStatus } from '../lib/types'

const VOLUME_KEY = 'spaceradio-volume'

function loadVolume(): number {
  const stored = localStorage.getItem(VOLUME_KEY)
  if (stored) {
    const v = parseFloat(stored)
    if (!Number.isNaN(v) && v >= 0 && v <= 1) return v
  }
  return 0.75
}

let audio: HTMLAudioElement | null = null
let rotationTimer: ReturnType<typeof setInterval> | null = null

function getAudio(): HTMLAudioElement {
  if (!audio) {
    audio = new Audio()
    audio.crossOrigin = 'anonymous'
  }
  return audio
}

interface PlayerState {
  status: PlayerStatus
  nowPlaying: NowPlaying
  volume: number
  errorMessage: string | null
  init: () => void
  play: () => Promise<void>
  pause: () => void
  toggle: () => Promise<void>
  setVolume: (v: number) => void
  refreshNowPlaying: () => void
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  status: 'idle',
  nowPlaying: buildNowPlaying(getRotationIndex()),
  volume: loadVolume(),
  errorMessage: null,

  init: () => {
    const el = getAudio()
    const { volume, nowPlaying } = get()

    el.volume = volume
    el.src = nowPlaying.track.demoAudioUrl

    el.addEventListener('playing', () => {
      set({ status: 'playing', errorMessage: null })
    })
    el.addEventListener('pause', () => {
      if (get().status !== 'connecting') {
        set({ status: 'paused' })
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
    el.addEventListener('ended', () => {
      const idx = advanceRotation()
      const np = buildNowPlaying(idx)
      set({ nowPlaying: np, status: 'connecting' })
      el.src = np.track.demoAudioUrl
      void el.play().catch(() => {
        set({ status: 'error', errorMessage: 'Signal lost. Reacquiring.' })
      })
    })

    if (rotationTimer) clearInterval(rotationTimer)
    rotationTimer = setInterval(() => {
      if (get().status === 'playing') {
        set({ nowPlaying: buildNowPlaying(getRotationIndex()) })
      }
    }, 15000)
  },

  play: async () => {
    const el = getAudio()
    const { nowPlaying } = get()
    set({ status: 'connecting', errorMessage: null })

    if (el.src !== nowPlaying.track.demoAudioUrl) {
      el.src = nowPlaying.track.demoAudioUrl
    }

    try {
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
    localStorage.setItem(VOLUME_KEY, String(clamped))
    set({ volume: clamped })
  },

  refreshNowPlaying: () => {
    set({ nowPlaying: buildNowPlaying(getRotationIndex()) })
  },
}))
