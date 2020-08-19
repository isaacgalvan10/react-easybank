import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import iconHamburger from '../assets/icon-hamburger.svg';
import iconClose from '../assets/icon-close.svg';
import '../styles/navbar.css';

class MobileNavbar extends Component {
  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="mobile-nav">
        <div className="logo">
          <a href="#"><img src={logo} alt="" /></a>
        </div>
        <div className='collapse' style={{ visibility: this.state.isOpen ? 'visible' : '' }}>
          <ul className="menu">
            <li className="link"><a href="#">Home</a></li>
            <li className="link"><a href="#">About</a></li>
            <li className="link"><a href="#">Contact</a></li>
            <li className="link"><a href="#">Blog</a></li>
            <li className="link"><a href="#">Careers</a></li>
          </ul>
          <a href="#"><div className="nav-btn">Request Invite</div></a>
        </div>
        <img src={iconHamburger} className="hamburger" onClick={this.handleClick} style={{ visibility: this.state.isOpen ? 'hidden' : '' }} />
        <img src={iconClose} className="fa-times" onClick={this.handleClick} style={{ visibility: this.state.isOpen ? 'visible' : '' }} />
      </div >
    );
  }
}

export default MobileNavbar;