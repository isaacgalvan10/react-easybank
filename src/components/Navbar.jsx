import React from 'react';
import MobileNavbar from './MobileNavbar';
import logo from '../assets/logo.svg';
import '../styles/navbar.css';


function Navbar(props) {
  return (
    <div className="navbg">
      <div className="nav-container">
        <nav className="navbar">
          <div className="logo">
            <a href="#"><img src={logo} alt="" /></a>
          </div>
          <ul className="menu">
            <li className="link"><a href="#">Home</a></li>
            <li className="link"><a href="#">About</a></li>
            <li className="link"><a href="#">Contact</a></li>
            <li className="link"><a href="#">Blog</a></li>
            <li className="link"><a href="#">Careers</a></li>
          </ul>
          <a href="#"><div className="nav-btn">Request Invite</div></a>
        </nav>
      </div>
      <MobileNavbar />
    </div>
  );
}

export default Navbar;