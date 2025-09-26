import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
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
