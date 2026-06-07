import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { usePlayerStore } from '../../store/playerStore'
import { GlobalPlayerBar } from '../player/GlobalPlayerBar'
import { Footer } from './Footer'
import { SiteNav } from './SiteNav'

export function Layout() {
  const init = usePlayerStore((s) => s.init)
  const location = useLocation()
  const hideBar = location.pathname === '/listen' || location.pathname === '/'
  const isHome = location.pathname === '/'

  useEffect(() => {
    init()
  }, [init])

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteNav />
      <main className={`flex-1 ${hideBar ? '' : 'pb-20'} ${isHome ? '' : 'pt-14 lg:pt-16'}`}>
        <Outlet />
      </main>
      {!hideBar && <GlobalPlayerBar />}
      <Footer />
    </div>
  )
}
