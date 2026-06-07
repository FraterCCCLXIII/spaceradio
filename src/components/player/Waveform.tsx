import { useEffect, useId, useRef } from 'react'
import {
  bindAudioAnalyser,
  readAudioWaveform,
  resumeAudioAnalyser,
} from '../../lib/audio-analyser'
import { getPlayerAudioElement, usePlayerStore } from '../../store/playerStore'
import './SineWaveVisualizer.css'

const WIDTH = 800
const SEGMENTS = 280
const VIEW_PAD_Y = 16
const STROKE_PADDING = 6
const AMPLITUDE_SCALE = 0.62
const INTERVAL = WIDTH / SEGMENTS
const SMOOTHING = 0.55
const SENSITIVITY = 2.1
const NEIGHBOR_RADIUS = 1
const SCROLL_SPEED = 0.006

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function smoothNeighbors(samples: number[], radius: number): number[] {
  return samples.map((_, index) => {
    let sum = 0
    let count = 0

    for (let offset = -radius; offset <= radius; offset++) {
      const neighbor = index + offset
      if (neighbor < 0 || neighbor >= samples.length) continue
      sum += samples[neighbor]
      count++
    }

    return count > 0 ? sum / count : 0
  })
}

interface WaveformProps {
  className?: string
  /** Height of the oscillation area; canvas adds vertical padding for stroke bleed. */
  height?: number
}

export function Waveform({ className = '', height = 64 }: WaveformProps) {
  const reactId = useId().replace(/:/g, '')
  const gradientId = `wave-gradient-${reactId}`

  const svgRef = useRef<SVGSVGElement>(null)
  const waveRef = useRef<SVGPolylineElement>(null)
  const smoothedRef = useRef<number[]>(Array.from({ length: SEGMENTS + 1 }, () => 0))
  const scrollPhaseRef = useRef(0)
  const status = usePlayerStore((s) => s.status)
  const active = status === 'playing' || status === 'buffering'

  const canvasHeight = height + VIEW_PAD_Y * 2
  const centerY = canvasHeight / 2

  useEffect(() => {
    const svg = svgRef.current
    const wave = waveRef.current
    if (!svg || !wave) return

    while (wave.points.length > 0) {
      wave.points.removeItem(0)
    }

    for (let i = 0; i <= SEGMENTS; i++) {
      const point = wave.points.appendItem(svg.createSVGPoint())
      point.x = i * INTERVAL
      point.y = 0
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const maxAmplitude = (height / 2 - STROKE_PADDING) * AMPLITUDE_SCALE
    let frameId = 0

    const draw = () => {
      if (active && !reduced) {
        scrollPhaseRef.current = (scrollPhaseRef.current + SCROLL_SPEED) % 1
      } else {
        scrollPhaseRef.current *= 0.92
      }

      const raw = active && !reduced
        ? readAudioWaveform(SEGMENTS + 1, scrollPhaseRef.current)
        : Array.from({ length: SEGMENTS + 1 }, () => 0)
      const targets = smoothNeighbors(
        raw.map((sample) => sample * SENSITIVITY),
        NEIGHBOR_RADIUS,
      )
      const smoothed = smoothedRef.current
      const blend = active ? SMOOTHING : SMOOTHING * 0.75

      for (let i = 0; i <= SEGMENTS; i++) {
        smoothed[i] += (targets[i] - smoothed[i]) * blend

        const point = wave.points.getItem(i)
        if (!point) continue
        point.y = clamp(smoothed[i] * maxAmplitude, -maxAmplitude, maxAmplitude)
      }

      frameId = requestAnimationFrame(draw)
    }

    if (active) {
      void resumeAudioAnalyser()
    }

    frameId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [active, height])

  useEffect(() => {
    if (!active) return

    bindAudioAnalyser(getPlayerAudioElement())
    void resumeAudioAnalyser()
  }, [active])

  return (
    <div
      className={`sine-wave-viz-wrap ${className}`}
      style={{ height: canvasHeight }}
    >
      <svg
        ref={svgRef}
        className="sine-wave-viz"
        viewBox={`0 0 ${WIDTH} ${canvasHeight}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1={0}
            y1={0}
            x2={WIDTH}
            y2={0}
          >
            <stop offset="0%" stopColor="#e8e8e6" stopOpacity="0" />
            <stop offset="12%" stopColor="#e8e8e6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#e8e8e6" stopOpacity="1" />
            <stop offset="88%" stopColor="#e8e8e6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e8e8e6" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g transform={`translate(0, ${centerY})`}>
          <polyline
            ref={waveRef}
            className="sine-wave-path"
            stroke={`url(#${gradientId})`}
          />
        </g>
      </svg>
    </div>
  )
}
