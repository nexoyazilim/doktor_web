import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'
import useSEO from '../hooks/useSEO'
import useJSONLD from '../hooks/useJSONLD'

export default function Tedaviler() {
  const { t } = useTranslation()
  useSEO({
    title: 'Tedaviler | Dr. Elif YAMAN',
    description: 'Burun estetiği, meme estetiği, liposuction, botoks ve dolgu dahil tüm estetik tedaviler hakkında bilgiler.',
    og: {
      type: 'website',
      image: `${typeof window !== 'undefined' ? window.location.origin : ''}${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/alnskllndrme.jpg`,
      siteName: 'Dr. Elif YAMAN',
      locale: 'tr_TR'
    },
    twitter: { card: 'summary_large_image' }
  })

  // FAQPage JSON-LD (genel SSS örneği)
  useJSONLD('faq-treatments', {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Burun estetiği sonrası iyileşme ne kadar sürer?",
        "acceptedAnswer": { "@type": "Answer", "text": "Genellikle 1-2 hafta içinde şişlik azalır, 3-6 ayda sonuç netleşir." }
      },
      {
        "@type": "Question",
        "name": "Botoksun etkisi ne kadar sürer?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ortalama 3-6 ay arası kalıcılık beklenir." }
      }
    ]
  })
  const [selectedTreatment, setSelectedTreatment] = useState(null)
  const location = useLocation()
  const titleToSlug = useRef({})
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 900 : false)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 900)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Tedavi kategorilerini çeviri anahtarlarıyla eşleştir
  const treatmentKeys = {
    'Burun Estetiği (Rinoplasti)': 'rhinoplasty',
    'Meme Büyütme': 'breastAugmentation',
    'Meme Küçültme': 'breastReduction',
    'Liposuction (Yağ Aldırma)': 'liposuction',
    'Karın Germe (Abdominoplasti)': 'tummyTuck',
    'Yüz Germe': 'facelift',
    'Göz Kapağı Estetiği': 'eyelidSurgery',
    'Botoks Uygulaması': 'botox',
    'Dolgu Uygulaması': 'filler',
    'Saç Ekimi': 'hairTransplant',
    'Meme Dikleştirme': 'breastLift',
    'Vücut Kontürü': 'bodyContouring'
  }

  // Görsel eşleştirme sistemi
  const getTreatmentImage = (treatmentKey) => {
    const imageMap = {
      'rhinoplasty': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/alnskllndrme.jpg`,
      'breastAugmentation': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/bntdvsi.jpg`,
      'breastReduction': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/bntdvsi.jpg`,
      'liposuction': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/cltbkm.jpg`,
      'tummyTuck': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/cltbkm.jpg`,
      'facelift': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/alnskllndrme.jpg`,
      'eyelidSurgery': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/alnskllndrme.jpg`,
      'botox': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/frksynellazer.jpg`,
      'filler': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/frksynellazer.jpg`,
      'hairTransplant': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/frksynellazer.jpg`,
      'breastLift': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/bntdvsi.jpg`,
      'bodyContouring': `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/cltbkm.jpg`
    }
    return imageMap[treatmentKey] || `${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/alnskllndrme.jpg`
  }

  const treatments = {
    'Burun Estetiği (Rinoplasti)': {
      key: 'rhinoplasty',
      description: 'Burun şeklinin ve fonksiyonunun estetik cerrahi ile düzeltilmesi.',
      procedures: ['Açık rinoplasti', 'Kapalı rinoplasti', 'Septoplasti'],
      conditions: ['Burun şekil bozukluğu', 'Nefes alma güçlüğü', 'Burun ucu düşüklüğü'],
      recovery: 'Burun estetiği sonrası 1-2 hafta içinde şişlik azalır, 3-6 ay içinde final sonuç görülür.'
    },
    'Meme Büyütme': {
      key: 'breastAugmentation',
      description: 'Meme boyutunun implant veya yağ transferi ile artırılması.',
      procedures: ['Silikon implant', 'Yağ transferi', 'Hibrit yöntem'],
      conditions: ['Küçük meme', 'Asimetrik meme', 'Meme kaybı'],
      recovery: 'Meme büyütme sonrası 1-2 hafta dinlenme, 4-6 hafta spor kısıtlaması.'
    },
    'Meme Küçültme': {
      key: 'breastReduction',
      description: 'Büyük memelerin boyutunun azaltılması ve şekillendirilmesi.',
      procedures: ['Anchor tekniği', 'Vertical tekniği', 'Liposuction'],
      conditions: ['Büyük meme', 'Sırt ağrısı', 'Omuz çukuru'],
      recovery: 'Meme küçültme sonrası 2-3 hafta dinlenme, 6 hafta spor kısıtlaması.'
    },
    'Liposuction (Yağ Aldırma)': {
      key: 'liposuction',
      description: 'Vücudun belirli bölgelerinden yağ dokusunun cerrahi olarak çıkarılması.',
      procedures: ['Tumescent liposuction', 'VASER liposuction', 'Smart lipo'],
      conditions: ['Karın yağları', 'Kalça yağları', 'Kol yağları'],
      recovery: 'Liposuction sonrası 1 hafta kompresyon giysisi, 2-4 hafta normal aktivite.'
    },
    'Karın Germe (Abdominoplasti)': {
      key: 'tummyTuck',
      description: 'Karın bölgesindeki fazla deri ve yağın çıkarılması, kasların sıkılaştırılması.',
      procedures: ['Tam abdominoplasti', 'Mini abdominoplasti', 'Fleur-de-lis'],
      conditions: ['Gevşek karın derisi', 'Karın kası ayrılması', 'Gebelik sonrası'],
      recovery: 'Karın germe sonrası 2-3 hafta dinlenme, 6 hafta ağır kaldırma yasağı.'
    },
    'Yüz Germe': {
      key: 'facelift',
      description: 'Yüz ve boyun bölgesindeki yaşlanma belirtilerinin cerrahi ile düzeltilmesi.',
      procedures: ['SMAS lifting', 'Deep plane lifting', 'Mini facelift'],
      conditions: ['Yüz sarkması', 'Boyun sarkması', 'Derin kırışıklıklar'],
      recovery: 'Yüz germe sonrası 1-2 hafta şişlik, 2-3 hafta morluk, 3-6 ay final sonuç.'
    },
    'Göz Kapağı Estetiği': {
      key: 'eyelidSurgery',
      description: 'Üst ve alt göz kapaklarındaki fazla deri ve yağın çıkarılması.',
      procedures: ['Blefaroplasti', 'Transkonjonktival yaklaşım', 'Kombine yaklaşım'],
      conditions: ['Göz kapağı sarkması', 'Göz altı torbaları', 'Görme kısıtlaması'],
      recovery: 'Göz kapağı estetiği sonrası 1 hafta şişlik, 2 hafta morluk, 1 ay final sonuç.'
    },
    'Botoks Uygulaması': {
      key: 'botox',
      description: 'Yüz kırışıklıklarının botulinum toksin ile geçici olarak düzeltilmesi.',
      procedures: ['Alın botoksu', 'Göz çevresi botoksu', 'Kaş arası botoksu'],
      conditions: ['Alın kırışıklıkları', 'Göz çevresi kırışıklıkları', 'Kaş arası çizgiler'],
      recovery: 'Botoks sonrası 3-7 gün etki başlar, 3-6 ay süreyle etkili olur.'
    },
    'Dolgu Uygulaması': {
      key: 'filler',
      description: 'Yüz kontürlerinin ve hacim kayıplarının dolgu maddeleri ile düzeltilmesi.',
      procedures: ['Hyaluronik asit', 'Kalıcı dolgular', 'Yağ transferi'],
      conditions: ['Dudak inceliği', 'Yanak çöküklüğü', 'Çene çizgisi'],
      recovery: 'Dolgu sonrası 1-2 gün şişlik, 1 hafta final sonuç, 6-18 ay süreyle etkili.'
    },
    'Saç Ekimi': {
      key: 'hairTransplant',
      description: 'Saç dökülmesi olan bölgelere saç köklerinin nakledilmesi.',
      procedures: ['FUE tekniği', 'FUT tekniği', 'DHI tekniği'],
      conditions: ['Erkek tipi saç dökülmesi', 'Kadın tipi saç dökülmesi', 'Saç çizgisi gerilemesi'],
      recovery: 'Saç ekimi sonrası 1 hafta yıkama yasağı, 3-6 ay saç çıkışı, 12 ay final sonuç.'
    },
    'Meme Dikleştirme': {
      key: 'breastLift',
      description: 'Sarkmış memelerin yukarı kaldırılması ve şekillendirilmesi.',
      procedures: ['Periareolar', 'Vertical', 'Anchor'],
      conditions: ['Meme sarkması', 'Gebelik sonrası', 'Kilo kaybı sonrası'],
      recovery: 'Meme dikleştirme sonrası 2-3 hafta dinlenme, 6 hafta spor kısıtlaması.'
    },
    'Vücut Kontürü': {
      key: 'bodyContouring',
      description: 'Vücut şeklinin estetik cerrahi yöntemleri ile iyileştirilmesi.',
      procedures: ['360 derece liposuction', 'Vücut germe', 'Kombine yöntemler'],
      conditions: ['Vücut şekil bozukluğu', 'Kilo kaybı sonrası', 'Gebelik sonrası'],
      recovery: 'Vücut kontürü sonrası 2-4 hafta dinlenme, 6 hafta spor kısıtlaması.'
    }
  }

  const handleTreatmentClick = (treatment) => {
    setSelectedTreatment(treatment)
    // Sayfanın başına scroll yap
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToList = () => {
    setSelectedTreatment(null)
    // Sayfanın başına scroll yap
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // URL parametresinden (sec) varsayılan seçim yap ve slug <-> title eşlemesini hazırla
  useEffect(() => {
    const slugToTitle = {
      'burun-estetigi-rinoplasti': 'Burun Estetiği (Rinoplasti)',
      'meme-buyutme': 'Meme Büyütme',
      'meme-kucultme': 'Meme Küçültme',
      'liposuction-yag-aldirma': 'Liposuction (Yağ Aldırma)',
      'karin-germe-abdominoplasti': 'Karın Germe (Abdominoplasti)',
      'yuz-germe': 'Yüz Germe',
      'goz-kapagi-estetigi': 'Göz Kapağı Estetiği',
      'botoks-uygulamasi': 'Botoks Uygulaması',
      'dolgu-uygulamasi': 'Dolgu Uygulaması',
      'sac-ekimi': 'Saç Ekimi',
      'meme-diklestirme': 'Meme Dikleştirme',
      'vucut-konturu': 'Vücut Kontürü',
    }
    // ters eşleme
    titleToSlug.current = Object.fromEntries(Object.entries(slugToTitle).map(([slug, title]) => [title, slug]))
    const params = new URLSearchParams(location.search)
    const sec = params.get('sec')
    if (sec) {
      if (treatments[sec]) {
        setSelectedTreatment(sec)
      } else if (slugToTitle[sec] && treatments[slugToTitle[sec]]) {
        setSelectedTreatment(slugToTitle[sec])
      }
    }
  }, [location.search])

  if (selectedTreatment) {
    const treatment = treatments[selectedTreatment]
    const NavWidget = (
      <aside className="widget widget-nav-menu with-title">
        <h3 className="widget-title">{t('treatments.subtitle')}</h3>
        <ul>
          {Object.keys(treatments).map((title) => {
            const slug = titleToSlug.current[title] || encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))
            const isActive = title === selectedTreatment
            const treatmentKey = treatments[title].key
            return (
              <li key={title} className={isActive ? 'active' : undefined}>
                <Link to={`/tedaviler?sec=${slug}`} onClick={() => window.scrollTo(0, 0)}>{t(`treatments.categories.${treatmentKey}.title`)}</Link>
              </li>
            )
          })}
        </ul>
      </aside>
    )
    return (
      <div className="site-main">
        <main id="main">
          <section className="section section-alt">
            <div className="container">
              <div className="treatment-layout">
                {!isMobile && (
                  <aside className="widget-area sidebar-left">
                    {NavWidget}
                  </aside>
                )}

                <div className="treatment-detail">
                  <div className="content-area">
                    <div className="cmt-service-single-content-area">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="cmt_single_image-wrapper">
                            <div className="hero-banner-container">
                              <img 
                                className="hero-banner" 
                                src={getTreatmentImage(treatment.key)} 
                                alt={selectedTreatment} 
                                fetchPriority="high"
                                decoding="async"
                              />
                            </div>
                          </div>
                          <section className="icerik mt-25 treatment-content">
                            <h3 className="treatment-header fs-24 mb-10" id="toc_0_H3">{t(`treatments.categories.${treatment.key}.title`)}</h3>
                            <div className="treatment-overview">
                              <div className="overview-card">
                                <h4 id="toc_1_H2">{t('treatments.whatIs')}</h4>
                                <p><strong>{t(`treatments.categories.${treatment.key}.title`)}</strong> {t('treatments.generalDescription')}</p>
                              </div>
                              <div className="overview-card">
                                <h4 id="toc_2_H2">{t('treatments.symptoms')}</h4>
                                <ul className="bulleted">
                                  <li>{t('treatments.symptomsList.pain')}</li>
                                  <li>{t('treatments.symptomsList.numbness')}</li>
                                  <li>{t('treatments.symptomsList.posture')}</li>
                                </ul>
                              </div>
                              <div className="overview-card">
                                <h4 id="toc_3_H3">{t('treatments.trackedDiseases')}</h4>
                                <ul className="bulleted">
                                  {treatment.conditions.slice(0, 6).map((c, i) => (<li key={i}>{c}</li>))}
                                </ul>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {isMobile && (
                  <aside className="widget-area sidebar-left" style={{ marginTop: 16 }}>
                    {NavWidget}
                  </aside>
                )}
              </div>
            </div>
          </section>
          <WhatsAppButton />
          <LanguageSwitcher />
        </main>
      </div>
    )
  }

  return (
    <div className="site-main">
      <main id="main">

        {/* Treatments Grid Section */}
        <section className="section treatments-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h1 className="title">{t('treatments.title')}</h1>
                  </div>
                  <div className="title-desc">
                    <p>{t('treatments.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row pt-30">
              {Object.keys(treatments).map((treatment, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-30">
                  <div className="featured-imagebox featured-imagebox-portfolio style1">
                    <div className="featured-thumbnail">
                      <div className="featured-thumbnail-inner">
                        <img 
                          className="portfolio-img" 
                          src={getTreatmentImage(treatments[treatment].key)} 
                          alt={treatment} 
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="featured-thumbnail-overlay">
                          <div className="featured-thumbnail-overlay-inner">
                            <div className="featured-thumbnail-overlay-content">
                              <div className="featured-thumbnail-overlay-icon">
                                <i className="fa fa-plus"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>
                          <span 
                            className="treatment-link" 
                            onClick={() => handleTreatmentClick(treatment)}
                            style={{ cursor: 'pointer' }}
                          >
                            {t(`treatments.categories.${treatments[treatment].key}.title`)}
                          </span>
                        </h3>
                      </div>
                      <div className="featured-desc">
                        <p>{t(`treatments.categories.${treatments[treatment].key}.description`)}</p>
                        <div className="featured-bottom">
                          <span 
                            className="cmt-btn cmt-btn-size-sm cmt-btn-shape-square cmt-btn-style-fill cmt-btn-color-skincolor"
                            onClick={() => handleTreatmentClick(treatment)}
                            style={{ cursor: 'pointer' }}
                          >
{t('treatments.seeDetails')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <WhatsAppButton />
        <LanguageSwitcher />
      </main>
    </div>
  )
}


