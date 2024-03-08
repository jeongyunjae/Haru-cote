import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import SettingsPage from './pages/SettingsPage'
import NoMatchPage from './pages/NoMatchPage'
import WatchPage from './pages/WatchPage'
import LandingPage from './pages/LandingPage'
import PickPage from './pages/PickPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='pick' element={<PickPage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='watch' element={<WatchPage />} />

        <Route path='*' element={<NoMatchPage />} />
      </Route>
    </Routes>
  )
}

export default App
