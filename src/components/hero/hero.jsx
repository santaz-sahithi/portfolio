import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef, useState, useEffect } from 'react';
import Header from "../header/header.jsx";
import Skills from "../skills/skills.jsx";
import Projects from "../projects/projects";
import Contact from '../contactfold/contactfold.jsx';
import "../hero/hero.scss";


function Hero() {
  const parallaxRef = useRef();
    const scrollContainerRef = useRef();
    const [scrolled, setScrolled] = useState(false);
    const [parallaxPages, setParallaxPages] = useState(1.3); // Default number of pages
    const scrollThreshold = 100;

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const onScroll = () => {
            setScrolled(container.scrollTop > scrollThreshold);
        };

        container.addEventListener('scroll', onScroll);
        onScroll();

        return () => container.removeEventListener('scroll', onScroll);
    }, [scrollThreshold]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setParallaxPages(4); // Example: Reduce pages for smaller screens
            } else if (window.innerWidth < 1200) {
                setParallaxPages(4); // Example: Medium screen size
            } else {
                setParallaxPages(4); // Example: Larger screens
            }
        };

        // Initial call to set pages based on initial viewport width
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 
  return (
    <>
      <Header parallaxRef={parallaxRef} scrolled = {scrolled} />
      <div className="hero-parallax" ref = {scrollContainerRef}>
        <Parallax ref={parallaxRef} pages = {parallaxPages} style={{top: '0', left: '0' }} class="animation">
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
          {/* <ParallaxLayer offset={1} speed={0.2}>
            <Skills />          
          </ParallaxLayer>
          <ParallaxLayer offset={1.8} pages = {1.5} speed={0.2}>
            <Projects />
          </ParallaxLayer>
          <ParallaxLayer offset={3.3} speed={0.2}>
            <Contact />
          </ParallaxLayer> */}
        </Parallax>
        <Skills />
      </div>
    </>
  );
}

export default Hero;
