import { useTranslation } from 'react-i18next'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function Hakkimda() {
  const { t, i18n, ready } = useTranslation()
  if (!ready) return null
  return (
    <div className="site-main">
      <main id="main">


        {/* Bilgilendirici Paragraflar */}
        <section className="section info-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4 order-lg-1 order-2">
                <div className="info-content">
                  <h3>{t('about.approach.title') || ''}</h3>
                  <p>
                    {t('about.approach.p1') || ''}
                  </p>
                  <p>
                    {t('about.approach.p2') || ''}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4 order-lg-2 order-1">
                <div className="info-image" style={{ display: 'flex', justifyContent: 'center' }}>
                <img alt="Estetik Cerrahi Yaklaşımı" className="img-fluid rounded" src={`${import.meta.env.BASE_URL}assets/images/doktor_resim_2.png`} style={{ maxWidth: '75%', height: 'auto', paddingTop: '20px' }} loading="lazy" decoding="async"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section info-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="info-image">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/images/doktor_1.png`} 
                    alt="Hasta Odaklı Yaklaşım" 
                    className="img-fluid rounded"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="info-content">
                  <h3>{t('about.patientFirst.title') || ''}</h3>
                  <p>
                    {t('about.patientFirst.p1') || ''}
                  </p>
                  <p>
                    {t('about.patientFirst.p2') || ''}
                  </p>
                  <p>
                    {t('about.patientFirst.p3') || ''}
                  </p>
                  <p>
                    {t('about.patientFirst.p4') || ''}
                  </p>
                </div>
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


