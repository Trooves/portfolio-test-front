import React from 'react';

function ProjectsSection({ projects }) {
  return (
    <section className='project-section'>
      <h2 className='profile-title'>Projets</h2>
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <div key={index} className='project-card'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.technologies && (
              <div className='project-tech'>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className='skill-box'>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
