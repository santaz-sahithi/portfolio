import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef, useState, useEffect } from 'react';
import Header from "../header/header.jsx";
import "../hero/hero.scss";
import Skills from '../skills/skills.jsx';


function Hero() {
  const parallaxRef = useRef();
  return (
    <>
      <Header parallaxRef={parallaxRef} />
      <div className='black-bg'></div>
      <div className="hero-parallax" >
        <Parallax ref={parallaxRef}  pages={1.2} style={{top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0}>
            <div class="animation_layer parallax" id = "bluesky"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.3} speed={0.3}>
            <div class="animation_layer parallax" id="trees"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed = {0.3}>
              <div className="hero-text">
                  <h1 id = 'hero-line'>| <span id = 'hero-about'> about</span> |</h1>
                  <h2 id = 'hero-heading'>Hey, I’m Santaz — I turn messy ideas into polished web experiences.</h2>
                  <h3 id = 'hero-para'>I design and develop responsive, user-friendly websites. Whether you’re a brand, a cause, or a creative, I help bring your ideas online. Fast, functional, and made to represent your vision.</h3>
              </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default Hero;
