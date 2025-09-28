# GitHub Pages Deployment Guide

## Kurulum Adımları

1. **Repository Settings**
   - GitHub repository'nizde Settings > Pages bölümüne gidin
   - Source olarak "GitHub Actions" seçin

2. **Branch Ayarları**
   - Workflow dosyası `main` branch'ini dinliyor
   - Kodunuzu `main` branch'ine push edin

3. **Build Ayarları**
   - Vite config production'da `/doktor_web/` base path kullanıyor
   - Development'ta `/` kullanıyor

## Sorun Giderme

### Build Hatası Alıyorsanız:
1. `npm ci` komutunun çalıştığından emin olun
2. Node.js versiyonunun 20 olduğunu kontrol edin
3. Dependencies'lerin güncel olduğunu kontrol edin

### Assets Yüklenmiyor:
1. Public klasöründeki assets'lerin doğru konumda olduğunu kontrol edin
2. Vite build'in assets'leri doğru kopyaladığını kontrol edin

### Sayfa Açılmıyor:
1. GitHub Pages URL'inin doğru olduğunu kontrol edin: `https://username.github.io/doktor_web/`
2. Base path ayarının repository adıyla eşleştiğini kontrol edin

## Workflow Dosyası Özellikleri

- Node.js 20 kullanıyor
- npm cache kullanıyor
- `.nojekyll` dosyası oluşturuyor
- Sadece main branch'den deploy yapıyor
