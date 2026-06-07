import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { usePlayerStore } from '../../store/playerStore'
import { PlayerAppBar } from './PlayerAppBar'
import { PlayerMobileNav } from './PlayerMobileNav'
import { PlayerSidebar } from './PlayerSidebar'
import { QueuePanel } from './QueuePanel'

export function PlayerLayout() {
  const init = usePlayerStore((s) => s.init)
  const [queueOpen, setQueueOpen] = useState(false)

  useEffect(() => {
    init()
  }, [init])

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-void">
      <div className="flex min-h-0 flex-1">
        <PlayerSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <main className="scrollbar-panel min-h-0 flex-1 overflow-y-auto">
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
  )
}
