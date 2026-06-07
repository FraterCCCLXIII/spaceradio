import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import './SineWaveVisualizer.css'

const WIDTH = 800
const AMPLITUDE = 30
const FREQUENCY = 10
const SEGMENTS = 400
const INTERVAL = WIDTH / SEGMENTS

/** Sinus curve approximating CodePen CustomEase("sinus", ...) */
function sinusRatio(norm: number): number {
  return Math.sin(norm * Math.PI)
}

interface WaveformProps {
  className?: string
  height?: number
}

export function Waveform({ className = '', height = 64 }: WaveformProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const waveRef = useRef<SVGPolylineElement>(null)
  const tweensRef = useRef<gsap.core.Tween[]>([])

  useEffect(() => {
    const svg = svgRef.current
    const wave = waveRef.current
    if (!svg || !wave) return

    let cancelled = false
    const frame = requestAnimationFrame(() => {
      if (cancelled) return

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      tweensRef.current.forEach((t) => t.kill())
      tweensRef.current = []

      while (wave.points.length > 0) {
        wave.points.removeItem(0)
      }

      for (let i = 0; i <= SEGMENTS; i++) {
        const norm = 1 - i / SEGMENTS
        const point = wave.points.appendItem(svg.createSVGPoint())
        point.x = i * INTERVAL
        point.y = (AMPLITUDE / 2) * sinusRatio(norm)

        if (!reduced) {
          const tween = gsap.to(point, {
            y: -point.y,
            duration: 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
          tween.progress(norm * FREQUENCY)
          tweensRef.current.push(tween)
        }
      }
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      tweensRef.current.forEach((t) => t.kill())
      tweensRef.current = []
    }
  }, [height])

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
