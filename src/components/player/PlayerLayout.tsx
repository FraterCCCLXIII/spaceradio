import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { PlayerLaunchBlocker } from '../launch/PlayerLaunchBlocker'
import { useLaunchCountdown } from '../../hooks/useLaunchCountdown'
import { APP_LAUNCH_MODAL_KEY } from '../../lib/launch'
import { usePlayerStore } from '../../store/playerStore'
import { PlayerAppBar } from './PlayerAppBar'
import { PlayerMobileNav } from './PlayerMobileNav'
import { PlayerSidebar } from './PlayerSidebar'
import { QueuePanel } from './QueuePanel'

export function PlayerLayout() {
  const init = usePlayerStore((s) => s.init)
  const pause = usePlayerStore((s) => s.pause)
  const launch = useLaunchCountdown()
  const [queueOpen, setQueueOpen] = useState(false)
  const [launchModalDismissed, setLaunchModalDismissed] = useState(() => {
    if (launch.live) return true
    try {
      return localStorage.getItem(APP_LAUNCH_MODAL_KEY) === '1'
    } catch {
      return false
    }
  })
  const playerLocked = !launch.live
  const uiLocked = playerLocked && !launchModalDismissed

  useEffect(() => {
    init()
  }, [init])

  useEffect(() => {
    if (playerLocked) pause()
  }, [playerLocked, pause])

  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden bg-void">
      <PlayerLaunchBlocker
        variant="app"
        onDismiss={() => setLaunchModalDismissed(true)}
      />

      <div
        className={`flex min-h-0 flex-1 flex-col ${
          uiLocked ? 'pointer-events-none select-none opacity-50' : ''
        }`}
        aria-hidden={uiLocked}
      >
        <div className="flex min-h-0 flex-1">
          <PlayerSidebar />

          <div className="flex min-w-0 flex-1 flex-col">
            <main className="scroll-panel min-h-0 flex-1">
              <Outlet />
            </main>
            <PlayerMobileNav />
          </div>

          <QueuePanel open={queueOpen} onClose={() => setQueueOpen(false)} />
        </div>

        <PlayerAppBar
          queueOpen={queueOpen}
          onToggleQueue={() => setQueueOpen((o) => !o)}
        />
      </div>
    </div>
  )
}
