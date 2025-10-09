import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'
import useSEO from '../hooks/useSEO'
import useJSONLD from '../hooks/useJSONLD'

export default function Akademik() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')

  useSEO({
    title: 'Akademik Yayınlar | Dr. Elif YAMAN',
    description: 'Estetik ve plastik cerrahi alanında yayınlar, bildiriler ve kitap bölümleri.',
    og: {
      type: 'website',
      image: `${typeof window !== 'undefined' ? window.location.origin : ''}${import.meta.env.BASE_URL}assets/images/hizmetlerimiz_image/alnskllndrme.jpg`,
      siteName: 'Dr. Elif YAMAN',
      locale: 'tr_TR'
    },
    twitter: { card: 'summary_large_image' }
  })

  // Akademik sayfa Breadcrumb
  useJSONLD('breadcrumb-academic', {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": typeof window !== 'undefined' ? `${window.location.origin}${import.meta.env.BASE_URL}` : undefined },
      { "@type": "ListItem", "position": 2, "name": "Akademik", "item": typeof window !== 'undefined' ? `${window.location.origin}${import.meta.env.BASE_URL}akademik` : undefined }
    ]
  })

  const publications = [
    { type: 'makale', key: 'rhinoplasty', title: 'Burun Estetiğinde Doğal Görünüm Teknikleri', journal: 'Plastik ve Rekonstrüktif Cerrahi Dergisi, 2023', link: null, linkText: 'PDF' },
    { type: 'bildiri', key: 'breastSurgery', title: 'Meme Estetiğinde Komplikasyon Yönetimi: Çok Merkezli Deneyim', journal: 'Uluslararası Estetik Cerrahi Kongresi, 2022', link: null, linkText: 'Özet' },
    { type: 'kitap', key: 'liposuction', title: 'Liposuction: Modern Teknikler ve Uygulamalar', journal: 'Estetik Cerrahi El Kitabı, 2021', link: null, linkText: 'Detay' }
  ]

  const filteredPublications = activeFilter === 'all' ? publications : publications.filter(pub => pub.type === activeFilter)

  return (
    <div className="site-main">
      <main id="main">
        {/* Publications Section */}
        <section className="section">
          <div className="container">
            <div className="title-header" style={{ textAlign: 'center' }}>
              <h1>{t('academic.publications.title')}</h1>
            </div>
            
            <div className="filters" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', margin: '12px 0 20px' }}>
              <button className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter('all')}>{t('academic.publications.filters.all')}</button>
              <button className={`btn ${activeFilter === 'makale' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter('makale')}>{t('academic.publications.filters.article')}</button>
              <button className={`btn ${activeFilter === 'bildiri' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter('bildiri')}>{t('academic.publications.filters.presentation')}</button>
              <button className={`btn ${activeFilter === 'kitap' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter('kitap')}>{t('academic.publications.filters.chapter')}</button>
            </div>

            <div className="grid cols-3 cards">
              {filteredPublications.map((pub, index) => (
                <article key={index} className="card" data-type={pub.type}>
                  <img loading="lazy" src={`/doktor_web/assets/images/hizmetlerimiz_image/${pub.key === 'rhinoplasty' ? 'alnskllndrme' : pub.key === 'breastSurgery' ? 'bntdvsi' : 'cltbkm'}.jpg`} alt="Makale görseli" />
                  <h3>{t(`academic.publications.items.${pub.key}.title`)}</h3>
                  <p>{t(`academic.publications.items.${pub.key}.journal`)}</p>
                  {pub.link ? (
                    <a className="btn btn-outline" href={pub.link} target="_blank" rel="noopener">{t(`academic.publications.items.${pub.key}.linkText`)}</a>
                  ) : (
                    <button className="btn btn-outline" disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>{t(`academic.publications.items.${pub.key}.linkText`)}</button>
                  )}
                </article>
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


