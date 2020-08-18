import React, { Fragment } from 'react';
import heroImg from '../assets/bg-intro-desktop.svg';
import heroImg2 from '../assets/image-mockups.png';
import iconOnline from '../assets/icon-online.svg';
import iconBudgeting from '../assets/icon-budgeting.svg';
import iconOnboarding from '../assets/icon-onboarding.svg';
import iconApi from '../assets/icon-api.svg';
import imgCurrency from '../assets/image-currency.jpg';
import imgRestaurant from '../assets/image-restaurant.jpg';
import imgPlane from '../assets/image-plane.jpg';
import imgConfetti from '../assets/image-confetti.jpg';
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
      <section id="info-section">
        <div className="container">
          <div className="title-section">
            <h1 className="title">Why choose Easybank?</h1>
            <p>  We leverage Open Banking to turn your bank account into your financial hub. <br /> Control
            your finances like never before.</p>
          </div>
          <div className="content-container">
            <div className="info-card">
              <img src={iconOnline} alt="online banking icon" />
              <h2 className="info-card-title">Online Banking</h2>
              <p>Our modern web and mobile applications allow you to keep track of your finances
              wherever you are in the world.</p>
            </div>
            <div className="info-card">
              <img src={iconBudgeting} alt="online banking icon" />
              <h2 className="info-card-title">Simple Budgeting</h2>
              <p>See exactly where your money goes each month. Receive notifications when you’re
              close to hitting your limits.</p>
            </div>
            <div className="info-card">
              <img src={iconOnboarding} alt="online banking icon" />
              <h2 className="info-card-title">Fast Onboarding</h2>
              <p>We don’t do branches. Open your account in minutes online and start taking control
              of your finances right away.</p>
            </div>
            <div className="info-card">
              <img src={iconApi} alt="online banking icon" />
              <h2 className="info-card-title">Open API</h2>
              <p>Manage your savings, investments, pension, and much more from one account. Tracking
              your money has never been easier.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="article-section">
        <div className="container">
          <h1 className="title">Latest Articles</h1>
          <div className="article-container">
            <div className="card">
              <img src={imgCurrency} alt="Article Image" />
              <p className="author">By Claire Robinson</p>
              <a href="#"><h2 className="article-title">Receive money in any currency with no fees</h2></a>
              <p>The world is getting smaller and we’re becoming more mobile. So why should you be
              forced to only receive money in a single …</p>
            </div>
            <div className="card">
              <img src={imgRestaurant} alt="img" />
              <p className="author">By Wilson Hutton</p>
              <a href="#"><h2 className="article-title">Treat yourself without worrying about money</h2></a>
              <p>Our simple budgeting feature allows you to separate out your spending and set
              realistic limits each month. That means you …</p>
            </div>
            <div className="card">
              <img src={imgPlane} alt="" />
              <p className="author">By Wilson Hutton</p>
              <a href="#"><h2 className="article-title">Take your Easybank card wherever you go</h2></a>
              <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases
              while you’re abroad. We’ll even show you …</p>
            </div>
            <div className="card">
              <img src={imgConfetti} alt="" />
              <p className="author">By Claire Robinson</p>
              <a href="#"><h2 className="article-title">Our invite-only Beta accounts are now live!</h2></a>
              <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta.
              It’s easy to request an invite through the site ...</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment >
  );
}

export default Main;