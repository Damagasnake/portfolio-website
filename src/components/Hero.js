import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const titleRef = useRef(null);
    
    useEffect(() => {
        if (titleRef.current) {
            const letters = titleRef.current.innerText.split('');
            titleRef.current.innerHTML = '';
            
            letters.forEach((letter, i) => {
                const span = document.createElement('span');
                span.textContent = letter;
                span.style.animationDelay = `${i * 0.1}s`;
                span.className = 'hero-letter';
                titleRef.current.appendChild(span);
            });
        }
    }, []);
    
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    <span ref={titleRef} className="hero-title">David Martinez</span>
                </h1>
                <p className="hero-subtitle">Full-Stack Developer & Creator</p>
                <div className="hero-description">
                    I build <span className="emphasize">modern</span> web experiences with{' '}
                    <span className="emphasize">React</span>, <span className="emphasize">Node.js</span>, and{' '}
                    <span className="emphasize">cutting-edge</span> technologies
                </div>
                <div className="hero-actions">
                    <a href="#projects" className="hero-button">View My Work</a>
                    <a href="#contact" className="hero-button secondary">Get In Touch</a>
                </div>
            </div>
            <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </section>
    );
};

export default Hero;