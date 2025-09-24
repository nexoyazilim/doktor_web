import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Hakkimda from './pages/Hakkimda'
import Tedaviler from './pages/Tedaviler'
import TaniTedavi from './pages/TaniTedavi'
import Akademik from './pages/Akademik'
import Blog from './pages/Blog'
import FotoGaleri from './pages/FotoGaleri'
import VideoGaleri from './pages/VideoGaleri'
import Iletisim from './pages/Iletisim'
import Randevu from './pages/Randevu'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/tedaviler" element={<Tedaviler />} />
        <Route path="/tani-tedavi" element={<TaniTedavi />} />
        <Route path="/akademik" element={<Akademik />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/foto-galeri" element={<FotoGaleri />} />
        <Route path="/videol-galeri" element={<VideoGaleri />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/randevu" element={<Randevu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
