import { useState } from 'react'

export default function Iletisim() {
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
    alert('Mesajınız başarıyla gönderildi!')
  }

  return (
    <div className="site-main">
      <main id="main">
        {/* Page Header */}
        <div className="cmt-page-title-row-inner">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-title-heading">
                  <h1 className="title">İletişim</h1>
                  <p className="page-title-desc">
                    Sorularınız için bizimle iletişime geçin<br />
                    Size en kısa sürede dönüş yapacağız
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <section className="section contact-form-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="form-container">
                  <h2>Bize Mesaj Gönderin</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Adınız Soyadınız"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="E-posta Adresiniz"
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
                          placeholder="Telefon Numaranız"
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
                          <option value="">Konu Seçin</option>
                          <option value="randevu">Randevu Talebi</option>
                          <option value="soru">Genel Soru</option>
                          <option value="tedavi">Tedavi Bilgisi</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="message"
                        placeholder="Mesajınız"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Mesaj Gönder</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="map-container">
                  <h3>Konumumuz</h3>
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
      </main>
    </div>
  )
}


