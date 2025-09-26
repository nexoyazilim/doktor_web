import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export default function Header() {
  const { i18n } = useTranslation()
  const location = useLocation()
  function changeLang(e) { const lng = e.target.value; i18n.changeLanguage(lng); localStorage.setItem('lang', lng); }
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', localStorage.getItem('theme') === 'dark')
  }, [])

  // Sayfa değiştiğinde scroll pozisyonunu sıfırla
  useEffect(() => {
    window.scrollTo(0, 0)
    setIsHeaderVisible(true) // Header'ı göster
  }, [location.pathname])
  
  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const scrollDifference = Math.abs(currentScrollY - lastScrollY)
          
          // Minimum scroll mesafesi (3px) - daha hassas
          if (scrollDifference < 3) {
            ticking = false
            return
          }
          
          // Scroll yönü ve threshold kontrolü - büyük atlama ile
          if (currentScrollY > lastScrollY && currentScrollY > 120) {
            // Aşağıya kaydırma - header'ı gizle
            if (isHeaderVisible) {
              console.log('Hiding header')
              setIsHeaderVisible(false)
            }
          } else if (currentScrollY <= 5) {
            // Sadece sayfanın en üstünde - header'ı göster
            if (!isHeaderVisible) {
              console.log('Showing header - at top')
              setIsHeaderVisible(true)
            }
          }
          
          lastScrollY = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHeaderVisible])
  
  function toggleTheme() {
    const root = document.documentElement
    const isDark = root.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }
  return (
    <header id="masthead" className="header cmt-header-style-03" role="banner">
      <div id="site-header-menu" className="site-header-menu cmt-bgcolor-white">
        <div className={`site-header-menu-inner ${!isHeaderVisible ? 'header-hidden' : ''}`} style={{
          height: !isHeaderVisible ? '0' : 'auto',
          overflow: 'hidden',
          transition: 'height 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.2s ease-out',
          opacity: !isHeaderVisible ? 0 : 1,
          pointerEvents: !isHeaderVisible ? 'none' : 'auto'
        }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-navigation d-flex flex-row align-items-center justify-content-between">
                  <div className="site-branding">
                    <Link className="home-link" to="/" title="Dr. Doğan ŞENTÜRK" rel="home">
                      <span className="brand-name" style={{ fontWeight: 800, fontSize: '20px', color: 'var(--fg)' }}>Dr. Doğan ŞENTÜRK</span>
                    </Link>
                  </div>
                  <div className="site-menubar">
                    <Link className="cmt-btn cmt-btn-size-md cmt-btn-shape-square cmt-btn-style-fill cmt-btn-color-dark d-block d-sm-none" style={{marginRight: '50px'}} to="/randevu" rel="noopener" aria-label="icon">Randevu Al</Link>
                    <div className="btn-show-menu-mobile menubar menubar--squeeze" onClick={() => setIsMenuOpen(v => !v)}>
                      <span className="menubar-box">
                        <span className="menubar-inner"></span>
                      </span>
                    </div>
                    <div className="header_extra d-flex flex-row align-items-center justify-content-end">
                      <div className="widget_info">
                        <div className="widget_content">
                          <a href="tel:+90555 555 55 55">0555 555 55 55</a>
                          <p className="widget_desc">Bana Ulaşın</p>
                        </div>
                      </div>
                      <div className="widget_info">
                        <div className="widget_content">
                          <a href="mailto:info@demo.com">info@demo.com</a>
                          <p className="widget_desc">E-Posta Gönderin</p>
                        </div>
                      </div>
                      <div className="header_btn">
                        <Link className="cmt-btn cmt-btn-size-md cmt-btn-shape-square cmt-btn-style-fill cmt-btn-color-dark" to="/iletisim#hiza" rel="noopener" aria-label="icon">Randevu Al</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cmt-horizontal_sep"></div>
      <div className="site-header-menu-inner cmt-stickable-header">
        <div className="container"><div className="row"><div className="col">
          <div className="site-navigation d-flex justify-content-between align-items-center">
            <div className="align-self-center">
              <nav className={"main-menu menu-mobile" + (isMenuOpen ? " open" : "")} id="menu">
                <ul className="menu">
                  <li className="mega-menu-item "><Link to="/hakkimda">Hakkımda</Link></li>
                  <li className="mega-menu-item  "><Link to="/tedaviler" className="mega-menu-link">Uzmanlık Alanlarım</Link>
                    <ul className="mega-submenu">
                      <li><Link to="/tedaviler?sec=boyun-fitigi-ameliyati">Boyun Fıtığı Ameliyatı</Link></li>
                      <li><Link to="/tedaviler?sec=boyun-kanal-darligi">Boyun Kanal Darlığı</Link></li>
                      <li><Link to="/tedaviler?sec=sirt-fitigi-torakal-disk-hernisi">Sırt Fıtığı (Torakal Disk Hernisi)</Link></li>
                      <li><Link to="/tedaviler?sec=omurga-agrilarinda-enjeksiyon-tedavisi">Omurga Ağrılarında Enjeksiyon Tedavisi</Link></li>
                      <li><Link to="/tedaviler?sec=siyatik-agrisi-tedavisi">Siyatik Ağrısı Tedavisi</Link></li>
                      <li><Link to="/tedaviler?sec=omurga-tumorleri">Omurga Tümörleri</Link></li>
                      <li><Link to="/tedaviler?sec=kifoz">Kifoz</Link></li>
                      <li><Link to="/tedaviler?sec=gergin-omurilik-sendromu">Gergin Omurilik Sendromu</Link></li>
                      <li><Link to="/tedaviler?sec=cocuklarda-skolyoz">Çocuklarda Skolyoz</Link></li>
                      <li><Link to="/tedaviler?sec=eriskin-skolyoz">Erişkin Skolyoz</Link></li>
                      <li><Link to="/tedaviler?sec=beyin-tumoru">Beyin Tümörü</Link></li>
                      <li><Link to="/tedaviler?sec=beyincik-sarkmasi">Beyincik Sarkması</Link></li>
                    </ul>
                  </li>
                  <li className="mega-menu-item"><Link to="/akademik">Akademik</Link></li>
                  <li className="mega-menu-item"><Link to="/blog">Blog</Link></li>
                  <li className="mega-menu-item  "><a href="#" className="mega-menu-link">Galeri</a>
                    <ul className="mega-submenu">
                      <li><Link to="/foto-galeri">Foto Galeri</Link></li>
                      <li><Link to="/video-galeri">Videolar</Link></li>
                    </ul>
                  </li>
                  <li className="mega-menu-item "><Link to="/iletisim">İletişim</Link></li>
                </ul>
              </nav>
            </div>
            <div className="align-self-center"><div className="header_extra"><div className="widget_info"><div className="widget_content"><h3></h3></div></div></div></div>
          </div>
        </div></div></div>
      </div>
    </header>
  )
}


