import { useEffect, useRef } from 'react'
import {
  bindAudioAnalyser,
  readAudioWaveform,
  resumeAudioAnalyser,
} from '../../lib/audio-analyser'
import { getPlayerAudioElement, usePlayerStore } from '../../store/playerStore'
import './SineWaveVisualizer.css'

const WIDTH = 800
const SEGMENTS = 280
const STROKE_PADDING = 4
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
  height?: number
}

export function Waveform({ className = '', height = 64 }: WaveformProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const waveRef = useRef<SVGPolylineElement>(null)
  const smoothedRef = useRef<number[]>(Array.from({ length: SEGMENTS + 1 }, () => 0))
  const scrollPhaseRef = useRef(0)
  const status = usePlayerStore((s) => s.status)
  const active = status === 'playing' || status === 'buffering'

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
    const maxAmplitude = height / 2 - STROKE_PADDING
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
    <svg
      ref={svgRef}
      className={`sine-wave-viz ${className}`}
      viewBox={`0 0 ${WIDTH} ${height}`}
      preserveAspectRatio="none"
      aria-hidden
      style={{ height }}
    >
      <g transform={`translate(0, ${height / 2})`}>
        <line x1={0} x2={WIDTH} y1={0} y2={0} />
        <polyline ref={waveRef} className="sine-wave-path" />
      </g>
    </svg>
  )
}
