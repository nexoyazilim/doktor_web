import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { getLocalizedUrl, getTreatmentUrl } from '../utils/urlHelper'

export default function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  function changeLang(e) { const lng = e.target.value; i18n.changeLanguage(lng); localStorage.setItem('lang', lng); document.documentElement.setAttribute('lang', lng) }
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 992 : false)
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', localStorage.getItem('theme') === 'dark')
    // Başlangıçta html lang özniteliğini aktif dile ayarla
    document.documentElement.setAttribute('lang', i18n.language)
    const onResize = () => setIsMobile(window.innerWidth < 992)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Dil değiştiğinde html lang özniteliğini güncelle
  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

  // Sayfa değiştiğinde scroll pozisyonunu sıfırla ve menüyü kapat
  useEffect(() => {
    window.scrollTo(0, 0)
    setIsHeaderVisible(true) // Header'ı göster
    setIsMenuOpen(false) // Mobil menüyü kapat
  }, [location.pathname])
  
  // Scroll'a bağlı header gizleme devre dışı

  // Mobil menü açıkken arka plan kaymasını kilitle
  useEffect(() => {
    if (typeof window === 'undefined') return
    const body = document.body
    if (isMenuOpen && window.innerWidth < 900) {
      const scrollY = window.scrollY
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'
      body.style.overflow = 'hidden'
    } else {
      // eski konuma dön
      const top = body.style.top
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''
      if (top) {
        const y = parseInt(top || '0', 10) * -1
        window.scrollTo(0, y)
      }
    }
  }, [isMenuOpen])
  
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
          overflow: !isHeaderVisible ? 'hidden' : 'visible',
          transition: 'height 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.2s ease-out',
          opacity: !isHeaderVisible ? 0 : 1,
          pointerEvents: !isHeaderVisible ? 'none' : 'auto'
        }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-navigation d-flex flex-row align-items-center justify-content-between" style={{ flexWrap: 'nowrap' }}>
                  <div className="site-branding" style={{ flexShrink: 0, maxWidth: '60%' }}>
                    <Link className="home-link" to={getLocalizedUrl('home', i18n.language)} title={t('site.brand')} rel="home" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <img src={`${import.meta.env.BASE_URL}assets/images/doktor_logo.png`} alt={t('site.brand')} className="logo-img" style={{ height: '100px', width: 'auto', maxHeight: 'none', display: 'inline-block' }} fetchpriority="high" decoding="async" />
                      <span className="brand-name" style={{fontSize: '20px', fontWeight: '600'}}>{t('site.brand')}</span>
                    </Link>
                  </div>
                  <div className="site-menubar" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                    <Link className="cmt-btn cmt-btn-size-md cmt-btn-shape-square cmt-btn-style-fill cmt-btn-color-dark d-block d-sm-none" style={{marginRight: '40px'}} to={`${getLocalizedUrl('contact', i18n.language)}#appointment`} rel="noopener" aria-label="Randevu Al">{t('nav.appointment')}</Link>
                    <div className={"btn-show-menu-mobile menubar menubar--squeeze" + (isMenuOpen ? " is-active" : "")} onClick={() => setIsMenuOpen(v => !v)}>
                      <span className="menubar-box">
                        <span className="menubar-inner"></span>
                      </span>
                    </div>
                    <div className="header_extra d-flex flex-row align-items-center justify-content-end">
                      <div className="widget_info">
                        <div className="widget_content">
                          <a href="tel:+905353084466" aria-label="Telefon ara: 0535 308 44 66" onClick={() => window.gtag && window.gtag('event', 'click', { event_category: 'contact', event_label: 'phone' })}>0535 308 44 66</a>
                          <p className="widget_desc">{t('contact.phone')}</p>
                        </div>
                      </div>
                      <div className="widget_info">
                        <div className="widget_content">
                          <a href="mailto:info@demo.com" aria-label="E-posta gönder: info@demo.com" onClick={() => window.gtag && window.gtag('event', 'click', { event_category: 'contact', event_label: 'email' })}>info@demo.com</a>
                          <p className="widget_desc">{t('contact.email')}</p>
                        </div>
                      </div>
                      <div className="header_btn">
                        <Link className="cmt-btn cmt-btn-size-md cmt-btn-shape-square cmt-btn-style-fill cmt-btn-color-dark" to={`${getLocalizedUrl('contact', i18n.language)}#appointment`} rel="noopener" aria-label="Randevu Al">{t('nav.appointment')}</Link>
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
              <nav className={"main-menu nav" + (isMenuOpen ? " open" : " ")} id="menu">
                <ul className="menu">
                  <li className="mega-menu-item "><Link to={getLocalizedUrl('about', i18n.language)}>{t('nav.about')}</Link></li>
                  <li className={"mega-menu-item specialties-menu" + (isTreatmentsOpen ? " open" : " ")}
                    onMouseEnter={() => { if (window.innerWidth >= 992) setIsTreatmentsOpen(true) }}
                    onMouseLeave={() => { if (window.innerWidth >= 992) setIsTreatmentsOpen(false) }}
                  >
                    <Link to={getLocalizedUrl('treatments', i18n.language)} className="mega-menu-link" aria-expanded={isTreatmentsOpen}
                      onClick={(e) => {
                        if (window.innerWidth < 992) {
                          e.preventDefault()
                          setIsTreatmentsOpen(v => !v)
                        }
                      }}
                    >
                      {t('nav.specialties')}
                    </Link>
                    <ul className={"mega-submenu" + (isTreatmentsOpen ? " open" : "")}>
                      <li><Link to={getTreatmentUrl('burun-estetigi-rinoplasti', i18n.language)}>{t('nav.treatments.rhinoplasty')}</Link></li>
                      <li><Link to={getTreatmentUrl('meme-buyutme', i18n.language)}>{t('nav.treatments.breastAugmentation')}</Link></li>
                      <li><Link to={getTreatmentUrl('meme-kucultme', i18n.language)}>{t('nav.treatments.breastReduction')}</Link></li>
                      <li><Link to={getTreatmentUrl('liposuction-yag-aldirma', i18n.language)}>{t('nav.treatments.liposuction')}</Link></li>
                      <li><Link to={getTreatmentUrl('karin-germe-abdominoplasti', i18n.language)}>{t('nav.treatments.tummyTuck')}</Link></li>
                      <li><Link to={getTreatmentUrl('yuz-germe', i18n.language)}>{t('nav.treatments.facelift')}</Link></li>
                      <li><Link to={getTreatmentUrl('goz-kapagi-estetigi', i18n.language)}>{t('nav.treatments.eyelidSurgery')}</Link></li>
                      <li><Link to={getTreatmentUrl('botoks-uygulamasi', i18n.language)}>{t('nav.treatments.botox')}</Link></li>
                      <li><Link to={getTreatmentUrl('dolgu-uygulamasi', i18n.language)}>{t('nav.treatments.filler')}</Link></li>
                      <li><Link to={getTreatmentUrl('sac-ekimi', i18n.language)}>{t('nav.treatments.hairTransplant')}</Link></li>
                      <li><Link to={getTreatmentUrl('meme-diklestirme', i18n.language)}>{t('nav.treatments.breastLift')}</Link></li>
                      <li><Link to={getTreatmentUrl('vucut-konturu', i18n.language)}>{t('nav.treatments.bodyContouring')}</Link></li>
                    </ul>
                  </li>
                  <li className="mega-menu-item"><Link to={getLocalizedUrl('academic', i18n.language)}>{t('nav.academic')}</Link></li>
                  <li className="mega-menu-item"><Link to={getLocalizedUrl('blog', i18n.language)}>{t('nav.blog')}</Link></li>
                  {isMobile ? (
                    <>
                      <li className="mega-menu-item"><Link to={getLocalizedUrl('photoGallery', i18n.language)}>{t('gallery.photo.title')}</Link></li>
                      <li className="mega-menu-item"><Link to={getLocalizedUrl('videoGallery', i18n.language)}>{t('gallery.video.title')}</Link></li>
                    </>
                  ) : (
                    <li className={"mega-menu-item" + (isGalleryOpen ? " open" : " ")}>
                      <a href="#" className="mega-menu-link" aria-expanded={isGalleryOpen}
                        onClick={(e) => {
                        e.preventDefault()
                        setIsGalleryOpen(v => !v)
                      }}>
                      {t('nav.gallery')}
                      </a>
                      <ul className={"mega-submenu" + (isGalleryOpen ? " open" : "") } aria-hidden={!isGalleryOpen}>
                        <li><Link to={getLocalizedUrl('photoGallery', i18n.language)} className="submenu-link">{t('gallery.photo.title')}</Link></li>
                        <li><Link to={getLocalizedUrl('videoGallery', i18n.language)} className="submenu-link">{t('gallery.video.title')}</Link></li>
                      </ul>
                    </li>
                  )}
                  <li className="mega-menu-item "><Link to={getLocalizedUrl('contact', i18n.language)}>{t('nav.contact')}</Link></li>
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


