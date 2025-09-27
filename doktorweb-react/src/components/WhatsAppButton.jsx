export default function WhatsAppButton() {
  return (
    <div className="fixed-social">
      <a 
        onClick={() => window.gtag_report_conversion && window.gtag_report_conversion()} 
        href="https://wa.me/+905555555555" 
        target="_blank" 
        className="whatsapp" 
        rel="noopener noreferrer" 
        aria-label="WhatsApp ile yazın"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    </div>
  )
}
