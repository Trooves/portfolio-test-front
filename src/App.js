import React, { useState, useEffect } from 'react';
import ProfileSection from './components/ProfileSection';
import ProjectsSection from './components/ProjectsSection';
import AddProjectForm from './components/AddProjectForm';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Portfolio",
      description: "Site personnel pour montrer mes travaux.",
      technologies: ["React"]
    },
    {
      title: "Projet de jeu",
      description: "Projet de jeu web pour le CNAM.",
      technologies: ["React", "Phaser"]
    }
  ]);
  
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.02; // < modifier cette valeur pour l'effet de parallax
      const backgrounds = document.querySelectorAll('.background-eye, .background-img');

      backgrounds.forEach(bg => {
        bg.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isButtonClicked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isButtonClicked]);

  return (
    <div className="App">
      <div className='container'>
        <NavBar onButtonClick={handleButtonClick} />
        <div className='title-container'>
          <h1 className={`main-title ${isButtonClicked ? 'hide' : ''}`}>PORTFOLIO</h1>
        </div>
        <div className='background-container'>
          <div className={`background-eye ${isButtonClicked ? 'active' : ''}`}></div>
          <div className={`background-fade ${isButtonClicked ? 'active' : ''}`}></div>
          <div className={`background-img ${isButtonClicked ? 'active' : ''}`}></div>
        </div>
        
        <div className={`info-section ${isButtonClicked ? 'hide' : ''}`}>
          <div id="profile">
            <ProfileSection />
          </div>
          <div id="projects">
            <ProjectsSection projects={projects} />
          </div>
          <div id="add-project">
            <AddProjectForm addProject={addProject} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
