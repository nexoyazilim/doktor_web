import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { getLocalizedUrl, getBlogDetailUrl } from '../utils/urlHelper'
import { getImagePath } from '../utils/assetHelper'

export default function Home() {
  const { t, i18n, ready } = useTranslation()
  const blogRef = useScrollReveal()
  
  // Çeviri dosyaları yüklenene kadar bekle; global Loading mevcut, burada ekstra çıktı verme
  if (!ready) {
    return null
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
                        <h3>{t('hero.title')}</h3>
                        <h2 className="title">{t('hero.subtitle')}</h2>
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
                  <img className="profile-img" src={getImagePath('doktor_1.png')} alt="Dr. Elif YAMAN" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cmt-row blog-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 diabetes-endorinology">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  <div className="featured-thumbnail">
                    <div className="featured-thumbnail-inner">
                      <img className="portfolio-img" src={getImagePath('hizmetlerimiz_image/alnskllndrme.jpg')} alt="Yüz Estetiği" />
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
                      <img className="portfolio-img" src={getImagePath('hizmetlerimiz_image/bntdvsi.jpg')} alt="Meme Estetiği" />
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
                      <img className="portfolio-img" src={getImagePath('hizmetlerimiz_image/cltbkm.jpg')} alt="Vücut Kontürü" />
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



        <section id="blog" className="section section-alt reveal" ref={blogRef}>
          <div className="container">
            <h2 style={{ textAlign: 'center' }}>{t('blog.title')}</h2>
            <p className="section-subtitle" style={{ textAlign: 'center' }}>{t('blog.subtitle')}</p>
            <div className="grid cols-3 cards">
              <article className="card">
                <img className="blog-img" src={getImagePath('hizmetlerimiz_image/frksynellazer.jpg')} alt="Burun Estetiği" />
                <h3>{t('blog.posts.rhinoplasty.title')}</h3>
                <p>{t('blog.posts.rhinoplasty.description')}</p>
                <Link className="btn btn-outline" to={getBlogDetailUrl('burun-estetigi-dogal-gorunum', i18n.language)}>{t('blog.readMore')}</Link>
              </article>
              <article className="card">
                <img className="blog-img" src={getImagePath('hizmetlerimiz_image/alnskllndrme.jpg')} alt="Meme Estetiği" />
                <h3>{t('blog.posts.breastSurgery.title')}</h3>
                <p>{t('blog.posts.breastSurgery.description')}</p>
                <Link className="btn btn-outline" to={getBlogDetailUrl('meme-estetigi-guvenli-yontemler', i18n.language)}>{t('blog.readMore')}</Link>
              </article>
              <article className="card">
                <img className="blog-img" src={getImagePath('hizmetlerimiz_image/bntdvsi.jpg')} alt="Yaşlanma Karşıtı Estetik" />
                <h3>{t('blog.posts.antiAging.title')}</h3>
                <p>{t('blog.posts.antiAging.description')}</p>
                <Link className="btn btn-outline" to={getBlogDetailUrl('yaslanma-karsiti-estetik', i18n.language)}>{t('blog.readMore')}</Link>
              </article>
            </div>
          </div>
        </section>
        <WhatsAppButton />
        <LanguageSwitcher />
      </main>
    </div>
  )
}
