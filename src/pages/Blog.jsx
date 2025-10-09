import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { getBlogDetailUrl } from '../utils/urlHelper'
import useSEO from '../hooks/useSEO'
import useJSONLD from '../hooks/useJSONLD'

export default function Blog() {
  const { t, i18n } = useTranslation()
  useSEO({
    title: 'Blog | Dr. Elif YAMAN',
    description: 'Estetik ve plastik cerrahi üzerine bilgilendirici yazılar ve güncel içerikler.',
    og: {
      type: 'website',
      image: `${typeof window !== 'undefined' ? window.location.origin : ''}${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/alnskllndrme.jpg`,
      siteName: 'Dr. Elif YAMAN',
      locale: 'tr_TR'
    },
    twitter: { card: 'summary_large_image' }
  })

  // Blog sayfası için BreadcrumbList JSON-LD
  useJSONLD('breadcrumb-blog', {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": typeof window !== 'undefined' ? `${window.location.origin}${import.meta.env.BASE_URL}` : undefined },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": typeof window !== 'undefined' ? `${window.location.origin}${import.meta.env.BASE_URL}blog` : undefined }
    ]
  })
  return (
    <div className="site-main">
      {/* Blog Page Header */}
      <div className="cmt-page-title-row-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-wrapper-inner">
                <span>
                  <a title={t('blogDetail.breadcrumb.home')} href={import.meta.env.BASE_URL}>{t('blogDetail.breadcrumb.home')}</a>
                </span>
                <span>{t('blogPage.title')}</span>
              </div>
              <h1 className="page-title" style={{marginTop: '12px'}}>{t('blogPage.title')}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="cmt-row blog-section">
          <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/alnskllndrme.jpg`} alt="Burun Estetiği" loading="lazy" decoding="async" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">{t('blogPage.categories.facial')}</div>
                      <div className="featured-title">
                        <h3><Link to={getBlogDetailUrl('burun-estetigi-dogal-gorunum', i18n.language)}>{t('blogPage.posts.rhinoplasty.title')}</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>{t('blogPage.posts.rhinoplasty.description')}</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to={getBlogDetailUrl('burun-estetigi-dogal-gorunum', i18n.language)}>{t('blogPage.posts.rhinoplasty.readMore')}</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/cltbkm.jpg`} alt="Liposuction" loading="lazy" decoding="async" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">{t('blogPage.categories.body')}</div>
                      <div className="featured-title">
                        <h3><Link to={getBlogDetailUrl('liposuction-vucut-sekillendirme', i18n.language)}>{t('blogPage.posts.liposuction.title')}</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>{t('blogPage.posts.liposuction.description')}</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to={getBlogDetailUrl('liposuction-vucut-sekillendirme', i18n.language)}>{t('blogPage.posts.liposuction.readMore')}</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/bntdvsi.jpg`} alt="Estetik Cerrahi Riskleri" loading="lazy" decoding="async" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">{t('blogPage.categories.surgery')}</div>
                      <div className="featured-title">
                        <h3><Link to={getBlogDetailUrl('estetik-cerrahi-iyilesme', i18n.language)}>{t('blogPage.posts.surgeryRisks.title')}</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>{t('blogPage.posts.surgeryRisks.description')}</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to={getBlogDetailUrl('estetik-cerrahi-iyilesme', i18n.language)}>{t('blogPage.posts.surgeryRisks.readMore')}</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/frksynellazer.jpg`} alt="Saç Ekimi" loading="lazy" decoding="async" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">{t('blogPage.categories.hair')}</div>
                      <div className="featured-title">
                        <h3><Link to={getBlogDetailUrl('sac-ekimi-teknikler', i18n.language)}>{t('blogPage.posts.hairTransplant.title')}</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>{t('blogPage.posts.hairTransplant.description')}</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to={getBlogDetailUrl('sac-ekimi-teknikler', i18n.language)}>{t('blogPage.posts.hairTransplant.readMore')}</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/bntdvsi.jpg`} alt="Estetik Cerrahi İyileşme" loading="lazy" decoding="async" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">{t('blogPage.categories.brain')}</div>
                      <div className="featured-title">
                        <h3><Link to={getBlogDetailUrl('estetik-cerrahi-iyilesme', i18n.language)}>{t('blogPage.posts.recovery.title')}</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>{t('blogPage.posts.recovery.description')}</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to={getBlogDetailUrl('estetik-cerrahi-iyilesme', i18n.language)}>{t('blogPage.posts.recovery.readMore')}</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src={`${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/frksynellazer.jpg`} alt="Yaşlanma Karşıtı Estetik" loading="lazy" decoding="async" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">{t('blogPage.categories.noninvasive')}</div>
                      <div className="featured-title">
                        <h3><Link to={getBlogDetailUrl('yaslanma-karsiti-estetik', i18n.language)}>{t('blogPage.posts.antiAging.title')}</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>{t('blogPage.posts.antiAging.description')}</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to={getBlogDetailUrl('yaslanma-karsiti-estetik', i18n.language)}>{t('blogPage.posts.antiAging.readMore')}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <WhatsAppButton />
        <LanguageSwitcher />
    </div>
  )
}


