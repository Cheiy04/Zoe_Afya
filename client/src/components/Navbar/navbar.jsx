
import { Link } from "react-router-dom"
import './navbar.css'

export default function Navbar(){

    return(
        <nav className="navbar">
          <div className="navbar-brand">ZoAfya</div>
          <ul className="navbar-menu">
            <li className="navbar-item"><Link to='/home'>Home</Link></li>
            <li className="navbar-item"><Link to='/about'>About</Link></li>
            <li className="navbar-item"><Link to='/services'>Services</Link></li>
            <li className="navbar-item"><Link to='/contact'>Contact</Link></li>
          </ul>
          <button className="login-button">Log In</button>
        </nav>
    )
}