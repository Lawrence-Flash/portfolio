import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    title: 'AI Assistant',
    description: 'An intelligent cybersecurity assistant designed to automate threat analysis, process security logs, and demonstrate future AI-driven defense tools.',
    tech: ['React', 'Node.js', 'AI APIs', 'Python'],
    link: '#',
    category: 'Cybersecurity & AI'
  },
  {
    title: 'DealHunter',
    description: 'A personal project built to demonstrate advanced web scraping and automated analysis for discovering security vulnerabilities and software deals.',
    tech: ['Python', 'Selenium', 'Data Analysis'],
    link: '#',
    category: 'Security Tools'
  },
  {
    title: 'AI-Cybersecurity-Assistant',
    description: 'A comprehensive suite for automated threat detection and network monitoring using machine learning models.',
    tech: ['Python', 'TensorFlow', 'Network Analytics'],
    link: '#',
    category: 'Cybersecurity'
  },
  {
    title: 'alx-low_level_programming',
    description: 'A collection of low-level programming concepts and algorithmic challenges demonstrating strong foundational C and system architecture knowledge.',
    tech: ['C', 'Linux', 'Algorithms'],
    link: 'https://github.com/Lawrence-Flash/alx-low_level_programming',
    category: 'Systems Programming'
  },
  {
    title: 'learning-linux-command-line',
    description: 'A project dedicated to mastering Linux system administration, scripting, and command-line utilities for efficient workflow automation.',
    tech: ['Bash', 'Linux', 'Shell Scripting'],
    link: 'https://github.com/Lawrence-Flash/learning-linux-command-line',
    category: 'System Administration'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card glass" key={index}>
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="tech-badge" key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Repository &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
