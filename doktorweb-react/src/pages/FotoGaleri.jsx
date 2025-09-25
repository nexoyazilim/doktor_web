export default function FotoGaleri() {
  return (
    <div className="site-main">
      <main id="main">
        {/* Page Header - Full Width */}
        <div className="cmt-page-title-row-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-heading">
                  <h2 className="title">Fotoğraf Galerisi</h2>
                  <p className="page-title-desc">Dr. Doğan ŞENTÜRK<br/>Beyin, Sinir ve Omurga Cerrahisi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="section">
          <div className="container">
            
            {/* Gallery Grid - 3 Columns */}
            <div className="gallery row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 1">
                    <img loading="lazy" src="https://picsum.photos/seed/photo1/400/300" alt="Klinikten bir kare" />
                  </a>
                  <figcaption className="gallery-caption">Klinikten bir kare</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 2">
                    <img loading="lazy" src="https://picsum.photos/seed/photo2/400/300" alt="Ekip çalışması" />
                  </a>
                  <figcaption className="gallery-caption">Ekip çalışması</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 3">
                    <img loading="lazy" src="https://picsum.photos/seed/photo3/400/300" alt="Etkinlik anı" />
                  </a>
                  <figcaption className="gallery-caption">Etkinlik anı</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 4">
                    <img loading="lazy" src="https://picsum.photos/seed/photo4/400/300" alt="Kongre katılımı" />
                  </a>
                  <figcaption className="gallery-caption">Kongre katılımı</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 5">
                    <img loading="lazy" src="https://picsum.photos/seed/photo5/400/300" alt="Ameliyat öncesi hazırlık" />
                  </a>
                  <figcaption className="gallery-caption">Ameliyat öncesi hazırlık</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <a href="#" aria-label="Galeri 6">
                    <img loading="lazy" src="https://picsum.photos/seed/photo6/400/300" alt="Hasta konsültasyonu" />
                  </a>
                  <figcaption className="gallery-caption">Hasta konsültasyonu</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


