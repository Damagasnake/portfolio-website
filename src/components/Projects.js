import React, { useEffect, useState } from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState([]);
    
    useEffect(() => {
        setProjects(projectsData);
        setFilteredProjects(projectsData);
    }, []);
    
    const filterProjects = (category) => {
        setActiveFilter(category);
        
        if (category === 'all') {
            setFilteredProjects(projects);
            return;
        }
        
        const filtered = projects.filter(project => 
            project.categories && project.categories.includes(category)
        );
        setFilteredProjects(filtered);
    };

    return (
        <section id="projects">
            <h2>My Projects</h2>
            
            <div className="project-filters">
                <button 
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => filterProjects('all')}
                >
                    All
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
                    onClick={() => filterProjects('web')}
                >
                    Web
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
                    onClick={() => filterProjects('mobile')}
                >
                    Mobile
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'other' ? 'active' : ''}`}
                    onClick={() => filterProjects('other')}
                >
                    Other
                </button>
            </div>
            
            <div className="projects-list">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="project-item">
                        <div className="project-image">
                            <img src={project.image || "https://via.placeholder.com/300x200"} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            <div className="project-tech">
                                {project.technologies && project.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            
                            <div className="project-links">
                                <a href={project.repository} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> Code
                                </a>
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;