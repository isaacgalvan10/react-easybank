import React, { Component } from 'react';
import logo from '../assets/logo.svg';
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
        <i className="fa fa-bars" onClick={this.handleClick} style={{ visibility: this.state.isOpen ? 'hidden' : '' }}></i>
        <i className="fa fa-times" onClick={this.handleClick} style={{ visibility: this.state.isOpen ? 'visible' : '' }}></i>
      </div >
    );
  }
}

export default MobileNavbar;