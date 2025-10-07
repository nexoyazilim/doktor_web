import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n'
import Hakkimda from './pages/Hakkimda'


// Rota tanımları
const routes = [
  { path: '/', element: lazy(() => import('./pages/Home')) },
  { path: '/hakkimda', element: Hakkimda },
  { path: '/about', element: Hakkimda },
  { path: '/tedaviler', element: lazy(() => import('./pages/Tedaviler')) },
  { path: '/treatments', element: lazy(() => import('./pages/Tedaviler')) },
  { path: '/akademik', element: lazy(() => import('./pages/Akademik')) },
  { path: '/academic', element: lazy(() => import('./pages/Akademik')) },
  { path: '/blog', element: lazy(() => import('./pages/Blog')) },
  { path: '/blog/:slug', element: lazy(() => import('./pages/BlogDetail')) },
  { path: '/foto-galeri', element: lazy(() => import('./pages/FotoGaleri')) },
  { path: '/photo-gallery', element: lazy(() => import('./pages/FotoGaleri')) },
  { path: '/video-galeri', element: lazy(() => import('./pages/VideoGaleri')) },
  { path: '/video-gallery', element: lazy(() => import('./pages/VideoGaleri')) },
  { path: '/iletisim', element: lazy(() => import('./pages/Iletisim')) },
  { path: '/contact', element: lazy(() => import('./pages/Iletisim')) }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App routes={routes} />
  </StrictMode>,
)