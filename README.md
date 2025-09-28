# Dr. Elif YAMAN - Estetik ve Plastik Cerrahi Web Sitesi

Modern React tabanlı, çok dilli estetik cerrahi web sitesi.

## 🚀 Teknolojiler

### Frontend Framework
- **React** `^19.1.1` - Modern UI kütüphanesi
- **React DOM** `^19.1.1` - React DOM renderer
- **React Router DOM** `^7.9.2` - Sayfa yönlendirme

### Build Tool
- **Vite** `^7.1.7` - Hızlı build tool ve dev server
- **@vitejs/plugin-react** `^5.0.3` - React plugin

### Çok Dilli Destek
- **i18next** `^25.5.2` - Uluslararasılaştırma framework'ü
- **react-i18next** `^15.7.3` - React için i18n hook'ları
- **i18next-http-backend** `^3.0.2` - HTTP backend

### UI Bileşenleri
- **React Slick** `^0.31.0` - Carousel/slider bileşeni
- **Slick Carousel** `^1.8.1` - CSS carousel stilleri

### Geliştirme Araçları
- **ESLint** `^9.36.0` - Kod kalitesi kontrolü
- **@eslint/js** `^9.36.0` - ESLint JavaScript config
- **eslint-plugin-react-hooks** `^5.2.0` - React hooks kuralları
- **eslint-plugin-react-refresh** `^0.4.20` - React refresh kuralları

### TypeScript Desteği
- **@types/react** `^19.1.13` - React TypeScript tanımları
- **@types/react-dom** `^19.1.9` - React DOM TypeScript tanımları

## 📁 Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── LanguageSwitcher.jsx
│   ├── Loading.jsx
│   └── WhatsAppButton.jsx
├── pages/              # Sayfa bileşenleri
│   ├── Akademik.jsx
│   ├── Blog.jsx
│   ├── BlogDetail.jsx
│   ├── FotoGaleri.jsx
│   ├── Hakkimda.jsx
│   ├── Home.jsx
│   ├── Iletisim.jsx
│   ├── Tedaviler.jsx
│   └── VideoGaleri.jsx
├── hooks/              # Custom React hooks
│   └── useScrollReveal.js
├── utils/              # Yardımcı fonksiyonlar
│   └── urlHelper.js
├── App.jsx             # Ana uygulama bileşeni
├── main.jsx            # Uygulama giriş noktası
├── routes.jsx          # Route tanımları
└── i18n.js             # Çok dilli yapılandırma
```

## 🛠️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn

### Kurulum
```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Build'i önizle
npm run preview

# Linting
npm run lint
```

## 🌐 Çok Dilli Destek

Proje Türkçe ve İngilizce dil desteği sunar:
- Dil dosyaları: `public/assets/i18n/`
- Dil değiştirme: `LanguageSwitcher` bileşeni
- Varsayılan dil: Türkçe

## 📱 Özellikler

- ✅ Responsive tasarım
- ✅ Çok dilli destek (TR/EN)
- ✅ Modern React hooks
- ✅ React Router ile SPA
- ✅ WhatsApp entegrasyonu
- ✅ SEO optimizasyonu
- ✅ Hızlı yükleme (Vite)
- ✅ Carousel/slider desteği

## 🚀 Deployment

Proje GitHub Actions ile otomatik deploy edilir:
- Branch: `react_dondurme`
- Build komutu: `npm run build`
- Deploy: GitHub Pages

## 📄 Lisans

Bu proje özel kullanım içindir.
