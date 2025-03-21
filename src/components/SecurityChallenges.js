import React, { useState } from 'react';

const SecurityChallenges = () => {
    const [activeChallenge, setActiveChallenge] = useState(null);
    
    const challenges = [
        {
            id: 1,
            name: "Web Application Pentesting",
            platform: "TryHackMe",
            description: "Identificación y explotación de vulnerabilidades OWASP Top 10 en aplicaciones web.",
            details: "Este reto consistió en identificar y explotar vulnerabilidades comunes en aplicaciones web, como inyección SQL, XSS, CSRF y más. Implementé técnicas de pentesting siguiendo metodologías estándar de la industria para asegurar la completa evaluación de la aplicación objetivo.",
            skills: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF"],
            difficulty: "Intermedio",
            completed: true,
            image: "https://via.placeholder.com/300x180?text=Web+Pentesting"
        },
        {
            id: 2,
            name: "Network Penetration",
            platform: "TryHackMe",
            description: "Explotación de vulnerabilidades en sistemas y servicios de red para obtener acceso privilegiado.",
            details: "Realicé un proceso completo de reconocimiento, escaneo, enumeración y explotación de servicios de red vulnerables. Utilicé herramientas como Nmap, Wireshark y Metasploit para identificar puntos débiles y conseguir elevar privilegios en los sistemas objetivo.",
            skills: ["Nmap", "Wireshark", "Metasploit", "Privilege Escalation"],
            difficulty: "Avanzado",
            completed: true,
            image: "https://via.placeholder.com/300x180?text=Network+Pentest"
        },
        {
            id: 3,
            name: "Cryptography Challenges",
            platform: "CryptoHack",
            description: "Resolución de retos criptográficos desde algoritmos clásicos hasta modernos.",
            details: "Estos desafíos probaron mis conocimientos en criptografía, abarcando desde cifrados históricos como César o Vigenère, hasta implementaciones modernas como AES, RSA o curvas elípticas. Desarrollé scripts en Python para automatizar el análisis y ruptura de cifrados.",
            skills: ["Criptografía clásica", "RSA", "Criptoanálisis", "Python"],
            difficulty: "Avanzado",
            completed: false,
            image: "https://via.placeholder.com/300x180?text=Cryptography"
        },
    ];

    const toggleChallenge = (id) => {
        if (activeChallenge === id) {
            setActiveChallenge(null);
        } else {
            setActiveChallenge(id);
        }
    };

    return (
        <div className="security-challenges">
            <h3>Retos de Ciberseguridad</h3>
            <div className="challenges-grid">
                {challenges.map((challenge) => (
                    <div key={challenge.id} className="challenge-card">
                        {challenge.image && (
                            <div className="challenge-image">
                                <img src={challenge.image} alt={challenge.name} />
                                <div className={`challenge-status ${challenge.completed ? 'completed' : 'in-progress'}`}>
                                    {challenge.completed ? 'Completado' : 'En progreso'}
                                </div>
                            </div>
                        )}
                        <div className="challenge-header">
                            <h4>{challenge.name}</h4>
                            <span className="challenge-platform">{challenge.platform}</span>
                        </div>
                        <p className="challenge-description">{challenge.description}</p>
                        <div className="challenge-skills">
                            {challenge.skills.slice(0, 3).map((skill, idx) => (
                                <span key={idx} className="challenge-skill">{skill}</span>
                            ))}
                            {challenge.skills.length > 3 && (
                                <span className="challenge-skill-more">+{challenge.skills.length - 3}</span>
                            )}
                        </div>
                        <div className="challenge-difficulty">
                            Dificultad: <span className={`difficulty-${challenge.difficulty.toLowerCase()}`}>
                                {challenge.difficulty}
                            </span>
                        </div>
                        <button 
                            className="challenge-details-toggle"
                            onClick={() => toggleChallenge(challenge.id)}
                        >
                            {activeChallenge === challenge.id ? 'Ocultar detalles' : 'Ver detalles'}
                        </button>
                        
                        {activeChallenge === challenge.id && (
                            <div className="challenge-full-details">
                                <p>{challenge.details}</p>
                                <div className="challenge-full-skills">
                                    <h5>Habilidades aplicadas:</h5>
                                    <div className="skill-tags">
                                        {challenge.skills.map((skill, idx) => (
                                            <span key={idx} className="challenge-skill">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecurityChallenges;