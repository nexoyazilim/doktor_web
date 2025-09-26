export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer widget-footer clearfix">
      <div className="first-footer bg-base-skin">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="featured-icon-box icon-align-before-content style5">
                <div className="featured-content"><div className="featured-title"><h3>ATAŞEHİR İSTANBUL</h3></div></div>
                <div className="featured-icon"><div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-md cmt-icon_element-color-white"><i className="fa fa-map-marker"></i></div></div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="featured-icon-box style6">
                <div className="featured-icon"><div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-white"><i className="fa fa-life-ring"></i></div></div>
                <div className="featured-content"><div className="featured-title"><h3>Bana Ulaşın</h3></div><div className="featured-desc"><p><a href="tel:+9055 555 55 55 "> 0555 555 55 55</a></p></div></div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="featured-icon-box icon-align-before-content style5 reverse">
                <div className="featured-icon"><div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-md cmt-icon_element-color-white"><i className="fa fa-heartbeat"></i></div></div>
                <div className="featured-content"><div className="featured-title"><h3>Bana UlaşabİLİRSİNİZ</h3></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-footer bg-base-dark bg-img2">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-sm-12 col-md-12 col-lg-5 pr-30 res-991-pr-0">
              <div className="row"><div className="col-sm-12 col-md-12 col-lg-10 widget-area"><div className="widget widget_text clearfix">
                <div className="footer-logo"><img id="footer-logo-img" className="img-fluid auto_size" height="92" width="400" src="/assets/images/doktor_1.png" alt="Prof. Dr. Demo" /></div>
                <div className="textwidget widget-text"><p>Prof. Dr. Demo hakkında kısa tanıtım alanı. Bu metni kendi içeriklerinizle güncelleyebilirsiniz.</p></div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="cmt-section footer-subscribebox">
                    <p>Beni Sosyal Medyada Takip Edin</p>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 widget-area">
                      <div className="widget cmt-social-links-wrapper">
                        <ul className="social-icons">
                          <li className="cmt-social-facebook">
                            <a className=" tooltip-top" target="_blank" href="#" rel="noopener">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                            </a>
                          </li>
                          <li className="cmt-social-youtube">
                            <a className=" tooltip-top" target="_blank" href="#" rel="noopener">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                            </a>
                          </li>
                          <li className="cmt-social-instagram">
                            <a className=" tooltip-top" target="_blank" href="#" rel="noopener">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                            </a>
                          </li>
                          <li className="cmt-social-linkedin">
                            <a className=" tooltip-top" target="_blank" href="#" rel="noopener">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div></div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4 widget-area"><div className="widget widget-recent-post with-title"><h3 className="widget-title">Menü</h3><ul className="widget_contact_wrapper"><li><p><a href="/hakkimda" className="footer-link">Hakkımda</a></p></li><li><p><a href="/akademik" className="footer-link">Akademik</a></p></li><li><p><a href="/tedaviler" className="footer-link">Tedaviler</a></p></li><li><p><a href="/blog" className="footer-link">Blog</a></p></li><li><p><a href="/foto-galeri" className="footer-link">Foto Galeri</a></p></li><li><p><a href="/video-galeri" className="footer-link">Video Galeri</a></p></li><li><p><a href="/iletisim" className="footer-link">İletişim</a></p></li></ul></div></div>
                <div className="col-sm-4 col-md-4 col-lg-4 widget-area"><div className="widget widget_contact clearfix"><h3 className="widget-title">İletişim</h3><ul className="widget_contact_wrapper"><li><p><strong>Gsm : </strong><a href="tel:+9055 555 55 55"> 0555 555 55 55</a></p></li><li><p><strong>Email : </strong><a href="mailto:info@demo.com">info@demo.com</a></p></li><li><p><strong>Adres : </strong> Ortahisar/Trabzon</p></li><li><p><strong>Çalışma : </strong> Pzt - Cum 08.30 - 22.00</p></li><li><p><strong>Çalışma : </strong> Cts - Pzr 10.00 - 18.00</p></li></ul></div></div>
                <div className="col-sm-4 col-md-4 col-lg-4 widget-area"><div className="widget widget-recent-post with-title"><h3 className="widget-title">Uzmanlık Alanları</h3><ul className="widget_contact_wrapper"><li><p><a href="/tedaviler?sec=boyun-fitigi-ameliyati" className="footer-link">Boyun Fıtığı Ameliyatı</a></p></li><li><p><a href="/tedaviler?sec=boyun-kanal-darligi" className="footer-link">Boyun Kanal Darlığı</a></p></li><li><p><a href="/tedaviler?sec=sirt-fitigi" className="footer-link">Sırt Fıtığı</a></p></li><li><p><a href="/tedaviler?sec=omurga-agrilarinda-enjeksiyon" className="footer-link">Omurga Ağrılarında Enjeksiyon</a></p></li><li><p><a href="/tedaviler?sec=siyatik-agrisi" className="footer-link">Siyatik Ağrısı Tedavisi</a></p></li><li><p><a href="/tedaviler?sec=omurga-tumorleri" className="footer-link">Omurga Tümörleri</a></p></li><li><p><a href="/tedaviler?sec=kifoz" className="footer-link">Kifoz</a></p></li><li><p><a href="/tedaviler?sec=cocuklarda-skolyoz" className="footer-link">Çocuklarda Skolyoz</a></p></li><li><p><a href="/tedaviler?sec=eriskin-skolyoz" className="footer-link">Erişkin Skolyoz</a></p></li><li><p><a href="/tedaviler?sec=beyin-tumoru" className="footer-link">Beyin Tümörü</a></p></li></ul></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer-text bg-base-dark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                 <a className="text-white" target="_blank" href="">Prof. Dr. Demo </a> {year} Tüm Hakları Saklıdır.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


