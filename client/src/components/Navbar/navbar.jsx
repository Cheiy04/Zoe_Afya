
import { Link } from "react-router-dom"
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react'


export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return(
      <nav className="navbar bg-body-tertiary mb-3 fixed-top">
      <div className="navbar-brand">ZoAfya</div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-item"><Link to='/home'>Home</Link></li>
        {/* <li className="navbar-item"><Link to='/about'>About</Link></li> */}
        <li className="navbar-item"><Link to='/services'>Services</Link></li>
        <li className="nav-item">
              <Link className="nav-item" to="/chatbot">Chatbot</Link> {/* Link to chatbot */}
            </li>
        <li className="navbar-item"><Link to='/contact'>Contact</Link></li>
      </ul>
      <button className="login-button">Login</button>
    </nav>
    )
}