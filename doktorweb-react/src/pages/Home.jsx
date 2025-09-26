import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Home() {
  const blogRef = useScrollReveal()
  return (
    <div className="site-main">
      <main id="main">
        <section className="cmt-row about-section-2 clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row pt-20 res-991-pt-0">
                  <div className="col-lg-12">
                    <div className="section-title">
                      <div className="title-header">
                        <h3>Beyin, Sinir ve Omurga Cerrahisi </h3>
                        <h2 className="title">Dr.<br />Doğan ŞENTÜRK  Kimdir?</h2>
                      </div>
                      <div className="title-desc">
                        <p className="text-justify">Dr. Ayşe Kaya 1990 yılında İstanbul'da doğdu. 2014 yılında İstanbul Üniversitesi Tıp Fakültesinden mezun oldu.</p>
                        <p className="text-justify">2015-2019 yılları arasında Ankara Şehir Hastanesinde Dahiliye uzmanlık eğitimini tamamladı. 2020 yılından itibaren kendi kliniğinde hasta kabul etmeye başladı.</p>
                        <p className="text-justify">Mesleki ilgi alanları arasında endokrinoloji ve metabolizma hastalıkları yer almaktadır. Ulusal ve uluslararası birçok kongrede sunumlar yapmış ve makaleler yayınlamıştır.</p>
                        <p className="text-justify">Mesleki ilgi alanları arasında endokrinoloji ve metabolizma hastalıkları yer almaktadır. Ulusal ve uluslararası birçok kongrede sunumlar yapmış ve makaleler yayınlamıştır.</p>
                        <p className="text-justify">Mesleki ilgi alanları arasında endokrinoloji ve metabolizma hastalıkları yer almaktadır. Ulusal ve uluslararası birçok kongrede sunumlar yapmış ve makaleler yayınlamıştır.</p>

                        <Link className="cmt-btn cmt-btn-size-md cmt-btn-shape-square cmt-btn-style-fill cmt-btn-color-dark" to="/hakkimda" rel="noopener" aria-label="icon">Devamını Oku</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 res-991-pt-30">
                <div className="cmt_single_image-wrapper">
                  <img className="img-fluid img-rounded" width="570" height="700" src="/assets/images/doktor_1.png" alt="Dr. Doğan ŞENTÜRK" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cmt-row blog-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3 className="d-none">Dr. Doğan ŞENTÜRK</h3>
                    <span></span>
                    <h2 className="title" style={{ textAlign: 'center' }}>Uzmanlık Alanlarım</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-30">
              <div className="col-lg-4 col-md-6 diabetes-endorinology">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  <div className="featured-thumbnail">
                    <div className="featured-thumbnail-inner">
                      <img width="744" height="544" className="img-fluid" src="/assets/images/hizmetlerimiz_image/bntdvsi.jpg" alt="Omurga Cerrahisi" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <Link to="/tedaviler/omurga-cerrahisi">Omurga Cerrahisi</Link>
                    </div>
                    <div className="featured-desc">
                      <span className="portfolio_category d-none">Dr. Doğan ŞENTÜRK</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 diabetes-endorinology">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  <div className="featured-thumbnail">
                    <div className="featured-thumbnail-inner">
                      <img width="744" height="544" className="img-fluid" src="/assets/images/hizmetlerimiz_image/cltbkm.jpg" alt="Deformite Cerrahisi" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <Link to="/tedaviler/deformite-cerrahisi">Deformite Cerrahisi</Link>
                    </div>
                    <div className="featured-desc">
                      <span className="portfolio_category d-none">Dr. Doğan ŞENTÜRK</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 diabetes-endorinology">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  <div className="featured-thumbnail">
                    <div className="featured-thumbnail-inner">
                      <img width="744" height="544" className="img-fluid" src="/assets/images/hizmetlerimiz_image/frksynellazer.jpg" alt="Endoskopik Omurga Cerrahisi" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <Link to="/tedaviler/endoskopik-omurga-cerrahisi">Endoskopik Omurga Cerrahisi</Link>
                    </div>
                    <div className="featured-desc">
                      <span className="portfolio_category d-none">Dr. Doğan ŞENTÜRK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="blog" className="section section-alt reveal" ref={blogRef}>
          <div className="container">
            <h2 style={{ textAlign: 'center' }}>Blog</h2>
            <p className="section-subtitle" style={{ textAlign: 'center' }}>Güncel bilgilendirme yazılarımdan öne çıkanlar.</p>
            <div className="grid cols-3 cards">
              <article className="card">
                <img src="/assets/images/hizmetlerimiz_image/alnskllndrme.jpg" alt="Blog görseli 1" />
                <h3>Endoskopik Omurga Cerrahisi 101</h3>
                <p>Küçük kesilerle hızlı iyileşme: endoskopik yaklaşımın temelleri.</p>
                <Link className="btn btn-outline" to="/blog/endoskopik-omurga-cerrahisi-101">Devamını oku</Link>
              </article>
              <article className="card">
                <img src="/assets/images/hizmetlerimiz_image/bntdvsi.jpg" alt="Blog görseli 2" />
                <h3>Bel Kayması Belirtileri ve Tedavi</h3>
                <p>Belirtileri tanıma ve kişiye özel tedavi seçeneklerini değerlendirme.</p>
                <Link className="btn btn-outline" to="/blog/endoskopik-omurga-cerrahisi-101">Devamını oku</Link>
              </article>
              <article className="card">
                <img src="/assets/images/hizmetlerimiz_image/cltbkm.jpg" alt="Blog görseli 3" />
                <h3>Skolyozda Tedavi Yaklaşımları</h3>
                <p>Ergen ve erişkin skolyozunda cerrahi-dışı ve cerrahi yöntemler.</p>
                <Link className="btn btn-outline" to="/blog/endoskopik-omurga-cerrahisi-101">Devamını oku</Link>
              </article>
            </div>
          </div>
        </section>
        <div className="fixed-social">
          <a onClick={() => window.gtag_report_conversion && window.gtag_report_conversion()} href="https://wa.me/+905330669156" target="_blank" className="whatsapp" rel="noopener noreferrer" aria-label="WhatsApp ile yazın">
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
      </main>
    </div>
  )
}
