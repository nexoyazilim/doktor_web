import { lazy } from 'react'

// Merkezileştirilmiş rota tanımları (işlev değişmeden korunur)
const routes = [
  { path: '/', element: lazy(() => import('./pages/Home')) },
  { path: '/hakkimda', element: lazy(() => import('./pages/Hakkimda')) },
  { path: '/tedaviler', element: lazy(() => import('./pages/Tedaviler')) },
  { path: '/tani-tedavi', element: lazy(() => import('./pages/TaniTedavi')) },
  { path: '/akademik', element: lazy(() => import('./pages/Akademik')) },
  { path: '/blog', element: lazy(() => import('./pages/Blog')) },
  { path: '/foto-galeri', element: lazy(() => import('./pages/FotoGaleri')) },
  // Mevcut yol yazımı korunur (işlevi değiştirmemek için)
  { path: '/video-galeri', element: lazy(() => import('./pages/VideoGaleri')) },
  { path: '/iletisim', element: lazy(() => import('./pages/Iletisim')) },
  { path: '/randevu', element: lazy(() => import('./pages/Randevu')) },
]

export default routes
