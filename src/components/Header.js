import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('about');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Determine which section is currently in view
            const sections = ['about', 'projects', 'skills', 'contact'];
            let current = '';
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                        break;
                    }
                }
            }
            
            if (current) {
                setActiveLink(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setActiveLink(sectionId);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="header-content">
                <div className="logo">
                    <h1>
                        <span className="logo-highlight">D</span>avid 
                        <span className="logo-highlight">M</span>artinez
                    </h1>
                </div>
                
                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                
                <nav className={menuOpen ? 'active' : ''}>
                    <ul className="nav-links">
                        <li>
                            <a 
                                href="#about" 
                                className={activeLink === 'about' ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, 'about')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                className={activeLink === 'projects' ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, 'projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#skills" 
                                className={activeLink === 'skills' ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, 'skills')}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                className={activeLink === 'contact' ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, 'contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                
                <DarkModeToggle />
            </div>
        </header>
    );
};

export default Header;