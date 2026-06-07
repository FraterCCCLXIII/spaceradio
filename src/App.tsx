import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { PlayerLayout } from './components/player/PlayerLayout'
import { AppBrowsePage } from './pages/app/AppBrowsePage'
import { AppLibraryPage } from './pages/app/AppLibraryPage'
import { AppMissionDetailPage } from './pages/app/AppMissionDetailPage'
import { AppMissionsPage } from './pages/app/AppMissionsPage'
import { AppNowPlayingPage } from './pages/app/AppNowPlayingPage'
import { AppStationPage } from './pages/app/AppStationPage'
import { AppTransmissionDetailPage } from './pages/app/AppTransmissionDetailPage'
import { AppTransmissionsPage } from './pages/app/AppTransmissionsPage'
import { HomePage } from './pages/HomePage'
import { ListenPage } from './pages/ListenPage'
import { MissionDetailPage } from './pages/MissionDetailPage'
import { MissionsPage } from './pages/MissionsPage'
import { OriginalsPage } from './pages/OriginalsPage'
import { SponsorsPage } from './pages/SponsorsPage'
import { TeamPage } from './pages/TeamPage'
import { ManifestoPage } from './pages/ManifestoPage'
import { ProgramPage } from './pages/ProgramPage'
import { WhitepaperPage } from './pages/WhitepaperPage'
import { TransmissionDetailPage } from './pages/TransmissionDetailPage'
import { TransmissionsPage } from './pages/TransmissionsPage'

function routerBasename(): string | undefined {
  const base = import.meta.env.BASE_URL ?? '/'
  const trimmed = base.replace(/\/$/, '')
  return trimmed === '' || trimmed === '.' ? undefined : trimmed
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="listen" element={<ListenPage />} />
          <Route path="missions" element={<MissionsPage />} />
          <Route path="missions/:slug" element={<MissionDetailPage />} />
          <Route path="originals" element={<OriginalsPage />} />
          <Route path="transmissions" element={<TransmissionsPage />} />
          <Route path="transmissions/:id" element={<TransmissionDetailPage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="manifesto" element={<ManifestoPage />} />
          <Route path="program" element={<ProgramPage />} />
          <Route path="program/:slug" element={<WhitepaperPage />} />
        </Route>

        <Route path="app" element={<PlayerLayout />}>
          <Route index element={<AppStationPage />} />
          <Route path="now-playing" element={<AppNowPlayingPage />} />
          <Route path="library" element={<AppLibraryPage />} />
          <Route path="browse" element={<AppBrowsePage />} />
          <Route path="missions" element={<AppMissionsPage />} />
          <Route path="missions/:slug" element={<AppMissionDetailPage />} />
          <Route path="transmissions" element={<AppTransmissionsPage />} />
          <Route path="transmissions/:id" element={<AppTransmissionDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
