import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Animations from './components/Animations';
import './App.css';

function App() {
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } })
  })

  return (
    <div className="App" ref={el => app = el}>
      <Animations />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
