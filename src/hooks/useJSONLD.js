import { useEffect } from 'react'

// JSON-LD eklemek için küçük yardımcı kanca
export default function useJSONLD(id, data) {
  useEffect(() => {
    if (!data) return
    const scriptId = `jsonld-${id}`
    let el = document.getElementById(scriptId)
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.id = scriptId
      document.head.appendChild(el)
    }
    try {
      el.textContent = JSON.stringify(data)
    } catch (_) {
      // JSON stringify hatasını sessizce geç
    }
    return () => {
      // Sayfa değişince kaldır (dinamik sayfalarda yinelenmeyi önlemek için)
      if (el && el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }
  }, [id, data])
}



