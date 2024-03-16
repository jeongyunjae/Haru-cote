import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from './components/Layout'
import FallbackPage from './pages/FallbackPage'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  })

  const LandingPage = lazy(() => import('./pages/LandingPage'))
  const PickPage = lazy(() => import('./pages/PickPage'))
  const WatchPage = lazy(() => import('./pages/WatchPage'))
  const SettingsPage = lazy(() => import('./pages/SettingsPage'))
  const NoMatchPage = lazy(() => import('./pages/NoMatchPage'))

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<FallbackPage />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='pick' element={<PickPage />} />
            <Route path='settings' element={<SettingsPage />} />
            <Route path='watch' element={<WatchPage />} />
            <Route path='*' element={<NoMatchPage />} />
          </Route>
        </Routes>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
