import { useEffect, useState } from 'react'
import { getLaunchCountdown, type LaunchCountdown } from '../lib/launch'

export function useLaunchCountdown(): LaunchCountdown {
  const [countdown, setCountdown] = useState<LaunchCountdown>(() => getLaunchCountdown())

  useEffect(() => {
    const tick = () => setCountdown(getLaunchCountdown())
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return countdown
}
