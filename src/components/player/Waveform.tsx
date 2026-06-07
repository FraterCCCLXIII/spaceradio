import { useEffect, useRef } from 'react'
import { usePlayerStore } from '../../store/playerStore'

const BAR_COUNT = 48

export function Waveform({ className = '' }: { className?: string }) {
  const status = usePlayerStore((s) => s.status)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const active = status === 'playing' || status === 'buffering'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const draw = (t: number) => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const barW = width / BAR_COUNT - 2
      for (let i = 0; i < BAR_COUNT; i++) {
        const base = 0.15 + Math.sin(i * 0.4) * 0.08
        const anim = active && !reduced
          ? Math.abs(Math.sin(t * 0.003 + i * 0.35)) * 0.7
          : base * 0.5
        const h = (base + anim) * height
        const x = i * (barW + 2)
        const y = (height - h) / 2

        const gradient = ctx.createLinearGradient(0, y, 0, y + h)
        gradient.addColorStop(0, '#5ec8e8')
        gradient.addColorStop(1, '#e8b84a')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.roundRect(x, y, barW, h, 2)
        ctx.fill()
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(frameRef.current)
  }, [active])

  return (
    <canvas
      ref={canvasRef}
      width={480}
      height={64}
      className={`h-16 w-full max-w-md ${className}`}
      aria-hidden
    />
  )
}
