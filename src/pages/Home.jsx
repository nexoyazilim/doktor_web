import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { getLocalizedUrl, getBlogDetailUrl } from '../utils/urlHelper'
import useSEO from '../hooks/useSEO'
import useJSONLD from '../hooks/useJSONLD'

export default function Home() {
  const { t, i18n, ready } = useTranslation()
  const blogRef = useScrollReveal()
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 900 : false)
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 900)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useSEO({
    title: 'Dr. Elif YAMAN | Estetik ve Plastik Cerrahi Uzmanı',
    description: 'Burun estetiği, meme estetiği, liposuction, botoks ve dolgu uygulamaları. İstanbul Ataşehir’de uzman hekim ile kişiye özel çözümler.',
    og: {
      type: 'website',
      image: `${typeof window !== 'undefined' ? window.location.origin : ''}${import.meta.env.BASE_URL}assets/images/doktor_1.png`,
      siteName: 'Dr. Elif YAMAN',
      locale: 'tr_TR'
    },
    twitter: {
      card: 'summary_large_image'
    }
  })

  // Ana sayfa BreadcrumbList JSON-LD
  useJSONLD('breadcrumb-home', {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": typeof window !== 'undefined' ? `${window.location.origin}${import.meta.env.BASE_URL}` : undefined }
    ]
  })

  const BlogSection = (
    <section id="blog" className="section section-alt reveal" ref={blogRef}>
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>{t('blog.title')}</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>{t('blog.subtitle')}</p>
        <div className="grid cols-3 cards">
          <article className="card">
            <img className="blog-img" src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/frksynellazer.jpg`} alt="Burun Estetiği" loading="lazy" decoding="async" />
            <h3>{t('blog.posts.rhinoplasty.title')}</h3>
            <p>{t('blog.posts.rhinoplasty.description')}</p>
            <Link className="btn btn-outline" to={getBlogDetailUrl('burun-estetigi-dogal-gorunum', i18n.language)}>{t('blog.readMore')}</Link>
          </article>
          <article className="card">
            <img className="blog-img" src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/alnskllndrme.jpg`} alt="Meme Estetiği" loading="lazy" decoding="async" />
            <h3>{t('blog.posts.breastSurgery.title')}</h3>
            <p>{t('blog.posts.breastSurgery.description')}</p>
            <Link className="btn btn-outline" to={getBlogDetailUrl('meme-estetigi-guvenli-yontemler', i18n.language)}>{t('blog.readMore')}</Link>
          </article>
          <article className="card">
            <img className="blog-img" src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/bntdvsi.jpg`} alt="Yaşlanma Karşıtı Estetik" loading="lazy" decoding="async" />
            <h3>{t('blog.posts.antiAging.title')}</h3>
            <p>{t('blog.posts.antiAging.description')}</p>
            <Link className="btn btn-outline" to={getBlogDetailUrl('yaslanma-karsiti-estetik', i18n.language)}>{t('blog.readMore')}</Link>
          </article>
        </div>
      </div>
    </section>
  )
  
  // Çeviri hazır değilken iskelet içerik göster (Lighthouse Speed Index için)
  if (!ready) {
    return (
      <div className="site-main">
        <main id="main">
          <section className="cmt-row about-section-2 clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <div className="title-header">
                      <div style={{height: 28, width: '70%', background: '#eee', borderRadius: 6, marginBottom: 8}}></div>
                      <div style={{height: 22, width: '55%', background: '#f1f1f1', borderRadius: 6}}></div>
                    </div>
                    <div className="title-desc">
                      <div style={{height: 12, width: '100%', background: '#f5f5f5', borderRadius: 6, margin: '12px 0'}}></div>
                      <div style={{height: 12, width: '85%', background: '#f5f5f5', borderRadius: 6}}></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 res-991-pt-30">
                  <div className="cmt_single_image-wrapper">
                    <div style={{height: 240, width: '100%', background: '#eaeaea', borderRadius: 8}}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
  return (
    <div className="site-main">
      <main id="main">
        <section className="cmt-row about-section-2 clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row pt-20 res-991-pt-0">
                  <div className="col-lg-12">
                    <div className="section-title">
                      <div className="title-header">
                        <h1 className="title">{t('hero.title')}</h1>
                        <h2>{t('hero.subtitle')}</h2>
                      </div>
                      <div className="title-desc">
                        <p className="text-justify">{t('hero.description')}</p>

                        <Link className="cmt-btn cmt-btn-size-md cmt-btn-shape-square cmt-btn-style-fill cmt-btn-color-dark" to={getLocalizedUrl('about', i18n.language)} rel="noopener" aria-label="icon">{t('hero.cta')}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 res-991-pt-30">
                <div className="cmt_single_image-wrapper">
                  <img className="profile-img" src={`${import.meta.env.BASE_URL}assets/images/doktor_1.png`} alt="Dr. Elif YAMAN" fetchpriority="high" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cmt-row blog-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3 className="d-none">{t('site.brand')}</h3>
                    <span></span>
                    <h2 className="title" style={{ textAlign: 'center' }}>{t('treatments.title')}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-30">
              <div className="col-lg-4 col-md-6 diabetes-endorinology">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  <div className="featured-thumbnail">
                    <div className="featured-thumbnail-inner">
                      <img className="portfolio-img" src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/alnskllndrme.jpg`} alt="Yüz Estetiği" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <Link to={`${getLocalizedUrl('treatments', i18n.language)}/yuz-estetigi`}>{t('about.specializations.facial')}</Link>
                    </div>
                    <div className="featured-desc">
                      <span className="portfolio_category d-none">Dr. Elif YAMAN</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 diabetes-endorinology">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  <div className="featured-thumbnail">
                    <div className="featured-thumbnail-inner">
                      <img className="portfolio-img" src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/bntdvsi.jpg`} alt="Meme Estetiği" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <Link to={`${getLocalizedUrl('treatments', i18n.language)}/meme-estetigi`}>{t('about.specializations.breast')}</Link>
                    </div>
                    <div className="featured-desc">
                      <span className="portfolio_category d-none">Dr. Elif YAMAN</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 diabetes-endorinology">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  <div className="featured-thumbnail">
                    <div className="featured-thumbnail-inner">
                      <img className="portfolio-img" src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/cltbkm.jpg`} alt="Vücut Kontürü" loading="lazy" decoding="async" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <Link to={`${getLocalizedUrl('treatments', i18n.language)}/vucut-konturu`}>{t('about.specializations.body')}</Link>
                    </div>
                    <div className="featured-desc">
                      <span className="portfolio_category d-none">Dr. Elif YAMAN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {!isMobile && BlogSection}
        <WhatsAppButton />
        <LanguageSwitcher />
        {isMobile && BlogSection}
      </main>
    </div>
  )
}
