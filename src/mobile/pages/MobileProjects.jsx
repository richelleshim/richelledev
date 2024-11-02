// src/mobile/MobileProjects.js
import React from 'react';
import '../index.css';

const projects = [
  { title: 'Richflix', description: 'A Netflix-themed personal website.' },
  { title: 'Impact', description: 'A VR simulation to empower victims of domestic violence.' }
];

const MobileProjects = () => {
  return (
    <div className="mobile-container">
      <header className="mobile-header">
        <h1 className="mobile-title">Projects</h1>
      </header>
      <section className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MobileProjects;
