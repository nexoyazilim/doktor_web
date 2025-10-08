export default function WhatsAppButton() {
  return (
    <div className="fixed-social">
      <a 
        onClick={() => {
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'engagement',
              event_label: 'whatsapp_cta',
              transport_type: 'beacon'
            })
          }
        }} 
        href="https://wa.me/+905555555555" 
        target="_blank" 
        className="whatsapp" 
        rel="noopener noreferrer" 
        aria-label="WhatsApp ile iletişim kurun"
      >
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  )
}
