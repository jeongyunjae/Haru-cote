import { Route, Routes } from 'react-router-dom'
import Icon from './components/Icon/icon'
import Layout from './components/Layout'
import PicksPage from './pages/PicksPage'
import SettingsPage from './pages/SettingsPage'
import TimerPage from './pages/TimerPage'
import NoMatchPage from './pages/NoMatchPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PicksPage />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='timer' element={<TimerPage />} />

        <Route path='*' element={<NoMatchPage />} />
      </Route>
    </Routes>
  )
}

export default App
