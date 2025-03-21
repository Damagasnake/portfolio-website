import React, { useState } from 'react';
import HackingSimulator from './HackingSimulator';

const HackingModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [hackingComplete, setHackingComplete] = useState(false);
    
    const handleComplete = () => {
        setHackingComplete(true);
    };
    
    return (
        <div className="hacking-section">
            <button 
                className="hack-button" 
                onClick={() => setShowModal(true)}
            >
                <i className="fas fa-terminal"></i> Acceder a información privilegiada
            </button>
            
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="modal-close-btn" 
                            onClick={() => setShowModal(false)}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        
                        {!hackingComplete ? (
                            <div className="modal-body">
                                <h3 className="modal-title">Terminal Restringida</h3>
                                <p className="modal-subtitle">Hackea el sistema para descubrir información oculta</p>
                                <HackingSimulator onComplete={handleComplete} />
                            </div>
                        ) : (
                            <div className="modal-body success">
                                <i className="fas fa-check-circle modal-success-icon"></i>
                                <h3 className="modal-title">Acceso Concedido</h3>
                                <p className="modal-message">Has demostrado tus habilidades. Acceso a información privilegiada permitido.</p>
                                <div className="secret-info">
                                    <h4>Habilidades avanzadas:</h4>
                                    <ul>
                                        <li>Desarrollo de exploits personalizados</li>
                                        <li>Análisis forense de sistemas comprometidos</li>
                                        <li>Auditoría de seguridad en aplicaciones web y móvil</li>
                                        <li>Implementación de defensas contra ataques 0-day</li>
                                        <li>Reverse engineering de aplicaciones</li>
                                    </ul>
                                </div>
                                <a href="https://tryhackme.com/p/tuusuario" target="_blank" rel="noopener noreferrer" className="profile-link">
                                    <i className="fas fa-external-link-alt"></i> Ver perfil de TryHackMe
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HackingModal;