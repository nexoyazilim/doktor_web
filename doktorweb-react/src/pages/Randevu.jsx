import { useState } from 'react'

export default function Randevu() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Teşekkürler ${formData.name}! Talebiniz alındı.`)
    setFormData({ name: '', email: '', date: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="site-main">
      <main id="main">
        <section id="randevu" className="section section-alt">
          <div className="container">
            <h1>Online Randevu</h1>
            <form id="appointment-form" className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Ad Soyad</label>
                <input 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Adınız Soyadınız"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">E-posta</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="ornek@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="date">Tarih</label>
                <input 
                  id="date" 
                  name="date" 
                  type="date" 
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">Not</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3" 
                  placeholder="Kısa not"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="btn btn-primary" type="submit">Gönder</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
