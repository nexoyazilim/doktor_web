import { urlMappings } from '../routes.jsx'

/**
 * Mevcut dile göre doğru URL'i döndürür
 * @param {string} pageKey - Sayfa anahtarı (home, about, treatments, vb.)
 * @param {string} currentLanguage - Mevcut dil (tr, en)
 * @param {object} params - URL parametreleri (slug, query params vb.)
 * @returns {string} - Doğru URL
 */
export const getLocalizedUrl = (pageKey, currentLanguage = 'tr', params = {}) => {
  const baseUrl = urlMappings[currentLanguage]?.[pageKey] || urlMappings.tr[pageKey]
  
  if (!baseUrl) {
    console.warn(`URL mapping not found for page: ${pageKey}`)
    return '/'
  }
  
  // URL'deki parametreleri değiştir
  let url = baseUrl
  Object.keys(params).forEach(key => {
    if (key === 'slug') {
      url = url.replace(':slug', params[key])
    } else if (key === 'query') {
      // Query parametrelerini ekle
      const queryString = new URLSearchParams(params[key]).toString()
      if (queryString) {
        url += `?${queryString}`
      }
    }
  })
  
  return url
}

/**
 * Tedavi sayfası için özel URL helper
 * @param {string} treatmentKey - Tedavi anahtarı
 * @param {string} currentLanguage - Mevcut dil
 * @returns {string} - Tedavi URL'i
 */
export const getTreatmentUrl = (treatmentKey, currentLanguage = 'tr') => {
  const baseUrl = getLocalizedUrl('treatments', currentLanguage)
  return `${baseUrl}?sec=${treatmentKey}`
}

/**
 * Blog detay sayfası için özel URL helper
 * @param {string} slug - Blog slug'ı
 * @param {string} currentLanguage - Mevcut dil
 * @returns {string} - Blog detay URL'i
 */
export const getBlogDetailUrl = (slug, currentLanguage = 'tr') => {
  return getLocalizedUrl('blogDetail', currentLanguage, { slug })
}
