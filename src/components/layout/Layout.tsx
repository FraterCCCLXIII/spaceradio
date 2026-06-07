import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useLaunchCountdown } from '../../hooks/useLaunchCountdown'
import { usePlayerStore } from '../../store/playerStore'
import { GlobalPlayerBar } from '../player/GlobalPlayerBar'
import { Footer } from './Footer'
import { SiteNav } from './SiteNav'

export function Layout() {
  const init = usePlayerStore((s) => s.init)
  const pause = usePlayerStore((s) => s.pause)
  const launch = useLaunchCountdown()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [homePastHero, setHomePastHero] = useState(false)

  useEffect(() => {
    init()
  }, [init])

  useEffect(() => {
    if (!launch.live) pause()
  }, [launch.live, pause])

  useEffect(() => {
    if (!isHome) {
      setHomePastHero(false)
      return
    }

    const hero = document.getElementById('hero')
    if (!hero) {
      setHomePastHero(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHomePastHero(!entry.isIntersecting),
      { threshold: 0 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [isHome])

  const barVisible = isHome ? homePastHero : true

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteNav />
      <main
        className={`flex-1 ${barVisible ? 'pb-20' : ''} ${isHome ? '' : 'pt-14 lg:pt-16'}`}
      >
        <Outlet />
      </main>
      <GlobalPlayerBar visible={barVisible} />
      <Footer />
    </div>
  )
}
