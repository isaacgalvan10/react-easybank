import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Animations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let timeline = gsap.timeline();

    timeline
      .fromTo('nav', {
        y: -100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        delay: .3,
        duration: .8
      })
      .fromTo('.hero-container', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1
      })

    gsap.fromTo('.mobile-nav', {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: .3,
      duration: .8
    })

    /* Scroll Triggers */

    gsap.fromTo('.title-section', {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.title-section',
        start: 'top 50%'
      }
    })

    ScrollTrigger.batch('#info-section .content-container .info-card', {
      onEnter: batch => gsap.fromTo(batch, { y: -50, opacity: 0 },
        { y: 0, opacity: 1, stagger: .4 })
    })

    gsap.fromTo('#article-section .title', {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#article-section',
        start: 'top 80%'
      }
    })

    ScrollTrigger.batch('#article-section .article-container .card', {
      onEnter: batch => gsap.fromTo(batch, { y: -50, opacity: 0 },
        { y: 0, opacity: 1, stagger: .4 })
    })

    gsap.fromTo('.footer-container', {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%'
      }
    })


  })
  return (null);
}

export default Animations;