import React, { Fragment } from 'react';
import footerLogo from '../assets/logo2.svg';
import fbIcon from '../assets/icon-facebook.svg';
import ytIcon from '../assets/icon-youtube.svg';
import twIcon from '../assets/icon-twitter.svg';
import pinIcon from '../assets/icon-pinterest.svg';
import igIcon from '../assets/icon-instagram.svg';
import '../styles/footer.css';

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="row1">
              <a className="footer-logo" href="#"><img src={footerLogo} alt="logo" /></a>
              <div className="social-media">
                <a href="#"><img className="social-icon" src={fbIcon} /></a>
                <a href="#"><img className="social-icon" src={ytIcon} /></a>
                <a href="#"><img className="social-icon" src={twIcon} /></a>
                <a href="#"><img className="social-icon" src={pinIcon} /></a>
                <a href="#"><img className="social-icon" src={igIcon} /></a>
              </div>
            </div>
            <ul className="row2">
              <a href="#"><li>About Us</li></a>
              <a href="#"><li>Contact</li></a>
              <a href="#"><li>Blog</li></a>
            </ul>
            <ul className="row3">
              <a href=""><li>Careers</li></a>
              <a href=""><li>Support</li></a>
              <a href=""><li>Privacy Policy</li></a>
            </ul>
          </div>
          <div className="footer-btn-area">
            <a href="#"><div className="footer-btn">Request Invite</div></a>
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;