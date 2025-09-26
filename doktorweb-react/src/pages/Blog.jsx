import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div className="site-main">
      {/* Blog Page Header */}
      <div className="cmt-page-title-row-inner">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-title-heading">
                <h1 className="title">Blog</h1>
                <p className="page-title-desc">
                  Beyin, sinir ve omurga cerrahisi alanındaki<br />
                  güncel gelişmeler ve bilgilendirici yazılar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="cmt-row blog-section">
          <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src="/assets/images/doktor_1.png" alt="Endoskopik Omurga Ameliyatı" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">Omurga Cerrahisi</div>
                      <div className="featured-title">
                        <h3><Link to="/blog/endoskopik-omurga-ameliyati">Endoskopik Omurga Ameliyatı Kimler İçin Uygundur?</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>Endoskopik omurga cerrahisi, minimal invaziv bir yöntem olarak bel ve boyun fıtığı tedavisinde giderek daha yaygın kullanılmaktadır.</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to="/blog/endoskopik-omurga-ameliyati">Devamını Oku</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src="/assets/images/doktor_1.png" alt="Bel Kayması" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">Bel Hastalıkları</div>
                      <div className="featured-title">
                        <h3><Link to="/blog/bel-kaymasi-belirtileri">Bel Kayması Nasıl Anlaşılır? Belirtileri ve Tedavi Seçenekleri</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>Bel kayması (spondilolistezis) bel ağrısının önemli nedenlerinden biridir. Erken teşhis ve uygun tedavi seçenekleri ile hastaların yaşam kalitesi artırılabilir.</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to="/blog/bel-kaymasi-belirtileri">Devamını Oku</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src="/assets/images/doktor_1.png" alt="Omurga Ameliyatı" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">Ameliyat Bilgileri</div>
                      <div className="featured-title">
                        <h3><Link to="/blog/omurga-ameliyati-riskleri">Omurga Ameliyatı Riskleri ve Korunma Yolları</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>Omurga ameliyatları günümüzde güvenli yöntemlerle gerçekleştirilmektedir. Ameliyat öncesi ve sonrası dikkat edilmesi gereken noktalar.</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to="/blog/omurga-ameliyati-riskleri">Devamını Oku</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src="/assets/images/doktor_1.png" alt="Çocuklarda Skolyoz" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">Skolyoz</div>
                      <div className="featured-title">
                        <h3><Link to="/blog/cocuklarda-skolyoz">Çocuklarda Skolyoz: Erken Teşhis ve Tedavi</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>Çocukluk çağında görülen skolyoz, erken dönemde fark edildiğinde cerrahi olmayan yöntemlerle başarılı şekilde tedavi edilebilir.</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to="/blog/cocuklarda-skolyoz">Devamını Oku</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src="/assets/images/doktor_1.png" alt="Beyin Tümörü Ameliyatı" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">Beyin Cerrahisi</div>
                      <div className="featured-title">
                        <h3><Link to="/blog/beyin-tumoru-teknolojileri">Beyin Tümörü Ameliyatlarında Yeni Teknolojiler</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>Beyin tümörü cerrahisinde kullanılan son teknolojiler, hasta güvenliğini artırırken ameliyat başarısını da önemli ölçüde yükseltmektedir.</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to="/blog/beyin-tumoru-teknolojileri">Devamını Oku</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="featured-imagebox-blog style2">
                    <div className="featured-thumbnail">
                      <img src="/assets/images/doktor_1.png" alt="Rehabilitasyon" />
                    </div>
                    <div className="featured-content">
                      <div className="ser_category">Rehabilitasyon</div>
                      <div className="featured-title">
                        <h3><Link to="/blog/omurga-ameliyati-rehabilitasyon">Omurga Ameliyatı Sonrası Rehabilitasyon Süreci</Link></h3>
                      </div>
                      <div className="featured-desc">
                        <p>Ameliyat sonrası rehabilitasyon, başarılı bir iyileşme süreci için kritik öneme sahiptir. Fizik tedavi programları ve egzersiz önerileri.</p>
                      </div>
                      <div className="featured-bottom">
                        <Link to="/blog/omurga-ameliyati-rehabilitasyon">Devamını Oku</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


