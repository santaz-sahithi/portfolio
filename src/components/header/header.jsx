import React, { useState, useEffect, useRef } from 'react';
import '../header/header.scss';
import { useNavigate } from 'react-router-dom';


const scrollToElement = (id, padding = 0) => {
    const element = document.getElementById(id);
    const scrollContainer = document.querySelector('.animation');
    
    if (element && scrollContainer) {
      const targetPosition = element.offsetTop - padding;
      scrollContainer.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };
  

function Header() {
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
        navigate('/');
        // Scroll after navigation to homepage
        setTimeout(() => {
            scrollToElement('Projects', 50);
        }, 100); // Small delay to ensure navigation is completed
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
                <svg viewBox="0 0 100 100" class="navbar-logo-circle">
                    <circle cx="50" cy="50" r="40" stroke="#a6c8e9" stroke-width="4" fill="none"/>
                    <text x="45%" y="68%" text-anchor="middle" fill="#a6c8e9" font-size="3rem"   font-family="Cedarville Cursive"  >S</text>
                </svg>
            </div>

            <nav ref={contactRef}>
                <ul className={showMenu ? 'menu show' : 'menu'}>
                    <li className='navbar_li'><a className="anchor_a" href="/Home">Home</a></li>
                    <li className='navbar_li'><a className="anchor_a" href="/Projects" onClick={handleprojectsClick}>Projects</a></li>
                    <li className='navbar_li'><a className="anchor_a" href="/Contact">Contact</a></li>
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
