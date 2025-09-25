import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          {routes.map(({ path, element: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
