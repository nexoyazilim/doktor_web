# Doktor Web - Statik Site

Bu proje; Hakkımda, Uzmanlık Alanlarım, İletişim, Akademik, Blog, Galeri, Dil Destekleri, Online Randevu, Yorumlar, SSS, Tanı/Tedavi ve Son Makaleler modüllerini içeren çok dilli (TR/EN) statik bir web sitesidir.

- Temiz kod prensipleri: anlamlı fonksiyon/degisken adlari, küçük ve tek sorumluluklu fonksiyonlar, yan etkisiz yardimcilar.
- Hafif CSS: sadece temel değişkenler, grid ve bileşen çerçeveleri; animasyon yok, minimal.

## Yol Haritası
- [x] Proje iskeletini oluştur (klasörler, temel dosyalar)
- [x] README ve yol haritası ile TODO yaz
- [x] Çok dilli (TR/EN) altyapıyı kur ve dil anahtarlarını yerleştir
- [x] Navigasyon ve tüm sayfa bölümlerini ekle
- [x] Online randevu formunu oluştur ve basit gönderim işlemini ekle
- [x] SSS (akordeon) ve Yorumlar/Referanslar bileşenlerini ekle
- [x] Blog, Son Makaleler ve Akademik içerik için şablonlar
- [x] Galeri grid ve lightbox yer tutucu
- [x] Stil (responsive, temalar) ve temel SEO etiketleri
- [x] Yayınlama talimatları (static hosting) ekle

## Proje Yapısı
```
/ (proje kökü)
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  └─ app.js
│  └─ i18n/
│     ├─ tr.json
│     └─ en.json
```

## Geliştirme
- `index.html` tek sayfa uygulama iskeletini barındırır.
- `assets/js/app.js` dil desteğini, SSS akordeonunu ve basit form işlemlerini yönetir.
- `assets/i18n/*.json` anahtar-değer çevirilerini içerir. `data-i18n` attributeleri üzerinden uygulanır.

Yerel geliştirme için basit bir HTTP sunucusu önerilir:

```bash
# Python 3
python3 -m http.server 5173
# veya Node.js (npx)
npx serve . -l 5173
```

Ardından tarayıcıda `http://localhost:5173` adresine gidin.

## Yayınlama (Static Hosting)
- GitHub Pages, Netlify veya Vercel üzerinde kök dizini yayınlayın.
- Önbellekleme için basit `Cache-Control` başlıkları önerilir.

## Katkı ve Özelleştirme
- Yeni dil eklemek için `assets/i18n` içine `xx.json` ekleyip dil seçicisinde listelenmesini sağlayın.
- Bölüm içeriklerini `index.html` içinde ilgili `section` bloklarında güncelleyebilirsiniz.

## Lisans
Bu proje örnek amaçlıdır; dilediğiniz gibi uyarlayabilirsiniz.
