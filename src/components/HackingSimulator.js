import React, { useState, useEffect, useRef } from 'react';

const HackingSimulator = ({ onComplete }) => {
    const [output, setOutput] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [showPrompt, setShowPrompt] = useState(true);
    const [complete, setComplete] = useState(false);
    const inputRef = useRef(null);
    
    const steps = [
        {
            prompt: '$ ',
            expectedInput: 'access --target portfolio --mode stealth',
            response: [
                'Iniciando acceso...',
                'Estableciendo conexión segura...',
                'Buscando puntos de entrada...',
                '[!] Se requiere autenticación. Introduce comando de acceso:'
            ],
        },
        {
            prompt: 'auth> ',
            expectedInput: 'bypass --method social-engineering',
            response: [
                'Analizando métodos de autenticación...',
                'Generando perfil de usuario objetivo...',
                'Aplicando técnicas de ingeniería social...',
                '[+] Autenticación bypass exitoso!',
                '[!] Se requiere comando para obtener información:'
            ],
        },
        {
            prompt: 'cmd> ',
            expectedInput: 'extract --data skills --level all',
            response: [
                'Extrayendo información...',
                'Descifrando datos protegidos...',
                '----------------- INFORMACIÓN CONFIDENCIAL -----------------',
                '• Especialización en seguridad ofensiva',
                '• Conocimientos avanzados en análisis de vulnerabilidades',
                '• Experiencia en desarrollo de exploits',
                '• Dominio de lenguajes: C, Python, JavaScript, Bash',
                '• Herramientas: Wireshark, Burp Suite, Metasploit, GDB',
                '• Competencias en OSINT e ingeniería social',
                '------------------------------------------------------------',
                '',
                '[√] Acceso completado con éxito!'
            ],
        },
    ];
    
    // Auto-focus en el input
    useEffect(() => {
        if (inputRef.current && !complete) {
            inputRef.current.focus();
        }
    }, [currentStep, complete]);
    
    // Procesar la entrada del usuario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const step = steps[currentStep];
        const newOutput = output + '\n' + step.prompt + inputValue;
        
        setOutput(newOutput);
        setInputValue('');
        setShowPrompt(false);
        
        // Mostrar respuesta con efecto de tipeo
        let fullResponse = '';
        let currentLine = 0;
        
        const responseInterval = setInterval(() => {
            if (currentLine < step.response.length) {
                fullResponse += '\n' + step.response[currentLine];
                setOutput(newOutput + fullResponse);
                currentLine++;
            } else {
                clearInterval(responseInterval);
                
                if (currentStep < steps.length - 1) {
                    setCurrentStep(currentStep + 1);
                    setShowPrompt(true);
                } else {
                    setComplete(true);
                    setTimeout(() => {
                        if (onComplete) onComplete();
                    }, 2000);
                }
            }
        }, 300);
    };
    
    return (
        <div className="hacking-simulator">
            <div className="hacking-terminal">
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <span className="terminal-btn close"></span>
                        <span className="terminal-btn minimize"></span>
                        <span className="terminal-btn maximize"></span>
                    </div>
                    <span className="terminal-title">SecureShell v2.4.1 - Acceso Restringido</span>
                </div>
                <div className="terminal-content">
                    <pre>{output}</pre>
                    {showPrompt && !complete && (
                        <form onSubmit={handleSubmit}>
                            <span className="prompt">{steps[currentStep].prompt}</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="terminal-input"
                                autoFocus
                                spellCheck="false"
                            />
                        </form>
                    )}
                </div>
                <div className="terminal-tooltip">
                    <span className="tooltip-icon">?</span>
                    <div className="tooltip-content">
                        <p>Comandos para el "hack":</p>
                        <ul>
                            <li>access --target portfolio --mode stealth</li>
                            <li>bypass --method social-engineering</li>
                            <li>extract --data skills --level all</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HackingSimulator;