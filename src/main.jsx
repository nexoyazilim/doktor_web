import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n'

// CSS imports
import '../public/assets/css/vendor/framework.css'
import '../public/assets/css/vendor/layout.css'
import '../public/assets/css/vendor/components.css'
import '../public/assets/css/vendor/navigation.css'
import '../public/assets/css/vendor/icons.css'
import '../public/assets/css/vendor/animations.css'
import '../public/assets/css/vendor/slider.css'
import '../public/assets/css/vendor/gallery.css'
import '../public/assets/css/vendor/lightbox.css'
import '../public/assets/css/vendor/mobile.css'
import '../public/assets/css/vendor/chat.css'
import '../public/assets/css/vendor/comparison.css'
import '../public/assets/css/vendor/custom-icons.css'
import '../public/assets/css/vendor/themify.css'
import '../public/assets/css/custom.css'


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

// GA4 + Consent Mode v2
if (typeof window !== 'undefined') {
  const gaId = import.meta.env.VITE_GA_ID
  if (gaId && !window.dataLayer) {
    window.dataLayer = window.dataLayer || []
    function gtag(){ window.dataLayer.push(arguments) }
    window.gtag = gtag
    gtag('consent', 'default', {
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'ad_storage': 'denied',
      'analytics_storage': 'granted'
    })
    gtag('js', new Date())
    gtag('config', gaId)
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(s)
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App routes={routes} />
  </StrictMode>,
)