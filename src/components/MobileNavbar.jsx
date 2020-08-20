import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logo.svg';
import iconHamburger from '../assets/icon-hamburger.svg';
import iconClose from '../assets/icon-close.svg';
import '../styles/navbar.css';

const MobileNavbar = () => {
  const [menuState, setMenuState] = useState(false);
  let sidebarMenu = useRef(null);
  let mobileMenuTl = useRef();

  useEffect(() => {
    mobileMenuTl.current = gsap.timeline({ paused: true });
    mobileMenuTl.current.fromTo([sidebarMenu], {
      x: '100%'
    }, {
      x: 0
    })
  }, []);

  useEffect(() => {
    menuState ? mobileMenuTl.current.play() : mobileMenuTl.current.reverse();
  }, [menuState]);

  return (
    <div className="mobile-nav">
      <div className="logo">
        <a href="#"><img src={logo} alt="" /></a>
      </div>
      <div className={`collapse ${!menuState ? '' : ''}`} ref={el => sidebarMenu = el} >
        <ul className="menu">
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#">About</a></li>
          <li className="link"><a href="#">Contact</a></li>
          <li className="link"><a href="#">Blog</a></li>
          <li className="link"><a href="#">Careers</a></li>
        </ul>
        <a href="#"><div className="nav-btn">Request Invite</div></a>
      </div>
      <img src={iconHamburger} className='hamburger' style={{ visibility: menuState ? 'hidden' : '' }} onClick={() => setMenuState(!menuState)} />
      <img src={iconClose} className={`fa-times ${!menuState ? 'hidden' : ''}`} onClick={() => setMenuState(!menuState)} />
    </div >
  );
}

export default MobileNavbar;