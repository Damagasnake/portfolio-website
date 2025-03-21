import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        // Check for user preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);
    
    const toggleDarkMode = () => {
        if (darkMode) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
    };

    return (
        <button 
            className={`dark-mode-toggle ${darkMode ? 'dark' : ''}`} 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
        >
            <span className="toggle-icon">
                {darkMode ? 
                    <i className="fas fa-sun"></i> : 
                    <i className="fas fa-moon"></i>
                }
            </span>
        </button>
    );
};

export default DarkModeToggle;