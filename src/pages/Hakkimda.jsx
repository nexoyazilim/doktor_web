import { useTranslation } from 'react-i18next'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function Hakkimda() {
  const { t } = useTranslation()
  return (
    <div className="site-main">
      <main id="main">


        {/* Bilgilendirici Paragraflar */}
        <section className="section info-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="info-content">
                  <h3>Estetik Cerrahi Yaklaşımım</h3>
                  <p>
                    Estetik cerrahi, sadece fiziksel değişim değil, aynı zamanda kişinin kendine olan güvenini artıran ve yaşam kalitesini yükselten bir sanattır. 20 yılı aşkın deneyimim boyunca, her hastanın benzersiz anatomik yapısını ve estetik beklentilerini dikkate alarak, doğal ve uyumlu sonuçlar elde etmeyi hedefledim. Modern cerrahi tekniklerin yanı sıra, minimal invaziv yaklaşımları da tercih ederek, hastalarımın daha hızlı iyileşme süreci yaşamalarını sağlıyorum.
                  </p>
                  <p>
                    Burun estetiğinden meme cerrahisine, yüz gençleştirmeden vücut kontürüne kadar geniş bir yelpazede hizmet veriyorum. Her operasyon öncesi detaylı konsültasyon yaparak, hastalarımın beklentilerini anlıyor ve gerçekçi sonuçlar hakkında bilgilendiriyorum. Amacım, sadece güzel görünmek değil, aynı zamanda sağlıklı ve fonksiyonel sonuçlar elde etmektir.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="info-image">
                  <img 
                    src="./assets/images/alt_resim.png" 
                    alt="Estetik Cerrahi Yaklaşımı" 
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section info-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="info-image">
                  <img 
                    src="./assets/images/doktor_1.png" 
                    alt="Hasta Odaklı Yaklaşım" 
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="info-content">
                  <h3>Hasta Odaklı Yaklaşımım</h3>
                  <p>
                    Hastalarımla kurduğum iletişim, tedavi sürecinin en önemli parçasıdır. Her hasta için özel olarak tasarlanan tedavi planları, sadece cerrahi tekniklerle sınırlı kalmaz. Ameliyat öncesi psikolojik hazırlık, ameliyat sonrası bakım ve takip süreçleri de bu planın ayrılmaz parçalarıdır. Hastalarımın endişelerini dinliyor, sorularını yanıtlıyor ve onları her aşamada bilgilendiriyorum.
                  </p>
                  <p>
                    İlk konsültasyondan itibaren, hastalarımın beklentilerini ve endişelerini anlamaya odaklanıyorum. Her hastanın farklı bir hikayesi, farklı beklentileri ve farklı endişeleri vardır. Bu nedenle, standart bir yaklaşım yerine, her hasta için özelleştirilmiş bir tedavi planı hazırlıyorum. Ameliyat öncesi detaylı muayene, fotoğraf analizi ve 3D simülasyon gibi modern teknolojileri kullanarak, hastalarımın ameliyat sonrası nasıl görüneceklerini önceden görmelerini sağlıyorum.
                  </p>
                  <p>
                    Güvenlik ve kalite, çalışma prensiplerimin temelini oluşturur. Uluslararası standartlarda sterilizasyon, modern ameliyathane koşulları ve deneyimli ekibimle birlikte, en güvenli ortamı sağlıyorum. Ayrıca, sürekli eğitim ve gelişim anlayışıyla, estetik cerrahi alanındaki en son gelişmeleri takip ediyor ve uyguluyorum. Her hastamın memnuniyeti, başarımın en büyük göstergesidir.
                  </p>
                  <p>
                    Ameliyat sonrası takip süreci de en az ameliyat kadar önemlidir. Hastalarımın iyileşme sürecini yakından takip ediyor, gerekli kontrolleri yapıyor ve herhangi bir sorun durumunda 7/24 ulaşılabilir oluyorum. Ayrıca, hastalarımın ameliyat sonrası yaşam kalitelerini artırmak için beslenme, egzersiz ve bakım konularında da rehberlik ediyorum. Bu kapsamlı yaklaşım sayesinde, hastalarımın hem fiziksel hem de psikolojik olarak sağlıklı bir iyileşme süreci yaşamalarını sağlıyorum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhatsAppButton />
        <LanguageSwitcher />
      </main>
    </div>
  )
}


