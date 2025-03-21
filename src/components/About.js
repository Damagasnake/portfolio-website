import React from 'react';
import { PersonalInfo, TerminalSkills } from './PersonalInfo'; // Importamos ambos componentes
import SecurityChallenges from './SecurityChallenges';
import HackingModal from './HackingModal';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-image">
                    <div className="avatar-container">
                        <img src="/profile.jpg" alt="David Martinez" className="avatar" />
                        <div className="avatar-outline"></div>
                    </div>
                </div>
                <div className="about-text">
                    <h3>Full-Stack Developer <span className="highlight">en constante evolución</span></h3>
                    <p>
                        Mi camino en la programación no fue lineal. Durante años, intenté aprender pero me faltaba la perseverancia necesaria para superar los obstáculos iniciales. Todo cambió cuando entré en <strong>42 Madrid</strong>, donde descubrí mi pasión por resolver problemas complejos.
                    </p>
                    <p>
                        Comencé mi viaje con C, aprendiendo fundamentos sólidos, y complementé mi formación con el curso <strong>CS50x de Harvard</strong>. Actualmente, estoy expandiendo mis horizontes hacia el desarrollo web y la <strong>ciberseguridad</strong> a través de plataformas como TryHackMe, donde me estoy especializando en pentesting.
                    </p>
                    <div className="tagcloud">
                        <span className="tag">Perseverante</span>
                        <span className="tag">Autodidacta</span>
                        <span className="tag">Problem-solver</span>
                        <span className="tag">Seguridad informática</span>
                    </div>
                    <div className="cta-buttons">
                        <a href="#contact" className="cta-button primary">Contacto</a>
                        <a href="/resume.pdf" target="_blank" className="cta-button secondary">Ver CV</a>
                    </div>
                </div>
            </div>
            
            <div className="education">
                <h3>Formación</h3>
                <div className="education-items">
                    <div className="education-item">
                        <div className="education-icon"><i className="fas fa-code"></i></div>
                        <div className="education-content">
                            <h4>42 Madrid</h4>
                            <p>Desarrollo de Software y Programación</p>
                            <span className="education-period">2023 - Presente</span>
                        </div>
                    </div>
                    <div className="education-item">
                        <div className="education-icon"><i className="fas fa-university"></i></div>
                        <div className="education-content">
                            <h4>CS50x: Introducción a las Ciencias de la Computación</h4>
                            <p>Harvard University</p>
                            <span className="education-period">2023</span>
                        </div>
                    </div>
                    <div className="education-item">
                        <div className="education-icon"><i className="fas fa-shield-alt"></i></div>
                        <div className="education-content">
                            <h4>Ciberseguridad</h4>
                            <p>TryHackMe</p>
                            <span className="education-period">2024 - Presente</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="terminal-skills-section">
                <h3>Mis habilidades en terminal</h3>
                <TerminalSkills />
            </div>
            
            <SecurityChallenges />
            
            <HackingModal />
            
            <div className="personal-insights">
                <h3>Conoce más sobre mí</h3>
                <PersonalInfo />
            </div>
        </section>
    );
};

export default About;