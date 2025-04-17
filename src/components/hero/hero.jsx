import "../hero/hero.scss";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Skills from "../skills/skills.jsx";
import Projects from "../projects/projects";


function Hero() {
  return (
    <>
      <div className="hero-parallax">
        <Parallax pages={4} style={{ top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0}>
            <div class="animation_layer parallax" id="bluesky"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <div class="animation_layer parallax" id="trees"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed = {0.2}>
              <div className="hero-text">
                  <h1 id = 'hero-line'>| <span id = 'hero-about'> about</span> |</h1>
                  <h2 id = 'hero-heading'>I am a Software Developer based in Bangalore,India.</h2>
                  <h3 id = 'hero-para'>I enjoy learning new things every day, as it keeps life exciting and never boring. My other passions would be helping in NGO, playing badminton.</h3>
              </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.3}>
              <Skills />          
          </ParallaxLayer>
          <ParallaxLayer offset={1.85} speed = {0.3}>
            <Projects/>   
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Hero;
