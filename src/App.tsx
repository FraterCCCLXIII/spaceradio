import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { ListenPage } from './pages/ListenPage'
import { MissionDetailPage } from './pages/MissionDetailPage'
import { MissionsPage } from './pages/MissionsPage'
import { OriginalsPage } from './pages/OriginalsPage'
import { SponsorsPage } from './pages/SponsorsPage'
import { TransmissionDetailPage } from './pages/TransmissionDetailPage'
import { TransmissionsPage } from './pages/TransmissionsPage'

export default function App() {
  return (
    <BrowserRouter>
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
