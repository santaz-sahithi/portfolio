
import React, { useState, useEffect, useRef } from 'react';
import '../header/header.css';
import { useNavigate } from 'react-router-dom';

function scrollToElement(id, padding = 0) {
    const element = document.getElementById(id);
    if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - padding;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
}

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const contactRef = useRef(null);
    const navigate = useNavigate();

    const handleAboutUsClick = (event) => {
        event.preventDefault();
        navigate('/');
        // Scroll after navigation to homepage
        setTimeout(() => {
            scrollToElement('AboutUsSection', 50);
        }, 100); // Small delay to ensure navigation is completed
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
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

    return (
        <div className="navbar_header">
            <div className="navbar_logo">
                <img src={logo} alt="logo" />
            </div>
            <nav ref={contactRef}>
                <ul className={showMenu ? 'menu show' : 'menu'}>
                    <li className='navbar_li'><a className="anchor_a" href="/Home">Home</a></li>
                    <li className='navbar_li'><a className="anchor_a" href="/countries">Countries</a></li>
                    <li className='navbar_li'><a className="anchor_a" href="/Services">Services</a></li>
                    <li className='navbar_li'><a className="anchor_a" href="/OurTeam"  onClick={handleAboutUsClick}>About Us</a></li>
                    <li className='navbar_li'><a className="anchor_a" href="/ContactUs">Contact Us</a></li>
                </ul>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="social-icons">
                    <a className='ss_i' href="https://wa.link/10di5m">
                        <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                    <a className='ss_i' href="tel:7593969629">
                        <img src={callIcon} alt="Caller" />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
