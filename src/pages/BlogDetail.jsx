import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { getLocalizedUrl } from '../utils/urlHelper'

export default function BlogDetail() {
  const { t, i18n } = useTranslation()
  const { slug } = useParams()

  const posts = {
    'burun-estetigi-dogal-gorunum': {
      title: 'Burun Estetiği: Doğal Görünümün Sırları',
      subtitle: 'Doğal ve güzel bir burun için estetik cerrahi yaklaşımları',
      category: 'Yüz Estetiği',
      date: '15 Aralık 2024',
      readTime: '8 dk okuma',
      imageAlt: 'Burun Estetiği',
      imageSeed: 'alnskllndrme',
    },
    'meme-estetigi-guvenli-yontemler': {
      title: 'Meme Estetiği: Güvenli ve Etkili Yöntemler',
      subtitle: 'Meme büyütme, küçültme ve dikleştirme işlemlerinde modern teknikler',
      category: 'Meme Estetiği',
      date: '12 Aralık 2024',
      readTime: '7 dk okuma',
      imageAlt: 'Meme Estetiği',
      imageSeed: 'bntdvsi',
    },
    'liposuction-vucut-sekillendirme': {
      title: 'Liposuction: Vücut Şekillendirme Yöntemleri',
      subtitle: 'Modern teknikler ve güvenli uygulama yöntemleri',
      category: 'Vücut Estetiği',
      date: '10 Aralık 2024',
      readTime: '6 dk okuma',
      imageAlt: 'Liposuction',
      imageSeed: 'cltbkm',
    },
    'sac-ekimi-teknikler': {
      title: 'Saç Ekimi: Modern Teknikler ve Sonuçlar',
      subtitle: 'FUE, FUT ve DHI teknikleri ile saç ekimi',
      category: 'Saç Ekimi',
      date: '8 Aralık 2024',
      readTime: '5 dk okuma',
      imageAlt: 'Saç Ekimi',
      imageSeed: 'frksynellazer',
    },
    'yaslanma-karsiti-estetik': {
      title: 'Yaşlanma Karşıtı Estetik: Botoks ve Dolgu',
      subtitle: 'Botoks ve dolgu uygulamaları ile genç görünüm',
      category: 'Non-İnvaziv Estetik',
      date: '6 Aralık 2024',
      readTime: '6 dk okuma',
      imageAlt: 'Anti-Aging',
      imageSeed: 'frksynellazer',
    },
    'estetik-cerrahi-iyilesme': {
      title: 'Estetik Cerrahi Sonrası İyileşme Süreci',
      subtitle: 'Estetik cerrahi sonrası bakım ve iyileşme',
      category: 'Estetik Cerrahi',
      date: '4 Aralık 2024',
      readTime: '5 dk okuma',
      imageAlt: 'Estetik Cerrahi İyileşme',
      imageSeed: 'aesthetic-recovery',
    },
  }

  const post = posts[slug] || posts['burun-estetigi-dogal-gorunum']

  return (
    <div className="site-main">
          {/* Hero Section */}
          <section className="blog-hero">
            <div className="container">
              <div className="blog-hero-content">
                <nav className="breadcrumb">
                  <Link to={getLocalizedUrl('home', i18n.language)}>{t('blogDetail.breadcrumb.home')}</Link>
                  <span className="divider">/</span>
                  <Link to={getLocalizedUrl('blog', i18n.language)}>{t('blogDetail.breadcrumb.blog')}</Link>
                  <span className="divider">/</span>
                  <span>{post.title}</span>
                </nav>
                <h1>{post.title}</h1>
                <div className="blog-meta">
                  <div className="author-info">
                    <img src="/doktor_web/assets/images/doktor_1.png" alt="Dr. Elif YAMAN" className="author-avatar" />
                    <div className="author-details">
                      <span className="author-name">{t('blogDetail.author.name')}</span>
                      <span className="author-title">{t('blogDetail.author.title')}</span>
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
                    <img src={`/doktor_web/assets/images/hizmetlerimiz_image/${post.imageSeed}.jpg`} alt={post.imageAlt} />
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
                      <h3>{t('blogDetail.cta.title')}</h3>
                      <p>
                        {t('blogDetail.cta.description')}
                      </p>
                      <div className="cta-buttons">
                        <Link to="/iletisim" className="btn btn-primary">{t('blogDetail.cta.contact')}</Link>
                        <Link to="/randevu" className="btn btn-outline">{t('blogDetail.cta.appointment')}</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="article-sidebar">
                  <div className="sidebar-widget">
                    <h3>{t('blogDetail.sidebar.aboutAuthor')}</h3>
                    <div className="author-card">
                      <img src="/doktor_web/assets/images/doktor_1.png" alt="Dr. Elif YAMAN" />
                      <h4>{t('blogDetail.author.name')}</h4>
                      <p>{t('blogDetail.author.title')}</p>
                      <p>{t('blogDetail.author.description')}</p>
                    </div>
                  </div>

                  <div className="sidebar-widget">
                    <h3>{t('blogDetail.sidebar.relatedPosts')}</h3>
                    <div className="related-posts">
                      <div className="related-post">
                        <img src="/doktor_web/assets/images/hizmetlerimiz_image/alnskllndrme.jpg" alt="İlgili makale" />
                        <div className="related-content">
                          <h4><Link to={getLocalizedUrl('blog', i18n.language)}>{t('blogDetail.relatedPosts.rhinoplasty')}</Link></h4>
                          <span className="related-date">10 Aralık 2024</span>
                        </div>
                      </div>
                      <div className="related-post">
                        <img src="/doktor_web/assets/images/hizmetlerimiz_image/bntdvsi.jpg" alt="İlgili makale" />
                        <div className="related-content">
                          <h4><Link to={getLocalizedUrl('blog', i18n.language)}>{t('blogDetail.relatedPosts.breastSurgery')}</Link></h4>
                          <span className="related-date">5 Aralık 2024</span>
                        </div>
                      </div>
                      <div className="related-post">
                        <img src="/doktor_web/assets/images/hizmetlerimiz_image/cltbkm.jpg" alt="İlgili makale" />
                        <div className="related-content">
                          <h4><Link to={getLocalizedUrl('blog', i18n.language)}>{t('blogDetail.relatedPosts.physiotherapy')}</Link></h4>
                          <span className="related-date">1 Aralık 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-widget">
                    <h3>{t('blogDetail.sidebar.specialties')}</h3>
                    <div className="specialties-list">
                      <Link to="/tedaviler">{t('treatments.categories.rhinoplasty.title')}</Link>
                      <Link to="/tedaviler">{t('treatments.categories.breastAugmentation.title')}</Link>
                      <Link to="/tedaviler">{t('treatments.categories.liposuction.title')}</Link>
                      <Link to="/tedaviler">{t('treatments.categories.botox.title')}</Link>
                      <Link to="/tedaviler">{t('treatments.categories.hairTransplant.title')}</Link>
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
