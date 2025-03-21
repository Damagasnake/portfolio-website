import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} David Martinez. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/Damagasnake" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <div className="source-code">
                    <a href="https://github.com/Damagasnake/portfolio-website" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-code"></i> Ver código fuente
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;