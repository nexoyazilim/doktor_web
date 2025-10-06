import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n'

// Dil bazlı URL mapping (gerekliyse dışarı aktarılabilir)
export const urlMappings = {
  tr: {
    home: '/',
    about: '/hakkimda',
    treatments: '/tedaviler',
    academic: '/akademik',
    blog: '/blog',
    blogDetail: '/blog/:slug',
    photoGallery: '/foto-galeri',
    videoGallery: '/video-galeri',
    contact: '/iletisim'
  },
  en: {
    home: '/',
    about: '/about',
    treatments: '/treatments',
    academic: '/academic',
    blog: '/blog',
    blogDetail: '/blog/:slug',
    photoGallery: '/photo-gallery',
    videoGallery: '/video-gallery',
    contact: '/contact'
  }
}

// Rota tanımları
const routes = [
  { path: '/', element: lazy(() => import('./pages/Home')) },
  { path: '/hakkimda', element: lazy(() => import('./pages/Hakkimda')) },
  { path: '/about', element: lazy(() => import('./pages/Hakkimda')) },
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