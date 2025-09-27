import { lazy } from 'react'

// Dil bazlı URL mapping
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

// Merkezileştirilmiş rota tanımları - hem Türkçe hem İngilizce URL'leri destekler
const routes = [
  // Ana sayfa
  { path: '/', element: lazy(() => import('./pages/Home')) },
  
  // Hakkımda / About
  { path: '/hakkimda', element: lazy(() => import('./pages/Hakkimda')) },
  { path: '/about', element: lazy(() => import('./pages/Hakkimda')) },
  
  // Tedaviler / Treatments
  { path: '/tedaviler', element: lazy(() => import('./pages/Tedaviler')) },
  { path: '/treatments', element: lazy(() => import('./pages/Tedaviler')) },
  
  // Akademik / Academic
  { path: '/akademik', element: lazy(() => import('./pages/Akademik')) },
  { path: '/academic', element: lazy(() => import('./pages/Akademik')) },
  
  // Blog
  { path: '/blog', element: lazy(() => import('./pages/Blog')) },
  { path: '/blog/:slug', element: lazy(() => import('./pages/BlogDetail')) },
  
  // Foto Galeri / Photo Gallery
  { path: '/foto-galeri', element: lazy(() => import('./pages/FotoGaleri')) },
  { path: '/photo-gallery', element: lazy(() => import('./pages/FotoGaleri')) },
  
  // Video Galeri / Video Gallery
  { path: '/video-galeri', element: lazy(() => import('./pages/VideoGaleri')) },
  { path: '/video-gallery', element: lazy(() => import('./pages/VideoGaleri')) },
  
  // İletişim / Contact
  { path: '/iletisim', element: lazy(() => import('./pages/Iletisim')) },
  { path: '/contact', element: lazy(() => import('./pages/Iletisim')) },
]

export default routes
