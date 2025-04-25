import React, { useState, useEffect, useRef } from 'react';
import '../header/header.scss';
import { useNavigate } from 'react-router-dom';

  function Header({ parallaxRef }) {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const contactRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const scrollContainer = document.querySelector('.animation') || window;
      
        const handleScroll = () => {
          setScrolled(scrollContainer.scrollTop > 1100 || window.scrollY > 1100);
        };
      
        scrollContainer.addEventListener('scroll', handleScroll);
        handleScroll(); // run once on mount
      
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
      }, []);
      
    
    const handleprojectsClick = (event) => {
        event.preventDefault();
        navigate('/'); // go to home
        setTimeout(() => {
            if (parallaxRef?.current) {
              parallaxRef.current.scrollTo(1.65); // ← matches offset of <Projects />
            }
          }, 200);
      };

    const handleClick = (event) => {
        if (contactRef.current && !contactRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
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
                    <li className={`navbar_li ${scrolled ? 'scrolled' : ''}`}> <a className={`anchor_a ${scrolled ? 'scrolled' : ''}`} href="/Home">Home</a></li>
                    <li className={`navbar_li ${scrolled ? 'scrolled' : ''}`}><a className={`anchor_a ${scrolled ? 'scrolled' : ''}`} href="#Projects" onClick={handleprojectsClick}>Projects</a></li>
                    <li className={`navbar_li ${scrolled ? 'scrolled' : ''}`}><a className={`anchor_a ${scrolled ? 'scrolled' : ''}`} href="/Contact">Contact</a></li>
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
