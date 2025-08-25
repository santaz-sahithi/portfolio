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
      <div class = 'what' id = 'hero-click' >
        <div className='black-bg'></div>
          <Parallax ref={parallaxRef}  pages={1.2} style={{top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0.1}>
            <div class="animation_layer parallax" id = "bluesky"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.2} speed={0.25}>
            <div class="animation_layer parallax" id="trees"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed = {0.1}>
              <div className="hero-text">
                  {/* <h1 id = 'hero-line'>| <span id = 'hero-about'> about</span> |</h1> */}
                  {/* <h2 id = 'hero-heading'> Hey, I'm Santaz Sahithi I turn <span className='glitch-container' data-text = "MESSY" >MESSY </span> ideas into polished web experiences </h2>  */}
                  <h2 id = 'hero-heading'> Hey, I'm Santaz Sahithi</h2> 
                  <div class="animated-title" id = 'hero-heading'>
                  <div class="text-top">
                    <div>
                      <span>I turn </span>
                      <span>messy ideas</span>
                    </div>
                  </div>
                  <div class="text-bottom">
                    <div>into polished web experiences</div>
                  </div>
                </div>
                {/* <h3 id = 'hero-para'>I design and develop responsive, user-friendly websites. Whether you’re a brand, a cause, or a creative, I help bring your ideas online. Fast, functional, and made to represent your vision.</h3> */}
              </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default Hero;
