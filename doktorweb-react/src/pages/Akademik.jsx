import { useState } from 'react'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function Akademik() {
  const [activeFilter, setActiveFilter] = useState('all')

  const publications = [
    { type: 'makale', title: 'Endoskopik Omurga Cerrahisinde Yeni Yaklaşımlar', journal: '', link: '#', linkText: 'PDF' },
    { type: 'bildiri', title: 'Skolyozda Komplikasyon Yönetimi: Çok Merkezli Deneyim', journal: 'Uluslararası Omurga Kongresi, 2022', link: '#', linkText: 'Özet' },
    { type: 'kitap', title: 'Servikal Myelopati: Tanıdan Tedaviye', journal: 'Omurga Cerrahisi El Kitabı, 2021', link: '#', linkText: 'Detay' }
  ]

  const filteredPublications = activeFilter === 'all' ? publications : publications.filter(pub => pub.type === activeFilter)

  return (
    <div className="site-main">
      <main id="main">
        {/* Page Header */}
        <div className="cmt-page-title-row-inner">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-title-heading">
                  <h1 className="title">Akademik Çalışmalar ve Yayınlar</h1>
                  <p className="page-title-desc">
                    Hakemli makaleler, bildiriler ve kitap bölümlerinden seçkiler<br />
                    Eğitim ve klinik deneyimle bütünleşen bilimsel üretim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="section stats-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="stat-card stat-card-blue">
                  <div className="stat-icon">
                    <i className="ti-book"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">42</h3>
                    <p className="stat-label">Hakemli Yayın</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="stat-card stat-card-green">
                  <div className="stat-icon">
                    <i className="ti-clipboard"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">67</h3>
                    <p className="stat-label">Bildiri</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="stat-card stat-card-orange">
                  <div className="stat-icon">
                    <i className="ti-files"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">12</h3>
                    <p className="stat-label">Kitap Bölümü</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="stat-card stat-card-purple">
                  <div className="stat-icon">
                    <i className="ti-star"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">350+</h3>
                    <p className="stat-label">Atıf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="section">
          <div className="container">
            <div className="title-header" style={{ textAlign: 'center' }}>
              <h2>Yayınlar ve Çalışmalar</h2>
            </div>
            
            <div className="filters" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', margin: '12px 0 20px' }}>
              <button className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter('all')}>Tümü</button>
              <button className={`btn ${activeFilter === 'makale' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter('makale')}>Hakemli Makale</button>
              <button className={`btn ${activeFilter === 'bildiri' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter('bildiri')}>Bildiri</button>
              <button className={`btn ${activeFilter === 'kitap' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter('kitap')}>Kitap Bölümü</button>
            </div>

            <div className="grid cols-3 cards">
              {filteredPublications.map((pub, index) => (
                <article key={index} className="card" data-type={pub.type}>
                  <img loading="lazy" src={`https://picsum.photos/seed/paper-${index + 1}/400/250`} alt="Makale görseli" />
                  <h3>{pub.title}</h3>
                  <p>{pub.journal}</p>
                  <a className="btn btn-outline" href={pub.link} target="_blank" rel="noopener">{pub.linkText}</a>
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


