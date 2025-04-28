import React, { useState, useEffect, useRef } from 'react';
import '../header/header.scss';
import { useNavigate } from 'react-router-dom';

  function Header({ parallaxRef }) {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const contactRef = useRef(null);
    const navigate = useNavigate();
      
        useEffect(() => {
          const handleScroll = () => {
            setScrolled(window.scrollY > 1100); // Only window scroll
          };
      
          window.addEventListener('scroll', handleScroll);
          handleScroll(); // run once
      
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
      
        const handleProjectsClick = (event) => {
          event.preventDefault();
          const projectSection = document.getElementById('project-heading');
          if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
          }
        };

        const handleContactClick = (event) => {
            event.preventDefault();
            const projectSection = document.getElementById('contact-fold');
            if (projectSection) {
              projectSection.scrollIntoView({ behavior: 'smooth' });
            }
          };
      
        const handleClickOutside = (event) => {
          if (contactRef.current && !contactRef.current.contains(event.target)) {
            setShowMenu(false);
          }
        };
      
        useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
        }, []);
      
        const toggleMenu = () => {
          setShowMenu(!showMenu);
        };

    return (
        
        <section className={`navbar_header ${scrolled ? 'scrolled' : ''}`}>
            <div class="navbar_logo" >
                <svg viewBox="0 0 105 105" class="navbar-logo-circle">
                <circle className={`circle-svg ${scrolled ? 'scrolled' : ''}`} cx="50" cy="50" r="40"/>
                <text className={`circle-text ${scrolled ? 'scrolled' : ''}`} x="45%" y="68%" textAnchor="middle">S</text>
                </svg>
            </div>

            <nav ref={contactRef}>
                <ul className={showMenu ? 'menu show' : 'menu'}>
                    <li className={`navbar_li ${scrolled ? 'scrolled' : ''}`}><a className={`anchor_a ${scrolled ? 'scrolled' : ''}`} href="/Home">Home</a></li>
                    <li className={`navbar_li ${scrolled ? 'scrolled' : ''}`}><a className={`anchor_a ${scrolled ? 'scrolled' : ''}`} href="#Projects" onClick={handleProjectsClick}>Projects</a></li>
                    <li className={`navbar_li ${scrolled ? 'scrolled' : ''}`}><a className={`anchor_a ${scrolled ? 'scrolled' : ''}`} href="/Contact" onClick={handleContactClick}>Contact</a></li>
                </ul>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            {/* <p style={{ color: 'white' }}>{scrolled ? "SCROLLED" : "TOP"}</p> */}
        </section>
    );
};

export default Header;
