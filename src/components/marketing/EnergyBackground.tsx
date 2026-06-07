import type { CSSProperties } from 'react'
import './EnergyBackground.css'

const ORBS = [
  { clr: '#fbad04', i: '18px', d: '2.5s' },
  { clr: '#03a1d9', i: '13px', d: '5s' },
  { clr: '#f7036d', i: '15px', d: '7.5s' },
  { clr: '#93ff16', i: '20px', d: '2.5s' },
] as const

export function EnergyBackground() {
  return (
    <div className="energy-bg" aria-hidden>
      <div className="energy">
        {ORBS.map((orb) => (
          <span
            key={orb.clr}
            style={
              {
                '--clr': orb.clr,
                '--i': orb.i,
                '--d': orb.d,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}
