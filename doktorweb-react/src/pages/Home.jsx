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
                      <img width="744" height="544" className="img-fluid" src="https://www.salimsenturk.com/uploads/_blogkCrop/doctor-points-to-model-spine.jpg" alt="Omurga Cerrahisi" />
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
                      <img width="744" height="544" className="img-fluid" src="https://www.salimsenturk.com/uploads/_blogkCrop/patient-in-evaluation-for-idiopathic-scoliosis.jpg" alt="Deformite Cerrahisi" />
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
                      <img width="744" height="544" className="img-fluid" src="https://www.salimsenturk.com/uploads/_blogkCrop/1635969070-endoscopic-spine.jpg" alt="Endoskopik Omurga Cerrahisi" />
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

        <section id="tani-tedavi" className="section section-alt reveal revealed">
          <div className="container">
            <h2 style={{ textAlign: 'center' }}>Tanı / Tedavi</h2>
            <p className="section-subtitle" style={{ textAlign: 'center' }}>Sık başvurulan tanı ve tedavi başlıklarım.</p>
            <div className="grid cols-3 cards">
              <article className="card">
                <img loading="lazy" src="https://picsum.photos/seed/belfitigi/744/420" alt="Bel Fıtığı" className="treatment-img" />
                <h3>Bel Fıtığı</h3>
                <p>Bacak ağrısı, uyuşma ve güçsüzlükte modern tedavi yaklaşımları.</p>
                <Link className="btn btn-outline" to="/tedaviler/bel-fitigi">İncele</Link>
              </article>
              <article className="card">
                <img loading="lazy" src="https://picsum.photos/seed/boyunfitigi/744/420" alt="Boyun Fıtığı" className="treatment-img" />
                <h3>Boyun Fıtığı</h3>
                <p>Kol ağrısı ve elde uyuşma için mikrocerrahi ve endoskopik seçenekler.</p>
                <Link className="btn btn-outline" to="/tedaviler/boyun-fitigi">İncele</Link>
              </article>
              <article className="card">
                <img loading="lazy" src="https://picsum.photos/seed/belkanaldarligi/744/420" alt="Bel Kanal Darlığı" className="treatment-img" />
                <h3>Bel Kanal Darlığı</h3>
                <p>Yürüme mesafesini kısaltan dar kanal sorunlarında kişiye özel çözümler.</p>
                <Link className="btn btn-outline" to="/tedaviler/bel-kanal-darligi">İncele</Link>
              </article>
            </div>
          </div>
        </section>

        <section id="blog" className="section section-alt reveal" ref={blogRef}>
          <div className="container">
            <h2 style={{ textAlign: 'center' }}>Blog</h2>
            <p className="section-subtitle" style={{ textAlign: 'center' }}>Güncel bilgilendirme yazılarımdan öne çıkanlar.</p>
            <div className="grid cols-3 cards">
              <article className="card">
                <img src="https://picsum.photos/seed/blog1/744/420" alt="Blog görseli 1" />
                <h3>Endoskopik Omurga Cerrahisi 101</h3>
                <p>Küçük kesilerle hızlı iyileşme: endoskopik yaklaşımın temelleri.</p>
                <a className="btn btn-outline" href="/blog.html">Devamını oku</a>
              </article>
              <article className="card">
                <img src="https://picsum.photos/seed/blog2/744/420" alt="Blog görseli 2" />
                <h3>Bel Kayması Belirtileri ve Tedavi</h3>
                <p>Belirtileri tanıma ve kişiye özel tedavi seçeneklerini değerlendirme.</p>
                <a className="btn btn-outline" href="/blog.html">Devamını oku</a>
              </article>
              <article className="card">
                <img src="https://picsum.photos/seed/blog3/744/420" alt="Blog görseli 3" />
                <h3>Skolyozda Tedavi Yaklaşımları</h3>
                <p>Ergen ve erişkin skolyozunda cerrahi-dışı ve cerrahi yöntemler.</p>
                <a className="btn btn-outline" href="/blog.html">Devamını oku</a>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


