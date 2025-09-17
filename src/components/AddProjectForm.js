import React, { useState } from 'react';

function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const techArray = technologies
      .split(',')
      .map((tech) => tech.trim())
      .filter(Boolean);

    addProject({ title, description, technologies: techArray });
    setTitle('');
    setDescription('');
    setTechnologies('');
  };

  return (
    <section className="project-form-section">
      <h3 className="profile-title">Ajouter un projet</h3>
      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre du projet"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description du projet"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Technologies utilisées (séparées par des virgules)"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </section>
  );
}

export default AddProjectForm;
