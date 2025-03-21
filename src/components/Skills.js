import React, { useEffect, useRef } from 'react';

const Skills = () => {
    const skillsRef = useRef(null);

    // Actualiza el arreglo skillCategories con tus habilidades reales y niveles:
    const skillCategories = [
        {
            name: "Frontend",
            skills: [
                { name: "JavaScript", level: 90 }, // Ajusta estos niveles según tu experiencia real
                { name: "React", level: 85 },
                { name: "HTML/CSS", level: 95 },
                { name: "TypeScript", level: 80 }
            ]
        },
        {
            name: "Backend",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express", level: 80 },
                { name: "Python", level: 70 },
                { name: "SQL", level: 75 }
            ]
        },
        {
            name: "Tools & Others",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 65 },
                { name: "AWS", level: 60 },
                { name: "UI/UX Design", level: 75 }
            ]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const progressBars = document.querySelectorAll('.progress-bar');
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-level') + '%';
                        bar.style.width = width;
                        bar.style.opacity = 1;
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <section id="skills" className="skills" ref={skillsRef}>
            <h2>My Skills</h2>
            
            <div className="skills-container">
                {skillCategories.map((category, catIdx) => (
                    <div key={catIdx} className="skill-category">
                        <h3>{category.name}</h3>
                        <div className="skill-list">
                            {category.skills.map((skill, idx) => (
                                <div key={idx} className="skill-item-progress">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar" 
                                            data-level={skill.level}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;