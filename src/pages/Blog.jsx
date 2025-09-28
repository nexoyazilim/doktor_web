import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { getBlogDetailUrl } from '../utils/urlHelper'

export default function Blog() {
  const { t, i18n } = useTranslation()
  return (
    <div className="site-main">
      {/* Blog Page Header */}
      <div className="cmt-page-title-row-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-wrapper-inner">
                <span>
                  <a title="Homepage" href="/">Anasayfa</a>
                </span>
                <span>{t('blogPage.title')}</span>
              </div>
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
                      <img src="./assets/images/hizmetlerimiz_image/alnskllndrme.jpg" alt="Burun Estetiği" />
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
                      <img src="./assets/images/hizmetlerimiz_image/cltbkm.jpg" alt="Liposuction" />
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
                      <img src="./assets/images/hizmetlerimiz_image/bntdvsi.jpg" alt="Estetik Cerrahi Riskleri" />
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
                      <img src="./assets/images/hizmetlerimiz_image/frksynellazer.jpg" alt="Saç Ekimi" />
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
                      <img src="./assets/images/hizmetlerimiz_image/bntdvsi.jpg" alt="Estetik Cerrahi İyileşme" />
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
                      <img src="./assets/images/hizmetlerimiz_image/frksynellazer.jpg" alt="Yaşlanma Karşıtı Estetik" />
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


