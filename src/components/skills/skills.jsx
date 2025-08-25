import React, { useState, useEffect } from "react";
import './skills.scss'

function Designer(props) {
    return <li>{ props.talent }</li>;
}

function Coder(props){
    return <li>{props.language}</li>
}

function TypewriterText({ text, speed = 50 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      // Wait 5 seconds after completion, then reset
      const resetTimeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setIsTyping(true);
      }, 5000);

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, text, speed, isTyping]);

  return <span>{displayText}<span className="cursor">|</span></span>;
}

function Skills() {
    const designers = [
        {id: 1, talent: 'Website & UI Design'},
        {id: 2, talent: 'Figma & Prototyping'},
        {id: 3, talent: 'Making Things Flow'},
        {id: 4, talent: 'Creating Clean Aesthetics'}
      ];
    const coders = [
        {id: 1, language: 'Frontend Development (React)'},
        {id: 2, language: 'JavaScript & AI Logic'},
        {id: 3, language: 'Debugging Like a Detective'},
        {id: 4, language: 'Teaching & Explaining Concepts'}
    ]
    return (
    <section className="skills">
      <div className="bento-grid">
        {/* Left Column */}
        <div className="bento-box content large-tall medium">
          <h2>Part Designer</h2>
          <ul>{designers.map((designer) => <Designer key={designer.id} talent={designer.talent} />)}</ul>
        </div>
        
        {/* Middle Column */}
        <div className="bento-box placeholder medium-wide">
          {/* Placeholder for future content */}
        </div>
        
        {/* Right Column - Part Coder */}
        <div className="bento-box content large-tall">
          <h2>Part Coder</h2>
          <ul>{coders.map((coder) => <Coder key={coder.id} language={coder.language} />)}</ul>
        </div>
        
        
        
        {/* Middle Bottom */}
        <div className="bento-box placeholder small-narrow">
          {/* Placeholder for future content */}
        </div>
                
        {/* Bottom spanning box that extends across middle and right columns */}
        <div className="bento-box content bottom-spanning">
          <h3><TypewriterText text="I design and develop responsive, user-friendly websites. Whether you're a brand, a cause, or a creative, I help bring your ideas online. Fast, functional, and made to represent your vision." speed={30} /></h3>
        </div>
        
        {/* Bottom Left */}
        <div className="bento-box placeholder large-wide">
          {/* Placeholder for future content */}
        </div>
      </div>
    </section>
  )
}

export default Skills