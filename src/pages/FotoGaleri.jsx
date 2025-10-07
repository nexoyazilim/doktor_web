import { useTranslation } from 'react-i18next'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function FotoGaleri() {
  const { t } = useTranslation()
  return (
    <div className="site-main">
      <main id="main">
        {/* Page Header - Full Width */}
        <div className="cmt-page-title-row-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-wrapper-inner">
                  <span>
                    <a title="Homepage" href="/">Anasayfa</a>
                  </span>
                  <span>{t('gallery.photo.title')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="section gallery-section photo-gallery-section">
          <div className="container">
            
            {/* Gallery Grid - 3 Columns */}
            <div className="gallery row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 1">
                    <img loading="lazy" src="/doktor_web/assets/images/hizmetlerimiz_image/alnskllndrme.jpg" alt={t('gallery.photo.items.clinic')} />
                  </a>
                  <figcaption className="gallery-caption">{t('gallery.photo.items.clinic')}</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 2">
                    <img loading="lazy" src="/doktor_web/assets/images/hizmetlerimiz_image/bntdvsi.jpg" alt={t('gallery.photo.items.teamwork')} />
                  </a>
                  <figcaption className="gallery-caption">{t('gallery.photo.items.teamwork')}</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 3">
                    <img loading="lazy" src="/doktor_web/assets/images/hizmetlerimiz_image/cltbkm.jpg" alt={t('gallery.photo.items.event')} />
                  </a>
                  <figcaption className="gallery-caption">{t('gallery.photo.items.event')}</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 4">
                    <img loading="lazy" src="/doktor_web/assets/images/hizmetlerimiz_image/frksynellazer.jpg" alt={t('gallery.photo.items.conference')} />
                  </a>
                  <figcaption className="gallery-caption">{t('gallery.photo.items.conference')}</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 5">
                    <img loading="lazy" src="/doktor_web/assets/images/hizmetlerimiz_image/alnskllndrme.jpg" alt={t('gallery.photo.items.preparation')} />
                  </a>
                  <figcaption className="gallery-caption">{t('gallery.photo.items.preparation')}</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 6">
                    <img loading="lazy" src="/doktor_web/assets/images/hizmetlerimiz_image/bntdvsi.jpg" alt={t('gallery.photo.items.consultation')} />
                  </a>
                  <figcaption className="gallery-caption">{t('gallery.photo.items.consultation')}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <WhatsAppButton />
        <LanguageSwitcher />
      </main>
    </div>
  )
}


