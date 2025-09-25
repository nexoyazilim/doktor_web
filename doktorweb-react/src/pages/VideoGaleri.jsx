export default function VideoGaleri() {
  return (
    <div className="site-main">
      <main id="main">
        {/* Page Header - Full Width */}
        <div className="cmt-page-title-row-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-heading">
                  <h2 className="title">Video Galerisi</h2>
                  <p className="page-title-desc">Dr. Doğan ŞENTÜRK<br/>Beyin, Sinir ve Omurga Cerrahisi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="section">
          <div className="container">
            {/* Video Grid - 3 Columns (FotoGaleri ile aynı yapı) */}
            <div className="gallery row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <div className="video-container">
                    <iframe loading="lazy" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Bel Fıtığı: Tedavi Yaklaşımları" allowFullScreen></iframe>
                  </div>
                  <figcaption className="gallery-caption">Bel Fıtığı: Tedavi Yaklaşımları</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <div className="video-container">
                    <iframe loading="lazy" src="https://www.youtube.com/embed/ysz5S6PUM-U" title="Boyun Fıtığında Mikrocerrahi" allowFullScreen></iframe>
                  </div>
                  <figcaption className="gallery-caption">Boyun Fıtığında Mikrocerrahi</figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <figure className="gallery-item">
                  <div className="video-container">
                    <iframe loading="lazy" src="https://www.youtube.com/embed/oHg5SJYRHA0" title="Skolyozda Tedavi Planlama" allowFullScreen></iframe>
                  </div>
                  <figcaption className="gallery-caption">Skolyozda Tedavi Planlama</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


