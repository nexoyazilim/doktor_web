export default function Hakkimda() {
  return (
    <div className="site-main">
      <main id="main">
        {/* Page Header */}
        <div className="cmt-page-title-row-inner">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-title-heading">
                  <h1 className="title">Hakkımda</h1>
                  <p className="page-title-desc">
                   Dr. Doğan ŞENTÜRK<br />
                    Beyin, Sinir ve Omurga Cerrahisi Uzmanı
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="section about-hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="about-image">
                  <img 
                    src="/assets/images/doktor_1.png" 
                    alt="Dr. Doğan ŞENTÜRK" 
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="about-content">
                  <h2>Dr. Doğan ŞENTÜRK</h2>
                  <h3>Beyin, Sinir ve Omurga Cerrahisi Uzmanı</h3>
                  <p className="lead">
                    20 yılı aşkın deneyimimle beyin, sinir ve omurga cerrahisi alanında 
                    binlerce hastaya hizmet verdim. Minimal invaziv cerrahi teknikleri 
                    ve modern tedavi yöntemleri konusunda uzmanım.
                  </p>
                  <div className="about-stats">
                    <div className="stat-item">
                      <span className="stat-number">20+</span>
                      <span className="stat-label">Yıl Deneyim</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">5000+</span>
                      <span className="stat-label">Başarılı Ameliyat</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">42</span>
                      <span className="stat-label">Bilimsel Yayın</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="section education-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="education-card">
                  <h3>Eğitim</h3>
                  <div className="education-list">
                    <div className="education-item">
                      <div className="education-icon">
                        <i className="ti-medall"></i>
                      </div>
                      <div className="education-content">
                        <h4>Profesör</h4>
                        <p>İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi</p>
                        <span className="education-year">2015 - Devam</span>
                      </div>
                    </div>
                    <div className="education-item">
                      <div className="education-icon">
                        <i className="ti-cup"></i>
                      </div>
                      <div className="education-content">
                        <h4>Doçent</h4>
                        <p>Beyin ve Sinir Cerrahisi Anabilim Dalı</p>
                        <span className="education-year">2010 - 2015</span>
                      </div>
                    </div>
                    <div className="education-item">
                      <div className="education-icon">
                        <i className="ti-book"></i>
                      </div>
                      <div className="education-content">
                        <h4>Uzman Doktor</h4>
                        <p>Beyin ve Sinir Cerrahisi Uzmanlığı</p>
                        <span className="education-year">2005 - 2010</span>
                      </div>
                    </div>
                    <div className="education-item">
                      <div className="education-icon">
                        <i className="ti-graduation-cap"></i>
                      </div>
                      <div className="education-content">
                        <h4>Tıp Doktoru</h4>
                        <p>İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi</p>
                        <span className="education-year">1999 - 2005</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="experience-card">
                  <h3>Deneyim</h3>
                  <div className="experience-list">
                    <div className="experience-item">
                      <div className="experience-icon">
                        <i className="ti-hospital"></i>
                      </div>
                      <div className="experience-content">
                        <h4>Başhekim</h4>
                        <p>Özel Hastane - Beyin ve Sinir Cerrahisi</p>
                        <span className="experience-year">2018 - Devam</span>
                      </div>
                    </div>
                    <div className="experience-item">
                      <div className="experience-icon">
                        <i className="ti-user"></i>
                      </div>
                      <div className="experience-content">
                        <h4>Klinik Şefi</h4>
                        <p>Beyin ve Sinir Cerrahisi Kliniği</p>
                        <span className="experience-year">2015 - 2018</span>
                      </div>
                    </div>
                    <div className="experience-item">
                      <div className="experience-icon">
                        <i className="ti-stethoscope"></i>
                      </div>
                      <div className="experience-content">
                        <h4>Uzman Doktor</h4>
                        <p>Çeşitli Devlet Hastaneleri</p>
                        <span className="experience-year">2010 - 2015</span>
                      </div>
                    </div>
                    <div className="experience-item">
                      <div className="experience-icon">
                        <i className="ti-world"></i>
                      </div>
                      <div className="experience-content">
                        <h4>Fellowship</h4>
                        <p>Almanya - Minimal İnvaziv Cerrahi</p>
                        <span className="experience-year">2008 - 2009</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="section specializations-section">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2>Uzmanlık Alanlarım</h2>
              <p>Beyin, sinir ve omurga cerrahisi alanında uzmanlaştığım konular</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="specialization-card">
                  <div className="specialization-icon">
                    <i className="ti-heart"></i>
                  </div>
                  <h4>Omurga Cerrahisi</h4>
                  <p>Bel ve boyun fıtığı, omurga deformiteleri, minimal invaziv cerrahi teknikleri</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="specialization-card">
                  <div className="specialization-icon">
                    <i className="ti-shield"></i>
                  </div>
                  <h4>Beyin Cerrahisi</h4>
                  <p>Beyin tümörleri, kafa travmaları, beyin kanamaları ve cerrahi tedavileri</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="specialization-card">
                  <div className="specialization-icon">
                    <i className="ti-pulse"></i>
                  </div>
                  <h4>Sinir Cerrahisi</h4>
                  <p>Periferik sinir yaralanmaları, karpal tünel sendromu, sinir onarımı</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="specialization-card">
                  <div className="specialization-icon">
                    <i className="ti-target"></i>
                  </div>
                  <h4>Endoskopik Cerrahi</h4>
                  <p>Minimal invaziv endoskopik omurga cerrahisi ve avantajları</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="specialization-card">
                  <div className="specialization-icon">
                    <i className="ti-user"></i>
                  </div>
                  <h4>Pediatrik Cerrahi</h4>
                  <p>Çocuklarda omurga deformiteleri, skolyoz ve konjenital anomaliler</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="specialization-card">
                  <div className="specialization-icon">
                    <i className="ti-settings"></i>
                  </div>
                  <h4>Robotik Cerrahi</h4>
                  <p>Robot destekli cerrahi teknikleri ve yüksek hassasiyetli operasyonlar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section philosophy-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 mx-auto text-center">
                <div className="philosophy-card">
                  <h2>Hekimlik Felsefem</h2>
                  <blockquote>
                    "Her hasta benim için özeldir. Minimal invaziv tekniklerle maksimum 
                    tedavi başarısı sağlamak, hastalarımın yaşam kalitesini artırmak 
                    ve onlara en iyi hizmeti sunmak temel prensibimdir."
                  </blockquote>
                  <div className="philosophy-signature">
                    <p><strong>Dr. Doğan ŞENTÜRK</strong></p>
                    <p>Beyin, Sinir ve Omurga Cerrahisi Uzmanı</p>
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


