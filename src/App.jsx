import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Suspense, useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import useJSONLD from './hooks/useJSONLD'

// GitHub Pages SPA redirect handler component
function RedirectHandler() {
  const navigate = useNavigate()
  
  useEffect(() => {
    // Check if we have a stored redirect from 404.html
    const redirect = sessionStorage.redirect
    if (redirect) {
      sessionStorage.removeItem('redirect')
      navigate(redirect, { replace: true })
    }
  }, [navigate])
  
  return null
}

export default function App({ routes }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Sayfa yüklendiğinde loading'i gizle
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 saniye loading göster

    return () => clearTimeout(timer)
  }, [])

  // GitHub Pages için basename belirle (repo adi: doktor_web)
  const basename = process.env.NODE_ENV === 'production' ? '/doktor_web' : ''

  // Site geneli Organization/Physician/LocalBusiness JSON-LD
  useJSONLD('org', {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr. Elif YAMAN",
    "url": typeof window !== 'undefined' ? `${window.location.origin}${import.meta.env.BASE_URL}` : undefined,
    "image": `${typeof window !== 'undefined' ? window.location.origin : ''}${import.meta.env.BASE_URL}assets/images/doktor_1.png`,
    "telephone": "+90 535 308 44 66",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressRegion": "TR-34",
      "addressCountry": "TR"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }]
  })

  return (
    <BrowserRouter basename={import.meta.env.PROD ? '/doktor_web' : '/'}>
      <div className="site-shell">
        {isLoading && <Loading />}
        <RedirectHandler />
        <Header />
        <main className="site-content">
          <Suspense fallback={<div className="page-fallback" aria-hidden="true" /> }>
            <Routes>
              {routes.map(({ path, element: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
