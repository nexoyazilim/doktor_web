import { useTranslation } from 'react-i18next'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function VideoGaleri() {
  const { t } = useTranslation()
  return (
    <div className="site-main">
      <main id="main">
        <section className="section gallery-section">
          <div className="container">
            {/* Video Grid - 3 Columns (FotoGaleri ile aynı yapı) */}
            <div className="gallery row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <div className="video-container">
                    <iframe loading="lazy" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title={t('gallery.video.items.rhinoplasty')} allowFullScreen></iframe>
                  </div>
                  <figcaption className="gallery-caption">{t('gallery.video.items.rhinoplasty')}</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <div className="video-container">
                    <iframe loading="lazy" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title={t('gallery.video.items.breastSurgery')} allowFullScreen></iframe>
                  </div>
                  <figcaption className="gallery-caption">{t('gallery.video.items.breastSurgery')}</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <div className="video-container">
                    <iframe loading="lazy" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title={t('gallery.video.items.liposuction')} allowFullScreen></iframe>
                  </div>
                  <figcaption className="gallery-caption">{t('gallery.video.items.liposuction')}</figcaption>
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


