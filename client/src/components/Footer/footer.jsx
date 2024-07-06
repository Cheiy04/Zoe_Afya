
import './footer.css'

export default function Footer(){

    return(
        
        <footer className="footer">
          <div className="footer-brand">ZoAfya</div>
          <ul className="footer-menu">
            <li className="footer-item">Home</li>
            <li className="footer-item">Services</li>
            <li className="footer-item">About</li>
            <li className="footer-item">Contact</li>
          </ul>
          <div className="footer-links">
            <div className="footer-link-item">Resources</div>
            <div className="footer-link-item">Assessment</div>
            <div className="footer-link-item">Therapists</div>
            <div className="footer-link-item">Chatbot</div>
            <div className="footer-link-item">Blog</div>
          </div>
          <div className="footer-company">
            <div className="footer-company-item">Mission</div>
            <div className="footer-company-item">Team</div>
            <div className="footer-company-item">Privacy</div>
          </div>
          <div className="footer-copy">© ZoAfya 2024</div>
        </footer>
    )
}