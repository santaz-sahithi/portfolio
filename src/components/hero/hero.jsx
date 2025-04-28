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
                  <h2 id = 'hero-heading'>I am a Software Developer based in Bangalore,India.</h2>
                  <h3 id = 'hero-para'>I enjoy learning new things every day, as it keeps life exciting and never boring. My other passions would be helping in NGO, playing badminton.</h3>
              </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default Hero;
