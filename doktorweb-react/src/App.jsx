import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import routes from './routes'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Sayfa yüklendiğinde loading'i gizle
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 saniye loading göster

    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <div className="site-shell">
        {isLoading && <Loading />}
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
