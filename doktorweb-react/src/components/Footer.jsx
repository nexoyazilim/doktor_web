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
                          <li className="cmt-social-facebook"><a className=" tooltip-top" target="_blank" href="#" rel="noopener"><i className="ti-facebook"></i></a></li>
                          <li className="cmt-social-youtube"><a className=" tooltip-top" target="_blank" href="#" rel="noopener"><i className="ti-youtube"></i></a></li>
                          <li className="cmt-social-instagram"><a className=" tooltip-top" target="_blank" href="#" rel="noopener"><i className="ti-instagram"></i></a></li>
                          <li className="cmt-social-linkedin"><a className=" tooltip-top" target="_blank" href="#" rel="noopener"><i className="ti-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div></div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4 widget-area"><div className="widget widget-recent-post with-title"><h3 className="widget-title">Menü</h3><ul className="widget_contact_wrapper"><li><p><a href="/ozgecmis" className="footer-link">Hakkımda</a></p></li><li><p><a href="/sayfalar/makaleler" className="footer-link">Makaleler</a></p></li><li><p><a href="/sayfalar/kitaplar-ve-bildiriler" className="footer-link">Kitaplar ve Bildiriler</a></p></li><li><p><a href="/sayfalar/kitap-bolumleri" className="footer-link">Kitap Bölümleri</a></p></li><li><p><a href="/sayfalar/kurslar-ve-sertifikalar" className="footer-link">Kurslar ve Sertifikalar</a></p></li><li><p><a href="/blog" className="footer-link">Blog</a></p></li><li><p><a href="/foto-galeri" className="footer-link">Foto Galeri</a></p></li><li><p><a href="/video-galeri" className="footer-link">Videolar</a></p></li><li><p><a href="/iletisim" className="footer-link">İletişim</a></p></li></ul></div></div>
                <div className="col-sm-4 col-md-4 col-lg-4 widget-area"><div className="widget widget_contact clearfix"><h3 className="widget-title">İletişim</h3><ul className="widget_contact_wrapper"><li><p><strong>Gsm : </strong><a href="tel:+9055 555 55 55"> 0555 555 55 55</a></p></li><li><p><strong>Email : </strong><a href="mailto:info@demo.com">info@demo.com</a></p></li><li><p><strong>Adres : </strong> Ortahisar/Trabzon</p></li><li><p><strong>Çalışma : </strong> Pzt - Cum 08.30 - 22.00</p></li><li><p><strong>Çalışma : </strong> Cts - Pzr 10.00 - 18.00</p></li></ul></div></div>
                <div className="col-sm-4 col-md-4 col-lg-4 widget-area"><div className="widget widget-recent-post with-title"><h3 className="widget-title">Uzmanlık Alanları</h3><ul className="widget_contact_wrapper"><li><p><a href="/tedaviler/omurga-cerrahisi" className="footer-link">Omurga Cerrahisi</a></p></li><li><p><a href="/tedaviler/deformite-cerrahisi" className="footer-link">Deformite Cerrahisi</a></p></li><li><p><a href="/tedaviler/endoskopik-omurga-cerrahisi" className="footer-link">Endoskopik Omurga Cerrahisi</a></p></li><li><p><a href="/tedaviler/periferik-sinir-cerrahisi" className="footer-link">Periferik Sinir Cerrahisi</a></p></li><li><p><a href="/tedaviler/bel-fitigi" className="footer-link">Bel Fıtığı Ameliyatı</a></p></li><li><p><a href="/tedaviler/bel-kaymasi" className="footer-link">Bel Kayması</a></p></li><li><p><a href="/tedaviler/bel-kanal-darligi" className="footer-link">Bel Kanal Darlığı</a></p></li><li><p><a href="/tedaviler/boyun-fitigi" className="footer-link">Boyun Fıtığı Ameliyatı</a></p></li><li><p><a href="/tedaviler/boyun-kanal-darligi" className="footer-link">Boyun Kanal Darlığı</a></p></li><li><p><a href="/tedaviler/srt-ft-torakal-disk-hernisi-nedir-nasl-tedavi-edilir" className="footer-link">Sırt Fıtığı (Torakal Disk Hernisi)</a></p></li><li><p><a href="/tedaviler/omurga-arlarnda-enjeksiyon-tedavisinin-faydalar-nelerdir" className="footer-link">Omurga Ağrılarında Enjeksiyon Tedavisi</a></p></li><li><p><a href="/tedaviler/siyatik-agrisi-tedavisi" className="footer-link">Siyatik Ağrısı Tedavisi</a></p></li><li><p><a href="/tedaviler/omurga-tumorleri-nelerdir-nasil-tedavi-edilir" className="footer-link">Omurga Tümörleri</a></p></li><li><p><a href="/tedaviler/sakrum-tumoru-nedir-nasil-tedavi-edilir" className="footer-link">Sakrum Tümörü</a></p></li><li><p><a href="/tedaviler/tarlov-kisti-nedir-ne-zaman-ameliyat-edilir" className="footer-link">Tarlov Kisti</a></p></li><li><p><a href="/tedaviler/kifoz" className="footer-link">Kifoz</a></p></li><li><p><a href="/tedaviler/gergin-omurilik-sendromu" className="footer-link">Gergin Omurilik Sendromu</a></p></li><li><p><a href="/tedaviler/cocuklarda-skolyoz" className="footer-link">Çocuklarda Skolyoz</a></p></li><li><p><a href="/tedaviler/eriskin-skolyoz" className="footer-link">Erişkin Skolyoz</a></p></li><li><p><a href="/tedaviler/beyin-tumoru" className="footer-link">Beyin Tümörü</a></p></li><li><p><a href="/tedaviler/beyincik-sarkmasi" className="footer-link">Beyincik Sarkması </a></p></li></ul></div></div>
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


