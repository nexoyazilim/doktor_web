import { Link, useParams } from 'react-router-dom'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function BlogDetail() {
  const { slug } = useParams()

  const posts = {
    'endoskopik-omurga-ameliyati': {
      title: 'Endoskopik Omurga Ameliyatı Kimler İçin Uygundur?',
      subtitle: 'Küçük kesilerle hızlı iyileşme',
      category: 'Omurga Cerrahisi',
      date: '15 Aralık 2024',
      readTime: '8 dk okuma',
      imageAlt: 'Endoskopik Omurga Cerrahisi',
      imageSeed: 'endoscopic-spine',
    },
    'bel-kaymasi-belirtileri': {
      title: 'Bel Kayması Nasıl Anlaşılır? Belirtileri ve Tedavi Seçenekleri',
      subtitle: 'Spondilolistezis hakkında bilmeniz gerekenler',
      category: 'Bel Hastalıkları',
      date: '12 Aralık 2024',
      readTime: '7 dk okuma',
      imageAlt: 'Bel Kayması',
      imageSeed: 'spondylolisthesis',
    },
    'omurga-ameliyati-riskleri': {
      title: 'Omurga Ameliyatı Riskleri ve Korunma Yolları',
      subtitle: 'Güvenli cerrahi için hazırlık',
      category: 'Ameliyat Bilgileri',
      date: '10 Aralık 2024',
      readTime: '6 dk okuma',
      imageAlt: 'Omurga Ameliyatı',
      imageSeed: 'spine-surgery',
    },
    'cocuklarda-skolyoz': {
      title: 'Çocuklarda Skolyoz: Erken Teşhis ve Tedavi',
      subtitle: 'Erken dönemde doğru yaklaşım',
      category: 'Skolyoz',
      date: '8 Aralık 2024',
      readTime: '5 dk okuma',
      imageAlt: 'Çocuklarda Skolyoz',
      imageSeed: 'pediatric-scoliosis',
    },
    'beyin-tumoru-teknolojileri': {
      title: 'Beyin Tümörü Ameliyatlarında Yeni Teknolojiler',
      subtitle: 'Güvenliği artıran modern yaklaşımlar',
      category: 'Beyin Cerrahisi',
      date: '6 Aralık 2024',
      readTime: '6 dk okuma',
      imageAlt: 'Beyin Cerrahisi',
      imageSeed: 'brain-surgery-tech',
    },
    'omurga-ameliyati-rehabilitasyon': {
      title: 'Omurga Ameliyatı Sonrası Rehabilitasyon Süreci',
      subtitle: 'Hızlı ve güvenli iyileşme',
      category: 'Rehabilitasyon',
      date: '4 Aralık 2024',
      readTime: '5 dk okuma',
      imageAlt: 'Rehabilitasyon',
      imageSeed: 'rehabilitation',
    },
  }

  const post = posts[slug] || posts['endoskopik-omurga-ameliyati']

  return (
    <div className="site-main">
          {/* Hero Section */}
          <section className="blog-hero">
            <div className="container">
              <div className="blog-hero-content">
                <nav className="breadcrumb">
                  <Link to="/">Ana Sayfa</Link>
                  <span className="divider">/</span>
                  <Link to="/blog">Blog</Link>
                  <span className="divider">/</span>
                  <span>{post.title}</span>
                </nav>
                <h1>{post.title}</h1>
                <div className="blog-meta">
                  <div className="author-info">
                    <img src="/assets/images/doktor_1.png" alt="Dr. Doğan ŞENTÜRK" className="author-avatar" />
                    <div className="author-details">
                      <span className="author-name">Dr. Doğan ŞENTÜRK</span>
                      <span className="author-title">Beyin, Sinir ve Omurga Cerrahisi Uzmanı</span>
                    </div>
                  </div>
                  <div className="publish-info">
                    <span className="publish-date">{post.date}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <article className="blog-article">
            <div className="container">
              <div className="article-wrapper">
                <div className="article-content">
                  {/* Featured Image */}
                  <div className="featured-image">
                    <img src={`https://picsum.photos/seed/${post.imageSeed}/1200/600`} alt={post.imageAlt} />
                    <div className="image-caption">
                      {post.subtitle}
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="article-body">
                    <p className="lead">
                      Endoskopik omurga cerrahisi, geleneksel açık cerrahi yöntemlerine göre çok daha küçük kesilerle 
                      omurga problemlerinin tedavi edilmesini sağlayan modern bir yaklaşımdır. Bu teknik, hastaların 
                      daha hızlı iyileşmesini ve daha az ağrı yaşamasını mümkün kılar.
                    </p>

                    <h2>Endoskopik Omurga Cerrahisi Nedir?</h2>
                    <p>
                      Endoskopik omurga cerrahisi, omurga problemlerinin tedavisinde kullanılan minimal invaziv bir 
                      cerrahi yöntemidir. Bu teknikte, cerrah omurga bölgesine çok küçük bir kesi (genellikle 1-2 cm) 
                      yaparak endoskop adı verilen ince bir tüp ile işlemi gerçekleştirir.
                    </p>


                    <h2>Hangi Durumlarda Uygulanır?</h2>
                    <p>
                      Endoskopik omurga cerrahisi özellikle aşağıdaki durumlarda etkili bir tedavi seçeneğidir:
                    </p>

                    <div className="treatment-grid">
                      <div className="treatment-item">
                        <div className="treatment-icon">
                          <i className="fa fa-stethoscope"></i>
                        </div>
                        <h4>Bel Fıtığı</h4>
                        <p>Lomber disk hernisi tedavisinde endoskopik diskektomi</p>
                      </div>
                      <div className="treatment-item">
                        <div className="treatment-icon">
                          <i className="fa fa-user-md"></i>
                        </div>
                        <h4>Boyun Fıtığı</h4>
                        <p>Cervical disk hernisi için endoskopik yaklaşım</p>
                      </div>
                      <div className="treatment-item">
                        <div className="treatment-icon">
                          <i className="fa fa-heartbeat"></i>
                        </div>
                        <h4>Spinal Stenoz</h4>
                        <p>Omurga kanal darlığı tedavisinde endoskopik dekompresyon</p>
                      </div>
                    </div>

                    <h2>İşlem Süreci</h2>
                    <p>
                      Endoskopik omurga cerrahisi genellikle genel anestezi altında gerçekleştirilir. İşlem süreci 
                      şu aşamalardan oluşur:
                    </p>

                    <div className="process-steps">
                      <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                          <h4>Hazırlık</h4>
                          <p>Hasta genel anestezi altına alınır ve uygun pozisyon verilir</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>Kesi</h4>
                          <p>Omurga bölgesine 1-2 cm'lik küçük bir kesi yapılır</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>Endoskop Yerleştirme</h4>
                          <p>Endoskop ve cerrahi aletler küçük kesiden içeri sokulur</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>Cerrahi İşlem</h4>
                          <p>Endoskopik görüntü altında gerekli cerrahi işlem gerçekleştirilir</p>
                        </div>
                      </div>
                    </div>

                    <h2>İyileşme Süreci</h2>
                    <p>
                      Endoskopik omurga cerrahisi sonrası iyileşme süreci, geleneksel açık cerrahiye göre çok daha 
                      hızlıdır. Hastalar genellikle:
                    </p>

                    <div className="recovery-timeline">
                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h4>İlk 24 Saat</h4>
                          <p>Hastanede gözlem altında tutulma, ağrı kontrolü</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h4>1-3 Gün</h4>
                          <p>Hastaneden taburcu, hafif aktivitelere başlama</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h4>1-2 Hafta</h4>
                          <p>Günlük aktivitelere dönüş, fizik tedavi başlangıcı</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h4>4-6 Hafta</h4>
                          <p>Tam iyileşme, normal yaşam aktivitelerine dönüş</p>
                        </div>
                      </div>
                    </div>

                    <div className="cta-section">
                      <h3>Endoskopik Omurga Cerrahisi Hakkında Daha Fazla Bilgi</h3>
                      <p>
                        Endoskopik omurga cerrahisi hakkında detaylı bilgi almak veya bu tedavi yönteminin 
                        sizin için uygun olup olmadığını öğrenmek için bizimle iletişime geçebilirsiniz.
                      </p>
                      <div className="cta-buttons">
                        <Link to="/iletisim" className="btn btn-primary">İletişime Geç</Link>
                        <Link to="/randevu" className="btn btn-outline">Randevu Al</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="article-sidebar">
                  <div className="sidebar-widget">
                    <h3>Yazar Hakkında</h3>
                    <div className="author-card">
                      <img src="/assets/images/doktor_1.png" alt="Dr. Doğan ŞENTÜRK" />
                      <h4>Dr. Doğan ŞENTÜRK</h4>
                      <p>Beyin, Sinir ve Omurga Cerrahisi Uzmanı</p>
                      <p>Endoskopik omurga cerrahisi konusunda uzmanlaşmış, 15+ yıl deneyimli cerrah.</p>
                    </div>
                  </div>

                  <div className="sidebar-widget">
                    <h3>İlgili Makaleler</h3>
                    <div className="related-posts">
                      <div className="related-post">
                        <img src="https://picsum.photos/seed/related1/150/100" alt="İlgili makale" />
                        <div className="related-content">
                          <h4><Link to="/blog">Bel Fıtığı Ameliyatı Sonrası İyileşme</Link></h4>
                          <span className="related-date">10 Aralık 2024</span>
                        </div>
                      </div>
                      <div className="related-post">
                        <img src="https://picsum.photos/seed/related2/150/100" alt="İlgili makale" />
                        <div className="related-content">
                          <h4><Link to="/blog">Skolyoz Tedavisinde Yeni Yaklaşımlar</Link></h4>
                          <span className="related-date">5 Aralık 2024</span>
                        </div>
                      </div>
                      <div className="related-post">
                        <img src="https://picsum.photos/seed/related3/150/100" alt="İlgili makale" />
                        <div className="related-content">
                          <h4><Link to="/blog">Omurga Ağrılarında Fizik Tedavi</Link></h4>
                          <span className="related-date">1 Aralık 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-widget">
                    <h3>Uzmanlık Alanları</h3>
                    <div className="specialties-list">
                      <Link to="/tedaviler">Omurga Cerrahisi</Link>
                      <Link to="/tedaviler">Endoskopik Cerrahi</Link>
                      <Link to="/tedaviler">Bel Fıtığı</Link>
                      <Link to="/tedaviler">Boyun Fıtığı</Link>
                      <Link to="/tedaviler">Skolyoz</Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </article>
          <WhatsAppButton />
          <LanguageSwitcher />
        </div>
  )
}
