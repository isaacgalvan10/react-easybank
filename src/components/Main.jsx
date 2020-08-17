import React, { Fragment } from 'react';
import heroImg from '../assets/bg-intro-desktop.svg';
import heroImg2 from '../assets/image-mockups.png';
import '../styles/main.css';

const Main = () => {
  return (
    <Fragment>
      <section id="hero-section">
        <div className="hero-container">
          <div className="content">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a one-stop-shop
              for spending, saving, budgeting, investing, and much more.
            </p>
            <a href="#"><div className="btn">Request Invite</div></a>
          </div>
          <div className="img-container">
            <div className="hero-img-wrapper">
              <img className="hero-img" src={heroImg} alt="hero image" />
            </div>
            <div className="hero-img-wrapper2">
              <img className="hero-img2" src={heroImg2} alt="hero image 2" />
            </div>
          </div>
        </div>
      </section>
    </Fragment >
  );
}

export default Main;