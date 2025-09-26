import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Tedaviler() {
  const [selectedTreatment, setSelectedTreatment] = useState(null)
  const location = useLocation()
  const titleToSlug = useRef({})

  const treatments = {
    'Boyun Fıtığı Ameliyatı': {
      description: 'Cervical disk hernisinin cerrahi tedavisi.',
      procedures: ['Anterior diskektomi', 'Posterior diskektomi', 'Cervical füzyon'],
      conditions: ['Cervical disk hernisi', 'Boyun ağrısı', 'Kol ağrısı'],
      recovery: 'Boyun fıtığı ameliyatı sonrası 2-6 hafta içinde iyileşme.'
    },
    'Boyun Kanal Darlığı': {
      description: 'Cervical spinal stenozun cerrahi tedavisi.',
      procedures: ['Posterior laminektomi', 'Anterior korpektomi', 'Cervical füzyon'],
      conditions: ['Cervical stenoz', 'Myelopati', 'Boyun ve kol ağrısı'],
      recovery: 'Boyun kanal darlığı cerrahisi sonrası 6-12 hafta iyileşme süresi.'
    },
    'Sırt Fıtığı (Torakal Disk Hernisi)': {
      description: 'Torakal bölgedeki disk hernisinin cerrahi tedavisi.',
      procedures: ['Torakal diskektomi', 'Torakoskopik cerrahi', 'Açık cerrahi'],
      conditions: ['Torakal disk hernisi', 'Göğüs ağrısı', 'Sırt ağrısı'],
      recovery: 'Sırt fıtığı ameliyatı sonrası 4-8 hafta iyileşme süresi.'
    },
    'Omurga Ağrılarında Enjeksiyon Tedavisi': {
      description: 'Omurga ağrılarının minimal invaziv enjeksiyon yöntemleri ile tedavisi.',
      procedures: ['Epidural enjeksiyon', 'Faset enjeksiyon', 'Sakroiliak enjeksiyon'],
      conditions: ['Kronik bel ağrısı', 'Boyun ağrısı', 'Siyatik ağrısı'],
      recovery: 'Enjeksiyon tedavisi sonrası 1-2 hafta içinde ağrıda azalma beklenir.'
    },
    'Siyatik Ağrısı Tedavisi': {
      description: 'Siyatik sinir ağrısının cerrahi ve cerrahi olmayan tedavi yöntemleri.',
      procedures: ['Mikrodiskektomi', 'Endoskopik cerrahi', 'Konservatif tedavi'],
      conditions: ['Siyatik ağrısı', 'Bacak ağrısı', 'Uyuşma ve karıncalanma'],
      recovery: 'Siyatik tedavisi sonrası 2-6 hafta içinde iyileşme.'
    },
    'Omurga Tümörleri': {
      description: 'Omurga ve omurilik tümörlerinin cerrahi tedavisi.',
      procedures: ['Tümör rezeksiyonu', 'Spinal füzyon', 'Radyoterapi'],
      conditions: ['Primer tümörler', 'Metastatik tümörler', 'Omurilik tümörleri'],
      recovery: 'Tümör cerrahisi sonrası iyileşme tümör tipine göre 6-12 hafta arasında değişir.'
    },
    'Kifoz': {
      description: 'Omurga kifoz deformitesinin cerrahi düzeltilmesi.',
      procedures: ['Posterior füzyon', 'Anterior füzyon', 'Osteotomi'],
      conditions: ['Scheuermann kifozu', 'Postüral kifoz', 'Konjenital kifoz'],
      recovery: 'Kifoz cerrahisi sonrası 6-12 hafta iyileşme süresi.'
    },
    'Gergin Omurilik Sendromu': {
      description: 'Gergin omurilik sendromunun cerrahi tedavisi.',
      procedures: ['Tethered cord release', 'Lipom rezeksiyonu', 'Dural onarım'],
      conditions: ['Tethered cord', 'Lipomyelomeningosel', 'Dermal sinüs'],
      recovery: 'Gergin omurilik cerrahisi sonrası 6-12 hafta iyileşme süresi.'
    },
    'Çocuklarda Skolyoz': {
      description: 'Çocukluk çağı skolyozunun cerrahi ve cerrahi olmayan tedavisi.',
      procedures: ['Growing rod', 'VEPTR', 'Spinal füzyon'],
      conditions: ['İdiyopatik skolyoz', 'Konjenital skolyoz', 'Nöromüsküler skolyoz'],
      recovery: 'Çocuk skolyoz cerrahisi sonrası 6-12 hafta iyileşme süresi.'
    },
    'Erişkin Skolyoz': {
      description: 'Erişkin skolyozunun cerrahi tedavisi.',
      procedures: ['Posterior füzyon', 'Anterior füzyon', 'Osteotomi'],
      conditions: ['Erişkin idiyopatik skolyoz', 'Dejeneratif skolyoz', 'Nöromüsküler skolyoz'],
      recovery: 'Erişkin skolyoz cerrahisi sonrası 8-16 hafta iyileşme süresi.'
    },
    'Beyin Tümörü': {
      description: 'Beyin tümörlerinin cerrahi tedavisi.',
      procedures: ['Kraniotomi', 'Stereotaktik biyopsi', 'Endoskopik cerrahi'],
      conditions: ['Gliom', 'Meningiom', 'Metastatik tümörler'],
      recovery: 'Beyin tümörü cerrahisi sonrası 4-12 hafta iyileşme süresi.'
    },
    'Beyincik Sarkması': {
      description: 'Chiari malformasyonunun cerrahi tedavisi.',
      procedures: ['Suboksipital kraniektomi', 'Dural onarım', 'Serebellar tonsil rezeksiyonu'],
      conditions: ['Chiari I malformasyonu', 'Chiari II malformasyonu', 'Siringomiyeli'],
      recovery: 'Beyincik sarkması cerrahisi sonrası 6-12 hafta iyileşme süresi.'
    }
  }

  const handleTreatmentClick = (treatment) => {
    setSelectedTreatment(treatment)
  }

  const handleBackToList = () => {
    setSelectedTreatment(null)
  }

  // URL parametresinden (sec) varsayılan seçim yap ve slug <-> title eşlemesini hazırla
  useEffect(() => {
    const slugToTitle = {
      'omurga-cerrahisi': 'Omurga Cerrahisi',
      'deformite-cerrahisi': 'Deformite Cerrahisi',
      'endoskopik-omurga-cerrahisi': 'Endoskopik Omurga Cerrahisi',
      'periferik-sinir-cerrahisi': 'Periferik Sinir Cerrahisi',
      'bel-fitigi-ameliyati': 'Bel Fıtığı Ameliyatı',
      'bel-kaymasi': 'Bel Kayması',
      'bel-kanal-darligi': 'Bel Kanal Darlığı',
      'boyun-fitigi-ameliyati': 'Boyun Fıtığı Ameliyatı',
      'boyun-kanal-darligi': 'Boyun Kanal Darlığı',
      'sirt-fitigi-torakal-disk-hernisi': 'Sırt Fıtığı (Torakal Disk Hernisi)',
      'omurga-agrilarinda-enjeksiyon-tedavisi': 'Omurga Ağrılarında Enjeksiyon Tedavisi',
      'siyatik-agrisi-tedavisi': 'Siyatik Ağrısı Tedavisi',
      'omurga-tumorleri': 'Omurga Tümörleri',
      'sakrum-tumoru': 'Sakrum Tümörü',
      'tarlov-kisti': 'Tarlov Kisti',
      'kifoz': 'Kifoz',
      'gergin-omurilik-sendromu': 'Gergin Omurilik Sendromu',
      'cocuklarda-skolyoz': 'Çocuklarda Skolyoz',
      'eriskin-skolyoz': 'Erişkin Skolyoz',
      'beyin-tumoru': 'Beyin Tümörü',
      'beyincik-sarkmasi': 'Beyincik Sarkması',
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
    return (
      <div className="site-main">
        <main id="main">
          <section className="section section-alt">
            <div className="container">
              <div className="treatment-layout">
                <aside className="widget-area sidebar-left">
                  <aside className="widget widget-nav-menu with-title">
                    <h3 className="widget-title">Hizmetlerimiz</h3>
                    <ul>
                      {Object.keys(treatments).map((title) => {
                        const slug = titleToSlug.current[title] || encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))
                        const isActive = title === selectedTreatment
                        return (
                          <li key={title} className={isActive ? 'active' : undefined}>
                            <Link to={`/tedaviler?sec=${slug}`}>{title}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </aside>
                  <aside className="widget widget-banner">
                    <div className="cmt-bg cmt-col-bgimage-yes col-bg-img-sixteen bg-base-dark">
                      <div className="cmt-col-wrapper-bg-layer cmt-bg-layer">
                        <div className="cmt-col-wrapper-bg-layer-inner"></div>
                      </div>
                      <div className="layer-content">
                        <h3 className="widget-title">İSTANBUL / Türkiye</h3>

                        <span> Ortahisar/Trabzon</span>
                        <div className="featured-icon-box style14 bg-base-white">
                          <div className="featured-title">
                            <h3>Bana Ulaşabilirsiniz</h3>
                          </div>
                          <div className="featured-icon">
                            <div className="cmt-icon cmt-icon_element-size-sm cmt-icon_element-color-skincolor">
                              <i className="flaticon-chat"></i>
                            </div>
                          </div>
                          <div className="featured-desc">
                            <p>Gsm: <a href="tel:+9055 555 55 55">0555 555 55 55</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </aside>

                <div className="treatment-detail">
                  <div className="content-area">
                    <div className="cmt-service-single-content-area">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="cmt_single_image-wrapper">
                            <img className="img-fluid" src={`https://picsum.photos/seed/${(titleToSlug.current[selectedTreatment] || 'treatment')}/968/552`} width="968" height="552" alt={selectedTreatment} />
                          </div>
                          <div className="icerik mt-25">
                            <h3 className="fs-24 mb-10" id="toc_0_H3">{selectedTreatment}</h3>
                            <div className="table-of-content mt-30" style={{ position: 'static' }}>
                              <div className="wrap-toc">
                                <ul className="toc-box">
                                  <li className="toc-item toc-H3"><a className="toc-item-link" href="#toc_0_H3">{selectedTreatment}</a></li>
                                  <li className="toc-item toc-H2"><a className="toc-item-link" href="#toc_1_H2">{selectedTreatment} Nedir?</a></li>
                                  <li className="toc-item toc-H2"><a className="toc-item-link" href="#toc_2_H2">Belirtiler Nelerdir?</a></li>
                                  <li className="toc-item toc-H3"><a className="toc-item-link" href="#toc_3_H3">Takip Edilen Hastalıklar</a></li>
                                  <li className="toc-item toc-H3"><a className="toc-item-link" href="#toc_4_H3">Sık Görülen Hastalıklar</a></li>
                                  <li className="toc-item toc-H3"><a className="toc-item-link" href="#toc_5_H3">Acil Müdahale Gerektiren Durumlar</a></li>
                                  <li className="toc-item toc-H3"><a className="toc-item-link" href="#toc_6_H3">Kullanılan Yöntemler</a></li>
                                </ul>
                              </div>
                            </div>
                            <h2 id="toc_1_H2">{selectedTreatment} Nedir?</h2>
                            <p><strong>{selectedTreatment}</strong> alanı; tanı ve tedavide modern, kanıta dayalı yöntemler kullanılarak kişiye özel planlama yapılan bir uzmanlık alanıdır.</p>
                            <h2 id="toc_2_H2">Belirtiler Nelerdir?</h2>
                            <ul>
                              <li>Ağrı ve hareket kısıtlılığı</li>
                              <li>Uyuşma, karıncalanma, güçsüzlük</li>
                              <li>Duruş bozukluğu ve dengesizlik</li>
                            </ul>
                            <h3 id="toc_3_H3">Takip Edilen Hastalıklar</h3>
                            <ul>
                              {treatment.conditions.slice(0, 6).map((c, i) => (<li key={i}>{c}</li>))}
                            </ul>
                            <h3 id="toc_4_H3">Sık Görülen Hastalıklar</h3>
                            <p>Yaşa, aktivite düzeyine ve eşlik eden durumlara göre değişiklik gösterebilir.</p>
                            <h3 id="toc_5_H3">Acil Müdahale Gerektiren Durumlar</h3>
                            <ul>
                              <li>Şiddetli ağrı ve hızla artan güç kaybı</li>
                              <li>İdrar-dışkı kontrol kaybı</li>
                              <li>Travma sonrası yeni nörolojik bulgular</li>
                            </ul>
                            <h3 id="toc_6_H3">Kullanılan Yöntemler</h3>
                            <ul>
                              {treatment.procedures.map((p, i) => (<li key={i}>{p}</li>))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
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
        <section id="uzmanlik" className="section section-alt">
          <div className="container">
            <h1>Uzmanlık Alanlarım</h1>
            <p className="section-subtitle">Aşağıdaki uzmanlık alanlarından birini seçerek detaylı bilgi alabilirsiniz.</p>
            <div className="grid cols-3 specialties">
              {Object.keys(treatments).map((treatment, index) => (
                <div 
                  key={index}
                  className="specialty-item"
                  onClick={() => handleTreatmentClick(treatment)}
                >
                  {treatment}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


