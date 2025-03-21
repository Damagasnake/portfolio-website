import React, { useState, useEffect } from 'react';

const PersonalInfo = () => {
    // Preguntas y respuestas organizadas por categoría
    const [activeCategory, setActiveCategory] = useState('personal');
    
    const questionsAndAnswers = {
        personal: [
            {
                question: "¿Qué aspecto de tu personalidad te hace único como desarrollador?", 
                answer: "Mi creatividad y capacidad para resolver problemas de manera innovadora. Tengo una forma única de combinar el pensamiento lógico con el pensamiento lateral, lo que me permite encontrar soluciones que otros pueden pasar por alto."
            },
            {
                question: "¿Tienes alguna historia interesante sobre cómo entraste en la programación?",
                answer: "Todo comenzó cuando intentaba personalizar un blog. Lo que parecía una simple modificación de CSS despertó una curiosidad imparable, llevándome a aprender HTML, JavaScript y finalmente a estudiar desarrollo web formal. Lo que más me fascina es cómo la programación me permite crear soluciones reales a problemas cotidianos."
            }
        ],
        technical: [
            {
                question: "¿Qué lenguajes y tecnologías dominas?", 
                answer: "He desarrollado una sólida base en lenguaje C a través de los proyectos de 42, además de tener conocimientos de Python y JavaScript. Actualmente estoy expandiendo mis conocimientos hacia el desarrollo web y la ciberseguridad."
            },
            {
                question: "¿Qué área de la programación te interesa más?",
                answer: "Me interesa especialmente la ciberseguridad, con enfoque en pentesting. La combinación de seguridad y desarrollo me permite crear aplicaciones no solo funcionales sino también robustas frente a amenazas."
            }
        ],
        educational: [
            {
                question: "¿Qué formación complementaria has realizado?", 
                answer: "Además de mi formación en 42, he completado el CS50x de Harvard para fortalecer mis fundamentos en ciencias de la computación, y actualmente estoy especializándome en ciberseguridad a través de TryHackMe."
            },
            {
                question: "¿Qué proyectos has desarrollado en 42?",
                answer: "He completado varios proyectos fundamentales como Libft (una biblioteca en C con funcionalidades esenciales), ft_printf (reimplementación de printf), y minishell (una shell básica similar a bash). Estos proyectos me han permitido profundizar en la gestión de memoria, algoritmos y sistemas operativos."
            }
        ]
    };

    return (
        <div className="personal-info">
            <div className="info-tabs">
                <button 
                    className={`info-tab ${activeCategory === 'personal' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('personal')}
                >
                    Personal
                </button>
                <button 
                    className={`info-tab ${activeCategory === 'technical' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('technical')}
                >
                    Técnico
                </button>
                <button 
                    className={`info-tab ${activeCategory === 'educational' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('educational')}
                >
                    Educación
                </button>
            </div>

            <div className="info-content">
                {questionsAndAnswers[activeCategory].map((qa, index) => (
                    <div key={index} className="qa-item">
                        <h4 className="question">{qa.question}</h4>
                        <p className="answer">{qa.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TerminalSkills = () => {
    const [visible, setVisible] = useState("");
    const commands = [
        "$ ls -la skills/",
        "> mostrando habilidades...",
        "> C/C++: ████████░░ 80%",
        "> Pentesting: ███████░░ 70%", 
        "> React: ████████░░ 80%",
        "> Python: ██████░░░░ 60%",
        "$ cat about.txt",
        "> Apasionado por la seguridad informática y el desarrollo software.",
        "> Siempre en búsqueda de nuevos retos tecnológicos.",
        "$ nmap -sV portfolio",
        "> Escaneo completado: Encontradas habilidades en desarrollo web y ciberseguridad",
        "$ _"
    ];
    
    useEffect(() => {
        let currentCommand = 0;
        let isTyping = true;
        let terminalOutput = "";
        
        const typeCommand = () => {
            if (currentCommand < commands.length) {
                const timer = setTimeout(() => {
                    // En lugar de añadir al estado previo, construimos la cadena completa
                    terminalOutput += "\n" + commands[currentCommand];
                    setVisible(terminalOutput);
                    currentCommand++;
                    typeCommand();
                }, isTyping ? 600 : 200);
                
                isTyping = !isTyping;
                
                return () => clearTimeout(timer);
            }
        };
        
        typeCommand();
    }, []);
    
    return (
        <div className="terminal-container">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-btn close"></span>
                    <span className="terminal-btn minimize"></span>
                    <span className="terminal-btn maximize"></span>
                </div>
                <div className="terminal-title">bash ~ security-skills</div>
            </div>
            <div className="terminal-body">
                <pre>{visible}</pre>
            </div>
        </div>
    );
};

// Exportamos ambos componentes
export { PersonalInfo, TerminalSkills };