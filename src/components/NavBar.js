import React from 'react'
import '../CSS/nav.css'
// Images
import mailLogo from '../Images/mail.png'

function NavBar() {
  return (
    <nav>
        <div className="logo-wrapper">
            <img src={mailLogo} alt="Mail Logo" />
            <h1>NinjaMail</h1>
        </div>
        <ul className="nav-items">
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>SERVICES</li>
            <li>PARTNERS</li>
            <li>SIGN UP FREE</li>
        </ul>
    </nav>
  )
}

export default NavBar