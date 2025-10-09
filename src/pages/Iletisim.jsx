import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'
import useSEO from '../hooks/useSEO'
import useJSONLD from '../hooks/useJSONLD'

export default function Iletisim() {
  const { t } = useTranslation()
  useSEO({
    title: 'İletişim ve Randevu | Dr. Elif YAMAN',
    description: 'Randevu ve iletişim için formu doldurun veya WhatsApp üzerinden yazın. İstanbul Ataşehir.',
    og: {
      type: 'website',
      image: `${typeof window !== 'undefined' ? window.location.origin : ''}${import.meta.env.BASE_URL}assets/images/doktor_1.png`,
      siteName: 'Dr. Elif YAMAN',
      locale: 'tr_TR'
    },
    twitter: { card: 'summary_large_image' }
  })

  // İletişim sayfası Breadcrumb
  useJSONLD('breadcrumb-contact', {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": typeof window !== 'undefined' ? `${window.location.origin}${import.meta.env.BASE_URL}` : undefined },
      { "@type": "ListItem", "position": 2, "name": "İletişim", "item": typeof window !== 'undefined' ? `${window.location.origin}${import.meta.env.BASE_URL}iletisim` : undefined }
    ]
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form gönderildi:', formData)
    alert(t('contactPage.form.success'))
  }

  return (
    <div className="site-main">
      <main id="main">
        {/* Contact / Appointment Section */}
        <section id="appointment" className="section contact-form-section appointment-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="form-container appointment-card">
                  <h2 className="appointment-title">{t('contactPage.form.title')}</h2>
                  <p className="appointment-subtitle">{t('nav.appointment')}</p>
                  <form onSubmit={handleSubmit} className="contact-form appointment-form">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          name="name"
                          placeholder={t('contactPage.form.name')}
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder={t('contactPage.form.email')}
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="tel"
                          name="phone"
                          placeholder={t('contactPage.form.phone')}
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">{t('contactPage.form.subject')}</option>
                          <option value="randevu">{t('contactPage.form.subjects.appointment')}</option>
                          <option value="soru">{t('contactPage.form.subjects.question')}</option>
                          <option value="tedavi">{t('contactPage.form.subjects.treatment')}</option>
                          <option value="diger">{t('contactPage.form.subjects.other')}</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="message"
                        placeholder={t('contactPage.form.message')}
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary appointment-submit">{t('contactPage.form.submit')}</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="map-container appointment-map">
                  <iframe
                    title="Harita"
                    loading="lazy"
                    src="https://maps.google.com/maps?q=Ata%C5%9Fehir%20%C4%B0stanbul&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="300"
                    className="contact-iframe"
                  ></iframe>
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


