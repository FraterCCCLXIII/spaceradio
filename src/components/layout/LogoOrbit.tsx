import { useEffect, useRef } from 'react'
import './LogoOrbit.css'

const SIZE = 20
const CENTER = SIZE / 2
const DOT = 2.5
const HALF = DOT / 2
const BASE_RADIUS = 6.2

const bodies = [
  { phase: 0, speed: 0.42, rx: 1, ry: 0.92 },
  { phase: (2 * Math.PI) / 3, speed: 0.36, rx: 0.94, ry: 1.04 },
  { phase: (4 * Math.PI) / 3, speed: 0.39, rx: 1.06, ry: 0.9 },
] as const

function placeBody(
  el: HTMLSpanElement,
  t: number,
  body: (typeof bodies)[number],
  angles: number[],
  index: number,
) {
  const angle = t * body.speed + body.phase
  const perturb =
    0.28 * Math.sin(angles[(index + 1) % 3] - angles[(index + 2) % 3])
  const radius = BASE_RADIUS + perturb
  const x = CENTER + Math.cos(angle) * radius * body.rx - HALF
  const y = CENTER + Math.sin(angle * 1.12) * radius * body.ry - HALF
  el.style.transform = `translate(${x}px, ${y}px)`
}

export function LogoOrbit() {
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([])
  const timeRef = useRef(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const tick = () => {
      timeRef.current += 0.011
      const t = timeRef.current
      const angles = bodies.map((body) => t * body.speed + body.phase)

      bodies.forEach((body, i) => {
        const el = dotsRef.current[i]
        if (el) placeBody(el, t, body, angles, i)
      })

      frame = requestAnimationFrame(tick)
    }

    const angles = bodies.map((body) => body.phase)
    bodies.forEach((body, i) => {
      const el = dotsRef.current[i]
      if (el) placeBody(el, 0, body, angles, i)
    })

    if (!reduced) {
      frame = requestAnimationFrame(tick)
    }

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <span className="logo-orbit" aria-hidden>
      {bodies.map((_, i) => (
        <span
          key={i}
          ref={(el) => {
            dotsRef.current[i] = el
          }}
          className="logo-orbit__body"
        />
      ))}
    </span>
  )
}
