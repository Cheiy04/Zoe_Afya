import './footer.css'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-column">
                <div className="footer-brand">ZoAfya</div>
                <ul className="footer-list">
                    <li className="footer-item">Team</li>
                    <li className="footer-item">Privacy</li>
                    <li className="footer-item">Mission</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-list">
                    <li className="footer-item">Home</li>
                    <li className="footer-item">Contact</li>
                    <li className="footer-item">Services</li>
                    <li className="footer-item">About</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3 className="footer-heading">Health Support</h3>
                <ul className="footer-list">
                    <li className="footer-item">Resources</li>
                    <li className="footer-item">Assessment</li>
                    <li className="footer-item">Therapists</li>
                    <li className="footer-item">Chatbot</li>
                    <li className="footer-item">Blog</li>
                </ul>
            </div>
            <div className="footer-copy">© ZoAfya 2024</div>
        </footer>
    )
}